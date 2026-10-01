import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

export const metadata: Metadata = {
  title: `Send Us a Message`,
  description: "Send BH Air Duct Cleaning Metro Detroit a message. Tap through a few pictures, leave your details, and we will call or text you back.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <section className="relative bg-aurora py-14 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Contact Us</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Send us a <span className="text-brass-gradient">message</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Tap a few pictures, leave your details, and we&apos;ll call or text you back.
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
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How the contact form works</h2>
            <p className="mt-3">
              The picture-driven contact form above is the fastest way to tell a real Metro Detroit air duct cleaning company what you need. Instead of a long form, it shows you small images and chips, and you just tap what matches your situation. Most people finish in under two minutes. There&apos;s nothing to download, no account to create, and no obligation to book.
            </p>
            <p className="mt-3">
              Photos help too: a picture of a dusty register, your return grille, the furnace and its filter slot, or the dryer vent hood outside. Text them to {BIZ.phone} after you send the form. Photos let us understand your system, skip back-and-forth questions, and send the right crew and equipment.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What you can ask about</h2>
            <p className="mt-3">
              You can reach us about every service we offer: whole-home air duct cleaning, dryer vent cleaning (including long condo runs and roof terminations), furnace and AC coil cleaning, duct sanitizing and deodorizing, camera duct inspections, HVAC restoration after smoke or water events, post-construction cleanups, commercial HVAC cleaning, and scheduled maintenance plans. If you&apos;re not sure which category fits, pick the closest one — we&apos;ll route it internally.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What drives the cost</h2>
            <p className="mt-3">
              Every job is different. What a cleaning costs depends on the size of the home, how many vents and furnaces it has, how much buildup there is, and how easy the ductwork is to reach. Multi-furnace homes, commercial buildings and restoration work are scoped in writing. We don&apos;t use the teaser-price bait-and-switch you see in duct cleaning ads. If something on-site changes the scope, we tell you before we touch a tool, and you can decline and walk away. Call {BIZ.phone} for a price on your job.
            </p>
            <p className="mt-3">
              You can also skip the form entirely and just text us a photo at {BIZ.phone}. Either path reaches the same dispatcher. Real human, local company.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Air Duct Cleaning" kind="service" />    </>
  );
}
