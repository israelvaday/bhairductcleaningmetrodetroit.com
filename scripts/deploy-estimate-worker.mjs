/**
 * Ensure R2 bucket, deploy Air Duct estimate Worker, set secrets.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnvLocal } from "./openrouter-lib.mjs";

loadEnvLocal();

const DOMAIN = "bhairductcleaningmetrodetroit.com";
const R2_NAME = "bh-airduct-estimate-pdfs";

const token = (process.env.CLOUDFLARE_API_TOKEN || "").trim();
if (!token) throw new Error("Set CLOUDFLARE_API_TOKEN in .env.local");

const openRouterKey = (process.env.OPENROUTER_API_KEY || "").trim();
const adminToken = (process.env.ESTIMATE_ADMIN_TOKEN || "").trim();
if (!openRouterKey) throw new Error("Set OPENROUTER_API_KEY in .env.local");
if (!adminToken) throw new Error("Set ESTIMATE_ADMIN_TOKEN in .env.local");

const accountId = (process.env.CLOUDFLARE_ACCOUNT_ID || "").trim();
if (!accountId) throw new Error("Set CLOUDFLARE_ACCOUNT_ID in .env.local");

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const workerDir = join(ROOT, "workers", "estimate-api");
const config = join(workerDir, "wrangler.toml");
const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const env = { ...process.env, CLOUDFLARE_API_TOKEN: token };

function run(args, opts = {}) {
  const result = spawnSync(npx, ["wrangler", ...args], {
    cwd: workerDir,
    stdio: opts.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    env,
    shell: process.platform === "win32",
    encoding: "utf8",
    input: opts.input,
  });
  if (result.status !== 0 && !opts.allowFail) {
    if (opts.capture) {
      console.error(result.stdout || "");
      console.error(result.stderr || "");
    }
    process.exit(result.status ?? 1);
  }
  return result;
}

if (!existsSync(join(workerDir, "node_modules", "pdf-lib"))) {
  console.log("Installing Worker dependencies…");
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  const install = spawnSync(npm, ["install"], {
    cwd: workerDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (install.status !== 0) process.exit(install.status ?? 1);
}

console.log(`Ensuring R2 bucket ${R2_NAME}…`);
const r2Create = run(["r2", "bucket", "create", R2_NAME], { capture: true, allowFail: true });
if (r2Create.status !== 0) {
  const msg = `${r2Create.stdout || ""}\n${r2Create.stderr || ""}`;
  if (/already exists|10004/i.test(msg)) {
    console.log("R2 bucket already exists");
  } else if (/Authentication error|10000|403/i.test(msg)) {
    throw new Error(
      "CLOUDFLARE_API_TOKEN needs Account permission: Workers R2 Storage Edit (and Workers Scripts/Routes Edit). Update the token, then re-run."
    );
  } else {
    console.error(msg);
    process.exit(r2Create.status ?? 1);
  }
} else {
  console.log("R2 bucket ready");
}

const original = readFileSync(config, "utf8");
let patched = original;
if (patched.includes("account_id =")) {
  patched = patched.replace(/account_id = ".*"/, `account_id = "${accountId}"`);
} else {
  patched = patched.replace(
    'compatibility_date = "2024-08-01"',
    `compatibility_date = "2024-08-01"\naccount_id = "${accountId}"`
  );
}
writeFileSync(config, patched, "utf8");

try {
  console.log("Deploying estimate Worker…");
  run(["deploy", "--config", "wrangler.toml"]);

  for (const [name, value] of [
    ["OPENROUTER_API_KEY", openRouterKey],
    ["ADMIN_TOKEN", adminToken],
  ]) {
    const secret = spawnSync(
      npx,
      ["wrangler", "secret", "put", name, "--config", "wrangler.toml"],
      {
        cwd: workerDir,
        input: value,
        stdio: ["pipe", "inherit", "inherit"],
        env,
        shell: process.platform === "win32",
      }
    );
    if (secret.status !== 0) {
      console.error(`Failed to set secret ${name}`);
      process.exit(secret.status ?? 1);
    }
    console.log(`Secret ${name} set`);
  }
} finally {
  writeFileSync(config, original, "utf8");
}

console.log(`Estimate worker: https://${DOMAIN}/api/estimate/*`);
console.log(`Admin panel: https://${DOMAIN}/admin/estimates`);
console.log(`R2 storage: ${R2_NAME} (JSON records + PDFs)`);
