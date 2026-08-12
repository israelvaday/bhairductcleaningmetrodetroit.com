import { buildEstimatePdf } from "./pdf.js";
import {
  getEstimate,
  getPdfBase64,
  listEstimateSummaries,
  saveEstimate,
} from "./storage.js";

function corsHeaders(origin, siteOrigin) {
  const allow = origin === siteOrigin ? origin : siteOrigin;
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function json(data, status, headers) {
  return Response.json(data, { status, headers });
}

function parseList(raw) {
  return String(raw || "")
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function unauthorized(headers) {
  return json({ error: "Unauthorized" }, 401, headers);
}

function requireAdmin(request, env) {
  const expected = (env.ADMIN_TOKEN || "").trim();
  if (!expected) return false;
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  return token && token === expected;
}

function normalizeItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => ({
      description: String(item.description || "").trim(),
      quantity: Number(item.quantity) || 0,
      unitPrice: Number(item.unitPrice) || 0,
    }))
    .filter((item) => item.description);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function polishWithOpenRouter(env, payload) {
  const key = (env.OPENROUTER_API_KEY || "").trim();
  if (!key) throw new Error("OPENROUTER_API_KEY is not set on the Worker");

  const brand = env.BRAND_NAME || "BH Air Duct Cleaning Metro Detroit";
  const profession = env.BRAND_PROFESSION || "Air Duct";
  const model = env.OPENROUTER_MODEL || "google/gemini-2.5-flash";

  const system = `You write polished customer-facing ${profession.toLowerCase()} cleaning estimates for ${brand} (Metro Detroit).
Return ONLY valid JSON with keys:
emailSubject (string — start with "Air Duct estimate" so staff can identify the brand),
emailBody (string, warm professional plain text, 2-4 short paragraphs, sign off with brand name and phone),
scopeSummary (string, 1-3 sentences describing the work),
lineItems (array of { description, quantity, unitPrice } — polish descriptions, keep numbers unless clearly wrong).
Do not invent prices. Keep quantity and unitPrice from the input. No markdown.`;

  const user = JSON.stringify({
    clientName: payload.clientName,
    clientEmail: payload.clientEmail,
    clientPhone: payload.clientPhone,
    jobAddress: payload.jobAddress,
    roughNotes: payload.roughNotes,
    lineItems: payload.lineItems,
    tax: payload.tax,
    discount: payload.discount,
    phone: env.PHONE,
  });

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "HTTP-Referer": env.SITE_URL || "https://bhairductcleaningmetrodetroit.com",
      "X-Title": `${brand} Estimate Console`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `OpenRouter error ${res.status}`);
  }

  const content = data?.choices?.[0]?.message?.content || "{}";
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    const match = String(content).match(/\{[\s\S]*\}/);
    parsed = match ? JSON.parse(match[0]) : {};
  }

  const polishedItems = normalizeItems(parsed.lineItems);
  return {
    emailSubject:
      String(parsed.emailSubject || "").trim() ||
      `Air Duct estimate — ${brand}`,
    emailBody: String(parsed.emailBody || "").trim(),
    scopeSummary: String(parsed.scopeSummary || "").trim(),
    lineItems: polishedItems.length ? polishedItems : payload.lineItems,
  };
}

function estimatePayloadFromBody(body) {
  return {
    clientName: String(body.clientName || "").trim(),
    clientEmail: String(body.clientEmail || "").trim(),
    clientPhone: String(body.clientPhone || "").trim(),
    jobAddress: String(body.jobAddress || "").trim(),
    roughNotes: String(body.roughNotes || "").trim(),
    notes: String(body.notes || "").trim(),
    emailSubject: String(body.emailSubject || "").trim(),
    emailBody: String(body.emailBody || "").trim(),
    scopeSummary: String(body.scopeSummary || "").trim(),
    lineItems: normalizeItems(body.lineItems),
    tax: Number(body.tax) || 0,
    discount: Number(body.discount) || 0,
    estimateNumber: String(body.estimateNumber || "").trim(),
  };
}

