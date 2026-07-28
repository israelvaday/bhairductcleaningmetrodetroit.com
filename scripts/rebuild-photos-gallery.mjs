/**
 * Rebuild content/photos.json for BH Garage Door — generated + branding assets only.
 */
import { writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_DIR = join(ROOT, "public/photos");
const OUT = join(ROOT, "content/photos.json");
const BIZ = "BH Garage Door Metro Detroit";
const REGION = "Metro Detroit, MI";

const SERVICE_SLUGS = [
  "emergency",
  "repair",
  "installation",
  "springs",
  "openers",
  "cables-rollers",
  "panels",
  "commercial",
  "maintenance",
  "smart-openers",
];

const GEN_LABELS = {
  "gen--new-installation.png": { cat: "installation", services: ["installation"], alt: "New insulated garage door installation" },
  "gen--torsion-spring.png": { cat: "springs", services: ["springs", "repair"], alt: "Torsion spring replacement" },
  "gen--opener-install.png": { cat: "openers", services: ["openers", "installation"], alt: "Belt-drive garage door opener install" },
  "gen--cable-repair.png": { cat: "cables-rollers", services: ["cables-rollers", "repair"], alt: "Garage door cable replacement" },
  "gen--roller-replacement.png": { cat: "cables-rollers", services: ["cables-rollers", "maintenance"], alt: "Quiet nylon roller replacement" },
  "gen--panel-replacement.png": { cat: "panels", services: ["panels", "repair"], alt: "Garage door panel replacement" },
  "gen--track-alignment.png": { cat: "repair", services: ["repair", "cables-rollers"], alt: "Track alignment and repair" },
  "gen--weather-seal.png": { cat: "maintenance", services: ["maintenance", "installation"], alt: "Bottom weather seal replacement" },
  "gen--commercial-rollup.png": { cat: "commercial", services: ["commercial"], alt: "Commercial rolling steel door" },
  "gen--carriage-doors.png": { cat: "installation", services: ["installation"], alt: "Carriage-style garage doors" },
  "gen--modern-glass.png": { cat: "installation", services: ["installation"], alt: "Modern full-view glass garage door" },
  "gen--keypad-entry.png": { cat: "smart-openers", services: ["smart-openers", "openers"], alt: "Wireless garage door keypad" },
  "gen-v2--emergency-night.png": { cat: "emergency", services: ["emergency", "repair"], alt: "Emergency garage door repair at night" },
  "gen-v2--spring-closeup.png": { cat: "springs", services: ["springs"], alt: "New torsion springs on shaft" },
  "gen-v2--opener-logic.png": { cat: "openers", services: ["openers", "repair"], alt: "Opener logic board service" },
  "gen-v2--tuneup.png": { cat: "maintenance", services: ["maintenance"], alt: "Garage door tune-up and lubrication" },
  "gen-v2--off-track.png": { cat: "emergency", services: ["emergency", "repair"], alt: "Off-track garage door repair" },
  "gen-v2--smart-opener.png": { cat: "smart-openers", services: ["smart-openers"], alt: "Smart opener smartphone control" },
  "gen-v2--wood-look.png": { cat: "installation", services: ["installation", "panels"], alt: "Wood-look steel garage door" },
  "gen-v2--loading-dock.png": { cat: "commercial", services: ["commercial"], alt: "Commercial loading dock doors" },
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
    cat: "repair",
    services: ["repair"],
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

const heroBrand = join(PHOTOS_DIR, "branding-generated--hero-garage-door-metro-detroit.png");
if (existsSync(heroBrand)) {
  photos.push({
    id: "branding-hero-metro",
    src: "/photos/branding-generated--hero-garage-door-metro-detroit.png",
    alt: `${BIZ} technician installing a garage door at a Michigan home`,
    category: "branding-generated",
    kind: "hero",
    services: ["installation", "emergency"],
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
  ["branding-generated--social-tile-services-grid-real.png", "Garage door parts flat-lay"],
  ["branding-generated--social-tile-emergency-callout-real.png", "Emergency garage door repair at dusk"],
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
