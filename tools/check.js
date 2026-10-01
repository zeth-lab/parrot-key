// 데이터 검사: node tools/check.js
globalThis.window = globalThis;
require("../data/species.js"); require("../engine.js");
const OK = new Set(ParrotKey.ALL);
const errs = [], ids = new Set();
const colorKeys = ["main","crown","forehead","face","throat","breast","belly","back","wing","tail","beak","crestColor"];
for (const s of SPECIES) {
  const where = s.id || s.sci;
  if (!s.id || !s.ko || !s.sci || !s.base || !Array.isArray(s.looks) || !s.looks.length) errs.push(where + ": 필수 칸 누락");
  if (ids.has(s.id)) errs.push(where + ": id 중복"); ids.add(s.id);
  if (!(s.sizeCm > 0)) errs.push(where + ": sizeCm 없음");
  for (const l of s.looks || []) {
    const a = Object.assign({}, s.base, l);
    for (const k of colorKeys) {
      const v = a[k]; if (v == null) continue;
      if (!Array.isArray(v)) { errs.push(`${where}/${l.label}: ${k} 는 배열이어야 함`); continue; }
      v.forEach(c => { if (!OK.has(c)) errs.push(`${where}/${l.label}: ${k} 에 모르는 색 '${c}'`); });
    }
    for (const k of ["cheek","collar"]) { const v = a[k]; if (v != null && v !== "none" && !(Array.isArray(v) && v.every(c => OK.has(c)))) errs.push(`${where}/${l.label}: ${k} 값 오류`); }
    if (a.eyeSkin && !["face","ring","none"].includes(a.eyeSkin)) errs.push(`${where}: eyeSkin 값 오류`);
    if (a.tailShape && !["long","mid","short"].includes(a.tailShape)) errs.push(`${where}: tailShape 값 오류`);
    if (a.pattern && !["plain","barred","scaled"].includes(a.pattern)) errs.push(`${where}: pattern 값 오류`);
  }
}
const nulls = SPECIES.filter(s => ["main","breast","wing","beak"].some(k => s.base[k] == null)).length;
console.log(`종 ${SPECIES.length}개 / 오류 ${errs.length}개 / 핵심 칸 빈 종 ${nulls}개 / 사진 있는 종 ${SPECIES.filter(s=>s.photo).length}개`);
errs.slice(0, 50).forEach(e => console.log(" - " + e));
process.exit(errs.length ? 1 : 0);
