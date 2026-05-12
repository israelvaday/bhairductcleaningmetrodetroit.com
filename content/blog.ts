// Blog post data + body content. Hand-written by the OH Lock & Key team for SEO + customer value.
// Bodies use a very small markdown-ish dialect: lines starting with `## ` are H2, `### ` are H3,
// lines starting with `- ` are list items, blank lines split paragraphs.

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  category: "Lockouts" | "Smart Locks" | "Commercial" | "Auto" | "Safety" | "Security";
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
    slug: "locked-out-house-7-things-to-try",
    title: "Locked Out of Your House? 7 Things to Try Before Calling a Locksmith",
    metaTitle: "Locked Out at Home? 7 Things to Try First",
    excerpt:
      "Before you panic — or worse, kick in a door — run through these 7 quick checks. Most home lockouts in Orange County resolve in under 5 minutes with the right approach.",
    category: "Lockouts",
    readMinutes: 6,
    date: "2026-03-04",
    heroImage: "/blog/locked-out-house-7-things-to-try-hero.png",
    heroAlt: "Frustrated person standing on a Southern California front porch checking pockets for keys",
    secondaryImage: "/blog/locked-out-house-7-things-to-try-secondary.png",
    secondaryAlt: "Close-up of a residential deadbolt being opened with locksmith pick tools, no damage",
    body: `
Getting locked out of your own house is one of the most stressful five minutes of your week. Take a breath — we handle dozens of these calls every day across Orange County, and the truth is most lockouts have a fast, non-destructive solution.

Here are the seven things our techs ask you to try **before** dispatching a truck.

## 1. Check the obvious spots — twice

Sounds silly, but 1 in 5 lockout calls end before we arrive because the homeowner finally found the keys in a jacket pocket, the diaper bag, or the front seat of the car. Check:

- Every pocket on you (not just the one you usually use).
- The car cup holder, console, and floor mat.
- The mailbox, planter, and door mat (you'd be surprised).

## 2. Try every door, not just the front

Sliding glass doors, side gates, garage service doors, and second-story balconies are forgotten constantly. Walk the whole perimeter once before doing anything else.

## 3. Call the person you live with

If you share the house with a spouse, roommate, parent, or kid — call them. ETA on a locksmith is 15–30 minutes; ETA on a roommate might be 4.

## 4. Check your phone's smart-home app

If you have a smart lock — August, Schlage Encode, Yale Assure, Kwikset Halo, Level Lock — open the app. You can unlock from your phone anywhere with signal. Same goes for some Ring and Nest doorbell systems linked to a smart deadbolt.

## 5. Ask your landlord or property manager

For renters, your property manager is legally required (in California) to provide reasonable access. They usually have a master key and can be cheaper than emergency dispatch.

## 6. Skip YouTube "credit card" tricks

Please don't. They almost never work on modern deadbolts, and you'll just bend up a card. Worse, scraping the latch can damage the strike plate, which means a real repair bill on top of the lockout fee.

## 7. Call a **licensed** locksmith — not the first ad on Google

This is the big one. Most "$15 locksmith" ads at the top of Google are unlicensed call centers that quote $15, show up, and charge $400–$800 with damage to your door. In California, every legitimate locksmith carries a [BSIS license](/license).

When you call us, we tell you the flat-rate price on the phone, send a licensed technician (BSIS #8663), and use non-destructive entry tools that pop most residential locks in under 2 minutes.

## When to skip steps 1–6 and call right away

- It's after 10pm.
- You have a child, pet, or stove turned on inside.
- It's raining or you're in an unsafe area.
- The lock is high-security (Medeco, Mul-T-Lock, Abloy) and a manager can't help.

In those cases, just [dial dispatch](/contact). We're 24/7, OC-wide, and we'll give you an honest ETA and a flat quote before the truck rolls.
`,
  },

  {
    slug: "rekey-vs-replace-after-moving-in",
    title: "Should You Rekey or Replace Your Locks After Moving Into a New Home?",
    metaTitle: "Rekey vs. Replace Locks After Moving In",
    excerpt:
      "Rekeying is faster, cheaper, and uses the same hardware — replacement gives you new finishes and security features. Here's how to decide for your new OC home.",
    category: "Security",
    readMinutes: 7,
    date: "2026-03-11",
    heroImage: "/blog/rekey-vs-replace-after-moving-in-hero.png",
    heroAlt: "Smiling young couple receiving new house keys from a locksmith in front of a sunny Orange County home",
    secondaryImage: "/blog/rekey-vs-replace-after-moving-in-secondary.png",
    secondaryAlt: "Locksmith hands pinning a Schlage residential lock cylinder on a clean workbench",
    body: `
You just closed on a house in Tustin, Irvine, or Anaheim. Congratulations! Now — who else has a key?

The previous owners. Their cleaners. The realtor. The contractor who rebuilt the deck three years ago. Anyone they ever gave a key to and forgot about.

This is the single most important locksmith call you'll make as a new homeowner. The only question is whether you **rekey** or **replace**.

## What's the difference?

**Rekeying** keeps your existing lock and door hardware in place. We remove the cylinder, swap the internal pins to match a brand-new key, and hand you fresh keys. The old keys no longer work. Cost: usually $19–$25 per cylinder plus a service call.

**Replacement** takes out the entire lock — knob, deadbolt, or both — and installs brand-new hardware. Cost: the price of the new hardware plus install labor.

## When rekeying is the right choice

- The existing locks are quality hardware (Schlage, Kwikset SmartKey, Baldwin, Emtek, Yale).
- They look good, match the door, and operate smoothly.
- You just want the previous owners' keys to stop working.
- You want all your doors (front, back, side, garage entry) keyed alike — one key for everything.

For a typical 3-cylinder OC home, a rekey runs $90–$140 all-in. That's the right answer for 70% of move-ins.

## When replacement is the right choice

- The hardware is corroded, sticking, or visibly cheap (think: builder-grade brass).
- The deadbolt is single-cylinder and you want a thumb-turn upgrade.
- You want to upgrade to a [smart lock](/services/smart-locks) so you can let cleaners and Airbnb guests in remotely.
- The finish doesn't match your new front-door paint or hardware refresh.
- The lock fails an ANSI Grade-1 inspection (anything less than Grade 2 should go on an exterior door).

## The hybrid approach we recommend

For most OC move-ins, we do this:

1. **Rekey** the back, side, and garage doors (cheap, keep existing hardware).
2. **Replace** the front-door deadbolt with a smart lock or ANSI Grade-1 unit.
3. **Match the key** so the same physical key still opens every door (smart lock has its own keypad PIN).

Total: about $250–$400 depending on smart-lock choice. New homeowners sleep better, the front door looks great, and you control access from your phone.

## What about a single key for everything?

Yes — this is called **keyed alike** and it's free with a rekey. We just pin every cylinder to the same key bitting. One key for the front door, garage entry, back patio, and gate. Beats the giant keyring most people inherit from a closing.

## Should I do this on the day of close?

Yes. Don't sleep in the house until the locks are yours. We routinely show up the morning of move-in day in Newport Beach, Mission Viejo, Yorba Linda, and Anaheim Hills — call dispatch and we'll work around the movers.
`,
  },

  {
    slug: "smart-locks-2026-best-for-oc-homes",
    title: "Smart Locks 101: The Best Smart Locks for Orange County Homes in 2026",
    metaTitle: "Best Smart Locks for OC Homes in 2026",
    excerpt:
      "Schlage Encode, Yale Assure, Level Bolt, Aqara U200 — we install and service all of them. Here's what actually works for OC homes, Airbnbs, and short-term rentals.",
    category: "Smart Locks",
    readMinutes: 9,
    date: "2026-03-18",
    heroImage: "/blog/smart-locks-2026-best-for-oc-homes-hero.png",
    heroAlt: "Modern keypad smart lock installed on a craftsman-style front door, golden hour California light",
    secondaryImage: "/blog/smart-locks-2026-best-for-oc-homes-secondary.png",
    secondaryAlt: "Homeowner unlocking a smart deadbolt with a phone, smart home app visible on screen",
    body: `
Smart locks are no longer a novelty. In 2026, more than half the homes we work on in Irvine, Newport Coast, and Costa Mesa have at least one connected lock — and Airbnb hosts run smart locks on every door.

But there are 30+ models on the market and they are not all created equal. Here's our 2026 buyer's guide, written from the trenches — these are the locks we actually install, service, and recover for OC clients.

## Tier 1 — The ones we recommend without reservation

### Schlage Encode (Plus)

The workhorse. ANSI Grade 1, Wi-Fi built in, no hub required. Works with Alexa, Google, and Apple Home (the **Plus** model adds Apple Home Key tap-to-unlock with iPhone or Apple Watch).

- Best for: Owner-occupied homes, long-term rentals.
- Battery: 4× AA, 6–12 months.
- OC install: $189–$229 hardware + $89 install.

### Yale Assure SL 2 (with Z-Wave or Matter)

Slimmer, key-free, gorgeous on a flat front door. The Matter version pairs cleanly with Apple Home, Google Home, and SmartThings.

- Best for: Modern homes, condos, no-key purists.
- Battery: 4× AA, 9–12 months.
- Watch out: No physical key — if batteries die, you'll need 9V contact unlock.

### Level Lock+ (Touch / Home Key)

Hidden inside the door — looks like a regular deadbolt from the outside. Tap your iPhone to unlock. The favorite of Newport Beach designer homes.

- Best for: Aesthetic-first installs, smart home integrations.
- Battery: CR123A, 1 year.
- OC install: $329 hardware + $89 install.

## Tier 2 — Great for short-term rentals

### Schlage Encode (commercial keypad)

When you need to issue 50 codes a year and never look at it, this is the lock. Dashboard auto-syncs with Hostfully, Hospitable, OwnerRez, and Guesty.

### Yale Assure Lever (for interior locking doors on big homes)

If your Airbnb has multiple lockable bedrooms, this is the lever version of the Assure.

## Tier 3 — Avoid or proceed with caution

- **No-name Amazon smart locks under $80.** Batteries die in 6 weeks, app gets pulled, security questionable.
- **Original August (pre-Yale acquisition).** Service is winding down.
- **Anything that requires only a proprietary app with no Matter / HomeKit support.** You're locked into a dying ecosystem.

## What about Aqara U200 and U300?

The U200 (retrofit) and U300 (full replacement) are excellent — Matter-over-Thread, fingerprint, Apple Home Key. We've installed dozens this year. If you're deep in the Aqara/Apple ecosystem, this is our newest favorite.

## Do you need a smart lock if you're not in tech?

If you have a cleaner, a dog walker, an Airbnb, college kids, or aging parents — yes. The ability to issue a one-time PIN at 9am that expires at noon is a quality-of-life upgrade.

## Installation in Orange County

We install smart locks across all of OC, usually same-day. Includes:

- Hardware purchase (or BYO).
- Door prep (most doors need a strike-plate tuneup).
- Wi-Fi / Matter / HomeKit pairing.
- Walkthrough with you on the app.
- 90-day install warranty.

[Book a smart-lock install →](/services/smart-locks)
`,
  },

  {
    slug: "storefront-lockouts-24-7-locksmith-business",
    title: "Storefront Lockouts: Why Your OC Business Needs a 24/7 Locksmith On Call",
    metaTitle: "24/7 Storefront Lockout Locksmith in OC",
    excerpt:
      "Every hour a storefront is locked out is revenue on the floor. Here's how OC restaurants, retailers, and offices avoid the lockout panic — and what to do if you're already in it.",
    category: "Commercial",
    readMinutes: 7,
    date: "2026-03-25",
    heroImage: "/blog/storefront-lockouts-24-7-locksmith-business-hero.png",
    heroAlt: "Orange County restaurant storefront at dawn, owner unlocking the glass door with a locksmith helping",
    secondaryImage: "/blog/storefront-lockouts-24-7-locksmith-business-secondary.png",
    secondaryAlt: "Adams-Rite commercial mortise lock with stainless trim on a glass storefront door",
    body: `
A commercial lockout is not the same animal as a residential one. When a Lake Forest restaurant can't get in at 5am, every minute the doors stay locked is prep time lost and a dinner service at risk. When a Costa Mesa retailer is locked out at noon, customers walk.

We run a dedicated commercial dispatch line — here's what we've learned in a thousand storefront calls.

## The three common storefront lockout causes

### 1. Aluminum storefront / Adams-Rite cylinder failure

The most common cause in OC. The little mortise cylinder that drives the deadlatch fails after 8–12 years of daily use. Symptoms: key turns but the bolt doesn't move, or the cylinder spins freely. We carry replacement Adams-Rite cylinders on every truck.

### 2. Lost or broken key in a high-cycle environment

Restaurants and retail spaces cycle keys constantly between owners, managers, and night cleaners. Keys get lost, copied, or worn down. By the time a key snaps in the cylinder, it's been on its last legs for months.

### 3. Push-bar / panic device misfire

Von Duprin, Detex, and Falcon panic bars eventually wear out. The dogging mechanism freezes, or the latch fails to retract. Often happens at the worst time — closing on a Saturday night.

## What it costs

For a typical OC commercial lockout — non-destructive entry, no replacement parts:

- Business hours (Mon–Fri 8am–6pm): **$89 service call**.
- After hours / weekend: **$129 service call**.
- Cylinder replacement (if needed): **$45–$95 per cylinder**.
- Panic bar repair: **$120 + parts**.

## The smarter play — get on a maintenance plan

For restaurants, retailers, medical offices, and property managers, we offer **commercial maintenance retainers**:

- Priority dispatch (we move you to the top of the queue).
- Annual on-site inspection of every cylinder, hinge, closer, and panic bar.
- Loaner hardware while parts ship.
- Flat-rate emergency call after hours.

Roughly the cost of one emergency call per year. Worth it for any business with more than two exterior doors.

## What about master key systems?

Most of our OC commercial clients run a 3-tier master key system:

1. **Owner / GM** — opens everything.
2. **Shift manager** — opens public areas + back of house + office.
3. **Line staff / cleaners** — opens only what they need.

This means a lost key from a line cook doesn't compromise the office or the safe. Setting up a master system is a 1-day job we can scope for free.

## Already locked out right now?

Call dispatch. Tell us the door type (aluminum storefront, wood, glass with mortise lock, hollow metal) and we'll roll the right truck with the right cylinders pre-staged. Most commercial lockouts in central OC are 15–30 minutes door-to-key.

[Commercial 24/7 line →](/services/commercial)
`,
  },

  {
    slug: "car-key-replacement-orange-county",
    title: "Car Key Replacement in Orange County: Fobs, Transponders & What It Actually Costs",
    metaTitle: "Car Key Replacement in Orange County",
    excerpt:
      "The dealer quoted you $700 for a replacement key. We can do most cars for $180–$350, mobile, in your driveway. Here's how it works and what your car needs.",
    category: "Auto",
    readMinutes: 8,
    date: "2026-04-01",
    heroImage: "/blog/car-key-replacement-orange-county-hero.png",
    heroAlt: "Locksmith programming a car key fob with a diagnostic tool inside an SUV in a sunny OC driveway",
    secondaryImage: "/blog/car-key-replacement-orange-county-secondary.png",
    secondaryAlt: "Close-up of a cut and chipped automotive transponder key next to a remote head fob on a workbench",
    body: `
You lost your car key. The dealer quoted $650 + tow + a 5-day wait for parts. Don't panic — most cars on the road today can be done mobile, in your driveway, the same afternoon, for half that.

Here's a no-BS breakdown of what every kind of car key actually costs to replace in Orange County in 2026.

## Step 1 — Identify what kind of key you have

There are four main families:

### Mechanical keys (pre-1996, plus some classics)

A flat steel key, no chip, no fob. Cuts on a key machine for $15–$35. Done in 5 minutes.

### Transponder keys (most 1996–2015 cars)

A plastic-headed key with a chip inside. Has to be **cut** and **programmed** to your car's immobilizer. Cost: typically $90–$180.

### Remote head keys ("RHK", 2005–present)

The all-in-one key with buttons. Cut + transponder programming + remote pairing. Cost: $150–$280.

### Smart / proximity keys ("push-to-start", 2010–present)

The fob that lives in your pocket. Pricier — encrypted, multi-stage programming. Cost: **$230–$520** depending on make.

## What we can do mobile in OC

Pretty much everything except a few outliers. Our auto-locksmith trucks carry:

- Silca and JMA key blanks for 200+ makes.
- Smart Pro, MVP, and Autel programmers.
- A 12V profiler for cutting in-driveway.

Brands we routinely program on-site:

- **Toyota / Lexus** — almost all, including Smart Key.
- **Honda / Acura** — almost all.
- **Ford / Lincoln** — most, including PATS and Tibbe.
- **GM / Chevy / Cadillac / GMC** — most, including PEPS.
- **Hyundai / Kia** — most non-2022+ proximity keys.
- **Nissan / Infiniti** — most, including I-Key.
- **VW / Audi (pre-2018)** — most.
- **Mazda, Subaru, Mitsubishi** — most.

## The cars that still need the dealer

A few makes have hard-locked their security in recent years. We'll tell you on the phone if your car is one of them — we don't waste your time:

- Most 2017+ BMW with CAS4+.
- Most 2018+ Mercedes-Benz with FBS4.
- Some 2022+ Hyundai/Kia proximity keys.
- All Tesla (their parts, their app — but we can still help with mechanical access).

## What we need from you

To quote your job in under 60 seconds on the phone we need:

1. Year, make, model.
2. Trim (sometimes determines key type).
3. Do you have **all** keys lost, or one working key?

The third one matters a lot. If you have one working key, programming a spare is fast and cheap (often 30 minutes, $150 ish). If **all** keys are lost, we have to add the car to the immobilizer from scratch — extra step, extra cost.

## Mobile means in your driveway, parking lot, or office lot

We come to you anywhere in OC. Common scenes:

- South Coast Plaza valet level.
- Disneyland and Anaheim hotel lots.
- John Wayne Airport long-term parking.
- Any home driveway from San Clemente to La Habra.

[Call our auto line →](/services/automotive)
`,
  },

  {
    slug: "how-to-spot-locksmith-scam-southern-california",
    title: "How to Spot a Locksmith Scam in Southern California (and What a Legit Quote Looks Like)",
    metaTitle: "How to Spot a Locksmith Scam in SoCal",
    excerpt:
      "Locksmith scams cost SoCal homeowners millions every year. Here's how to recognize a fake $15 ad, what questions to ask, and how to verify a real BSIS license.",
    category: "Safety",
    readMinutes: 8,
    date: "2026-04-08",
    heroImage: "/blog/how-to-spot-locksmith-scam-southern-california-hero.png",
    heroAlt: "Concerned homeowner reading a high invoice handed to her by a suspicious locksmith outside her California home",
    secondaryImage: "/blog/how-to-spot-locksmith-scam-southern-california-secondary.png",
    secondaryAlt: "Hand holding a California BSIS locksmith license card next to a clean work van",
    body: `
The California Bureau of Security and Investigative Services (BSIS) gets thousands of complaints a year about unlicensed locksmiths. Most follow the same playbook: a $15 ad, a 2x markup at the door, and a destroyed lock.

Here's how to read a quote and not get burned.

## The five red flags

### 1. "$15" or "$19" in the ad

There is no legitimate locksmith in California who can drive to your house and unlock it for $15. The number is bait. The real number shows up after they're already on your porch with the drill in hand.

### 2. No company name on the phone

A legit dispatcher answers "OH Lock & Key Solutions, this is dispatch" or similar. A scammer answers "locksmith service" — vague on purpose, because the same call center fronts 12 fake brand names.

### 3. Unmarked vehicle

When the tech arrives, look at the truck. Real locksmiths drive labeled vans with the company name, phone number, and BSIS license number. An unmarked sedan with a backpack is the #1 scam signal.

### 4. "We'll have to drill"

A skilled locksmith should resolve **at least 95% of residential lockouts non-destructively**. If a tech immediately says "we'll have to drill" on a standard Kwikset or Schlage residential deadbolt, walk them off the job. They're either unskilled or padding the bill.

### 5. Price changes on the porch

If the price you were quoted on the phone ($79) becomes the price at the door ($380), that's the scam. A real locksmith honors the phone quote unless there's a clear, agreed-upon scope change (e.g. you also want a rekey).

## What a legitimate California locksmith looks like

- Has a **BSIS Locksmith Company License** — a 4 to 5-digit number. (Ours is **#8663**.)
- Has the license number printed on the truck, business card, and invoice.
- Tells you the **service-call fee** and **flat lockout rate** on the phone, before dispatch.
- Carries a wallet copy of the BSIS license.
- Carries insurance — for damage to your door, frame, or property.

## How to verify a BSIS license in 30 seconds

1. Go to [search.dca.ca.gov](https://search.dca.ca.gov).
2. Select "Bureau of Security and Investigative Services."
3. Type the company name or license number.

It returns the company name, status (Active / Expired / Suspended), city, and license expiration. Always verify before letting anyone drill into your door.

## What to do if you've already been scammed

1. **Don't pay in cash.** Use a credit card so you have chargeback rights.
2. **Get a written invoice** with the company name, address, BSIS number, and tech name.
3. **File a complaint** with BSIS at bsis.ca.gov.
4. **Report to the attorney general** at oag.ca.gov.
5. **Leave an honest review** with the business name (Google, Yelp, BBB).

The faster you report, the faster the call-center brand gets taken down.

## The OH Lock & Key Solutions guarantee

When you call us, you get:

- The flat-rate price on the phone, in writing if you ask.
- A BSIS-licensed tech (#8663) in a marked truck.
- Non-destructive entry on 99% of residential lockouts.
- Insurance coverage for any property damage.
- A receipt with our license number and full company info.

That's the bar. Anything less and you're at risk.

[See our license page →](/license)
`,
  },

  {
    slug: "master-key-systems-for-small-businesses",
    title: "Master Key Systems for Small Businesses: A Practical OC Guide",
    metaTitle: "Master Key Systems for OC Small Businesses",
    excerpt:
      "Stop giving every employee a giant keyring. A small-business master key system gives the right access to the right people — without compromising the office or safe.",
    category: "Commercial",
    readMinutes: 8,
    date: "2026-04-15",
    heroImage: "/blog/master-key-systems-for-small-businesses-hero.png",
    heroAlt: "Locksmith and small business owner reviewing a key access chart in a small modern office",
    secondaryImage: "/blog/master-key-systems-for-small-businesses-secondary.png",
    secondaryAlt: "Organized commercial pin kit and tagged keys on a workbench, with a master key chart on paper",
    body: `
If you run a 5–50 person business in Orange County — restaurant, retail, dental office, law firm, distribution warehouse — you've probably hit the "too many keys" problem. The bookkeeper has the office key. The cleaners have the back door. The manager has everything. The new hire just got handed a key with no record of what it opens.

A master key system fixes this in one afternoon.

## What is a master key system?

It's a single pinning scheme that allows different keys to open different combinations of locks. The most common structure for small businesses:

- **Master key (MK)** — opens every lock in the building. Owner / GM only.
- **Sub-master keys (SMK)** — open a defined zone. Examples:
  - "Front of house" SMK: front door, retail floor, point-of-sale closet.
  - "Back of house" SMK: kitchen, walk-in, dry storage.
  - "Office" SMK: office, supply closet, server room.
- **Change keys (CK)** — open a single lock. Given to whoever needs that one room.

Each employee gets exactly the access they need — no more, no less.

## When you should set this up

- You have 3+ exterior or interior doors that need key control.
- You have a safe, server room, or controlled-substance cabinet that should not be on the same key as everything else.
- You have rotating staff (cleaners, contractors, part-time).
- You're tired of replacing every lock when an employee leaves.

## How OC locksmiths design a master system

Here's what a real consult looks like:

1. **Site walk-through** — we list every lockable opening and ask who needs to open what.
2. **Hierarchy chart** — we draft a tree: MK → SMK → CK with a master-keying chart. You sign off.
3. **Cylinder count** — we tally how many cylinders need to be pinned, and what hardware they live in. Some legacy hardware can be repinned; old or worn cylinders get replaced.
4. **Key control** — we recommend a restricted keyway (Medeco, Mul-T-Lock, Schlage Primus, Assa Twin) so employees can't duplicate keys at the hardware store.
5. **Install day** — usually 4–8 hours for a small office. Cylinders get pulled, repinned, reinstalled, and tested.
6. **Documentation** — you get the master chart in a sealed envelope. Don't lose this.

## What does it cost?

For a typical 8–12 cylinder OC small business:

- Standard keyway, no new hardware: **$450–$750**.
- Restricted keyway (recommended), no new hardware: **$700–$1,200**.
- Restricted keyway + new high-security cylinders: **$1,500–$2,800**.

We give a fixed bid after the walk-through, and the install is a flat day rate — no surprises.

## What if an employee leaves?

Two options:

1. **Replace the lost or unreturned change key only.** Cheap, fast — but if you're paranoid, do #2.
2. **Rekey just that branch of the master system.** The MK and other SMKs still work; the departed employee's CK is dead.

That's the whole point of a master system — you don't have to rekey the whole building when one person leaves.

## Restricted vs. standard keyways

If you only take one thing from this article: **use a restricted keyway**. Standard keys (KW1, SC1, KW10) can be duplicated at any Home Depot. Restricted keys can only be cut by us, on a signed authorization, with the master chart on file. This is the difference between a master system that actually controls access and one that's security theater.

## Ready to talk through your office?

We do free 30-minute site walk-throughs for OC small businesses. We'll bring the master chart template, ask you the right questions, and have a bid in your inbox the same day.

[Book a commercial consult →](/services/commercial)
`,
  },

  {
    slug: "after-a-break-in-24-hour-security-checklist",
    title: "What To Do After a Break-In: A 24-Hour Security Checklist",
    metaTitle: "After a Break-In: 24-Hour Security Checklist",
    excerpt:
      "If your home or business was broken into, the next 24 hours determine whether it happens again. This is the exact checklist we walk OC clients through.",
    category: "Safety",
    readMinutes: 9,
    date: "2026-04-22",
    heroImage: "/blog/after-a-break-in-24-hour-security-checklist-hero.png",
    heroAlt: "Locksmith installing a new reinforced strike plate and deadbolt on a residential door after a break-in",
    secondaryImage: "/blog/after-a-break-in-24-hour-security-checklist-secondary.png",
    secondaryAlt: "Hand holding a new high-security deadbolt and reinforced strike plate next to a damaged door frame",
    body: `
A break-in is a violation, and the first instinct is usually to clean up and try to forget. Don't. The most common pattern we see in Orange County is the second break-in — when nothing was changed and the same person comes back two weeks later for the rest.

Here's the exact 24-hour checklist we walk break-in clients through.

## Hour 0–1: Stop, secure, document

- **Don't go in alone.** If the break-in is fresh, call the police from outside. Wait for them.
- **Photograph everything** before you touch it. Doors, frames, drawers, windows. Even if you don't think you'll need the photos, your insurance will.
- **Get a police report number.** Insurance will not pay without it. Most OC cities will dispatch within 30 minutes for a residential break-in.

## Hour 1–4: Secure entry points

- **Replace the door / frame / hardware that was breached.** A reinforced strike plate alone is usually enough to upgrade a kicked-in door so it won't kick again — assuming the frame is intact.
- **Rekey or replace every exterior lock.** If the intruder took keys, you cannot trust any lock they had access to. We routinely roll trucks within an hour of a 911 break-in call.
- **Replace any compromised garage opener.** Most modern openers use rolling codes, but if a paper-clip clone of your remote was in the car they hit, replace the opener.

## Hour 4–24: Audit and upgrade

This is where the long-term security work happens.

### 1. Hardware audit

- Every exterior deadbolt should be **ANSI Grade 1** (commercial) or **Grade 2** (residential high-end).
- Every strike plate should be **reinforced** with 3-inch screws into the frame stud, not just the trim.
- Every door should have a **functional dead-latch guard** (the little plunger that stops credit-card-style attacks).

### 2. Glass and window check

Most OC break-ins go through a side window, sliding glass door, or back patio door — not the front door.

- Sliding doors: install a pin lock or charley bar. Cheap and effective.
- French doors: add flush bolts top and bottom on the inactive leaf.
- Single-hung windows: add a window pin or sash lock.

### 3. Smart lock + camera review

- If you have smart locks, **audit the access log** for the 30 days before the break-in. Any unfamiliar codes? Any guest codes that should have been deleted?
- If you have cameras, **pull and save the footage** — most cloud cameras only retain 7–30 days. Save the relevant window to your phone.

### 4. Safe & valuables

- If a safe was attacked but not opened, get it inspected. A pry attack can damage the bolt-work even if the door held.
- If a safe was taken, file the serial number with the police report and the manufacturer. Same for any electronics — Apple and Google can flag stolen serials.

### 5. The "second attempt" countermeasures

- **Light up the perimeter.** Motion-activated LED floodlights on the side and back of the house. Cheap, effective.
- **Re-trim landscaping** that creates hiding spots near windows.
- **Schedule a vacation hold** on mail and package deliveries if the house is empty.

## What about renters?

You have the same rights as a homeowner to demand a rekey from your landlord after a break-in. In California, the landlord must rekey or replace locks within a reasonable time (usually 1–3 business days). If they refuse, document the request in writing, and you can hire a locksmith yourself and deduct from rent under California Civil Code §1941.

## Insurance tip

Most home and business insurance policies will cover lock replacement and frame repair as part of a break-in claim — but you have to ask. Get an itemized invoice from your locksmith (we provide one with our BSIS license number on every job) and submit with the police report.

## The fast version

If you're reading this at 2am with a broken door, here's the 5-minute summary:

1. Call police, stay outside.
2. Photograph the damage.
3. Call a 24/7 locksmith with BSIS license.
4. Get the door secured tonight, the rekey done in the morning.
5. Schedule the security audit within 7 days.

[We're 24/7, OC-wide →](/contact)
`,
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
