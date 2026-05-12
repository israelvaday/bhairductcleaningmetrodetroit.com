import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { PHOTOS } from "@/lib/photos";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { LocksmithGlossary } from "@/components/site/LocksmithGlossary";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: `Gallery`,
  description: "Real Orange County locksmith jobs by OH Lock & Key Solutions — residential, commercial, automotive, smart locks, and safes.",
  alternates: { canonical: "/gallery" },
};

const BRAND_KEEP = new Set([
  "branding-generated-service-van-three-quarter-front",
  "branding-generated-service-van-side-magnet-daylight",
  "branding-business-cards-and-keychain-bottle-openers-01",
  "branding-generated-social-tile-services-grid-real",
]);

const CATEGORIES: { key: string; label: string; match: (id: string, cat: string, kind: string) => boolean }[] = [
  { key: "all",          label: "All",            match: (id, __, k) => k !== "trust" && (k !== "brand" || BRAND_KEEP.has(id)) },
  { key: "hero",         label: "Featured",       match: (_, __, k) => k === "hero" },
  { key: "residential",  label: "Residential",    match: (id) => id.startsWith("residential-") || id.includes("residential-doors") },
  { key: "commercial",   label: "Commercial",     match: (id) => id.startsWith("commercial-") || id.includes("commercial-hardware") },
  { key: "storefront",   label: "Storefront",     match: (id) => id.startsWith("storefront-") || id.includes("storefront-glass") },
  { key: "smart-locks",  label: "Smart Locks",    match: (id) => id.startsWith("smart-") || id.includes("smart-and-keypad") },
  { key: "access",       label: "Access Control", match: (id) => id.startsWith("access-") || id.includes("access-control") },
  { key: "auto",         label: "Automotive",     match: (id) => id.startsWith("auto-") || id.includes("auto-locksmith") },
  { key: "specialty",    label: "Specialty",      match: (id) => id.startsWith("specialty-") || id.includes("specialty-hardware") },
  { key: "safes",        label: "Safes",          match: (id) => id.startsWith("safe-") || id.includes("safe-work") },
  { key: "brand",        label: "Brand",          match: (id) => BRAND_KEEP.has(id) },
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
            Real Orange County <span className="text-brass-gradient">locksmith work</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-200">
            Every photo below is from an actual job we&apos;ve completed for an OC homeowner, business, or driver. Tap any image to view full size.
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
              Everything you see on this page is real Orange County locksmith work performed by OH Lock &amp; Key Solutions. Nothing here is stock imagery. The photos are taken on-site by our technicians — residential rekeys in Irvine, commercial storefront installs in Santa Ana, smart-lock setups in Newport Beach, master-key rollouts for small businesses, automotive transponder programming, safe service, and 24-hour emergency lockouts across the county.
            </p>
            <p className="mt-3">
              We publish this gallery for the same reason we publish our BSIS license number on every page: when you&apos;re hiring a locksmith, you should be able to see actual evidence of the work, the trucks, the branding, and the team — not just an anonymous logo. Browse by category above to skip straight to the kind of job you have in mind, or scroll through the full set to get a sense of the range.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How we work on site</h2>
            <p className="mt-3">
              Every job starts the same way: a clear written estimate before any tools come out, a flat or itemized price agreed in advance, and a non-destructive entry method whenever possible. Drilling is a last resort, never a first one. On smart-lock work we leave the original mechanical hardware so the door is never &quot;app-only,&quot; and on commercial jobs we hand over keyed combinations and any access-control credentials in person to a documented contact.
            </p>
            <p className="mt-3">
              If you have a job that looks like one of the photos above, tap a button and we&apos;ll dispatch a licensed technician. If yours is different, that&apos;s fine too — we cover everything from car keys to safes. Send a photo of what you&apos;re dealing with and we&apos;ll point you at the right service.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="OC Locksmith Photos" kind="service" />
      <BuyersGuide />
      <LocksmithGlossary />
    </>
  );
}
