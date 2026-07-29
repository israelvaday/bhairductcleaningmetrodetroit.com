/**
 * Third long-form content block, rendered only on the home page where the
 * surrounding HTML is heaviest. Different topic from LongFormFaq and
 * BuyersGuide so a scrolling reader sees fresh material on each block.
 */
export function DuctGlossary() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <details className="group space-y-5 text-sm text-ink-200 md:text-base">
          <summary className="cursor-pointer list-none rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-brass-500/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Glossary</p>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="font-display text-lg font-bold text-white md:text-xl">
                Air duct and HVAC terms, explained in plain language
              </span>
              <span
                aria-hidden
                className="mt-1 inline-block shrink-0 rounded-full border border-ink-700 px-3 py-0.5 text-xs font-medium text-ink-300 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </span>
            <span className="mt-2 block text-xs text-ink-400 group-open:hidden">
              Tap to expand a plain-language glossary of the terms duct cleaning techs actually use — negative pressure, trunk line, blower wheel, MERV rating, and more.
            </span>
          </summary>
          <div className="space-y-5 pt-7">
            <p className="text-ink-300">
              The duct cleaning trade has its own vocabulary and most of it never makes it onto the invoice in a form a homeowner can understand. Here is a short, opinionated glossary of the terms we use most often on the phone and on the truck. If you are calling around for a quote, knowing these terms will make every conversation shorter and every estimate easier to compare.
            </p>

        <p>
          <strong className="text-white">Supply ducts</strong> &mdash; the half of your duct system that delivers conditioned air <em>to</em> the rooms: warm air in winter, cool air in summer. Supplies terminate at the registers in your floors, walls, or ceilings, and they run under positive pressure whenever the blower is on. Because air is always pushing outward through them, supplies tend to stay somewhat cleaner than returns &mdash; which is why a quote that only covers &quot;the vents&quot; may be cleaning the cleaner half of your system and skipping the dirty half.
        </p>

        <p>
          <strong className="text-white">Return ducts</strong> &mdash; the other half: the ducts that pull air <em>from</em> the house back to the furnace to be filtered and reconditioned. Returns run under suction and inhale everything airborne in the living space &mdash; dust, pet hair, skin cells, carpet fiber &mdash; so they are consistently the dirtiest ductwork in any home. A real cleaning always includes the return side; a coupon cleaning almost never does. If you only remember one question from this glossary, ask whether the returns are included.
        </p>

        <p>
          <strong className="text-white">Trunk line</strong> &mdash; the large main duct, usually rectangular sheet metal running the length of the basement ceiling, that acts as the highway for the whole system. Every room&apos;s duct branches off the trunk. It is also where a negative-pressure vacuum connects during a proper cleaning, and where decades of debris settle by gravity. A crew that never touches your trunk line &mdash; never connects to it, never cuts an access opening in it &mdash; is not cleaning your duct system, whatever the invoice says.
        </p>

        <p>
          <strong className="text-white">Branch runs</strong> &mdash; the smaller ducts, round metal or flex, that split off the trunk line and carry air to each individual register. Branches are where agitation tools do their work during a cleaning: a whip or brush travels down each run from the register opening, driving debris back toward the trunk where the vacuum captures it. Long branch runs to far bedrooms are also the usual suspects when one room never gets comfortable.
        </p>

        <p>
          <strong className="text-white">Register vs. grille vs. diffuser</strong> &mdash; three words for the covers on your duct openings, and the distinction is practical. A <em>register</em> has an adjustable damper you can open and close; a <em>grille</em> is a fixed cover with no damper, standard on returns; a <em>diffuser</em> is the ceiling fitting that spreads air in a pattern, common in newer builds. Techs use the words interchangeably on the phone, but on an itemized quote the count of supplies and returns is what drives the price &mdash; so count your covers before you call.
        </p>

        <p>
          <strong className="text-white">Boot</strong> &mdash; the sheet-metal transition fitting that connects the end of a branch run to the register opening in your floor or wall. Boots are where debris, pet toys, construction screws, and the occasional LEGO collect, and floor boots in particular act as open trash bins for whatever gets kicked in. Boots are also a common leak point: an unsealed gap between the boot and the floor cut pulls dusty joist-cavity air into your airflow. Cheap to seal, worth asking about.
        </p>

        <p>
          <strong className="text-white">Plenum</strong> &mdash; the sheet-metal box attached directly to the furnace where air is collected and distributed: the <em>supply plenum</em> sits above the furnace and feeds the trunk, and the <em>return plenum</em> (or return drop) delivers incoming air to the filter and blower. Plenums are the crossroads of the system, they see every particle that moves through the house, and they are one of the first places a camera inspection looks to judge how dirty a system really is.
        </p>

        <p>
          <strong className="text-white">Air handler</strong> &mdash; the umbrella term for the indoor unit that moves the air: in most Metro Detroit homes that is the furnace itself, whose blower serves both heating and cooling. The air handler contains the blower wheel, the motor, and the control board, with the evaporator coil mounted alongside or above. When a duct cleaning quote says it includes &quot;the air handler,&quot; pin down what that means &mdash; a proper job opens the blower compartment and cleans it, rather than treating the furnace as a sealed box between two clean ducts.
        </p>

        <p>
          <strong className="text-white">Blower wheel</strong> &mdash; the squirrel-cage fan inside the air handler that actually moves every cubic foot of air in your house. Its dozens of small curved fins load up with fine dust, and a blower wheel caked with even a sixteenth of an inch of buildup can lose a fifth or more of its airflow while making the motor work harder and run hotter. Cleaning it is a component job &mdash; the wheel is accessed or pulled and washed &mdash; and it is one of the highest-value line items in HVAC cleaning, because you feel the airflow difference the same day.
        </p>

        <p>
          <strong className="text-white">Evaporator coil</strong> &mdash; the A-shaped refrigerant coil above the furnace that cools your air in summer. It runs cold and wet, which makes its densely packed fins a magnet for dust and, left long enough, a happy home for microbial growth &mdash; the source of that musty smell when the AC kicks on. A dirty coil also chokes airflow and can ice over into a solid block. Coil cleaning is a legitimate, separately priced service; just confirm the coil is being physically cleaned, not merely sprayed with deodorizer.
        </p>

        <p>
          <strong className="text-white">Heat exchanger</strong> &mdash; the sealed steel chambers inside the furnace where combustion happens: burner exhaust stays inside the exchanger while household air passes over the outside and picks up heat. The two air streams must never mix &mdash; a cracked heat exchanger can leak carbon monoxide into the airflow, which is a furnace-replacement conversation, not a cleaning one. Duct cleaners work around the exchanger, not inside it; a crew that claims to &quot;clean your heat exchanger&quot; as a line item deserves follow-up questions.
        </p>

        <p>
          <strong className="text-white">Flex duct</strong> &mdash; the wire-coil, plastic-and-insulation duct that looks like a giant dryer hose, common in newer builds, attics, and finished-basement retrofits. Flex works fine when stretched taut and properly supported, and poorly when kinked, crushed, or sagging. It also demands gentler cleaning: aggressive rotary brushes can tear the inner liner, so a competent crew switches to air-driven tools on flex runs. If your home has flex, ask the company how they clean it &mdash; the answer tells you whether they have thought about it.
        </p>

        <p>
          <strong className="text-white">Duct liner</strong> &mdash; fiberglass insulation bonded to the <em>inside</em> of some ducts, mostly for sound-deadening near the air handler and in commercial systems. Lined duct cannot be cleaned like bare metal: hard brushes shred the liner and send fibers into the airstream, so the ACR standard prescribes soft-bristle, non-aggressive methods for it. Liner that is wet, moldy, or deteriorating cannot be cleaned back to health at all &mdash; it gets replaced or the duct gets relined. A crew should identify liner before quoting, not discover it mid-job.
        </p>

        <p>
          <strong className="text-white">Negative pressure / source removal</strong> &mdash; the method that defines legitimate duct cleaning. A high-powered vacuum connects to the trunk line and puts the entire duct system under suction (negative pressure), so nothing escapes into the house; agitation tools then work through every branch driving debris toward the vacuum, which physically removes it from the system. That combination &mdash; agitate and extract &mdash; is source removal, and it is the only method NADCA recognizes. Everything else &mdash; fogging, spraying, vacuuming a few feet into each register &mdash; leaves the source in place.
        </p>

        <p>
          <strong className="text-white">HEPA filtration</strong> &mdash; High-Efficiency Particulate Air: a filter class that captures 99.97% of particles at 0.3 microns. On a duct job it matters most on portable vacuum units that exhaust inside your home &mdash; HEPA filtration means the fine dust pulled out of your ducts stays in the machine instead of recirculating into your living room. Truck-mounted units sidestep the issue by exhausting outdoors. Either is fine; a portable unit without HEPA is not.
        </p>

        <p>
          <strong className="text-white">Rotary brush</strong> &mdash; a spinning brush head on a flexible cable shaft, driven by a drill or dedicated motor, fed down each duct run to scrub the walls while the vacuum pulls the loosened debris away. Rotary brushes excel on bare sheet metal and on caked-on buildup, and a good crew carries multiple head sizes to match round branch runs and rectangular trunk. Their limitation is the reason crews carry air tools too: brushes are too aggressive for flex duct and lined duct.
        </p>

        <p>
          <strong className="text-white">Air whip</strong> &mdash; a compressed-air tool with several flexible rubber tentacles that thrash rapidly inside the duct, beating debris off the walls and driving it toward the vacuum. Whips shine exactly where brushes struggle &mdash; flex duct, lined duct, and lightweight debris like pet hair and drywall dust &mdash; because they agitate hard without abrading the surface. The sound of a whip working through a duct run is unmistakable; hearing it during your job is a good sign the crew is doing real agitation.
        </p>

        <p>
          <strong className="text-white">Air skipper</strong> &mdash; a compressed-air nozzle with rear-facing jets that propel it forward through the duct on its own, &quot;skipping&quot; along while blasting debris back toward the vacuum connection. Skippers are the tool of choice for long branch runs and tight turns that a brush shaft cannot negotiate. Real crews use brushes, whips, and skippers in combination, matching the tool to each run &mdash; which is why &quot;what tools do you run through the ducts?&quot; is such an effective screening question on the phone.
        </p>

        <p>
          <strong className="text-white">Access panel</strong> &mdash; the openings a crew cuts into the trunk line and plenum to connect the vacuum and feed agitation tools, since duct systems are not built with cleaning doors. The professional standard is to close every opening with a proper sheet-metal patch, a reusable access door, or a rated plug &mdash; sealed airtight. Duct tape over a raw hole is not a closure, and the state of the access points after the crew leaves is one of the easiest ways to judge the quality of the whole job.
        </p>

        <p>
          <strong className="text-white">MERV rating</strong> &mdash; Minimum Efficiency Reporting Value, the 1&ndash;20 scale for how well a filter captures particles. Cheap fiberglass pads are MERV 1&ndash;4 and mostly protect the equipment; MERV 8&ndash;11 is the practical sweet spot for most Metro Detroit homes; MERV 13 captures smoke and finer allergens but breathes harder. The catch: a filter more restrictive than your blower can handle raises static pressure and hurts airflow. Higher is not automatically better &mdash; matched to the system is better.
        </p>

        <p>
          <strong className="text-white">Static pressure</strong> &mdash; the resistance the blower pushes against to move air through the system, measured in inches of water column; think of it as the duct system&apos;s blood pressure. Dirty coils, clogged filters, crushed flex, and closed registers all raise it, and high static pressure means less airflow, more noise, and a motor working toward an early grave. It is also why closing registers in unused rooms &mdash; the classic homeowner &quot;efficiency&quot; move &mdash; usually backfires.
        </p>

        <p>
          <strong className="text-white">CFM / airflow</strong> &mdash; cubic feet per minute, the measure of how much air the system actually moves. A typical residential furnace is designed for roughly 400 CFM per ton of cooling, and everything in this glossary &mdash; duct sizing, filter choice, coil condition, blower cleanliness &mdash; ultimately cashes out in CFM. When a room is always stuffy or cold, the question is almost never &quot;is the thermostat broken&quot; and almost always &quot;where did the CFM go.&quot;
        </p>

        <p>
          <strong className="text-white">Anemometer</strong> &mdash; the handheld instrument that measures air velocity at a register, from which airflow is calculated. It turns &quot;the airflow seems better&quot; into a before-and-after number, which is why quality-minded crews carry one and take readings at problem registers before and after cleaning. You do not need to know how to use one &mdash; you just want to hire the kind of company that does.
        </p>

        <p>
          <strong className="text-white">Antimicrobial fogging</strong> &mdash; applying an EPA-registered antimicrobial as a mist through the duct system to treat surfaces after microbial growth has been physically removed. Done right, it is a finishing step with a specific product, a registration number you can look up, and a label that permits use in HVAC systems. Done wrong, it is the whole service &mdash; fog sprayed over dirt as a substitute for cleaning &mdash; and that version is the single most common upsell scam in this industry. Fogging comes <em>after</em> source removal or it is theater.
        </p>

        <p>
          <strong className="text-white">Puff-back</strong> &mdash; a misfire in an oil (or occasionally gas) furnace that blasts soot through the duct system and out every register, coating walls, ceilings, and furniture in oily black film. Puff-backs are one of the unambiguous cases where full duct cleaning is not optional &mdash; the ducts are loaded with soot that will keep resurfacing until it is physically removed &mdash; and the event is typically covered by homeowner&apos;s insurance. If it happens, document everything before cleanup starts.
        </p>

        <p>
          <strong className="text-white">Duct sealing / mastic / foil tape</strong> &mdash; closing the leaks where ducts spill air into basements, walls, and attics; a typical older home loses 20&ndash;30% of its conditioned air this way. <em>Mastic</em> is the paint-on sealant that hardens into a permanent seal, and UL-181 <em>foil tape</em> is the rated tape for joints and seams. The cloth &quot;duct tape&quot; in your junk drawer is, famously, the one thing you should never use on ducts &mdash; its adhesive dries out and fails in a couple of seasons. Sealing pairs naturally with cleaning, since access is already open.
        </p>

        <p>
          <strong className="text-white">Dryer vent termination hood</strong> &mdash; the exterior fitting where your dryer duct exits the house, with a flap or louvers that open under dryer airflow and close against weather and pests. A lint-caked hood whose flap no longer swings freely chokes the whole vent run, and in Michigan a stuck-open flap is a standing invitation to birds and mice come fall. Walk outside while your dryer runs: if you cannot feel strong, warm airflow at the hood, the run needs cleaning.
        </p>

        <p>
          <strong className="text-white">Booster fan</strong> &mdash; an inline fan added to a duct run to push air farther than the blower alone can manage &mdash; on the supply side for a far room that never gets comfortable, or on a long dryer vent run (generally anything much past 25 equivalent feet) to keep lint moving. The honest caveat: a booster is sometimes a patch over an undersized or leaky duct, and a good company checks for the underlying problem before selling you a fan bolted on top of it.
        </p>

        <p>
          <strong className="text-white">Lint trap vs. dryer vent</strong> &mdash; the distinction behind most dryer-fire complacency. The lint screen you clean before every load catches maybe 60&ndash;75% of the lint; the rest travels into the vent duct behind the machine and builds up along the full run to the termination hood, where you never see it. &quot;I clean the lint trap every time&quot; and &quot;my dryer vent is clean&quot; are two different claims. The vent run is the one that causes fires, and it is an annual professional cleaning item, typically $120&ndash;$200 in Metro Detroit.
        </p>

        <p>
          <strong className="text-white">NADCA ACR standard</strong> &mdash; the industry specification, published by the National Air Duct Cleaners Association, that defines what a real duct cleaning includes: every supply, every return, the trunks and plenums, and the HVAC components, cleaned by source removal under negative pressure, with the result verifiable by inspection. It is the document that separates duct cleaning from duct dusting. You do not need to read it &mdash; you just need to ask a company whether they clean to it, and listen to whether the answer sounds like recognition or improvisation.
        </p>

        <p>
          <strong className="text-white">IAQ</strong> &mdash; indoor air quality, the umbrella term for everything you breathe inside: dust, pollen, pet dander, humidity, VOCs, combustion byproducts. Duct cleaning is one honest piece of the IAQ picture &mdash; it removes the debris load the system recirculates &mdash; alongside filtration, humidity control, and ventilation. Be wary of anyone selling duct cleaning as an IAQ cure-all, and equally wary of gadget-heavy &quot;IAQ packages&quot; sold by fog and flashlight. Clean system, good filter, sane humidity: that is most of the battle.
        </p>

        <p className="text-ink-300">
          That is the vocabulary that covers ninety-five percent of the conversations we have with Metro Detroit homeowners. If a technician in your basement uses a term that is not on this list and cannot explain it in plain language when you ask &mdash; ask harder. Good techs love explaining this stuff. It is half the reason we wrote this page.
        </p>
          </div>
        </details>
      </div>
    </section>
  );
}
