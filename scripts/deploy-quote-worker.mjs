/**
 * Deploy the Cloudflare quote API worker using credentials from .env.local.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnvLocal } from "./openrouter-lib.mjs";

loadEnvLocal();

const DOMAIN = "bhairductcleaningmetrodetroit.com";
const API = "https://api.cloudflare.com/client/v4";

const workersToken = (process.env.CLOUDFLARE_API_TOKEN || "").trim();
const lookupToken =
  process.env.CLOUDFLARE_DNS_API_TOKEN ||
  workersToken ||
  "";

if (!workersToken) {
  throw new Error(
    "Set CLOUDFLARE_API_TOKEN (Workers Scripts Edit + Workers Routes Edit) in .env.local"
  );
}

async function cf(token, path) {
  const response = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    const messages = (payload.errors || []).map((e) => e.message);
    throw new Error(messages.join("; ") || `Cloudflare ${response.status} ${path}`);
  }
  return payload.result;
}

async function resolveAccountId() {
  const configured = (process.env.CLOUDFLARE_ACCOUNT_ID || "").trim();
  if (configured && !configured.includes("REPLACE")) {
    return configured;
  }

  if (!lookupToken) {
    throw new Error("Set CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_DNS_API_TOKEN for zone lookup");
  }

  let zoneId = (process.env.CLOUDFLARE_ZONE_ID || "").trim();
  if (zoneId) {
    const zone = await cf(lookupToken, `/zones/${zoneId}`);
    if (zone?.name === DOMAIN && zone?.account?.id) {
      return zone.account.id;
    }
  }

  const matches = await cf(
    lookupToken,
    `/zones?name=${encodeURIComponent(DOMAIN)}&status=active`
  );
  if (!Array.isArray(matches) || matches.length !== 1) {
    throw new Error(
      `Could not resolve Cloudflare account for ${DOMAIN}. Set CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_ZONE_ID.`
    );
  }
  console.log(`Using discovered Cloudflare zone for ${DOMAIN}`);
  return matches[0].account?.id || "";
}

const accountId = await resolveAccountId();
if (!accountId) {
  throw new Error("Set CLOUDFLARE_ACCOUNT_ID in .env.local or fix zone token scope");
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = join(ROOT, "workers", "quote-api", "wrangler.toml");
const original = readFileSync(config, "utf8");
const patched = original.includes("account_id =")
  ? original.replace(/account_id = ".*"/, `account_id = "${accountId}"`)
  : original.replace(
      'compatibility_date = "2024-08-01"',
      `compatibility_date = "2024-08-01"\naccount_id = "${accountId}"`
    );

writeFileSync(config, patched, "utf8");

try {
  const result = spawnSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["wrangler", "deploy", "--config", config],
    {
      cwd: ROOT,
      stdio: "inherit",
      env: { ...process.env, CLOUDFLARE_API_TOKEN: workersToken },
      shell: process.platform === "win32",
    }
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
} finally {
  writeFileSync(config, original, "utf8");
}

console.log("Quote worker deployed at /api/quote → israelvaday97@gmail.com + oren.siyonov@gmail.com");
