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
  const topic = kind === "area" ? `air duct cleaning in ${subject}` : `${subject.toLowerCase()} work across Metro Detroit`;

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
              Tap to read the full guide — pricing, the cleaning process, common questions, and how we work in {place}.
            </span>
          </summary>
          <div className="space-y-7 pt-7">
            <p>
              The questions below come straight from the calls and texts our dispatchers field every day from customers across {place}. They are written to help you make a good decision before you hire any air duct cleaning company — not just us.
            </p>

        <Q q={`How fast can a duct cleaning crew reach me in ${place}?`}>
          Scheduled cleanings in {place} are usually available within a day or two, and we hold same-day slots Sunday through Thursday for urgent calls — furnace puff-backs, post-fire smoke odor, flood-contaminated ductwork, and dryer vents so blocked the machine overheats. Heavy-traffic windows on I-75, I-696, M-59, or the Lodge can push an ETA out, and we tell you that on the phone rather than leaving you guessing. We give you a real arrival window when you book, not a vague &quot;sometime this week.&quot; If your situation involves active smoke odor, sewage water near ductwork, or a dryer that is shutting down on its thermal fuse, say so when you call; we route those jobs ahead of routine ones.
        </Q>

        <Q q="What does a written duct cleaning quote actually include?">
          A real air duct cleaning quote in Michigan lists the scope in plain terms: how many furnace systems, whether supply and return sides are both included, whether the main trunk lines, blower wheel, and evaporator coil are covered, any add-ons like dryer vent cleaning or sanitizing, and the flat total. It also names the company and the technician. If a company quotes you &quot;$99 whole house&quot; over the phone and refuses to put a scope in writing, you are talking to a bait operation, not a duct cleaning company. Walk away. Bait-and-switch is the single most common duct cleaning scam in Southeast Michigan, and the pattern is always the same: a rock-bottom teaser price, followed by a frightening &quot;mold&quot; diagnosis and a four-figure upsell in your basement.
        </Q>

        <Q q="Are you actually licensed and insured?">
          Yes. BH Air Duct Cleaning Metro Detroit is {BIZ.bsis} for residential and commercial air duct work in Michigan. Every technician is background-checked, on our payroll — no subcontractors — and covered by our general liability and workers&apos; compensation insurance. We provide a certificate of insurance on request, which matters for commercial clients, property managers, and any homeowner whose insurer asks who performed restoration work after a fire or flood. We strongly recommend requesting proof of insurance from any duct cleaning company before they connect equipment to your furnace; the legitimate ones will not hesitate.
        </Q>

        <Q q="Do you charge a trip fee or inspection fee?">
          A service and inspection call is about $99, and it is credited toward the job if you go ahead with the work. It covers the drive plus a camera inspection of your ductwork, a look at the blower wheel and evaporator coil, and a written flat-rate quote for exactly what your system needs. If you decline the quote after we arrive and inspect, you owe only the inspection fee — never a surprise labor charge. We can be this transparent because we screen jobs carefully on the phone, so the crew arrives knowing the furnace count, the home&apos;s approximate size, and what problem you are trying to solve.
        </Q>

        <Q q="What method do you use — and why does the method matter?">
          Negative-pressure source removal, the method NADCA (the National Air Duct Cleaners Association) sets as the industry standard. We connect a high-powered vacuum to your main trunk line near the furnace, put the entire duct system under suction, and then work through every supply and return run with compressed-air whips and rotating brushes. Everything we knock loose travels toward the vacuum, not into your living room. The method matters because the alternative — a shop-vac held up to each register, or compressed air blown into vents with no collection — either cleans nothing or redistributes the dust through your house. If a company cannot describe its vacuum and where it connects, it does not have one.
        </Q>

        <Q q="Is the '$99 whole house special' really a scam?">
          Almost always, and here is the honest math. A proper source-removal cleaning takes a two-person crew, a truck-mounted or gas-powered vacuum, and two to four hours on site. No business can deliver that for $99 and survive. The ads exist to get a crew into your basement, where the play is a thirty-second &quot;inspection,&quot; a flashlight pointed at ordinary dust, the word &quot;mold&quot; said gravely, and a $1,500–$3,000 rescue package. Consumer-protection agencies have flagged this exact pattern for years. Our whole-home cleanings run $350–$600 for a single-furnace home because that is what the work actually costs — and we publish that range instead of hiding it behind a teaser.
        </Q>

        <Q q="Do you clean the furnace blower and AC coil too?">
          Yes, and for many systems it is the most valuable part of the job. The blower wheel and evaporator coil are where airflow is actually won or lost — a blower wheel caked with dust moves dramatically less air, and a matted coil forces the system to run longer and hotter for the same comfort. Furnace and coil cleaning covers the blower wheel, the blower compartment, and the evaporator coil. If your complaint is weak airflow, rooms that never warm up, or a furnace that runs constantly, cleaning the ducts without cleaning the blower and coil solves half the problem.
        </Q>

        <Q q="How often should ducts and dryer vents be cleaned?">
          For most {place} homes, duct cleaning every 3–5 years is a sensible cadence — sooner after renovations, pest or water issues, when moving into a home with unknown history, or with multiple shedding pets. Dryer vents are different: once a year for most households, and every 6–9 months for heavy users and homes with long vent runs. In between duct cleanings, good filtration does most of the work, and we will recommend the right filter for your system rather than the most expensive one on the shelf.
        </Q>

        <Q q="Do you handle commercial buildings and multi-unit properties?">
          Yes. Offices, retail spaces, restaurants, medical and dental suites, daycare centers, gyms, and multi-unit residential buildings are all standard work for our commercial crews. We clean rooftop-unit supply and return systems, long horizontal trunk runs above drop ceilings, and shared dryer vent stacks in condo buildings across {place} and the rest of Metro Detroit. We work after hours where business operations require it, and planned-maintenance agreements — scheduled cleanings and inspections on a fixed cadence — are available for property managers who would rather find a problem during an inspection than during a tenant complaint.
        </Q>

        <Q q="Will duct cleaning fix my allergies or the dust in my house?">
          Honest answer: it helps when the ducts are genuinely part of the problem, and we can show you whether they are. If registers blow visible dust, if surfaces film over days after cleaning, or if the system carries renovation debris, pet dander, or pest material, removing that reservoir at the source makes a real difference. What no honest company will promise is that duct cleaning cures allergies or asthma — indoor air quality also depends on filtration, humidity, and what is happening in the living space. We pair every cleaning with a filter recommendation, because the filter is what keeps the system clean after we leave.
        </Q>

        <Q q="Someone told me I have mold in my ducts. Should I believe them?">
          Be skeptical, especially if the diagnosis took thirty seconds during a discount visit. Genuine microbial growth in ductwork happens — usually after water intrusion or sustained condensation — but it is far rarer than scare-tactic salesmen claim, and most of what gets called &quot;mold&quot; on the spot is ordinary dust. Our approach: we run a camera through your actual ducts and show you the footage. If growth is genuinely present, we physically clean it at the source and then apply an EPA-registered antimicrobial — sanitizer is applied only after physical cleaning, because fogging chemicals over dirt accomplishes nothing.
        </Q>

        <Q q="Do you serve property managers and HOAs?">
          We work with property-management companies and HOA boards across Metro Detroit, including {place} when applicable. We can be added as a preferred vendor, work from a single PO or master-services agreement, invoice on net-30 terms, and provide standardized scheduling for unit turnovers and annual dryer vent programs. For condo communities — where long shared dryer vent runs are a documented fire risk — we offer fleet pricing on building-wide vent cleaning and keep a record of every unit&apos;s vent routing so repeat visits are faster.
        </Q>

        <Q q="What payment do you accept?">
          All major credit cards (Visa, Mastercard, American Express, Discover), debit cards, Apple Pay, Google Pay, and cash. For commercial accounts we offer invoicing on net-15 or net-30 terms after a short qualification process. Every transaction generates a written digital receipt itemizing the work performed — useful for landlord records, home-sale disclosures, and insurance documentation after restoration jobs.
        </Q>

        <Q q="Is there a guarantee on the work?">
          Yes. Every cleaning comes with before-and-after photo or camera documentation of your actual ductwork, and a workmanship guarantee: if we missed a section, we come back and make it right at no charge. Dryer vent cleanings include an airflow check at the exterior termination so you can see the vent is genuinely clear before the crew leaves. If anything we touched is not performing as expected within the guarantee window, we return and fix it — no extra trip charge.
        </Q>

        <Q q="What should I have ready when I call?">
          A few things speed the job up dramatically: how many furnaces or air handlers the home has, the approximate square footage, whether the laundry is on an upper floor or in a condo (that changes the dryer vent equipment we bring), and anything specific driving the call — renovation dust, a smoke event, pets, allergies, or a musty smell. A photo of the furnace area helps too. We can run the job without any of this — but with it, the crew arrives with the right setup and you usually save time on site.
        </Q>

        <Q q="What if I just want a second opinion on another company's quote?">
          Send us a photo of the quote and, if you have them, the photos the other company showed you. We will tell you, plainly, whether the price is in line with the scope, whether the &quot;mold&quot; they found looks like mold or looks like dust, and whether the add-ons they stacked on are things your system plausibly needs. This is a free service and we offer it because the duct cleaning industry has more than its share of bait-price operators. You do not have to hire us afterwards.
        </Q>

        <div className="rounded-2xl border border-brass-500/30 bg-brass-500/5 p-5">
          <p className="text-sm">
            <strong className="text-brass-200">Still have a question that&apos;s not here?</strong>{" "}
            Text us a quick photo or message at {BIZ.phone}. A real technician will reply — usually within minutes during business hours, and around the clock for anything that sounds urgent.
          </p>
        </div>

        <div className="space-y-5 pt-4">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            How BH Air Duct Cleaning Metro Detroit handles {topic}
          </h2>
          <p>
            Every job follows the same simple sequence regardless of where in {place} it sits on the map. You call or text us — usually with a photo of the furnace area if you can manage it — and a real dispatcher (not a call center, not a bot) gathers the basics: address, how many furnace systems, approximate home size, what problem you are trying to solve, and urgency. From there we schedule a crew, give you a real arrival window, a flat-rate quote, and a technician name. There is no &quot;up to&quot; pricing, no dummy ranges, and no &quot;the tech will price it when he gets there&quot; — those are the tells of lead-generation operations that flip your job to the lowest bidder and make the difference up in your basement.
          </p>
          <p>
            On arrival the crew walks the system with you first — furnace, supply and return trunks, register count, and the dryer vent run if you booked that too — and confirms the written quote a second time before any equipment comes off the truck. Then the vacuum connects to the main trunk near the furnace and the whole system goes under negative pressure. Every supply run and every return run gets agitated with compressed-air whips and rotating brushes, working from the registers back toward the vacuum so dislodged debris travels into the collection system, not into your rooms. Registers come off, get wiped down, and go back on. The job ends with camera or photo documentation of the trunk lines so you can see — not take on faith — what changed.
          </p>
          <p>
            Furnace and coil cleaning follows a longer checklist because it touches the equipment itself: blower assembly access, careful cleaning of the blower wheel (where caked dust measurably cuts airflow), the blower compartment, and the evaporator coil above the furnace. A duct system feeding a filthy blower is like a clean straw attached to a clogged pump — which is why, when a customer&apos;s complaint is weak airflow or rooms that never warm up, we quote the blower and coil alongside the ducts rather than selling half a fix. Sanitizing, when a job calls for it, is always the last step and only after physical cleaning: an EPA-registered antimicrobial applied to clean surfaces, never fogged over dirt as a substitute for actual work.
          </p>
          <p>
            Dryer vent work in {place} deserves its own explanation because the stakes are different — this is fire prevention, not just efficiency. The lint screen inside your dryer catches only a fraction of the lint; the rest accumulates in the vent duct between the machine and the outside wall or roof. We clean the full run with rotary brushes sized to the duct, verify airflow at the exterior termination, and check the cap and damper for bird nests and lint mats. Long runs — second-floor laundry rooms and condos where the vent snakes 20–40 feet through the structure — are exactly where restrictions build fastest and where a home brush kit cannot reach. If we find crushed foil transition duct or the old white vinyl (a genuine fire hazard), we tell you and can replace it with the correct rigid metal.
          </p>
          <p>
            Commercial work deserves its own paragraph because downtime and liability are money. A restaurant with a failing makeup-air balance, a medical suite that needs documented cleaning, a daycare with dust complaints, or a condo association staring at a building full of twenty-year-old shared dryer stacks — these are scheduling problems as much as cleaning problems, and we work after hours where operations require it. For facilities and multi-unit buildings we offer planned-maintenance agreements: scheduled cleanings and camera inspections on a fixed cadence, with per-unit records so every visit starts where the last one ended. The property managers who set these up stop fielding tenant air-quality complaints almost entirely, which is the point.
          </p>
          <p>
            Pricing across {place} follows the same flat-rate structure regardless of city or neighborhood. Whole-home duct cleaning for a single-furnace home runs $350–$600 depending on size and vent count; a second furnace or system adds $150–$250. Dryer vent cleaning is $120–$200 standalone and discounted when bundled. Sanitizing adds $75–$150 when the job genuinely calls for it. The ~$99 inspection call is credited toward any work you book. Every quote is flat-rate and in writing before work starts. If the scope changes for any reason between the phone quote and the work — a second furnace nobody mentioned, a crushed duct that needs repair — we tell you before doing anything, and you can decline.
          </p>
          <p>
            A note on the &quot;$99 whole house&quot; ads, because they are the part of this trade with real stakes for your wallet. No legitimate company can put a two-person crew and a negative-pressure vacuum in your home for three hours at that price. The teaser exists to get a salesman into your basement, where ordinary dust becomes &quot;toxic mold&quot; and the $99 becomes $1,500 under pressure. The Federal Trade Commission and consumer-protection agencies have documented this pattern for years. Our advice is simple whether or not you hire us: get the scope in writing, ask what vacuum they use and where it connects, ask to see before-and-after footage of your own ducts, and treat any on-the-spot mold diagnosis delivered without lab work or photos as the sales tactic it almost always is.
          </p>
          <p>
            Finally, a note on how to compare quotes. A legitimate duct cleaning quote includes the company name, the number of systems covered, whether supply and return sides are both included, whether the blower and coil are in scope, the warranty terms, and a flat total. If an ad shows you a number under $100 for a whole house and the technician starts diagnosing contamination within minutes of arriving, that is the textbook duct cleaning scam pattern. Send the crew away, call us, and we will give you a real second opinion at no cost. We do this several times a week. It is one of the genuinely useful things a real duct cleaning company can do for {place}, and we are happy to do it whether or not you end up hiring us.
          </p>
          <p>
            A few practical notes worth knowing before you call any duct cleaning company in {place}. Check your furnace filter monthly during the heating season and change it on schedule — a good filter is the single cheapest thing keeping your ducts clean between professional cleanings. Watch your dryer: if loads start taking more than one cycle, stop running it unattended and get the vent cleaned, because long dry times are the earliest warning of a lint restriction. And after any renovation involving drywall or sanding, plan on a duct cleaning before you judge the dust situation — construction silica settles into ductwork and recirculates for months. Those three habits prevent the majority of the urgent calls we run.
          </p>
          <p>
            For homeowners, treat the duct system as part of your home&apos;s health envelope. Keep supply registers unblocked by rugs and furniture, keep basement return runs sealed at the joints (leaky returns pull basement air — and basement smells — into your living space), and if anyone in the house has allergies or asthma, invest in the best filter your blower can handle before investing in anything else. In this climate, where the furnace runs six-plus months a year, small duct problems show up on your furniture, your sleep, and your gas bill faster than almost anywhere in the country.
          </p>
          <p>
            For small business owners, the analog is a documented maintenance plan. Even a one-page log that lists each rooftop unit or furnace, its filter size and change schedule, and the last duct and coil cleaning date will save you real money the first time an air-quality complaint or an overheating unit lands on your desk. A real duct cleaning company will help you write this for free during the first service visit. We do this all the time across {place}. The facilities that plan this once never have to think about it again; the ones that do not end up calling us the week a tenant, an inspector, or an insurance adjuster starts asking questions.
          </p>
          {kind === "area" && (
            <>
              <p>
                One more note specific to {place}. Our scheduling is set up so that no part of {place} is ever more than a short freeway hop from an available crew during business hours. Fall and early winter are our busiest season — that is when Metro Detroit fires up its furnaces and discovers the summer&apos;s dust, the musty smell, and the dryer vent that got slower all year — so if you are planning a routine cleaning, booking in late summer usually gets you the pick of the schedule. If weather or a freeway incident is going to add to your wait, the dispatcher tells you on the call — we would rather lose the job to honesty than lock you into a long wait under false pretenses.
              </p>
              <p>
                And one note on access in {place}. If you are calling about a condo, an apartment, or a commercial property with a management office or a guard desk, let dispatch know on the first call so we can route the crew with the right contact name or access code. For homes where the furnace sits in a tight Michigan basement or a crawlspace — common in the older neighborhoods of {place} and across Metro Detroit — mention it when you call; it changes which vacuum setup and hose lengths we send, and the fifteen seconds of advance notice saves the crew a trip back to the shop and saves you the wait.
              </p>
            </>
          )}

          <h3 className="pt-4 font-display text-xl font-bold text-white md:text-2xl">A quick history of forced-air heating in Southeast Michigan</h3>
          <p>
            Metro Detroit is, in a real sense, forced-air country. The post-war housing booms that built Warren, Livonia, Sterling Heights, and the rest of the suburbs installed gas forced-air furnaces and sheet-metal ductwork as the default in nearly every house, decades before much of the country converted from boilers and radiators. The result today is one of the densest concentrations of ducted homes in America — and one of the widest ranges of duct ages, from 1950s galvanized trunk lines still carrying their original construction dust to this year&apos;s sealed and insulated flex runs. When we open up a duct system in an older Detroit or Dearborn neighborhood, we are sometimes the first people to see inside it in sixty years.
          </p>
          <p>
            That range matters for homeowners because the trade has changed underneath the ductwork. Filtration went from loose fiberglass pads that stopped almost nothing to pleated media and electronic air cleaners that genuinely protect the system. Duct sealing went from an afterthought to a measured science, because leaky return runs in basements and crawlspaces quietly pull unconditioned air — and everything in it — into the airstream. And the cleaning industry itself professionalized: NADCA, the National Air Duct Cleaners Association, published the ACR standard that defines what a real cleaning is — source removal under negative pressure, the entire system rather than the visible vents, verified results. If a company cannot tell you what standard it cleans to, it is telling you something.
          </p>
          <p>
            The dryer vent story has evolved just as fast, and in the wrong direction for safety. As laundry rooms migrated from basements (with a three-foot vent through the rim joist) to second floors and interior condo walls, vent runs stretched to twenty, thirty, forty feet with multiple elbows — every foot and every bend a place for lint to settle. U.S. fire departments respond to thousands of dryer fires a year, and failure to clean is the leading factor. The fix is not exotic: annual cleaning with proper rotary equipment, rigid metal duct instead of foil or vinyl, and an exterior termination that actually opens. It is the least glamorous work we do and arguably the most important.
          </p>
          <p>
            Michigan&apos;s climate is the other constant in this story. Our heating season runs six-plus months, so the blower cycles household dust through the ducts far longer each year than in milder states. Our humid summers condense moisture inside cool basement ductwork, which is where genuine microbial problems start. Our springs fill the air with pollen that a marginal filter passes straight into the system, and our older housing stock — Detroit, Dearborn, the Grosse Pointes, Ferndale — carries decades of accumulated debris in original ductwork. A cleaning cadence that makes sense in Arizona does not transfer here, which is why we recommend every 3–5 years for ducts and annually for dryer vents, adjusted for pets, allergies, renovations, and what the camera actually shows.
          </p>
          <p>
            For everything we touch, our written policy is the same: clean at the source, document the work with before-and-after footage, apply sanitizer only after physical cleaning and only when the job calls for it, and stand behind the result. The duct cleaning trade has had to earn customer trust the hard way after years of $99 bait operators flooding the search results, and the way we earn it is by doing exactly what we said we would do — on time, in writing, for the agreed price. That standard is portable across {place} and the rest of Metro Detroit, and it is the reason our guarantee terms are printed on every invoice we send.
          </p>
          <p>
            One small thing worth saying explicitly: we are a small, local business. The phone number on this page reaches the dispatcher who actually rides with the crews. There is no offshore call center, no national franchise upcharge, no surprise &quot;corporate dispatch fee.&quot; That model — a national paid-search operation flipping calls to whichever subcontractor is cheapest that hour — is the reason consumer-protection agencies keep flagging air duct cleaning as one of the most-scammed home service categories in the United States. We have spent years building the alternative: a real shop with real equipment, real employees, and a single phone number that reaches the people who do the work. If you are comparing duct cleaning companies in {place} on price alone, please at least ask each candidate for proof of insurance, the standard they clean to, and a written flat-rate scope first. The difference between a $99 teaser ad and a written quote with a defined scope is the difference between getting your ducts cleaned and getting your wallet cleaned out.
          </p>
          <p>
            If you got this far in the page, thank you for reading. Most people will scroll past everything below the call-to-action and grab the phone number, and that is exactly what these pages are for — they exist so the people who do read have a thorough, honest answer to the questions that come up before they pick an air duct cleaning company. We did not write any of this to fill space. It is the answer we would want if we were on the other side of the basement stairs, staring at a stranger&apos;s flashlight pointed at our own ductwork, deciding which name on the first page of search results was worth trusting with our home. If something here helped you make a better decision — about us or about any other company — that is the entire point.
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
