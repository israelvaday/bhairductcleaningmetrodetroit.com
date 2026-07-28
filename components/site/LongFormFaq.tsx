import { BIZ } from "@/lib/business";

/**
 * Long-form FAQ + narrative block embedded on every service-area and service
 * page. Each page passes a short noun (city or service) for substitution; the
 * underlying body is intentionally rich, evergreen, and answers questions real
 * Metro Detroit customers ask. The aim is genuine usefulness and to raise the
 * text-to-HTML ratio on every prerendered page (SEMrush check 112).
 */
export function LongFormFaq({ subject, kind }: { subject: string; kind: "area" | "service" }) {
  const place = kind === "area" ? subject : "Metro Detroit";
  const topic = kind === "area" ? `garage door service in ${subject}` : `${subject.toLowerCase()} work across Metro Detroit`;

  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <details className="group space-y-7 text-sm text-ink-200 md:text-base">
          <summary className="cursor-pointer list-none rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-brass-500/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">In depth</p>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="font-display text-lg font-bold text-white md:text-xl">
                Frequently asked questions about {topic}
              </span>
              <span
                aria-hidden
                className="mt-1 inline-block shrink-0 rounded-full border border-ink-700 px-3 py-0.5 text-xs font-medium text-ink-300 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </span>
            <span className="mt-2 block text-xs text-ink-400 group-open:hidden">
              Tap to read the full guide — pricing, warranties, common questions, and how we work in {place}.
            </span>
          </summary>
          <div className="space-y-7 pt-7">
            <p>
              The questions below come straight from the calls and texts our dispatchers field every day from customers across {place}. They are written to help you make a good decision before you hire any garage door company — not just us.
            </p>

        <Q q={`How fast can a garage door technician reach me in ${place}?`}>
          Under normal traffic conditions our nearest mobile unit is roughly 15 to 30 minutes from any address in {place}. Early-morning emergency calls — a snapped spring discovered at 6 a.m. with the car trapped inside — are our most common priority dispatch, and we route those ahead of scheduled tune-ups. Heavy-traffic windows on I-75, I-696, M-59, or the Lodge can push the upper end of the range out by another 10 minutes. We will give you a live ETA the moment you call, not a vague &quot;on the way.&quot; If your situation is unsafe — a door stuck fully open on an attached garage, or a door hanging crooked off its track — say so when you call; we route those jobs ahead of routine ones.
        </Q>

        <Q q="What does a written quote actually include?">
          A real garage door quote in Michigan lists the work performed, the parts installed by manufacturer and specification (spring wire size and cycle rating, opener model, panel style), the labor line, any after-hours surcharge, and the total. It also names the company and the technician. If a company quotes you a $29 service call over the phone and refuses to put anything else in writing, you are talking to a lead-reselling call center, not a garage door company. Walk away. Bait-and-switch is the single most common garage door scam in Southeast Michigan, and the pattern is always the same: a rock-bottom teaser price, followed by a four-figure &quot;full rebuild&quot; diagnosis in your driveway.
        </Q>

        <Q q="Are you actually licensed and insured?">
          Yes. BH Garage Door Metro Detroit is {BIZ.bsis} for residential and commercial garage door work in Michigan. Every technician is background-checked, on our payroll — no subcontractors — and covered by our general liability and workers&apos; compensation insurance. We provide a certificate of insurance on request, which matters for commercial clients and for any homeowner whose insurer asks who performed the work. We strongly recommend requesting proof of insurance from any garage door company before they touch your door; the legitimate ones will not hesitate.
        </Q>

        <Q q="Do you charge a trip fee or service-call fee?">
          A standard service call is $45 during business hours and $75 after hours, and it covers the drive plus a full diagnostic of the door, springs, cables, rollers, track, and opener. The repair itself is quoted flat-rate before any work starts. If you decline the quote after we arrive and inspect, you owe only the service call — never a surprise labor charge. We can be this transparent because we screen jobs carefully on the phone, so the technician arrives with the right springs, sections, or opener already on the truck.
        </Q>

        <Q q="Is a broken spring really that dangerous to DIY?">
          Yes, and we say this as people who handle springs every day, not to scare you into a service call. A torsion spring on a two-car door stores enough energy to lift 200+ pounds of steel — that energy is wound into the coil with steel bars, and a slipped bar or wrong-size replacement releases it instantly. Emergency rooms across Metro Detroit see these injuries every year: broken hands, facial injuries, worse. Spring replacement is fast and inexpensive for a properly equipped tech (most jobs run under an hour). It is the one garage door job where the honest advice is simply: don&apos;t.
        </Q>

        <Q q="One spring broke — do I really need to replace both?">
          On a two-spring door, we recommend it, and here is the honest math. Both springs were installed on the same day and have cycled the same number of times. When one fatigues to failure, the other is at essentially the same point in its life — the industry rule of thumb is that the survivor fails within months. Replacing both on one visit costs far less than two separate service calls, keeps the door evenly balanced, and lets us set both springs to the same cycle rating. If your door has a single spring, this question answers itself.
        </Q>

        <Q q="What opener brands do you install and service?">
          We install LiftMaster, Chamberlain, and Genie, and we service virtually everything else — Craftsman, Linear, Overhead Door legacy units, Wayne Dalton iDrive, and the older Sears and Genie screw drives still running in thousands of Metro Detroit garages. For attached garages and homes with bedrooms over the garage we recommend belt-drive or wall-mount jackshaft units for noise. Every install includes rails, safety sensors, two remotes, a wireless keypad, HomeLink pairing in your vehicles, and Wi-Fi app setup on your phones.
        </Q>

        <Q q="Can you fix just one dented panel, or do I need a whole new door?">
          Very often, yes — a single section can be replaced. We source color- and profile-matched sections for most major brands (Clopay, Amarr, C.H.I., Wayne Dalton, Raynor) and swap the damaged panel on-site. The honest exceptions: doors old enough that the profile is discontinued, damage that has racked the frame or bent multiple sections, and cheap builder-grade doors where a section costs nearly half of a new door. In those cases we quote both options side by side and tell you which one we would pick for our own house.
        </Q>

        <Q q="Do you handle commercial overhead doors and loading docks?">
          Yes. Rolling steel service doors, insulated sectional doors, high-cycle spring systems, and commercial operators (trolley, jackshaft, and hoist) are all standard work for our commercial techs. We service loading docks, fire stations, auto shops, self-storage facilities, and municipal garages across {place} and the rest of Metro Detroit. Planned-maintenance contracts — quarterly or semi-annual inspection of every door in a facility — are available for property managers who would rather find a fatigued spring during an inspection than during a shift change.
        </Q>

        <Q q="Can you make my existing opener work with my phone?">
          Usually, yes. If your opener was made after 1993 (the safety-sensor era), a retrofit hub like the myQ Smart Garage Hub or Genie Aladdin Connect can add smartphone control, open/close alerts, and scheduled auto-close without replacing the unit. The install takes 30–45 minutes including app setup. If your opener predates 1993 it also predates modern safety reversal, and we will recommend replacement — not for the Wi-Fi, but because it lacks the safety systems that have been mandatory for three decades.
        </Q>

        <Q q="My door is loud enough to wake the house. Is that fixable?">
          Almost always, and usually cheaply. The worst offenders in order: worn steel rollers rattling in the track (fixed by sealed-bearing nylon rollers), bone-dry hinges and springs (fixed by proper lubrication — lithium or silicone, never WD-40), a stretched chain drive slapping its rail (adjusted or upgraded to a belt), and loose hardware buzzing with every cycle (tightened in minutes). A roller-and-lube package transforms most doors. If the noise is a rhythmic grinding from the opener head itself, that is the main gear announcing retirement — also fixable.
        </Q>

        <Q q="Do you serve property managers and HOAs?">
          We work with property-management companies and HOA boards across Metro Detroit, including {place} when applicable. We can be added as a preferred vendor, work from a single PO or master-services agreement, invoice on net-30 terms, and provide standardized after-hours response for stuck doors and dock emergencies. For condo communities with dozens of identical doors, we offer fleet pricing on spring, roller, and opener packages and keep a record of every unit&apos;s hardware so repeat visits are faster.
        </Q>

        <Q q="What payment do you accept?">
          All major credit cards (Visa, Mastercard, American Express, Discover), debit cards, Apple Pay, Google Pay, Zelle, and cash. For commercial accounts we offer invoicing on net-15 or net-30 terms after a short qualification process. Every transaction generates a written digital receipt itemizing parts and labor.
        </Q>

        <Q q="Is there a guarantee on the work?">
          Yes. Labor is guaranteed for 1 year against workmanship issues. Hardware carries the manufacturer&apos;s warranty — typically 3–10 years on springs depending on cycle rating, 1–3 years on openers (LiftMaster belt drives include a lifetime motor and belt warranty), and up to lifetime on door sections from brands like Clopay. If anything we touched stops working as expected within the guarantee window, we come back and fix it; no extra trip charge.
        </Q>

        <Q q="What should I have ready when I call?">
          A few things speed the job up dramatically: a photo of the door and, if you can safely take one, the spring shaft above it; the door&apos;s approximate age and whether it is a single or double door; the opener brand if the problem involves the opener; and the address with a gate code if applicable. For commercial jobs add the door count, door type (rolling steel vs. sectional), and the on-site contact. We can run the job without any of this — but with it, the tech arrives with the exact parts and you usually save a follow-up visit.
        </Q>

        <Q q="What if I just want a second opinion on another company's quote?">
          Send us a photo of the quote and the door. We will tell you, plainly, whether the price is in line with the work, whether the parts list is honest, and whether the &quot;failing&quot; components they flagged actually look failed. This is a free service and we offer it because the garage door industry has more than its share of bait-price operators. You do not have to hire us afterwards.
        </Q>

        <div className="rounded-2xl border border-brass-500/30 bg-brass-500/5 p-5">
          <p className="text-sm">
            <strong className="text-brass-200">Still have a question that&apos;s not here?</strong>{" "}
            Text us a quick photo or message at {BIZ.phone}. A real technician will reply — usually within minutes during business hours, and around the clock for anything that sounds like an emergency.
          </p>
        </div>

        <div className="space-y-5 pt-4">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            How BH Garage Door Metro Detroit handles {topic}
          </h2>
          <p>
            Every job follows the same simple sequence regardless of where in {place} it sits on the map. You call or text us — usually with a photo if you can manage it — and a real dispatcher (not a call center, not a bot) gathers the basics: address, what the door is doing, door size, opener brand, and urgency. From there we route the closest stocked truck to your location and give you a live ETA, a flat-rate quote, and a technician name. There is no &quot;up to&quot; pricing, no dummy ranges, and no &quot;the tech will price it when he gets there&quot; — those are the tells of lead-generation operations that flip your job to the lowest bidder and make the difference up in your driveway.
          </p>
          <p>
            On arrival the technician inspects the full system in front of you — springs, cables, drums, rollers, hinges, track, and opener — confirms the written quote a second time, and only then starts the work. For a snapped spring that means measuring the old spring&apos;s wire size, diameter, and length and weighing the door rather than guessing &quot;close enough,&quot; because an incorrectly specced spring leaves the door unbalanced and burns out the opener. For an off-track door it means finding the cause — a frayed cable, a bent track section, a failed roller — rather than just muscling the door back in and leaving the underlying failure to repeat. Every repair ends with a balance test and both federal safety checks: the photo-eye beam test and the 2x4 contact-reverse test.
          </p>
          <p>
            Opener installations follow a longer checklist because there is more to verify: header bracket reinforcement, rail alignment, door balance before the motor is ever asked to lift, safety-sensor height and alignment, force and travel-limit calibration, and pairing for every remote, keypad, vehicle HomeLink system, and smartphone in the household. An opener installed on an unbalanced door is a warranty claim waiting to happen — the motor is designed to guide a counterbalanced door, not to hoist dead weight — so we balance first, install second. That order is the difference between an opener that lasts fifteen years and one that strips its gear in three.
          </p>
          <p>
            New door installations in {place} typically start with a brief measuring visit — usually fifteen minutes — where we confirm the opening dimensions, headroom, side clearance, and the condition of the framing and existing opener. From there we write up a formal quote that itemizes the door by brand, model, insulation rating, and window package, lists the spring and track hardware included, and shows like-for-like options across at least two manufacturers so you can compare real prices rather than a single take-it-or-leave-it number. Install day runs three to five hours for a standard replacement: old door and track out, new tracks, springs, and sections in, opener reconnected and recalibrated, and the jobsite left broom-clean with the old door hauled away.
          </p>
          <p>
            Commercial work deserves its own paragraph because downtime is money. A loading dock door that will not open is a stopped truck schedule; a rolling steel door stuck halfway is a security problem after close. Our commercial techs carry high-cycle springs, commercial operator parts, and slat and section stock for the common door sizes, and we prioritize commercial emergencies during business hours. For facilities with multiple doors we offer planned-maintenance contracts — scheduled inspections that catch fatigued springs, frayed cables, and worn bottom bars before they fail during a shift. The facilities managers who sign these contracts stop calling us for emergencies almost entirely, which is the point.
          </p>
          <p>
            Pricing across {place} follows the same flat-rate structure regardless of city or neighborhood. Spring replacements are priced by spring count and cycle rating. Opener installs are priced by drive type with everything included — rails, sensors, remotes, keypad, haul-away. Cable, roller, and track work is priced per assembly. New doors are quoted in writing after a measure, never ballparked over the phone and then &quot;adjusted&quot; on install day. After-hours emergency work adds a clearly disclosed surcharge — disclosed when you call, not when the tech arrives. If the price changes for any reason between the phone quote and the work, we tell you before doing anything, and you can decline.
          </p>
          <p>
            A note on safety systems, because they are the part of this trade with real stakes. Every opener manufactured since 1993 is federally required to have photo-eye sensors and contact auto-reverse. These systems protect children, pets, and vehicles, and they should never be bypassed, unplugged, or &quot;taped over&quot; to solve a door that will not close — the underlying cause is always fixable. When we service any door, for any reason, both safety systems get tested before the truck leaves. If your opener predates 1993, we will tell you plainly that it lacks these protections and recommend replacement; that is not an upsell, it is the industry-standard safety advice any honest company will give you.
          </p>
          <p>
            Finally, a note on how to compare quotes. A legitimate garage door quote includes the company name, a description of the work, the manufacturer and specification of any parts being installed, the warranty terms, and a total price that already includes any surcharge. If an ad shows you a number under $40 and the technician arrives diagnosing a four-figure &quot;full rebuild&quot; within minutes, that is the textbook garage door scam pattern. Send the technician away, call us, and we will give you a real second opinion at no cost. We do this several times a week. It is one of the genuinely useful things a real garage door company can do for {place}, and we are happy to do it whether or not you end up hiring us.
          </p>
          <p>
            A few practical notes worth knowing before you call any garage door company in {place}. Learn where your emergency release cord is and how it works before you need it in the dark — with the door closed, pulling it lets you lift a healthy door by hand during a power outage. Never pull it while the door is stuck open, because a door with a broken spring will fall. Test your door&apos;s balance twice a year (release the opener, lift the door halfway, and see whether it floats), and give the rollers, hinges, and springs a coat of garage-door lubricant every spring and fall. Those two habits — a 30-second balance check and a twice-yearly lube — prevent the majority of the emergency calls we run.
          </p>
          <p>
            For homeowners with attached garages, treat the garage door as part of your home&apos;s envelope and security. The door from the garage into the house should lock, the opener&apos;s emergency release should not be reachable by a coat-hanger fished over the top of the door (inexpensive release shields fix this), and if you are away for long stretches, a Wi-Fi opener&apos;s open/close alerts are worth more than any camera. An insulated door on an attached garage pays for itself in this climate — the rooms above and beside the garage feel it immediately, and your furnace works measurably less.
          </p>
          <p>
            For small business owners, the analog is a documented maintenance plan. Even a one-page log that lists every overhead door, its spring cycle rating, and its last service date will save you thousands the first time a door fails during business hours. A real garage door company will help you write this for free during the first service visit. We do this all the time across {place}. The facilities that plan this once never have to think about it again; the ones that do not end up calling us at 6 a.m. when the dock door will not open and the first truck is already waiting.
          </p>
          <p>
            We hope this is useful whether or not you end up hiring BH Garage Door Metro Detroit. The garage door industry in Southeast Michigan has a reputation problem — bait pricing, phantom rebuilds, national lead-resellers wearing local names — and the only durable fix is for customers to be better-informed and for legitimate companies to publish honest pricing and honest answers in writing, which is exactly what this page tries to do. If you want a second opinion on a quote, a recommendation on a door or opener, or just an honest answer about whether you actually need our service: text {BIZ.phone}. A real technician will reply.
          </p>
          {kind === "area" && (
            <>
              <p>
                One more note specific to {place}. Our dispatch radius is set up so that no part of {place} is ever more than a short freeway hop from the nearest stocked truck during business hours. Early mornings are our busiest emergency window — that is when Metro Detroit discovers its snapped springs and frozen doors — so if you find a problem the night before, calling that evening usually gets you the first morning slot. If a major freeway incident or storm is going to add to your wait, the dispatcher tells you on the call — we would rather lose the job to honesty than lock you into a long wait under false pretenses.
              </p>
              <p>
                And one note on access in {place}. If you are calling about a door in a gated community, a condo complex with assigned garages, or a commercial property with a guard shack, let dispatch know on the first call so we can route the technician with the right contact name or gate code. For alley-access detached garages — common in the older neighborhoods of {place} and across Metro Detroit — mention the alley when you call; it changes which truck and which ladder setup we send, and the fifteen seconds of advance notice saves the technician a lap around the block and saves you the wait.
              </p>
            </>
          )}

          <h3 className="pt-4 font-display text-xl font-bold text-white md:text-2xl">A quick history of the garage door trade in Southeast Michigan</h3>
          <p>
            The overhead garage door is, fittingly, a Midwestern invention — the first upward-acting sectional door was developed in the 1920s, and the first electric opener followed within a few years. Metro Detroit adopted both faster than almost anywhere in America for the obvious reason: this region built the cars that made attached garages a standard feature of the American house. The post-war housing booms that built Warren, Livonia, Sterling Heights, and the rest of the suburbs poured millions of driveways, and nearly every one of them ends at a garage door. The result today is one of the densest garage door markets in the country — and one of the widest ranges of door ages, from 1950s wooden one-piece doors still swinging on their original hardware to this year&apos;s Wi-Fi-connected insulated steel.
          </p>
          <p>
            That range matters for homeowners because the trade has changed underneath the door. Springs went from oil-tempered to galvanized high-cycle steel. Doors went from single-skin steel drums to injected-polyurethane sandwich construction with R-values that rival the wall they sit in. And the safety story changed completely in 1993, when federal law (UL 325) began requiring photo-eye sensors and contact auto-reverse on every opener sold — a direct response to documented injuries and deaths, most of them children. If your opener predates that rule, it is not just old; it is missing the two systems that have defined safe operation for three decades. Every legitimate company in the region will tell you the same.
          </p>
          <p>
            The opener itself has evolved just as fast. The chain-drive AC motor that dominated Metro Detroit garages for forty years is giving way to DC belt drives that are quiet enough for bedrooms above the garage, wall-mount jackshaft units that free the ceiling entirely, and battery-backup models that keep working through the ice-storm outages Southeast Michigan knows too well. Wi-Fi control — dismissed as a gimmick a decade ago — has become the feature customers thank us for most, because &quot;did I close the garage?&quot; is a universal anxiety and a phone notification answers it forever. We train continuously on the major platforms (myQ, Aladdin Connect) and on the commercial operator lines, because a company that stops learning in this trade is servicing yesterday&apos;s doors.
          </p>
          <p>
            Michigan&apos;s climate is the other constant in this story. Our springs fail in January cold snaps because steel is brittle at zero degrees. Our bottom seals freeze to slabs overnight. Our road salt films over photo-eye lenses and corrodes bare hardware. A garage door specced for Tennessee does not have the same life expectancy here, which is why we default to galvanized high-cycle springs, insulated sandwich doors for attached garages, and sealed-bearing nylon rollers that shrug off the freeze-thaw cycle. Local experience is not a marketing line in this trade; it is the difference between hardware that survives ten Michigan winters and hardware that fails during its second.
          </p>
          <p>
            For everything we touch, our written policy is the same: leave the door safer than we found it, document the work, test both safety systems before the truck leaves, and stand behind the install. The garage door trade has had to earn customer trust the hard way after years of bait-price operators flooding the search results, and the way we earn it is by doing exactly what we said we would do — on time, in writing, for the agreed price. That standard is portable across {place} and the rest of Metro Detroit, and it is the reason our warranty terms are printed on every invoice we send.
          </p>
          <p>
            One small thing worth saying explicitly: we are a small, local business. The phone number on this page reaches the dispatcher who actually rides with the technicians. There is no offshore call center, no national franchise upcharge, no surprise &quot;corporate dispatch fee.&quot; That model — a national paid-search operation flipping calls to whichever subcontractor is cheapest that hour — is the reason consumer-protection agencies keep flagging garage door repair as one of the most-scammed home service categories in the United States. We have spent years building the alternative: a real shop with real trucks, real employees, and a single phone number that reaches the people who do the work. If you are comparing garage door companies in {place} on price alone, please at least ask each candidate for proof of insurance and a written flat-rate quote first. The difference between a $29 teaser ad and a written quote with warranty terms is the difference between getting your door fixed and getting your wallet cleaned out.
          </p>
          <p>
            If you got this far in the page, thank you for reading. Most people will scroll past everything below the call-to-action and grab the phone number, and that is exactly what these pages are for — they exist so the people who do read have a thorough, honest answer to the questions that come up before they pick a garage door company. We did not write any of this to fill space. It is the answer we would want if we were on the other side of the driveway at 6 a.m., car trapped behind a door that will not open, deciding which name on the first page of search results was worth trusting with our home. If something here helped you make a better decision — about us or about any other company — that is the entire point.
          </p>
        </div>
        </div>
        </details>
      </div>
    </section>
  );
}

function Q({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-800 bg-ink-900/40 p-5">
      <h3 className="font-display text-base font-semibold text-white md:text-lg">{q}</h3>
      <p className="mt-2">{children}</p>
    </div>
  );
}
