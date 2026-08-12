import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

function money(n) {
  const v = Number(n) || 0;
  return `$${v.toFixed(2)}`;
}

function lineTotal(item) {
  const qty = Number(item.quantity) || 0;
  const price = Number(item.unitPrice) || 0;
  return qty * price;
}

/** Build a branded estimate PDF; returns Uint8Array. */
export async function buildEstimatePdf(env, payload) {
  const doc = await PDFDocument.create();
  const page = doc.addPage([612, 792]); // Letter
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  const brand = env.BRAND_NAME || "BH Air Duct Cleaning Metro Detroit";
  const profession = env.BRAND_PROFESSION || "Air Duct";
  const phone = env.PHONE || "";
  const siteUrl = env.SITE_URL || "";

  const ink = rgb(0.04, 0.05, 0.07);
  const muted = rgb(0.35, 0.4, 0.48);
  const brass = rgb(0.71, 0.55, 0.25);
  const line = rgb(0.85, 0.87, 0.9);

  let y = 742;
  const left = 48;
  const right = 564;

  page.drawText(brand, { x: left, y, size: 16, font: fontBold, color: ink });
  y -= 16;
  page.drawText(`${profession} estimate · Licensed & insured · Metro Detroit, MI`, {
    x: left,
    y,
    size: 9,
    font,
    color: muted,
  });
  y -= 8;
  page.drawRectangle({ x: left, y, width: right - left, height: 2, color: brass });
  y -= 28;

  page.drawText("WRITTEN ESTIMATE", {
    x: left,
    y,
    size: 11,
    font: fontBold,
    color: brass,
  });
  y -= 18;

  const estimateNo = payload.estimateNumber || `EST-${Date.now().toString(36).toUpperCase()}`;
  const issued = payload.issuedAt || new Date().toLocaleDateString("en-US", {
    timeZone: "America/Detroit",
    dateStyle: "medium",
  });

  page.drawText(`Estimate #: ${estimateNo}`, { x: left, y, size: 10, font, color: ink });
  page.drawText(`Date: ${issued}`, { x: 360, y, size: 10, font, color: ink });
  y -= 22;

  page.drawText("Prepared for", { x: left, y, size: 9, font: fontBold, color: muted });
  y -= 14;
  const clientLines = [
    payload.clientName || "—",
    payload.clientEmail || "",
    payload.clientPhone || "",
    payload.jobAddress || "",
  ].filter(Boolean);
  for (const row of clientLines) {
    page.drawText(String(row).slice(0, 80), { x: left, y, size: 10, font, color: ink });
    y -= 13;
  }
  y -= 10;

  if (payload.scopeSummary) {
    page.drawText("Scope", { x: left, y, size: 9, font: fontBold, color: muted });
    y -= 14;
    const scope = wrapText(String(payload.scopeSummary), 88);
    for (const row of scope.slice(0, 8)) {
      page.drawText(row, { x: left, y, size: 10, font, color: ink });
      y -= 13;
    }
    y -= 8;
  }

  page.drawRectangle({ x: left, y: y - 4, width: right - left, height: 20, color: rgb(0.96, 0.94, 0.9) });
  page.drawText("Description", { x: left + 6, y, size: 9, font: fontBold, color: ink });
  page.drawText("Qty", { x: 360, y, size: 9, font: fontBold, color: ink });
  page.drawText("Unit", { x: 410, y, size: 9, font: fontBold, color: ink });
  page.drawText("Total", { x: 480, y, size: 9, font: fontBold, color: ink });
  y -= 22;

  const items = Array.isArray(payload.lineItems) ? payload.lineItems : [];
  let subtotal = 0;
  for (const item of items) {
    if (y < 120) break;
    const total = lineTotal(item);
    subtotal += total;
    const desc = wrapText(String(item.description || "Item"), 48);
    page.drawText(desc[0] || "Item", { x: left + 6, y, size: 9, font, color: ink });
    page.drawText(String(item.quantity ?? ""), { x: 360, y, size: 9, font, color: ink });
    page.drawText(money(item.unitPrice), { x: 410, y, size: 9, font, color: ink });
    page.drawText(money(total), { x: 480, y, size: 9, font, color: ink });
    y -= 14;
    for (const extra of desc.slice(1)) {
      page.drawText(extra, { x: left + 6, y, size: 9, font, color: muted });
      y -= 12;
    }
    page.drawLine({
      start: { x: left, y: y + 6 },
      end: { x: right, y: y + 6 },
      thickness: 0.5,
      color: line,
    });
    y -= 4;
  }

  y -= 10;
  const tax = Number(payload.tax) || 0;
  const discount = Number(payload.discount) || 0;
  const grand = Math.max(0, subtotal + tax - discount);

  const totals = [
    ["Subtotal", money(subtotal)],
    ...(discount ? [["Discount", `-${money(discount)}`]] : []),
    ...(tax ? [["Tax", money(tax)]] : []),
    ["Total", money(grand)],
  ];
  for (const [label, value] of totals) {
    const bold = label === "Total";
    page.drawText(label, {
      x: 400,
      y,
      size: bold ? 11 : 10,
      font: bold ? fontBold : font,
      color: ink,
    });
    page.drawText(value, {
      x: 480,
      y,
      size: bold ? 11 : 10,
      font: bold ? fontBold : font,
      color: ink,
    });
    y -= 16;
  }

  y -= 12;
  if (payload.notes) {
    page.drawText("Notes", { x: left, y, size: 9, font: fontBold, color: muted });
    y -= 14;
    for (const row of wrapText(String(payload.notes), 88).slice(0, 6)) {
      page.drawText(row, { x: left, y, size: 9, font, color: ink });
      y -= 12;
    }
  }

  page.drawText(
    `Questions? Call ${phone} · ${siteUrl.replace(/^https?:\/\//, "")}`,
    { x: left, y: 48, size: 8, font, color: muted }
  );
  page.drawText("This estimate is valid for 30 days unless otherwise noted.", {
    x: left,
    y: 34,
    size: 8,
    font,
    color: muted,
  });

  return doc.save();
}

function wrapText(text, maxChars) {
  const words = String(text || "").replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}
