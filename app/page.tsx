import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { PhotoMarquee } from "@/components/sections/PhotoMarquee";
import { AreaTeaser } from "@/components/sections/AreaTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceMap } from "@/components/site/ServiceMap";
import { HomeDispatchTracker } from "@/components/site/HomeDispatchTracker";
import { Reveal } from "@/components/site/Reveal";
import { LazyParallax, LazyFloatOnScroll } from "@/components/site/LazyScrollFx";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { GarageGlossary } from "@/components/site/GarageGlossary";

export const metadata: Metadata = {
  title: `Garage Door Repair & Installation — Metro Detroit`,
  description:
    "BH Garage Door Metro Detroit — licensed & insured garage door company. Broken spring replacement, opener repair, new door installation, and commercial overhead doors. Serving all of Metro Detroit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-y border-ink-800 bg-ink-950/60 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal variant="zoom">
            <LazyFloatOnScroll>
              <HomeDispatchTracker />
            </LazyFloatOnScroll>
          </Reveal>
        </div>
      </section>
      <ServiceGrid />
      <BrandShowcase />
      <PhotoMarquee />
      <Reveal variant="bounce">
        <AreaTeaser />
      </Reveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal variant="bounce">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Coverage</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                All of Metro Detroit — live dispatch radius.
              </h2>
            </div>
          </Reveal>
          <LazyParallax strength={-40}>
            <Reveal variant="zoom" delay={0.05}>
              <ServiceMap
                lat={42.45}
                lng={-83.05}
                zoom={10}
                title="Metro Detroit, MI"
                height={420}
              />
            </Reveal>
          </LazyParallax>
        </div>
      </section>
      <LongFormFaq subject="Garage Door Service" kind="service" />
      <BuyersGuide />
      <GarageGlossary />
      <Reveal variant="zoom">
        <FinalCTA />
      </Reveal>
    </>
  );
}
