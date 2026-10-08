// 가상 사용자 시뮬레이션: node tools/sim2.js <engine 파일> [old|new] [반복 수]
// 사람은 실제 색을 "조명에 따라 다르게" 보고, 화면에 보이는 깃털 중 가장 비슷한 것을 고른다.
// old = 지금 사이트처럼 그럴듯한 색만 보여줌, new = 기준색 전부 보여줌
globalThis.window = globalThis;
const path = require("path");
require("../data/species.js");
try { require("../data/color-fix.js"); } catch (e) {}
const engFile = process.argv[2] || "../engine.js", mode = process.argv[3] || "new", reps = +(process.argv[4] || 2);
require("../engine.js"); const NK = globalThis.ParrotKey;
const truthEngine = NK.createEngine(SPECIES, { fix: globalThis.COLOR_FIX || {} });
delete require.cache[path.resolve(__dirname, engFile)];
require(path.resolve(__dirname, engFile));
const K = globalThis.ParrotKey;
if (process.env.PERC && K.PERCEPT) Object.assign(K.PERCEPT, JSON.parse(process.env.PERC));
const E = K.createEngine(SPECIES, { opening: ["main"], ease: { size: 0.15 }, fix: mode === "old" ? {} : undefined });
E.looks.forEach(l => { if (l.sp.extinct) l.prior *= 0.25; });

// 평가용 색 좌표 (엔진과 독립적으로 계산)
function lab(h) { const n = parseInt(h.slice(1), 16); const lin = x => { x /= 255; return x <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4); };
  const r = lin(n >> 16), g = lin((n >> 8) & 255), b = lin(n & 255);
  const l = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b), m = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b), s = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
  return [.2104542553 * l + .793617785 * m - .0040720468 * s, 1.9779984951 * l - 2.428592205 * m + .4505937099 * s, .0259040371 * l + .7827717662 * m - .808675766 * s]; }
// 진짜 색: 데이터의 (보정 포함) 비율에서 뽑는다. 보정 데이터가 있으면 그것이 정답
const TRUE_HEX = { w:"#f6f4ee", gr:"#9b9e9a", k:"#2b2a28", br:"#8b5b3c", ol:"#7d8538", g:"#3d8a4c", lg:"#9cc43f", y:"#f1c533", o:"#ea8a2d", r:"#cf3b2e", p:"#ef9db4", v:"#7556a3", nv:"#25336e", b:"#2c5cb0", sb:"#7cbbe2", tl:"#1f978c" };
let seed = 1; const R = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const gauss = () => Math.sqrt(-2 * Math.log(R() + 1e-12)) * Math.cos(2 * Math.PI * R());
const truthLooks = truthEngine.looks;
// 데이터 오류: 부위 라벨의 ERR 비율은 실제로는 '바로 옆 색'(예: 갈색으로 적었지만 실제는 올리브)
const ERR = +(process.env.ERR || 0);
const NEIGH = Object.fromEntries(Object.keys(TRUE_HEX).map(c => { const L0 = lab(TRUE_HEX[c]); let b = null, bd = 1e9;
  for (const d of Object.keys(TRUE_HEX)) { if (d === c) continue; const L = lab(TRUE_HEX[d]); const x = (L[0] - L0[0]) ** 2 + (L[1] - L0[1]) ** 2 + (L[2] - L0[2]) ** 2; if (x < bd) { bd = x; b = d; } } return [c, b]; }));
