import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { BIZ } from "@/lib/business";
import { ContactCTA } from "@/components/site/ContactCTA";
import { HoursSchedule } from "@/components/site/HoursSchedule";
import { HoursStatusBanner } from "@/components/site/HoursStatusBanner";

export const metadata: Metadata = {
  title: "Hours — Garage Door Service Schedule",
  description: `${BIZ.name} — ${BIZ.hoursSummary}. Eastern Time. Serving all of Metro Detroit, MI.`,
  alternates: { canonical: "/hours" },
};

export default function HoursPage() {
  return (
    <section className="relative overflow-hidden bg-aurora py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <HoursStatusBanner />

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Our <span className="text-brass-gradient">hours</span>
        </h1>
        <p className="mt-4 text-xl text-ink-100">{BIZ.hoursSummary}</p>
        <p className="mt-2 text-ink-300">
          All times Eastern (Detroit). Real techs answer the phone during open hours — never a robocall.
        </p>

        <div className="mt-10">
          <HoursSchedule />
        </div>

        <p className="mt-6 text-sm text-ink-400">
          Friday we close at 6:00 PM. Saturday we are closed. Every other day we are open around the clock.
        </p>

        <div className="mt-10 flex justify-center">
          <ContactCTA size="lg" />
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-xs text-ink-400">
          <ShieldCheck className="h-3.5 w-3.5 text-brass-400" />
          Michigan garage door company · {BIZ.bsis}
        </p>
      </div>
    </section>
  );
}
