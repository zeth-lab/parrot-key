# 4시에 Claude Code에 붙여 넣을 프롬프트

> 준비: 이 폴더(`parrot-key`)를 `C:\Users\user\Documents\parrot-key` 에 풀어두고, PowerShell에서 그 폴더로 이동한 뒤 `claude` 실행.
> 아래 ▼ 부터 ▲ 까지를 통째로 복사해서 붙여 넣으면 됩니다.

▼ ───────────────────────────────────────────

이 폴더는 "앵무새 검색 도감" 사이트야. 아키네이터처럼 질문에 답하면 앵무새 종을 좁혀 찾아주는 도감이고,
오늘 밤 12시까지 전 세계 앵무목(Psittaciformes) 약 400종을 전부 담아서 GitHub Pages로 배포해야 해.

먼저 이 파일들을 읽어줘:
- `data/species.js` 맨 위 주석 = 데이터 형식 규칙. 지금 들어 있는 25종은 사람이 검수한 "정답 견본"이야.
- `engine.js` = 검색 엔진. 건드리지 마.
- `index.html` = 화면. 건드리지 마.

## 할 일 (순서대로, 단계마다 결과를 짧게 보고해줘)

### 1단계 — 종 목록 + 사진 + 이름 (iNaturalist API, 키 필요 없음)
- `https://api.inaturalist.org/v1/taxa?q=Psittaciformes&rank=order` 로 앵무목 taxon id를 찾고,
  `/v1/taxa?taxon_id=<id>&rank=species&is_active=true&per_page=200&locale=ko` 를 페이지 넘기며 전부 받아.
  요청 사이에 1초씩 쉬어.
- 종마다 저장: 학명, 영어 이름, 한국어 이름(locale=ko의 preferred_common_name, 없으면 비워둠), wikipedia_url, 멸종 여부(extinct).
- 사진: `default_photo`의 license_code가 cc0 / cc-by / cc-by-sa / cc-by-nc 계열일 때만 사용.
  라이선스가 없으면 `/v1/taxa/<id>` 의 taxon_photos 중 라이선스 있는 첫 장으로. 그래도 없으면 사진 없음.
  저장 형식: `photo: { src: medium_url, credit: "© 저작자 (라이선스) / iNaturalist" }`
- 결과를 `data/raw/taxa.json` 에 저장. 총 몇 종인지, 사진 없는 종이 몇 개인지 알려줘.

### 2단계 — 생김새 설명 수집 (위키백과, 키 필요 없음)
- 영어 위키백과에서 종마다 본문 텍스트를 받아 (`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&format=json&titles=...`).
  "Description" / "Appearance" 부분이 있으면 그것만, 없으면 앞부분 1500자.
- 크기(cm)가 본문에 있으면 숫자로 뽑아둬.
- `data/raw/desc/<학명>.txt` 로 저장. 설명이 거의 없는 종 목록을 따로 알려줘.

### 3단계 — 정답표 추출 (가장 중요)
- 20종씩 묶어서, 네가 직접 설명을 읽고 `data/species.js` 형식 그대로 base + looks 를 채워.
- 색 코드는 13개만 사용: g lg b sb y o r p v w gr k br. 부위 색은 많이 보이는 순서대로 배열.
- 수컷/암컷이 다르게 생겼으면 looks를 나눠 (설명에 "female", "sexes differ", "juvenile" 이 나오면 확인).
  반려조로 흔한 색 변이(블루, 루티노 등)는 이미 견본 25종에 있으니 새 종에는 만들지 않아도 돼.
- 설명에 없는 부위는 추측하지 말고 null. 단, 설명이 빈약하면 1단계 사진을 직접 열어 보고 채워도 돼.
- 견본 25종(id가 이미 있는 종)은 절대 덮어쓰지 말고 그대로 둬.
- 20종마다 `data/raw/batch-<번호>.json` 으로 저장해서, 중간에 끊겨도 이어서 할 수 있게 해줘.

### 4단계 — 합치기 + 검사
- 견본 25종 + 새로 추출한 종을 합쳐 `data/species.js` 를 다시 만들어 (형식, 주석 그대로 유지).
- `id`는 학명을 소문자-하이픈으로 (예: ara-macao). 견본 25종 id는 그대로.
- 한국어 이름이 없으면 ko에 영어 이름을 넣고 `koMissing: true` 표시.
- `node tools/check.js` 로 형식 검사 (색 코드, 필수 칸, id 중복). 오류가 0개가 될 때까지 데이터를 고쳐.
- `node tools/sim.js` 와 `node tools/sim.js 0.2` 로 시뮬레이션. 1위에 못 오르는 종 목록을 보여주고,
  그 종들의 데이터가 설명과 맞는지 다시 확인해줘. (tools 폴더의 두 파일은 이미 만들어져 있어. 수정하지 마.)

### 5단계 — 배포
- 이 폴더를 새 GitHub 저장소 `parrot-key` 로 올리고 GitHub Pages를 켜줘 (gh CLI 사용, 이미 로그인돼 있음).
- 배포 주소를 알려줘.

## 규칙
- index.html, engine.js, tools/ 는 수정하지 마. 문제가 보이면 고치지 말고 나한테 말해줘.
- 각 단계가 끝나면 git commit 해줘.

▲ ───────────────────────────────────────────

## 중간에 막히면

- **사용량 한도에 걸리면**: 3단계는 batch 파일로 저장되니, 한도가 풀린 뒤 "3단계를 data/raw/batch 파일 다음 번호부터 이어서 해줘" 라고 하면 됩니다.
- **사이트 접속이 막히면**: 그 단계 결과 파일을 이 대화에 올려주세요. 제가 이어서 처리할게요.
- **시간이 모자라면**: 3단계를 "반려조로 흔한 종 먼저" 순서로 돌리도록 바꾸고, 나머지는 사진·이름만 들어간 상태로 먼저 배포합니다.
