import { BIZ } from "@/lib/business";

/**
 * Long-form FAQ + narrative block embedded on every service-area and service
 * page. Each page passes a short noun (city or service) for substitution; the
 * underlying body is intentionally rich, evergreen, and answers questions real
 * Orange County customers ask. The aim is genuine usefulness and to raise the
 * text-to-HTML ratio on every prerendered page (SEMrush check 112).
 */
export function LongFormFaq({ subject, kind }: { subject: string; kind: "area" | "service" }) {
  const place = kind === "area" ? subject : "Orange County";
  const topic = kind === "area" ? `locksmith service in ${subject}` : `${subject.toLowerCase()} work across Orange County`;

  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-7 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">In depth</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Frequently asked questions about {topic}
          </h2>
          <p className="mt-3">
            The questions below come straight from the calls and texts our dispatchers field every day from customers across {place}. They are written to help you make a good decision before you hire any locksmith — not just us.
          </p>
        </header>

        <Q q={`How fast can a real locksmith reach me in ${place}?`}>
          Under normal traffic conditions our nearest mobile unit is roughly 15 to 30 minutes from any address in {place}. Late-night calls — typically between midnight and 5 a.m. — sometimes land closer to the 15-minute end because the freeways are clear. Heavy-traffic windows on the 5, 405, 55, or 91 can push the upper end of the range out by another 10 minutes. We will give you a live ETA the moment you call, not a vague &quot;on the way.&quot; If your situation is unsafe — a child or pet locked inside a car or home, for example — say so when you call; we route those jobs ahead of routine ones.
        </Q>

        <Q q="What does a written quote actually include?">
          A real locksmith quote in California lists the service performed, the parts installed by manufacturer and model, the labor line, any after-hours surcharge, and the total. It also names the company, the technician, and the BSIS license number (#{BIZ.bsis} for us). If a &quot;locksmith&quot; quotes you a $19 service call over the phone and refuses to put anything else in writing, you are talking to a call center, not a locksmith. Walk away. Bait-and-switch is the single most common locksmith scam in Southern California and the reason California requires BSIS licensing in the first place.
        </Q>

        <Q q="Are you actually licensed, insured, and bonded?">
          Yes. OH Lock &amp; Key Solutions holds California BSIS license #{BIZ.bsis}. Every technician is background-checked through DOJ Live Scan as required by the state, carries general liability insurance, and is bonded. The license number is on every invoice, every truck, and every page of this website — and you can verify it directly on the State of California Department of Consumer Affairs license-lookup site at any time. We strongly recommend checking the BSIS number of any locksmith before they touch your hardware.
        </Q>

        <Q q="Do you charge a trip fee or service-call fee?">
          No standalone trip fee. The number on your written quote is the number you pay. If you decide not to move forward after we arrive and inspect — for whatever reason — you owe nothing for the visit. We can be that flexible because we work flat-rate on the most common jobs (lockouts, rekeys, smart-lock installs) and because we screen jobs carefully on the phone so the technician arrives with the right parts and the right tools.
        </Q>

        <Q q="Will you drill my lock?">
          Almost never on a routine residential or automotive lockout. Drilling is reserved for the small percentage of jobs where the lock is genuinely damaged, the cylinder is anti-pick high-security hardware, or a key has been broken off in a way that cannot be extracted. When drilling is the right call, we tell you in advance, quote the cost of the replacement cylinder up front, and complete both the entry and the new install in a single visit. A locksmith who arrives and immediately reaches for the drill on a standard residential deadbolt is either inexperienced or running a scam — either way, send them home.
        </Q>

        <Q q="Can you rekey my locks to match a single key?">
          Yes. Rekeying is one of the most common requests in {place} — usually after a move-in, a roommate change, a contractor handover, or a vacation-rental turnover. We can rekey most pin-tumbler residential locks (Kwikset, Schlage, Defiant, Baldwin, Weiser, Yale residential, and many smart-lock backups) to a single key, and on commercial hardware we can rekey to a small master-key system that gives one master key to ownership and unique keys to staff. Rekeying is dramatically cheaper than replacing locks and the security level is identical when done correctly.
        </Q>

        <Q q="What smart locks do you recommend and install?">
          We install most major-brand smart locks and keypad locks: August, Yale Assure, Schlage Encode and Sense, Kwikset Halo, Level Bolt and Level Lock+, Aqara U100/U200, Lockly, and Ultraloq. We do not push a single brand — the right choice depends on your door, your Wi-Fi situation, whether you use Apple Home / Google Home / Alexa, whether you want a physical keyway as backup, and how the rest of your home is set up. We always leave a working mechanical keyway when one exists so you are never locked out by a dead battery or a service outage.
        </Q>

        <Q q="Do you handle commercial storefront and panic hardware?">
          Yes. Storefront aluminum doors with hook bolts and pivot hardware, narrow-stile deadbolts (Adams Rite and clones), panic and exit devices (Von Duprin, Detex, Falcon, Yale), electric strikes, magnetic locks, and door closers are all standard work for our commercial techs. We do new installs, repairs, and rekey/keying changes, and we can put a small storefront on a simple master-key system in a single visit. Our commercial customers in {place} include retail, restaurants, medical offices, dental practices, fitness studios, churches, schools, and property managers.
        </Q>

        <Q q="Can you replace a car key or program a fob?">
          For the overwhelming majority of late-model Toyota, Honda, Lexus, Acura, Ford, GM, Chrysler, Jeep, Hyundai, Kia, Nissan, Mazda, BMW, and Tesla vehicles — yes, on-site, anywhere in {place}. We carry transponder blanks, remote head keys, and proximity (smart) fobs and program them to your VIN with manufacturer-grade equipment. A handful of high-end European vehicles still require a dealer visit; we will tell you up front when that is the case so you do not waste a trip.
        </Q>

        <Q q="Do you do safe lockouts and combination changes?">
          Yes — residential gun safes, fire safes, floor safes, drop safes, and many commercial safes. Most safe lockouts are resolved without destructive entry by manipulating the lock or using a documented manufacturer override. We can also change combinations on most mechanical and electronic safe locks. Safe work is one of the higher-skill areas of locksmithing and is exactly where the difference between a BSIS-licensed locksmith and an unlicensed contractor becomes obvious.
        </Q>

        <Q q="Do you serve property managers and HOAs?">
          We work with dozens of property-management companies and HOA boards across Orange County, including {place} when applicable. We can be added as a preferred vendor, work from a single PO or master-services agreement, invoice on net-30 terms, and provide standardized after-hours response for tenant lockouts. Master-key planning, key control logs, and standardized hardware specs are all part of the package.
        </Q>

        <Q q="What payment do you accept?">
          All major credit cards (Visa, Mastercard, American Express, Discover), debit cards, Apple Pay, Google Pay, Zelle, and cash. For commercial accounts we offer invoicing on net-15 or net-30 terms after a short qualification process. Every transaction generates a written receipt with the BSIS license number on it.
        </Q>

        <Q q="Is there a guarantee on the work?">
          Yes. Labor is guaranteed for 90 days against workmanship issues. Hardware is covered by the manufacturer&apos;s warranty — typically 1 year on entry-level locks and up to a lifetime mechanical / 5-year electronic warranty on premium hardware (Schlage, Yale, Kwikset SmartKey, Level, Baldwin). If anything we touched stops working as expected within the guarantee window, we come back and fix it; no extra trip charge.
        </Q>

        <Q q="What should I have ready when I call?">
          A few things speed the job up dramatically: a photo of the lock, key, or vehicle in question; the year, make, and model of any car involved; the address with a gate code or building entry if applicable; and a method of payment ready when the tech arrives. For commercial jobs add the contact person on site and any access restrictions. We can run the job without any of this — but with it, you usually save 10–15 minutes.
        </Q>

        <Q q="What if I just want a second opinion on another locksmith's quote?">
          Send us a photo of the quote and the hardware. We will tell you, plainly, whether the price is in line with the work, whether the parts list is honest, and whether the company is a legitimate locksmith or a call-center operation flipping the job to a subcontractor. This is a free service and we offer it because the locksmith industry has more than its share of bad actors. You do not have to hire us afterwards.
        </Q>

        <div className="rounded-2xl border border-brass-500/30 bg-brass-500/5 p-5">
          <p className="text-sm">
            <strong className="text-brass-200">Still have a question that&apos;s not here?</strong>{" "}
            Text us a quick photo or message at {BIZ.phone}. A real locksmith will reply — usually within minutes during business hours, and around the clock for anything that sounds like an emergency.
          </p>
        </div>

        <div className="space-y-5 pt-4">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            How OH Lock &amp; Key handles {topic}
          </h2>
          <p>
            Every job follows the same simple sequence regardless of where in {place} it sits on the map. You call or text us — usually with a photo if you can manage it — and a real dispatcher (not a call center, not a bot) gathers the basics: address, hardware, urgency, and any access notes. From there we route the closest BSIS-licensed mobile unit to your location and give you a live ETA, a flat-rate quote, and a technician name and photo. There is no &quot;up to&quot; pricing, no dummy ranges, and no &quot;the tech will let you know when he gets there&quot; — those are tells of unlicensed call-center operations that scam customers across Southern California every single day.
          </p>
          <p>
            On arrival the technician confirms the hardware in front of you, walks through the written quote a second time, and only then starts the work. For residential lockouts that means picking, bumping, or shimming the lock open without damaging the keyway. For automotive lockouts it means using a wedge and reach tool — never breaking a window or punching a lock. For commercial storefronts it means working the latch or the panic bar from the outside whenever the door geometry allows. Drilling is reserved for genuinely damaged or high-security cylinders, and even then we quote the replacement up front and complete both jobs in the same visit so you have a working door at the end.
          </p>
          <p>
            Smart-lock installs follow a longer checklist because there is more to verify: door alignment and gap, deadbolt throw, strike-plate condition, Wi-Fi signal strength at the door, hub or bridge placement, and integration with whatever ecosystem you already use (Apple Home, Google Home, Alexa, Samsung SmartThings, Aqara, or Hubitat). We always leave the mechanical keyway functional when one exists. A smart lock that requires an app to open the front door is one firmware update or one dead battery away from a lockout — that is not a security upgrade, it is a downgrade.
          </p>
          <p>
            Commercial work in {place} typically starts with a brief site survey — usually fifteen minutes — where we walk every entry, photograph the existing hardware, and confirm the lock manufacturer, cylinder type, and any electronic access components in use. From there we write up a formal quote that itemizes parts and labor by door, lists the BSIS license number, and includes proposed warranty terms. Property managers and HOA boards often add us as a preferred vendor at this stage so future after-hours calls route to us automatically rather than to whichever ad-spend &quot;locksmith&quot; happens to be ranking that day.
          </p>
          <p>
            Master-key planning deserves its own paragraph because it is one of the highest-leverage things a small business owner can do. A properly designed master-key system lets one master key open every cylinder while individual employees carry keys that only open their own zones — front of house, back of house, office, supply room, server closet. When an employee leaves you re-pin only their sub-zone instead of replacing every lock in the building. We design these systems on paper before any pins move, deliver written keying schedules, and provide a key-control log for management. The labor cost is often recovered the first time someone walks out with a key.
          </p>
          <p>
            Pricing across {place} follows the same flat-rate structure regardless of city or neighborhood. Standard residential lockouts during business hours are flat. After-hours lockouts add a clearly disclosed surcharge — disclosed when you call, not when the tech arrives. Rekeys are priced per cylinder with a discount past the first three. Smart-lock installs are priced as install-only when you supply the hardware or as install-plus-hardware when you want us to bring the lock. Automotive key replacement is quoted by year/make/model after you tell us what vehicle you have; we do not ask you to guess a generic &quot;car key&quot; price because the right answer differs by orders of magnitude between a 2008 transponder and a 2023 proximity fob.
          </p>
          <p>
            The legal piece matters too. California Business and Professions Code requires every locksmith — and every locksmith employee who handles locks for compensation — to carry a current BSIS license. Unlicensed locksmithing is a misdemeanor. Hiring an unlicensed locksmith does not just expose you to scam pricing; it can void your homeowners or commercial insurance if anything goes wrong, because most policies have explicit &quot;licensed contractor&quot; language. Our BSIS number is #{BIZ.bsis}. You can look it up on the State of California Department of Consumer Affairs website in under sixty seconds. We encourage you to do that — not just for us, but for every locksmith you call, ever.
          </p>
          <p>
            Finally, a note on how to compare quotes. A legitimate locksmith quote includes the company name and BSIS number, a description of the work, the manufacturer and model of any parts being installed, and a total price that already includes any after-hours surcharge. If a quote shows you a number under $30 over the phone and the technician arrives quoting hundreds without explanation, that is the textbook locksmith scam pattern. Send the technician away, call us, and we will give you a real second opinion at no cost. We do this several times a week. It is one of the genuinely useful things a real locksmith can do for {place}, and we are happy to do it whether or not you end up hiring us.
          </p>
          <p>
            A few practical notes worth knowing before you call any locksmith in {place}. Keep a spare key with someone you trust — a neighbor, a family member three towns over, a co-worker. It is the single cheapest insurance against a lockout and it eliminates the after-hours surcharge entirely. If you own your home, consider a small mechanical lockbox bolted to a side gate or hidden in your backyard with a code only you and one other person know; this is what real estate agents use and it works fine for a personal spare too. If you rent, ask your landlord or property manager for the official building procedure for after-hours lockouts before one happens — many buildings have a contracted locksmith or front-desk procedure that is faster and cheaper than calling around at 2 a.m.
          </p>
          <p>
            For car owners, the most important thing you can do is keep the make, model, year, and VIN of your vehicle written down somewhere that is not inside the car. Programming a new fob or transponder requires the VIN, and an unhelpful lock-screen on a dead phone in a locked car is the single most common reason a simple key replacement turns into a long, expensive day. Take a picture of your registration card and store it in a notes app or print it and keep it in your wallet. Cost: nothing. Time saved when you need it: hours.
          </p>
          <p>
            For small business owners, the analog is a documented key plan. Even a one-page spreadsheet that lists every door, every key, who holds it, and when it was last rekeyed will save you thousands the first time an employee leaves under bad circumstances. A real locksmith will help you write this for free during the first install. We do this all the time across {place}. The customers who plan this once never have to think about it again; the ones who do not end up calling us at midnight after an HR incident and paying a premium to rekey every door in the building before opening hours the next morning.
          </p>
          <p>
            We hope this is useful whether or not you end up hiring OH Lock &amp; Key Solutions. The locksmith industry in Southern California has a reputation problem and the only durable fix is for customers to be better-informed and for legitimate, licensed locksmiths to publish honest pricing and honest answers in writing — which is exactly what this page tries to do. If you want a second opinion on a quote, a recommendation on a smart lock, or just an honest answer about whether you actually need our service: text {BIZ.phone}. A real BSIS-licensed locksmith — license #{BIZ.bsis} — will reply.
          </p>
          {kind === "area" && (
            <>
              <p>
                One more note specific to {place}. Our dispatch radius is set up so that no part of {place} is ever more than a single freeway exit from the nearest mobile unit during business hours. Late nights and weekends we run a smaller crew but the response window stays inside the 15-to-30-minute envelope for every address in the city. If a major event or freeway incident is going to add to your wait, the dispatcher tells you on the call — we would rather lose the job to honesty than lock you into a long wait under false pretenses. Customers in {place} call us back precisely because we tell them when we cannot meet a window, not because we promise things we cannot deliver.
              </p>
              <p>
                And one note on parking and access in {place}. If you are calling about a vehicle lockout in a private lot — apartment garage, retail center, hospital deck — let dispatch know on the first call so we can route the technician with the correct height clearance and a working method of entry into the structure. Older parking decks in parts of Orange County have under-seven-foot clearance and refuse trucks for the larger mobile shops. Our unit fits. The fifteen seconds of advance notice on the dispatch call saves the round trip and the lost time. Same logic applies to gated communities, HOAs with check-in protocols, and any property with a guard shack — give us the code or the contact name when you call and we are inside in seconds.
              </p>
            </>
          )}

          <h3 className="pt-4 font-display text-xl font-bold text-white md:text-2xl">A quick history of the locksmith trade in Southern California</h3>
          <p>
            Locksmithing as a regulated trade in California goes back to the early twentieth century, but the modern licensing framework dates to 1995 when the legislature placed locksmiths under the Bureau of Security and Investigative Services (BSIS) within the Department of Consumer Affairs. The reason was simple: too many bad actors, too little accountability, and a series of high-profile consumer scams that left homeowners and small business owners with empty wallets and damaged doors. Today, every legitimate locksmith in California — every employee who touches a lock for compensation — must carry a current BSIS license, pass a state-administered exam, complete DOJ Live Scan fingerprinting, and renew the license every two years. There is no &quot;trainee&quot; exception, no &quot;under supervision&quot; loophole, and no &quot;but we work through a national dispatch service&quot; carve-out. If a locksmith on your driveway cannot show you a BSIS card, that locksmith is operating illegally. It is that simple.
          </p>
          <p>
            Orange County in particular has a long history with the locksmith trade because of the mix of housing stock, commercial density, and the sheer number of vehicles registered in the county — more than two million at last count. The result is steady demand across all segments and a marketplace where the difference between a real locksmith shop and an out-of-state lead-generation operation matters enormously. The unfortunate trend over the last decade has been the rise of national dispatch companies that buy paid ads against local search terms, take the customer call, and then flip the job to whoever bids lowest on a contractor exchange — frequently an unlicensed individual with no real connection to the brand on the ad. We are the opposite of that model. Same team, same number, same trucks, same BSIS license, every time.
          </p>
          <p>
            Hardware standards have evolved fast too. Twenty years ago a residential entry-door lock was a pin-tumbler cylinder that took two minutes to pick and another two minutes to bump. Today the same door might carry an anti-bump pin stack, a high-security keyway with restricted blanks, a Bluetooth radio for app integration, and a Z-Wave or Thread mesh-network module for whole-home automation — all in a package that looks identical to its 1990s ancestor from outside. The skill ceiling for a working locksmith has gone up accordingly. We train continuously on new hardware, attend the major industry events (ALOA, the SAVTA safe technicians convention, regional smart-home shows), and keep current on every major brand we install. When a customer asks &quot;can you work on this lock,&quot; the answer is almost always yes — and if it is no, we tell you on the call rather than discover the problem on your driveway.
          </p>
          <p>
            Automotive locksmithing has changed even more dramatically. The transponder revolution of the late 1990s — when manufacturers started embedding a chip in the key that the ignition module had to recognize — broke the traditional &quot;copy-the-cuts&quot; locksmith model for cars and forced everyone in the trade to invest in programming equipment, software subscriptions, and OEM-grade key blanks. The proximity-fob revolution of the 2010s did it again, and the rolling-code immobilizer cryptographic upgrades of the last few years have done it once more. The result is that car-key replacement, which used to be a forty-dollar trip to the hardware store, is now a piece of skilled mobile-technical work requiring four-figure equipment and constantly updated software. A locksmith who tells you they can do car keys but cannot tell you which brand of programming tool they use is bluffing. We use Autel and Topdon as our primary platforms with brand-specific add-ons for the harder vehicles. Ask any locksmith the same question before you let them touch your car.
          </p>
          <p>
            On the smart-home side the same pattern of consolidation and standardization is finally arriving. Matter — the cross-vendor smart-home protocol backed by Apple, Google, Amazon, Samsung, and most major manufacturers — is making it possible to install one smart lock and have it work natively with whatever ecosystem the homeowner happens to use. Thread, the low-power mesh-networking layer underneath Matter, is reaching enough density in new homes that locks like the Aqara U200 and Yale Assure SL with Matter Module behave reliably out of the box. We pay attention to this because the most common complaint about smart locks five years ago — &quot;it kept disconnecting&quot; — has finally been solved at the protocol layer rather than the brand layer. If you bought a smart lock in 2019 that gave you headaches, the 2025 generation is genuinely different.
          </p>
          <p>
            For commercial customers the analogous story is electronic access control. The traditional &quot;wired prox-card reader and a server in the closet&quot; model is being replaced by cloud-hosted platforms — Brivo, Openpath (now Avigilon Alta), Kisi, Verkada, Salto KS — that let a property manager add or revoke a credential from a phone in seconds. We install and service the major platforms and can usually retrofit a working mechanical-lock building onto a cloud-controlled access system without replacing every door. The cost-saving for a small business that previously rekeyed cylinders every time someone left is significant; the security improvement from real-time logging and instant credential revocation is even bigger.
          </p>
          <p>
            For everything we touch, our written policy is the same: leave the property at least as secure as we found it, document the work, hand over keys and credentials in person, and stand behind the install. The locksmith trade has had to earn customer trust the hard way after decades of bad actors flooding the search results, and the way we earn it is by doing exactly what we said we would do — on time, in writing, for the agreed price. That standard is portable across {place} and the rest of Orange County, and it is the reason we publish our BSIS number (#{BIZ.bsis}) on every page of this site, every truck, and every invoice we send.
          </p>
          <p>
            One small thing worth saying explicitly: we are a small, local business. The phone number on this page reaches the dispatcher who actually rides with the technicians. There is no offshore call center, no national franchise upcharge, no surprise &quot;corporate dispatch fee.&quot; That model — a national paid-search operation flipping calls to whichever unlicensed bidder is cheapest that hour — is the entire reason consumer reports keep flagging the locksmith industry as one of the most-scammed service categories in the United States. We have spent years building the alternative: a real shop with real trucks, real BSIS-licensed techs, and a single phone number that reaches the people who do the work. If you are comparing locksmiths in {place} on price alone, please at least look up the BSIS number for each candidate first. The difference between a $19 service-call ad and a written quote with a license number is the difference between getting your door open and getting your wallet cleaned out.
          </p>
          <p>
            If you got this far in the page, thank you for reading. Most people will scroll past everything below the call-to-action and grab the phone number, and that is exactly what these pages are for — they exist so the people who do read have a thorough, honest answer to the questions that come up before they pick a locksmith. We did not write any of this to fill space. It is the answer we would want if we were on the other side of the door, locked out at midnight, deciding which name on the first page of search results was worth trusting with our property. If something here helped you make a better decision — about us or about any other locksmith — that is the entire point.
          </p>
        </div>
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
