import {
  Siren, Home, Building2, Flame, Fan, Thermometer,
  Sparkles, Search, HardHat, CalendarCheck,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof Fan;
  tagline: string;
  description: string;
  bullets: string[];
  intent: "emergency" | "service" | "trust";
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential",
    name: "Residential Air Duct Cleaning",
    shortName: "Residential",
    icon: Home,
    tagline: "Whole-home duct cleaning with negative-pressure trucks — see the before & after.",
    description:
      "Your ductwork is the lungs of your home, and in Metro Detroit those lungs collect construction dust, pet dander, pollen, and decades of debris. BH Air Duct Cleaning Metro Detroit performs full source-removal cleaning to NADCA standards: we connect a negative-pressure vacuum to your trunk line, agitate every supply and return run with rotary brushes and compressed-air whips, and capture the debris in HEPA filtration instead of your living room. Every job ends with before-and-after photos of your own ducts.",
    bullets: [
      "Negative-pressure source removal (NADCA-standard process)",
      "Every supply, return & trunk line cleaned — not just what's visible",
      "Rotary brush + compressed-air whip agitation",
      "HEPA-filtered containment, zero mess in the home",
      "Before & after photos of your actual ductwork",
    ],
    intent: "service",
    keywords: ["air duct cleaning", "air duct cleaning near me", "residential duct cleaning detroit", "hvac duct cleaning metro detroit"],
  },
  {
    slug: "commercial",
    name: "Commercial Air Duct Cleaning",
    shortName: "Commercial",
    icon: Building2,
    tagline: "Offices, retail, medical, restaurants & industrial — after-hours scheduling.",
    description:
      "Dirty ductwork in a commercial building means higher energy bills, tenant complaints, failed inspections, and sick-building symptoms. We clean HVAC systems for Metro Detroit offices, retail spaces, medical and dental suites, restaurants, schools, and light-industrial facilities — rooftop units, VAV boxes, main trunks, and branch runs — working nights and weekends so your business never skips a beat. Documentation and photo reports are provided for property managers and compliance files.",
    bullets: [
      "RTU, air handler, VAV & full duct-network cleaning",
      "After-hours & weekend scheduling, zero downtime",
      "Photo documentation & compliance reports",
      "Multi-tenant & property-management programs",
      "COI provided; licensed & insured crews",
    ],
    intent: "service",
    keywords: ["commercial air duct cleaning", "commercial hvac cleaning detroit", "office duct cleaning", "restaurant duct cleaning michigan"],
  },
  {
    slug: "dryer-vent",
    name: "Dryer Vent Cleaning",
    shortName: "Dryer Vent",
    icon: Flame,
    tagline: "Lint-clogged dryer vents cause 2,900+ house fires a year. Ten minutes fixes yours.",
    description:
      "A clogged dryer vent is the most preventable fire hazard in a Michigan home — and the reason your towels take two cycles to dry. We clean the full vent run from the dryer connection to the exterior termination with rotary brushes and high-volume air, verify airflow with an anemometer reading, and inspect the termination hood so it seals against birds, snow, and freezing condensation. Multi-unit buildings and long roof runs are our specialty.",
    bullets: [
      "Full-run rotary brush cleaning, dryer to exterior hood",
      "Airflow verification before & after (measured, not guessed)",
      "Bird nest & blockage removal, hood & damper repair",
      "Booster fan & long-run configurations handled",
      "Condo & apartment multi-unit programs",
    ],
    intent: "emergency",
    keywords: ["dryer vent cleaning", "dryer vent cleaning near me", "clogged dryer vent detroit", "dryer vent fire prevention michigan"],
  },
  {
    slug: "hvac-restoration",
    name: "HVAC System Restoration",
    shortName: "HVAC Restoration",
    icon: Fan,
    tagline: "Deep restoration for neglected, renovated, smoke- or water-damaged systems.",
    description:
      "Some systems need more than a cleaning. After years of neglect, a renovation gone dusty, a furnace puff-back, smoke damage, or a flooded basement, ductwork needs full restoration: deep source removal, antimicrobial treatment of sheet-metal surfaces, replacement of contaminated flex runs and internal liner, blower and cabinet decontamination, and re-sealing of leaky joints. We bring air handlers, plenums, and duct networks back to like-new condition and document every step.",
    bullets: [
      "Fire, smoke & puff-back residue removal",
      "Flood & water-event duct decontamination",
      "Contaminated flex-duct & liner replacement",
      "Blower, coil & cabinet deep cleaning",
      "Duct sealing & insulation repair after restoration",
    ],
    intent: "service",
    keywords: ["hvac restoration", "duct restoration detroit", "smoke damage duct cleaning", "flooded ductwork cleaning michigan"],
  },
  {
    slug: "furnace-coil",
    name: "Furnace & AC Coil Cleaning",
    shortName: "Furnace & Coils",
    icon: Thermometer,
    tagline: "A clean blower and coil can restore up to 30% of lost HVAC efficiency.",
    description:
      "Duct cleaning without cleaning the equipment is half a job. The blower wheel, evaporator coil, and heat exchanger surfaces are where dust actually chokes your system's performance — a matted coil can't transfer heat, and a caked blower wheel moves a fraction of its rated air. We pull, inspect, and clean blower assemblies, wash evaporator coils with foaming no-rinse cleaner, vacuum the burner compartment, and leave your furnace breathing like the day it was installed.",
    bullets: [
      "Blower wheel & motor assembly cleaning",
      "Evaporator (A-coil) foaming clean & rinse",
      "Burner compartment & heat-exchanger surface vacuuming",
      "Condensate pan & drain-line clearing",
      "Filter upgrade guidance (MERV ratings that fit your system)",
    ],
    intent: "service",
    keywords: ["furnace cleaning", "ac coil cleaning", "blower wheel cleaning detroit", "evaporator coil cleaning michigan"],
  },
  {
    slug: "sanitization",
    name: "Duct Sanitizing & Deodorizing",
    shortName: "Sanitizing",
    icon: Sparkles,
    tagline: "EPA-registered antimicrobial fogging — after cleaning, never instead of it.",
    description:
      "Once ducts are physically clean, sanitizing finishes the job: an EPA-registered antimicrobial applied by fogger throughout the duct network to neutralize odor-causing bacteria, mold spores, and mildew on duct surfaces. It's the right call after smoke or pet odors, water intrusion, rodent activity, or for allergy- and asthma-sensitive households. We only sanitize after source-removal cleaning — fogging over dirt is a gimmick, and we'll tell you so.",
    bullets: [
      "EPA-registered antimicrobial & deodorizer application",
      "Pet, smoke & musty odor neutralization",
      "Post-rodent & post-water-event treatment",
      "Allergy & asthma household protocols",
      "Applied only after full source-removal cleaning",
    ],
    intent: "service",
    keywords: ["air duct sanitizing", "duct deodorizing", "antimicrobial duct treatment detroit", "duct odor removal michigan"],
  },
  {
    slug: "duct-inspection",
    name: "Camera Duct Inspection & Air Quality Check",
    shortName: "Inspection",
    icon: Search,
    tagline: "See inside your ducts before you spend a dollar — honest assessments.",
    description:
      "Not sure your ducts need cleaning? We'll show you. Our inspection camera travels your supply and return runs and puts the picture on a screen in front of you: dust load, construction debris, pest evidence, liner condition, disconnected joints, and crushed flex runs. Paired with an airflow reading at each register, you get an honest verdict — sometimes that verdict is 'your ducts are fine, save your money,' and we're happy to deliver it.",
    bullets: [
      "In-duct camera inspection with live view",
      "Per-register airflow measurement",
      "Pest, mold & debris identification",
      "Disconnected & crushed duct detection",
      "Written report with photos — no-pressure recommendations",
    ],
    intent: "service",
    keywords: ["duct inspection", "air duct camera inspection", "indoor air quality check detroit", "duct assessment michigan"],
  },
  {
    slug: "post-construction",
    name: "Post-Construction Duct Cleaning",
    shortName: "Post-Construction",
    icon: HardHat,
    tagline: "Drywall dust, sawdust & debris removed before you move in or hand over keys.",
    description:
      "Renovations and new builds fill ductwork with drywall dust, sawdust, insulation fibers, and fast-food wrappers — and the first time the furnace kicks on, all of it blows into your clean new rooms. We clean duct systems after remodels, additions, and new construction across Metro Detroit, working with homeowners, builders, and GCs on final-phase schedules. It's the difference between a dusty first month and a truly finished project.",
    bullets: [
      "Drywall & silica dust source removal",
      "Construction debris extraction from trunks & runs",
      "Register, boot & plenum detail cleaning",
      "Builder & GC final-phase scheduling",
      "Pre-occupancy certification photos",
    ],
    intent: "service",
    keywords: ["post construction duct cleaning", "new construction duct cleaning detroit", "renovation dust duct cleaning", "builder duct cleaning michigan"],
  },
  {
    slug: "maintenance",
    name: "Duct & Dryer Vent Maintenance Plans",
    shortName: "Maintenance",
    icon: CalendarCheck,
    tagline: "Scheduled cleanings that keep air quality high and energy bills low.",
    description:
      "Air duct cleaning isn't a once-in-a-lifetime event — NADCA recommends inspection every two years and cleaning every three to five, with annual dryer vent service. Our maintenance plans put your home or building on a schedule: annual dryer vent cleaning, periodic duct inspections with camera verification, filter reminders matched to your system, and priority booking with plan-member pricing. Property managers get per-door pricing across entire portfolios.",
    bullets: [
      "Annual dryer vent cleaning (the fire-safety non-negotiable)",
      "Camera inspection every 24 months",
      "Full duct cleaning on a 3–5 year cycle",
      "Priority scheduling & plan-member pricing",
      "Multi-property & landlord portfolio programs",
    ],
    intent: "service",
    keywords: ["duct cleaning maintenance plan", "annual dryer vent service", "hvac maintenance detroit", "landlord duct cleaning program"],
  },
  {
    slug: "emergency",
    name: "Same-Day & Emergency Duct Service",
    shortName: "Same-Day",
    icon: Siren,
    tagline: "Blocked dryer vent, dead airflow, or post-flood ducts? We dispatch fast.",
    description:
      "Some duct problems can't wait for next week: a dryer vent so blocked the machine overheats and trips its thermal fuse, a furnace starved for return air in January, rodents in the ductwork, sewage or flood water in floor ducts, or a puff-back coating the system in soot. We hold same-day slots across Wayne, Oakland, and Macomb counties for exactly these calls — a real dispatcher answers, quotes a flat rate, and a stocked truck rolls the same day.",
    bullets: [
      "Same-day dispatch across Metro Detroit",
      "Overheating dryer & blocked vent emergencies",
      "Post-flood & sewage duct decontamination",
      "Rodent & pest contamination cleanup",
      "Furnace puff-back & soot removal",
    ],
    intent: "emergency",
    keywords: ["emergency duct cleaning", "same day dryer vent cleaning detroit", "flooded duct cleaning", "urgent air duct service michigan"],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);
