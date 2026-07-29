import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

export const metadata: Metadata = {
  title: `Free Quote`,
  description: "Get a free written air duct cleaning quote from BH Air Duct Cleaning Metro Detroit. Picture-driven step-by-step. Upload photos of your vents or dryer. Licensed & Insured.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <section className="relative bg-aurora py-14 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Free Quote</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            One question at a <span className="text-brass-gradient">time</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Tap pictures. Upload anything. We&apos;ll text back a written quote — fast.
          </p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <QuoteWizard />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How the quote works</h2>
            <p className="mt-3">
              The picture-driven quote wizard above is the fastest way to get an accurate, written estimate from a real Metro Detroit air duct cleaning company. Instead of a long form, it shows you small images and chips — you just tap what matches your situation. Most people finish in under two minutes. There&apos;s nothing to download, no account to create, and no obligation to book.
            </p>
            <p className="mt-3">
              You can attach photos at any step — a picture of a dusty register, your return grille, the furnace and its filter slot, or the dryer vent hood outside. Photos let us count your system correctly, skip back-and-forth questions, and give you a tighter price range up front. If a photo isn&apos;t enough to be certain, we&apos;ll tell you in the reply rather than padding the quote with hedges.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What we quote</h2>
            <p className="mt-3">
              We can quote every service we offer: whole-home air duct cleaning, dryer vent cleaning (including long condo runs and roof terminations), furnace and AC coil cleaning, duct sanitizing and deodorizing, camera duct inspections, HVAC restoration after smoke or water events, post-construction cleanups, commercial HVAC cleaning, and scheduled maintenance plans. If you&apos;re not sure which category fits, pick the closest one — we&apos;ll route it internally.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Pricing & expectations</h2>
            <p className="mt-3">
              Our quotes are flat-rate where possible (whole-home duct cleaning, dryer vent cleaning, sanitizing add-ons, camera inspections) and clearly itemized where they need to be (multi-furnace homes, commercial buildings, restoration work). We don&apos;t use the &quot;$99 whole house&quot; bait-and-switch you see in duct cleaning ads — the number we write down is the number you pay. If something on-site changes the scope, we tell you before we touch a tool, and you can decline and walk away.
            </p>
            <p className="mt-3">
              You can also skip the wizard entirely and just text us a photo at {BIZ.phone}. Either path reaches the same dispatcher. Real human, {BIZ.bsis.toLowerCase()} company.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Air Duct Cleaning Quote" kind="service" />    </>
  );
}
