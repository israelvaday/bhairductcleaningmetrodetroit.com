function moneyTotals(lineItems, tax, discount) {
  const subtotal = lineItems.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0),
    0
  );
  const total = Math.max(0, subtotal + (Number(tax) || 0) - (Number(discount) || 0));
  return { subtotal, total };
}

function recordKey(id) {
  return `records/${id}.json`;
}

function pdfObjectKey(id, filename) {
  return `pdfs/${id}/${filename}`;
}

export async function saveEstimate(env, payload, extra = {}) {
  if (!env.PDFS) throw new Error("R2 binding PDFS is not configured");

  const id = extra.id || crypto.randomUUID();
  const now = new Date().toISOString();
  const { subtotal, total } = moneyTotals(payload.lineItems, payload.tax, payload.discount);
  const filename = `${(payload.estimateNumber || "estimate").replace(/\s+/g, "-")}.pdf`;
  const pdfKey = extra.pdfKey || (extra.pdfBytes ? pdfObjectKey(id, filename) : null);

  if (extra.pdfBytes && pdfKey) {
    await env.PDFS.put(pdfKey, extra.pdfBytes, {
      httpMetadata: { contentType: "application/pdf" },
    });
  }

  const record = {
    id,
    estimateNumber: payload.estimateNumber || id.slice(0, 8).toUpperCase(),
    clientName: payload.clientName,
    clientEmail: payload.clientEmail || "",
    clientPhone: payload.clientPhone || "",
    jobAddress: payload.jobAddress || "",
    emailSubject: payload.emailSubject || "",
    emailBody: payload.emailBody || "",
    scopeSummary: payload.scopeSummary || "",
    notes: payload.notes || "",
    lineItems: payload.lineItems || [],
    tax: payload.tax || 0,
    discount: payload.discount || 0,
    subtotal,
    total,
    pdfKey,
    sendMode: extra.sendMode || null,
    deliveredTo: extra.deliveredTo || null,
    status: extra.status || "draft",
    createdAt: extra.createdAt || now,
    updatedAt: now,
    sentAt: extra.sentAt || null,
  };

  await env.PDFS.put(recordKey(id), JSON.stringify(record, null, 2), {
    httpMetadata: { contentType: "application/json" },
  });

  // Lightweight index for listing (newest first)
  let index = [];
  const indexObj = await env.PDFS.get("records/_index.json");
  if (indexObj) {
    try {
      index = JSON.parse(await indexObj.text());
      if (!Array.isArray(index)) index = [];
    } catch {
      index = [];
    }
  }
  index = [
    {
      id: record.id,
      estimateNumber: record.estimateNumber,
      clientName: record.clientName,
      clientEmail: record.clientEmail,
      total: record.total,
      status: record.status,
      sentAt: record.sentAt,
      createdAt: record.createdAt,
    },
    ...index.filter((row) => row.id !== record.id),
  ].slice(0, 200);

  await env.PDFS.put("records/_index.json", JSON.stringify(index, null, 2), {
    httpMetadata: { contentType: "application/json" },
  });

  return record;
}

export async function listEstimateSummaries(env, limit = 50) {
  if (!env.PDFS) return [];
  const indexObj = await env.PDFS.get("records/_index.json");
  if (!indexObj) return [];
  try {
    const index = JSON.parse(await indexObj.text());
    return (Array.isArray(index) ? index : []).slice(0, limit);
  } catch {
    return [];
  }
}

export async function getEstimate(env, id) {
  if (!env.PDFS) return null;
  const obj = await env.PDFS.get(recordKey(id));
  if (!obj) return null;
  try {
    return JSON.parse(await obj.text());
  } catch {
    return null;
  }
}

export async function getPdfBase64(env, pdfKey, bytesToBase64) {
  if (!env.PDFS || !pdfKey) return null;
  const obj = await env.PDFS.get(pdfKey);
  if (!obj) return null;
  const bytes = new Uint8Array(await obj.arrayBuffer());
  return bytesToBase64(bytes);
}
