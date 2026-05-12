import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ShieldCheck, Clock, MapPin } from "lucide-react";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { photosForService, serviceHero } from "@/lib/photos";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LogoMark } from "@/components/site/Logo";
import { ServiceMap } from "@/components/site/ServiceMap";
import { HomeDispatchTracker } from "@/components/site/HomeDispatchTracker";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/Reveal";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.description.slice(0, 160),
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return notFound();
  const hero = serviceHero(s.slug);
  const Icon = s.icon;
  const allShots = photosForService(s.slug).filter((p) => p.kind === "work").slice(0, 8);

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950">
        {hero && (
          <>
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 z-0 object-cover opacity-60"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brass-500/40 bg-ink-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brass-300 backdrop-blur">
              <LogoMark className="h-4 w-4" />
              OH Lock & Key · BSIS #{BIZ.bsis}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
              <Clock className="h-3.5 w-3.5" /> Open 24 / 7
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-xs font-semibold text-ink-200 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brass-400" /> All of Orange County
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Icon className="h-7 w-7 text-brass-400" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brass-400">
              {s.shortName}
            </p>
          </div>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {s.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">{s.tagline}</p>
          <div className="mt-7">
            <ContactCTA size="lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-ink-800 bg-ink-950 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal variant="zoom">
            <HomeDispatchTracker
              service={{
                slug: s.slug,
                name: s.name,
                shortName: s.shortName,
                tagline: s.tagline,
                bullets: s.bullets,
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <Reveal className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold md:text-3xl">What&apos;s included</h2>
            <p className="mt-4 text-ink-200">{s.description}</p>
            <RevealStagger className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {s.bullets.map((b) => (
                <RevealItem key={b}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-ink-800 bg-ink-900/50 p-4 transition hover:-translate-y-0.5 hover:border-brass-500/40">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass-500/15 text-brass-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink-100">{b}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
          <Reveal delay={0.1} variant="tilt" className="space-y-4">
            <div className="rounded-3xl border border-brass-500/30 bg-brass-500/5 p-5">
              <div className="flex items-center gap-2 text-brass-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Licensed & insured</span>
              </div>
              <p className="mt-2 text-sm text-ink-200">
                California Bureau of Security & Investigative Services. License #{BIZ.bsis}. Every tech is background-checked.
              </p>
            </div>
            <div className="rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
              <h3 className="font-display text-lg font-bold">Request this service</h3>
              <p className="mt-1 text-sm text-ink-300">Tap any button — we&apos;re dispatching now.</p>
              <div className="mt-4">
                <ContactCTA size="md" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {allShots.length > 0 && (
        <section className="border-t border-ink-800 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Real {s.shortName.toLowerCase()} jobs</h2>
              <p className="mt-2 text-ink-300">Photos from real Orange County jobs by our licensed crew.</p>
            </Reveal>
            <RevealStagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
              {allShots.map((p) => (
                <RevealItem key={p.id}>
                  <div className="group overflow-hidden rounded-2xl border border-ink-800 transition hover:-translate-y-1 hover:border-brass-500/40 hover:shadow-xl hover:shadow-brass-500/10">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>
      )}

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Service area</p>
                <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  {s.shortName} service across Orange County
                </h2>
                <p className="mt-2 max-w-2xl text-ink-300">
                  Mobile dispatch from Santa Ana to every OC city — 24 hours a day.
                </p>
              </div>
              <Link href="/service-areas" className="hidden text-sm font-semibold text-brass-400 hover:text-brass-300 md:inline-flex">
                All service areas →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} variant="zoom">
            <ServiceMap
              query={`${s.name} Orange County CA`}
              title={`${s.shortName} — Orange County, CA`}
              height={420}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            More about {s.shortName.toLowerCase()} in Orange County
          </h2>
          <p>
            {s.description} Every {s.shortName.toLowerCase()} job is performed by a California BSIS-licensed locksmith (license #{BIZ.bsis}), background-checked, and dispatched from a fully equipped mobile workshop. There is no call-center middle layer between you and the technician — when you call or text, you talk to someone who works on locks for a living.
          </p>
          <p>
            We cover every city and neighborhood in Orange County for {s.shortName.toLowerCase()}: Santa Ana, Irvine, Anaheim, Huntington Beach, Newport Beach, Costa Mesa, Fullerton, Orange, Tustin, Garden Grove, Mission Viejo, Laguna Niguel, Laguna Beach, Lake Forest, Aliso Viejo, Rancho Santa Margarita, Yorba Linda, Brea, Placentia, Buena Park, La Habra, Cypress, Stanton, Westminster, Fountain Valley, Seal Beach, Los Alamitos, San Juan Capistrano, San Clemente, and Dana Point. Typical on-site arrival is 15 to 30 minutes depending on traffic and your distance from the nearest mobile unit.
          </p>
          <p>
            Pricing for {s.shortName.toLowerCase()} is transparent: flat-rate where the scope is predictable and clearly itemized where it isn&apos;t. You get a written quote before any tools come out, and the number we agree on is the number you pay — no trip fees, no &quot;the lock turned out to be a different brand&quot; surprises, and no high-pressure upsells. If something genuinely changes the scope on site, we explain it, give you a new written number, and you can decline without owing a cent.
          </p>
          <p>
            We use non-destructive entry whenever the hardware allows it, prefer manufacturer-grade parts for permanent installs, and document the work so you have records for insurance, property managers, or HOA boards. When the job requires drilling or destructive entry — usually a damaged or anti-pick high-security cylinder — we tell you in advance, quote the replacement hardware, and complete both steps in a single visit. That&apos;s the difference between a real locksmith and a low-bid contractor with a magnetic sign.
          </p>
        </div>
      </section>

      <LongFormFaq subject={s.shortName} kind="service" />

      <section className="border-t border-ink-800 bg-aurora py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              Need {s.shortName.toLowerCase()} service now?
            </h2>
            <p className="mt-3 text-ink-200">A BSIS-licensed locksmith is one tap away.</p>
            <div className="mt-6 flex justify-center">
              <ContactCTA size="lg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
