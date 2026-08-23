import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const pub = path.join(root, "public");

const problems = [];
const ok = [];

function checkSrc(src, where) {
  if (!src || !src.startsWith("/")) return;
  const file = path.join(pub, decodeURIComponent(src.split("?")[0]));
  if (!fs.existsSync(file)) {
    problems.push(`MISSING: ${src}  (referenced in ${where})`);
  } else {
    const bytes = fs.statSync(file).size;
    ok.push({ src, bytes });
    if (bytes < 10 * 1024) problems.push(`TINY (${bytes}B): ${src} (${where})`);
  }
}

// 1. photos.json
const photos = JSON.parse(fs.readFileSync(path.join(root, "content/photos.json"), "utf8"));
const ids = new Set();
for (const p of photos) {
  ids.add(p.id);
  checkSrc(p.src, "photos.json id=" + p.id);
}

// 2. before-after.json
const ba = JSON.parse(fs.readFileSync(path.join(root, "content/before-after.json"), "utf8"));
for (const item of Array.isArray(ba) ? ba : ba.items ?? []) {
  for (const key of ["before", "after", "beforeSrc", "afterSrc", "src"]) {
    if (typeof item[key] === "string") checkSrc(item[key], "before-after.json");
  }
}

// 3. hardcoded /photos|/gallery|/video|/blog|/about|/faq asset refs in source
const exts = [".tsx", ".ts"];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".next" || e.name === "out") continue;
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (exts.includes(path.extname(e.name))) {
      const text = fs.readFileSync(fp, "utf8");
      const rel = path.relative(root, fp);
      // asset path literals
      for (const m of text.matchAll(/["'`](\/(?:photos|gallery|video|blog|about|faq)\/[^"'`\s]+?\.(?:png|jpe?g|webp|avif|svg|mp4|webm))["'`]/g)) {
        checkSrc(m[1], rel);
      }
      if (rel !== path.join("lib", "photos.ts")) {
        // PHOTOS_BY_ID["..."] references
        for (const m of text.matchAll(/PHOTOS_BY_ID\[\s*["'`]([^"'`]+)["'`]\s*\]/g)) {
          if (!ids.has(m[1])) problems.push(`UNKNOWN PHOTO ID: ${m[1]} (${rel})`);
        }
      }
    }
  }
}
walk(root);

// 4. unreferenced files in public/photos and public/gallery (informational)
const referenced = new Set(ok.map((o) => o.src));
for (const dir of ["photos", "gallery"]) {
  const d = path.join(pub, dir);
  if (!fs.existsSync(d)) continue;
  for (const f of fs.readdirSync(d)) {
    const src = `/${dir}/${f}`;
    if (!referenced.has(src)) console.log(`UNREFERENCED: ${src}`);
  }
}

console.log(`\nChecked ${ok.length} referenced assets.`);
if (problems.length) {
  console.log(`\n${problems.length} PROBLEMS:`);
  for (const p of problems) console.log("  " + p);
  process.exitCode = 1;
} else {
  console.log("No missing or tiny assets.");
}
