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
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <details className="group space-y-5 text-sm text-ink-200 md:text-base">
          <summary className="cursor-pointer list-none rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-brass-500/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Buyer&apos;s guide</p>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="font-display text-lg font-bold text-white md:text-xl">
                How to choose a garage door company in Metro Detroit
              </span>
              <span
                aria-hidden
                className="mt-1 inline-block shrink-0 rounded-full border border-ink-700 px-3 py-0.5 text-xs font-medium text-ink-300 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </span>
            <span className="mt-2 block text-xs text-ink-400 group-open:hidden">
              Tap to read the full guide — insurance, pricing red flags, and how to vet any garage door company before they touch your door.
            </span>
          </summary>
          <div className="space-y-5 pt-7">
        <p>
          The garage door industry in Southeast Michigan has more than its share of bad actors. Walk through any consumer-protection bulletin from the Michigan Attorney General&apos;s office or the Better Business Bureau&apos;s Metro Detroit chapter and you will find garage door repair consistently among the most-complained-about home services — usually right next to roofing contractors and tow-truck operators. The scams follow a pattern, and once you know the pattern, they are easy to avoid.
        </p>

        <p>
          The single most important filter is insurance. Michigan does not license garage door work as a standalone trade, which means proof of general liability and workers&apos; compensation insurance is the meaningful credential — it separates a real company with real employees from a guy with a ladder answering a lead-generation ad. A legitimate company produces a certificate of insurance on request, without drama, usually within the hour. It matters twice over: liability insurance covers your property if a job goes wrong (a dropped door, a cracked jamb, a bent opener rail), and workers&apos; comp means an injured technician on your property is not your homeowner&apos;s policy&apos;s problem. BH Garage Door Metro Detroit is {BIZ.bsis}, and we encourage you to ask us — and everyone else you call — for the paperwork.
        </p>

        <p>
          The second filter is the quoted price over the phone. Real garage door pricing is bounded — there are only so many ways a spring replacement, an opener install, or an off-track reset can play out, and a competent dispatcher can give you a tight flat-rate range from a one-minute description and a photo. If someone advertises a $29 service call with the explicit promise that the real cost will be &quot;diagnosed on arrival,&quot; you are talking to a lead-aggregation operation, not a garage door company. The price will not be $29. The price will be whatever the commissioned salesman on your driveway thinks he can extract — and the industry&apos;s most notorious version of this ends with an $89 spring advertised and a $1,200 &quot;full rebuild&quot; invoiced. Walk away from these calls before the truck shows up; once it arrives, the pressure to pay something to make them leave is real, and they know it.
        </p>

        <p>
          The third filter is the company&apos;s street presence and review pattern. Real garage door shops have a physical base that matches their service area, a long review history with photos and named technicians, and a phone number that, when you call it during normal business hours, is answered by a person who knows the trade. A company whose Google profile is a virtual office, whose reviews are all five stars from accounts that have reviewed nothing else, and whose phone routes to a national call center is — at best — a marketing operation flipping calls to subcontractors. The work might still get done, but the accountability is gone the moment a warranty claim comes up.
        </p>

        <p>
          The fourth filter is diagnostic transparency. Ask the dispatcher what the technician will actually check. A real company will name the components: spring condition and cycle count, cable fray at the bottom brackets, roller wear, track alignment, door balance with the opener disengaged, opener force and travel settings, photo-eye alignment. A scam operation will dodge specifics or say &quot;we&apos;ll see when we get there.&quot; And when the technician arrives, a legitimate diagnosis is demonstrable — a snapped spring has a visible gap, a frayed cable has visible broken strands, a worn roller wobbles in your hand. Ask to be shown every failed part before you approve its replacement. Honest techs love this question; the other kind changes the subject.
        </p>

        <p>
          Pricing structure deserves one more paragraph. Honest garage door pricing is mostly flat-rate for the common jobs. A single torsion spring replacement has a flat number; a pair has a flat number; an off-track reset, a cable pair, a roller set, and each tier of opener install all have flat numbers. After-hours work has a disclosed surcharge, quoted on the call. None of these requires a technician on your driveway to discover what the work costs. The dispatcher should be able to give you the full price, in dollars, before any truck rolls. If they cannot, ask why — and consider that an answer in itself.
        </p>

        <p>
          For commercial customers a slightly different filter applies. You want a company that can produce a one-page proposal with parts itemized by manufacturer and specification — spring cycle ratings, operator duty class, slat gauge for rolling steel — plus labor lines, warranty terms, and insurance certificates on company letterhead. The proposal should be signable as a purchase order or a small services agreement. If your vendor of choice cannot produce that document on request, they are an emergency-only contractor, and you need a different vendor for planned commercial work: dock-door replacements, high-cycle spring conversions, operator upgrades, multi-door maintenance contracts. The same company may be excellent at residential spring calls and unsuitable for a twelve-door logistics facility; those are different skill levels, and the marketplace rewards specialization. We do both — but we are honest about the difference, and we are happy to recommend other reputable Metro Detroit shops for the rare job outside our wheelhouse.
        </p>

        <p>
          Warranties are the fifth filter and the one most customers forget to pin down. Garage door work has labor and parts warranties exactly like any other building trade. Reputable shops guarantee labor for at least a year against workmanship issues and pass through the manufacturer&apos;s warranty on hardware — typically 3–10 years on springs depending on cycle rating, 1–3 years on openers with lifetime coverage on some motors and belts, and up to lifetime on door sections from the major brands. Beware the inverted version: &quot;lifetime warranty&quot; pitches where the part is free forever but every replacement visit carries a fat labor charge. That structure incentivizes installing parts that fail. If a company cannot describe its warranty in plain language, or if &quot;all sales final&quot; appears anywhere on the invoice, that is a tell. Real shops back their work because they expect to be in business in five years and expect you to call them again.
        </p>

        <p>
          If you apply all five filters — proof of insurance, transparent phone pricing, a real local presence with a real review pattern, demonstrable diagnostics, and written warranty terms — you will eliminate the vast majority of the bad actors before any truck arrives. The companies that pass all five filters are not all BH Garage Door Metro Detroit. There are other reputable garage door shops in Metro Detroit and we are happy to be compared to any of them. What we cannot do is win comparisons against $29 lead-generation ads, because the $29 is not a real number and the company behind it is not a real garage door shop. We hope this guide saves you from learning that the expensive way.
        </p>

        <p>
          A short word on after-hours work. A meaningful share of garage door emergencies in Metro Detroit surface between 9pm and 7am — the spring that snaps in the evening cold, the door that will not close as the house goes to bed. The after-hours premium is one of the most-abused line items in the trade. Honest after-hours pricing reflects the real cost of paying a technician to be on call: typically twenty to forty percent more than the daytime rate, disclosed on the phone. It is not triple, and it is not an hourly meter that surprises you on the invoice. If you call at midnight and the dispatcher cannot quote the after-hours rate before sending a truck, the conversation should end there.
        </p>

        <p>
          On springs specifically, because they are where the money and the danger concentrate: a torsion spring is specced by wire size, inside diameter, and length, matched to the measured weight of your door. A correct replacement restores the door to a state where you can lift it with two fingers with the opener disengaged. There is no such thing as a universal spring, and a company that installs without measuring is guessing with your door&apos;s balance. Ask what cycle rating is being installed — 10,000-cycle steel is standard, 25,000-plus is the upgrade worth having on a daily-use door — and ask whether the quote includes rebalancing and inspection of the cables and bearings that share the shaft. If the answer to any of this is vague, so is the company.
        </p>

        <p>
          On openers: the drive types are chain (cheap, durable, loud), belt (quiet, the right answer for attached garages), and wall-mount jackshaft (premium, frees the ceiling, usually bundles battery backup). Horsepower matters less than the sales floor implies — an opener that struggles is almost always lifting an unbalanced door, and a bigger motor just masks the real problem until the gear strips. A proper install includes the rail, a reinforced header bracket, safety sensors at the correct height, force and travel calibration, remotes, keypad, and app setup. An opener quote that is dramatically cheaper than market usually excludes half of that list, and you find out on install day. Ask what is included, in writing.
        </p>

        <p>
          On panel damage: a dented section does not automatically mean a new door. Most major brands sell replacement sections for years after a model ships, and a color- and profile-matched swap restores both appearance and structure for a fraction of full replacement. The honest exceptions are discontinued profiles, damage across multiple sections, and builder-grade doors where one section costs nearly half of a new door. A company that quotes only full replacement without discussing section availability is either not checking or not telling. Conversely, a company happy to bolt a mismatched panel onto your door and call it fixed is optimizing for the invoice, not the house. Both extremes are avoidable by asking one question: what are my options, and what would you do on your own house?
        </p>

        <p>
          On maintenance: garage doors are machines with wear items, and the difference between a door that lasts thirty years and one that eats parts every winter is mostly lubrication, balance, and hardware tension — an hour of attention twice a year. A professional tune-up covers lubrication of springs, hinges, and rollers, a balance test, cable and roller inspection, hardware tightening, opener force calibration, and both federal safety tests. It is the cheapest service on any garage door company&apos;s menu and prevents the most expensive calls. If a company&apos;s only answer to every symptom is replacement, they are a sales organization; if their menu includes an honest tune-up, they are a service organization. Hire the second kind.
        </p>

        <p>
          On door construction and what the spec sheet actually means: doors come single-layer (one steel skin), double-layer (skin plus foam board and backer), and triple-layer sandwich (steel–foam–steel). The sandwich construction with injected polyurethane is stiffer, quieter, better insulated (R-13 to R-18), and dramatically more dent-resistant — and in Michigan&apos;s climate it is the correct answer for any attached garage. R-value claims deserve scrutiny: some manufacturers quote the R-value of the foam at the panel&apos;s center rather than the door&apos;s real-world assembled performance. A knowledgeable dealer will tell you the difference without being asked. Gauge matters too — thicker steel skins (lower gauge numbers) resist dents and oil-canning. These details are exactly the kind of thing a real garage door company explains and a lead-reseller cannot.
        </p>

        <p>
          On safety systems: every opener sold in the United States since 1993 is federally required (UL 325) to have photo-eye sensors and contact auto-reverse. These systems exist because doors killed and injured children before them. No legitimate technician will ever disable, bypass, or tape over a safety sensor to &quot;fix&quot; a door that will not close — the underlying cause is always diagnosable and fixable. When any company services your door, both systems should be tested before the truck leaves: a broom handle through the beam must reverse the closing door instantly, and a 2x4 flat on the floor must trigger the contact reverse. If a technician skips these tests, or worse, suggests defeating them, that tells you everything about the operation behind the truck.
        </p>

        <p>
          On hardware sources: a real garage door company stocks springs, sections, and openers from wholesale distributors and passes through the manufacturer warranty. A scam operation carries whatever was cheapest — unbranded springs of unknown cycle rating, gray-market openers with no US warranty, aftermarket sections that almost match. Ask where the hardware comes from. Real inventory arrives in branded packaging with intact factory documentation and a warranty card. Springs with no markings and openers in plain brown boxes are a tell. The price difference between legitimate and gray-market hardware is small; the difference in what happens when it fails is not.
        </p>

        <p>
          On the second opinion: if a technician on your driveway quotes a number that surprises you, you are allowed to send them away, pay only the disclosed service-call fee, and call another shop. Michigan consumer law does not require you to accept a quote just because the truck rolled. The first company may bill you for the trip — the disclosed diagnostic fee, not the inflated estimate — and that is the cost of a second opinion. It is almost always worth paying. On a four-figure &quot;full rebuild&quot; diagnosis, it is worth paying twice. Technicians who refuse to leave without payment of the full inflated estimate are crossing into criminal territory; if it happens to you, the non-emergency police line will help, and a written complaint to the Michigan Attorney General&apos;s consumer protection division is exactly the mechanism that gets these operations shut down.
        </p>

        <p>
          On scope creep: a technician arrives for a broken spring, replaces it, then suggests new rollers, new cables, a new opener, and a full door replacement. Some of those suggestions may be legitimately useful — cables and springs do age together, and rollers are cheap to do while the door is being serviced. The honest way to handle it is for the technician to complete the original job at the quoted price, present the additional recommendations as a separate written estimate with no pressure, and leave. If the upsell becomes a condition — &quot;I can&apos;t warranty the spring unless you also replace X&quot; — that is manufactured leverage, and you are allowed to say no, pay the original amount, and end the visit. Document high-pressure interactions afterward in a short email to yourself; if you file a complaint later, the contemporaneous record matters.
        </p>

        <p>
          Worth mentioning one more time: we are {BIZ.bsis}. Our phone is {BIZ.phone}. Our shop is in Metro Detroit. Every technician on our trucks is an employee of BH Garage Door Metro Detroit — not a subcontractor — and every truck on the road carries the same name and the same number. Whether or not you end up hiring us, we hope you take this guide with you. The next time you need garage door work in Metro Detroit, ask the questions above. The trade is full of good people; you just have to know how to find them.
        </p>
          </div>
        </details>
      </div>
    </section>
  );
}
