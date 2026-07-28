/**
 * Compress high-res PNGs for web deploy (keeps quality, shrinks file size).
 * Run: node scripts/optimize-images.mjs [dir]
 */
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.argv[2] || join(import.meta.dirname, "../public");
let count = 0;
let saved = 0;

async function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      await walk(p);
      continue;
    }
    if (!/\.png$/i.test(name)) continue;
    const before = statSync(p).size;
    if (before < 400_000) continue; // skip already-small PNGs
    try {
      const meta = await sharp(p).metadata();
      const maxW = name.includes("logo") || name === "icon.png" ? 512 : 1400;
      const buf = await sharp(p)
        .resize({ width: maxW, withoutEnlargement: true })
        .png({ compressionLevel: 9, effort: 10, quality: 82 })
        .toBuffer();
      if (buf.length < before * 0.95) {
        writeFileSync(p, buf);
        saved += before - buf.length;
        console.log(
          p.replace(ROOT, ""),
          `${(before / 1e6).toFixed(1)}MB -> ${(buf.length / 1e6).toFixed(1)}MB`,
          meta.width ? `${meta.width}px` : ""
        );
      }
      count++;
    } catch (e) {
      console.warn("skip", p, e.message);
    }
  }
}

await walk(ROOT);
console.log(`Optimized ${count} PNGs, saved ${(saved / 1e6).toFixed(1)} MB`);
