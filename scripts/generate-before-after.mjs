/**
 * Generates matched before/after photo pairs for the gallery slider.
 *
 * For each scene we first generate a dirty "before" photo, then feed that
 * exact image back to the model with an edit instruction so the "after"
 * keeps the identical camera angle and geometry — only cleaned. Outputs
 * webp files in public/gallery and rewrites content/before-after.json.
 *
 * Usage: node scripts/generate-before-after.mjs
 */
import { writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { loadEnvLocal, getOpenRouterKey, orHeaders, generateImage, sleep } from "./openrouter-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const GALLERY_DIR = join(ROOT, "public", "gallery");
const OUT_JSON = join(ROOT, "content", "before-after.json");
const MODEL = "google/gemini-3.1-flash-image";

const REALISM =
  "photorealistic, shot on a phone camera by a technician documenting a job, natural imperfect framing, realistic lighting, high detail, no text, no watermark, no people";

const SCENES = [
  {
    slug: "round-supply-duct",
    aspect: "3:4",
    before: `Interior view straight down a round galvanized steel supply air duct in a Michigan home, walls coated in a thick even layer of grey dust, lint and debris clumps, inspection-camera style photo lit by a work light, ${REALISM}`,
  },
  {
    slug: "rectangular-trunk-line",
    aspect: "4:3",
    before: `Looking down the inside of a rectangular sheet-metal trunk line duct, heavy matted dust and construction debris covering the bottom, dust webs on the seams, work light illumination from behind camera, ${REALISM}`,
  },
  {
    slug: "floor-register-boot",
    aspect: "3:4",
    before: `Top-down photo of an open floor supply register boot in a suburban home, register cover removed and set beside it on oak flooring, duct boot filled with grey dust, pet hair, crumbs and small debris, daylight from a nearby window, ${REALISM}`,
  },
  {
    slug: "return-air-grille",
    aspect: "3:4",
    before: `Close-up photo of a white metal return air grille on a hallway wall, louvers caked with thick grey dust bunnies and dark dust streaks bleeding onto the wall paint around it, indoor ambient light, ${REALISM}`,
  },
  {
    slug: "furnace-blower-wheel",
    aspect: "4:3",
    before: `Photo of a furnace blower wheel inside an open blower compartment of a residential furnace, every fin caked with compacted grey dust and dirt, flashlight lighting in a basement utility room, ${REALISM}`,
  },
  {
    slug: "evaporator-coil",
    aspect: "3:4",
    before: `Close-up photo of a residential evaporator A-coil with its access panel removed, aluminum fins clogged with a grey mat of dust and pet hair blocking airflow, basement furnace room lighting, ${REALISM}`,
  },
  {
    slug: "dryer-vent-hood",
    aspect: "4:3",
    before: `Photo of an exterior white dryer vent hood on a brick house wall in Michigan, flap propped open by a huge buildup of grey dryer lint bulging out and hanging from the opening, overcast daylight, ${REALISM}`,
  },
  {
    slug: "dryer-duct-interior",
    aspect: "3:4",
    before: `Interior inspection photo looking down a rigid metal dryer vent duct, walls nearly closed off with a thick fuzzy layer of grey and beige dryer lint, camera light illuminating the blockage, ${REALISM}`,
  },
  {
    slug: "ceiling-diffuser",
    aspect: "3:4",
    before: `Photo looking up at a white square ceiling supply air diffuser in a home, dark grey dust streaks fanning out across the vanes and staining the ceiling drywall around the vent, indoor lighting, ${REALISM}`,
  },
  {
    slug: "main-return-drop",
    aspect: "4:3",
    before: `Photo of the inside of a large open return air drop next to a basement furnace, panel cut open for cleaning access, interior surfaces coated in decades of grey dust, dirt and cobwebs, work light illumination, ${REALISM}`,
  },
];

const AFTER_INSTRUCTION =
  "Edit this exact photo: keep the identical camera angle, framing, geometry, lighting and every structural detail exactly the same, but make it the AFTER photo taken moments after a professional NADCA air duct cleaning — remove all of the dust, lint, debris, cobwebs and staining so every surface is spotless and clean bare metal / clean painted surface. It must look like the same real photo of the same spot, just perfectly clean. Photorealistic, no text, no watermark, no people.";

async function editImage(key, pngBuffer, instruction) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: orHeaders(key),
    body: JSON.stringify({
      model: MODEL,
      modalities: ["image", "text"],
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: instruction },
            {
              type: "image_url",
              image_url: { url: `data:image/png;base64,${pngBuffer.toString("base64")}` },
            },
          ],
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Edit ${res.status}: ${(await res.text()).slice(0, 400)}`);
  const data = await res.json();
  const url = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
  if (!url) throw new Error("No image in edit response");
  const b64 = url.split(",")[1];
  return Buffer.from(b64, "base64");
}

async function withRetry(fn, label, tries = 3) {
  for (let i = 1; i <= tries; i++) {
    try {
      return await fn();
    } catch (e) {
      console.warn(`  ${label} attempt ${i}/${tries} failed: ${e.message}`);
      if (i === tries) throw e;
      await sleep(4000 * i);
    }
  }
}

async function main() {
  loadEnvLocal();
  const key = getOpenRouterKey();
  if (!key) throw new Error("OPENROUTER_API_KEY missing");

  mkdirSync(GALLERY_DIR, { recursive: true });

  // Remove the old imported photos
  let removed = 0;
  for (const f of readdirSync(GALLERY_DIR)) {
    if (/^img-\d+\.(jpg|webp|png)$/i.test(f)) {
      rmSync(join(GALLERY_DIR, f));
      removed++;
    }
  }
  console.log(`Removed ${removed} old gallery photos`);

  const pairs = [];
  for (const scene of SCENES) {
    console.log(`Scene ${scene.slug} — before…`);
    const beforePng = await withRetry(
      () => generateImage(key, scene.before, { aspect_ratio: scene.aspect }),
      `${scene.slug} before`
    );

    console.log(`Scene ${scene.slug} — after (edit)…`);
    const afterPng = await withRetry(
      () => editImage(key, beforePng, AFTER_INSTRUCTION),
      `${scene.slug} after`
    );

    const beforeName = `ba-${scene.slug}-before.webp`;
    const afterName = `ba-${scene.slug}-after.webp`;
    const beforeWebp = sharp(beforePng).webp({ quality: 82 });
    const afterWebp = sharp(afterPng).webp({ quality: 82 });
    await beforeWebp.toFile(join(GALLERY_DIR, beforeName));
    await afterWebp.toFile(join(GALLERY_DIR, afterName));
    const meta = await sharp(join(GALLERY_DIR, afterName)).metadata();

    pairs.push({
      before: `/gallery/${beforeName}`,
      after: `/gallery/${afterName}`,
      width: meta.width,
      height: meta.height,
    });
    console.log(`  wrote ${beforeName} + ${afterName} (${meta.width}x${meta.height})`);
    await sleep(1500);
  }

  writeFileSync(OUT_JSON, JSON.stringify(pairs, null, 2) + "\n");
  console.log(`Wrote ${pairs.length} pairs to content/before-after.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
