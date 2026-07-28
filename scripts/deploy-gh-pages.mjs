#!/usr/bin/env node
/**
 * Push site/out/ to the gh-pages branch (GitHub Pages live site).
 * Usage: npm run build:pages && node scripts/deploy-gh-pages.mjs
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const REMOTE = "https://github.com/israelvaday/bhgaragedoormetrodetroit.com.git";

if (!fs.existsSync(OUT)) {
  console.error("[deploy-gh-pages] out/ missing — run: npm run build:pages");
  process.exit(1);
}

run("node scripts/compress-deploy-assets.mjs");

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "bh-garage-door-gh-pages-"));
const repo = path.join(tmp, "repo");

function run(cmd, opts = {}) {
  console.log("[deploy-gh-pages]", cmd);
  execSync(cmd, { stdio: "inherit", ...opts });
}

try {
  run(`git clone --depth 1 --branch gh-pages ${REMOTE} "${repo}"`, {
    env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
  });
} catch {
  fs.mkdirSync(repo, { recursive: true });
  run("git init", { cwd: repo });
  run(`git remote add origin ${REMOTE}`, { cwd: repo });
  run("git checkout -b gh-pages", { cwd: repo });
}

for (const entry of fs.readdirSync(repo)) {
  if (entry === ".git") continue;
  fs.rmSync(path.join(repo, entry), { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    if (fs.statSync(from).isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

copyDir(OUT, repo);

const gitEnv = {
  ...process.env,
  GIT_AUTHOR_NAME: process.env.GIT_AUTHOR_NAME || "israelvaday",
  GIT_AUTHOR_EMAIL: process.env.GIT_AUTHOR_EMAIL || "israelvaday97@gmail.com",
  GIT_COMMITTER_NAME: process.env.GIT_COMMITTER_NAME || "israelvaday",
  GIT_COMMITTER_EMAIL: process.env.GIT_COMMITTER_EMAIL || "israelvaday97@gmail.com",
  GIT_HTTP_LOW_SPEED_LIMIT: "0",
  GIT_HTTP_LOW_SPEED_TIME: "999999",
};

function pushWithRetry(cwd) {
  const pushCmd =
    'git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push origin gh-pages';
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      run(pushCmd, { cwd, env: gitEnv });
      return;
    } catch (e) {
      if (attempt === 4) throw e;
      const wait = attempt * 15;
      console.warn(`[deploy-gh-pages] Push attempt ${attempt} failed — retrying in ${wait}s…`);
      execSync(`powershell -Command "Start-Sleep -Seconds ${wait}"`, { stdio: "inherit" });
    }
  }
}

run("git add -A", { cwd: repo, env: gitEnv });
try {
  run("git diff --staged --quiet", { cwd: repo, env: gitEnv });
  console.log("[deploy-gh-pages] No changes to deploy.");
} catch {
  run('git commit -m "Deploy: BH Garage Door Metro Detroit"', { cwd: repo, env: gitEnv });
  pushWithRetry(repo);
  console.log("[deploy-gh-pages] Live site updated on gh-pages.");
}

fs.rmSync(tmp, { recursive: true, force: true });
