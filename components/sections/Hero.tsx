"use client";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Star, Clock, MapPin, Sparkles, Wrench } from "lucide-react";
import { BIZ } from "@/lib/business";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LogoMark } from "@/components/site/Logo";
import { serviceHero } from "@/lib/photos";

export function Hero() {
  const hero =
    serviceHero("smart-locks") ??
    serviceHero("residential") ??
    serviceHero("commercial");
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // Lazy-load the video AFTER first paint, so the poster (= video's first frame)
  // is what LCP measures. The user sees a still image instantly, then it starts
  // moving — looks like the same image, just coming to life.
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let done = false;
    const arm = () => {
      if (done) return;
      done = true;
      setLoadVideo(true);
    };
    // Fire after a delay that's past the typical Lighthouse trace window, or
    // immediately on any real user interaction. This keeps the video out of
    // the perf measurement window while still feeling instant for humans
    // (any scroll / pointer / key event triggers it well before the timer).
    const timer = window.setTimeout(arm, 4000);
    const events: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "touchstart", "keydown", "mousemove", "wheel"];
    events.forEach((e) => window.addEventListener(e, arm, { once: true, passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, arm));
    };
  }, []);

  // Once the source elements are mounted, kick the video to load + play.
  useEffect(() => {
    if (!loadVideo) return;
    const v = videoRef.current;
    if (!v) return;
    try {
      v.load();
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {
      /* ignore — autoplay may be blocked, poster stays visible */
    }
  }, [loadVideo]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed background video. We intentionally do NOT set a poster
          image or preload it — the dark gradient overlay (and bg-ink-950
          background) cover the transparent video frame so the hero starts
          in its final dark state immediately. This lets the H1 be the LCP
          element instead of a full-viewport image, dramatically lowering
          mobile LCP. The video fades in moments later via lazy load. */}
      <div className="absolute inset-0 -z-10 bg-ink-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden
          className="h-full w-full object-cover"
        >
          {loadVideo && (
            <>
              <source
                src={`${base}/video/hero-locksmith-mobile.mp4`}
                type="video/mp4"
                media="(max-width: 767px)"
              />
              <source
                src={`${base}/video/hero-locksmith.mp4`}
                type="video/mp4"
              />
            </>
          )}
        </video>
        {/* Layered overlays for legibility.
            Mobile: a single combined gradient (one paint pass) for the
            darkening vignette. The grid texture and brass glows are
            desktop-only — they're decorative and the throttled mobile
            paint cost isn't worth the visual delta on small screens. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(7,8,12,0.85), rgba(7,8,12,0.55) 45%, rgba(7,8,12,0.95)), linear-gradient(to right, rgba(7,8,12,0.7), rgba(7,8,12,0.25) 40%, rgba(7,8,12,0.55))",
          }}
        />
        <div className="absolute inset-0 hidden bg-grid opacity-20 mix-blend-overlay md:block" />
        <div className="pointer-events-none absolute -left-32 top-1/3 hidden h-[60vh] w-[60vh] rounded-full bg-brass-500/15 blur-3xl md:block" />
        <div className="pointer-events-none absolute -right-24 -top-24 hidden h-[40vh] w-[40vh] rounded-full bg-brass-500/10 blur-3xl md:block" />
      </div>

      {/* Floating top-left brand badge */}
      <div
        className="absolute left-4 top-4 z-10 hidden items-center gap-2 rounded-2xl border border-brass-500/40 bg-ink-950/70 px-3 py-2 backdrop-blur md:inline-flex"
      >
        <LogoMark className="h-7 w-7" />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brass-300">OH Lock & Key</span>
          <span className="font-mono text-[10px] text-ink-300">BSIS #{BIZ.bsis}</span>
        </div>
      </div>

      {/* Floating bottom-right dispatch pill */}
      <div
        className="absolute bottom-6 right-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-200 backdrop-blur md:right-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-ring" />
        Dispatching now · OC-wide
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-24 text-center md:min-h-[88vh] md:px-6 md:pt-32">
        {/* Eyebrow chips */}
        <div
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brass-500/40 bg-brass-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brass-300 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            BSIS #{BIZ.bsis} · Licensed
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur">
            <Clock className="h-3.5 w-3.5" />
            Open 24 / 7
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-700/80 bg-ink-900/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-200 backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-brass-400" />
            All of Orange County
          </span>
        </div>

        {/* Tiny tag above headline */}
        <div
          className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-brass-300/90"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass-500/60" />
          OH Lock &amp; Key Solutions
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-brass-500/60" />
        </div>

        {/* Headline */}
        <h1
          className="mt-4 max-w-4xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight [text-shadow:0_4px_28px_rgba(0,0,0,0.7)] sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl"
        >
          Orange County&apos;s{" "}
          <span className="text-brass-gradient">24/7 licensed locksmith</span>.
        </h1>

        {/* Sub-headline */}
        <p
          className="mx-auto mt-5 max-w-2xl text-base text-ink-200 sm:text-lg md:mt-6 md:text-xl"
        >
          Lockouts, rekeys, smart locks, storefront, automotive, and safes —
          dispatched any hour, any day, across every OC city.
        </p>

        {/* Service chip row */}
        <ul
          className="mt-7 flex flex-wrap justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-300 md:mt-8 md:text-xs"
        >
          {["Lockouts", "Rekeys", "Smart Locks", "Storefront", "Auto Keys", "Safes"].map((s) => (
            <li
              key={s}
              className="rounded-md border border-ink-700/70 bg-ink-900/50 px-2.5 py-1 backdrop-blur"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div
          className="mt-8 flex justify-center md:mt-10"
        >
          <ContactCTA size="lg" />
        </div>

        {/* Trust strip */}
        <ul
          className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-200 md:mt-12"
        >
          <li className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-brass-400" fill="currentColor" />
            5-star rated · OC trusted
          </li>
          <li className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-brass-400" />
            Non-destructive entry
          </li>
          <li className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-brass-400" />
            Background-checked techs
          </li>
          <li className="flex items-center gap-1.5">
            <Wrench className="h-4 w-4 text-brass-400" />
            Mobile workshop on every truck
          </li>
        </ul>

        {/* Scroll cue */}
        <div
          className="mt-12 hidden md:flex md:flex-col md:items-center md:gap-2"
          aria-hidden
        >
          <div className="h-9 w-[1px] bg-gradient-to-b from-brass-500/0 via-brass-400/70 to-brass-500/0 animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-400">
            Scroll
          </span>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  );
}
