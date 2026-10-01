// 4단계: 견본 26종 + 추출된 배치들을 합쳐 data/species.js 재생성
// 재실행해도 안전하도록(idempotent), 견본 26종은 항상 최초 커밋(a18b9cc)의
// data/species.js에서 읽는다 — 현재 data/species.js는 이미 병합된 415종을
//담고 있을 수 있으므로 "존재하는 파일"을 그대로 신뢰하지 않는다.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const SPECIES_PATH = path.join(ROOT, "data", "species.js");
const RAW_DIR = path.join(__dirname);
const ORIGINAL_COMMIT = "a18b9cc";

// 1) 최초 커밋의 species.js 원본 텍스트 (헤더 주석 + 견본 26종)
const srcText = execFileSync("git", ["show", `${ORIGINAL_COMMIT}:data/species.js`], { cwd: ROOT, encoding: "utf-8" });

const headerMatch = srcText.match(/^\/\*[\s\S]*?\*\//);
if (!headerMatch) throw new Error("header comment not found in original species.js");
const header = headerMatch[0];

// 2) 기존 26종 로드 (base/looks는 절대 건드리지 않음)
globalThis.window = globalThis;
globalThis.SPECIES = undefined;
new Function("window", srcText)(globalThis);
const existing = globalThis.SPECIES.map(s => Object.assign({}, s)); // shallow copy, base/looks reference preserved
if (existing.length !== 26) throw new Error(`expected 26 original species, got ${existing.length}`);

// 3) taxa.json에서 기존 종에 photo/en 보강
const taxa = JSON.parse(fs.readFileSync(path.join(RAW_DIR, "taxa.json"), "utf-8"));
const taxaBySci = new Map(taxa.map(t => [t.sci, t]));
let enrichedPhoto = 0, enrichedEn = 0;
for (const s of existing) {
  const t = taxaBySci.get(s.sci);
  if (!t) continue;
  if (!s.photo && t.photo) { s.photo = t.photo; enrichedPhoto++; }
  if (!s.en && t.en) { s.en = t.en; enrichedEn++; }
}

// 4) 배치 파일들 로드
const batchFiles = fs.readdirSync(RAW_DIR).filter(f => /^batch-\d+\.json$/.test(f)).sort();
let newSpecies = [];
for (const f of batchFiles) {
  const arr = JSON.parse(fs.readFileSync(path.join(RAW_DIR, f), "utf-8"));
  newSpecies = newSpecies.concat(arr);
}

// 5) ko 보정 (없으면 en으로 대체 + koMissing 표시), extinct/wikipedia_url 정리
for (const s of newSpecies) {
  if (!s.ko) { s.ko = s.en || s.sci; s.koMissing = true; }
  if (!s.extinct) delete s.extinct;
  if (s.koMissing === false) delete s.koMissing;
}

// 6) id 중복 체크
const allIds = existing.map(s => s.id).concat(newSpecies.map(s => s.id));
const seen = new Set(), dupes = new Set();
allIds.forEach(id => { if (seen.has(id)) dupes.add(id); seen.add(id); });
if (dupes.size) {
  console.error("ID COLLISIONS:", [...dupes]);
  process.exit(1);
}

const finalList = existing.concat(newSpecies);

// 7) data/species.js 재작성
function stringifySpecies(arr) {
  return "[\n" + arr.map(s => JSON.stringify(s, null, 1).replace(/\n/g, "\n")).join(",\n") + "\n]";
}

const out = header + "\nwindow.SPECIES = " + JSON.stringify(finalList, null, 1) + ";\n";
fs.writeFileSync(SPECIES_PATH, out, "utf-8");

console.log(`existing species kept: ${existing.length} (photo enriched: ${enrichedPhoto}, en enriched: ${enrichedEn})`);
console.log(`new species merged: ${newSpecies.length} (from ${batchFiles.length} batch files)`);
console.log(`TOTAL species in species.js: ${finalList.length}`);
