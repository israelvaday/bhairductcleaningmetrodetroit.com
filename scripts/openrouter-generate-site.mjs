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
const BIZ = "BH Air Duct Cleaning Metro Detroit";
const PHONE = "(313) 236-4558";

const PHOTO_REALISM =
  "Award-winning commercial photography, shot on Sony A7IV with 35mm f/1.4 lens, ultra photorealistic, natural Michigan light, authentic HVAC and air duct cleaning trade detail, galvanized sheet-metal ductwork, flexible duct runs, floor registers and return grilles, negative-pressure vacuum hoses and rotary brush equipment, cinematic shallow depth of field, editorial quality, 8K detail, no text, no watermark, no CGI, not illustration, not stock photo look";

const IMAGE_OPTS = { resolution: "2K", quality: "high" };

const BLOG_SLUGS = [
  "how-often-should-air-ducts-be-cleaned",
  "signs-your-air-ducts-need-cleaning",
  "air-duct-cleaning-cost-metro-detroit",
  "dryer-vent-cleaning-fire-safety",
  "air-duct-cleaning-process-what-to-expect",
  "indoor-air-quality-michigan-winter",
  "furnace-and-ac-coil-cleaning-guide",
  "hire-air-duct-cleaning-company-checklist",
];

const BLOG_PROMPTS = {
  "how-often-should-air-ducts-be-cleaned": {
    hero: "Homeowner removing a floor register grille to look at dust buildup inside a supply duct in a Michigan living room, natural window light",
    secondary: "Technician holding a calendar-style maintenance checklist beside a furnace and clean sheet-metal ductwork in a basement",
  },
  "signs-your-air-ducts-need-cleaning": {
    hero: "Close-up of a dusty return air grille with visible grey dust matting on the vanes in a suburban Michigan home hallway",
    secondary: "Flashlight beam revealing a thick layer of dust and debris inside an open galvanized supply duct",
  },
  "air-duct-cleaning-cost-metro-detroit": {
    hero: "Air duct cleaning technician reviewing a written estimate on a clipboard with a homeowner at the kitchen table, service van visible outside",
    secondary: "Negative-pressure vacuum hose connected to a furnace trunk line in a clean Michigan basement",
  },
  "dryer-vent-cleaning-fire-safety": {
    hero: "Huge clump of grey dryer lint pulled from a dryer vent duct lying on a laundry room floor next to the dryer",
    secondary: "Technician cleaning an exterior dryer vent hood on a brick Michigan home with a rotary brush rod",
  },
  "air-duct-cleaning-process-what-to-expect": {
    hero: "Professional duct cleaning setup in a Michigan home: large yellow vacuum hose running from a truck through the front door, floor protection down",
    secondary: "Rotary brush and compressed-air whip tools laid out neatly on a drop cloth beside open ductwork",
  },
  "indoor-air-quality-michigan-winter": {
    hero: "Cozy Michigan living room in winter with frost on the windows and a floor register in the foreground, warm light",
    secondary: "Fresh clean HVAC filter being inserted into a furnace filter slot, close-up of hands",
  },
  "furnace-and-ac-coil-cleaning-guide": {
    hero: "Furnace blower wheel caked with dust being removed for cleaning by a technician wearing gloves, basement utility room",
    secondary: "Evaporator A-coil being cleaned with foaming coil cleaner, before and after fins visible",
  },
  "hire-air-duct-cleaning-company-checklist": {
    hero: "Uniformed air duct cleaning technician shaking hands with a homeowner on a Michigan driveway, branded service van behind them",
    secondary: "Technician showing a homeowner before-and-after photos of their ductwork on a tablet screen",
  },
};

const GALLERY = [
  { file: "gen--negative-pressure-setup.png", prompt: "Negative-pressure duct cleaning vacuum hose connected to a sealed furnace trunk line, professional setup in a Michigan basement" },
  { file: "gen--rotary-brush-duct.png", prompt: "Rotary brush spinning inside a round galvanized air duct, dust being pulled toward vacuum, dramatic interior duct view" },
  { file: "gen--register-detail-clean.png", prompt: "Technician detail-cleaning a floor supply register and boot with a HEPA vacuum in a Michigan living room" },
  { file: "gen--return-grille-clean.png", prompt: "Large wall return-air grille removed and being washed, visible clean duct opening behind it" },
  { file: "gen--dryer-vent-brush.png", prompt: "Flexible rotary brush rod entering a dryer vent duct from the laundry room, lint visible" },
  { file: "gen--dryer-vent-exterior.png", prompt: "Technician on a small ladder clearing lint from an exterior dryer vent hood on a brick Michigan colonial home" },
  { file: "gen--furnace-blower-clean.png", prompt: "Furnace blower wheel half cleaned showing dramatic difference between caked dust and shiny clean fins" },
  { file: "gen--evaporator-coil.png", prompt: "Evaporator coil being cleaned with foaming cleaner inside a furnace plenum, close-up" },
  { file: "gen--sanitizing-fog.png", prompt: "Fine antimicrobial fog being applied into a supply duct with a fogger wand, clean professional setting" },
  { file: "gen--camera-inspection.png", prompt: "Duct inspection camera monitor showing the inside of an air duct, technician holding the camera reel" },
  { file: "gen--commercial-rtu.png", prompt: "Technician servicing a rooftop HVAC unit on a commercial building in Metro Detroit, duct access panels open, morning light" },
  { file: "gen--post-construction.png", prompt: "New construction Michigan home interior with drywall dust being vacuumed from floor duct openings, renovation setting" },
];

