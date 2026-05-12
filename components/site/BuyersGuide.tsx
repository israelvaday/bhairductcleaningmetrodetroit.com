import { BIZ } from "@/lib/business";

/**
 * Long-form buyer's-guide content companion to LongFormFaq. Rendered on the
 * home and service-area index pages where the surrounding HTML is heavy
 * (component grids, search widgets, marquees). Different body content from
 * LongFormFaq so a reader who scrolls both sees fresh material.
 */
export function BuyersGuide() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Buyer&apos;s guide</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            How to choose a locksmith in Orange County
          </h2>
        </header>

        <p>
          The locksmith industry in Southern California has more than its share of bad actors. Walk through any consumer-protection bulletin from the California Attorney General&apos;s office or the Better Business Bureau&apos;s Los Angeles chapter and you will find the locksmith trade consistently in the top ten complaint categories — usually right next to roofing contractors and tow-truck operators. The pattern is so predictable that the FTC has published an explicit consumer alert on it. None of this is meant to discourage you from hiring a locksmith. Locksmiths solve real problems and most of us do excellent, honest work. It is meant to help you tell the difference between a real shop and a call-center scam before any money changes hands.
        </p>

        <p>
          The single most important filter is the BSIS license. California requires every locksmith — every individual who touches a lock for compensation, employee or owner — to hold a current Bureau of Security and Investigative Services license. The license number is supposed to appear in advertising, on the truck, and on every invoice. You can verify any locksmith&apos;s license in under a minute at the Department of Consumer Affairs lookup page (search.dca.ca.gov). If a locksmith refuses to give you a license number over the phone, declines to put one on the invoice, or gives you a number that does not exist when you check it — they are unlicensed. Hang up and call someone else. Our BSIS number is #{BIZ.bsis} and you are welcome (encouraged, really) to look it up before you call us.
        </p>

        <p>
          The second filter is the quoted price over the phone. Real locksmith pricing is bounded — there are only so many ways a residential lockout, a rekey, or an automotive key replacement can play out, and a competent dispatcher can give you a tight range based on a one-minute conversation. If someone quotes you a $19 or $29 service-call fee with the explicit promise that any additional cost will be quoted on arrival, you are talking to a lead-aggregation operation, not a locksmith. The price will not be $19. The price will be whatever the contractor on your driveway thinks they can extract. Walk away from these calls before the technician shows up — once a truck is on the way the pressure to pay something to make them leave is real and they know it.
        </p>

        <p>
          The third filter is the company&apos;s street address and review pattern. Real locksmith shops have a physical address that matches their service area, a long review history with photos and named technicians, and a phone number that, when you call it during normal business hours, is answered by a person who knows the trade. A locksmith whose Google profile is a residential apartment, whose reviews are all five stars from accounts that have reviewed nothing else, and whose phone routes to a national 800-number is — at best — a marketing operation flipping calls to subcontractors. The work might still get done, but the accountability is gone the moment a problem comes up.
        </p>

        <p>
          The fourth filter is hardware brand and method of entry. Ask the dispatcher how the technician plans to open your lock. A real locksmith will name a method: picking, bumping, shimming, manipulation, or non-destructive bypass. A scam operation will dodge the question or say &quot;we will figure it out on site.&quot; Ask, also, what brand of lock you have and what the technician knows about it. If they can name a few common Kwikset, Schlage, Yale, or Baldwin model lines and describe the difference between them in plain language, they are real. If they cannot, they are not.
        </p>

        <p>
          Pricing structure deserves one more paragraph. Honest locksmith pricing is mostly flat-rate or tightly-itemized for the common jobs. A residential lockout during business hours has a flat number. A residential lockout after midnight has a higher flat number and the dispatcher tells you the surcharge on the call. A rekey is priced per cylinder with a small first-cylinder labor charge. A standard smart-lock install is priced as labor plus hardware. None of these requires a technician on your driveway to discover what the work costs. The dispatcher should be able to give you the full price, in dollars, before any truck rolls. If they cannot, ask why — and consider that an answer in itself.
        </p>

        <p>
          For commercial customers a slightly different filter applies. You want a locksmith who can produce a one-page proposal with parts itemized by manufacturer and model, labor lines, warranty terms, and the BSIS license number on the company letterhead. The proposal should be signable as a purchase order or a small services agreement. If your locksmith of choice cannot produce that document on request, they are an emergency-only contractor and you need a different vendor for planned commercial work — master-key planning, access-control installs, multi-door rekeys, panic-hardware retrofits. The same locksmith may be excellent at after-hours lockouts and unsuitable for ten-door commercial buildouts; those are different skill levels and the marketplace rewards specialization. We do both — but we are honest about the difference, and we are happy to recommend other reputable Orange County shops for the rare job that is outside our wheelhouse.
        </p>

        <p>
          Insurance and bonding is the fifth filter and the one most customers forget about. A real locksmith carries general liability insurance — typically $1M aggregate — and is bonded for the scope of work they perform. Insurance protects you in the small percentage of cases where something genuinely goes wrong on the job: a damaged door, a stripped frame, a key broken in a way that requires hardware replacement. Bonding protects you against employee dishonesty (locks contain a lot of trust, and a locksmith with access to your home has had access to a great deal of it). Ask any locksmith you are considering hiring whether they carry liability and a bond, and the dollar amount of each. The honest ones will tell you instantly. The scam operations will get vague or hang up.
        </p>

        <p>
          Last filter: written guarantees. The locksmith trade has labor and parts warranties exactly like any other building trade. Reputable shops guarantee labor for at least 90 days against workmanship issues and pass through the manufacturer&apos;s warranty on hardware — typically 1 year for entry-level locks, up to lifetime mechanical for premium hardware. If a locksmith cannot describe their warranty in plain language, or if &quot;all sales final&quot; appears anywhere on their invoice, that is a tell. Real shops back their work because they expect to be in business in five years and they expect you to call them again. Scam operations expect you to never call them again. Their pricing reflects it.
        </p>

        <p>
          If you apply all five filters — BSIS license, transparent phone pricing, real local address with a real review pattern, named methods of entry and hardware knowledge, written warranty plus insurance and bond — you will eliminate the vast majority of the bad actors before any truck arrives. The locksmiths who pass all five filters are not all OH Lock &amp; Key Solutions. There are several other reputable shops in Orange County and we are happy to be compared to any of them. What we cannot do is win comparisons against $19 lead-generation ads, because the $19 is not a real number and the company behind it is not a real locksmith. We hope this guide saves you from learning that the expensive way. Call any locksmith — including us — with these questions ready, and the conversation will be short.
        </p>

        <p>
          A short word on after-hours work. Roughly one in three locksmith calls in Orange County comes in between 9pm and 6am, and the after-hours premium is one of the most-abused line items in the trade. Honest after-hours pricing reflects the real cost of paying a technician overtime to be on call. It is typically twenty to forty percent more than a daytime rate. It is not three hundred percent more, and it is not a per-quarter-hour escalation that surprises you on the invoice. If you call a locksmith at 2am and the dispatcher cannot quote you the after-hours rate before sending a truck, the conversation should end there. Real shops publish their overnight rates on their website or quote them verbatim on the phone. The premium is real; the gouging is not.
        </p>

        <p>
          On drilling: a competent locksmith opens almost every residential lock without drilling. Drilling is the technique of last resort — used for high-security cylinders that resist picking, locks with a deliberate anti-bypass design (Medeco, Mul-T-Lock, Abloy Protec), or locks that have been damaged from previous failed entry attempts. A typical Kwikset, Schlage, or Yale residential lock should never need to be drilled. If a locksmith arrives at a standard residential lockout and immediately reaches for a drill, they are either undertrained or running a scam. The drill destroys the lock and forces a hardware sale. Ask, on the phone before the truck rolls, whether drilling will be required. If the answer is &quot;maybe&quot; for a standard residential cylinder, call another locksmith.
        </p>

        <p>
          On automotive work: car keys are a different trade than building locks. The skills overlap but only partly. Modern transponder keys, proximity fobs, and push-to-start systems require manufacturer-specific programming equipment and a current subscription to a key-programming database. Not every locksmith carries that equipment. A locksmith who does not specialize in automotive will often subcontract the work or refer you to a colleague who does — that is the honest response. A locksmith who insists they can program any car key without asking you the year, make, and model is bluffing. The right answer to &quot;can you make me a key for a 2021 Honda Civic with push-to-start&quot; is &quot;yes, we have the AKL programmer for that platform, the all-key-lost procedure for a 2021 Honda takes about ninety minutes onsite, the price is X, and we&apos;ll need the VIN before we roll.&quot; If you get vaguer answers than that, find an automotive locksmith.
        </p>

        <p>
          On safes: safe work is the most specialized end of the locksmith trade and the area where the most underqualified work happens. Real safe technicians belong to the Safe and Vault Technicians Association (SAVTA) and have invested in dialer scopes, change-key kits, and manipulation experience that takes years to develop. A locksmith who shows up at a residential gun safe and immediately starts drilling the dial is, again, choosing destruction over skill — the safe will work after the drill but the relocker will be triggered, the boltwork will need replacement, and the bill will be three times what manipulation would have cost. If you have a safe to open and the locksmith on the phone cannot describe a non-destructive opening approach, call someone else. SAVTA maintains a public directory and most large metros have at least one qualified safe technician.
        </p>

        <p>
          On smart locks: the smart-lock category has matured a great deal since the early Yale and Kwikset Bluetooth experiments. A modern Wi-Fi or Matter smart lock from August, Yale Assure, Schlage Encode, Level, or Aqara is genuinely a better lock for most homes than a basic deadbolt — fewer keys to manage, audit logs that tell you when each family member came home, the ability to give the dog walker a code that only works on Tuesdays from 10 to 11. But the installation is unforgiving. A smart deadbolt that is mounted on an out-of-square door, or driven through a strike plate that does not align, will run its motor against resistance every time it engages, drain its batteries in weeks, and eventually strip its drive gear. A real locksmith installing a smart lock will adjust the strike, plane the door if needed, set the bolt throw precisely, and walk you through the app pairing. A scam locksmith will hand you the lock half-installed and leave. Ask what the install includes before the truck rolls.
        </p>

        <p>
          On rekeying: rekeying is the technique of changing the pins inside an existing lock so that the old key no longer works and a new key does. It is dramatically cheaper than replacing the lock — typically twenty to thirty dollars per cylinder versus a hundred or more for a new lockset. It is also faster, less invasive (no door modification), and just as secure when done correctly. After buying a home, after a roommate moves out, after losing a key, after a contractor returns the loaner — rekeying is almost always the right answer. Replacement is only necessary when the existing lock is damaged, has reached end-of-life on its mechanical wear, or is being upgraded to a different security grade. A locksmith who insists on replacement for every job is either undertrained on rekey procedure or running a hardware-sales scheme. Either way, the work costs you more than it should.
        </p>

        <p>
          On master-key systems: a master key system is a careful pinning design that lets one master key open every lock in a building while individual change keys open only the locks assigned to them. It is the single most useful security tool for any business with multiple employees and multiple zones — managers carry the master, employees carry their change keys, the cleaning crew carries a sub-master that opens only common areas. Designing a master system is engineering work, not a quick job. The locksmith needs a floor plan, a list of access groups, a count of doors per group, and a plan for future growth. The pinning charts are then computed (often with software) and the cylinders are pinned to the chart. A locksmith who can produce a master-key chart and walk you through it is a real commercial locksmith. A locksmith who promises to &quot;just master all the locks together&quot; without producing a chart is going to give you a system with security holes — keys that open more than they should, or change keys that accidentally open each other&apos;s locks (a defect known in the trade as a &quot;cross-key&quot;). Ask to see the chart before any work begins.
        </p>

        <p>
          On access control: the commercial access-control market has consolidated in the last five years around a handful of cloud-managed platforms. Brivo, Avigilon Alta (formerly Openpath), Kisi, Verkada Access, and Salto KS dominate the small-to-mid-business segment. Each platform has tradeoffs — Brivo has the longest install base and the most integrations; Alta has the cleanest mobile credential experience; Kisi has the simplest pricing; Verkada bundles cameras and access on one pane of glass; Salto KS works with offline-capable battery-powered locks for buildings without wired infrastructure. The locksmith you hire for access-control work should be a certified installer for at least one of these platforms and should be able to explain the others honestly — including telling you when your building is a better fit for a competitor&apos;s product than the one they sell. A locksmith who only sells one platform and dismisses all others is selling, not consulting. We carry certifications across multiple platforms and pick the right one for the building.
        </p>

        <p>
          On warranties and recalls: the lock industry has occasional recalls and frequent silent revisions. A Kwikset SmartKey cylinder from 2008 is not the same lock as a Kwikset SmartKey cylinder from 2022 — the keyway has been hardened, the bumping-resistant features have been redesigned, and the warranty terms have been tightened. A locksmith who is current with the industry will know which hardware revisions to install in your home, which legacy products to avoid (the original 2008 SmartKey is bypassable in under a minute with a screwdriver — a fact the manufacturer eventually acknowledged), and how to file warranty claims with the manufacturer on your behalf when something fails. If you bought hardware online and want it installed, ask the locksmith if they will honor the manufacturer warranty through their account. Many will, for a small handling fee, because dealing with the manufacturer directly as a consumer is painful.
        </p>

        <p>
          On finishes and matching: hardware finish is one of the most-asked questions on remodel jobs and one of the more frustrating ones in practice. The industry uses BHMA codes for standard finishes — 605 is bright brass, 606 is satin brass, 612 is satin bronze, 613 is oil-rubbed bronze, 619 is satin nickel, 625 is bright chrome, 626 is satin chrome, 716 is dark bronze powder coat — and the same code from two different manufacturers will not look identical. Schlage&apos;s 619 looks slightly different from Yale&apos;s 619 because the underlying alloy and the finishing process differ. If you are matching new hardware to existing locks in a home, bring a sample to the locksmith or have them order matching samples first. Returns on installed hardware in the wrong finish are at the locksmith&apos;s discretion and almost never free.
        </p>

        <p>
          On lock grades and what they actually mean: the ANSI/BHMA grade system runs from Grade 3 (light residential) to Grade 1 (commercial-duty). The grade is determined by lab-testing the lock against three criteria: cycle count (how many open-close cycles before failure), strength (how much force the lock resists before destruction), and durability (corrosion, vandalism, abuse). A Grade 1 deadbolt has been tested to 250,000 operating cycles, 360 pounds of static load on the bolt, and ten strike-impact tests at 75 foot-pounds. A Grade 3 deadbolt has been tested to a tenth of that. The price difference between a Grade 3 Kwikset at the big box store and a Grade 1 Schlage at a locksmith supply is around thirty dollars; the difference in real-world security is much larger. Spend the thirty dollars.
        </p>

        <p>
          On weather and environment: Southern California is mild compared to most of the country, but coastal salt spray, garage-door heat, and the occasional Santa Ana wind event do real damage to outdoor hardware over a decade. Brass and stainless-steel cylinders outlast zinc-die-cast cylinders by a factor of two or three in coastal Orange County. If your home is within five miles of the ocean, ask your locksmith for marine-grade or stainless hardware on the exterior locks. The premium is small and the lifetime is long.
        </p>

        <p>
          On hardware sources: a real locksmith stocks hardware from a wholesale distributor and passes through the manufacturer warranty. A scam locksmith carries cheap aftermarket clones, often counterfeit, that look like name-brand hardware but fail within a year. Ask, when the technician arrives, where the hardware was sourced from. Real locksmith inventory comes in branded boxes with intact factory seals and includes a manufacturer warranty card. Loose hardware in unbranded plastic bags is a tell. Counterfeit hardware is widespread on overseas marketplaces and a meaningful share of bargain-priced &quot;Schlage&quot; or &quot;Kwikset&quot; locks sold online are not authentic.
        </p>

        <p>
          On the second opinion: if a locksmith on your driveway quotes a number that surprises you, you are allowed to send them away unpaid for the service call only, and call another shop. California law does not require you to accept the quote just because the truck rolled. The first locksmith may bill you for the trip — typically the disclosed service-call fee, not the inflated estimate — and that is the cost of a second opinion. It is almost always worth paying. Locksmiths who refuse to leave without payment of the full inflated estimate are crossing into criminal territory; if it happens to you, the Orange County Sheriff&apos;s non-emergency line will help and the locksmith&apos;s BSIS license is at risk.
        </p>

        <p>
          On scope creep: a locksmith arrives for a lockout, opens the door, then suggests rekeying every lock in the house, replacing the deadbolt, adding a smart lock, and upgrading the strike plates. Some of those suggestions may be legitimately useful; some are upselling. The honest way to handle this is for the locksmith to complete the original job, present the additional recommendations as a separate written estimate with no pressure to accept, and leave. If the upsell becomes high-pressure, the locksmith has crossed a line. You are allowed to say no, pay the original quoted amount, and have the technician leave. Document the interaction in writing afterward — a short email summarizing what happened — and consider filing a complaint with BSIS if the pressure was severe. The trade polices itself in part through these complaints; honest locksmiths benefit when scam operations are reported.
        </p>

        <p>
          Worth mentioning one more time: our BSIS license number is #{BIZ.bsis}. Our phone is {BIZ.phone}. Our shop is in Orange County. Every technician on our trucks is an employee of OH Lock &amp; Key Solutions — not a subcontractor — and every truck on the road carries the same name, the same number, and the same license. Whether or not you end up hiring us, we hope you take this guide with you. The next time you need a locksmith in Orange County, ask the questions above. The trade is full of good people; you just have to know how to find them.
        </p>
      </div>
    </section>
  );
}
