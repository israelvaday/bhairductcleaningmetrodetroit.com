export type FAQ = { q: string; a: string };

export type FAQSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: FAQ[];
};

export const FAQ_HERO_IMAGE = "/faq/faq-hero.png";
export const FAQ_HERO_ALT = "Air duct cleaning technician answering questions for a homeowner beside a furnace in a Metro Detroit basement";

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "general",
    title: "General",
    emoji: "🛡️",
    description: "Who we are and how we work.",
    items: [
      {
        q: "Are you a real local air duct cleaning company or a call center?",
        a: "We're a real, licensed & insured air duct cleaning company based in Detroit. You speak with the same dispatcher every time, and the technician who shows up is on our payroll — no subcontractors, no anonymous national call centers reselling your job to whoever bids lowest.",
      },
      {
        q: "What areas of Metro Detroit do you serve?",
        a: "All of Metro Detroit — Detroit, Warren, Sterling Heights, Troy, Dearborn, Livonia, Royal Oak, Southfield, Farmington Hills, Pontiac, Canton, Westland, Taylor, Redford, Allen Park, Lincoln Park, Wyandotte, Ferndale, Birmingham, Rochester Hills, Shelby Township, Clinton Township, Macomb, St. Clair Shores, Novi, Northville, Plymouth, and every city in Wayne, Oakland, and Macomb counties. See our full service-area map.",
      },
      {
        q: "What are your hours?",
        a: "We're open 24 hours Sunday through Thursday (Eastern Time). Friday we close at 6:00 PM. Saturday we're closed. During open hours a real dispatcher answers — no call center, no robocall.",
      },
      {
        q: "How long does a whole-home duct cleaning take?",
        a: "A typical single-furnace Metro Detroit home takes 2–4 hours. That includes setting up the negative-pressure vacuum at the furnace, agitating and cleaning every supply and return run, cleaning the main trunk lines, and wiping down every register. Larger homes, two-furnace systems, or add-ons like dryer vent cleaning and sanitizing extend the visit — we give you a realistic time window when we book.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay, Tap to Pay, and cash. We email you a digital invoice on every job — handy for landlord records, home-sale disclosures, and insurance claims after smoke or flood restoration work.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    emoji: "💰",
    description: "Honest, flat-rate quotes — no bait-and-switch.",
    items: [
      {
        q: "How much does whole-home air duct cleaning cost in Metro Detroit?",
        a: "For a single-furnace home, a proper negative-pressure source-removal cleaning typically runs $350–$600 depending on home size, vent count, and how dirty the system is. A second furnace or system adds $150–$250. We quote a flat rate before any work starts — never an hourly meter, never a driveway surprise.",
      },
      {
        q: "Why should I avoid the '$99 whole house' duct cleaning ads?",
        a: "Because real source-removal cleaning takes a two-person crew, a truck-mounted or gas-powered negative-pressure vacuum, and several hours — no legitimate company can do that for $99. The $99 ads are bait: the crew shows up, waves a shop-vac at a few registers, then 'discovers' mold and pressures you into a $1,500+ upsell. It's the most common scam in this industry, and it's the reason we publish our real price ranges up front.",
      },
      {
        q: "Do you charge a service-call or inspection fee?",
        a: "A service/inspection call is about $99, and it's credited toward the job if you go ahead with the cleaning. It covers the drive, a camera inspection of your ductwork, and a written flat-rate quote. If you decline the quote, you owe only the inspection fee — never a surprise labor charge.",
      },
      {
        q: "How much is dryer vent cleaning?",
        a: "As a standalone visit, dryer vent cleaning runs $120–$200 depending on the length and routing of the vent — condos and second-floor laundry rooms with long runs sit at the top of the range. Bundled with a duct cleaning, it's discounted since we're already set up at your home. It's the cheapest fire prevention you can buy.",
      },
      {
        q: "What does duct sanitizing cost, and do I need it?",
        a: "Our sanitizing and deodorizing add-on runs $75–$150 using an EPA-registered antimicrobial, applied only after the ducts have been physically cleaned — fogging chemicals over dirt does nothing. It makes sense after smoke damage, pest issues, visible microbial growth, or persistent odors. If your system doesn't need it, we'll tell you so; we don't sell it on every job.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. The flat rate we quote is the price you pay. If we find something on-site that genuinely changes the scope — say, a second furnace the customer forgot to mention, or a crushed duct that needs repair — we explain it and re-quote before touching anything, and you can decline.",
      },
    ],
  },
  {
    id: "sameday",
    title: "Same-Day & Emergency",
    emoji: "🚨",
    description: "Smoke, puff-backs, floods, and blocked dryer vents.",
    items: [
      {
        q: "Do you offer same-day service?",
        a: "Yes. We keep same-day slots open Sunday through Thursday for urgent calls — furnace puff-backs, post-fire smoke odor, sewage or flood contamination, and dryer vents so blocked the dryer overheats or trips its thermal fuse. Call in the morning and we can usually be there the same day anywhere in Wayne, Oakland, or Macomb counties.",
      },
      {
        q: "My furnace had a puff-back and there's soot everywhere. Can you help?",
        a: "Yes — this is one of our core restoration services. A puff-back blows oil or gas soot through the entire duct system, and running the blower spreads it to every room. Shut the system off, and call us: we do full negative-pressure duct cleaning, soot removal from the furnace plenum and blower compartment, and deodorizing. We document everything with photos for your insurance claim.",
      },
      {
        q: "My dryer takes two or three cycles to dry clothes. Is that urgent?",
        a: "Treat it as urgent. Long dry times almost always mean a lint-restricted vent, and a restricted vent is the leading cause of dryer fires — U.S. fire departments respond to thousands of them every year. It's also silently costing you money on every load. Stop using the dryer for anything unattended and get the vent cleaned; it's a quick, inexpensive visit.",
      },
      {
        q: "We just had flood or sewage water in the basement. Do the ducts need attention?",
        a: "If water reached any ductwork — common with basement and crawlspace runs in older Detroit, Dearborn, and downriver homes — yes. Wet ducts grow microbial contamination fast, and the blower will distribute it through the house. We inspect with a camera, clean and sanitize salvageable runs, and tell you honestly if any flexible duct sections are too contaminated to save and should be replaced instead.",
      },
      {
        q: "There's a dead animal smell coming from my vents. Can you find it?",
        a: "Yes. Mice, squirrels, and birds get into Metro Detroit ductwork through disconnected runs and unscreened exterior vents, especially in fall when they're seeking warmth. We run a camera through the system to locate the source, remove it, clean and sanitize the affected runs, and seal the entry point so it doesn't happen again.",
      },
    ],
  },
  {
    id: "process",
    title: "The Cleaning Process",
    emoji: "🌀",
    description: "What a real source-removal cleaning looks like.",
    items: [
      {
        q: "What method do you use to clean air ducts?",
        a: "Negative-pressure source removal, the method NADCA (the National Air Duct Cleaners Association) sets as the industry standard. We connect a high-powered vacuum to your main trunk line near the furnace, put the entire system under suction, then work through every supply and return run with compressed-air whips and rotating brushes that break contaminants loose and send them into the vacuum — not into your living room.",
      },
      {
        q: "Does duct cleaning make a mess in my house?",
        a: "Done correctly, no. Because the whole system is under negative pressure while we agitate, dislodged dust travels toward the vacuum, not out of the registers. We use drop cloths at every work area, corner guards for hoses on stairs, and shoe covers, and we wipe down every register before we leave. If a company just blows compressed air into vents without a vacuum attached, that's when houses get dusty.",
      },
      {
        q: "Do you clean the furnace and AC coil too, or just the ducts?",
        a: "We clean both when you want the full job. The blower wheel and evaporator coil are where the airflow actually gets restricted — a caked blower wheel can cut airflow dramatically and make the furnace run longer and hotter. Furnace and coil cleaning covers the blower wheel, blower compartment, and evaporator coil, and it's the single best add-on for HVAC efficiency and lifespan.",
      },
      {
        q: "How will I know the ducts are actually clean?",
        a: "We show you. Before-and-after photos or camera footage of your actual ductwork are part of every job — you'll see the trunk lines before we start and after we finish. Any company that can't show you the inside of your own ducts after 'cleaning' them is asking you to take an invisible service on faith. Don't.",
      },
      {
        q: "How often should air ducts be cleaned?",
        a: "For most Metro Detroit homes, every 3–5 years is a sensible cadence. Clean sooner after renovations or drywall work, when moving into a home with unknown history, after pest or water issues, if you have shedding pets or allergy sufferers, or if registers show visible dust buildup and matted debris. In between, good filtration matters more than frequent cleaning — we'll recommend the right filter for your system.",
      },
      {
        q: "Should ducts be cleaned after a renovation or new construction?",
        a: "Absolutely — it's one of the clearest-cut cases for cleaning. Drywall dust, sawdust, and construction debris settle into ductwork during a project, and the blower will recirculate fine silica dust for months afterwards. Post-construction cleaning removes it at the source, and we recommend doing it after the dusty trades are done but before you move furniture in.",
      },
    ],
  },
  {
    id: "dryer-vents",
    title: "Dryer Vents",
    emoji: "🔥",
    description: "Fire safety, efficiency, and long condo vent runs.",
    items: [
      {
        q: "How often should a dryer vent be cleaned?",
        a: "Once a year for most households, and every 6–9 months for heavy users — big families, pet owners whose laundry carries hair, and homes where the vent run is long or has multiple elbows. The lint screen catches only a fraction of the lint; the rest accumulates in the vent duct, where it restricts airflow and creates a genuine fire hazard.",
      },
      {
        q: "What are the warning signs of a clogged dryer vent?",
        a: "Clothes taking more than one cycle to dry, the dryer top or laundry room getting hot, a burning smell during operation, visible lint around the outside vent flap, and the flap not opening when the dryer runs. Newer dryers may also shut down on a thermal fuse. Any one of these is reason to have the vent cleaned before the next load.",
      },
      {
        q: "Why are condo and apartment dryer vents a special problem?",
        a: "Because the runs are long. Many Metro Detroit condos and newer homes with second-floor laundry route the vent 20–40 feet through walls and ceilings with several elbows, and every foot and every bend collects lint. Long runs clog faster, are impossible to clean with a home brush kit, and are exactly where lint fires start. We clean the full run with rotary brushes and verify airflow at the exterior termination.",
      },
      {
        q: "Can you clean a vent that exits on the roof?",
        a: "Yes. Roof-terminated dryer vents are common in condos and complete tear-off builds, and they're the most neglected because homeowners can't see or reach them. We clean them from both ends, check the roof cap and screen for bird nests, and confirm the damper moves freely — a stuck roof damper traps moist air and lint in the run all winter.",
      },
      {
        q: "Is flexible foil dryer duct safe?",
        a: "The thin foil accordion-style duct is a lint trap and most manufacturers prohibit it — the ridges catch lint and it crushes easily behind the dryer. Code and manufacturer guidance call for smooth rigid metal duct. If we find foil or the old white vinyl duct (which is a genuine fire hazard) during a cleaning, we'll tell you and can replace the transition with the correct semi-rigid or rigid metal.",
      },
    ],
  },
  {
    id: "health",
    title: "Health & Air Quality",
    emoji: "🌬️",
    description: "Allergies, dust, odors, and honest answers about mold.",
    items: [
      {
        q: "Will duct cleaning help my allergies?",
        a: "It can meaningfully help when the ducts are genuinely contributing — visible dust blowing from registers, pet dander accumulation, or debris from renovation or pests. Cleaning removes the reservoir of dust, dander, and pollen the blower recirculates. We pair it with a filtration recommendation, because a good filter is what keeps the system clean afterwards. What we won't do is promise duct cleaning cures allergies — no honest company can.",
      },
      {
        q: "Why is there so much dust in my house even after I clean?",
        a: "If you dust on Saturday and surfaces are filmy by Tuesday, your forced-air system may be redistributing dust from the ductwork, running with a bypassed or poor filter, or pulling in dust through leaky return runs in the basement or crawlspace. A camera inspection tells us which one. Michigan's long heating season means the blower runs for months on end, so a dirty system shows up on your furniture fast.",
      },
      {
        q: "I was told I have mold in my ducts. Should I panic?",
        a: "No — and be skeptical of whoever told you, especially if they diagnosed it in thirty seconds during a $99 special. Genuine microbial growth in ducts is real but far less common than scare-tactic salesmen claim; what's usually called 'mold' is ordinary dust and dirt. We show you camera footage of your actual ducts, and if growth is genuinely present we clean it at the source and apply an EPA-registered antimicrobial only after physical cleaning.",
      },
      {
        q: "Does Michigan's climate make duct contamination worse?",
        a: "It does, in a few specific ways. Our long heating season means forced-air furnaces run six-plus months a year, cycling household dust continuously. Basement ductwork — nearly universal here — picks up humidity in summer and can condense moisture inside runs. And older Detroit, Dearborn, and Grosse Pointe housing stock often has decades-old ducts with accumulated debris, original construction dust, and leaky joints drawing in basement air.",
      },
      {
        q: "Do you do air-quality checks or duct inspections without a full cleaning?",
        a: "Yes. Our camera duct inspection and air-quality check (~$99, credited toward any job you book) shows you the actual condition of your ductwork before you spend anything on cleaning. Sometimes the honest answer after an inspection is that your ducts don't need cleaning yet — we'll tell you that, and you'll know exactly where you stand for the future.",
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
        a: "Yes — BH Air Duct Cleaning Metro Detroit is licensed & insured for residential and commercial air duct work in Michigan. We carry general liability and workers' comp insurance, and provide a certificate of insurance on request for commercial clients and property managers.",
      },
      {
        q: "Do you follow NADCA standards?",
        a: "Yes. Our cleaning process follows the NADCA ACR standard — negative-pressure source removal, cleaning of the entire HVAC system rather than just the visible vents, and verification of the results. When you're comparing companies, asking whether they clean to the NADCA standard is the fastest way to separate real duct cleaners from van-and-shop-vac operations.",
      },
      {
        q: "Are your technicians background-checked?",
        a: "Yes. Every technician passes a background check before joining the team and arrives in uniform in a marked vehicle. We also do internal reference checks before anyone works inside a customer's home.",
      },
      {
        q: "What guarantee do you offer on the work?",
        a: "We stand behind every cleaning with before-and-after photo documentation and a workmanship guarantee: if we missed a section of ductwork, we come back and make it right at no charge. Dryer vent cleanings include an airflow verification at the exterior termination so you can see the vent is genuinely clear before we leave.",
      },
      {
        q: "Will I get a receipt?",
        a: "Yes. Every job ends with a digital invoice emailed to you, including our company name, the technician's name, the work performed, and any add-ons. Save it for home-sale disclosures, landlord records, insurance claims after restoration work, and your own maintenance log.",
      },
    ],
  },
];

export const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((s) => s.items);
