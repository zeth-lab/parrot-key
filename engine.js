/*
  앵무새 검색 도감 — 검색 엔진 (아키네이터 방식)
  ─────────────────────────────────────────────
  1) 모든 "모습(look)"에 확률을 준다. 처음엔 종마다 똑같이.
  2) 답을 받으면, 그 답이 각 모습과 얼마나 맞는지(우도)를 곱한다.
     틀린 답이어도 0이 되지 않게 최소값을 둬서, 실수 한 번에 정답이 사라지지 않는다.
  3) 다음 질문은 "답을 듣고 나면 후보가 가장 많이 줄어드는" 질문을 고른다 (기대 정보량).
*/
(function (root) {
  // 기준색 16개. 깃털 부채에 이 순서대로 펼친다 (이웃한 깃털 = 비슷한 색)
  const COLORS = {
    w:  { ko: "흰색",   hex: "#f6f4ee" },
    gr: { ko: "회색",   hex: "#9b9e9a" },
    k:  { ko: "검정",   hex: "#2b2a28" },
    br: { ko: "갈색",   hex: "#8b5b3c" },
    ol: { ko: "올리브", hex: "#7d8538" },
    g:  { ko: "초록",   hex: "#3d8a4c" },
    lg: { ko: "연두",   hex: "#9cc43f" },
    y:  { ko: "노랑",   hex: "#f1c533" },
    o:  { ko: "주황",   hex: "#ea8a2d" },
    r:  { ko: "빨강",   hex: "#cf3b2e" },
    p:  { ko: "분홍",   hex: "#ef9db4" },
    v:  { ko: "보라",   hex: "#7556a3" },
    nv: { ko: "남색",   hex: "#25336e" },
    b:  { ko: "파랑",   hex: "#2c5cb0" },
    sb: { ko: "하늘",   hex: "#7cbbe2" },
    tl: { ko: "청록",   hex: "#1f978c" }
  };
  const ALL = Object.keys(COLORS);

  /* ── 색 지각 모델 ──
     사람 눈에 맞춘 색 공간(OKLab)에서 거리를 잰다.
     밝기(L) 차이는 조명·그늘 때문에 흔하므로 덜 따지고, 색상·채도 차이는 엄격하게 따진다.
     "실제 색이 a인 부위를 보고 사람이 c를 고를 확률" = 선택지 전체에 대해 정규화한 가우시안. */
  function hex2lab(h) {
    const n = parseInt(h.slice(1), 16);
    const lin = x => { x /= 255; return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); };
    const r = lin(n >> 16), g = lin((n >> 8) & 255), b = lin(n & 255);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s];
  }
  const LAB = Object.fromEntries(ALL.map(c => [c, hex2lab(COLORS[c].hex)]));
  const PERCEPT = { wL: 0.55, sigma: 0.08, lapse: 0.01, floor: 0.05, mode: "max" };   // tools/sim2.js 로 맞춘 값   // 밝기 가중, 허용폭, 아무렇게나 고를 확률
  const chroma = A => Math.hypot(A[1], A[2]);
  function percDist2(A, B) {
    // 무채색끼리(흰·회·검)는 빛을 받으면 서로 넘나든다 → 밝기 차이를 더 봐준다
    const wl = chroma(A) < 0.05 && chroma(B) < 0.05 ? PERCEPT.wL * 0.55 : PERCEPT.wL;
    const dL = (A[0] - B[0]) * wl, da = A[1] - B[1], db = A[2] - B[2];
    return dL * dL + da * da + db * db;
  }
  // 선택지 묶음마다 혼동 행렬을 한 번만 만든다
  const confCache = new Map();
  function confusion(opts) {
    const key = opts.join(",");
    if (confCache.has(key)) return confCache.get(key);
    const M = {};
    for (const a of ALL) {
      const row = opts.map(c => Math.exp(-percDist2(LAB[a], LAB[c]) / (2 * PERCEPT.sigma * PERCEPT.sigma)));
      const Z = row.reduce((x, y) => x + y, 0);
      M[a] = Object.fromEntries(opts.map((c, i) => [c, (1 - PERCEPT.lapse) * row[i] / Z + PERCEPT.lapse / opts.length]));
    }
    confCache.set(key, M);
    return M;
  }
  // 범주 라벨 배열 → 기준색 비율. 앞의 색일수록 넓게 보인다
  const SPLIT = [[1], [0.65, 0.35], [0.55, 0.3, 0.15], [0.5, 0.25, 0.15, 0.1]];
  function toWeights(v) {
    if (v == null || v === "none") return v;
    if (!Array.isArray(v)) return v;                       // 이미 {색: 비율}
    const sp = SPLIT[Math.min(v.length, 4) - 1], w = {};
    v.slice(0, 4).forEach((c, i) => { w[c] = (w[c] || 0) + sp[i]; });
    return w;
  }
  // 옛 함수 이름 유지 (화면 코드에서 씀): 두 색이 얼마나 비슷하게 보이는지 0~1
  function colorSim(a, b) { return Math.exp(-percDist2(LAB[a], LAB[b]) / (2 * PERCEPT.sigma * PERCEPT.sigma)); }

  const UNKNOWN = 0.3;       // 데이터가 비어 있는 칸

  const opt = (v, label, sub) => ({ v, label, sub });
  const colorOpts = list => list.map(c => opt(c, COLORS[c].ko));

  const QUESTIONS = [
    { id: "main", kind: "color", part: ["all"], q: "내 몸에서 가장 넓게 보이는 색은 뭘까?", hint: "날개·등·가슴을 합쳐 제일 많이 보이는 색 하나", options: colorOpts(ALL) },
    { id: "size", kind: "ordinal", part: ["all"], q: "내 크기는 어느 정도일까?", hint: "부리 끝에서 꼬리 끝까지. 사진 속 손이나 나뭇가지와 비교해 보세요",
      options: [opt("s", "참새~손바닥", "20cm 이하"), opt("m", "비둘기만큼", "20–34cm"), opt("l", "까마귀만큼", "35–54cm"), opt("xl", "아주 큼", "55cm 이상")] },
    { id: "tailShape", kind: "ordinal", part: ["tail"], q: "내 꼬리는 얼마나 길까?", hint: "몸통 길이와 비교해 보세요",
      options: [opt("long", "길고 뾰족함", "몸통보다 길다"), opt("mid", "중간"), opt("short", "짧고 뭉툭함", "몸통보다 훨씬 짧다")] },
    { id: "crest", kind: "cat", part: ["crest"], q: "내 머리 위에 깃털 다발(볏)이 있을까?", hint: "누워 있어도 뒤통수에 깃털이 삐죽 나와 있으면 '있다'",
      options: [opt("yes", "있다"), opt("no", "없다")] },
    { id: "crestColor", kind: "colorOrNone", part: ["crest"], q: "내 볏(머리 위 깃털 다발)은 무슨 색일까?", hint: "볏 안쪽 색이 다르면 펼쳤을 때 보이는 색",
      options: [opt("none", "볏이 없다")].concat(colorOpts(["y", "w", "p", "o", "r", "k", "gr"])) },
    { id: "crown", kind: "color", part: ["crown"], q: "내 정수리(머리 꼭대기)는 무슨 색일까?", options: colorOpts(ALL) },
    { id: "forehead", kind: "color", part: ["forehead"], q: "내 이마(부리 바로 위)는 무슨 색일까?", options: colorOpts(ALL) },
    { id: "face", kind: "color", part: ["face"], q: "내 얼굴(눈 주변과 뺨)은 무슨 색일까?", options: colorOpts(ALL) },
    { id: "cheek", kind: "colorOrNone", part: ["cheek"], q: "내 뺨에 동그란 색 점이 있을까?", hint: "얼굴 색과 다른 색의 둥근 무늬",
      options: [opt("none", "없다")].concat(colorOpts(["o", "r", "b", "v", "y", "w"])) },
    { id: "throat", kind: "color", part: ["throat"], q: "내 턱밑과 목 앞쪽은 무슨 색일까?", options: colorOpts(ALL) },
    { id: "collar", kind: "colorOrNone", part: ["collar"], q: "내 목둘레에 띠(목도리)가 둘러져 있을까?", hint: "목을 한 바퀴 두르는 가는 줄",
      options: [opt("none", "없다")].concat(colorOpts(["k", "p", "lg", "y", "w", "r"])) },
    { id: "breast", kind: "color", part: ["breast"], q: "내 가슴은 무슨 색일까?", options: colorOpts(ALL) },
    { id: "belly", kind: "color", part: ["belly"], q: "내 배(다리 위쪽)는 무슨 색일까?", options: colorOpts(ALL) },
    { id: "back", kind: "color", part: ["back"], q: "내 등(뒷목~어깨 사이)은 무슨 색일까?", options: colorOpts(ALL) },
    { id: "wing", kind: "color", part: ["wing"], q: "접은 내 날개는 무슨 색일까?", hint: "여러 색이면 가장 넓은 색", options: colorOpts(ALL) },
    { id: "tail", kind: "color", part: ["tail"], q: "내 꼬리는 무슨 색일까?", options: colorOpts(ALL) },
    { id: "beak", kind: "color", part: ["beak"], q: "내 부리는 무슨 색일까?",
      options: [opt("k", "검정"), opt("gr", "회색"), opt("w", "상아·흰색"), opt("r", "빨강"), opt("o", "주황"), opt("y", "노랑"), opt("p", "분홍")] },
    { id: "eyeSkin", kind: "cat", part: ["eyeskin"], q: "내 눈 주변에 깃털 없는 맨살이 보일까?",
      options: [opt("face", "얼굴이 넓게 맨살", "마코처럼"), opt("ring", "눈 둘레에 테두리만"), opt("none", "안 보인다")] },
    { id: "pattern", kind: "cat", part: ["wing", "breast", "back"], q: "내 몸에 무늬가 있을까?",
      options: [opt("plain", "무늬 없음"), opt("barred", "가로 줄무늬"), opt("scaled", "비늘 무늬", "깃털 끝마다 테두리")] }
  ];
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));

  const OPENING = ["main", "size"];
  const EASE = { main: 1.35, size: 1.15, crest: 1.15, tailShape: 1.1, wing: 1.05, breast: 1.05 };
  const ORD = { size: ["s", "m", "l", "xl"], tailShape: ["long", "mid", "short"] };
  const CAT_NEAR = { "face|ring": 0.25, "barred|scaled": 0.3, "plain|scaled": 0.12 };

  function sizeBucket(cm) { return cm <= 20 ? "s" : cm < 35 ? "m" : cm < 55 ? "l" : "xl"; }

  // ── 데이터 펼치기: 종 → 모습 목록 ──
  // fix: 사진 재검증 결과 (COLOR_FIX[종id][모습label|"*"][부위] = {색: 비율})
  const COLOR_PARTS = ["main", "crown", "forehead", "face", "throat", "breast", "belly", "back", "wing", "tail", "beak", "crestColor"];
  const FIX_TRUST = { keep: 0.5, near: 0.25 };   // 보정이 주된 색을 바꿀 때 원래 라벨을 남기는 비율
  function buildLooks(species, fix, manual) {
    fix = fix || {}; manual = manual || {};
    const looks = [];
    species.forEach((sp, si) => {
      const n = sp.looks.length, F = fix[sp.id] || {}, MF = manual[sp.id] || {};
      sp.looks.forEach((l, li) => {
        const a = Object.assign({}, sp.base, l);
        a.size = sizeBucket(a.sizeCm || sp.sizeCm);
        const W = {};
        COLOR_PARTS.forEach(k => { W[k] = toWeights(a[k]); });
        ["cheek", "collar"].forEach(k => { W[k] = toWeights(a[k]); });
        // 사진 재검증 결과 병합: 주된 색이 같으면 보정값을 그대로, 다르면 원래 라벨과 반반 섞는다
        // (자동 판정이 사진 조명에 끌려갔을 가능성 → 두 출처를 모두 '그럴 수 있는 색'으로 남긴다)
        [F["*"], F[l.label]].forEach(f => { if (f) Object.keys(f).forEach(k => {
          const nw = f[k], ow = W[k];
          if (!ow || ow === "none" || typeof nw !== "object") { W[k] = nw; return; }
          const top = o => Object.keys(o).reduce((a, c) => o[c] > o[a] ? c : a);
          // 주된 색이 같거나 '바로 옆 색'(갈색→올리브, 노랑→주황 등)으로 다듬은 것이면 보정을 그대로 믿는다.
          // 멀리 떨어진 색으로 바뀐 경우(갈색→초록 등)만 원래 라벨과 섞는다
          if (top(ow) === top(nw) || colorSim(top(ow), top(nw)) >= FIX_TRUST.near) { W[k] = nw; return; }
          const m = {}; for (const c in ow) m[c] = (m[c] || 0) + ow[c] * FIX_TRUST.keep; for (const c in nw) m[c] = (m[c] || 0) + nw[c] * (1 - FIX_TRUST.keep);
          W[k] = m;
        }); });
        [MF["*"], MF[l.label]].forEach(f => { if (f) Object.assign(W, f); });   // 사람이 확정한 값은 그대로
        looks.push({ si, li, sp, label: l.label, a, W, prior: 1 / (species.length * n) });
      });
    });
    return looks;
  }

  function valueOf(look, qid) {
    const a = look.a;
    if (qid === "crest") return a.crest ? "yes" : "no";
    if (qid === "crestColor") return a.crest ? (a.crestColor || a.crown || null) : "none";
    return a[qid] == null ? null : a[qid];
  }
  // 색 질문용: 기준색 비율 {색: 비율} 또는 "none" 또는 null
  function weightsOf(look, qid) {
    if (qid === "crestColor") {
      if (!look.a.crest) return "none";
      return look.W.crestColor || look.W.crown || null;
    }
    return look.W[qid] == null ? null : look.W[qid];
  }
  const colorOptsOf = q => q._copts || (q._copts = q.options.map(o => o.v).filter(v => COLORS[v]));

  // P(사용자가 ans를 고름 | 이 모습) — 선택지 전체에 대해 합이 1인 진짜 확률
  function likelihood(q, look, ans) {
    let s = 0;
    if (q.kind === "color" || q.kind === "colorOrNone") {
      const v = weightsOf(look, q.id);
      if (v == null) return UNKNOWN;
      const opts = colorOptsOf(q), M = confusion(opts), hasNone = q.kind === "colorOrNone";
      if (v === "none") s = ans === "none" ? 0.9 : 0.1 / opts.length;
      else if (ans === "none") s = 0.06;
      else if (PERCEPT.mode === "max") {
        // 나열된 색 중 어느 것이든 말할 수 있다고 보고, 가장 잘 맞는 색으로 판단 (비율이 클수록 조금 더 믿음)
        let top = 0; for (const c in v) top = Math.max(top, v[c]);
        for (const c in v) { if (!M[c]) continue; const r = M[c][ans] / M[c][c] * (0.75 + 0.25 * v[c] / top); if (r > s) s = r; }
        if (hasNone) s *= 0.94;
      }
      else { for (const c in v) s += v[c] * (M[c] ? M[c][ans] || 0 : 0); if (hasNone) s *= 0.94; }
    } else {
      const v = valueOf(look, q.id);
      if (v == null) return UNKNOWN;
      if (q.kind === "ordinal") {
        const o = ORD[q.id], d = Math.abs(o.indexOf(ans) - o.indexOf(v));
        s = d === 0 ? 1 : d === 1 ? 0.3 : 0;
      } else {
        s = ans === v ? 1 : (CAT_NEAR[ans + "|" + v] || CAT_NEAR[v + "|" + ans] || 0);
      }
    }
    return Math.max(PERCEPT.floor, s);
  }

  // opts.opening: 처음에 고정으로 물을 질문 순서, opts.ease: 질문별 가산점 덮어쓰기
  function createEngine(species, opts) {
    opts = opts || {};
    const opening = opts.opening || OPENING;
    const ease = Object.assign({}, EASE, opts.ease || {});
    const looks = buildLooks(species, opts.fix || root.COLOR_FIX, opts.manual || root.COLOR_FIX_MANUAL);
    const N = species.length;
    // 우도 표를 미리 만든다: LT[질문][모습][선택지]
    const LT = {}, OI = {};
    for (const q of QUESTIONS) {
      OI[q.id] = Object.fromEntries(q.options.map((o, k) => [o.v, k]));
      LT[q.id] = looks.map(l => q.options.map(o => likelihood(q, l, o.v)));
    }
    const lik = (qid, i, ans) => { const k = OI[qid][ans]; return k == null ? likelihood(QMAP[qid], looks[i], ans) : LT[qid][i][k]; };

    function posterior(answers, rejected) {
      const w = looks.map((l, i) => {
        let p = l.prior;
        for (const { qid, ans } of answers) {
          if (ans === "skip") continue;
          p *= lik(qid, i, ans);
        }
        if (rejected && rejected.has(l.si)) p *= 0.02;
        return p;
      });
      const Z = w.reduce((a, b) => a + b, 0) || 1;
      return w.map(x => x / Z);
    }

    function speciesPost(lw) {
      const s = new Array(N).fill(0);
      looks.forEach((l, i) => { s[l.si] += lw[i]; });
      return s;
    }

    function entropy(arr) {
      let h = 0;
      for (const p of arr) if (p > 1e-12) h -= p * Math.log2(p);
      return h;
    }

    function ranking(answers, rejected) {
      const lw = posterior(answers, rejected);
      const sp = speciesPost(lw);
      // 종마다 가장 잘 맞는 모습을 대표로
      const best = new Array(N).fill(-1);
      looks.forEach((l, i) => { if (best[l.si] < 0 || lw[i] > lw[best[l.si]]) best[l.si] = i; });
      const list = sp.map((p, si) => ({ si, p, species: species[si], look: looks[best[si]] }))
        .sort((a, b) => b.p - a.p);
      return { list, lw, H: entropy(sp), remaining: Math.pow(2, entropy(sp)) };
    }

    function nextQuestion(answers, rejected) {
      const asked = new Set(answers.map(a => a.qid));
      // 처음 두 질문은 누구나 바로 답할 수 있는 것으로 고정: 몸 전체 색 → 크기
      for (const id of opening) if (!asked.has(id) && answers.length < opening.length) return { q: QMAP[id], gain: 0 };
      const lw = posterior(answers, rejected);
      const H0 = entropy(speciesPost(lw));
      let best = null;
      for (const q of QUESTIONS) {
        if (asked.has(q.id)) continue;
        // 각 모습이 각 답을 할 확률 (우도를 답들에 대해 정규화)
        const L = LT[q.id];
        const Zl = L.map(r => r.reduce((a, b) => a + b, 0));
        let expH = 0;
        q.options.forEach((o, oi) => {
          const nw = lw.map((w, i) => w * L[i][oi] / Zl[i]);
          const pa = nw.reduce((a, b) => a + b, 0);
          if (pa < 1e-9) return;
          const sp = new Array(N).fill(0);
          looks.forEach((l, i) => { sp[l.si] += nw[i] / pa; });
          expH += pa * entropy(sp);
        });
        // 누구나 쉽게 답하는 질문은 조금 우대 (첫 질문이 '이마 색'이면 어색하다)
        const gain = (H0 - expH) * (ease[q.id] || 1);
        if (!best || gain > best.gain + 1e-9) best = { q, gain };
      }
      return best;
    }

    return { looks, posterior, ranking, nextQuestion, species, lik };
  }

  root.ParrotKey = { COLORS, ALL, LAB, PERCEPT, QUESTIONS, QMAP, createEngine, likelihood, valueOf, weightsOf, colorSim, confusion, sizeBucket };
})(typeof window !== "undefined" ? window : globalThis);
