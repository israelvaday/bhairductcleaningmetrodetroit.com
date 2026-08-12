"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Check, Send,
  Zap, CalendarClock, Calendar, Phone, ShieldCheck, FileText,
} from "lucide-react";
import { toast } from "sonner";
import { BIZ } from "@/lib/business";
import { QUOTE_API_URL } from "@/lib/quote-api";
import { Button } from "@/components/ui/Button";

type ServiceKey =
  | "residential" | "commercial" | "dryer-vent" | "hvac-restoration"
  | "furnace-coil" | "sanitization" | "duct-inspection" | "post-construction"
  | "maintenance" | "emergency";

type PropertyKey = "property-home" | "property-business" | "property-condo" | "property-other";

type Urgency = "now" | "today" | "this-week" | "scheduling";

const SERVICES: { key: ServiceKey; label: string; sub: string }[] = [
  { key: "residential",       label: "Air duct cleaning",   sub: "Whole-home source removal" },
  { key: "dryer-vent",        label: "Dryer vent cleaning", sub: "Lint removal, fire safety" },
  { key: "commercial",        label: "Commercial HVAC",     sub: "Office, retail, industrial" },
  { key: "furnace-coil",      label: "Furnace & coils",     sub: "Blower wheel, A-coil clean" },
  { key: "sanitization",      label: "Sanitizing",          sub: "Odor & antimicrobial fog" },
  { key: "duct-inspection",   label: "Camera inspection",   sub: "See inside your ducts" },
  { key: "post-construction", label: "Post-construction",   sub: "Renovation dust removal" },
  { key: "hvac-restoration",  label: "HVAC restoration",    sub: "Smoke, flood, deep clean" },
  { key: "maintenance",       label: "Maintenance plan",    sub: "Scheduled cleanings" },
];

const PROPERTIES: { key: PropertyKey; label: string; sub: string }[] = [
  { key: "property-home",     label: "Home",       sub: "Single-family house" },
  { key: "property-business", label: "Business",   sub: "Office, retail, warehouse" },
  { key: "property-condo",    label: "Condo / apt", sub: "Multi-unit, long vent runs" },
  { key: "property-other",    label: "Other",      sub: "Rental, HOA, new build…" },
];

const URGENCIES: { key: Urgency; label: string; sub: string; Icon: typeof Zap }[] = [
  { key: "now",        label: "Right now",   sub: "Dryer overheating / no airflow", Icon: Zap },
  { key: "today",      label: "Today",       sub: "Within a few hours",      Icon: CalendarClock },
  { key: "this-week",  label: "This week",   sub: "Flexible timing",         Icon: Calendar },
  { key: "scheduling", label: "Just pricing", sub: "Quote only, no rush",    Icon: FileText },
];

