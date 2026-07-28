import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Licensed & Insured — BH Garage Door Metro Detroit",
  description: `${BIZ.name} is a licensed and insured garage door company serving Metro Detroit. Credentials, insurance, and what to ask any garage door company before you hire.`,
  alternates: { canonical: `${BIZ.url}/license` },
};

export default function LicensePage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <ShieldCheck className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Licensed & Insured
          </h1>
          <p className="mt-3 font-mono text-brass-300">{BIZ.licenseId}</p>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Every garage door service we provide across Metro Detroit is performed by
            background-checked technicians carrying general liability insurance and
            proper trade credentials. We quote in writing before work begins.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">What we carry</h2>
            <ul className="mt-4 space-y-3 text-ink-200">
              {[
                "Licensed garage door contracting in Michigan",
                "General liability insurance for residential and commercial jobs",
                "Background-checked technicians — no call-center middle layer",
                "Written quotes before dispatch on standard jobs",
                "Repair-first diagnostics — we never replace what we can fix",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-400">
              Before you hire any garage door company in Metro Detroit, ask for proof of insurance,
              a company name that matches the invoice, and a written estimate. Bait-pricing
              dispatch operations are common in this trade — credentials matter.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
