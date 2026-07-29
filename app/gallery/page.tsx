import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { DuctGlossary } from "@/components/site/DuctGlossary";
import { BeforeAfterSlider, type BeforeAfterPair } from "@/components/site/BeforeAfterSlider";
import beforeAfterJson from "@/content/before-after.json";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: `Before & After Gallery`,
  description:
    "54 real before-and-after air duct cleaning comparisons from BH Air Duct Cleaning Metro Detroit — drag the slider on each photo to see the difference source-removal cleaning makes.",
  alternates: { canonical: "/gallery" },
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const BEFORE_AFTER: BeforeAfterPair[] = (beforeAfterJson as BeforeAfterPair[]).map((p) => ({
  ...p,
  before: `${BASE_PATH}${p.before}`,
  after: `${BASE_PATH}${p.after}`,
}));

const BRAND_KEEP = new Set([
  "branding-generated-service-van-three-quarter-front",
  "branding-generated-service-van-side-magnet-daylight",
  "branding-generated-business-card-mockup-photo",
  "branding-generated-social-tile-services-grid-real",
]);

const CATEGORIES: { key: string; label: string; match: (id: string, cat: string, kind: string) => boolean }[] = [
  { key: "all",               label: "All",               match: (id, __, k) => k !== "trust" && (k !== "brand" || BRAND_KEEP.has(id)) },
  { key: "hero",              label: "Featured",          match: (_, __, k) => k === "hero" },
  { key: "residential",       label: "Residential",       match: (_, c) => c === "residential" },
  { key: "dryer-vent",        label: "Dryer Vents",       match: (_, c) => c === "dryer-vent" },
  { key: "furnace-coil",      label: "Furnace & Coils",   match: (_, c) => c === "furnace-coil" || c === "hvac-restoration" },
  { key: "sanitization",      label: "Sanitizing",        match: (_, c) => c === "sanitization" },
  { key: "duct-inspection",   label: "Inspections",       match: (_, c) => c === "duct-inspection" },
  { key: "post-construction", label: "Post-Construction", match: (_, c) => c === "post-construction" },
  { key: "maintenance",       label: "Maintenance",       match: (_, c) => c === "maintenance" },
  { key: "commercial",        label: "Commercial",        match: (_, c) => c === "commercial" },
  { key: "brand",             label: "Brand",             match: (id) => BRAND_KEEP.has(id) },
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
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Before &amp; After Gallery</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Real air ducts. <span className="text-brass-gradient">Real results.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-ink-200">
            Drag the white handle on any photo below to compare the duct before and after cleaning.
            These are {BEFORE_AFTER.length} unretouched comparisons from real jobs — the same
            source-removal process we bring to every Metro Detroit home and business.
          </p>
          <div className="mt-6">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <section className="py-12" id="before-after">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 rounded-2xl border border-ink-800 bg-ink-900/40 p-4 text-sm text-ink-200">
            <strong className="text-white">How it works:</strong> click and drag the white circle on
            each image left or right to compare — or focus an image and use your arrow keys.{" "}
            <strong className="text-white">{BEFORE_AFTER.length} real before-and-after results below.</strong>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BEFORE_AFTER.map((pair, i) => (
              <BeforeAfterSlider
                key={pair.after}
                pair={pair}
                alt={`Air duct cleaning result #${i + 1}`}
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">On the job</h2>
          <p className="mt-3 max-w-2xl text-ink-200">
            Equipment, process, and crew — browse by category to see how negative-pressure duct
            cleaning actually happens.
          </p>
        </div>
      </section>

      <GalleryClient groups={groups} />

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">About this gallery</h2>
            <p className="mt-3">
              The before-and-after sliders above are real supply and return ducts photographed on real jobs — matted dust, construction debris, pet hair, and decades of buildup on the left; bare, clean sheet metal on the right. No filters, no staging. It&apos;s the clearest way we know to show what negative-pressure source removal actually does inside a duct system, because the inside of your ductwork is the one part of your home you never get to see.
            </p>
            <p className="mt-3">
              We publish this gallery for the same reason we photograph every job we do: when you&apos;re hiring an air duct cleaning company, you should be able to see actual evidence of the work — not a stock photo of a shiny vent. Every BH Air Duct Cleaning Metro Detroit job ends with before-and-after photos of your own ducts, so you never have to take our word for it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How we work on site</h2>
            <p className="mt-3">
              Every job starts the same way: a walkthrough and register count, a flat-rate price confirmed before any equipment comes off the truck, floor and corner protection down, and then a full source-removal cleaning — negative-pressure vacuum sealed to your trunk line, every supply and return run agitated with rotary brushes and compressed-air whips, and the blower compartment detailed before we button the system back up.
            </p>
            <p className="mt-3">
              If your ducts look like one of the &quot;before&quot; photos above, tap a button and we&apos;ll get you scheduled. Not sure? Ask about a camera inspection — if your ducts are clean, we&apos;ll tell you to keep your money, and show you the screen to prove it.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="Air Duct Cleaning Gallery" kind="service" />
      <BuyersGuide />
      <DuctGlossary />
    </>
  );
}