const STEP_LABELS = ["Service", "Property", "Urgency", "Details", "Contact"] as const;

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<ServiceKey | "">("");
  const [property, setProperty] = useState<PropertyKey | "">("");
  const [urgency, setUrgency] = useState<Urgency | "">("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, [step]);

  const progress = Math.round(((step + 1) / STEP_LABELS.length) * 100);

  const canAdvance = useMemo(() => {
    switch (step) {
      case 0: return !!service;
      case 1: return !!property;
      case 2: return !!urgency;
      case 3: return true;
      case 4: return !!name && !!phone && !!location;
      default: return false;
    }
  }, [step, service, property, urgency, name, phone, location]);

  function next() {
    if (!canAdvance) return;
    if (step < STEP_LABELS.length - 1) setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function submit() {
    if (!name || !phone || !service || !location) {
      toast.error("Please complete name, phone, location, and service.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        name,
        phone,
        email,
        location,
        service: SERVICES.find((s) => s.key === service)?.label || service,
        property: PROPERTIES.find((p) => p.key === property)?.label || property,
        urgency: URGENCIES.find((u) => u.key === urgency)?.label || urgency,
        message,
      };

      const res = await fetch(QUOTE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Server error");
      toast.success("Quote request sent — we will be in touch shortly.");
      window.location.href = "/thank-you";
    } catch {
      toast.error("Could not send. Please tap Call to reach us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-3xl border border-brass-500/30 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-5 shadow-2xl shadow-black/40 md:p-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "linear-gradient(rgba(201,162,74,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,74,.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Header / progress */}
      <div className="relative flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brass-500/40 bg-ink-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brass-300">
          <ShieldCheck className="h-3 w-3" /> Licensed & insured
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
          Step {step + 1} of {STEP_LABELS.length} — {STEP_LABELS[step]}
        </span>
        <span className="ml-auto text-[11px] font-bold text-brass-300">{progress}%</span>
      </div>
      <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brass-600 via-brass-400 to-brass-300"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      {/* Step body */}
      <div className="relative mt-6 min-h-[24rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <>
                <h2 className="font-display text-2xl font-extrabold md:text-3xl">What do you need?</h2>
                <p className="mt-1 text-sm text-ink-300">Tap the picture closest to your job.</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => { setService(s.key); setTimeout(next, 150); }}
                      className={`group relative overflow-hidden rounded-2xl border text-left transition focus:outline-none ${service === s.key ? "border-brass-400 ring-2 ring-brass-500/40" : "border-ink-800 hover:border-brass-500/50"}`}
                    >
                      <div className="relative aspect-square w-full bg-ink-950">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/quote/${s.key}.png`}
                          alt={s.label}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover transition group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                        {service === s.key && (
                          <div className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brass-500 text-ink-950">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div className="px-3 py-2.5">
                        <div className="font-display text-sm font-extrabold text-ink-50">{s.label}</div>
                        <div className="text-[11px] text-ink-400">{s.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="font-display text-2xl font-extrabold md:text-3xl">Where is it?</h2>
                <p className="mt-1 text-sm text-ink-300">Pick the property type.</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PROPERTIES.map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => { setProperty(p.key); setTimeout(next, 150); }}
                      className={`group relative overflow-hidden rounded-2xl border text-left transition focus:outline-none ${property === p.key ? "border-brass-400 ring-2 ring-brass-500/40" : "border-ink-800 hover:border-brass-500/50"}`}
                    >
                      <div className="relative aspect-square w-full bg-ink-950">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/quote/${p.key}.png`}
                          alt={p.label}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover transition group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                        {property === p.key && (
                          <div className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brass-500 text-ink-950">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div className="px-3 py-2.5">
                        <div className="font-display text-sm font-extrabold text-ink-50">{p.label}</div>
                        <div className="text-[11px] text-ink-400">{p.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-display text-2xl font-extrabold md:text-3xl">How soon?</h2>
                <p className="mt-1 text-sm text-ink-300">Helps dispatch prioritize your job.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {URGENCIES.map((u) => {
                    const Icon = u.Icon;
                    const active = urgency === u.key;
                    return (
                      <button
                        key={u.key}
                        type="button"
                        onClick={() => { setUrgency(u.key); setTimeout(next, 150); }}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${active ? "border-brass-400 bg-brass-500/10 ring-2 ring-brass-500/40" : "border-ink-800 hover:border-brass-500/50"}`}
                      >
                        <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ${active ? "bg-brass-500 text-ink-950" : "bg-ink-800 text-brass-300"}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-display text-base font-extrabold text-ink-50">{u.label}</span>
                          <span className="block text-xs text-ink-400" dangerouslySetInnerHTML={{ __html: u.sub }} />
                        </span>
                        {active && <Check className="ml-auto h-5 w-5 text-brass-400" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-display text-2xl font-extrabold md:text-3xl">Anything we should know?</h2>
                <p className="mt-1 text-sm text-ink-300">Home size, number of furnaces &amp; vents, pets, last cleaning date… optional.</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="mt-5 w-full rounded-xl border border-ink-800 bg-ink-950 p-4 outline-none focus:border-brass-500"
                  placeholder="e.g. 1,800 sq ft ranch in Royal Oak, one furnace, two cats — dust keeps coming back and the dryer takes two cycles."
                />
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-display text-2xl font-extrabold md:text-3xl">Where do we send the quote?</h2>
                <p className="mt-1 text-sm text-ink-300">We&apos;ll text or call you back fast.</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" value={name} onChange={setName} required />
                  <Field label="Phone" value={phone} onChange={setPhone} required type="tel" />
                  <Field label="Email (optional)" value={email} onChange={setEmail} type="email" />
                  <Field label="City / ZIP" value={location} onChange={setLocation} required placeholder="Detroit, 48201" />
                </div>

                <div className="mt-6 rounded-2xl border border-ink-800 bg-ink-950/60 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brass-300">Summary</div>
                  <ul className="mt-2 grid gap-1 text-sm text-ink-200 sm:grid-cols-2">
                    <li><span className="text-ink-400">Service:</span> {SERVICES.find((s) => s.key === service)?.label || "—"}</li>
                    <li><span className="text-ink-400">Property:</span> {PROPERTIES.find((p) => p.key === property)?.label || "—"}</li>
                    <li><span className="text-ink-400">Urgency:</span> {URGENCIES.find((u) => u.key === urgency)?.label || "—"}</li>
                    <li><span className="text-ink-400">City:</span> {location || "—"}</li>
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="md"
          onClick={back}
          disabled={step === 0 || submitting}
          aria-label="Previous step"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        {step < STEP_LABELS.length - 1 ? (
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={next}
            disabled={!canAdvance}
            className="ml-auto"
          >
            Continue <ArrowRight className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={submit}
            disabled={!canAdvance || submitting}
            className="ml-auto"
          >
            <Send className="h-5 w-5" />
            {submitting ? "Sending…" : "Send quote request"}
          </Button>
        )}
        <a
          href={BIZ.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border border-ink-800 px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink-300 hover:border-brass-500/50 hover:text-brass-300"
        >
          <Phone className="h-3.5 w-3.5" /> {BIZ.phone}
        </a>
      </div>
      <p className="relative mt-3 text-[11px] text-ink-400">
        By submitting, you agree we may text or call you about your request.
      </p>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder, required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-100">{label}{required && <span className="text-brass-400"> *</span>}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-ink-800 bg-ink-950 px-4 outline-none focus:border-brass-500"
      />
    </label>
  );
}
