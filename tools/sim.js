// 시뮬레이션: node tools/sim.js [잡음비율 0~1]
// 모든 모습에 대해 '정직하게' 답했을 때 몇 번째 질문에서 1위(확률 62% 이상)가 되는지 잰다.
globalThis.window = globalThis;
require("../data/species.js"); require("../engine.js");
const { createEngine, valueOf } = ParrotKey;
const E = createEngine(SPECIES);
const noise = +(process.argv[2] || 0);
let ok = 0, top5 = 0, qsum = 0; const fails = [];
for (const l of E.looks) {
  const ans = []; let found = 0;
  for (let i = 0; i < 18; i++) {
    const n = E.nextQuestion(ans); if (!n) break;
    let v = valueOf(l, n.q.id); v = v == null ? "skip" : Array.isArray(v) ? v[0] : v;
    if (noise && Math.random() < noise) v = n.q.options[Math.floor(Math.random() * n.q.options.length)].v;
    ans.push({ qid: n.q.id, ans: v });
    const t = E.ranking(ans).list[0];
    if (t.si === l.si && t.p >= 0.62) { found = i + 1; break; }
  }
  const rank = E.ranking(ans).list.findIndex(x => x.si === l.si) + 1;
  if (found) { ok++; qsum += found; } else fails.push(`${l.sp.ko} (${l.label}) → 최종 ${rank}위`);
  if (rank <= 5) top5++;
}
console.log(`모습 ${E.looks.length}개 · 1위 도달 ${ok} · 5위 안 ${top5} · 평균 질문 ${(qsum / Math.max(1, ok)).toFixed(1)}개 (잡음 ${noise})`);
fails.slice(0, 40).forEach(f => console.log(" ✗ " + f));
