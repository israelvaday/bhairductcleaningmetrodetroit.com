#!/usr/bin/env node
/**
 * PSI audit + suggestion log writer.
 * Writes one markdown log file per run to .psi/psi-<timestamp>.md
 * and one JSON dump to .psi/psi-<timestamp>.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ENV_FILE = path.resolve(ROOT, "..", ".env.local");
if (fs.existsSync(ENV_FILE)) {
  for (const line of fs.readFileSync(ENV_FILE, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
const KEY = process.env.GOOGLE_PSI_API_KEY;
if (!KEY) {
  console.error("GOOGLE_PSI_API_KEY missing — add it to site/.env.local");
  process.exit(1);
}

const URLS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "https://bhgaragedoormetrodetroit.com/",
      "https://bhgaragedoormetrodetroit.com/services",
      "https://bhgaragedoormetrodetroit.com/service-areas",
      "https://bhgaragedoormetrodetroit.com/gallery",
      "https://bhgaragedoormetrodetroit.com/blog",
      "https://bhgaragedoormetrodetroit.com/contact",
      "https://bhgaragedoormetrodetroit.com/quote",
    ];
const STRATEGIES = ["mobile", "desktop"];

const FIX_HINTS = {
  "render-blocking-resources": "Defer/async non-critical CSS+JS; inline only above-the-fold CSS; move third-party tags to lazy.",
  "unused-css-rules": "Tighten Tailwind safelist; split CSS per route; purge unused component styles.",
  "unused-javascript": "Code-split heavy components via next/dynamic; tree-shake; remove unused libs.",
  "modern-image-formats": "Use next/image (AVIF/WebP).",
  "uses-optimized-images": "Compress source images; lower next/image quality.",
  "uses-responsive-images": "Set proper sizes/width on next/image; don't ship 2000px hero on mobile.",
  "offscreen-images": "Add loading=lazy below the fold; only first hero is priority.",
  "uses-text-compression": "Confirm brotli/gzip on Vercel responses.",
  "uses-long-cache-ttl": "Cache-Control: public, max-age=31536000, immutable on /_next/static/*.",
  "efficient-animated-content": "Replace GIFs with mp4/webm.",
  "duplicated-javascript": "Hoist shared deps via splitChunks; npm dedupe.",
  "legacy-javascript": "Verify browserslist excludes IE11; transpilePackages narrow.",
  "preload-lcp-image": "fetchPriority=high on hero next/image; consider rel=preload.",
  "uses-rel-preconnect": "Add <link rel=preconnect> for fonts/CDNs.",
  "font-display": "Confirm font-display: swap.",
  "third-party-summary": "Defer analytics/chat with strategy='lazyOnload'.",
  "bootup-time": "Reduce client components; lazy-load animation libs.",
  "mainthread-work-breakdown": "Same as bootup-time — JS execution heavy.",
  "largest-contentful-paint-element": "Mark LCP image priority; remove JS-driven hero fade-in.",
  "cumulative-layout-shift": "Set explicit width/height on images; reserve banner space.",
  "total-byte-weight": "Combine image optimization + JS code-splitting.",
  "dom-size": "Paginate long lists; reduce decorative wrappers; virtualize.",
  "server-response-time": "TTFB high — confirm ISR/static; check Vercel function logs.",
  "non-composited-animations": "Animate transform/opacity only.",
  "uses-passive-event-listeners": "{ passive: true } on scroll/wheel/touch.",
  "image-aspect-ratio": "width/height must match natural aspect ratio.",
};

async function run(url, strategy) {
  const u = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  u.searchParams.set("url", url);
  u.searchParams.set("strategy", strategy);
  u.searchParams.set("key", KEY);
  for (const c of ["performance", "accessibility", "best-practices", "seo"]) u.searchParams.append("category", c);
  const r = await fetch(u);
  if (!r.ok) throw new Error(`${url} ${strategy} HTTP ${r.status}: ${await r.text()}`);
  return r.json();
}
const pct = (c) => (c?.score == null ? "-" : Math.round(c.score * 100));
const fmt = (a) => a?.displayValue || (a?.numericValue != null ? `${Math.round(a.numericValue)}` : "-");

const results = [];
for (const url of URLS) {
  for (const strategy of STRATEGIES) {
    process.stderr.write(`PSI: ${strategy.padEnd(7)} ${url}\n`);
    try {
      const r = await run(url, strategy);
      const cats = r.lighthouseResult.categories;
      const aud = r.lighthouseResult.audits;
      const failing = Object.entries(aud)
        .filter(([, a]) => a.score != null && a.score < 0.9)
        .map(([id, a]) => ({
          id,
          title: a.title,
          score: a.score,
          displayValue: a.displayValue,
          numericValue: a.numericValue,
          savings: a.details?.overallSavingsMs || a.details?.overallSavingsBytes || 0,
        }))
        .sort((a, b) => (b.savings || 0) - (a.savings || 0));
      results.push({
        url, strategy,
        perf: pct(cats.performance),
        a11y: pct(cats.accessibility),
        bp: pct(cats["best-practices"]),
        seo: pct(cats.seo),
        lcp: fmt(aud["largest-contentful-paint"]),
        cls: fmt(aud["cumulative-layout-shift"]),
        tbt: fmt(aud["total-blocking-time"]),
        fcp: fmt(aud["first-contentful-paint"]),
        si: fmt(aud["speed-index"]),
        failing,
      });
    } catch (e) {
      results.push({ url, strategy, error: String(e.message || e) });
    }
  }
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const outDir = path.resolve(ROOT, "..", ".psi");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, `psi-${stamp}.json`), JSON.stringify(results, null, 2));

const lines = [];
lines.push(`# PSI Audit Log — ${new Date().toISOString()}`);
lines.push("");
lines.push("## Scoreboard");
lines.push("");
lines.push("| URL | Strategy | Perf | A11y | BP | SEO | LCP | CLS | TBT | FCP | SI |");
lines.push("|---|---|---|---|---|---|---|---|---|---|---|");
for (const r of results) {
  if (r.error) { lines.push(`| ${r.url} | ${r.strategy} | ERROR: ${r.error} | | | | | | | | |`); continue; }
  lines.push(`| ${r.url.replace("https://bhgaragedoormetrodetroit.com", "") || "/"} | ${r.strategy} | ${r.perf} | ${r.a11y} | ${r.bp} | ${r.seo} | ${r.lcp} | ${r.cls} | ${r.tbt} | ${r.fcp} | ${r.si} |`);
}

const issueAgg = new Map();
for (const r of results) {
  if (r.error || !r.failing) continue;
  for (const f of r.failing) {
    if (!issueAgg.has(f.id)) issueAgg.set(f.id, { id: f.id, title: f.title, totalSavings: 0, count: 0, pages: [] });
    const a = issueAgg.get(f.id);
    a.totalSavings += f.savings || 0;
    a.count += 1;
    a.pages.push(`${r.strategy} ${r.url.replace("https://bhgaragedoormetrodetroit.com", "") || "/"}${f.displayValue ? ` (${f.displayValue})` : ""}`);
  }
}
const ranked = [...issueAgg.values()].sort((a, b) => b.totalSavings - a.totalSavings || b.count - a.count);

lines.push("");
lines.push("## Top Issues (ranked by aggregate savings × pages affected)");
lines.push("");
for (const issue of ranked.slice(0, 25)) {
  lines.push(`### \`${issue.id}\` — ${issue.title}`);
  lines.push(`- Affected: **${issue.count}** page/strategy combos`);
  if (issue.totalSavings > 0) lines.push(`- Aggregate potential savings: **${Math.round(issue.totalSavings)}** (ms or bytes)`);
  const hint = FIX_HINTS[issue.id];
  lines.push(`- **Proposed fix:** ${hint || "_(no predefined hint — manual investigation)_"}`);
  lines.push(`- Pages: ${issue.pages.slice(0, 8).join(" · ")}${issue.pages.length > 8 ? " · …" : ""}`);
  lines.push("");
}

const ok = results.filter((r) => !r.error);
const avg = (k) => (ok.length ? Math.round(ok.reduce((s, r) => s + r[k], 0) / ok.length) : 0);
const mn = (k) => (ok.length ? Math.min(...ok.map((r) => r[k])) : 0);
lines.push("## Summary");
lines.push("");
lines.push(`- Perf  — avg ${avg("perf")}, min ${mn("perf")}`);
lines.push(`- A11y  — avg ${avg("a11y")}, min ${mn("a11y")}`);
lines.push(`- BP    — avg ${avg("bp")}, min ${mn("bp")}`);
lines.push(`- SEO   — avg ${avg("seo")}, min ${mn("seo")}`);

const logPath = path.join(outDir, `psi-${stamp}.md`);
fs.writeFileSync(logPath, lines.join("\n"));
console.log(`\nSaved: ${path.relative(process.cwd(), logPath)}`);
console.log(`Perf avg ${avg("perf")} min ${mn("perf")} | A11y ${avg("a11y")}/${mn("a11y")} | BP ${avg("bp")}/${mn("bp")} | SEO ${avg("seo")}/${mn("seo")}`);
