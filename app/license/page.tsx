import type { Metadata } from "next";
import { Building2, Phone, Mail } from "lucide-react";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Business Details",
  description: `Questions about ${BIZ.name} as a business? Call, text or email us and we will answer them directly.`,
  robots: { index: false, follow: true },
  alternates: { canonical: `${BIZ.url}/license` },
};

export default function LicensePage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <Building2 className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Business details
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Have a question about {BIZ.name} as a business? Ask us for the details you need and we
            will answer you directly.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-brass-500/30 bg-ink-900/50 p-8">
            <h2 className="font-display text-xl font-bold text-white">How to ask us</h2>
            <ul className="mt-4 space-y-3 text-ink-200">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>
                  Call or text{" "}
                  <a href={BIZ.phoneHref} className="text-brass-300 hover:text-brass-200">
                    {BIZ.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>
                  Email{" "}
                  <a href={BIZ.emailHref} className="break-all text-brass-300 hover:text-brass-200">
                    {BIZ.email}
                  </a>
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-400">
              Before you hire any air duct cleaning company in Metro Detroit, ask for a company name
              that matches the invoice and a written scope of the work.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
