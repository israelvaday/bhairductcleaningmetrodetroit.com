/** Cloudflare Worker — admin estimate generate / PDF / send (keys stay server-side). */
export const ESTIMATE_API_URL = (
  process.env.NEXT_PUBLIC_ESTIMATE_API_URL ||
  "https://bhairductcleaningmetrodetroit.com/api/estimate"
).replace(/\/$/, "");

export type EstimateLineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type EstimateDraft = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  jobAddress: string;
  roughNotes: string;
  notes: string;
  emailSubject: string;
  emailBody: string;
  scopeSummary: string;
  lineItems: EstimateLineItem[];
  tax: number;
  discount: number;
  estimateNumber: string;
};

export type StoredEstimate = EstimateDraft & {
  id: string;
  subtotal: number;
  total: number;
  pdfKey?: string | null;
  sendMode?: string | null;
  deliveredTo?: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  sentAt?: string | null;
};

async function estimateFetch<T>(
  path: string,
  token: string,
  init: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${ESTIMATE_API_URL}/${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || `Request failed (${res.status})`);
  }
  return data as T;
}

export function generateEstimate(token: string, body: EstimateDraft) {
  return estimateFetch<{
    ok: true;
    emailSubject: string;
    emailBody: string;
    scopeSummary: string;
    lineItems: EstimateLineItem[];
  }>("generate", token, { method: "POST", body: JSON.stringify(body) });
}

export function buildEstimatePdf(token: string, body: EstimateDraft) {
  return estimateFetch<{ ok: true; filename: string; pdfBase64: string }>("pdf", token, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function sendEstimate(token: string, body: EstimateDraft) {
  return estimateFetch<{
    ok: true;
    mode: "client" | "staff_fallback";
    deliveredTo: string;
    filename: string;
    pdfBase64: string;
    id: string;
    stored: boolean;
  }>("send", token, { method: "POST", body: JSON.stringify(body) });
}

export function listEstimates(token: string) {
  return estimateFetch<{ ok: true; estimates: StoredEstimate[] }>("list", token, {
    method: "GET",
  });
}