const GALLERY_EXTRA = [
  { file: "gen-v2--truck-hose-run.png", prompt: "Large yellow duct cleaning vacuum hose running from a service truck through the front door of a Michigan home, corner guards protecting the door frame" },
  { file: "gen-v2--before-after-duct.png", prompt: "Split view inside a galvanized air duct: one side thick with grey dust and debris, other side spotless shiny metal" },
  { file: "gen-v2--air-whip-tool.png", prompt: "Compressed-air whip tool agitating dust inside an open rectangular trunk duct, dust streaming toward vacuum" },
  { file: "gen-v2--flex-duct-attic.png", prompt: "Technician with headlamp inspecting flexible insulated ductwork in a Michigan attic" },
  { file: "gen-v2--filter-comparison.png", prompt: "Hands holding a filthy grey furnace filter next to a brand new clean pleated filter, side by side comparison" },
  { file: "gen-v2--basement-trunk.png", prompt: "Clean sealed sheet-metal trunk duct with new foil tape joints running across a Michigan basement ceiling" },
  { file: "gen-v2--tech-protective-gear.png", prompt: "Professional duct cleaning technician in uniform and gloves setting up equipment, friendly and tidy, Michigan home interior" },
  { file: "gen-v2--commercial-office.png", prompt: "Ceiling diffuser being removed for duct cleaning in a modern Metro Detroit office space, after hours, drop cloths below" },
];

const QUOTE_WIZARD = [
  { file: "residential.png", prompt: "Negative-pressure vacuum hose connected to home furnace ductwork, residential air duct cleaning in progress, Michigan basement" },
  { file: "commercial.png", prompt: "Technician cleaning ceiling diffusers and ductwork in a modern office space, commercial HVAC cleaning" },
  { file: "dryer-vent.png", prompt: "Large clump of lint being pulled from a dryer vent duct in a laundry room" },
  { file: "hvac-restoration.png", prompt: "Soot-stained furnace plenum being restored to clean condition, deep restoration work" },
  { file: "furnace-coil.png", prompt: "Furnace blower wheel being cleaned, half dusty half clean, utility room close-up" },
  { file: "sanitization.png", prompt: "Antimicrobial fog being applied into an air duct with a fogger wand" },
  { file: "duct-inspection.png", prompt: "Duct inspection camera screen showing the inside of an air duct, technician at work" },
  { file: "post-construction.png", prompt: "Drywall dust and construction debris inside a floor duct of a newly renovated home" },
  { file: "maintenance.png", prompt: "Technician replacing a furnace filter and checking ductwork during a maintenance visit" },
  { file: "emergency.png", prompt: "Urgent service: technician arriving at a Michigan home with equipment, dryer vent emergency, dusk light" },
  { file: "property-home.png", prompt: "Single-family Michigan home exterior with visible exterior dryer vent hood, curb view" },
  { file: "property-business.png", prompt: "Commercial building with rooftop HVAC units, Metro Detroit business exterior" },
  { file: "property-condo.png", prompt: "Row of Michigan townhouse condos with dryer vent hoods on the siding" },
  { file: "property-other.png", prompt: "Apartment building exterior with multiple HVAC units and vents, clean and orderly" },
];

