/**
 * Rebuild content/photos.json for BH Air Duct Cleaning — generated + branding assets only.
 */
import { writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_DIR = join(ROOT, "public/photos");
const OUT = join(ROOT, "content/photos.json");
const BIZ = "BH Air Duct Cleaning Metro Detroit";
const REGION = "Metro Detroit, MI";

const SERVICE_SLUGS = [
  "residential",
  "commercial",
  "dryer-vent",
  "hvac-restoration",
  "furnace-coil",
  "sanitization",
  "duct-inspection",
  "post-construction",
  "maintenance",
  "emergency",
];

const GEN_LABELS = {
  "gen--negative-pressure-setup.png": { cat: "residential", services: ["residential"], alt: "Negative-pressure duct cleaning vacuum connected to a furnace trunk line" },
  "gen--rotary-brush-duct.png": { cat: "residential", services: ["residential", "hvac-restoration"], alt: "Rotary brush agitating dust inside an air duct" },
  "gen--register-detail-clean.png": { cat: "residential", services: ["residential", "maintenance"], alt: "Floor supply register and boot detail cleaning" },
  "gen--return-grille-clean.png": { cat: "residential", services: ["residential"], alt: "Return-air grille removed for cleaning" },
  "gen--dryer-vent-brush.png": { cat: "dryer-vent", services: ["dryer-vent", "emergency"], alt: "Rotary brush cleaning a dryer vent duct" },
  "gen--dryer-vent-exterior.png": { cat: "dryer-vent", services: ["dryer-vent", "maintenance"], alt: "Exterior dryer vent hood being cleared of lint" },
  "gen--furnace-blower-clean.png": { cat: "furnace-coil", services: ["furnace-coil", "hvac-restoration"], alt: "Furnace blower wheel cleaning, half dusty half clean" },
  "gen--evaporator-coil.png": { cat: "furnace-coil", services: ["furnace-coil"], alt: "Evaporator coil foaming clean inside a furnace plenum" },
  "gen--sanitizing-fog.png": { cat: "sanitization", services: ["sanitization"], alt: "Antimicrobial fog applied into a supply duct" },
  "gen--camera-inspection.png": { cat: "duct-inspection", services: ["duct-inspection"], alt: "Duct inspection camera monitor showing duct interior" },
  "gen--commercial-rtu.png": { cat: "commercial", services: ["commercial"], alt: "Rooftop HVAC unit service on a commercial building" },
  "gen--post-construction.png": { cat: "post-construction", services: ["post-construction"], alt: "Post-construction drywall dust removal from floor ducts" },
  "gen-v2--truck-hose-run.png": { cat: "residential", services: ["residential", "emergency"], alt: "Duct cleaning vacuum hose running from truck into a home" },
  "gen-v2--before-after-duct.png": { cat: "residential", services: ["residential", "sanitization"], alt: "Before and after view inside a cleaned air duct" },
  "gen-v2--air-whip-tool.png": { cat: "residential", services: ["residential", "hvac-restoration"], alt: "Compressed-air whip tool inside a trunk duct" },
  "gen-v2--flex-duct-attic.png": { cat: "duct-inspection", services: ["duct-inspection", "hvac-restoration"], alt: "Flexible ductwork inspection in an attic" },
  "gen-v2--filter-comparison.png": { cat: "maintenance", services: ["maintenance", "furnace-coil"], alt: "Dirty furnace filter next to a new clean filter" },
  "gen-v2--basement-trunk.png": { cat: "residential", services: ["residential", "maintenance"], alt: "Clean sealed sheet-metal trunk duct in a basement" },
  "gen-v2--tech-protective-gear.png": { cat: "residential", services: ["residential", "commercial"], alt: "Duct cleaning technician setting up equipment" },
  "gen-v2--commercial-office.png": { cat: "commercial", services: ["commercial"], alt: "Ceiling diffuser cleaning in an office space" },
};

function meta(w = 1600, h = 900) {
  return {
    width: w,
    height: h,
    ratio: +(w / h).toFixed(3),
    orientation: w >= h ? "landscape" : "portrait",
    bytes: 120000,
    source: "generated",
  };
}

function labelForFile(file) {
  if (GEN_LABELS[file]) return GEN_LABELS[file];
  const slug = file.replace(/^gen(-v2)?--/, "").replace(".png", "").replace(/-/g, " ");
  return {
    cat: "residential",
    services: ["residential"],
    alt: slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

const photos = [];

for (const slug of SERVICE_SLUGS) {
  const heroPath = join(PHOTOS_DIR, `service-hero-${slug}.png`);
  if (!existsSync(heroPath)) continue;
  photos.push({
    id: `service-hero-${slug}`,
    src: `/photos/service-hero-${slug}.png`,
    alt: `${slug.replace(/-/g, " ")} — ${BIZ}, ${REGION}`,
    category: "service-hero",
    kind: "hero",
    services: [slug],
    ...meta(),
  });
}

if (existsSync(join(ROOT, "public/logo.png"))) {
  photos.push({
    id: "logo-master-on-navy",
    src: "/logo.png",
    alt: `${BIZ} logo`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
    ...meta(512, 512),
  });
  photos.push({
    id: "logo-icon-square",
    src: "/logo.png",
    alt: `${BIZ} icon`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
    ...meta(512, 512),
  });
}

const heroBrand = join(PHOTOS_DIR, "branding-generated--hero-air-duct-metro-detroit.png");
if (existsSync(heroBrand)) {
  photos.push({
    id: "branding-hero-metro",
    src: "/photos/branding-generated--hero-air-duct-metro-detroit.png",
    alt: `${BIZ} technician connecting a negative-pressure vacuum to home ductwork`,
    category: "branding-generated",
    kind: "hero",
    services: ["residential", "emergency"],
    ...meta(),
  });
}

const mapBrand = join(PHOTOS_DIR, "branding-generated--metro-detroit-map-mockup.png");
if (existsSync(mapBrand)) {
  photos.push({
    id: "branding-map-metro",
    src: "/photos/branding-generated--metro-detroit-map-mockup.png",
    alt: `${BIZ} Metro Detroit service area map`,
    category: "branding-generated",
    kind: "brand",
    services: ["brand"],
    ...meta(),
  });
}

const BRAND_EXTRA = [
  ["branding-generated--service-van-three-quarter-front.png", "Service van, three-quarter front view"],
  ["branding-generated--service-van-side-magnet-daylight.png", "Service van side profile in daylight"],
  ["branding-generated--social-tile-services-grid-real.png", "Air duct cleaning tools flat-lay"],
  ["branding-generated--social-tile-emergency-callout-real.png", "Same-day duct service at dusk"],
  ["branding-generated--business-card-mockup-photo.png", "Business card mockup on workbench"],
];
for (const [file, alt] of BRAND_EXTRA) {
  if (!existsSync(join(PHOTOS_DIR, file))) continue;
  photos.push({
    id: file.replace(".png", "").replace(/--/g, "-"),
    src: `/photos/${file}`,
    alt: `${alt} — ${BIZ}`,
    category: "branding-generated",
    kind: "brand",
    services: ["brand"],
    ...meta(),
  });
}

const genFiles = existsSync(PHOTOS_DIR)
  ? readdirSync(PHOTOS_DIR).filter((f) => /^gen(-v2)?--.+\.png$/i.test(f)).sort()
  : [];

for (const file of genFiles) {
  const info = labelForFile(file);
  photos.push({
    id: file.replace(".png", "").replace(/\//g, "-"),
    src: `/photos/${file}`,
    alt: `${info.alt} — ${BIZ}, ${REGION}`,
    category: info.cat,
    kind: "work",
    services: info.services,
    ...meta(),
  });
}

writeFileSync(OUT, JSON.stringify(photos, null, 2) + "\n");
console.log(`Wrote ${photos.length} photos to content/photos.json (${genFiles.length} gallery work shots)`);
