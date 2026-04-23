// Unpacks base/index.html (a self-extracting bundle) into base/_unpacked/
// Format: 3 <script> blocks — manifest (uuid -> {data: base64, mime, compressed}),
// ext_resources (uuid -> id mapping), template (HTML with uuid placeholders).

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { extname } from "node:path";

const SRC = "base/index.html";
const OUT = "base/_unpacked";

const html = readFileSync(SRC, "utf8");

function extractScript(type) {
  const re = new RegExp(
    `<script[^>]*type=["']${type.replace("/", "\\/")}["'][^>]*>([\\s\\S]*?)<\\/script>`,
    "i",
  );
  const m = html.match(re);
  if (!m) throw new Error(`Missing script type=${type}`);
  return m[1];
}

const manifest = JSON.parse(extractScript("__bundler/manifest"));
const template = JSON.parse(extractScript("__bundler/template"));
const extResources = JSON.parse(extractScript("__bundler/ext_resources"));

const uuids = Object.keys(manifest);
console.log(`Found ${uuids.length} assets in manifest.`);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/assets`, { recursive: true });

const mimeExt = {
  "text/html": ".html",
  "text/css": ".css",
  "text/javascript": ".js",
  "application/javascript": ".js",
  "application/json": ".json",
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/svg+xml": ".svg",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "font/woff": ".woff",
  "font/woff2": ".woff2",
  "font/ttf": ".ttf",
  "font/otf": ".otf",
};

// uuid -> external id (filename hint)
const uuidToId = {};
for (const r of extResources) uuidToId[r.uuid] = r.id;

// Decode all assets, save to disk, build uuid -> relative path map
const uuidToPath = {};
for (const uuid of uuids) {
  const entry = manifest[uuid];
  const bin = Buffer.from(entry.data, "base64");
  const bytes = entry.compressed ? gunzipSync(bin) : bin;

  let name = uuidToId[uuid] || uuid;
  // Strip query/hash, keep last path segment
  name = name.split(/[?#]/)[0].split("/").pop() || uuid;
  let ext = extname(name);
  if (!ext) {
    ext = mimeExt[entry.mime] || ".bin";
    name = `${uuid}${ext}`;
  }

  const rel = `assets/${name}`;
  writeFileSync(`${OUT}/${rel}`, bytes);
  uuidToPath[uuid] = rel;
}

// Replace uuids in template with relative paths
let outHtml = template;
for (const uuid of uuids) {
  outHtml = outHtml.split(uuid).join(uuidToPath[uuid]);
}

writeFileSync(`${OUT}/index.html`, outHtml);
writeFileSync(
  `${OUT}/_manifest.json`,
  JSON.stringify(
    { count: uuids.length, files: uuidToPath, ext: uuidToId },
    null,
    2,
  ),
);

console.log(`✔ Unpacked to ${OUT}/`);
console.log(`  index.html: ${outHtml.length} bytes`);
