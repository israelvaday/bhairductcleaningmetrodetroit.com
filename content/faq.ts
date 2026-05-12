export type FAQ = { q: string; a: string };

export type FAQSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: FAQ[];
};

export const FAQ_HERO_IMAGE = "/faq/faq-hero.png";
export const FAQ_HERO_ALT = "Locksmith technician answering questions for a customer in a sunny Orange County driveway";

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "general",
    title: "General",
    emoji: "🛡️",
    description: "Who we are and how we work.",
    items: [
      {
        q: "Are you a real locksmith or a call center?",
        a: "We're a real, BSIS-licensed (#8663) Orange County locksmith based in Santa Ana. You speak with the same dispatcher every time, and the technician who shows up is on our payroll — no subcontractors, no anonymous call centers.",
      },
      {
        q: "What areas of Orange County do you serve?",
        a: "All of OC — Santa Ana, Anaheim, Irvine, Newport Beach, Costa Mesa, Huntington Beach, Mission Viejo, Lake Forest, Yorba Linda, Fullerton, Garden Grove, Tustin, and every city and neighborhood in between. See our full service-area map.",
      },
      {
        q: "Are you really open 24/7?",
        a: "Yes. Lockouts, break-ins, and emergencies don't wait for business hours. Our dispatcher answers calls 24/7, 365 days a year, and we keep techs on rotation overnight and weekends.",
      },
      {
        q: "How fast can you get to me?",
        a: "Typical ETA in central OC (Santa Ana, Anaheim, Irvine, Tustin) is 15–30 minutes. South County and beach cities are usually 20–40 minutes. We give you a real ETA when you call — not a vague 'on the way'.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay, Tap to Pay, and cash. We email you a digital invoice with our BSIS license number on every job.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    emoji: "💰",
    description: "Honest, flat-rate quotes — no porch surprises.",
    items: [
      {
        q: "Do you charge a service-call fee?",
        a: "Yes — a standard service call is $45 during business hours and $75 after hours. The service call covers the drive and the diagnostic. The full job price is quoted before any work starts, and it's a flat rate, not hourly.",
      },
      {
        q: "How much is a typical residential lockout?",
        a: "A standard residential lockout in OC runs $89–$149 all-in during business hours, $129–$199 after hours. We tell you the exact flat-rate number on the phone before we dispatch.",
      },
      {
        q: "How much does it cost to rekey a house?",
        a: "Rekeying costs about $19–$25 per cylinder plus the service call. A typical 3-door home is $90–$140 total. All your doors can be keyed alike (one key for everything) at no extra charge.",
      },
      {
        q: "How much for a car key replacement?",
        a: "Depends on the year, make, model, and whether you have a working key. Mechanical keys: $35–$80. Transponder keys: $90–$180. Remote head keys: $150–$280. Smart / proximity keys: $230–$520. We quote the exact number on the phone before we roll.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. If the price changes between the phone quote and the work, we tell you before doing anything and you can decline. The only common adjustment is when a customer asks for additional services on-site (e.g. 'while you're here, can you rekey the back door too?').",
      },
    ],
  },
  {
    id: "lockouts",
    title: "Lockouts",
    emoji: "🚪",
    description: "What to expect when you're locked out.",
    items: [
      {
        q: "Will you damage my lock to get in?",
        a: "No, in 99% of residential and commercial lockouts we use non-destructive entry — picking, bumping, or single-pin opening. Drilling is a last resort and only happens after we've explained why and gotten your verbal OK.",
      },
      {
        q: "Do I need to be there when you arrive?",
        a: "Yes. We need a photo ID matching the address on the lease, mortgage, utility bill, or vehicle registration before we open any lock. This protects you from someone using our service to break into your place.",
      },
      {
        q: "I'm locked out of my car at a parking lot — can you come?",
        a: "Yes. We service every public lot in OC — South Coast Plaza, Disneyland, Knott's, John Wayne Airport, the Spectrum, beach lots, and every grocery store and office park. Just send us your location pin.",
      },
      {
        q: "What if I left my keys in my running car?",
        a: "Call us immediately and tell dispatch — we'll prioritize the call because of the fire / safety risk and idle running. ETA is typically 15–20 minutes for this kind of emergency.",
      },
    ],
  },
  {
    id: "smart-locks",
    title: "Smart Locks",
    emoji: "📱",
    description: "Smart-home, Wi-Fi, and Matter installs.",
    items: [
      {
        q: "Which smart locks do you install?",
        a: "Schlage Encode, Yale Assure, Level Lock+, August (Yale), Kwikset Halo, Aqara U200/U300, Lockly, Eufy, Ultraloq, and most Apple Home Key models. We can also retrofit your existing deadbolt with August or Level Bolt if you don't want to change the look outside.",
      },
      {
        q: "Will a smart lock work with Apple HomeKit / Google / Alexa?",
        a: "Most modern smart locks support at least one ecosystem; many now support Matter, which works with all three. We make sure to ask what you have before recommending hardware, so you don't end up with a lock that doesn't talk to your home.",
      },
      {
        q: "Will the smart lock still work if Wi-Fi is down?",
        a: "Yes — every smart lock we install has a local keypad or physical key as a backup. If Wi-Fi or power is out, you can still unlock the door manually.",
      },
      {
        q: "Can you set up multiple PIN codes for Airbnb guests?",
        a: "Yes. We set up code-per-guest workflows and integrate with hosting platforms like Hostfully, OwnerRez, Hospitable, and Guesty so codes auto-create and auto-expire with each reservation.",
      },
    ],
  },
  {
    id: "auto",
    title: "Automotive",
    emoji: "🚗",
    description: "Car keys, fobs, ignition, and lockouts.",
    items: [
      {
        q: "Do I need to tow my car to the dealer for a new key?",
        a: "Usually no. We do mobile programming for most makes — Toyota, Lexus, Honda, Acura, Ford, Chevy, GMC, Nissan, Hyundai, Kia, Mazda, Subaru, Mitsubishi, and most older BMW / Mercedes / VW / Audi. We'll tell you on the phone if your specific car needs the dealer.",
      },
      {
        q: "I lost ALL my car keys. Can you still help?",
        a: "Yes — but it's a bigger job than copying a spare. We have to add the new key to the immobilizer from scratch, which takes longer and costs more. Bring up 'all keys lost' on the phone so we send the right tools.",
      },
      {
        q: "My key fob still works but the buttons died. Can you fix it?",
        a: "Often, yes. Many fobs just need a battery, a new shell, or a button-pad replacement — that's $20–$80 instead of a full new fob. We carry shells and batteries for the common makes on every truck.",
      },
      {
        q: "Can you cut a key from the VIN if I lost everything?",
        a: "Yes, for most makes. We pull your key code from the VIN (you'll need the title or registration), cut a working blade, and program the transponder. Avoids the tow to the dealer.",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    emoji: "🏢",
    description: "Storefronts, offices, and master keys.",
    items: [
      {
        q: "Can you make a master key system for my office?",
        a: "Yes. We design and install 2–4 tier master systems for OC small businesses — restaurants, retail, offices, medical, distribution. We do a free walk-through, draft a hierarchy chart, and bid the job up front.",
      },
      {
        q: "Do you service Adams-Rite, Von Duprin, and Detex commercial hardware?",
        a: "Yes — Adams-Rite mortise cylinders, Von Duprin panic bars, Detex push bars, LCN closers, and Falcon hardware are on every commercial truck.",
      },
      {
        q: "Can you put us on a maintenance retainer?",
        a: "Yes. For OC restaurants, retailers, and property managers, we offer annual retainers that include priority dispatch, on-site inspection, and flat after-hours rates.",
      },
      {
        q: "Can you handle a multi-tenant office building?",
        a: "Yes. We work with property managers on access plans, key control, suite turnovers, and integration with electronic access (HID, Schlage AD, Brivo).",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust & License",
    emoji: "✅",
    description: "How to verify we're a legitimate locksmith.",
    items: [
      {
        q: "What's your BSIS license number?",
        a: "OH Lock & Key Solutions holds California BSIS Locksmith Company License #8663. You can verify it at search.dca.ca.gov — select 'Bureau of Security and Investigative Services' and search by license number or company name.",
      },
      {
        q: "Are your technicians background-checked?",
        a: "Yes. Every BSIS-licensed locksmith employee passes a DOJ and FBI fingerprint background check as part of the licensing process. We also do internal reference checks before issuing a uniform.",
      },
      {
        q: "Are you insured?",
        a: "Yes — we carry general liability and workers' comp insurance. If we damage your door, frame, or property during a job, our insurance covers the repair, no questions asked. We provide a certificate of insurance on request for commercial clients.",
      },
      {
        q: "Will I get a receipt?",
        a: "Yes. Every job ends with a digital invoice emailed to you, including our company name, BSIS license number, tech name, work performed, and parts used. Save it for insurance, taxes, or warranty.",
      },
    ],
  },
];

export const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((s) => s.items);
