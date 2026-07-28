// Builds favicon/app icons from the generated logo and hero videos from the
// generated hero still. Run after openrouter-generate-site.mjs.
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FFMPEG = ffmpegInstaller.path;

async function icons() {
  const logo = join(ROOT, "public/logo.png");
  if (!existsSync(logo)) throw new Error("public/logo.png missing");

  // Optimized site logo (the raw generation is ~1.8 MB)
  const buf = await sharp(logo).resize(512, 512, { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer();
  try {
    writeFileSync(join(ROOT, "public/logo.png"), buf);
    console.log("wrote public/logo.png (512)");
  } catch {
    writeFileSync(join(ROOT, "public/logo-optimized.png"), buf);
    console.log("logo.png locked — wrote public/logo-optimized.png instead");
  }

  await sharp(buf).resize(512, 512).png().toFile(join(ROOT, "app/icon.png"));
  console.log("wrote app/icon.png");
  await sharp(buf).resize(180, 180).png().toFile(join(ROOT, "app/apple-icon.png"));
  console.log("wrote app/apple-icon.png");
}

function videos() {
  const still = join(ROOT, "public/video/hero-still.png");
  if (!existsSync(still)) throw new Error("public/video/hero-still.png missing");
  mkdirSync(join(ROOT, "public/video"), { recursive: true });

  // Poster (fast first paint)
  execFileSync(FFMPEG, [
    "-y", "-i", still,
    "-vf", "scale=1600:-2",
    "-quality", "80",
    join(ROOT, "public/video/hero-poster.webp"),
  ]);
  console.log("wrote hero-poster.webp");

  // Slow Ken Burns zoom, 12 s loop, desktop 1080p
  const zoom = (w, h, out, crf) =>
    execFileSync(FFMPEG, [
      "-y", "-loop", "1", "-framerate", "30", "-i", still,
      "-vf",
      `scale=${w * 2}:-2,zoompan=z='min(zoom+0.0004,1.15)':d=360:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${w}x${h}:fps=30,format=yuv420p`,
      "-t", "12", "-c:v", "libx264", "-preset", "slow", "-crf", String(crf),
      "-movflags", "+faststart", "-an",
      out,
    ]);

  zoom(1920, 1080, join(ROOT, "public/video/hero-garage.mp4"), 26);
  console.log("wrote hero-garage.mp4");
  zoom(960, 540, join(ROOT, "public/video/hero-garage-mobile.mp4"), 28);
  console.log("wrote hero-garage-mobile.mp4");
}

await icons();
videos();
console.log("brand assets done");
