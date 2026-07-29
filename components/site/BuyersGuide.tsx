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
                How to choose an air duct cleaning company in Metro Detroit
              </span>
              <span
                aria-hidden
                className="mt-1 inline-block shrink-0 rounded-full border border-ink-700 px-3 py-0.5 text-xs font-medium text-ink-300 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </span>
            <span className="mt-2 block text-xs text-ink-400 group-open:hidden">
              Tap to read the full guide — NADCA standards, the $99 coupon scam anatomy, equipment that actually works, and how to vet any duct cleaner before they roll a hose into your house.
            </span>
          </summary>
          <div className="space-y-5 pt-7">
        <p>
          The air duct cleaning industry in Southeast Michigan has more than its share of bad actors — arguably a worse ratio than any other home service. Search any Metro Detroit coupon mailer or social media marketplace and you will find the same ad over and over: &quot;whole house air duct cleaning, $99, unlimited vents.&quot; That ad is not a deal. It is the front end of a bait-and-switch machine that the Better Business Bureau and the Federal Trade Commission have both written warnings about by name. The scam follows a pattern, and once you know the pattern, it is easy to avoid — which is exactly what this guide is for.
        </p>

        <p>
          The single most useful credential in this trade is NADCA — the National Air Duct Cleaners Association — and its ACR standard, which spells out how a duct system is actually supposed to be cleaned: every supply, every return, the trunk lines, and the HVAC components themselves, using source removal under negative pressure, with verification that the system is visibly clean afterward. Michigan does not license duct cleaning as a standalone trade, so NADCA membership and technicians certified as Air Systems Cleaning Specialists are the closest thing to a meaningful credential the industry has. A company does not have to be a NADCA member to do honest work, but a company that follows the ACR standard can tell you exactly what that standard requires — and a company that has never heard of it is guessing with your ductwork.
        </p>

        <p>
          The second filter is equipment, because the equipment defines what is physically possible. Real duct cleaning is done with negative pressure: a truck-mounted vacuum or a HEPA-filtered portable unit is connected to the trunk line and pulls the entire system into suction, while agitation tools — rotary brushes, air whips, compressed-air skippers — travel through each branch run and knock debris loose so the vacuum can carry it out. That is source removal, and it is the only method the ACR standard recognizes. The other thing sold as duct cleaning is a technician with a shop vac and a long brush attachment, reaching a few feet into each register. That removes what you could remove yourself with a Saturday afternoon and a vacuum, leaves the trunk lines untouched, and is what the $99 coupon actually buys. Ask every company you call one question: what vacuum unit do you use, and where does it connect? A real outfit answers in seconds.
        </p>

        <p>
          The third filter is insurance. Proof of general liability and workers&apos; compensation coverage separates a real company with real employees from a guy answering a lead-generation ad. A legitimate company produces a certificate of insurance on request, without drama, usually within the hour. It matters twice over: liability coverage protects your property if a job goes wrong — a cracked ceiling from an access cut, a damaged furnace panel, a punctured flex run — and workers&apos; comp means a technician hurt in your attic or crawlspace is not your homeowner&apos;s policy&apos;s problem. BH Air Duct Cleaning Metro Detroit is {BIZ.bsis}, and we encourage you to ask us — and everyone else you call — for the paperwork.
        </p>

        <p>
          The fourth filter is the quote itself. Honest duct cleaning pricing is bounded and quotable over the phone: for a typical Metro Detroit single-furnace home, a genuine whole-system cleaning runs roughly $350&ndash;$600 depending on the number of vents, the number of returns, and the condition of the system, with second furnaces and add-ons priced as disclosed line items. The quote should be written and itemized: how many supplies and returns are included, whether the trunk lines and the return side are cleaned (they are the dirtiest part of the system and the part shop-vac outfits skip), whether the blower compartment is included, what access holes will be cut and how they will be sealed, and what the total out-the-door number is. If a company cannot put the scope in writing before the truck rolls, the scope will be negotiated on your driveway — and you will not be the one winning that negotiation.
        </p>

        <p>
          Now the anatomy of the $99 coupon, because it deserves its own paragraph. The math is simple: no legitimate company can send two technicians and a negative-pressure rig to your house for two to four hours for $99. The coupon exists to get a salesman inside. Once inside, the script begins: the $99 turns out to cover &quot;one unit and ten vents,&quot; and your house — like every house — has more vents than that, at $25 to $50 each. Then the technician shines a flashlight into a return, photographs ordinary household dust at maximum zoom, and announces a problem. The $99 job leaves as a $900 to $1,800 invoice, and the actual cleaning performed is still the shop-vac version. The FTC has documented this exact sequence for years. The defense is simple: any advertised price dramatically below the honest market range is not a price, it is bait, and the correct response is to not schedule the appointment.
        </p>

        <p>
          The most abusive branch of that script is the mold scare. The technician shows you a dark smudge inside a duct or on the blower housing, says the word &quot;mold,&quot; and quotes a four-figure remediation on the spot. Here is what an honest company tells you instead: nobody can identify mold species by flashlight. Visible growth on a wet evaporator coil or drain pan is common and is fixed by cleaning the component and correcting the moisture source — not by fogging your ducts with mystery chemicals. If genuine widespread contamination is suspected, the honest move is a lab sample and, if confirmed, remediation under proper containment. A company that diagnoses mold in thirty seconds and cures it in an hour with a spray wand is running a script, not a service. No scare tactics is a company policy of ours, and it should be a hiring criterion of yours.
        </p>

        <p>
          Sanitizer deserves the same scrutiny. Duct sanitizing — fogging an EPA-registered antimicrobial through the system — is a legitimate finishing step in specific situations: after confirmed microbial growth has been physically removed, after smoke or sewage events, or when odors persist after cleaning. It is legitimate only after physical source removal, because spraying disinfectant over dirt just gives you wet, chemically scented dirt. The scam version inverts this: the crew skips or shortcuts the cleaning, then sells a $200&ndash;$400 &quot;sanitizing treatment&quot; as the main event because fog is fast and margin is high. Ask two questions: what product, exactly (a real answer includes an EPA registration number), and is it applied before or after the mechanical cleaning? Wrong or vague answers to either one tell you what kind of company you are dealing with.
        </p>

        <p>
          The fifth filter is photo documentation, and it is the single easiest way to verify you got what you paid for. Duct interiors are invisible to you, which is precisely why the honest end of this industry has standardized on before-and-after photos or camera-inspection footage of the trunk lines and representative branch runs — taken in your house, on that visit, not stock photos from a website. Ask on the phone whether documentation is included. A company that cleans systems properly is proud to show the difference; a company that objects to documenting its own work has told you why. We photograph every job, and we walk homeowners through the images before we leave.
        </p>

        <p>
          The sixth filter is street presence and review pattern. Real duct cleaning companies have a base of operations that matches their service area, a long review history with photos, named technicians, and specific job details — &quot;they showed me the trunk line camera footage in Livonia&quot; reads very differently from &quot;great service!!&quot; five hundred times. Watch for the tells of a review-farmed profile: bursts of five-star reviews from accounts that have reviewed nothing else, a business address that resolves to a virtual office or a UPS store, and a phone number that routes to a national call center that books &quot;appointments&quot; and auctions your job to whoever is nearby. The work might still happen, but the accountability is gone the moment you have a complaint — the call center never touched your ducts and the subcontractor never gave you his real name.
        </p>

        <p>
          Know what a real crew looks like on arrival, because the driveway is your last checkpoint. A legitimate duct cleaning visit is two technicians, a marked vehicle, and equipment that takes real effort to bring in: a vacuum unit connected to your trunk line near the furnace, long hoses, an air compressor, drop cloths, and corner guards for the hose runs. Setup alone takes twenty to thirty minutes, and a genuine whole-house cleaning on a single-furnace home takes two to four hours. If one person arrives in an unmarked minivan with a shop vac and is packing up ninety minutes later, you did not get a duct cleaning — regardless of what the invoice says. Real crews also protect the house: floors covered, registers removed carefully and reinstalled, access holes sealed with proper plates or plugs, and the furnace panels put back the way they were found.
        </p>

        <p>
          Dryer vent cleaning belongs in this conversation because it is the one service with a genuine safety dimension, and because it bundles naturally with duct work. Lint-clogged dryer vents are a leading cause of house fires — that is a fire-marshal statistic, not a sales line — and the symptoms are mundane: clothes taking two cycles to dry, a hot laundry room, a burning smell. Honest standalone pricing in Metro Detroit runs $120&ndash;$200 depending on run length and roof versus wall termination, and most reputable companies discount it meaningfully when bundled with a duct cleaning since the crew and equipment are already on site. The upsell version to watch for is the reverse: a $99 duct coupon crew &quot;discovering&quot; a dryer vent emergency and pricing it like one. The fix is the same as everywhere else in this guide — get the number, in writing, before anyone touches anything.
        </p>

        <p>
          Warranties and guarantees are the filter most customers forget to pin down. Duct cleaning has service guarantees exactly like any other trade: reputable companies stand behind the work with a written satisfaction guarantee — typically that if you find an area that was missed, they return and make it right at no charge — and they warrant any physical work like access-panel installation or duct sealing against workmanship failures for at least a year. Beware the inverted version: a &quot;lifetime freshness guarantee&quot; on a sanitizing fog is marketing vapor, because there is nothing to warranty. If a company cannot describe its guarantee in plain language, or if &quot;all sales final&quot; appears anywhere on the invoice, that is a tell. Real companies back their work because they expect to be in business in five years and expect to clean your system again in three to five of them.
        </p>

        <p>
          For commercial customers a slightly different filter applies. You want a company that can produce a one-page proposal with the scope itemized to the ACR standard — air handlers by unit number, supply and return trunks by zone, VAV boxes, coil cleaning, containment and after-hours provisions — plus labor lines, warranty terms, and insurance certificates on company letterhead, signable as a purchase order. If your vendor cannot produce that document on request, they are a residential outfit stretching, and a medical office, restaurant, or light-industrial building needs a different vendor. The same company may be excellent at single-furnace colonials and unsuitable for a rooftop-unit portfolio; those are different skill levels, and the marketplace rewards specialization. We do both — and we are honest about the difference, and happy to recommend other reputable Metro Detroit companies for the rare job outside our wheelhouse.
        </p>

        <p>
          Here is the condensed red-flag list, suitable for taping next to the phone. Advertised whole-house prices under $200. Per-vent pricing revealed only after arrival. No mention of negative-pressure equipment, or evasiveness when you ask what the vacuum connects to. Mold diagnosed by flashlight and cured by fog. Sanitizer sold as the main service instead of a finishing step. No written scope before the truck rolls. No before-and-after photos offered. No certificate of insurance available. A review profile that is all five stars from empty accounts. High-pressure &quot;this price is only good today&quot; tactics. Any one of these is a reason to slow down; two or more is a reason to hang up.
        </p>

        <p>
          On the second opinion: if a crew in your house quotes a number that surprises you, you are allowed to send them away, pay only the disclosed trip or inspection fee, and call another company. Michigan consumer law does not require you to accept a quote just because the truck rolled, and it certainly does not require you to authorize work invented on your driveway. On a four-figure &quot;mold remediation&quot; diagnosis, a second opinion is worth paying for twice. Crews who refuse to leave without payment of the full inflated estimate are crossing into criminal territory; if it happens to you, the non-emergency police line will help, and a written complaint to the Michigan Attorney General&apos;s consumer protection division is exactly the mechanism that gets these operations shut down.
        </p>

        <p>
          Honesty also requires saying when duct cleaning is not the answer, because a company that recommends it for everything is a sales organization. The genuine triggers: visible debris or pet hair blowing from registers, post-construction or renovation dust, a home purchase where the system&apos;s history is unknown, rodent or insect evidence in the ducts, smoke or water events, and heavy-shedding pets or allergy sufferers on a three-to-five-year cycle. What duct cleaning does not do is cure a dusty house by itself (most household dust is generated in the living space), fix airflow problems caused by undersized returns, or need repeating every year in a normal home. An honest company will sometimes tell you to save your money and change your filter more often. That answer, when you get it, is the strongest hiring signal in this entire guide.
        </p>

        <p>
          On camera inspections: the borescope is the honest industry&apos;s favorite tool and the dishonest industry&apos;s favorite prop, and the difference is context. Used honestly, a camera run before the job documents actual conditions and scopes the work, and a run afterward proves the result — the same footage that anchors the photo documentation covered above. Used dishonestly, a zoomed-in frame of ordinary dust becomes a horror slide justifying a four-figure invoice. The tell is whether the company shows you the whole run or a single scary frame, and whether the footage comes with a measured recommendation or an on-the-spot ultimatum. Ask for the full video. Honest companies hand it over; the other kind changes the subject.
        </p>

        <p>
          On maintenance and frequency: ductwork is not a filter and does not need annual cleaning, no matter what the postcard says. NADCA&apos;s guidance for a typical home is every three to five years, sooner with heavy-shedding pets, smokers, recent renovation, or allergy and asthma concerns — and dryer vents genuinely are an annual item. Between cleanings, the highest-value habits are boring: a quality filter changed on schedule, supply registers kept open (closing them raises static pressure and hurts the system), and a spring coil cleaning if your AC sweats through Michigan humidity. A company whose maintenance plan is built around those realities is a service organization; a company selling you an annual whole-house cleaning is optimizing for the invoice. Hire the first kind.
        </p>

        <p>
          Worth mentioning one more time: we are {BIZ.bsis}. Our phone is {BIZ.phone}. Our crews work Wayne, Oakland, and Macomb counties every day, every technician represents BH Air Duct Cleaning Metro Detroit directly — not a subcontractor booked through a call center — and every job gets a written scope up front and photos at the end. Whether or not you end up hiring us, we hope you take this guide with you. The next time you need duct or dryer vent work in Metro Detroit, ask the questions above. The trade has good people in it; you just have to know how to find them.
        </p>
          </div>
        </details>
      </div>
    </section>
  );
}
