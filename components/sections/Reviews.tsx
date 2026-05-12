"use client";
import { Star, MapPin, Quote } from "lucide-react";

type Review = {
  name: string;
  area: string;
  service: string;
  text: string;
  stars: number;
};

const REVIEWS: Review[] = [
  { name: "Maria G.", area: "Santa Ana", service: "Emergency Lockout", stars: 5,
    text: "Locked out at midnight on McFadden — they had a tech at my door in 18 minutes. No drilling, picked the deadbolt clean. Lifesaver." },
  { name: "Daniel R.", area: "Irvine", service: "Smart Lock Install", stars: 5,
    text: "Installed a Yale Assure SL on our Northwood home and synced it to our Ring. Walked me through every code. Super professional." },
  { name: "Jennifer L.", area: "Huntington Beach", service: "Rekey", stars: 5,
    text: "Just moved into a place near Goldenwest. They rekeyed 4 doors and a sliding patio lock in under an hour. Fair price, no upsell." },
  { name: "Marcus T.", area: "Anaheim Hills", service: "Auto Locksmith", stars: 5,
    text: "Lost the only fob to my F-150 in the Canyon. They came out, programmed a new transponder right in my driveway. Honest pricing." },
  { name: "Priya S.", area: "Newport Beach", service: "Smart Locks", stars: 5,
    text: "Upgraded our Balboa Island front door to a smart deadbolt plus keypad on the side gate. Clean install, real explanation." },
  { name: "Eric B.", area: "Costa Mesa", service: "Storefront Repair", stars: 5,
    text: "Adams Rite cylinder on our shop near 17th Street snapped before opening. They fixed it before we lost a single sale." },
  { name: "Linda H.", area: "Fullerton", service: "Safe Lockout", stars: 5,
    text: "Our SentrySafe combo died after years. Tech opened it without damage and replaced the lock. Worth every penny." },
  { name: "Tony V.", area: "Garden Grove", service: "Lockout", stars: 5,
    text: "Slammed the door at 2am with kids inside. They answered immediately, dispatched fast, opened in seconds. Cool calm pros." },
  { name: "Aisha K.", area: "Tustin", service: "Commercial Master Key", stars: 5,
    text: "Set up a master-key system for our Tustin office — three levels, ten doors. Documented every key. Excellent work." },
  { name: "Rob D.", area: "Mission Viejo", service: "Access Control", stars: 5,
    text: "Installed maglocks and a keypad at our HOA gym. Tested with every fob, made sure failsafe matched fire code. Top tier." },
  { name: "Sofia M.", area: "Orange", service: "Rekey + New Locks", stars: 5,
    text: "Bought a place on East Chapman. They rekeyed the entire house and added a Schlage Encode to the back. Trustworthy crew." },
  { name: "Kevin P.", area: "Yorba Linda", service: "Auto Key Replacement", stars: 5,
    text: "Tesla Model 3 key card disappeared. They programmed a new one curbside and even paired a spare. Quick, polite." },
  { name: "Hannah W.", area: "Laguna Niguel", service: "Lockout", stars: 5,
    text: "Locked my keys in the car at the trailhead. Tech arrived fast, no scratches, no drama. Highly recommend." },
  { name: "Jorge A.", area: "Buena Park", service: "Storefront", stars: 5,
    text: "Door closer on our shop kept slamming. They adjusted, rekeyed both entries, fair flat price." },
  { name: "Megan F.", area: "Lake Forest", service: "Smart Locks", stars: 5,
    text: "Whole-home smart lock setup with August + HomeKit. They cleaned up after the install — almost no sign they were here." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-ink-800 bg-ink-900/60 p-5 shadow-lg shadow-black/30 md:w-[380px]">
      <div className="flex items-center gap-1 text-brass-400">
        {Array.from({ length: r.stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brass-400" />
        ))}
      </div>
      <Quote className="mt-3 h-5 w-5 text-brass-500/50" />
      <p className="mt-1 text-sm leading-relaxed text-ink-100">{r.text}</p>
      <div className="mt-4 flex items-center justify-between border-t border-ink-800 pt-3">
        <div>
          <div className="text-sm font-semibold text-ink-50">{r.name}</div>
          <div className="text-[11px] uppercase tracking-wider text-ink-400">{r.service}</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-brass-500/40 bg-ink-950/60 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brass-300">
          <MapPin className="h-3 w-3" /> {r.area}
        </span>
      </div>
    </div>
  );
}

export function Reviews() {
  // Duplicate for seamless loop
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative overflow-hidden border-t border-ink-800 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Customers say</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Five-star service across Orange County.
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1 text-brass-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brass-400" />
            ))}
            <span className="ml-2 text-sm text-ink-300">Verified reviews from real OC customers</span>
          </div>
        </div>
      </div>
      <div className="reviews-marquee relative">
        <div className="reviews-track flex gap-5">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950 to-transparent md:w-32" />
      </div>
      <style jsx>{`
        .reviews-marquee {
          width: 100%;
          overflow: hidden;
          padding-block: 1rem;
        }
        .reviews-track {
          width: max-content;
          animation: reviews-scroll 80s linear infinite;
        }
        .reviews-marquee:hover .reviews-track {
          animation-play-state: paused;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reviews-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
