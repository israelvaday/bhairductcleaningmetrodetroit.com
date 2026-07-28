/**
 * Third long-form content block, rendered only on the home page where the
 * surrounding HTML is heaviest. Different topic from LongFormFaq and
 * BuyersGuide so a scrolling reader sees fresh material on each block.
 */
export function GarageGlossary() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <details className="group space-y-5 text-sm text-ink-200 md:text-base">
          <summary className="cursor-pointer list-none rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-brass-500/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Glossary</p>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="font-display text-lg font-bold text-white md:text-xl">
                Garage door terms, explained in plain language
              </span>
              <span
                aria-hidden
                className="mt-1 inline-block shrink-0 rounded-full border border-ink-700 px-3 py-0.5 text-xs font-medium text-ink-300 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </span>
            <span className="mt-2 block text-xs text-ink-400 group-open:hidden">
              Tap to expand a plain-language glossary of the terms garage door techs actually use — torsion spring, cycle rating, photo eyes, R-value, and more.
            </span>
          </summary>
          <div className="space-y-5 pt-7">
            <p className="text-ink-300">
              The garage door trade has its own vocabulary and most of it never makes it onto the invoice in a form a homeowner can understand. Here is a short, opinionated glossary of the terms we use most often on the phone and on the truck. If you are calling around for a quote, knowing these terms will make every conversation shorter and every estimate easier to compare.
            </p>

        <p>
          <strong className="text-white">Torsion spring</strong> &mdash; the tightly wound steel spring mounted on a shaft above the door that counterbalances the door&apos;s weight. When the door closes, the spring winds up and stores energy; when the door opens, the spring releases that energy through the cables so the opener (or your arm) only lifts a fraction of the true weight. A two-car steel door can weigh 150&ndash;300 lbs; a correctly specced torsion spring makes it feel like 10. When a torsion spring breaks you will see a clean two-inch gap in the coil &mdash; and the door becomes dead weight that neither you nor the opener should try to lift.
        </p>

        <p>
          <strong className="text-white">Extension springs</strong> &mdash; the older counterbalance style: a pair of long springs stretched alongside the horizontal tracks, one per side. They do the same job as a torsion spring but wear less evenly and, when they snap, they can whip &mdash; which is why every extension spring must have a <strong className="text-white">safety cable</strong> threaded through it to contain the broken pieces. If your extension-spring door has no safety cables, that is a five-minute, must-do fix on the next service visit.
        </p>

        <p>
          <strong className="text-white">Cycle rating</strong> &mdash; the spring&apos;s life expectancy, measured in cycles (one open plus one close). Standard springs are rated for about 10,000 cycles &mdash; roughly 7&ndash;10 years at typical use, less if the garage is your front door. High-cycle springs (25,000&ndash;50,000) use thicker wire on a larger diameter and routinely last 15&ndash;20 years. When comparing spring quotes, the cycle rating is the number that makes one quote different from another &mdash; always ask for it.
        </p>

        <p>
          <strong className="text-white">Winding cone &amp; winding bars</strong> &mdash; the cone is the fitting at the end of a torsion spring that a technician turns to load the spring with tension, using two solid-steel winding bars. This is the step that makes DIY spring work genuinely dangerous: the spring is wound under load a quarter-turn at a time, and a slipped or undersized bar releases that stored energy instantly. Vise-grips and screwdrivers are not winding bars, no matter what the video said.
        </p>

        <p>
          <strong className="text-white">Cable drum</strong> &mdash; the grooved aluminum wheel at each end of the torsion shaft that the lift cable winds onto as the door opens. Drums are matched pairs; a worn or cracked drum lets the cable ride out of its groove, which is a leading cause of crooked and off-track doors. When a tech &quot;resets your cables,&quot; the drums are where the work happens.
        </p>

        <p>
          <strong className="text-white">Lift cables</strong> &mdash; the braided steel cables running from the bottom corners of the door up to the drums. They carry the door&apos;s full weight under spring tension. Cables fail by fraying at the bottom bracket where moisture and salt collect &mdash; a Michigan specialty &mdash; and they should always be replaced in pairs, because the survivor has the same mileage as the one that broke. Look, don&apos;t touch: a cable under tension is not a DIY item.
        </p>

        <p>
          <strong className="text-white">Bottom bracket</strong> &mdash; the steel bracket at each bottom corner of the door where the lift cable attaches. It is under direct spring tension at all times, which is why it usually carries a warning label. Removing a bottom bracket without first unloading the springs is one of the classic garage door injuries. If a bracket is rusted or bent, the fix is quick for a tech &mdash; and genuinely hazardous for anyone else.
        </p>

        <p>
          <strong className="text-white">Track</strong> &mdash; the steel channels the rollers travel in: <em>vertical track</em> up each side of the opening, a curved <em>radius</em> section, and <em>horizontal track</em> suspended from the ceiling. Track gets bent by car bumpers and ladder handles, and a bend as small as a quarter inch can throw a roller out and put the whole door on the floor of your garage. Track is repaired by straightening or replacing sections &mdash; it is not supposed to be &quot;persuaded&quot; with a hammer and left wavy.
        </p>

        <p>
          <strong className="text-white">Rollers</strong> &mdash; the wheels (on stems) that ride in the track, typically ten or more per door. Builder-grade steel rollers with no bearings are the #1 source of garage door noise in Metro Detroit. Sealed-bearing nylon rollers are the upgrade: dramatically quieter, no metal-on-metal wear, and they shrug off the freeze&ndash;thaw cycle. A full roller swap takes a tech under an hour and transforms how a door sounds.
        </p>

        <p>
          <strong className="text-white">Section / panel</strong> &mdash; the individual horizontal slabs that make up a sectional door, joined by hinges. &quot;Panel&quot; technically refers to the decorative rectangles embossed into a section, but in everyday use the words are swapped freely. The practical point: sections are individually replaceable on most major brands, which is why a dented section rarely requires a whole new door.
        </p>

        <p>
          <strong className="text-white">Sandwich construction</strong> &mdash; door sections built as steel&ndash;insulation&ndash;steel, with the foam core bonded to both skins. Compared with single-skin doors, sandwich sections are stiffer, quieter, warmer, and far more dent-resistant. Polyurethane (injected foam) beats polystyrene (cut board) on both insulation and rigidity. If you are buying one upgrade on a new Michigan door, buy this one.
        </p>

        <p>
          <strong className="text-white">R-value</strong> &mdash; the measure of a door&apos;s insulation, higher is better. Insulated residential doors run from about R-6 to R-18. In Metro Detroit an insulated door keeps an attached garage 10&ndash;20&deg;F warmer in winter. One buyer&apos;s note: some brands advertise the R-value of the foam at the center of the panel rather than the assembled door&apos;s real performance &mdash; an honest dealer will volunteer the difference.
        </p>

        <p>
          <strong className="text-white">Headroom, backroom &amp; side room</strong> &mdash; the three clearances that determine what hardware fits your garage: headroom is the space between the top of the opening and the ceiling, backroom is the depth from the opening to the back wall, side room is the wall space beside each jamb. Low-headroom garages (common in older Detroit and Ferndale homes) need special track kits; wall-mount openers need side room. This is why a real company measures before quoting a door.
        </p>

        <p>
          <strong className="text-white">Opener drive types</strong> &mdash; how the motor moves the trolley: <em>chain drive</em> (metal chain &mdash; cheap, durable, loud), <em>belt drive</em> (steel-reinforced rubber belt &mdash; quiet, the right answer for attached garages), <em>screw drive</em> (rotating threaded rod &mdash; mostly legacy units now), and <em>wall-mount jackshaft</em> (mounts beside the door and turns the torsion shaft directly &mdash; zero ceiling hardware, usually with battery backup and an automatic deadbolt).
        </p>

        <p>
          <strong className="text-white">Trolley &amp; emergency release</strong> &mdash; the trolley is the carriage that connects the door arm to the opener&apos;s rail; the red cord hanging from it is the emergency release. Pulling the cord disconnects the door from the motor so you can lift it by hand during a power outage &mdash; safe only when the springs are intact. Rule of thumb: never pull the red cord while the door is up, because a door with a failed spring will fall.
        </p>

        <p>
          <strong className="text-white">Photo eyes</strong> &mdash; the two small sensors mounted about six inches off the floor on either side of the opening, shooting an infrared beam across the door&apos;s path. If anything breaks the beam, a closing door reverses instantly. When your door refuses to close and the opener light blinks, the photo eyes are the first suspect &mdash; blocked, dirty (road-salt film is a Michigan classic), knocked out of alignment, or washed out by low winter sun.
        </p>

        <p>
          <strong className="text-white">UL 325</strong> &mdash; the federal safety standard that has governed openers since 1993. It is the reason every modern opener has photo eyes and contact auto-reverse (the door must reverse if it touches an obstruction &mdash; test it with a 2x4 flat on the floor). If your opener predates 1993, it predates both systems, and every honest company in the trade will recommend replacing it. Safety sensors are never to be bypassed, unplugged, or taped together &mdash; the cause of a non-closing door is always fixable.
        </p>

        <p>
          <strong className="text-white">Force &amp; travel limits</strong> &mdash; the opener&apos;s calibration settings: travel limits define where &quot;fully open&quot; and &quot;fully closed&quot; are; force settings define how much resistance the opener tolerates before it assumes something is wrong and reverses. Michigan&apos;s seasonal swings genuinely change how much force a door needs (cold grease, stiff seals), which is why a door that behaved all summer starts phantom-reversing in January. Calibration is a five-minute fix &mdash; cranking the force to maximum is not a fix, it defeats a safety system.
        </p>

        <p>
          <strong className="text-white">Rolling code</strong> &mdash; the remote-control security scheme (LiftMaster&apos;s Security+ being the best known) where the radio code changes with every button press, so a captured code is useless. Standard on everything modern. If your opener is old enough to use a fixed code set by DIP switches, it is old enough to be opened by a $30 device &mdash; and old enough to replace.
        </p>

        <p>
          <strong className="text-white">myQ / Aladdin Connect</strong> &mdash; the Wi-Fi platforms from LiftMaster/Chamberlain and Genie respectively. They add smartphone control, open/close alerts, scheduled auto-close, and access history to an opener. Retrofit hubs bring the same features to most openers made after 1993. The feature customers thank us for most is the simplest: a notification that answers &quot;did I close the garage?&quot; forever.
        </p>

        <p>
          <strong className="text-white">Weather seal &amp; retainer</strong> &mdash; the rubber gasket along the door&apos;s bottom edge (held by an aluminum retainer) plus the vinyl stop molding around the sides and top. Together they keep out snow, salt spray, leaves, and mice. In Michigan the bottom seal also freezes to the slab on wet winter nights &mdash; a stiff, cracked seal makes it worse. Seals are cheap and quick to replace, and it is the fall maintenance item most worth doing.
        </p>

        <p>
          <strong className="text-white">Off-track</strong> &mdash; the failure state where one or more rollers have left the track and the door is hanging crooked, usually caused by a frayed cable, a bumped track, or hitting the door with a vehicle. An off-track door can fall and should not be operated at all &mdash; not one more press of the button. A proper repair puts the door back, but more importantly finds and fixes whatever pushed it out in the first place.
        </p>

        <p className="text-ink-300">
          That is the vocabulary that covers ninety-five percent of the conversations we have with Metro Detroit homeowners. If a technician on your driveway uses a term that is not on this list and cannot explain it in plain language when you ask &mdash; ask harder. Good techs love explaining this stuff. It is half the reason we wrote this page.
        </p>
          </div>
        </details>
      </div>
    </section>
  );
}
