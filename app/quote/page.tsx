import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

export const metadata: Metadata = {
  title: `Free Quote`,
  description: "Get a free written garage door quote from BH Garage Door Metro Detroit. Picture-driven step-by-step. Upload photos of your door or opener. Licensed & Insured.",
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
              The picture-driven quote wizard above is the fastest way to get an accurate, written estimate from a real Metro Detroit garage door company. Instead of a long form, it shows you small images and chips — you just tap what matches your situation. Most people finish in under two minutes. There&apos;s nothing to download, no account to create, and no obligation to book.
            </p>
            <p className="mt-3">
              You can attach photos at any step — a picture of your door, the spring shaft above it, the opener unit on the ceiling, or the sticker on the back of the door. Photos let us identify the exact hardware, skip back-and-forth questions, and give you a tighter price range up front. If a photo isn&apos;t enough to be certain, we&apos;ll tell you in the reply rather than padding the quote with hedges.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What we quote</h2>
            <p className="mt-3">
              We can quote every service we offer: 24-hour emergency repairs (stuck doors, off-track doors, snapped springs), torsion and extension spring replacement, opener installation and repair (LiftMaster, Chamberlain, Genie, and others), cable, roller, and track work, panel and section replacement, new door installation in steel, insulated, carriage-house, and glass styles, commercial rolling steel and sectional doors, preventive maintenance tune-ups, and smart opener and keypad installs. If you&apos;re not sure which category fits, pick the closest one — we&apos;ll route it internally.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Pricing & expectations</h2>
            <p className="mt-3">
              Our quotes are flat-rate where possible (spring replacements, opener installs, cable and roller work, tune-ups) and clearly itemized where they need to be (new door installations, commercial doors, multi-door jobs). We don&apos;t use the bait-and-switch tactics you see in garage door ads — the number we write down is the number you pay. If something on-site changes the scope, we tell you before we touch a tool, and you can decline and walk away.
            </p>
            <p className="mt-3">
              You can also skip the wizard entirely and just text us a photo at {BIZ.phone}. Either path reaches the same dispatcher. Real human, {BIZ.bsis.toLowerCase()} company.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Garage Door Quote" kind="service" />    </>
  );
}
