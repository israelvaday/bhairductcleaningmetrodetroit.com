export type FAQ = { q: string; a: string };

export type FAQSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: FAQ[];
};

export const FAQ_HERO_IMAGE = "/faq/faq-hero.png";
export const FAQ_HERO_ALT = "Garage door technician answering questions for a homeowner in a sunny Metro Detroit driveway";

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "general",
    title: "General",
    emoji: "🛡️",
    description: "Who we are and how we work.",
    items: [
      {
        q: "Are you a real local garage door company or a call center?",
        a: "We're a real, licensed & insured garage door company based in Detroit. You speak with the same dispatcher every time, and the technician who shows up is on our payroll — no subcontractors, no anonymous national call centers reselling your job.",
      },
      {
        q: "What areas of Metro Detroit do you serve?",
        a: "All of Metro Detroit — Detroit, Warren, Sterling Heights, Troy, Dearborn, Livonia, Royal Oak, Southfield, Farmington Hills, Pontiac, Canton, Westland, Taylor, Redford, Allen Park, Lincoln Park, Wyandotte, Ferndale, Birmingham, Rochester Hills, Shelby Township, Clinton Township, Macomb, St. Clair Shores, Novi, Northville, Plymouth, Ann Arbor, and every city in Wayne, Oakland, and Macomb counties. See our full service-area map.",
      },
      {
        q: "What are your hours?",
        a: "We're open 24 hours Sunday through Thursday (Eastern Time). Friday we close at 6:00 PM. Saturday we're closed. During open hours a real dispatcher answers — no call center, no robocall.",
      },
      {
        q: "How fast can you get to me?",
        a: "Typical ETA in central Metro Detroit (Detroit, Dearborn, Warren, Troy) is 15–30 minutes for emergency calls. Outer suburbs are usually 20–40 minutes. We give you a real ETA when you call — not a vague 'on the way'.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay, Tap to Pay, and cash. We email you a digital invoice on every job — handy for insurance claims and home-sale records.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    emoji: "💰",
    description: "Honest, flat-rate quotes — no driveway surprises.",
    items: [
      {
        q: "Do you charge a service-call fee?",
        a: "Yes — a standard service call is $45 during business hours and $75 after hours. The service call covers the drive and a full diagnostic of the door and opener. The full job price is quoted before any work starts, and it's a flat rate, not hourly.",
      },
      {
        q: "How much does a garage door spring replacement cost?",
        a: "In Metro Detroit, a single torsion spring replacement typically runs $180–$280 all-in; a double-spring (two-car door) job runs $260–$400. High-cycle spring upgrades add $50–$90 per spring but last 3–4x longer. We quote the exact flat rate on the phone before we dispatch.",
      },
      {
        q: "How much does a new garage door cost in Michigan?",
        a: "A quality insulated steel two-car door installed usually runs $1,400–$2,800 depending on insulation level and style. Carriage-house and wood-look doors run $2,500–$5,000+, and modern full-view glass doors start around $4,500. Every install quote is free, written, and includes haul-away of the old door.",
      },
      {
        q: "How much is a new garage door opener installed?",
        a: "Chain-drive openers installed run $350–$500, belt-drive (quieter, better for attached garages) $450–$650, and wall-mount jackshaft units with battery backup $750–$1,000. All installs include rails, safety sensors, one keypad, two remotes, and programming.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. If the price changes between the phone quote and the work, we tell you before doing anything and you can decline. The only common adjustment is when a customer adds services on-site (e.g. 'while you're here, can you swap the rollers too?').",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Repairs",
    emoji: "🚨",
    description: "What to expect when your door fails.",
    items: [
      {
        q: "My garage door won't close and I have to leave — what do I do?",
        a: "First check the photo-eye sensors near the floor: if one is blinking, clear any obstruction and gently realign it. If that doesn't work, most openers let you hold the wall button down to force-close the door. If the door still won't close, call us — a door stuck open is a security risk and we prioritize those calls.",
      },
      {
        q: "My spring snapped. Can I still open the door?",
        a: "Do not try. A door with a broken spring can weigh 150–300 lbs with no counterbalance — openers can't lift it safely, and lifting by hand risks serious injury and a dropped door. Leave the door closed, keep vehicles inside for now, and call us; most spring jobs are same-day.",
      },
      {
        q: "My door came off the track. Is that dangerous?",
        a: "Yes — an off-track door can fall. Stop operating it immediately, don't pull the red release cord while the door is up, and keep people and cars away. We reset off-track doors, replace bent track, and inspect the rollers and cables that caused it, usually in a single visit.",
      },
      {
        q: "My car is trapped inside and the opener is dead. Can you get it out?",
        a: "Yes. If there's no power, the red emergency release cord disengages the opener so the door can be lifted manually — but only if the springs are intact. If the release doesn't work or the door is too heavy, call us and we'll get you out quickly and safely.",
      },
    ],
  },
  {
    id: "springs",
    title: "Springs & Hardware",
    emoji: "🔩",
    description: "Torsion springs, cables, and rollers explained.",
    items: [
      {
        q: "How long do garage door springs last?",
        a: "Standard springs are rated for about 10,000 cycles — roughly 7–10 years at 3–4 uses per day. Michigan's temperature swings shorten that: cold makes steel brittle and most spring failures here happen in winter. High-cycle springs (25,000+) typically last 15–20 years.",
      },
      {
        q: "Should I replace both springs if only one broke?",
        a: "On a two-spring door, yes. Both springs have the same mileage, so the survivor usually fails within months — and you'd pay a second service call. Replacing both restores an even balance and we discount the second spring on the same visit.",
      },
      {
        q: "Why is my garage door so loud?",
        a: "Nine times out of ten it's worn steel rollers rattling in the track, dry hinges, or a stretched chain drive. Upgrading to sealed-bearing nylon rollers and doing a full lubrication makes a dramatic difference — often the door becomes quieter than it was new.",
      },
      {
        q: "Can I replace a garage door spring myself?",
        a: "We strongly advise against it. Torsion springs store enormous energy and are wound under load with special bars; every year DIYers are seriously injured by slipped winding bars and unwound cones. This is the one garage door job that's genuinely dangerous without training and the right tools.",
      },
    ],
  },
  {
    id: "openers",
    title: "Openers & Smart Tech",
    emoji: "📱",
    description: "Belt drives, Wi-Fi openers, keypads, and remotes.",
    items: [
      {
        q: "Which garage door opener brands do you install?",
        a: "LiftMaster (our go-to for reliability), Chamberlain, and Genie. For attached garages with bedrooms above, we recommend belt-drive or wall-mount jackshaft units for noise. Everything we install includes myQ or Aladdin Connect Wi-Fi so you can control it from your phone.",
      },
      {
        q: "Can you make my existing opener 'smart' without replacing it?",
        a: "Usually yes. Retrofit hubs like the myQ Smart Garage Hub work with most openers made after 1993. We mount the hub, pair the door sensor, and set up the app — typically a 30–45 minute visit.",
      },
      {
        q: "Why does my door reverse before it hits the floor?",
        a: "Either the photo-eye sensors are misaligned or dirty, the travel limit is set short, or the door binds in the track and trips the force sensor. All three are quick fixes for a tech — and the safety-reverse system should never be disabled to 'solve' it.",
      },
      {
        q: "My remote works but the keypad doesn't (or vice versa). Why?",
        a: "Keypads and remotes pair separately to the opener's logic board. Usually the keypad's battery is dead or it lost its pairing after a power surge. We reprogram keypads and remotes on any visit, and can add in-car HomeLink pairing too.",
      },
      {
        q: "Will my opener work when the power is out?",
        a: "Every opener has a manual release cord that lets you lift the door by hand (if the springs are healthy). If outages are common in your area, we install openers with integrated battery backup that give you dozens of open/close cycles per outage.",
      },
    ],
  },
  {
    id: "installation",
    title: "New Doors",
    emoji: "🏠",
    description: "Choosing and installing a new garage door.",
    items: [
      {
        q: "Is an insulated garage door worth it in Michigan?",
        a: "Almost always. An insulated door (R-9 to R-18) keeps an attached garage 10–20°F warmer in winter, protects anything stored inside, cuts street noise, and is stiffer and more dent-resistant. For heated garages or rooms above the garage it pays for itself.",
      },
      {
        q: "How long does a garage door installation take?",
        a: "A standard single or two-car sectional replacement takes 3–5 hours including old-door removal, new track and spring hardware, opener reconnection, and balance testing. Custom sizes or structural framing changes can add a second visit.",
      },
      {
        q: "Do you haul away my old door?",
        a: "Yes — removal and disposal of the old door, track, and springs is included in every installation quote. We leave the garage broom-clean.",
      },
      {
        q: "Which garage door brands do you install?",
        a: "We install Clopay, Amarr, C.H.I., Wayne Dalton, and Raynor doors — steel, insulated steel, carriage-house, and full-view aluminum/glass. Our quotes show like-for-like options across at least two brands so you can compare real prices.",
      },
      {
        q: "Will a new garage door increase my home's value?",
        a: "Garage door replacement is consistently the #1 ROI exterior remodeling project in national cost-versus-value studies, typically recouping well over 100% of its cost at resale — plus instant curb appeal while you live there.",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust & Warranty",
    emoji: "✅",
    description: "How to verify we're legitimate — and how we stand behind work.",
    items: [
      {
        q: "Are you licensed and insured?",
        a: "Yes — BH Garage Door Metro Detroit is licensed & insured for residential and commercial garage door work in Michigan. We carry general liability and workers' comp insurance, and provide a certificate of insurance on request for commercial clients.",
      },
      {
        q: "Are your technicians background-checked?",
        a: "Yes. Every technician passes a background check before joining the team and arrives in uniform in a marked van. We also do internal reference checks before anyone works in a customer's home.",
      },
      {
        q: "What warranty do you offer?",
        a: "Labor is warrantied for 1 year on every job. Parts carry the manufacturer's warranty — typically 3–10 years on springs depending on cycle rating, 1–3 years on openers (LiftMaster belt drives carry a lifetime motor and belt warranty), and up to lifetime on door sections from brands like Clopay.",
      },
      {
        q: "Will I get a receipt?",
        a: "Yes. Every job ends with a digital invoice emailed to you, including our company name, the tech's name, work performed, and parts used. Save it for insurance, home-sale disclosures, or warranty claims.",
      },
    ],
  },
];

export const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((s) => s.items);
