// Blog post data + body content. Generated for BH Garage Door Metro Detroit — Metro Detroit, MI.
// Bodies use a very small markdown-ish dialect: lines starting with `## ` are H2, `### ` are H3,
// lines starting with `- ` are list items, blank lines split paragraphs.

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  category: "Repair" | "Springs" | "Openers" | "Installation" | "Maintenance" | "Safety" | "Buying Guides";
  readMinutes: number;
  date: string; // ISO
  heroImage: string;      // /blog/<slug>-hero.png
  heroAlt: string;
  secondaryImage: string; // /blog/<slug>-secondary.png
  secondaryAlt: string;
  body: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "garage-door-wont-open-troubleshooting",
    title: "Garage Door Won't Open? 8 Things to Check Before Calling a Pro",
    metaTitle: "Garage Door Won't Open? 8 DIY Checks Before Calling for Repair",
    excerpt:
      "Stuck in your Metro Detroit driveway with a door that won't budge? Before you assume the worst, run through these eight quick checks. Several of them fix the problem in under five minutes.",
    category: "Repair",
    readMinutes: 8,
    date: "2026-03-04",
    heroImage: "/blog/garage-door-wont-open-troubleshooting-hero.png",
    heroAlt: "Homeowner pressing a garage door remote at a Michigan home while the door sits stuck half open.",
    secondaryImage: "/blog/garage-door-wont-open-troubleshooting-secondary.png",
    secondaryAlt: "Technician inspecting a garage door opener trolley and rail with a flashlight.",
    body: `
It's 7:40 AM, you're already late, and the garage door just hums at you — or worse, does nothing at all. Before you panic and start rearranging your day, know this: a good share of "dead" garage doors in Metro Detroit are fixed by the homeowner in under five minutes. Run through this checklist in order, and if you land on one of the serious items at the end, BH Garage Door Metro Detroit can usually be there same-day.

## 1. Check the Wall Button First, Not the Remote

If the wall button opens the door but the remote doesn't, the door is fine — your remote battery is dead or the remote lost its pairing. Swap the coin cell (usually a CR2032) before anything else. If neither works, keep reading.

## 2. Is the Opener Even Getting Power?

Openers plug into a ceiling outlet that's often on the same circuit as garage receptacles. If the opener's light won't come on at all, check the breaker panel and, in older Detroit and Dearborn homes, the GFCI outlet the opener may be daisy-chained through. Press "reset" on any tripped GFCI in the garage or nearby laundry area.

## 3. Look for the Blinking Photo-Eye Sensor

The two small sensors near the floor on either side of the door are the most common culprit when a door opens fine but *won't close*. If one is blinking, the beam is blocked or misaligned. Move the snow shovel, kick the leaves away, and gently nudge the sensor brackets until both LEDs are solid. Michigan winters are hard on these — road salt film on the lens is enough to break the beam, so give both lenses a wipe.

## 4. Was the Emergency Release Pulled?

That red cord hanging from the opener rail disengages the door from the motor. If someone pulled it (kids are famous for this), the opener will run but the door won't move. With the door fully CLOSED, pull the cord toward the door to re-engage, then run the opener — the trolley will click back in.

## 5. Check the Lock Mode on Your Wall Console

Multi-function wall consoles from LiftMaster and Chamberlain have a "lock" button that disables all remotes (a vacation feature). If remotes died all at once but the wall button works, hold the lock button for a few seconds to toggle it off.

## 6. Listen: Does It Hum, Grind, or Click?

- A hum with no movement often means a failed capacitor or a stripped main gear — very common on older chain-drive units.
- Grinding usually means the trolley is jammed or the gear is chewed up.
- A single click with nothing else often points to the logic board.

None of these are DIY-friendly, but knowing the sound helps our dispatcher quote you accurately on the phone.

## 7. Look at the Springs Above the Door

Look at the shaft above the door (torsion system). If you see a clean two-inch gap in the coil, the spring has snapped — and this changes everything. Do NOT keep hitting the opener button, and do not try to lift the door by hand. A two-car steel door with a broken spring can weigh over 200 lbs. This is the most common serious failure we see across Metro Detroit, especially during the first hard freeze of the year.

## 8. Is the Door Frozen to the Slab?

A genuinely Michigan problem: meltwater refreezes overnight and glues the bottom seal to the concrete. The opener strains, then gives up (newer units detect the resistance and stop). Break the ice seal along the bottom edge with gentle pressure — never chip at the rubber with a screwdriver — and pour warm (not boiling) water along the seal if needed.

## When It's Time to Call

If you've reached this point and the door still won't move — or you found a snapped spring, frayed cable, or the door is crooked in its tracks — it's a job for a technician. Call BH Garage Door Metro Detroit at (313) 236-4558. We serve every city in Wayne, Oakland, and Macomb counties with same-day repair, we quote a flat rate before we dispatch, and our trucks carry springs, cables, rollers, and opener parts so nearly every repair is finished in one visit.

For a fast written estimate, you can also [request a free quote](/quote) online.
`,
  },

  {
    slug: "broken-garage-door-spring-what-to-do",
    title: "Broken Garage Door Spring: What It Looks Like, Why It's Dangerous, and What To Do",
    metaTitle: "Broken Garage Door Spring? What To Do (and Not Do) | Metro Detroit",
    excerpt:
      "That gunshot bang from the garage was probably your torsion spring letting go. Here's how to confirm it, why you should never open the door, and what a proper replacement involves in Metro Detroit.",
    category: "Springs",
    readMinutes: 9,
    date: "2026-03-11",
    heroImage: "/blog/broken-garage-door-spring-what-to-do-hero.png",
    heroAlt: "Close-up of a snapped garage door torsion spring with a visible gap in the coil.",
    secondaryImage: "/blog/broken-garage-door-spring-what-to-do-secondary.png",
    secondaryAlt: "Technician winding a new torsion spring with winding bars above a garage door.",
    body: `
Most Metro Detroit homeowners meet their garage door spring for the first time on the day it breaks. Usually there's a story: a bang from the garage loud enough that neighbors ask about it, or a door that suddenly weighs a ton. Here's everything you need to know in the aftermath — including the mistakes that send people to the ER every winter.

## How to Confirm the Spring Is Broken

Look above the closed door. On most doors you'll see a steel shaft running across the header with one or two tightly wound springs on it. A healthy torsion spring is one continuous coil. A broken one has an unmistakable **two-inch gap** where the steel separated. Other tell-tale signs:

- The opener strains, lifts the door six inches, and gives up.
- The top section bends inward when the opener tries to lift.
- Lift cables on both sides suddenly look loose or have jumped off their drums.
- The door slams shut much faster than normal (if the break happened mid-travel).

## Why Springs Break — Especially in Michigan Winters

Springs are the counterweight of the whole system: they store the energy needed to lift a 150–300 lb door so the opener only has to do a fraction of the work. Every open/close is one "cycle," and standard springs are rated for about 10,000 cycles — roughly 7–10 years of average use.

Cold weather is the accelerant. Steel gets more brittle as temperatures drop, which is why our spring-replacement calls in Warren, Sterling Heights, and Livonia spike during the first hard freeze and every polar-vortex snap. If your door is 8+ years old and shrieking or straining on cold mornings, the spring is telling you something.

## What NOT To Do With a Broken Spring

- **Do not keep pressing the opener button.** The opener isn't designed to lift the door's full weight; you'll strip the gear or bend the top section, turning a spring job into a spring-plus-opener-plus-panel job.
- **Do not pull the red release cord and lift the door by hand** unless it's a genuine emergency. Without the counterbalance the door is dead weight, and if it slips it will not stop until it hits the floor — or whatever is under it.
- **Do not attempt a DIY replacement.** Torsion springs are wound under extreme tension with winding bars. A slipped bar delivers the force of a swung baseball bat. Every garage door pro has stories; the ERs in Metro Detroit see these injuries every year.

## One Spring Broke — Should You Replace Both?

On a two-spring door: yes, almost always. Both springs have identical mileage. When one lets go, the other is living on borrowed time — typically it fails within months, and you pay a second service call for the same job. Replacing the pair restores an even balance and costs far less than two separate visits. We discount the second spring on every double replacement.

## What a Professional Replacement Involves

A proper spring job is more than swapping the coil. When BH Garage Door Metro Detroit replaces springs, the tech will:

- Measure the old spring (wire size, diameter, length) and weigh the door to spec the correct replacement — not just "close enough."
- Install galvanized, high-cycle springs matched to your door's exact weight.
- Inspect and usually replace the center bearing, and check the end-bearing plates.
- Check lift cables for fraying (they usually go next) and reset them on the drums.
- Rebalance the door so it floats at mid-height, and recalibrate the opener's force settings.

Most jobs take 45–60 minutes. In Metro Detroit, expect $180–$280 for a single spring and $260–$400 for a pair, quoted flat-rate on the phone before we roll a truck.

## Consider a High-Cycle Upgrade

If you use the garage as your front door (like most of Metro Detroit does), you're putting 6–10 cycles a day on your springs, which burns through a standard 10,000-cycle set in 3–4 years. High-cycle springs (25,000–50,000 cycles) cost $50–$90 more per spring and routinely last 15–20 years. Best money you can spend on a garage door.

## Same-Day Spring Replacement Across Metro Detroit

A broken spring effectively disables your garage — and if your car is inside, your morning. We stock the full range of residential spring sizes on every truck and replace springs same-day across Detroit, Dearborn, Troy, Royal Oak, Farmington Hills, Canton, and the rest of Wayne, Oakland, and Macomb counties. Call (313) 236-4558 or [request a quote](/quote) and we'll give you a flat price before we dispatch.
`,
  },

  {
    slug: "garage-door-opener-buying-guide",
    title: "Garage Door Opener Buying Guide: Belt vs. Chain vs. Wall-Mount (2026)",
    metaTitle: "Garage Door Opener Buying Guide 2026: Belt vs Chain vs Jackshaft",
    excerpt:
      "Replacing your opener? Here's the honest breakdown of belt drives, chain drives, and wall-mount jackshaft units — plus horsepower, Wi-Fi, and battery backup — from techs who install them every day in Metro Detroit.",
    category: "Buying Guides",
    readMinutes: 10,
    date: "2026-03-18",
    heroImage: "/blog/garage-door-opener-buying-guide-hero.png",
    heroAlt: "New belt-drive garage door opener mounted on the ceiling of a modern two-car garage.",
    secondaryImage: "/blog/garage-door-opener-buying-guide-secondary.png",
    secondaryAlt: "Garage door opener wall console and wireless keypad beside an interior door.",
    body: `
Openers used to be a commodity: a motor, a chain, a lightbulb. Today the differences between a $220 big-box unit and a properly specced installation are real — noise, lifespan, security, and whether your door still opens when a storm knocks the power out in Macomb County. Here's the guide we wish every customer read before buying.

## The Three Drive Types, Honestly Compared

### Chain Drive — The Workhorse

A metal chain drives the trolley. It's the cheapest, most tolerant of heavy doors, and lasts forever with occasional lubrication. The tradeoff is noise — a metallic rattle you'll hear through the floor. Right choice for: detached garages, rental properties, budget replacements. Installed cost in Metro Detroit: roughly $350–$500.

### Belt Drive — The Right Answer for Most Homes

A steel-reinforced rubber belt replaces the chain. It's dramatically quieter — the loudest thing becomes the door itself — and modern belts carry lifetime warranties from LiftMaster. If your garage is attached, or there's a bedroom above it, this is what we recommend, full stop. Installed: roughly $450–$650.

### Wall-Mount (Jackshaft) — The Premium Pick

Instead of a ceiling rail, the unit mounts on the wall beside the door and turns the torsion shaft directly. Zero ceiling vibration, frees the ceiling for storage racks, and most models bundle battery backup and a deadbolt-style automatic lock. It needs a torsion-spring door with usable side clearance. Installed: roughly $750–$1,000.

## Horsepower: Don't Overthink It

- **1/2 HP** — fine for a single steel door.
- **3/4 HP (or DC equivalent)** — the sweet spot for insulated two-car doors, which is most of Metro Detroit.
- **1+ HP** — oversized wood doors and full-view glass doors.

A note from the field: an opener straining isn't usually a horsepower problem — it's a door balance problem. If your door is heavy because a spring is fatigued, a bigger motor just masks it until something breaks. We always balance-test the door before an opener install.

## Wi-Fi Is No Longer Optional

Every opener we install includes smartphone control (myQ on LiftMaster/Chamberlain, Aladdin Connect on Genie). This isn't a gimmick:

- Get an alert if the door is open after 10 PM.
- Close it from your desk in downtown Detroit when you can't remember.
- Grant one-time access for a delivery or a contractor.
- Check the door's history — every open and close, timestamped.

If your existing opener works fine, a retrofit hub adds all of this for a fraction of the cost of replacement. We install those too.

## Battery Backup: Worth It in Michigan

Southeast Michigan's storm outages are legendary — and an outage is exactly when you need the car. Battery-backup models give you 20+ cycles during an outage and are standard on the wall-mount units we install. If anyone in the house can't lift a door manually, treat backup power as essential, not optional.

## Security Features Worth Having

- **Rolling-code remotes** are standard on everything modern — the code changes with every press, so code-grabbing is a non-issue.
- **Automatic locks** (on wall-mount models) throw a physical bolt into the track every time the door closes. Fishing attacks and forced lifts simply don't work.
- **Motion-activated lighting** and integrated LED rings have effectively replaced the burned-out opener bulb problem.

## What a Professional Install Includes (Ours, Anyway)

- Removal and disposal of the old unit.
- New rail, properly reinforced header bracket, and a balance check of the door itself.
- Safety sensor installation at the correct height, with tested auto-reverse.
- Force and travel-limit calibration.
- Two remotes, one wireless keypad, HomeLink pairing in your cars, and app setup on your phones.

## The Bottom Line

For most Metro Detroit homes: a 3/4 HP-class belt drive with Wi-Fi and battery backup is the right buy. Detached garage on a budget: chain drive, no shame in it. Premium build or ceiling storage plans: wall-mount jackshaft.

Want a flat-rate installed price? Call BH Garage Door Metro Detroit at (313) 236-4558 or [request a quote](/quote) — we'll quote LiftMaster, Chamberlain, and Genie options side by side.
`,
  },

  {
    slug: "new-garage-door-cost-michigan",
    title: "What Does a New Garage Door Cost in Michigan? (Real 2026 Numbers)",
    metaTitle: "New Garage Door Cost in Michigan 2026 — Real Installed Prices",
    excerpt:
      "From builder-grade steel to full-view glass: real installed prices for new garage doors in Metro Detroit, what drives the cost up or down, and why it's the best-ROI exterior project you can do.",
    category: "Installation",
    readMinutes: 9,
    date: "2026-03-25",
    heroImage: "/blog/new-garage-door-cost-michigan-hero.png",
    heroAlt: "New carriage-style insulated garage doors on a brick Michigan colonial home.",
    secondaryImage: "/blog/new-garage-door-cost-michigan-secondary.png",
    secondaryAlt: "Installer leveling a new insulated garage door section on the tracks.",
    body: `
"What's a new garage door cost?" is the question we answer most at BH Garage Door Metro Detroit — and the internet's answers are usually national averages that don't survive contact with a Michigan winter or a Metro Detroit quote sheet. Here are the real numbers we install at, and what actually moves them.

## Installed Prices in Metro Detroit (2026)

- **Non-insulated steel, single-layer** — $850–$1,300 installed (two-car). Fine for detached garages; we rarely recommend it for attached ones.
- **Insulated steel sandwich, R-9 to R-13** — $1,400–$2,200 installed. The Metro Detroit workhorse. Quieter, stiffer, warmer, more dent-resistant.
- **Premium insulated, R-16 to R-18** — $2,000–$2,800 installed. For heated garages, workshops, and bedrooms-over-garage floor plans.
- **Carriage-house / wood-look steel** — $2,500–$5,000 installed. The curb-appeal category: embossed wood grain, decorative hardware, window options.
- **Full-view aluminum & glass** — $4,500–$8,000+ installed. The modern statement door. Frosted, clear, or tinted panels in anodized frames.

Single-car doors run roughly 60–70% of the two-car price. All our installation quotes include haul-away of the old door, new track and springs, and reconnecting/calibrating your opener.

## What Actually Drives the Price

### Insulation (and Why It Matters Here)

Michigan is a two-layer-minimum state, in our opinion. An insulated door keeps an attached garage 10–20°F warmer in January, which your water heater, your car battery, and the room above the garage all notice. Insulated doors are also structurally stiffer — they dent less and stay quieter over their life.

### Springs: Cycle Rating

Every new door includes new springs. Standard 10,000-cycle springs are included in the prices above; upgrading to 25,000-cycle springs adds $100–$180 and is the single best line-item upgrade on the sheet if you cycle the door daily.

### Windows

A row of top-section windows adds $200–$600 depending on glass and grille style. Worth it for natural light; choose frosted or high placement if the garage stores anything valuable.

### Sizing and Framing

Standard sizes (8x7, 9x7, 16x7) install fastest. Odd-size openings in older Detroit, Ferndale, and Grosse Pointe garages may need custom ordering or light framing work — usually $150–$400 extra, quoted upfront after we measure.

## The ROI Case (It's Not Even Close)

Cost-versus-value studies have ranked garage door replacement the **#1 ROI exterior remodeling project in America** for years running — typically recouping 100%+ of its cost at resale. No kitchen, bath, or deck project comes close. A dated, dented door drags an entire facade; a new one modernizes the whole front of the house for a four-figure spend.

## Repair or Replace? Our Honest Rule of Thumb

- **Repair** if the door is under ~12 years old with one problem: a broken spring, a dented panel, worn rollers. Panel replacement in particular can save a door that's cosmetically wounded but structurally fine.
- **Replace** if the door is 15+ years old and showing multiple issues, is a non-insulated door on an attached garage, has rusting sections or delaminating skins, or predates modern safety standards. Pouring repair money into a door from the '90s rarely pencils out.

We'll tell you which side of the line you're on — even when the answer is the cheaper one. It's why our reviews look the way they do.

## How the Process Works With Us

- **Free on-site measure and written quote** — we measure the opening, headroom, and side clearance, and check your opener's compatibility.
- **Side-by-side options** — like-for-like quotes across at least two brands (we install Clopay, Amarr, C.H.I., Wayne Dalton, and Raynor).
- **Install day** — typically 3–5 hours: old door and track out, new door, track, and springs in, opener reconnected and calibrated, jobsite broom-clean.

Ready for real numbers on your house? Call (313) 236-4558 or [request your free quote](/quote) — we serve every city in Wayne, Oakland, and Macomb counties.
`,
  },

  {
    slug: "winter-garage-door-maintenance-michigan",
    title: "The Michigan Winter Garage Door Survival Guide: 10-Point Maintenance Checklist",
    metaTitle: "Winter Garage Door Maintenance Checklist for Michigan Homes",
    excerpt:
      "Cold snaps break more springs, freeze more seals, and kill more openers than anything else we see. This 10-point checklist gets your door through a Metro Detroit winter without a 6 AM emergency call.",
    category: "Maintenance",
    readMinutes: 8,
    date: "2026-04-01",
    heroImage: "/blog/winter-garage-door-maintenance-michigan-hero.png",
    heroAlt: "Snow-covered Michigan driveway leading to a frost-dusted garage door on a winter morning.",
    secondaryImage: "/blog/winter-garage-door-maintenance-michigan-secondary.png",
    secondaryAlt: "Technician lubricating garage door rollers and hinges on a sectional door track.",
    body: `
Every January, the first polar-vortex morning fills our dispatch board before sunrise: snapped springs in Sterling Heights, doors frozen to slabs in Livonia, openers straining in Troy. Cold is the single hardest thing on a garage door — steel gets brittle, grease thickens, rubber stiffens. The good news: an hour of fall maintenance prevents almost all of it. Here's the checklist our techs use.

## 1. Lubricate Everything That Moves (With the Right Stuff)

Use a lithium- or silicone-based garage door lubricant — never WD-40, which is a solvent that strips what little grease is left. Hit the spring coils (a light coat dampens corrosion and quiets winding noise), every hinge pivot, the roller bearings, and the opener's chain or screw per its manual. Wipe the excess. Twice a year: fall and spring.

## 2. Test the Door's Balance

Pull the red release cord with the door closed, then lift the door halfway by hand and let go. A balanced door floats in place. If it slams down or shoots up, spring tension is off — and an unbalanced door forces the opener to do work it wasn't built for all winter. Spring adjustment is a technician job (see our [spring guide](/blog/broken-garage-door-spring-what-to-do)).

## 3. Inspect Springs for Rust and Gaps

Rust pits create the stress points where cold snaps finish the job. Look for orange bloom, stretched or uneven coils, and of course any gap. If your springs are 7+ years old, budget for replacement on your terms — a scheduled morning appointment beats a 6 AM emergency with the car trapped inside.

## 4. Check the Cables (Look, Don't Touch)

Frayed strands at the bottom brackets mean the cable is dying. Cables are under the same tension as the springs, so never adjust them yourself — but a 10-second visual check twice a year catches nearly every failure before it happens.

## 5. Replace the Bottom Seal Before It Freezes to the Floor

A cracked, stiff bottom seal does two bad things in winter: it lets in snow, salt, and rodents, and it freezes to the slab overnight. If yours is stiff or visibly gapped, replace it in the fall ($80–$150 installed, including the retainer if needed). Pro tip for icy mornings: a strip of silicone spray along the rubber keeps it from bonding to the concrete.

## 6. Seal the Perimeter

Check the vinyl weatherstop along the sides and top of the door. Gaps here are why your garage has snowdrifts inside the door on a windy day, and they matter double if the garage is heated or has living space above.

## 7. Test the Photo-Eye Sensors

Wipe both lenses (salt film is a repeat offender here), confirm both LEDs are solid, and test: start the door closing and wave a broom through the beam. The door must reverse instantly. This is the system that protects kids, pets, and bumpers — don't skip it.

## 8. Test the Auto-Reverse Force Setting

Lay a 2x4 flat on the floor under the door and close it. The door must reverse when it touches the board. Cold thickens the opener's grease and stiffens the door, so a force setting that was fine in September can be dangerous — or cause phantom reversals — in January.

## 9. Tighten the Hardware

A door cycles 1,000+ times a year and vibration loosens everything. Snug (don't gorilla) the hinge screws, track brackets, and the opener's header and ceiling bracket bolts with a socket wrench.

## 10. Listen to Your Door for 30 Seconds

Run a full open/close and just listen. Grinding = dry or worn rollers. Popping = loose hinges or sections binding. Squealing = the springs want lubricant. Rattling = loose hardware or a stretched chain. Every winter failure we see announced itself weeks earlier in sound.

## Or Let Us Do All Ten

Our 25-point tune-up covers everything above plus spring balance adjustment, opener force calibration, roller inspection, and a written condition report — typically 45 minutes, and cheap insurance against a February emergency. It's the same inspection we run on commercial maintenance contracts, applied to your house.

Book a fall tune-up anywhere in Metro Detroit: (313) 236-4558, or [request it online](/quote). Sun–Thu 24 hours, Friday until 6 PM.
`,
  },

  {
    slug: "insulated-vs-non-insulated-garage-doors",
    title: "Insulated vs. Non-Insulated Garage Doors: What Michigan Homeowners Should Know",
    metaTitle: "Insulated vs Non-Insulated Garage Doors in Michigan — Full Comparison",
    excerpt:
      "R-values, single vs. triple-layer construction, and real Michigan math: when an insulated garage door pays for itself and when you can honestly skip it.",
    category: "Buying Guides",
    readMinutes: 8,
    date: "2026-04-08",
    heroImage: "/blog/insulated-vs-non-insulated-garage-doors-hero.png",
    heroAlt: "Cutaway of an insulated steel garage door panel showing the foam core between steel skins.",
    secondaryImage: "/blog/insulated-vs-non-insulated-garage-doors-secondary.png",
    secondaryAlt: "Warm heated garage workshop with an insulated garage door closed against winter.",
    body: `
If you're pricing a new garage door in Metro Detroit, the first fork in the road is insulation. The price gap between a bare steel door and a well-insulated one is real — so is the difference in how your garage (and the rooms around it) feel in February. Here's the honest breakdown.

## The Three Types of Door Construction

### Single-Layer (Non-Insulated)

One skin of steel. Light, cheap, and every sound and temperature swing passes straight through. In winter the inside face of the door will be nearly the same temperature as the outside air.

### Double-Layer (Vinyl-Backed Polystyrene)

A steel skin plus a rigid foam board with a vinyl backer. R-values around 6–9. A meaningful step up in stiffness and quiet for a modest price bump.

### Triple-Layer / Sandwich (Polystyrene or Polyurethane Core)

Steel–foam–steel construction. Injected polyurethane doors reach R-13 to R-18 and are dramatically stiffer, quieter, and more dent-resistant. This is what we install most in Metro Detroit, and what we put on our own houses.

## What R-Value Actually Buys You in Michigan

An insulated door typically keeps an unheated attached garage **10–20°F warmer than outside** in winter. That gap is the difference between a garage that hovers near freezing and one that sits at 20°F when it's zero outside. Practical consequences:

- **Cars start easier and batteries last longer.** Cold cranking at 0°F vs 25°F is a real difference.
- **The rooms over and beside the garage stay warmer.** If you have a bonus room above the garage, the door is part of that room's thermal envelope whether you like it or not.
- **Pipes and stored items are protected.** Paint, power tools with batteries, water softener salt, the fridge in the garage — all happier above freezing.
- **Your furnace works less.** The garage acts as a thermal buffer against the house wall it shares.

## The Noise Nobody Mentions

Insulated doors are quieter twice over: the foam deadens road and neighborhood noise coming through the door, and the stiffer sandwich construction doesn't rattle and boom in the track the way single-skin doors do. On a busy street in Royal Oak or Dearborn, this alone sells the upgrade.

## Durability: The Shopping-Cart Test

A single-layer door skin is basically a drum head — it dents if you look at it wrong, and dents in a bare skin are forever. Sandwich doors resist dents dramatically better because the skin is bonded to a solid core. Given that panel damage is one of our most common repair calls, stiffness is a maintenance argument, not just a comfort one.

## When You Can Honestly Skip Insulation

We're not here to upsell foam you don't need:

- **Detached, unheated garage used purely for parking** — a single or double-layer door is a rational choice. Take the savings.
- **Planning to sell within a year or two** — a clean new non-insulated door still delivers the curb-appeal ROI.

But if the garage is attached, heated, houses a workshop, or has living space above it — in this climate, insulated is the answer, and polyurethane sandwich construction is worth the stretch.

## The Michigan Math

Typical Metro Detroit price gap between builder-grade non-insulated and a quality R-13 sandwich door: **$500–$900 installed**. Between easier winters on your furnace, the car battery you don't replace, the dents you don't collect, and the resale bump of a premium door, the gap closes quietly over a handful of Michigan winters — and the comfort difference starts on day one.

## See and Feel the Difference

Spec sheets don't convey the thunk of a solid sandwich door closing versus the clatter of a single skin. We bring section samples to every [free installation quote](/quote) so you can feel it. Call BH Garage Door Metro Detroit at (313) 236-4558 — we install Clopay, Amarr, C.H.I., Wayne Dalton, and Raynor across all of Wayne, Oakland, and Macomb counties.
`,
  },

  {
    slug: "garage-door-safety-sensor-fix",
    title: "Garage Door Won't Close? How to Fix Safety Sensor Problems in 10 Minutes",
    metaTitle: "Garage Door Safety Sensor Fix: Door Won't Close Troubleshooting",
    excerpt:
      "If your door opens fine but refuses to close — or reverses and blinks its lights at you — the photo-eye sensors are the prime suspect. Here's the 10-minute fix, Michigan edition.",
    category: "Safety",
    readMinutes: 7,
    date: "2026-04-15",
    heroImage: "/blog/garage-door-safety-sensor-fix-hero.png",
    heroAlt: "Close-up of a garage door photo-eye safety sensor with its indicator light glowing.",
    secondaryImage: "/blog/garage-door-safety-sensor-fix-secondary.png",
    secondaryAlt: "Technician aligning a pair of garage door safety sensors at the base of the tracks.",
    body: `
It's the most common "repair" call in the garage door business, and half the time the customer fixes it on the phone with our dispatcher: the door opens normally, but when you try to close it, it either refuses entirely or drops a foot and reverses while the opener light flashes. That flash is the opener telling you exactly what's wrong — the safety sensors.

## What the Sensors Do (And Why You Can't Bypass Them)

Since 1993, every opener sold in the US has photo-eye sensors: two small units mounted about six inches off the floor on either side of the door, shooting an invisible infrared beam across the opening. Anything breaking the beam — a kid, a dog, a bumper — makes a closing door reverse instantly.

When the beam is interrupted or the sensors can't see each other, the opener refuses to power-close as a fail-safe. That's the behavior you're seeing. And no, they shouldn't be bypassed or unplugged — beyond the obvious safety issue, a door that closes blind will eventually meet a bumper or worse.

## The 10-Minute Fix, In Order

### 1. Read the LEDs

Each sensor has an indicator light. Typically one is the sending unit (amber) and one is the receiving unit (green). **Solid lights on both = aligned and happy. A blinking or dark receiver = blocked, misaligned, or unpowered.** This tells you which end to work on.

### 2. Clear the Beam Path

Obvious, but it solves a third of these calls: the snow shovel, recycling bin, shop-vac hose, or drift of leaves sitting in the beam. In Michigan, snowbanks that creep into the door opening are a classic January culprit.

### 3. Clean the Lenses

Wipe both lenses with a soft dry cloth. Road-salt film, cobwebs, and grime scatter the beam — a Metro Detroit winter coats these lenses the same way it coats your windshield. Spiders love the warm LEDs, so clear webs behind the brackets too.

### 4. Check Alignment

Sensors get kicked, bumped by bikes, and knocked by trash cans. Loosen the wing nut, sight the two sensors at each other so both face squarely across the opening at the same height, and adjust gently until the receiving LED goes from blinking to **solid**. Retighten while watching the light stay steady.

### 5. Check the Wires

Follow the thin bell wire from each sensor up to the opener. Staples pop, wires get pinched by ladders, and rodents — a real thing in Michigan garages — chew insulation. A cut or short here shows the same symptoms as misalignment. Twist-repair a clean break temporarily; we'll rewire it properly on a service visit.

### 6. Check for Sun Blindness

A genuinely underrated cause: low winter sun shining directly into the receiving sensor around sunrise/sunset can wash out the beam. If your door only misbehaves at certain times of day and the door faces the sun, that's your clue. Sun shields (or swapping the send/receive sides) solves it.

## Still Blinking? Here's What It Means

If the lenses are clean, the path is clear, alignment is true, and the wiring is intact but the sensors still won't go solid, the sensor itself or the opener's logic board has failed. Sensors are inexpensive and we carry universal-compatible and OEM sets on every truck — it's a quick swap with a proper wire re-run, usually bundled with a full safety test.

## The Test Every Garage Should Pass

Once the door closes normally again, take 30 seconds to verify both safety systems:

- **Beam test:** start the door closing and wave a broom handle through the beam — it must reverse instantly.
- **Contact test:** lay a 2x4 flat under the door — the door must reverse when it touches.

If either test fails, stop using the opener and call us at (313) 236-4558. BH Garage Door Metro Detroit runs same-day sensor and opener service across all of Metro Detroit — and every repair we do ends with both safety tests, every time.
`,
  },

  {
    slug: "hire-garage-door-company-michigan-checklist",
    title: "How to Hire a Garage Door Company in Michigan Without Getting Scammed",
    metaTitle: "Hiring a Garage Door Company in Michigan: Scam-Proof Checklist",
    excerpt:
      "The garage door industry has a scam problem — bait pricing, phantom 'lifetime' parts, and $900 spring jobs. Here's the checklist that protects Metro Detroit homeowners, from people inside the industry.",
    category: "Safety",
    readMinutes: 9,
    date: "2026-04-22",
    heroImage: "/blog/hire-garage-door-company-michigan-checklist-hero.png",
    heroAlt: "Garage door technician reviewing a written estimate with a homeowner in a Michigan driveway.",
    secondaryImage: "/blog/hire-garage-door-company-michigan-checklist-secondary.png",
    secondaryAlt: "Uniformed technician servicing a garage door torsion assembly from a ladder.",
    body: `
We'll say the quiet part out loud: the garage door industry has a well-earned scam problem. Search "garage door repair near me" anywhere in Metro Detroit and the results mix honest local companies with lead-reselling websites and bait-price operators. The playbook is always the same — a $39 special gets a salesman (not a tech) into your garage, and the "diagnosis" is an $800–$1,500 rebuild of parts that were fine. Here's how to not be that story.

## The Red Flags, In Order of Reliability

### 1. The Too-Cheap Hook

"$29 service call! $99 any spring!" Real spring replacements involve a trained tech, a stocked truck, and quality steel — in Metro Detroit that's a $180–$400 job depending on the door. A price that can't cover costs exists to get a foot in the door, and the difference gets made up in your garage.

### 2. No Local Address or Verifiable Identity

Lead-gen sites clone themselves across every suburb with a different city name slapped in the title. Check: Is there a real local presence? Does the Google Business Profile have years of reviews, or 40 five-stars posted in the same month? Does the name on the truck match the name on the invoice?

### 3. The "Everything Is Dangerous" Diagnosis

You called about a noisy roller; the visit ends with a warning that your springs, cables, drums, bearings, and opener are all "about to fail" and only a full rebuild will keep your family safe. Real failures are specific: a snapped spring looks snapped, a frayed cable looks frayed. Ask to be shown every problem — a legitimate tech will happily point.

### 4. Verbal-Only Pricing

If the number lives only in the salesman's mouth, it can grow on the invoice. Flat-rate, written or texted before work begins is the standard you should demand. It's what we do on every single job.

### 5. Pressure to Decide Right Now

"This price is only good today" is a sales tactic, not how repair pricing works. Any company confident in its quote will happily let you sleep on it — springs don't get more broken overnight.

## The Checklist Before You Book

- **Verify insurance.** Michigan doesn't license garage door work as a standalone trade, which makes proof of general liability and workers' comp insurance the meaningful credential. Any legitimate company produces a certificate on request without drama.
- **Read reviews for patterns, not stars.** Skim the 3-star reviews specifically — they're where honest customers describe pricing behavior. Look for the same tech names and specific jobs across months and years.
- **Get the flat rate on the phone.** A competent dispatcher can price a spring replacement, opener install, or off-track reset within a tight range from your description. Vagueness on the phone predicts surprises in the driveway.
- **Ask what's included.** A real spring quote includes the springs, labor, rebalancing the door, and inspection of cables and bearings. A real opener quote includes rails, sensors, remotes, keypad, and haul-away of the old unit.
- **Ask about warranty in writing.** Ours: 1 year on labor, manufacturer warranty on parts (3–10 years on springs by cycle rating, up to lifetime on some opener belts and motors). "Lifetime warranty" pitches that mysteriously cover only the part — with a fat labor charge per visit — are the industry's favorite fine print.

## Fair 2026 Price Ranges for Metro Detroit

Use these as your sanity check (full breakdown in our [spring guide](/blog/broken-garage-door-spring-what-to-do) and [opener guide](/blog/garage-door-opener-buying-guide)):

- Service call & diagnostic: $45–$75
- Single torsion spring, installed: $180–$280
- Spring pair, installed: $260–$400
- Opener installed (belt drive): $450–$650
- Cable pair replacement: $150–$250
- Off-track reset with track repair: $150–$350
- New insulated two-car door, installed: $1,400–$2,800

If you're quoted 2–3x these ranges — or the "diagnosis" lands within minutes and totals four figures — get a second opinion before signing anything. We give free second opinions over the phone every week, even when the answer is "that quote is actually fair."

## Where We Stand

BH Garage Door Metro Detroit is licensed & insured, staffs its own background-checked techs (no subcontractors), quotes flat rates before dispatch, and puts every warranty in writing on a digital invoice. That's the standard — from us or from whoever you hire. Call (313) 236-4558 or [request a quote](/quote), and keep this checklist handy either way.
`,
  },
];

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];

export function findPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
