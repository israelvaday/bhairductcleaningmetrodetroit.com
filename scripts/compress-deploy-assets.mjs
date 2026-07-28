#!/usr/bin/env node
/**
 * Shrink deploy payload: convert large PNG photos in out/ to JPEG and patch HTML refs.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "out");
const MIN_BYTES = 250_000;
const MAX_WIDTH = 1920;
const SKIP = new Set(["logo.png", "icon.png", "apple-icon.png", "favicon.ico", "opengraph-image.png"]);

function walkAll(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walkAll(p, out);
    else out.push(p);
  }
  return out;
}

function patchHtml(replacements) {
  for (const file of walkAll(OUT).filter((f) => f.endsWith(".html"))) {
    let html = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const [from, to] of replacements) {
      if (html.includes(from)) {
        html = html.split(from).join(to);
        changed = true;
      }
    }
    if (changed) fs.writeFileSync(file, html);
  }
}

const replacements = [];
const pngs = walkAll(OUT).filter((f) => /\.png$/i.test(f) && !SKIP.has(path.basename(f)));

for (const file of pngs) {
  const before = fs.statSync(file).size;
  if (before < MIN_BYTES) continue;
  try {
    const jpg = file.replace(/\.png$/i, ".jpg");
    const buf = await sharp(file)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toBuffer();
    if (buf.length >= before) continue;
    fs.writeFileSync(jpg, buf);
    fs.unlinkSync(file);
    const from = "/" + path.relative(OUT, file).split(path.sep).join("/");
    const to = "/" + path.relative(OUT, jpg).split(path.sep).join("/");
    replacements.push([from, to]);
    console.log(
      "[compress-deploy-assets]",
      path.relative(OUT, file),
      `${Math.round(before / 1024)}KB -> ${Math.round(buf.length / 1024)}KB jpg`
    );
  } catch (e) {
    console.warn("[compress-deploy-assets] skip", path.relative(OUT, file), e.message);
  }
}

if (replacements.length) patchHtml(replacements);

const totalMb = Math.round(walkAll(OUT).reduce((s, f) => s + fs.statSync(f).size, 0) / 1024 / 1024);
console.log(`[compress-deploy-assets] Converted ${replacements.length} PNGs; out/ is ${totalMb}MB`);
