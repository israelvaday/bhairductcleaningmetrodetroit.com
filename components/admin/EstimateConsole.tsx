"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  FileText, Lock, Plus, Send, Sparkles, Trash2, Download, Eye, History,
} from "lucide-react";
import { BIZ } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import {
  type EstimateDraft,
  type EstimateLineItem,
  type StoredEstimate,
  buildEstimatePdf,
  generateEstimate,
  listEstimates,
  sendEstimate,
} from "@/lib/estimate-api";

const TOKEN_KEY = "bh_airduct_estimate_admin_token";

function emptyItem(): EstimateLineItem {
  return { description: "", quantity: 1, unitPrice: 0 };
}

function blankDraft(): EstimateDraft {
  return {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    jobAddress: "",
    roughNotes: "",
    notes: "Estimate valid for 30 days. Scheduling subject to crew availability.",
    emailSubject: "",
    emailBody: "",
    scopeSummary: "",
    lineItems: [emptyItem()],
    tax: 0,
    discount: 0,
    estimateNumber: `EST-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-001`,
  };
}

function money(n: number) {
  return `$${(Number(n) || 0).toFixed(2)}`;
}

export function EstimateConsole() {
  const [token, setToken] = useState(() => {
    if (typeof window === "undefined") return "";
    return sessionStorage.getItem(TOKEN_KEY) || "";
  });
  const [tokenInput, setTokenInput] = useState("");
  const [draft, setDraft] = useState<EstimateDraft>(blankDraft);
  const [busy, setBusy] = useState<"generate" | "pdf" | "send" | "list" | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState("estimate.pdf");
  const [history, setHistory] = useState<StoredEstimate[]>([]);

  const subtotal = useMemo(
    () => draft.lineItems.reduce((sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.unitPrice) || 0), 0),
    [draft.lineItems]
  );
  const total = Math.max(0, subtotal + (Number(draft.tax) || 0) - (Number(draft.discount) || 0));

  async function refreshHistory(activeToken = token) {
    if (!activeToken) return;
    setBusy("list");
    try {
      const result = await listEstimates(activeToken);
      setHistory(result.estimates || []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not load history");
    } finally {
      setBusy(null);
    }
  }

  useEffect(() => {
    if (token) void refreshHistory(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function unlock(e: React.FormEvent) {
    e.preventDefault();
    const value = tokenInput.trim();
    if (!value) {
      toast.error("Enter the admin token");
      return;
    }
    sessionStorage.setItem(TOKEN_KEY, value);
    setToken(value);
    toast.success("Admin unlocked");
  }

  function lock() {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setTokenInput("");
    setHistory([]);
  }

  function updateItem(index: number, patch: Partial<EstimateLineItem>) {
    setDraft((d) => ({
      ...d,
      lineItems: d.lineItems.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    }));
  }

  function loadStored(item: StoredEstimate) {
    setDraft({
      clientName: item.clientName || "",
      clientEmail: item.clientEmail || "",
      clientPhone: item.clientPhone || "",
      jobAddress: item.jobAddress || "",
      roughNotes: "",
      notes: item.notes || "",
      emailSubject: item.emailSubject || "",
      emailBody: item.emailBody || "",
      scopeSummary: item.scopeSummary || "",
      lineItems: item.lineItems?.length ? item.lineItems : [emptyItem()],
      tax: item.tax || 0,
      discount: item.discount || 0,
      estimateNumber: item.estimateNumber || "",
    });
    toast.message(`Loaded ${item.estimateNumber}`);
  }

  async function onGenerate() {
    setBusy("generate");
    try {
      const result = await generateEstimate(token, draft);
      setDraft((d) => ({
        ...d,
        emailSubject: result.emailSubject,
        emailBody: result.emailBody,
        scopeSummary: result.scopeSummary,
        lineItems: result.lineItems.length ? result.lineItems : d.lineItems,
      }));
      toast.success("Draft polished — review before sending");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Generate failed");
    } finally {
      setBusy(null);
    }
  }

  async function onPreviewPdf() {
    setBusy("pdf");
    try {
      const result = await buildEstimatePdf(token, draft);
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      const bytes = Uint8Array.from(atob(result.pdfBase64), (c) => c.charCodeAt(0));
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      setPdfUrl(url);
      setPdfName(result.filename);
      toast.success("PDF ready to review");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "PDF failed");
    } finally {
      setBusy(null);
    }
  }

  async function onSend() {
    if (!draft.emailSubject || !draft.emailBody) {
      toast.error("Generate (or write) the email copy first");
      return;
    }
    setBusy("send");
    try {
      const result = await sendEstimate(token, draft);
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      const bytes = Uint8Array.from(atob(result.pdfBase64), (c) => c.charCodeAt(0));
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      setPdfUrl(url);
      setPdfName(result.filename);
      if (result.mode === "staff_fallback") {
        toast.message("Sent to staff inbox (client send blocked on this Cloudflare plan)", {
          description: `Forward to ${draft.clientEmail}. Saved to history + PDF stored.`,
        });
      } else {
        toast.success(`Estimate emailed to ${result.deliveredTo} · saved`);
      }
      await refreshHistory();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Send failed");
    } finally {
      setBusy(null);
    }
  }

  if (!token) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-brass-500/30 bg-ink-900/80 p-8">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brass-500/15 text-brass-300">
          <Lock className="h-5 w-5" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-extrabold">Estimate console</h1>
        <p className="mt-2 text-sm text-ink-300">
          {BIZ.name} staff only. Enter the admin token (optionally put Cloudflare Access on{" "}
          <code className="text-brass-300">/admin/*</code>).
        </p>
        <form onSubmit={unlock} className="mt-6 space-y-4">
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Admin token"
            className="h-12 w-full rounded-xl border border-ink-700 bg-ink-950 px-4 outline-none focus:border-brass-500"
          />
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Unlock
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brass-300">Admin · {BIZ.name}</p>
          <h1 className="font-display text-3xl font-extrabold">Estimate console</h1>
          <p className="mt-1 text-sm text-ink-300">
            Rough notes → OpenRouter polish → preview PDF → send from estimates@{BIZ.url.replace(/^https?:\/\//, "")}
            {" "}· stored in R2 for this domain
          </p>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={lock}>
          <Lock className="h-4 w-4" /> Lock
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-4 rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
          <h2 className="font-display text-lg font-bold">Client & job</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Client name" value={draft.clientName} onChange={(v) => setDraft({ ...draft, clientName: v })} required />
            <Field label="Client email" value={draft.clientEmail} onChange={(v) => setDraft({ ...draft, clientEmail: v })} type="email" required />
            <Field label="Client phone" value={draft.clientPhone} onChange={(v) => setDraft({ ...draft, clientPhone: v })} type="tel" />
            <Field label="Estimate #" value={draft.estimateNumber} onChange={(v) => setDraft({ ...draft, estimateNumber: v })} />
            <div className="sm:col-span-2">
              <Field label="Job address / city" value={draft.jobAddress} onChange={(v) => setDraft({ ...draft, jobAddress: v })} />
            </div>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Rough notes (shorthand for AI)</span>
            <textarea
              value={draft.roughNotes}
              onChange={(e) => setDraft({ ...draft, roughNotes: e.target.value })}
              rows={4}
              placeholder="e.g. whole-home duct clean + dryer vent, Royal Oak ranch ~1,800 sq ft, 1 furnace, pets"
              className="w-full rounded-xl border border-ink-700 bg-ink-950 p-3 outline-none focus:border-brass-500"
            />
          </label>
        </section>

        <section className="space-y-4 rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-lg font-bold">Line items</h2>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setDraft({ ...draft, lineItems: [...draft.lineItems, emptyItem()] })}
            >
              <Plus className="h-4 w-4" /> Add
            </Button>
          </div>
          <div className="space-y-3">
            {draft.lineItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_72px_96px_40px] items-end gap-2">
                <Field
                  label={index === 0 ? "Description" : undefined}
                  value={item.description}
                  onChange={(v) => updateItem(index, { description: v })}
                  placeholder="Whole-home air duct cleaning"
                />
                <Field
                  label={index === 0 ? "Qty" : undefined}
                  value={String(item.quantity)}
                  onChange={(v) => updateItem(index, { quantity: Number(v) || 0 })}
                  type="number"
                />
                <Field
                  label={index === 0 ? "Unit $" : undefined}
                  value={String(item.unitPrice)}
                  onChange={(v) => updateItem(index, { unitPrice: Number(v) || 0 })}
                  type="number"
                />
                <button
                  type="button"
                  aria-label="Remove line"
                  disabled={draft.lineItems.length === 1}
                  onClick={() =>
                    setDraft({ ...draft, lineItems: draft.lineItems.filter((_, i) => i !== index) })
                  }
                  className="mb-0.5 inline-flex h-12 w-10 items-center justify-center rounded-xl text-ink-400 hover:bg-ink-800 hover:text-ink-100 disabled:opacity-30"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tax $" value={String(draft.tax)} onChange={(v) => setDraft({ ...draft, tax: Number(v) || 0 })} type="number" />
            <Field label="Discount $" value={String(draft.discount)} onChange={(v) => setDraft({ ...draft, discount: Number(v) || 0 })} type="number" />
          </div>
          <div className="rounded-xl border border-ink-800 bg-ink-950/70 px-4 py-3 text-sm">
            <div className="flex justify-between text-ink-300"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="mt-1 flex justify-between font-bold text-brass-300"><span>Total</span><span>{money(total)}</span></div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="primary" size="lg" disabled={!!busy} onClick={onGenerate}>
          <Sparkles className="h-5 w-5" />
          {busy === "generate" ? "Generating…" : "Generate copy"}
        </Button>
        <Button type="button" variant="secondary" size="lg" disabled={!!busy} onClick={onPreviewPdf}>
          <Eye className="h-5 w-5" />
          {busy === "pdf" ? "Building…" : "Preview PDF"}
        </Button>
        <Button type="button" variant="primary" size="lg" disabled={!!busy} onClick={onSend}>
          <Send className="h-5 w-5" />
          {busy === "send" ? "Sending…" : "Send estimate"}
        </Button>
        <Button type="button" variant="ghost" size="lg" disabled={!!busy} onClick={() => refreshHistory()}>
          <History className="h-5 w-5" />
          {busy === "list" ? "Loading…" : "Refresh history"}
        </Button>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
          <h2 className="font-display text-lg font-bold">Customer email (editable)</h2>
          <Field label="Subject" value={draft.emailSubject} onChange={(v) => setDraft({ ...draft, emailSubject: v })} />
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Scope summary (PDF)</span>
            <textarea
              value={draft.scopeSummary}
              onChange={(e) => setDraft({ ...draft, scopeSummary: e.target.value })}
              rows={3}
              className="w-full rounded-xl border border-ink-700 bg-ink-950 p-3 outline-none focus:border-brass-500"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Email body</span>
            <textarea
              value={draft.emailBody}
              onChange={(e) => setDraft({ ...draft, emailBody: e.target.value })}
              rows={10}
              className="w-full rounded-xl border border-ink-700 bg-ink-950 p-3 outline-none focus:border-brass-500"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Footer notes</span>
            <textarea
              value={draft.notes}
              onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
              rows={2}
              className="w-full rounded-xl border border-ink-700 bg-ink-950 p-3 outline-none focus:border-brass-500"
            />
          </label>
        </div>

        <div className="space-y-3 rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold">
              <FileText className="h-5 w-5 text-brass-300" /> PDF preview
            </h2>
            {pdfUrl && (
              <a
                href={pdfUrl}
                download={pdfName}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brass-300 hover:text-brass-200"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </a>
            )}
          </div>
          {pdfUrl ? (
            <iframe title="Estimate PDF" src={pdfUrl} className="h-[32rem] w-full rounded-xl border border-ink-800 bg-white" />
          ) : (
            <div className="flex h-[32rem] items-center justify-center rounded-xl border border-dashed border-ink-700 text-sm text-ink-400">
              Generate copy, then preview PDF before sending.
            </div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
        <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold">
          <History className="h-5 w-5 text-brass-300" /> Sent history (this domain)
        </h2>
        {history.length === 0 ? (
          <p className="mt-3 text-sm text-ink-400">No estimates stored yet. Send one to create a record.</p>
        ) : (
          <ul className="mt-4 divide-y divide-ink-800">
            {history.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm">
                <div>
                  <div className="font-semibold text-ink-50">
                    {item.estimateNumber} · {item.clientName}
                  </div>
                  <div className="text-ink-400">
                    {item.clientEmail} · {money(item.total)} · {item.status}
                    {item.sentAt ? ` · ${new Date(item.sentAt).toLocaleString()}` : ""}
                  </div>
                </div>
                <Button type="button" variant="secondary" size="sm" onClick={() => loadStored(item)}>
                  Load
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      {label ? (
        <span className="mb-1.5 block text-sm font-semibold text-ink-100">
          {label}
          {required ? <span className="text-brass-400"> *</span> : null}
        </span>
      ) : null}
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-ink-700 bg-ink-950 px-3 outline-none focus:border-brass-500"
      />
    </label>
  );
}
