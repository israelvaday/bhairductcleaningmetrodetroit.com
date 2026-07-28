/**
 * Generate site assets + refresh location copy via OpenRouter.
 *
 * Usage:
 *   node scripts/openrouter-generate-site.mjs --test
 *   node scripts/openrouter-generate-site.mjs --images-brand
 *   node scripts/openrouter-generate-site.mjs --images-gallery
 *   node scripts/openrouter-generate-site.mjs --images-blog
 *   node scripts/openrouter-generate-site.mjs --images-quote
 *   node scripts/openrouter-generate-site.mjs --areas
 *   node scripts/openrouter-generate-site.mjs --all
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadEnvLocal,
  getOpenRouterKey,
  chatJson,
  generateImage,
  sleep,
} from "./openrouter-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BIZ = "BH Garage Door Metro Detroit";
const PHONE = "(313) 236-4558";

const PHOTO_REALISM =
  "Award-winning commercial photography, shot on Sony A7IV with 35mm f/1.4 lens, ultra photorealistic, natural Michigan light, authentic garage door trade detail, crisp steel door panels, torsion hardware and tracks, cinematic shallow depth of field, editorial quality, 8K detail, no text, no watermark, no CGI, not illustration, not stock photo look";

const IMAGE_OPTS = { resolution: "2K", quality: "high" };

const BLOG_SLUGS = [
  "garage-door-wont-open-troubleshooting",
  "broken-garage-door-spring-what-to-do",
  "garage-door-opener-buying-guide",
  "new-garage-door-cost-michigan",
  "winter-garage-door-maintenance-michigan",
  "insulated-vs-non-insulated-garage-doors",
  "garage-door-safety-sensor-fix",
  "hire-garage-door-company-michigan-checklist",
];

const BLOG_PROMPTS = {
  "garage-door-wont-open-troubleshooting": {
    hero: "Homeowner pressing a garage door remote while a white steel sectional garage door sits stuck half-open on a Michigan suburban home, overcast daylight",
    secondary: "Garage door technician inspecting the opener trolley and rail inside a garage with a flashlight",
  },
  "broken-garage-door-spring-what-to-do": {
    hero: "Close-up of a snapped garage door torsion spring above a sectional steel door, visible two-inch gap in the coil, garage interior",
    secondary: "Technician winding a new galvanized torsion spring with steel winding bars above a garage door",
  },
  "garage-door-opener-buying-guide": {
    hero: "New belt-drive garage door opener mounted on the ceiling of a clean modern two-car garage, LED light ring glowing",
    secondary: "Wall-mounted garage door opener console and wireless keypad beside an interior garage entry door",
  },
  "new-garage-door-cost-michigan": {
    hero: "Beautiful new carriage-style insulated garage doors on a brick Michigan colonial home, manicured lawn, golden hour curb appeal",
    secondary: "Installer leveling a new insulated garage door section as it is stacked onto the vertical tracks",
  },
  "winter-garage-door-maintenance-michigan": {
    hero: "Snow-covered Michigan driveway leading to a frost-dusted charcoal garage door on a cold winter morning",
    secondary: "Technician applying garage-door lubricant to rollers and hinges on a sectional door track",
  },
  "insulated-vs-non-insulated-garage-doors": {
    hero: "Cutaway cross-section of an insulated steel garage door panel showing the polyurethane foam core between steel skins",
    secondary: "Warm, well-lit heated garage workshop interior with an insulated garage door closed against winter",
  },
  "garage-door-safety-sensor-fix": {
    hero: "Macro close-up of a garage door photo-eye safety sensor mounted near the floor beside the track, amber indicator light glowing",
    secondary: "Technician kneeling to align a pair of garage door safety sensors at the base of the door tracks",
  },
  "hire-garage-door-company-michigan-checklist": {
    hero: "Garage door technician reviewing a written estimate with a homeowner on a Michigan driveway, service van in the background",
    secondary: "Uniformed technician servicing a garage door torsion-spring assembly from a ladder, professional and tidy",
  },
};

const GALLERY = [
  { file: "gen--new-installation.png", prompt: "Two installers fitting new insulated steel garage door panels onto tracks at a suburban Michigan home" },
  { file: "gen--torsion-spring.png", prompt: "Garage door torsion spring replacement in progress, winding bars inserted in the spring cone above the door" },
  { file: "gen--opener-install.png", prompt: "Belt-drive garage door opener being mounted to the ceiling of a two-car garage, technician on ladder" },
  { file: "gen--cable-repair.png", prompt: "Frayed garage door lift cable being replaced at the bottom bracket of a sectional door" },
  { file: "gen--roller-replacement.png", prompt: "New quiet nylon garage door rollers being seated into a clean galvanized track, close-up" },
  { file: "gen--panel-replacement.png", prompt: "Dented white steel garage door panel being removed and replaced with a matching new section" },
  { file: "gen--track-alignment.png", prompt: "Technician straightening and aligning a bent garage door track with a level and wrench" },
  { file: "gen--weather-seal.png", prompt: "New rubber bottom weather seal being fitted to a garage door, close-up against concrete floor" },
  { file: "gen--commercial-rollup.png", prompt: "Commercial rolling steel overhead door on a Detroit warehouse loading dock, industrial setting" },
  { file: "gen--carriage-doors.png", prompt: "Carriage-house style garage doors with decorative wrought-iron hardware on a brick Michigan colonial" },
  { file: "gen--modern-glass.png", prompt: "Modern full-view anodized aluminum and frosted glass garage door on a contemporary Michigan home at dusk" },
  { file: "gen--keypad-entry.png", prompt: "Finger entering a code on a wireless garage door keypad mounted beside a garage door frame" },
];

const GALLERY_EXTRA = [
  { file: "gen-v2--emergency-night.png", prompt: "Technician repairing a garage door at night under a bright work light, emergency service call at a Michigan home" },
  { file: "gen-v2--spring-closeup.png", prompt: "Pair of new galvanized torsion springs on a steel shaft with red and black winding cones above a garage door" },
  { file: "gen-v2--opener-logic.png", prompt: "Close-up of a garage door opener logic board and safety sensor wiring being serviced" },
  { file: "gen-v2--tuneup.png", prompt: "Technician lubricating garage door hinges and springs during a maintenance tune-up, spray straw close-up" },
  { file: "gen-v2--off-track.png", prompt: "Garage door roller popped out of a bent track, off-track door repair scenario in a residential garage" },
  { file: "gen-v2--smart-opener.png", prompt: "Homeowner in driveway watching garage door open via smartphone app, modern Michigan home" },
  { file: "gen-v2--wood-look.png", prompt: "Wood-look textured steel garage door freshly installed on a Michigan craftsman bungalow" },
  { file: "gen-v2--loading-dock.png", prompt: "Row of commercial sectional overhead doors at a Michigan business park loading dock, morning light" },
];

const QUOTE_WIZARD = [
  { file: "emergency.png", prompt: "Steel garage door stuck half-open at dusk with a car waiting in the driveway, urgent repair context, Michigan home" },
  { file: "repair.png", prompt: "Technician repairing a garage door track and roller with hand tools, residential garage" },
  { file: "installation.png", prompt: "New insulated garage door sections being installed on a suburban home, installer at work" },
  { file: "springs.png", prompt: "Broken garage door torsion spring above a sectional door, visible gap in coil, close-up" },
  { file: "openers.png", prompt: "Garage door opener unit mounted on garage ceiling with remote control in foreground" },
  { file: "cables-rollers.png", prompt: "Garage door cable drum, lift cable and rollers close-up on a sectional door" },
  { file: "panels.png", prompt: "Dented panel on a white steel garage door, residential driveway view" },
  { file: "commercial.png", prompt: "Commercial rolling steel overhead door on a small business storefront, Michigan" },
  { file: "maintenance.png", prompt: "Technician lubricating garage door hinges during a tune-up, spray can and rag" },
  { file: "property-home.png", prompt: "Single-family Michigan home with a two-car steel garage door, curb view" },
  { file: "property-business.png", prompt: "Commercial building with sectional overhead doors and a loading bay" },
  { file: "property-detached.png", prompt: "Detached single-car garage with steel door on a Michigan alley lot" },
  { file: "property-other.png", prompt: "Row of storage facility roll-up doors, clean and orderly" },
];

const SERVICE_HERO = [
  { slug: "emergency", prompt: "Technician arriving at night to repair a garage door stuck open, work light and van, Michigan home" },
  { slug: "repair", prompt: "Garage door technician adjusting rollers and track on a white sectional door, residential Michigan garage" },
  { slug: "installation", prompt: "Crew installing a brand new carriage-style insulated garage door on a brick Michigan home" },
  { slug: "springs", prompt: "Torsion spring replacement above a garage door, winding bars in action, professional close-up" },
  { slug: "openers", prompt: "New belt-drive garage door opener install on garage ceiling, technician wiring the unit" },
  { slug: "cables-rollers", prompt: "Close-up of new lift cables and nylon rollers on a sectional garage door track" },
  { slug: "panels", prompt: "Matching replacement panel being fitted into a steel garage door, color-matched repair" },
  { slug: "commercial", prompt: "Commercial rolling steel overhead door service at a Detroit warehouse loading dock" },
  { slug: "maintenance", prompt: "Garage door tune-up: technician lubricating hinges and checking spring balance" },
  { slug: "smart-openers", prompt: "Smartphone app controlling a garage door opener, modern connected home garage, Michigan" },
];

async function saveImage(buf, outPath) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buf);
  console.log("  wrote", outPath.replace(ROOT, ""));
}

async function genBlogImages(key, imageModel) {
  const blogDir = join(ROOT, "public/blog");
  mkdirSync(blogDir, { recursive: true });
  for (const slug of BLOG_SLUGS) {
    const p = BLOG_PROMPTS[slug];
    for (const [kind, prompt] of [
      ["hero", p.hero],
      ["secondary", p.secondary],
    ]) {
      const out = join(blogDir, `${slug}-${kind}.png`);
      try {
        console.log(`Blog ${slug} ${kind}…`);
        const buf = await generateImage(key, `${prompt}. ${PHOTO_REALISM}. ${BIZ}, Metro Detroit Michigan.`, {
          model: imageModel,
          aspect_ratio: "16:9",
          ...IMAGE_OPTS,
        });
        await saveImage(buf, out);
        await sleep(1500);
      } catch (e) {
        console.error("  failed:", e.message);
      }
    }
  }
}

async function genGalleryImages(key, imageModel, opts = {}) {
  const { extraOnly = false, force = false } = opts;
  const list = extraOnly ? GALLERY_EXTRA : [...GALLERY, ...GALLERY_EXTRA];
  const dir = join(ROOT, "public/photos");
  mkdirSync(dir, { recursive: true });
  for (const g of list) {
    const out = join(dir, g.file);
    if (existsSync(out) && !force) {
      console.log("Gallery skip (exists)", g.file);
      continue;
    }
    try {
      console.log("Gallery", g.file, "…");
      const buf = await generateImage(
        key,
        `${g.prompt}. ${PHOTO_REALISM}. ${BIZ}, Metro Detroit Michigan.`,
        { model: imageModel, aspect_ratio: "16:9", ...IMAGE_OPTS }
      );
      await saveImage(buf, out);
      await sleep(1500);
    } catch (e) {
      console.error("  failed:", e.message);
    }
  }
}

async function genQuoteWizardImages(key, imageModel, force = false) {
  const dir = join(ROOT, "public/photos/quote");
  mkdirSync(dir, { recursive: true });
  for (const q of QUOTE_WIZARD) {
    const out = join(dir, q.file);
    if (existsSync(out) && !force) {
      console.log("Quote skip (exists)", q.file);
      continue;
    }
    try {
      console.log("Quote wizard", q.file, "…");
      const buf = await generateImage(
        key,
        `${q.prompt}. ${PHOTO_REALISM}. ${BIZ}, Metro Detroit Michigan garage door company.`,
        { model: imageModel, aspect_ratio: "1:1", ...IMAGE_OPTS }
      );
      await saveImage(buf, out);
      await sleep(1500);
    } catch (e) {
      console.error("  failed:", e.message);
    }
  }
}

async function genBrandImages(key, imageModel, opts = {}) {
  const { logoOnly = false, heroOnly = false, force = false } = opts;
  const pub = join(ROOT, "public");
  const photos = join(pub, "photos");
  mkdirSync(photos, { recursive: true });

  const jobs = [
    {
      out: join(pub, "logo.png"),
      prompt:
        "Professional logo icon for BH Garage Door Metro Detroit: navy blue shield containing a gold sectional garage door with four raised panels and an upward arrow, clean flat vector logo mark, centered on transparent-look navy background, no long text, no watermark, Michigan garage door brand",
      aspect_ratio: "1:1",
    },
    {
      out: join(photos, "branding-generated--hero-garage-door-metro-detroit.png"),
      prompt:
        "Wide cinematic hero photo of a technician installing a new insulated steel garage door on a Michigan home, golden hour light, dark edges for website hero overlay, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "about/about-hero.png"),
      prompt:
        "Professional garage door crew with branded service van parked in front of a Michigan craftsman home with a new carriage garage door, friendly uniformed technicians, natural daylight, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "about/about-workshop.png"),
      prompt:
        "Organized garage door service van interior with torsion springs, rollers, hinges and cable spools on labeled shelves, professional trade detail, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "faq/faq-hero.png"),
      prompt:
        "Garage door technician explaining door and opener options to a homeowner on a sunny Michigan driveway beside a new garage door, professional consultation photo, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--metro-detroit-map-mockup.png"),
      prompt:
        "Marketing photo of a paper map of Metro Detroit Michigan with small gold garage-door shaped pins on Detroit Warren Troy Dearborn, desk mockup with navy and gold accents",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--service-van-three-quarter-front.png"),
      prompt:
        "Clean navy service van with subtle gold accents parked in a Michigan driveway, three-quarter front view, garage door service company vehicle, ladder rack, photorealistic, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--service-van-side-magnet-daylight.png"),
      prompt:
        "Side profile of a navy garage door service van in bright daylight in front of a suburban Michigan home with a two-car garage, photorealistic, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--social-tile-services-grid-real.png"),
      prompt:
        "Flat-lay of garage door parts: torsion springs, nylon rollers, hinges, remote, keypad and cables arranged neatly on dark navy background, product photography, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--social-tile-emergency-callout-real.png"),
      prompt:
        "Dramatic photo of a garage door repair at dusk, technician silhouette with work light, navy and gold tones, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--business-card-mockup-photo.png"),
      prompt:
        "Navy and gold business card mockup on a workbench next to garage door rollers and a hinge, shallow depth of field, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "video/hero-still.png"),
      prompt:
        "Wide cinematic photo of a handsome new charcoal insulated garage door on a brick Michigan colonial home at golden hour, long shadows, dark edges suitable for website hero overlay, photorealistic, no text",
      aspect_ratio: "16:9",
    },
  ];

  const runJobs = logoOnly ? jobs.slice(0, 1) : heroOnly ? jobs.slice(1, 2) : jobs;

  for (const j of runJobs) {
    if (existsSync(j.out) && !force) {
      console.log("Brand skip (exists)", j.out.replace(ROOT, ""));
      continue;
    }
    try {
      console.log("Brand", j.out.replace(ROOT, ""), "…");
      const buf = await generateImage(key, j.prompt, { model: imageModel, aspect_ratio: j.aspect_ratio, ...IMAGE_OPTS });
      await saveImage(buf, j.out);
      await sleep(1500);
    } catch (e) {
      console.error("  failed:", e.message);
    }
  }

  if (logoOnly || heroOnly) return;

  for (const s of SERVICE_HERO) {
    const out = join(photos, `service-hero-${s.slug}.png`);
    if (existsSync(out) && !force) {
      console.log("Service hero skip (exists)", s.slug);
      continue;
    }
    try {
      console.log("Service hero", s.slug, "…");
      const buf = await generateImage(key, `${s.prompt}. ${BIZ}. ${PHOTO_REALISM}, no text.`, {
        model: imageModel,
        aspect_ratio: "16:9",
        ...IMAGE_OPTS,
      });
      await saveImage(buf, out);
      await sleep(1200);
    } catch (e) {
      console.error("  failed:", e.message);
    }
  }
}

async function refreshAreas(key, chatModel) {
  const areasPath = join(ROOT, "content/service-areas.json");
  const outPath = join(ROOT, "content/area-insights.json");
  const areas = JSON.parse(readFileSync(areasPath, "utf8"));
  const out = {};
  const BATCH = 8;
  const system = `You write local SEO JSON for ${BIZ} (${PHONE}), a licensed and insured garage door installation and repair company serving Metro Detroit MI only. Output JSON object keyed by slug. Each value: tagline (max 14 words, garage door focused), landmarks (3 real places in that Michigan city), common_calls (3 short garage door jobs like "broken torsion spring replacement", "garage door opener install", "door off track repair"), neighborhood_notes (2-3 sentences about that city's housing stock and what it means for garage doors — age of homes, attached vs detached garages, winter weather wear, commercial corridors), keywords (6-7 lowercase Michigan garage door SEO terms including the city name, e.g. "garage door repair <city> mi"). Absolutely no locksmith, lock, key, or drywall content. No California references.`;

  for (let i = 0; i < areas.length; i += BATCH) {
    const batch = areas.slice(i, i + BATCH);
    const listing = batch.map((a) => `- ${a.slug}: ${a.name} (${a.kind})`).join("\n");
    try {
      console.log(`Areas batch ${Math.floor(i / BATCH) + 1}/${Math.ceil(areas.length / BATCH)}…`);
      const data = await chatJson(key, chatModel, system, `Write insights for:\n${listing}`);
      for (const [slug, info] of Object.entries(data)) {
        if (info && typeof info === "object") out[slug] = info;
      }
      writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
      await sleep(800);
    } catch (e) {
      console.error("  batch failed:", e.message);
    }
  }
  console.log(`Areas: ${Object.keys(out).length}/${areas.length} slugs`);
}

async function main() {
  loadEnvLocal();
  const key = getOpenRouterKey();
  if (!key) {
    console.error("Set OPENROUTER_API_KEY in .env.local");
    process.exit(1);
  }
  const chatModel = process.env.OPENROUTER_CHAT_MODEL || "google/gemini-2.5-flash";
  const imageModel =
    process.env.OPENROUTER_IMAGE_MODEL || "google/gemini-3.1-flash-image";
  const args = process.argv.slice(2);
  const force = args.includes("--force");

  if (args.includes("--test")) {
    const buf = await generateImage(key, "Simple test: one garage door remote control on navy background, product photo", {
      model: imageModel,
      aspect_ratio: "1:1",
    });
    await saveImage(buf, join(ROOT, "public/photos/openrouter-test.png"));
    console.log("OpenRouter image OK");
    return;
  }

  if (args.includes("--images-blog") || args.includes("--all")) await genBlogImages(key, imageModel);
  if (args.includes("--images-gallery") || args.includes("--all"))
    await genGalleryImages(key, imageModel, { force });
  if (args.includes("--images-brand") || args.includes("--all"))
    await genBrandImages(key, imageModel, { force });
  if (args.includes("--images-logo"))
    await genBrandImages(key, imageModel, { logoOnly: true, force });
  if (args.includes("--images-hero"))
    await genBrandImages(key, imageModel, { heroOnly: true, force });
  if (args.includes("--images-quote") || args.includes("--all"))
    await genQuoteWizardImages(key, imageModel, force);
  if (args.includes("--areas") || args.includes("--all")) await refreshAreas(key, chatModel);

  if (args.length && !args.includes("--test")) {
    console.log("Running rebuild-photos-gallery…");
    const { execSync } = await import("node:child_process");
    execSync("node scripts/rebuild-photos-gallery.mjs", { cwd: ROOT, stdio: "inherit" });
  } else if (!args.length) {
    console.log(
      "Pass --test, --images-blog, --images-gallery, --images-brand, --images-quote, --areas, or --all"
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