const SERVICE_HERO = [
  { slug: "residential", prompt: "Wide shot of professional residential air duct cleaning: vacuum hose to furnace trunk, technician with rotary brush at a floor register, bright Michigan home" },
  { slug: "commercial", prompt: "Commercial duct cleaning in a Metro Detroit office: technician on lift at ceiling diffuser, drop cloths, professional equipment" },
  { slug: "dryer-vent", prompt: "Dryer vent cleaning: rotary brush rod entering vent duct behind a dryer, lint pile on floor, laundry room" },
  { slug: "hvac-restoration", prompt: "HVAC restoration: technician deep-cleaning a soot-stained air handler cabinet, restoration equipment staged" },
  { slug: "furnace-coil", prompt: "Furnace and coil cleaning: blower assembly removed for cleaning, evaporator coil visible, Michigan basement utility room" },
  { slug: "sanitization", prompt: "Duct sanitizing: fine antimicrobial fog applied into supply ductwork with a fogger, clean professional scene" },
  { slug: "duct-inspection", prompt: "Camera duct inspection: technician showing homeowner live duct interior footage on a monitor" },
  { slug: "post-construction", prompt: "Post-construction duct cleaning in a freshly renovated Michigan home, drywall dust extraction from floor ducts" },
  { slug: "maintenance", prompt: "Maintenance visit: technician checking airflow at a supply register with an anemometer, filter replacement in hand" },
  { slug: "emergency", prompt: "Same-day emergency duct service: technician unloading vacuum equipment from service van at dusk, Michigan home" },
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
        `${q.prompt}. ${PHOTO_REALISM}. ${BIZ}, Metro Detroit Michigan air duct cleaning company.`,
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
        "Professional flat vector logo icon for BH Air Duct Cleaning Metro Detroit: deep navy blue circular badge containing a stylized gold air vent grille with three elegant swirling airflow lines rising from it, clean minimal flat vector logo mark, crisp geometry, centered composition on navy background, no long text, no watermark, premium Michigan air duct cleaning brand",
      aspect_ratio: "1:1",
    },
    {
      out: join(photos, "branding-generated--hero-air-duct-metro-detroit.png"),
      prompt:
        "Wide cinematic hero photo of a professional air duct cleaning technician connecting a large negative-pressure vacuum hose to home ductwork, golden hour light through basement window, dark edges for website hero overlay, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "about/about-hero.png"),
      prompt:
        "Professional air duct cleaning crew with branded navy service van parked in front of a Michigan craftsman home, friendly uniformed technicians carrying vacuum hoses and rotary brush equipment, natural daylight, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "about/about-workshop.png"),
      prompt:
        "Organized air duct cleaning service van interior with rotary brush rods, air whips, HEPA vacuum equipment, fogger, and hose reels on labeled shelves, professional trade detail, photorealistic, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "faq/faq-hero.png"),
      prompt:
        "Air duct cleaning technician explaining duct inspection results to a homeowner at a kitchen table with a tablet showing duct photos, professional consultation, natural light, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--metro-detroit-map-mockup.png"),
      prompt:
        "Marketing photo of a paper map of Metro Detroit Michigan with small gold air-vent shaped pins on Detroit Warren Troy Dearborn, desk mockup with navy and gold accents",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--service-van-three-quarter-front.png"),
      prompt:
        "Clean navy service van with subtle gold accents parked in a Michigan driveway, three-quarter front view, air duct cleaning company vehicle with hose reel visible through open rear doors, photorealistic, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--service-van-side-magnet-daylight.png"),
      prompt:
        "Side profile of a navy air duct cleaning service van in bright daylight in front of a suburban Michigan home, photorealistic, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--social-tile-services-grid-real.png"),
      prompt:
        "Flat-lay of air duct cleaning tools: rotary brush heads, air whip, inspection camera, anemometer, fresh pleated filter and foil tape arranged neatly on dark navy background, product photography, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--social-tile-emergency-callout-real.png"),
      prompt:
        "Dramatic photo of an air duct cleaning technician at dusk carrying vacuum hose toward a home, work light glow, navy and gold tones, no text",
      aspect_ratio: "16:9",
    },
    {
      out: join(photos, "branding-generated--business-card-mockup-photo.png"),
      prompt:
        "Navy and gold business card mockup on a workbench next to a rotary duct brush head and foil tape roll, shallow depth of field, no readable text",
      aspect_ratio: "16:9",
    },
    {
      out: join(pub, "video/hero-still.png"),
      prompt:
        "Wide cinematic photo of a spotless galvanized sheet-metal duct system in a finished Michigan basement, warm golden hour side light, gleaming clean metal, dark edges suitable for website hero overlay, photorealistic, no text",
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
  const system = `You write local SEO JSON for ${BIZ} (${PHONE}), a licensed and insured air duct cleaning, dryer vent cleaning, and HVAC system cleaning company serving Metro Detroit MI only. Output JSON object keyed by slug. Each value: tagline (max 14 words, air duct cleaning focused), landmarks (3 real places in that Michigan city), common_calls (3 short air duct jobs like "whole-home air duct cleaning", "clogged dryer vent cleaning", "post-renovation duct cleaning"), neighborhood_notes (2-3 sentences about that city's housing stock and what it means for ductwork and indoor air quality — age of homes and original ductwork, basements and forced-air furnaces, older cities with decades of dust accumulation, newer builds with construction debris, condos with long dryer vent runs, commercial corridors), keywords (6-7 lowercase Michigan air duct cleaning SEO terms including the city name, e.g. "air duct cleaning <city> mi", "dryer vent cleaning <city>"). Absolutely no locksmith, lock, key, garage door, or drywall content. No California references.`;

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
    const buf = await generateImage(key, "Simple test: one round air duct register grille on navy background, product photo", {
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
