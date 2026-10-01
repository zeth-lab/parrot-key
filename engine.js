/*
  앵무새 검색 도감 — 검색 엔진 (아키네이터 방식)
  ─────────────────────────────────────────────
  1) 모든 "모습(look)"에 확률을 준다. 처음엔 종마다 똑같이.
  2) 답을 받으면, 그 답이 각 모습과 얼마나 맞는지(우도)를 곱한다.
     틀린 답이어도 0이 되지 않게 최소값을 둬서, 실수 한 번에 정답이 사라지지 않는다.
  3) 다음 질문은 "답을 듣고 나면 후보가 가장 많이 줄어드는" 질문을 고른다 (기대 정보량).
*/
(function (root) {
  const COLORS = {
    g:  { ko: "초록", hex: "#3d8a4c" },
    lg: { ko: "연두", hex: "#9cc43f" },
    b:  { ko: "파랑", hex: "#2c5cb0" },
    sb: { ko: "하늘", hex: "#7cbbe2" },
    y:  { ko: "노랑", hex: "#f1c533" },
    o:  { ko: "주황", hex: "#ea8a2d" },
    r:  { ko: "빨강", hex: "#cf3b2e" },
    p:  { ko: "분홍", hex: "#ef9db4" },
    v:  { ko: "보라", hex: "#7556a3" },
    w:  { ko: "흰색", hex: "#f6f4ee" },
    gr: { ko: "회색", hex: "#9b9e9a" },
    k:  { ko: "검정", hex: "#2b2a28" },
    br: { ko: "갈색", hex: "#8b5b3c" }
  };
  const ALL = ["g", "lg", "b", "sb", "y", "o", "r", "p", "v", "w", "gr", "k", "br"];

  // 사람들이 서로 헷갈려 부르는 색 쌍과 그 정도
  const NEAR = {
    "g|lg": 0.4, "b|sb": 0.4, "b|v": 0.25, "y|o": 0.35, "o|r": 0.35, "r|p": 0.3,
    "p|v": 0.2, "w|gr": 0.3, "gr|k": 0.25, "k|br": 0.25, "br|o": 0.15, "g|b": 0.12,
    "y|lg": 0.25, "w|y": 0.12, "sb|g": 0.1, "br|gr": 0.15, "r|br": 0.12, "w|p": 0.12
  };
  function colorSim(a, b) {
    if (a === b) return 1;
    return NEAR[a + "|" + b] || NEAR[b + "|" + a] || 0;
  }

  const FLOOR = 0.04;        // 아무리 안 맞아도 이 이하로는 안 떨어진다
  const UNKNOWN = 0.3;       // 데이터가 비어 있는 칸

  const opt = (v, label, sub) => ({ v, label, sub });
  const colorOpts = list => list.map(c => opt(c, COLORS[c].ko));

  const QUESTIONS = [
    { id: "main", kind: "color", part: ["all"], q: "몸에서 가장 넓게 보이는 색은?", hint: "날개·등·가슴을 합쳐 제일 많이 보이는 색 하나", options: colorOpts(ALL) },
    { id: "size", kind: "ordinal", part: ["all"], q: "크기는 어느 정도인가요?", hint: "부리 끝에서 꼬리 끝까지. 사진 속 손이나 나뭇가지와 비교해 보세요",
      options: [opt("s", "참새~손바닥", "20cm 이하"), opt("m", "비둘기만큼", "20–34cm"), opt("l", "까마귀만큼", "35–54cm"), opt("xl", "아주 큼", "55cm 이상")] },
    { id: "tailShape", kind: "ordinal", part: ["tail"], q: "꼬리 길이는?", hint: "몸통 길이와 비교해 보세요",
      options: [opt("long", "길고 뾰족함", "몸통보다 길다"), opt("mid", "중간"), opt("short", "짧고 뭉툭함", "몸통보다 훨씬 짧다")] },
    { id: "crest", kind: "cat", part: ["crest"], q: "머리 위에 깃털 다발(볏)이 있나요?", hint: "누워 있어도 뒤통수에 깃털이 삐죽 나와 있으면 '있다'",
      options: [opt("yes", "있다"), opt("no", "없다")] },
    { id: "crestColor", kind: "colorOrNone", part: ["crest"], q: "볏(머리 위 깃털 다발)의 색은?", hint: "볏 안쪽 색이 다르면 펼쳤을 때 보이는 색",
      options: [opt("none", "볏이 없다")].concat(colorOpts(["y", "w", "p", "o", "r", "k", "gr"])) },
    { id: "crown", kind: "color", part: ["crown"], q: "정수리(머리 꼭대기) 색은?", options: colorOpts(ALL) },
    { id: "forehead", kind: "color", part: ["forehead"], q: "이마(부리 바로 위) 색은?", options: colorOpts(ALL) },
    { id: "face", kind: "color", part: ["face"], q: "얼굴(눈 주변과 뺨) 색은?", options: colorOpts(ALL) },
    { id: "cheek", kind: "colorOrNone", part: ["cheek"], q: "뺨에 동그란 색 점이 있나요?", hint: "얼굴 색과 다른 색의 둥근 무늬",
      options: [opt("none", "없다")].concat(colorOpts(["o", "r", "b", "v", "y", "w"])) },
    { id: "throat", kind: "color", part: ["throat"], q: "턱밑과 목 앞쪽 색은?", options: colorOpts(ALL) },
    { id: "collar", kind: "colorOrNone", part: ["collar"], q: "목둘레에 띠(목도리)가 있나요?", hint: "목을 한 바퀴 두르는 가는 줄",
      options: [opt("none", "없다")].concat(colorOpts(["k", "p", "lg", "y", "w", "r"])) },
    { id: "breast", kind: "color", part: ["breast"], q: "가슴 색은?", options: colorOpts(ALL) },
    { id: "belly", kind: "color", part: ["belly"], q: "배(다리 위쪽) 색은?", options: colorOpts(ALL) },
    { id: "back", kind: "color", part: ["back"], q: "등(뒷목~어깨 사이) 색은?", options: colorOpts(ALL) },
    { id: "wing", kind: "color", part: ["wing"], q: "접은 날개의 색은?", hint: "여러 색이면 가장 넓은 색", options: colorOpts(ALL) },
    { id: "tail", kind: "color", part: ["tail"], q: "꼬리 색은?", options: colorOpts(ALL) },
    { id: "beak", kind: "color", part: ["beak"], q: "부리 색은?",
      options: [opt("k", "검정"), opt("gr", "회색"), opt("w", "상아·흰색"), opt("r", "빨강"), opt("o", "주황"), opt("y", "노랑"), opt("p", "분홍")] },
    { id: "eyeSkin", kind: "cat", part: ["eyeskin"], q: "눈 주변에 깃털 없는 맨살이 보이나요?",
      options: [opt("face", "얼굴이 넓게 맨살", "마코처럼"), opt("ring", "눈 둘레에 테두리만"), opt("none", "안 보인다")] },
    { id: "pattern", kind: "cat", part: ["wing", "breast", "back"], q: "몸에 무늬가 있나요?",
      options: [opt("plain", "무늬 없음"), opt("barred", "가로 줄무늬"), opt("scaled", "비늘 무늬", "깃털 끝마다 테두리")] }
  ];
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));

  const OPENING = ["main", "size"];
  const EASE = { main: 1.35, size: 1.15, crest: 1.15, tailShape: 1.1, wing: 1.05, breast: 1.05 };
  const ORD = { size: ["s", "m", "l", "xl"], tailShape: ["long", "mid", "short"] };
  const CAT_NEAR = { "face|ring": 0.25, "barred|scaled": 0.3, "plain|scaled": 0.12 };

  function sizeBucket(cm) { return cm <= 20 ? "s" : cm < 35 ? "m" : cm < 55 ? "l" : "xl"; }

  // ── 데이터 펼치기: 종 → 모습 목록 ──
  function buildLooks(species) {
    const looks = [];
    species.forEach((sp, si) => {
      const n = sp.looks.length;
      sp.looks.forEach((l, li) => {
        const a = Object.assign({}, sp.base, l);
        a.size = sizeBucket(a.sizeCm || sp.sizeCm);
        looks.push({ si, li, sp, label: l.label, a, prior: 1 / (species.length * n) });
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

  function likelihood(q, look, ans) {
    const v = valueOf(look, q.id);
    if (v == null) return UNKNOWN;
    let s = 0;
    if (q.kind === "color") {
      v.forEach((c, i) => { s = Math.max(s, colorSim(ans, c) * (i === 0 ? 1 : 0.8)); });
    } else if (q.kind === "colorOrNone") {
      if (ans === "none") s = v === "none" ? 1 : 0.1;
      else if (v === "none") s = 0;
      else v.forEach((c, i) => { s = Math.max(s, colorSim(ans, c) * (i === 0 ? 1 : 0.8)); });
    } else if (q.kind === "ordinal") {
      const o = ORD[q.id], d = Math.abs(o.indexOf(ans) - o.indexOf(v));
      s = d === 0 ? 1 : d === 1 ? 0.3 : 0;
    } else {
      s = ans === v ? 1 : (CAT_NEAR[ans + "|" + v] || CAT_NEAR[v + "|" + ans] || 0);
    }
    return Math.max(FLOOR, s);
  }

  function createEngine(species) {
    const looks = buildLooks(species);
    const N = species.length;

    function posterior(answers, rejected) {
      const w = looks.map(l => {
        let p = l.prior;
        for (const { qid, ans } of answers) {
          if (ans === "skip") continue;
          p *= likelihood(QMAP[qid], l, ans);
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
      for (const id of OPENING) if (!asked.has(id) && answers.length < OPENING.length) return { q: QMAP[id], gain: 0 };
      const lw = posterior(answers, rejected);
      const H0 = entropy(speciesPost(lw));
      let best = null;
      for (const q of QUESTIONS) {
        if (asked.has(q.id)) continue;
        // 각 모습이 각 답을 할 확률 (우도를 답들에 대해 정규화)
        const L = looks.map(l => q.options.map(o => likelihood(q, l, o.v)));
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
        const gain = (H0 - expH) * (EASE[q.id] || 1);
        if (!best || gain > best.gain + 1e-9) best = { q, gain };
      }
      return best;
    }

    return { looks, posterior, ranking, nextQuestion, species };
  }

  root.ParrotKey = { COLORS, ALL, QUESTIONS, QMAP, createEngine, likelihood, valueOf, sizeBucket };
})(typeof window !== "undefined" ? window : globalThis);