const hash = str => { let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; };
function trueWeights(i, qid) {
  const w0 = trueWeights0(i, qid);
  if (!ERR || !w0 || w0 === "none" || hash(i + ":" + qid) >= ERR) return w0;
  const w = {}; for (const c in w0) { const n = NEIGH[c]; w[n] = (w[n] || 0) + w0[c]; } return w;
}
function trueWeights0(i, qid) {
  const l = truthLooks[i], a = l.a;
  if (qid === "crestColor") { if (!a.crest) return "none"; const w = l.W.crestColor || l.W.crown; return w || null; }
  const w = l.W[qid]; if (w == null) return null; if (w === "none") return "none"; return w;
}
function seeColor(w) { // 비율대로 한 색을 고르고 조명 잡음을 더한다
  let x = R(), c = Object.keys(w)[0]; for (const k in w) { x -= w[k]; if (x <= 0) { c = k; break; } }
  const L = lab(TRUE_HEX[c]); const cs = 0.7 + R() * 0.35;
  return [Math.min(1, Math.max(0, L[0] + gauss() * 0.08)), L[1] * cs + gauss() * 0.02, L[2] * cs + gauss() * 0.02];
}
function displayed(q, ans) {
  if (mode === "new") return q.options.map(o => o.v);
  // 지금 사이트: 후보들에게서 나올 확률 2.5% 이상인 색만 깃털로 보여준다
  const lw = E.posterior(ans), P = q.options.map(() => 0);
  E.looks.forEach((l, i) => { if (lw[i] < 1e-6) return; const L = q.options.map(o => K.likelihood(q, l, o.v)); const Z = L.reduce((a, b) => a + b, 0); L.forEach((x, k) => P[k] += lw[i] * x / Z); });
  let keep = q.options.filter((o, k) => P[k] >= .025);
  if (keep.length < 3) keep = q.options.map((o, k) => ({ o, p: P[k] })).sort((a, b) => b.p - a.p).slice(0, 3).map(x => x.o);
  return keep.map(o => o.v);
}
function answer(i, q, ans) {
  const look = E.looks[i];
  if (q.kind === "color" || q.kind === "colorOrNone") {
    const w = trueWeights(i, q.id); if (w == null) return "skip";
    const shown = displayed(q, ans);
    if (w === "none") return shown.includes("none") ? "none" : "skip";
    if (R() < 0.05) return shown[Math.floor(R() * shown.length)];          // 실수
    const seen = seeColor(w); let best = "skip", bd = 1e9;
    for (const c of shown) { if (!TRUE_HEX[c]) continue; const L = lab(TRUE_HEX[c]); const d = (L[0] - seen[0]) ** 2 + (L[1] - seen[1]) ** 2 + (L[2] - seen[2]) ** 2; if (d < bd) { bd = d; best = c; } }
    return best;
  }
  let v = K.valueOf(look, q.id); if (v == null) return "skip"; if (Array.isArray(v)) v = v[0];
  if (q.kind === "ordinal" && R() < 0.1) { const o = q.options.map(x => x.v), k = o.indexOf(v); const n = Math.max(0, Math.min(o.length - 1, k + (R() < .5 ? -1 : 1))); return o[n]; }
  return v;
}
let ok = 0, top1 = 0, top5 = 0, qsum = 0, n = 0; const failCount = {};
for (let rep = 0; rep < reps; rep++) {
  seed = 1 + rep * 7777;
  E.looks.forEach((l, i) => {
    const ans = []; let found = 0, cmpAt = null;
    for (let s = 0; s < 18; s++) {
      // 사진 비교 단계 (COMPARE=1): 후보 2~3종이면 사진을 보여주고, 정답이 있으면 85% 확률로 알아본다
      if (process.env.COMPARE) {
        const L = E.ranking(ans).list, close = L.slice(0, 3).filter(c => c.p >= .05), mass = L.slice(0, 3).reduce((a, c) => a + c.p, 0);
        if (ans.length >= 5 && close.length >= 2 && mass >= .8 && L[0].p < .62 && (cmpAt == null || ans.length - cmpAt >= 3)) {
          cmpAt = ans.length;
          if (close.some(c => c.si === l.si) && R() < .85) { found = ans.length; break; }
        }
      }
      const nq = E.nextQuestion(ans); if (!nq) break;
      ans.push({ qid: nq.q.id, ans: answer(i, nq.q, ans) });
      const t = E.ranking(ans).list[0];
      if (s >= 2 && t.p >= 0.62) { found = s + 1; break; }
    }
    const list = E.ranking(ans).list, rank = list.findIndex(x => x.si === l.si) + 1;
    const hit = found && (process.env.COMPARE ? (list[0].si === l.si || cmpAt === found) : list[0].si === l.si);
    n++; if (hit) { ok++; qsum += found; } else failCount[l.sp.ko] = (failCount[l.sp.ko] || 0) + 1;
    if (rank === 1) top1++; if (rank <= 5) top5++;
  });
}
const pct = x => (100 * x / n).toFixed(1) + "%";
console.log(JSON.stringify({ compare: !!process.env.COMPARE, err: ERR, perc: process.env.PERC || "", engine: path.basename(engFile), mode, runs: n, found_correct: pct(ok), top1: pct(top1), top5: pct(top5), avgQ: (qsum / Math.max(1, ok)).toFixed(1) }));
if (process.argv[5] === "fails") console.log(Object.entries(failCount).sort((a, b) => b[1] - a[1]).slice(0, 30).map(x => x.join(":")).join("  "));
