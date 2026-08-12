const url = process.argv[2];
const html = await fetch(url).then((r) => r.text());
const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(srcs)];
console.log("img tags:", srcs.length, "unique:", unique.length);
for (const s of unique) {
  const full = s.startsWith("http") ? s : new URL(s, url).href;
  const res = await fetch(full, { method: "HEAD" });
  console.log(res.status, s);
}
