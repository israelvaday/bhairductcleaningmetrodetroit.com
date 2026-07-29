/**
 * One-shot: parse the legacy gallery.html before/after sliders into
 * content/before-after.json ({ before, after, width, height } per pair).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "..", "before and after", "gallery.html");
const OUT = join(ROOT, "content", "before-after.json");

const html = readFileSync(SRC, "utf8");
const sliderRe = /<div class="ba-slider"[^>]*>([\s\S]*?)<span class="ba-label ba-label-after">/g;
const imgRe = /<img class="ba-img ba-img-(after|before)" src="images\/gallery\/([^"]+)"[^>]*width="(\d+)" height="(\d+)"/g;

const pairs = [];
let m;
while ((m = sliderRe.exec(html))) {
  const block = m[1];
  let img;
  const entry = {};
  imgRe.lastIndex = 0;
  while ((img = imgRe.exec(block))) {
    const [, kind, file, w, h] = img;
    entry[kind] = `/gallery/${file}`;
    entry.width = Number(w);
    entry.height = Number(h);
  }
  if (entry.before && entry.after) pairs.push(entry);
}

writeFileSync(OUT, JSON.stringify(pairs, null, 2) + "\n");
console.log(`Wrote ${pairs.length} before/after pairs to content/before-after.json`);
