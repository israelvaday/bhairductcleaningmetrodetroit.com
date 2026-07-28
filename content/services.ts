import {
  Siren, Wrench, Home, RotateCcw, Cog, Cable,
  LayoutPanelTop, Building2, CalendarCheck, Smartphone,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof Wrench;
  tagline: string;
  description: string;
  bullets: string[];
  intent: "emergency" | "service" | "trust";
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency",
    name: "24-Hour Emergency Garage Door Repair",
    shortName: "Emergency",
    icon: Siren,
    tagline: "Door stuck open, off the track, or spring snapped? We dispatch fast.",
    description:
      "A garage door that won't close leaves your home exposed and your car trapped. BH Garage Door Metro Detroit dispatches a licensed technician with a fully stocked truck — springs, cables, rollers, and opener parts on board. We handle snapped torsion springs, off-track doors, broken cables, and dead openers in one visit, day or night during our posted hours.",
    bullets: [
      "Door stuck open or won't close",
      "Off-track door reset & track repair",
      "Snapped torsion & extension springs",
      "Broken lift cable emergency replacement",
      "Opener failure diagnostics on-site",
    ],
    intent: "emergency",
    keywords: ["emergency garage door repair", "garage door won't close", "garage door off track", "24 hour garage door repair detroit"],
  },
  {
    slug: "repair",
    name: "Garage Door Repair",
    shortName: "Repair",
    icon: Wrench,
    tagline: "Noisy, crooked, slow, or stuck — we fix every make and model.",
    description:
      "From grinding noises to doors that reverse halfway, our repair techs diagnose the real cause and fix it on the spot. We service every major brand sold in Michigan — Clopay, Amarr, Wayne Dalton, C.H.I., Raynor, and more — with same-day appointments across Wayne, Oakland, and Macomb counties.",
    bullets: [
      "Noisy or grinding door diagnosis",
      "Bent track straightening & replacement",
      "Hinge, strut & bracket repair",
      "Door balance & travel-limit adjustment",
      "Weather seal & bottom retainer replacement",
    ],
    intent: "service",
    keywords: ["garage door repair", "garage door repair near me", "noisy garage door fix", "garage door track repair"],
  },
  {
    slug: "installation",
    name: "New Garage Door Installation",
    shortName: "Installation",
    icon: Home,
    tagline: "Steel, insulated, carriage-house & modern glass doors, installed right.",
    description:
      "Upgrading your garage door is the highest-ROI exterior project a Michigan homeowner can do. We measure, order, and install new sectional doors — insulated steel for our winters, carriage-house styles for classic brick colonials, and full-view aluminum glass doors for modern builds. Old door haul-away and new track hardware included in every install.",
    bullets: [
      "Free in-person measure & written quote",
      "Insulated steel doors (R-9 to R-18)",
      "Carriage-house & wood-look styles",
      "Modern full-view glass & aluminum doors",
      "Old door removal & haul-away included",
    ],
    intent: "service",
    keywords: ["new garage door installation", "garage door replacement", "insulated garage door michigan", "carriage garage doors"],
  },
  {
    slug: "springs",
    name: "Garage Door Spring Replacement",
    shortName: "Springs",
    icon: RotateCcw,
    tagline: "Torsion & extension springs replaced same-day — safely.",
    description:
      "A snapped spring is the #1 garage door emergency in Metro Detroit, and it's also the most dangerous DIY job on a house. Our techs replace torsion and extension springs with high-cycle galvanized replacements, rebalance the door, and inspect cables and bearings while the shaft is apart. Most spring jobs are done in under an hour.",
    bullets: [
      "Torsion spring replacement (single & double)",
      "Extension spring & safety-cable replacement",
      "High-cycle spring upgrades (25k+ cycles)",
      "Center bearing & end-bearing plate service",
      "Full door rebalance after every job",
    ],
    intent: "service",
    keywords: ["garage door spring replacement", "broken garage door spring", "torsion spring repair", "garage door spring cost michigan"],
  },
  {
    slug: "openers",
    name: "Garage Door Opener Installation & Repair",
    shortName: "Openers",
    icon: Cog,
    tagline: "LiftMaster, Chamberlain & Genie — installed, repaired, programmed.",
    description:
      "Whether your opener is dead, grinding, or just from another era, we install and service belt-drive, chain-drive, and wall-mount jackshaft openers from LiftMaster, Chamberlain, and Genie. Every install includes safety-sensor alignment, force and travel calibration, remotes, and keypad programming.",
    bullets: [
      "Belt, chain & wall-mount opener installs",
      "Opener motherboard & gear kit repair",
      "Safety sensor alignment & wiring",
      "Remote, keypad & in-car (HomeLink) programming",
      "Battery backup options (power-outage ready)",
    ],
    intent: "service",
    keywords: ["garage door opener installation", "garage door opener repair", "liftmaster installer detroit", "opener remote programming"],
  },
  {
    slug: "cables-rollers",
    name: "Cable, Roller & Track Repair",
    shortName: "Cables & Rollers",
    icon: Cable,
    tagline: "Frayed cables, worn rollers, bent track — fixed in one visit.",
    description:
      "Cables and rollers are the wear items of a garage door. Frayed lift cables can drop a door without warning, and worn steel rollers make even a new door sound like a freight train. We replace cables in pairs, upgrade to sealed-bearing nylon rollers for a dramatically quieter door, and straighten or replace bent track sections.",
    bullets: [
      "Lift cable replacement (always in pairs)",
      "Quiet nylon roller upgrades",
      "Bent & misaligned track repair",
      "Cable drum & bottom bracket service",
      "Pulley & sheave replacement (extension systems)",
    ],
    intent: "service",
    keywords: ["garage door cable repair", "garage door roller replacement", "garage door track repair", "quiet garage door rollers"],
  },
  {
    slug: "panels",
    name: "Panel & Section Replacement",
    shortName: "Panels",
    icon: LayoutPanelTop,
    tagline: "Dented or cracked sections replaced — color-matched, no full-door cost.",
    description:
      "Backed into the door? Hail or a stray basketball leave dents? You often don't need a whole new door. We source color- and profile-matched replacement sections for most major brands and swap the damaged panel on-site, restoring both looks and structural integrity for a fraction of full replacement cost.",
    bullets: [
      "Single & multi-section replacement",
      "Color & profile matching for major brands",
      "Strut reinforcement for wide doors",
      "Impact damage assessment (insurance-friendly reports)",
      "Full-door replacement quotes when repair isn't worth it",
    ],
    intent: "service",
    keywords: ["garage door panel replacement", "dented garage door panel", "garage door section replacement", "garage door dent repair"],
  },
  {
    slug: "commercial",
    name: "Commercial Overhead Doors",
    shortName: "Commercial",
    icon: Building2,
    tagline: "Rolling steel, sectional & dock doors for Metro Detroit businesses.",
    description:
      "Downtime at a loading dock costs real money. We install and service commercial overhead doors across Metro Detroit's industrial corridors — rolling steel service doors, insulated sectional doors, high-cycle spring systems, and heavy-duty operators. Planned maintenance contracts keep fleets of doors inspected and running.",
    bullets: [
      "Rolling steel & sectional door service",
      "Loading dock door repair & replacement",
      "High-cycle spring & operator upgrades",
      "Commercial operator installs (trolley, jackshaft, hoist)",
      "Preventive maintenance contracts",
    ],
    intent: "service",
    keywords: ["commercial overhead door repair", "rolling steel door detroit", "loading dock door repair", "commercial garage door company"],
  },
  {
    slug: "maintenance",
    name: "Garage Door Tune-Up & Maintenance",
    shortName: "Maintenance",
    icon: CalendarCheck,
    tagline: "A 25-point tune-up that adds years to your door and opener.",
    description:
      "Michigan winters are brutal on garage doors — cold thickens grease, seals stiffen, and springs fatigue faster. Our 25-point tune-up covers lubrication, spring balance, cable and roller inspection, opener force calibration, safety-reverse testing, and weather-seal checks. It's the cheapest insurance a garage door can get.",
    bullets: [
      "25-point inspection & tune-up",
      "Full lubrication (springs, hinges, rollers, track)",
      "Door balance & opener force calibration",
      "Safety-reverse & photo-eye testing",
      "Pre-winter weather seal inspection",
    ],
    intent: "service",
    keywords: ["garage door tune up", "garage door maintenance", "garage door lubrication service", "garage door inspection michigan"],
  },
  {
    slug: "smart-openers",
    name: "Smart Openers & Keypads",
    shortName: "Smart Openers",
    icon: Smartphone,
    tagline: "Open, close & monitor your garage from your phone — anywhere.",
    description:
      "Never wonder whether you left the garage open again. We install Wi-Fi smart openers and retrofit kits (myQ, LiftMaster, Genie Aladdin Connect), wireless keypads, and smart-home integrations so you can open the door for deliveries, monitor it from work, and get alerts if it's left open after dark.",
    bullets: [
      "Wi-Fi smart opener installs (myQ, Aladdin Connect)",
      "Smart retrofit kits for existing openers",
      "Wireless keypad & PIN entry setup",
      "Smartphone app & smart-home integration",
      "Open/close alerts & scheduled auto-close",
    ],
    intent: "service",
    keywords: ["smart garage door opener", "myq installation", "garage door keypad install", "wifi garage door opener detroit"],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);