export default {
  async fetch(request, env) {
    const siteOrigin = env.SITE_ORIGIN || "https://bhairductcleaningmetrodetroit.com";
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin, siteOrigin);
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (!requireAdmin(request, env)) {
      return unauthorized(headers);
    }

    try {
      if (request.method === "GET" && (path.endsWith("/api/estimate/list") || path.endsWith("/api/estimate/list/"))) {
        const limit = Math.min(Number(url.searchParams.get("limit")) || 50, 100);
        const estimates = await listEstimateSummaries(env, limit);
        return json({ ok: true, estimates }, 200, headers);
      }

      const getMatch = path.match(/\/api\/estimate\/([0-9a-f-]{36})$/i);
      if (request.method === "GET" && getMatch) {
        const estimate = await getEstimate(env, getMatch[1]);
        if (!estimate) return json({ error: "Not found" }, 404, headers);
        const pdfBase64 = await getPdfBase64(env, estimate.pdfKey, bytesToBase64);
        return json({ ok: true, estimate, pdfBase64 }, 200, headers);
      }

      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405, headers });
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON" }, 400, headers);
      }

      const payload = estimatePayloadFromBody(body);

      if (path.endsWith("/api/estimate/generate") || path.endsWith("/api/estimate/generate/")) {
        if (!payload.clientName || !payload.lineItems.length) {
          return json({ error: "clientName and at least one line item required" }, 400, headers);
        }
        const polished = await polishWithOpenRouter(env, payload);
        return json({ ok: true, ...polished }, 200, headers);
      }

      if (path.endsWith("/api/estimate/pdf") || path.endsWith("/api/estimate/pdf/")) {
        if (!payload.clientName || !payload.lineItems.length) {
          return json({ error: "clientName and line items required" }, 400, headers);
        }
        const pdfBytes = await buildEstimatePdf(env, payload);
        const filename = `${(payload.estimateNumber || "estimate").replace(/\s+/g, "-")}.pdf`;
        return json(
          { ok: true, filename, pdfBase64: bytesToBase64(pdfBytes) },
          200,
          headers
        );
      }

      if (path.endsWith("/api/estimate/send") || path.endsWith("/api/estimate/send/")) {
        if (!payload.clientName || !payload.clientEmail || !payload.lineItems.length) {
          return json({ error: "clientName, clientEmail, and line items required" }, 400, headers);
        }
        if (!payload.emailSubject || !payload.emailBody) {
          return json({ error: "emailSubject and emailBody required — generate/preview first" }, 400, headers);
        }

        const pdfBytes = await buildEstimatePdf(env, payload);
        const pdfBase64 = bytesToBase64(pdfBytes);
        const filename = `${(payload.estimateNumber || "estimate").replace(/\s+/g, "-")}.pdf`;
        const profession = env.BRAND_PROFESSION || "Air Duct";
        const brand = env.BRAND_NAME || "BH Air Duct Cleaning Metro Detroit";
        const fromEmail = env.FROM_EMAIL || "estimates@bhairductcleaningmetrodetroit.com";
        const fromName = env.FROM_NAME || brand;
        const staffBcc = parseList(env.STAFF_BCC);

        const html = `<!doctype html><html><body style="font-family:Segoe UI,Arial,sans-serif;color:#111;line-height:1.5;padding:24px;">
          <p style="white-space:pre-wrap;">${escapeHtml(payload.emailBody)}</p>
          <p style="margin-top:24px;color:#666;font-size:12px;">${escapeHtml(brand)} · ${escapeHtml(env.PHONE || "")} · ${escapeHtml(profession)} estimate attached</p>
        </body></html>`;

        const subject = payload.emailSubject.startsWith("[")
          ? payload.emailSubject
          : /air duct/i.test(payload.emailSubject)
            ? payload.emailSubject
            : `[${profession}] ${payload.emailSubject}`;

        let deliveredTo = payload.clientEmail;
        let mode = "client";

        try {
          await env.EMAIL.send({
            from: { email: fromEmail, name: fromName },
            to: payload.clientEmail,
            bcc: staffBcc.length ? staffBcc : undefined,
            replyTo: fromEmail,
            subject,
            text: payload.emailBody,
            html,
            attachments: [
              {
                content: pdfBase64,
                filename,
                type: "application/pdf",
                disposition: "attachment",
              },
            ],
          });
        } catch (err) {
          const code = err?.code || "";
          const message = err?.message || String(err);
          if (
            code === "E_RECIPIENT_NOT_ALLOWED" ||
            /verified|not allowed|destination/i.test(message)
          ) {
            mode = "staff_fallback";
            deliveredTo = staffBcc[0] || "";
            if (!deliveredTo) throw err;
            await env.EMAIL.send({
              from: { email: fromEmail, name: fromName },
              to: staffBcc,
              replyTo: payload.clientEmail || fromEmail,
              subject: `[${profession}] SEND TO CLIENT: ${payload.clientEmail} — ${payload.emailSubject}`,
              text: [
                "Cloudflare could not send directly to the client from this account.",
                "Forward this estimate to the client, or enable Cloudflare Email Sending.",
                "",
                `Client: ${payload.clientName} <${payload.clientEmail}>`,
                `Phone: ${payload.clientPhone || "—"}`,
                "",
                "--- Email body ---",
                payload.emailBody,
              ].join("\n"),
              html,
              attachments: [
                {
                  content: pdfBase64,
                  filename,
                  type: "application/pdf",
                  disposition: "attachment",
                },
              ],
            });
          } else {
            throw err;
          }
        }

        const saved = await saveEstimate(env, payload, {
          pdfBytes,
          status: "sent",
          sendMode: mode,
          deliveredTo,
          sentAt: new Date().toISOString(),
        });

        return json(
          {
            ok: true,
            mode,
            deliveredTo,
            filename,
            pdfBase64,
            id: saved.id,
            stored: true,
          },
          200,
          headers
        );
      }

      return json({ error: "Unknown estimate route" }, 404, headers);
    } catch (error) {
      console.error("[estimate-api]", error);
      return json(
        { ok: false, error: error?.message || "Server error" },
        502,
        headers
      );
    }
  },
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
