import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { PHOTOS } from "@/lib/photos";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { GarageGlossary } from "@/components/site/GarageGlossary";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: `Gallery`,
  description: "Real Metro Detroit garage door jobs by BH Garage Door Metro Detroit — installations, spring replacements, openers, and commercial overhead doors.",
  alternates: { canonical: "/gallery" },
};

const BRAND_KEEP = new Set([
  "branding-generated-service-van-three-quarter-front",
  "branding-generated-service-van-side-magnet-daylight",
  "branding-generated-business-card-mockup-photo",
  "branding-generated-social-tile-services-grid-real",
]);

const CATEGORIES: { key: string; label: string; match: (id: string, cat: string, kind: string) => boolean }[] = [
  { key: "all",            label: "All",           match: (id, __, k) => k !== "trust" && (k !== "brand" || BRAND_KEEP.has(id)) },
  { key: "hero",           label: "Featured",      match: (_, __, k) => k === "hero" },
  { key: "installation",   label: "Installations", match: (_, c) => c === "installation" },
  { key: "springs",        label: "Springs",       match: (_, c) => c === "springs" },
  { key: "openers",        label: "Openers",       match: (_, c) => c === "openers" },
  { key: "cables-rollers", label: "Cables & Rollers", match: (_, c) => c === "cables-rollers" },
  { key: "repair",         label: "Repairs",       match: (_, c) => c === "repair" || c === "panels" },
  { key: "emergency",      label: "Emergency",     match: (_, c) => c === "emergency" },
  { key: "maintenance",    label: "Maintenance",   match: (_, c) => c === "maintenance" },
  { key: "commercial",     label: "Commercial",    match: (_, c) => c === "commercial" },
  { key: "smart-openers",  label: "Smart Openers", match: (_, c) => c === "smart-openers" },
  { key: "brand",          label: "Brand",         match: (id) => BRAND_KEEP.has(id) },
];

export default function GalleryPage() {
  const groups = CATEGORIES.map((c) => ({
    key: c.key,
    label: c.label,
    photos: PHOTOS.filter((p) => c.match(p.id, p.category, p.kind)).map((p) => ({
      id: p.id, src: p.src, alt: p.alt, width: p.width, height: p.height,
    })),
  })).filter((g) => g.photos.length > 0);

  return (
    <>
      <section className="border-b border-ink-800 bg-aurora py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Gallery</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Real Metro Detroit <span className="text-brass-gradient">garage door work</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-200">
            Every photo below represents the work we do for Metro Detroit homeowners and businesses. Tap any image to view full size.
          </p>
          <div className="mt-6">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <GalleryClient groups={groups} />

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">About this gallery</h2>
            <p className="mt-3">
              The photos on this page represent the range of work we do across Metro Detroit — new insulated door installations in Royal Oak, torsion spring replacements in Warren, opener installs in Troy, off-track resets and cable work in Livonia, panel replacements, commercial rolling steel doors on Detroit loading docks, and 24-hour emergency repairs.
            </p>
            <p className="mt-3">
              We publish this gallery for the same reason we publish our warranty terms on every invoice: when you&apos;re hiring a garage door company, you should be able to see actual evidence of the work, the trucks, the branding, and the team — not just an anonymous logo. Browse by category above to skip straight to the kind of job you have in mind, or scroll through the full set to get a sense of the range.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How we work on site</h2>
            <p className="mt-3">
              Every job starts the same way: a clear written estimate before any tools come out, a flat-rate price agreed in advance, and a repair-first mindset — a dented panel doesn&apos;t mean a new door, and a worn roller doesn&apos;t mean a new opener. Springs are measured and matched to your door&apos;s weight, never guessed, and every repair ends with a balance test and both federal safety checks (photo-eye beam and contact reverse).
            </p>
            <p className="mt-3">
              If you have a job that looks like one of the photos above, tap a button and we&apos;ll dispatch a technician. If yours is different, that&apos;s fine too — we cover everything from squeaky rollers to full commercial dock doors. Send a photo of what you&apos;re dealing with and we&apos;ll point you at the right service.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="Garage Door Gallery" kind="service" />
      <BuyersGuide />
      <GarageGlossary />
    </>
  );
}
