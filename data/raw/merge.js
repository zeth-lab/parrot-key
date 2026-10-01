// 4단계: 견본 26종 + 추출된 배치들을 합쳐 data/species.js 재생성
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const SPECIES_PATH = path.join(ROOT, "data", "species.js");
const RAW_DIR = path.join(__dirname);

// 1) 기존 species.js에서 헤더 주석 추출
const srcText = fs.readFileSync(SPECIES_PATH, "utf-8");
const headerMatch = srcText.match(/^\/\*[\s\S]*?\*\//);
if (!headerMatch) throw new Error("header comment not found in species.js");
const header = headerMatch[0];

// 2) 기존 26종 로드 (base/looks는 절대 건드리지 않음)
globalThis.window = globalThis;
delete require.cache[require.resolve(SPECIES_PATH)];
require(SPECIES_PATH);
const existing = SPECIES.map(s => Object.assign({}, s)); // shallow copy, base/looks reference preserved

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
