import type { Metadata } from "next";
import { MapPin, Clock, ShieldCheck, Phone, MessageCircle, Mail, Smartphone } from "lucide-react";
import { BIZ } from "@/lib/business";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { ContactCTA } from "@/components/site/ContactCTA";
import { ServiceMap } from "@/components/site/ServiceMap";

export const metadata: Metadata = {
  title: `Contact — Metro Detroit Garage Door Company`,
  description:
    "Reach BH Garage Door Metro Detroit. Tap to call, WhatsApp, or request a free quote. Licensed & Insured — serving all of Metro Detroit, MI.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800 bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <Clock className="h-3.5 w-3.5" /> Call or text for a quote
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Get a <span className="text-brass-gradient">garage door tech</span>.
          </h1>
          <p className="mt-4 text-ink-200">
            Skip the small talk. Tap a button — we&apos;ll dispatch a Licensed & insured technician anywhere in Metro Detroit.
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
              {BIZ.bsis} for garage door work in Michigan. Background-checked technicians.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Hours</span>
            </div>
            <p className="mt-3 text-sm text-ink-200">
              <strong className="text-white">{BIZ.hoursSummary}</strong>. Real techs answer during open hours — never a robocall.{" "}
              <a href="/hours" className="text-emerald-300 underline hover:text-emerald-200">
                Full schedule →
              </a>
            </p>
          </div>
          <div className="rounded-3xl border border-ink-800 bg-ink-900/50 p-6">
            <div className="flex items-center gap-2 text-ink-100">
              <MapPin className="h-5 w-5 text-brass-400" />
              <span className="text-sm font-semibold uppercase tracking-wider">Service area</span>
            </div>
            <p className="mt-3 text-sm text-ink-200">
              All of Metro Detroit, Michigan — Wayne, Oakland, and Macomb counties. Mobile dispatch from Detroit.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Where we&apos;re based</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {BIZ.address.full}
            </h2>
          </div>
          <ServiceMap query={BIZ.address.full} title={BIZ.name} height={460} />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">How to reach us</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Four fast ways to talk to a real Metro Detroit garage door tech.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Call</h3>
              <p className="mt-2 text-sm text-ink-200">
                The fastest way to reach a garage door tech in Metro Detroit. A real technician — not a call center — picks up day or night.
              </p>
              <a
                href={BIZ.phoneHref}
                className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-sm text-brass-300 hover:text-brass-200"
              >
                <Phone className="h-4 w-4" /> {BIZ.phone}
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Text or WhatsApp</h3>
              <p className="mt-2 text-sm text-ink-200">
                Prefer to type? Send a text or WhatsApp with a photo of the door, the spring shaft, or the opener — pictures speed up the quote dramatically.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <a
                  href={BIZ.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
                <a
                  href={BIZ.smsHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brass-500/40 bg-brass-500/10 px-3 py-1.5 text-xs font-semibold text-brass-300 hover:bg-brass-500/20"
                >
                  <Smartphone className="h-3.5 w-3.5" /> Text us
                </a>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Email</h3>
              <p className="mt-2 text-sm text-ink-200">
                Need details in writing or want to send documents? Email us directly — we reply same-day during business hours.
              </p>
              <a
                href={BIZ.emailHref}
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm text-brass-300 hover:text-brass-200 break-all"
              >
                <Mail className="h-4 w-4 shrink-0" /> {BIZ.email}
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-display text-xl font-bold text-white">Free written quote</h3>
              <p className="mt-2 text-sm text-ink-200">
                Want everything in writing first? Use our picture-driven quote tool — clear written quote back, no hidden trip fees, no obligation.
              </p>
              <a
                href="/quote"
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-brass-300 hover:text-brass-200"
              >
                Start the quote →
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 text-sm text-ink-200">
            <p>
              <strong className="text-white">What we cover.</strong> BH Garage Door Metro Detroit is a full-service garage door company for residential and commercial customers across all of Metro Detroit. That includes 24-hour emergency repairs, torsion and extension spring replacement, opener installation and repair, cable, roller, and track work, panel and section replacement, new door installation, commercial rolling steel and sectional doors, preventive maintenance tune-ups, and smart opener and keypad installs. Every technician is background-checked, and the company is {BIZ.bsis}.
            </p>
            <p className="mt-3">
              <strong className="text-white">Where we go.</strong> We serve every city and unincorporated neighborhood in Metro Detroit — Detroit, Warren, Sterling Heights, Troy, Dearborn, Livonia, Royal Oak, Southfield, Farmington Hills, Pontiac, Canton, Westland, Taylor, Redford, Allen Park, Lincoln Park, Wyandotte, Ferndale, Birmingham, Rochester Hills, Shelby Township, Clinton Township, Macomb, St. Clair Shores, Novi, Northville, Plymouth, Ann Arbor, and every city in Wayne, Oakland, and Macomb counties, and the dozens of neighborhoods inside them.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="Garage Door Service" kind="service" />

      <section className="border-t border-ink-800 bg-aurora py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mt-3 text-ink-200">One tap reaches a real garage door tech.</p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="lg" showEmail />
          </div>
        </div>
      </section>
    </>
  );
}
