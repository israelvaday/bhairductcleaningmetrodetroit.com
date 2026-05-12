import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { LICENSE_PHOTO } from "@/lib/photos";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: `California BSIS Locksmith License #${BIZ.bsis}`,
  description: `OH Lock & Key Solutions is a California BSIS-licensed locksmith (#${BIZ.bsis}) serving Orange County. View our verified license.`,
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
            California BSIS Licensed
          </h1>
          <p className="mt-3 font-mono text-brass-300">License #{BIZ.bsis}</p>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Every locksmith service we provide is performed under our active California
            Bureau of Security & Investigative Services (BSIS) locksmith license.
            Verify us anytime on the official BSIS license lookup.
          </p>
        </div>
      </section>
      {LICENSE_PHOTO && (
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="overflow-hidden rounded-2xl border border-brass-500/30 bg-ink-900/50 p-2">
              <Image
                src={LICENSE_PHOTO.src}
                alt={LICENSE_PHOTO.alt}
                width={LICENSE_PHOTO.width}
                height={LICENSE_PHOTO.height}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full rounded-xl"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink-400">
              Verify at <a className="text-brass-300 underline" href="https://search.dca.ca.gov/" target="_blank" rel="noopener noreferrer">search.dca.ca.gov</a>
            </p>
          </div>
        </section>
      )}
      <FinalCTA />
    </>
  );
}
