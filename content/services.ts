import {
  KeyRound, Lock, ShieldCheck, Building2, Store, Home,
  Smartphone, Cpu, Car, Wrench, Vault, Siren,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof KeyRound;
  tagline: string;
  description: string;
  bullets: string[];
  intent: "emergency" | "service" | "trust";
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency",
    name: "24-Hour Emergency Locksmith",
    shortName: "Emergency",
    icon: Siren,
    tagline: "Locked out? We dispatch a BSIS-licensed tech fast.",
    description:
      "Locked out of your home, car, or business in Orange County? OH Lock & Key dispatches a licensed locksmith with full mobile tooling. We handle non-destructive entry, broken-key extraction, and on-the-spot rekeys during our posted hours.",
    bullets: [
      "House, condo & apartment lockouts",
      "Car & truck lockouts (no-damage entry)",
      "Broken-key extraction from deadbolts",
      "Mobile rekey same-visit",
      "Storefront emergency lock repairs",
    ],
    intent: "emergency",
    keywords: ["emergency locksmith", "car lockout", "house lockout", "broken key extraction"],
  },
  {
    slug: "residential",
    name: "Residential Locksmith",
    shortName: "Residential",
    icon: Home,
    tagline: "Deadbolts, rekeys, smart locks & lockouts for OC homes.",
    description:
      "From new-construction installs to post-move rekeys, our residential service covers everything that secures a door at home — single-cylinder and double-cylinder deadbolts, knob/lever combos, French-door drill-jig installs, and lockout services.",
    bullets: [
      "Deadbolt + knob/lever installation",
      "House rekey (keep your existing locks)",
      "French-door drill-jig installations",
      "Lockout & key extraction",
      "High-security key upgrades",
    ],
    intent: "service",
    keywords: ["residential locksmith", "rekey house", "deadbolt install", "house lockout"],
  },
  {
    slug: "commercial",
    name: "Commercial Locksmith",
    shortName: "Commercial",
    icon: Building2,
    tagline: "Mortise levers, exit-trim, master-keys, and high-security cylinders.",
    description:
      "We outfit Orange County offices, retail, restaurants, and HOAs with commercial-grade hardware — mortise locks, exit-trim levers, narrow-stile keypad levers, and master-key systems. All work is performed by a BSIS-licensed locksmith (#8663).",
    bullets: [
      "Mortise lock installation & service",
      "Exit-trim levers & panic devices",
      "Narrow-stile keypad levers",
      "Master-key system design",
      "High-security cylinder upgrades",
    ],
    intent: "service",
    keywords: ["commercial locksmith", "office rekey", "master key", "panic bar"],
  },
  {
    slug: "storefront",
    name: "Storefront & Glass-Door Service",
    shortName: "Storefront",
    icon: Store,
    tagline: "Adams Rite cylinders, hookbolts, paddles & crossbar panics.",
    description:
      "Glass-door storefronts in OC use specialty hardware — Adams Rite mortise cylinders and lock bodies, hookbolts, paddle handles, and crossbar panic devices. We service, repair, and replace all of it.",
    bullets: [
      "Adams Rite mortise cylinder swap",
      "Adams Rite lock-body replacement",
      "Hookbolt & paddle service",
      "Crossbar panic-device service",
      "Pivot-hinge alignment",
    ],
    intent: "service",
    keywords: ["storefront locksmith", "adams rite", "glass door lock", "panic device repair"],
  },
  {
    slug: "smart-locks",
    name: "Smart & Keypad Locks",
    shortName: "Smart Locks",
    icon: Smartphone,
    tagline: "Schlage, Lockly, Lockey — installed and programmed right.",
    description:
      "We install and program smart deadbolts, keypad locks, and fingerprint locks for homes, short-term rentals, and storefronts. Brands include Schlage, Lockly, Lockey, and August. Programming, code rotation, and battery service included.",
    bullets: [
      "Schlage keypad deadbolt install",
      "Lockly fingerprint lock install",
      "Lockey mechanical pool-gate locks",
      "WiFi/Z-Wave smart deadbolts",
      "Short-term rental code automation",
    ],
    intent: "service",
    keywords: ["smart lock install", "keypad lock", "lockly", "schlage keypad"],
  },
  {
    slug: "access-control",
    name: "Access Control",
    shortName: "Access Control",
    icon: Cpu,
    tagline: "Maglocks, REX exit buttons, and power supplies for OC businesses.",
    description:
      "Electronic access control for offices, gyms, medical, and multi-tenant buildings. We install magnetic locks (maglocks), wired REX exit buttons, power supplies, and integrate with your existing card/fob reader system.",
    bullets: [
      "Magnetic lock (maglock) install",
      "REX exit button wiring",
      "Power supply box install",
      "Card / fob reader integration",
      "Fire alarm interlock (Title 24)",
    ],
    intent: "service",
    keywords: ["access control installer", "maglock install", "rex button"],
  },
  {
    slug: "automotive",
    name: "Auto Locksmith",
    shortName: "Automotive",
    icon: Car,
    tagline: "Key-fob programming, transponder keys, & door-lock repair.",
    description:
      "Mobile auto locksmith for Orange County drivers. We program key fobs and transponder keys with professional Autel equipment, cut replacement keys, and repair internal door-lock mechanisms (e.g. Toyota door-panel actuators).",
    bullets: [
      "Key-fob programming (Autel)",
      "Transponder key cut & program",
      "Lost car key replacement",
      "Toyota door-panel lock repair",
      "Car lockout service",
    ],
    intent: "service",
    keywords: ["auto locksmith", "key fob programming", "car key replacement"],
  },
  {
    slug: "specialty",
    name: "Specialty Hardware",
    shortName: "Specialty",
    icon: Wrench,
    tagline: "HOPPE multipoint locks, French-door flush bolts, custom installs.",
    description:
      "European multipoint locks (HOPPE), French-door flush bolts, and other specialty hardware require precise installation. Our techs carry the right templates, jigs, and replacement parts for one-visit fixes.",
    bullets: [
      "HOPPE multipoint lock service",
      "French-door flush-bolt install",
      "Custom strike & jamb work",
      "Antique hardware repair",
      "Sliding-door lock upgrades",
    ],
    intent: "service",
    keywords: ["multipoint lock service", "hoppe lock", "french door bolt"],
  },
  {
    slug: "safes",
    name: "Safe Locksmith",
    shortName: "Safes",
    icon: Vault,
    tagline: "Commercial safe drill-opens and combination service.",
    description:
      "Locked out of a commercial safe, gun safe, or fire safe? We drill, open, and service safes in-place across Orange County. Combination changes, replacement keys, and full lock-mechanism rebuilds.",
    bullets: [
      "Commercial safe drill-open",
      "Gun safe service",
      "Fire safe combination reset",
      "Replacement key & lock work",
      "On-site service (no transport)",
    ],
    intent: "service",
    keywords: ["safe locksmith", "safe drill open", "combination change"],
  },
  {
    slug: "rekey",
    name: "Rekey & Master-Key Systems",
    shortName: "Rekey",
    icon: KeyRound,
    tagline: "Keep the locks. Change the keys. Done in one visit.",
    description:
      "Rekeying replaces the pins inside your existing lock so old keys no longer work. Faster and cheaper than new locks. We also design and implement master-key systems for offices, HOAs, and rental properties.",
    bullets: [
      "House & condo rekey",
      "Office & retail rekey",
      "Master-key system design",
      "High-security key conversion",
      "Same-day service available",
    ],
    intent: "service",
    keywords: ["rekey locks", "master key system", "rekey house", "rekey office"],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);
