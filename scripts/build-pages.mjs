#!/usr/bin/env node
/** Static export for GitHub Pages (stash API routes during build). */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const API = path.join(ROOT, "app", "api");
const STASH = path.join(ROOT, "..", "_api_stash_build");

function run(cmd) {
  console.log("[build:pages]", cmd);
  execSync(cmd, {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_EXPORT: "1",
      NEXT_PUBLIC_GH_PAGES: "1",
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://bhairductcleaningmetrodetroit.com",
      NEXT_PUBLIC_QUOTE_API_URL:
        process.env.NEXT_PUBLIC_QUOTE_API_URL ||
        "https://bhairductcleaningmetrodetroit.com/api/quote",
      NEXT_PUBLIC_ESTIMATE_API_URL:
        process.env.NEXT_PUBLIC_ESTIMATE_API_URL ||
        "https://bhairductcleaningmetrodetroit.com/api/estimate",
    },
  });
}

if (fs.existsSync(API)) {
  if (fs.existsSync(STASH)) fs.rmSync(STASH, { recursive: true, force: true });
  fs.renameSync(API, STASH);
}

try {
  run("npx next build");
  run("node scripts/sync-static-assets.mjs");
  // Remove stale pre-rebrand sitemaps copied from public/ if present
  for (const stale of ["sitemap-0.xml"]) {
    const p = path.join(ROOT, "out", stale);
    if (fs.existsSync(p)) fs.rmSync(p);
  }
  // GitHub Pages custom domain
  fs.writeFileSync(path.join(ROOT, "out", "CNAME"), "bhairductcleaningmetrodetroit.com\n");
  // Disable Jekyll so GitHub Pages serves _next/ assets (CSS, JS)
  fs.writeFileSync(path.join(ROOT, "out", ".nojekyll"), "");
} finally {
  if (fs.existsSync(STASH) && !fs.existsSync(API)) {
    fs.renameSync(STASH, API);
  }
}
