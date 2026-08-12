const BIZ_NAME = "BH Air Duct Cleaning Metro Detroit";
const SITE_URL = "https://bhairductcleaningmetrodetroit.com";

function corsHeaders(origin, siteOrigin) {
  const allow = origin === siteOrigin ? origin : siteOrigin;
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toTelHref(raw) {
  const trimmed = String(raw || "").trim();
  const digits = trimmed.replace(/[^0-9]/g, "");
  if (!digits) return "";
  if (trimmed.startsWith("+")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

function urgencyTone(u) {
  const key = String(u || "").toLowerCase();
  if (key.includes("now") || key.includes("emergency")) return { bg: "#3a1010", fg: "#ff6b6b" };
  if (key.includes("today") || key.includes("hour")) return { bg: "#3a2410", fg: "#ffa94d" };
  if (key.includes("week") || key.includes("schedule")) return { bg: "#102a3a", fg: "#5cc4ff" };
  return { bg: "#1a2240", fg: "#e6c266" };
}

function buildText(fields) {
  return [
    `New quote request — ${BIZ_NAME}`,
    "",
    `Name:     ${fields.name}`,
    `Phone:    ${fields.phone}`,
    `Email:    ${fields.email || "—"}`,
    `Location: ${fields.location || "—"}`,
    `Service:  ${fields.service}`,
    `Property: ${fields.property || "—"}`,
    `Urgency:  ${fields.urgency || "—"}`,
    "",
    "Details:",
    fields.message || "—",
  ].join("\n");
}

function buildHtml(fields) {
  const name = escapeHtml(fields.name);
  const phone = escapeHtml(fields.phone);
  const phoneHref = toTelHref(fields.phone);
  const email = escapeHtml(fields.email);
  const location = escapeHtml(fields.location || "—");
  const service = escapeHtml(fields.service);
  const property = escapeHtml(fields.property || "—");
  const urgency = escapeHtml(fields.urgency || "");
  const message = escapeHtml(fields.message || "—").replace(/\n/g, "<br>");
  const tone = urgencyTone(fields.urgency);
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Detroit",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New quote request</title>
</head>
<body style="margin:0;padding:0;background:#0b1220;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;color:#e6ecf5;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#0b1220">
    New quote — ${service} — ${name} — ${phone}
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0b1220;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:#0f172a;border:1px solid #1f2a44;border-radius:20px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#0b1220 0%,#1a2548 60%,#3a2a10 100%);padding:28px 28px 22px 28px;border-bottom:1px solid #b58a3a33;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="vertical-align:middle">
                    <div style="display:inline-block;background:#0b1220;border:1.5px solid #b58a3a;border-radius:14px;padding:8px 12px;">
                      <span style="font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#e6c266;letter-spacing:0.5px">BH</span>
                      <span style="display:inline-block;width:6px;height:6px;background:#e6c266;border-radius:50%;margin:0 6px;vertical-align:middle"></span>
                      <span style="font-family:Georgia,serif;font-size:13px;font-weight:bold;color:#e6c266;letter-spacing:1.5px">Air Duct Cleaning</span>
                    </div>
                  </td>
                  <td align="right" style="vertical-align:middle">
                    <span style="display:inline-block;background:${tone.bg};color:${tone.fg};border:1px solid ${tone.fg}55;border-radius:999px;padding:6px 12px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">${urgency || "Lead"}</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:18px 0 4px 0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:800;">New quote request</h1>
              <p style="margin:0;color:#9aa6c1;font-size:13px;">Submitted ${submittedAt} • Metro Detroit, MI</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0b1220;border:1px solid #1f2a44;border-radius:14px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;color:#b58a3a;letter-spacing:1.5px;text-transform:uppercase">Service requested</p>
                    <p style="margin:0;font-size:20px;font-weight:800;color:#ffffff;line-height:1.3">${service}</p>
                    <p style="margin:6px 0 0 0;font-size:13px;color:#9aa6c1">${property} • ${location}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 4px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td width="50%" style="padding:10px 8px 10px 0;vertical-align:top">
                    <div style="background:#0b1220;border:1px solid #1f2a44;border-radius:12px;padding:14px 16px">
                      <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;color:#b58a3a;letter-spacing:1.5px;text-transform:uppercase">Customer</p>
                      <p style="margin:0;font-size:16px;font-weight:700;color:#ffffff">${name}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding:10px 0 10px 8px;vertical-align:top">
                    <div style="background:#0b1220;border:1px solid #1f2a44;border-radius:12px;padding:14px 16px">
                      <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;color:#b58a3a;letter-spacing:1.5px;text-transform:uppercase">Phone</p>
                      <a href="tel:${phoneHref}" style="text-decoration:none;color:#e6c266;font-size:16px;font-weight:700;font-family:'Courier New',monospace">${phone}</a>
                    </div>
                  </td>
                </tr>
                ${
                  email
                    ? `<tr><td colspan="2" style="padding:0 0 10px 0">
                        <div style="background:#0b1220;border:1px solid #1f2a44;border-radius:12px;padding:14px 16px">
                          <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;color:#b58a3a;letter-spacing:1.5px;text-transform:uppercase">Email</p>
                          <a href="mailto:${email}" style="text-decoration:none;color:#9ec5ff;font-size:14px">${email}</a>
                        </div>
                      </td></tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 16px 28px;">
              <div style="background:#0b1220;border:1px solid #1f2a44;border-radius:12px;padding:16px 18px">
                <p style="margin:0 0 8px 0;font-size:10px;font-weight:700;color:#b58a3a;letter-spacing:1.5px;text-transform:uppercase">Details from customer</p>
                <p style="margin:0;font-size:14px;line-height:1.55;color:#e6ecf5;white-space:pre-line">${message}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 24px 28px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:0 6px">
                    <a href="tel:${phoneHref}" style="display:inline-block;background:#e6c266;color:#0b1220;text-decoration:none;font-weight:800;font-size:14px;padding:14px 22px;border-radius:12px;">Call ${name.split(" ")[0]}</a>
                  </td>
                  <td style="padding:0 6px">
                    <a href="sms:${phoneHref}" style="display:inline-block;background:transparent;color:#e6c266;text-decoration:none;font-weight:700;font-size:14px;padding:13px 20px;border-radius:12px;border:1.5px solid #e6c266">Text</a>
                  </td>
                  ${
                    email
                      ? `<td style="padding:0 6px">
                          <a href="mailto:${email}?subject=Re:%20Your%20BH%20Air%20Duct%20Cleaning%20quote" style="display:inline-block;background:transparent;color:#e6c266;text-decoration:none;font-weight:700;font-size:14px;padding:13px 20px;border-radius:12px;border:1.5px solid #e6c266">Reply</a>
                        </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px;border-top:1px solid #1f2a44;background:#0a1020">
              <p style="margin:0;font-size:11px;color:#6b7794;line-height:1.6">
                <b style="color:#9aa6c1">${BIZ_NAME}</b><br>
                Air duct, dryer vent &amp; HVAC cleaning • Licensed &amp; Insured • Metro Detroit, MI<br>
                <a href="${SITE_URL}" style="color:#b58a3a;text-decoration:none">bhairductcleaningmetrodetroit.com</a>
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:14px 0 0 0;font-size:11px;color:#4a5475">Auto-sent from your website. Reply to this email to respond to the customer directly.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendTo(binding, from, to, payload) {
  await binding.send({
    from,
    to,
    replyTo: payload.email || undefined,
    subject: `Air Duct quote — ${payload.service} — ${payload.name}${payload.urgency ? " (" + payload.urgency + ")" : ""}`,
    text: buildText(payload),
    html: buildHtml(payload),
  });
}

export default {
  async fetch(request, env) {
    const siteOrigin = env.SITE_ORIGIN || SITE_URL;
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin, siteOrigin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers });
    }

    let fields;
    try {
      fields = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400, headers });
    }

    const name = String(fields.name || "").trim();
    const phone = String(fields.phone || "").trim();
    const location = String(fields.location || "").trim();
    const service = String(fields.service || "").trim();

    if (!name || !phone || !service || !location) {
      return Response.json({ error: "Missing required fields" }, { status: 400, headers });
    }

    const payload = {
      name,
      phone,
      email: String(fields.email || "").trim(),
      location,
      service,
      property: String(fields.property || "").trim(),
      urgency: String(fields.urgency || "").trim(),
      message: String(fields.message || "").trim(),
    };

    const primaryTo = env.QUOTE_TO_PRIMARY || "israelvaday97@gmail.com";
    const secondaryTo = env.QUOTE_TO_SECONDARY || "oren.siyonov@gmail.com";
    const from = env.FROM_EMAIL || `quotes@bhairductcleaningmetrodetroit.com`;

    const results = await Promise.allSettled([
      sendTo(env.EMAIL_PRIMARY, from, primaryTo, payload),
      sendTo(env.EMAIL_SECONDARY, from, secondaryTo, payload),
    ]);

    const failures = results
      .map((result, index) => {
        if (result.status === "fulfilled") return null;
        const to = index === 0 ? primaryTo : secondaryTo;
        const detail = result.reason?.message || String(result.reason);
        console.error("[quote-api]", to, detail);
        return { to, detail };
      })
      .filter(Boolean);

    if (failures.length === results.length) {
      return Response.json(
        { ok: false, error: "Email failed", failures },
        { status: 502, headers }
      );
    }

    return Response.json(
      { ok: true, partial: failures.length > 0 ? failures : undefined },
      { headers }
    );
  },
};
