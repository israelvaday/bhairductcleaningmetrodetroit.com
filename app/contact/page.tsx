import type { Metadata } from "next";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { BIZ } from "@/lib/business";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { ContactCTA } from "@/components/site/ContactCTA";
import { ServiceMap } from "@/components/site/ServiceMap";

export const metadata: Metadata = {
  title: `Contact — 24/7 Orange County Locksmith`,
  description:
    "Reach OH Lock & Key Solutions any time. Tap to call, WhatsApp, or request a free quote. BSIS #8663 — serving all of Orange County, CA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800 bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <Clock className="h-3.5 w-3.5" /> Open 24 / 7 · Dispatching now
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Get a <span className="text-brass-gradient">licensed locksmith</span>.
          </h1>
          <p className="mt-4 text-ink-200">
            Skip the small talk. Tap a button — we&apos;ll dispatch a BSIS-licensed technician anywhere in Orange County.
          </p>
          <div className="mt-7 flex justify-center">
            <ContactCTA size="lg" showEmail />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-6">
          <div className="rounded-3xl border border-brass-500/30 bg-brass-500/5 p-6">
            <div className="flex items-center gap-2 text-brass-300">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Licensed</span>
            </div>
            <p className="mt-3 text-sm text-ink-200">
              California BSIS #{BIZ.bsis}. Background-checked technicians, fully insured.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Hours</span>
            </div>
            <p className="mt-3 text-sm text-ink-200">
              Open <strong className="text-white">24 hours a day, 7 days a week</strong>. Real techs, never a robocall.
            </p>
          </div>
          <div className="rounded-3xl border border-ink-800 bg-ink-900/50 p-6">
            <div className="flex items-center gap-2 text-ink-100">
              <MapPin className="h-5 w-5 text-brass-400" />
              <span className="text-sm font-semibold uppercase tracking-wider">Service area</span>
            </div>
            <p className="mt-3 text-sm text-ink-200">
              All of Orange County, California — from Brea to San Clemente. Mobile dispatch from Santa Ana.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Office location</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {BIZ.address.full}
            </h2>
          </div>
          <ServiceMap query={BIZ.address.full} title={BIZ.name} height={460} />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">How to reach us</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Three fast ways to talk to a real Orange County locksmith.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Call</h3>
              <p className="mt-2 text-sm text-ink-200">
                The fastest way to reach a locksmith in Orange County is to call us directly. A real technician — not a call center — picks up day or night. Tell us where you are, what kind of lock you&apos;re dealing with, and we&apos;ll dispatch the nearest tech, typically with a 15–30 minute on-site arrival anywhere from Brea to San Clemente.
              </p>
              <a href={BIZ.phoneHref} className="mt-4 inline-block font-mono text-brass-300 underline-offset-4 hover:underline">
                {BIZ.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Text or WhatsApp</h3>
              <p className="mt-2 text-sm text-ink-200">
                Prefer to type? Send us a text or WhatsApp message with a photo of the lock, door, key, or safe in question. Pictures speed up the quote dramatically — we can usually tell you the exact part, the typical time on site, and a price range within a few minutes. Great for non-emergency work like rekeys, smart-lock installs, master-key planning, and storefront hardware upgrades.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Free written quote</h3>
              <p className="mt-2 text-sm text-ink-200">
                Want everything in writing first? Use our picture-driven quote tool. You&apos;ll answer a handful of plain-language questions, upload any photos that help, and get a clear written quote back — no hidden trip fees, no surprise add-ons, and no obligation. Most quotes go out the same day, usually within an hour during business hours.
              </p>
              <a href="/quote" className="mt-4 inline-block text-sm font-semibold text-brass-300 underline-offset-4 hover:underline">
                Start the quote →
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 text-sm text-ink-200">
            <p>
              <strong className="text-white">What we cover.</strong> OH Lock &amp; Key Solutions is a full-service mobile locksmith for residential, commercial, and automotive customers across all of Orange County. That includes 24-hour emergency lockouts, residential rekeys and new lock installs, commercial storefront and glass-door hardware, panic and exit devices, master-key system design, electronic access control, smart locks and keypad locks, safe service, and automotive key replacement including transponders and proximity fobs. Every technician is BSIS-licensed (#{BIZ.bsis}), background-checked, and insured.
            </p>
            <p className="mt-3">
              <strong className="text-white">Where we go.</strong> We serve every city and unincorporated neighborhood in Orange County — Santa Ana, Irvine, Anaheim, Huntington Beach, Newport Beach, Costa Mesa, Fullerton, Orange, Tustin, Garden Grove, Mission Viejo, Laguna Niguel, Laguna Beach, Lake Forest, Aliso Viejo, Rancho Santa Margarita, Yorba Linda, Brea, Placentia, Buena Park, La Habra, Cypress, Stanton, Westminster, Fountain Valley, Seal Beach, Los Alamitos, San Juan Capistrano, San Clemente, Dana Point, Laguna Hills, and the dozens of neighborhoods inside them.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="OC Locksmith Service" kind="service" />

      <section className="border-t border-ink-800 bg-aurora py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mt-3 text-ink-200">One tap reaches a real locksmith.</p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="lg" showEmail />
          </div>
        </div>
      </section>
    </>
  );
}
