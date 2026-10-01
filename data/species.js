/*
  앵무새 검색 도감 — 종 데이터
  ─────────────────────────────────────────────
  한 종(species)은 기본 생김새(base)와 여러 모습(looks)을 가진다.
  looks의 각 항목은 base를 덮어쓴다 (수컷/암컷/어린 새/색 변이).

  색 코드
    g 초록   lg 연두   b 파랑   sb 하늘   y 노랑   o 주황   r 빨강
    p 분홍   v 보라    w 흰색   gr 회색   k 검정   br 갈색
  부위 색은 배열: 여러 색이 섞여 있으면 많이 보이는 순서대로. 모르면 null.
    crown 정수리, forehead 이마, face 얼굴, throat 턱밑·목, breast 가슴,
    belly 배, back 등, wing 날개, tail 꼬리, beak 부리(윗부리, 아랫부리 순)
  cheek   뺨의 동그란 색 점: 색 배열 또는 "none"
  collar  목둘레 띠: 색 배열 또는 "none"
  main    몸에서 가장 넓게 보이는 색
  eyeSkin 눈 주변 맨살: "face"(얼굴이 넓게 맨살) | "ring"(눈 테두리만) | "none"
  eyeSkinColor 그림용 맨살 색 (기본 흰색)
  crest   볏 유무 true/false,  crestColor 볏 색
  tailShape "long" | "mid" | "short"
  pattern "plain" | "barred"(가로 줄무늬) | "scaled"(비늘 무늬)
  sizeCm  부리 끝~꼬리 끝 몸길이(cm)
  photo   {src, credit} — 사진이 생기면 넣는다 (없으면 그림으로 대신)
*/
window.SPECIES = [
 {
  "id": "budgerigar",
  "ko": "사랑앵무",
  "en": "Budgerigar",
  "sci": "Melopsittacus undulatus",
  "region": "오스트레일리아 내륙 건조지대",
  "sizeCm": 18,
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "b",
    "v"
   ],
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "k",
    "y"
   ],
   "wing": [
    "k",
    "y"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "gr",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "야생형 (초록)"
   },
   {
    "label": "블루",
    "main": [
     "sb"
    ],
    "crown": [
     "w"
    ],
    "forehead": [
     "w"
    ],
    "face": [
     "w"
    ],
    "throat": [
     "w"
    ],
    "breast": [
     "sb"
    ],
    "belly": [
     "sb"
    ],
    "back": [
     "k",
     "w"
    ],
    "wing": [
     "k",
     "w"
    ],
    "tail": [
     "b"
    ]
   },
   {
    "label": "루티노 (노랑)",
    "main": [
     "y"
    ],
    "cheek": [
     "w"
    ],
    "breast": [
     "y"
    ],
    "belly": [
     "y"
    ],
    "back": [
     "y"
    ],
    "wing": [
     "y"
    ],
    "tail": [
     "y"
    ],
    "pattern": "plain"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/66388650/medium.jpg",
   "credit": "(c) Joseph j7uy5, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  }
 },
 {
  "id": "cockatiel",
  "ko": "왕관앵무",
  "en": "Cockatiel",
  "sci": "Nymphicus hollandicus",
  "region": "오스트레일리아 내륙",
  "sizeCm": 32,
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "o"
   ],
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr",
    "w"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "y",
    "gr"
   ],
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "노멀 수컷"
   },
   {
    "label": "노멀 암컷",
    "crown": [
     "gr"
    ],
    "forehead": [
     "gr",
     "y"
    ],
    "face": [
     "gr",
     "y"
    ],
    "throat": [
     "gr"
    ],
    "crestColor": [
     "gr"
    ],
    "tail": [
     "gr",
     "y"
    ]
   },
   {
    "label": "루티노",
    "main": [
     "w",
     "y"
    ],
    "breast": [
     "w",
     "y"
    ],
    "belly": [
     "w",
     "y"
    ],
    "back": [
     "w",
     "y"
    ],
    "wing": [
     "w",
     "y"
    ],
    "tail": [
     "w",
     "y"
    ],
    "beak": [
     "w"
    ],
    "crestColor": [
     "y"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/260517157/medium.jpg",
   "credit": "(c) Steve Murray, some rights reserved (CC BY-NC), uploaded by Steve Murray (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "rosyfaced",
  "ko": "모란앵무",
  "en": "Rosy-faced Lovebird",
  "sci": "Agapornis roseicollis",
  "region": "아프리카 남서부 건조지대",
  "sizeCm": 17,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "p"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "노멀"
   },
   {
    "label": "루티노",
    "main": [
     "y"
    ],
    "crown": [
     "y"
    ],
    "breast": [
     "y"
    ],
    "belly": [
     "y"
    ],
    "back": [
     "y"
    ],
    "wing": [
     "y"
    ],
    "tail": [
     "y",
     "w"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/380949978/medium.jpg",
   "credit": "(c) pat_jones, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "fischers",
  "ko": "피셔모란앵무",
  "en": "Fischer's Lovebird",
  "sci": "Agapornis fischeri",
  "region": "탄자니아 북부 사바나",
  "sizeCm": 15,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "o"
   ],
   "forehead": [
    "r",
    "o"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "y"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "노멀"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/312928188/medium.jpeg",
   "credit": "(c) Floyd E. Hayes, some rights reserved (CC BY-NC), uploaded by Floyd E. Hayes (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "blueyellowmacaw",
  "ko": "청금강앵무",
  "en": "Blue-and-yellow Macaw",
  "sci": "Ara ararauna",
  "region": "남아메리카 열대 우림·습지",
  "sizeCm": 86,
  "base": {
   "main": [
    "b",
    "y"
   ],
   "crown": [
    "g",
    "b"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "y",
    "o"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/414331079/medium.jpeg",
   "credit": "(c) KENNEDY BORGES, some rights reserved (CC BY-NC), uploaded by KENNEDY BORGES (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "scarletmacaw",
  "ko": "홍금강앵무",
  "en": "Scarlet Macaw",
  "sci": "Ara macao",
  "region": "중앙·남아메리카 열대 우림",
  "sizeCm": 84,
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "y",
    "b",
    "r"
   ],
   "tail": [
    "r",
    "b"
   ],
   "beak": [
    "w",
    "k"
   ],
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/233350330/medium.jpg",
   "credit": "(c) Matthew Patchett, some rights reserved (CC BY-NC), uploaded by Matthew Patchett (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "greenwingmacaw",
  "ko": "그린윙마코",
  "en": "Red-and-green Macaw",
  "sci": "Ara chloropterus",
  "region": "남아메리카 북·중부 열대 우림",
  "sizeCm": 90,
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "w",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r",
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "b"
   ],
   "beak": [
    "w",
    "k"
   ],
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/411585383/medium.jpeg",
   "credit": "(c) Thiago Gonçalves Coronado Antunes, some rights reserved (CC BY-NC), uploaded by Thiago Gonçalves Coronado Antunes (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "hyacinth",
  "ko": "히아신스마코",
  "en": "Hyacinth Macaw",
  "sci": "Anodorhynchus hyacinthinus",
  "region": "브라질 판타나우·세하두",
  "sizeCm": 100,
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/144156185/medium.jpg",
   "credit": "(c) Paul Donahue, some rights reserved (CC BY-NC), uploaded by Paul Donahue (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "africangrey",
  "ko": "회색앵무",
  "en": "Grey Parrot",
  "sci": "Psittacus erithacus",
  "region": "아프리카 중서부 열대 우림",
  "sizeCm": 33,
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "w",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/47367883/medium.jpg",
   "credit": "(c) Valerie, some rights reserved (CC BY-NC-ND) (cc-by-nc-nd) / iNaturalist"
  }
 },
 {
  "id": "sunconure",
  "ko": "썬코뉴어",
  "en": "Sun Parakeet",
  "sci": "Aratinga solstitialis",
  "region": "남아메리카 북동부 사바나",
  "sizeCm": 30,
  "base": {
   "main": [
    "y",
    "o"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "o"
   ],
   "collar": "none",
   "breast": [
    "o",
    "y"
   ],
   "belly": [
    "o"
   ],
   "back": [
    "y"
   ],
   "wing": [
    "y",
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "main": [
     "g",
     "y"
    ],
    "crown": [
     "y",
     "g"
    ],
    "back": [
     "g"
    ],
    "breast": [
     "y",
     "g"
    ],
    "belly": [
     "y",
     "o"
    ],
    "wing": [
     "g",
     "b"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/6800696/medium.jpg",
   "credit": "(c) Cullen Hanks, some rights reserved (CC BY-NC), uploaded by Cullen Hanks (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "greencheek",
  "ko": "그린칙코뉴어",
  "en": "Green-cheeked Parakeet",
  "sci": "Pyrrhura molinae",
  "region": "볼리비아·브라질·아르헨티나 숲",
  "sizeCm": 26,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "gr"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "r",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "br"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "노멀"
   },
   {
    "label": "파인애플",
    "main": [
     "y",
     "g"
    ],
    "breast": [
     "y",
     "o"
    ],
    "belly": [
     "r",
     "y"
    ],
    "back": [
     "g",
     "y"
    ],
    "wing": [
     "g",
     "y"
    ],
    "crown": [
     "br",
     "y"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/175564157/medium.jpg",
   "credit": "(c) Pablo Demaio, some rights reserved (CC BY-NC), uploaded by Pablo Demaio (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "monk",
  "ko": "퀘이커앵무",
  "en": "Monk Parakeet",
  "sci": "Myiopsitta monachus",
  "region": "남아메리카 남부 (도시에 귀화)",
  "sizeCm": 29,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "lg",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w",
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "노멀"
   },
   {
    "label": "블루",
    "main": [
     "sb"
    ],
    "crown": [
     "sb"
    ],
    "belly": [
     "sb"
    ],
    "back": [
     "sb",
     "b"
    ],
    "wing": [
     "b",
     "sb"
    ],
    "tail": [
     "sb"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/101224790/medium.jpg",
   "credit": "(c) Juan Emilio, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  }
 },
 {
  "id": "sulphurcrested",
  "ko": "큰유황앵무",
  "en": "Sulphur-crested Cockatoo",
  "sci": "Cacatua galerita",
  "region": "오스트레일리아 동·북부, 뉴기니",
  "sizeCm": 48,
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "y"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/247007913/medium.jpg",
   "credit": "(c) Peter and Shelly, some rights reserved (CC BY-NC), uploaded by Peter and Shelly (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "umbrella",
  "ko": "흰유황앵무",
  "en": "White Cockatoo",
  "sci": "Cacatua alba",
  "region": "인도네시아 북말루쿠 제도",
  "sizeCm": 46,
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/91620138/medium.jpg",
   "credit": "(c) www.viajar24h.com, some rights reserved (CC BY) (cc-by) / iNaturalist"
  }
 },
 {
  "id": "galah",
  "ko": "갈라",
  "en": "Galah",
  "sci": "Eolophus roseicapilla",
  "region": "오스트레일리아 전역",
  "sizeCm": 35,
  "base": {
   "main": [
    "p",
    "gr"
   ],
   "crown": [
    "p",
    "w"
   ],
   "forehead": [
    "w",
    "p"
   ],
   "face": [
    "p"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "p"
   ],
   "belly": [
    "p"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": true,
   "crestColor": [
    "w",
    "p"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/147415773/medium.jpg",
   "credit": "(c) Andrew Allen, some rights reserved (CC BY), uploaded by Andrew Allen (cc-by) / iNaturalist"
  }
 },
 {
  "id": "redtailblack",
  "ko": "붉은꼬리검은유황앵무",
  "en": "Red-tailed Black Cockatoo",
  "sci": "Calyptorhynchus banksii",
  "region": "오스트레일리아 북부·서부",
  "sizeCm": 60,
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "k"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k",
    "r"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "k"
   ],
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "k",
     "y"
    ],
    "crown": [
     "k",
     "y"
    ],
    "breast": [
     "k",
     "y"
    ],
    "tail": [
     "k",
     "o"
    ],
    "beak": [
     "w"
    ],
    "pattern": "barred"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157560361/medium.jpg",
   "credit": "(c) Michael Schmid, some rights reserved (CC BY) (cc-by) / iNaturalist"
  }
 },
 {
  "id": "eclectus",
  "ko": "뉴기니아앵무",
  "en": "Eclectus Parrot",
  "sci": "Eclectus roratus",
  "region": "뉴기니, 솔로몬 제도, 오스트레일리아 북단",
  "sizeCm": 42,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (초록)"
   },
   {
    "label": "암컷 (빨강·파랑)",
    "main": [
     "r",
     "b"
    ],
    "crown": [
     "r"
    ],
    "forehead": [
     "r"
    ],
    "face": [
     "r"
    ],
    "throat": [
     "r"
    ],
    "breast": [
     "b",
     "v"
    ],
    "belly": [
     "b",
     "v"
    ],
    "back": [
     "r",
     "br"
    ],
    "wing": [
     "r",
     "v"
    ],
    "tail": [
     "r",
     "o"
    ],
    "beak": [
     "k"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "b"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/366464195/medium.jpg",
   "credit": "(c) Stephen John Davies, some rights reserved (CC BY-NC), uploaded by Stephen John Davies (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "ringneck",
  "ko": "목도리앵무",
  "en": "Rose-ringed Parakeet",
  "sci": "Psittacula krameri",
  "region": "남아시아·아프리카 사헬 (세계 도시에 귀화)",
  "sizeCm": 40,
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "k",
    "p"
   ],
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "lg"
    ],
    "collar": "none"
   },
   {
    "label": "블루 수컷",
    "main": [
     "sb"
    ],
    "crown": [
     "sb"
    ],
    "forehead": [
     "sb"
    ],
    "face": [
     "sb"
    ],
    "breast": [
     "sb"
    ],
    "belly": [
     "sb"
    ],
    "back": [
     "sb",
     "b"
    ],
    "wing": [
     "sb",
     "b"
    ],
    "tail": [
     "sb",
     "b"
    ],
    "collar": [
     "k",
     "w"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/2035460/medium.jpg",
   "credit": "(c) Mousam Ray, some rights reserved (CC BY-NC), uploaded by Mousam Ray (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "rainbowlorikeet",
  "ko": "무지개로리킷",
  "en": "Rainbow Lorikeet",
  "sci": "Trichoglossus moluccanus",
  "region": "오스트레일리아 동부 해안",
  "sizeCm": 30,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "v"
   ],
   "forehead": [
    "b",
    "v"
   ],
   "face": [
    "b",
    "v"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": [
    "lg",
    "y"
   ],
   "breast": [
    "r",
    "y"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/49571056/medium.jpg",
   "credit": "(c) Andrew Allen, some rights reserved (CC BY), uploaded by Andrew Allen (cc-by) / iNaturalist"
  }
 },
 {
  "id": "crimsonrosella",
  "ko": "진홍로젤라",
  "en": "Crimson Rosella",
  "sci": "Platycercus elegans",
  "region": "오스트레일리아 동·남동부 숲",
  "sizeCm": 35,
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "b",
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "k",
    "r"
   ],
   "wing": [
    "b",
    "k"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "w",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "main": [
     "g",
     "r"
    ],
    "crown": [
     "r"
    ],
    "back": [
     "g"
    ],
    "wing": [
     "g",
     "b"
    ],
    "breast": [
     "g",
     "r"
    ],
    "belly": [
     "g"
    ],
    "pattern": "plain"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/13295378/medium.jpg",
   "credit": "(c) Kevin Schafer, some rights reserved (CC BY-NC-ND), uploaded by Kevin Schafer (cc-by-nc-nd) / iNaturalist"
  }
 },
 {
  "id": "bluefrontedamazon",
  "ko": "청모자아마존",
  "en": "Turquoise-fronted Amazon",
  "sci": "Amazona aestiva",
  "region": "브라질 동부·볼리비아·파라과이·아르헨티나 북부",
  "sizeCm": 37,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "sb",
    "b"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/167963315/medium.jpg",
   "credit": "(c) Nick Lima, some rights reserved (CC BY-NC), uploaded by Nick Lima (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "senegal",
  "ko": "세네갈앵무",
  "en": "Senegal Parrot",
  "sci": "Poicephalus senegalus",
  "region": "서아프리카 사바나",
  "sizeCm": 23,
  "base": {
   "main": [
    "g",
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "o",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/347834585/medium.jpg",
   "credit": "(c) Arjan Haverkamp, some rights reserved (CC BY) (cc-by) / iNaturalist"
  }
 },
 {
  "id": "caique",
  "ko": "검은머리카이큐",
  "en": "Black-headed Parrot",
  "sci": "Pionites melanocephalus",
  "region": "아마존 북부 열대 우림",
  "sizeCm": 23,
  "base": {
   "main": [
    "g",
    "w"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "y"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/473294412/medium.jpg",
   "credit": "(c) Diego Tirira, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  }
 },
 {
  "id": "lineolated",
  "ko": "사자나미앵무",
  "en": "Barred Parakeet",
  "sci": "Bolborhynchus lineola",
  "region": "멕시코 남부~페루 산지 숲",
  "sizeCm": 16,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "lg"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "노멀"
   },
   {
    "label": "블루",
    "main": [
     "sb"
    ],
    "crown": [
     "sb"
    ],
    "forehead": [
     "sb"
    ],
    "face": [
     "sb"
    ],
    "throat": [
     "sb"
    ],
    "breast": [
     "sb"
    ],
    "belly": [
     "sb"
    ],
    "back": [
     "sb",
     "k"
    ],
    "wing": [
     "sb",
     "k"
    ],
    "tail": [
     "sb"
    ]
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/217153931/medium.jpg",
   "credit": "(c) photokeen, some rights reserved (CC BY-NC-ND), uploaded by photokeen (cc-by-nc-nd) / iNaturalist"
  }
 },
 {
  "id": "kakapo",
  "ko": "카카포",
  "en": "Kakapo",
  "sci": "Strigops habroptilus",
  "region": "뉴질랜드 (포식자 없는 섬에서 보호 중)",
  "sizeCm": 60,
  "base": {
   "main": [
    "lg",
    "y"
   ],
   "crown": [
    "lg",
    "k"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y",
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "lg",
    "y"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "g",
    "br"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/592580290/medium.jpg",
   "credit": "(c) Jake Osborne, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  }
 },
 {
  "id": "kea",
  "ko": "케아",
  "en": "Kea",
  "sci": "Nestor notabilis",
  "region": "뉴질랜드 남섬 고산지대",
  "sizeCm": 48,
  "base": {
   "main": [
    "g",
    "br"
   ],
   "crown": [
    "g",
    "br"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/487649966/medium.jpg",
   "credit": "(c) Ben Ackerley, some rights reserved (CC BY-NC), uploaded by Ben Ackerley (cc-by-nc) / iNaturalist"
  }
 },
 {
  "id": "platycercus-eximius",
  "ko": "Eastern Rosella",
  "en": "Eastern Rosella",
  "sci": "Platycercus eximius",
  "region": "오스트레일리아 남동부",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Eastern_rosella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/232541417/medium.jpg",
   "credit": "(c) Kenton, some rights reserved (CC BY-NC), uploaded by Kenton (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r",
    "y"
   ],
   "belly": [
    "lg",
    "y"
   ],
   "back": [
    "k",
    "y"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "alisterus-scapularis",
  "ko": "Australian King Parrot",
  "en": "Australian King Parrot",
  "sci": "Alisterus scapularis",
  "region": "오스트레일리아 동부 우림",
  "sizeCm": 43,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Australian_king_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/13147638/medium.jpeg",
   "credit": "(c) Carole Riley, some rights reserved (CC BY-NC), uploaded by Carole Riley (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g",
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "lg"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "wing": [
     "g"
    ],
    "beak": [
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "zanda-funerea",
  "ko": "Yellow-tailed Black Cockatoo",
  "en": "Yellow-tailed Black Cockatoo",
  "sci": "Zanda funerea",
  "region": "오스트레일리아 남동부·태즈메이니아 숲",
  "sizeCm": 65,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Yellow-tailed_black_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/266820660/medium.jpg",
   "credit": "(c) Sam Gordon, some rights reserved (CC BY-NC-SA), uploaded by Sam Gordon (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "k",
    "br"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k",
    "br"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k",
    "br"
   ],
   "belly": [
    "k",
    "br"
   ],
   "back": [
    "k",
    "br"
   ],
   "wing": [
    "k",
    "br"
   ],
   "tail": [
    "k",
    "y"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": true,
   "crestColor": [
    "k"
   ],
   "tailShape": "mid",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "w"
    ],
    "eyeSkinColor": "gr"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-sanguinea",
  "ko": "Little Corella",
  "en": "Little Corella",
  "sci": "Cacatua sanguinea",
  "region": "오스트레일리아 내륙 전역",
  "sizeCm": 41,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Little_corella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/594571379/medium.jpg",
   "credit": "(c) Victoria, some rights reserved (CC BY-NC), uploaded by Victoria (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "b",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psephotus-haematonotus",
  "ko": "Red-rumped Parrot",
  "en": "Red-rumped Parrot",
  "sci": "Psephotus haematonotus",
  "region": "오스트레일리아 남동부 초원",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-rumped_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/242426579/medium.jpg",
   "credit": "(c) Tom Hunt, some rights reserved (CC BY-NC), uploaded by Tom Hunt (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": null,
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-viridigenalis",
  "ko": "Red-crowned Amazon",
  "en": "Red-crowned Amazon",
  "sci": "Amazona viridigenalis",
  "region": "멕시코 북동부(도입 개체군 다수)",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-crowned_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/59186054/medium.jpeg",
   "credit": "(c) James M. Maley, some rights reserved (CC BY), uploaded by James M. Maley (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "callocephalon-fimbriatum",
  "ko": "Gang-gang Cockatoo",
  "en": "Gang-gang Cockatoo",
  "sci": "Callocephalon fimbriatum",
  "region": "오스트레일리아 남동부 산림",
  "sizeCm": 37,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Gang-gang_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/259067709/medium.jpg",
   "credit": "(c) rodgerp, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "r"
   ],
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr"
    ],
    "forehead": [
     "gr"
    ],
    "face": [
     "gr"
    ],
    "crestColor": [
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-autumnalis",
  "ko": "Red-lored Amazon",
  "en": "Red-lored Amazon",
  "sci": "Amazona autumnalis",
  "region": "멕시코 동부~중앙아메리카 열대림",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-lored_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/30793351/medium.jpg",
   "credit": "(c) José Antonio Linage Espinosa, some rights reserved (CC BY-NC), uploaded by José Antonio Linage Espinosa (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-albifrons",
  "ko": "White-fronted Amazon",
  "en": "White-fronted Amazon",
  "sci": "Amazona albifrons",
  "region": "멕시코~중앙아메리카 건조림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-fronted_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/265412239/medium.jpg",
   "credit": "(c) benmun89, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "g",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-leucophthalmus",
  "ko": "White-eyed Parakeet",
  "en": "White-eyed Parakeet",
  "sci": "Psittacara leucophthalmus",
  "region": "남아메리카 동부(브라질 등) 숲",
  "sizeCm": 34,
  "wikipedia_url": "https://en.wikipedia.org/wiki/White-eyed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/246857985/medium.jpg",
   "credit": "(c) Gabriel Bonfa, some rights reserved (CC BY-NC-ND), uploaded by Gabriel Bonfa (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-jugularis",
  "ko": "Orange-chinned Parakeet",
  "en": "Orange-chinned Parakeet",
  "sci": "Brotogeris jugularis",
  "region": "중앙아메리카~남아메리카 북부 저지대",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-chinned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157601516/medium.jpg",
   "credit": "(c) Alejandro  Bayer Tamayo, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "b"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "o"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "br"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "barnardius-zonarius",
  "ko": "Australian Ringneck",
  "en": "Australian Ringneck",
  "sci": "Barnardius zonarius",
  "region": "오스트레일리아 내륙 건조지대",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Australian_ringneck",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/455269240/medium.jpg",
   "credit": "(c) matthewkwan, some rights reserved (CC BY-NC-ND), uploaded by matthewkwan (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "b"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "g",
    "b"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-tenuirostris",
  "ko": "Long-billed Corella",
  "en": "Long-billed Corella",
  "sci": "Cacatua tenuirostris",
  "region": "오스트레일리아 남동부",
  "sizeCm": 41,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Long-billed_corella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/255623679/medium.jpg",
   "credit": "(c) Proteros, some rights reserved (CC BY), uploaded by Proteros (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "r",
    "w"
   ],
   "face": [
    "w",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "o"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w",
    "y"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w",
    "y"
   ],
   "tail": [
    "w",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "b",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nestor-meridionalis",
  "ko": "New Zealand Kaka",
  "en": "New Zealand Kaka",
  "sci": "Nestor meridionalis",
  "region": "뉴질랜드 숲",
  "sizeCm": 45,
  "wikipedia_url": "http://en.wikipedia.org/wiki/New_Zealand_kaka",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/336381381/medium.jpg",
   "credit": "(c) Ben Ackerley, some rights reserved (CC BY-NC), uploaded by Ben Ackerley (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "g"
   ],
   "crown": [
    "w",
    "gr"
   ],
   "forehead": [
    "w",
    "gr"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "br",
    "g"
   ],
   "belly": [
    "r",
    "br"
   ],
   "back": [
    "br",
    "g"
   ],
   "wing": [
    "br",
    "g"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eupsittula-canicularis",
  "ko": "Orange-fronted Parakeet",
  "en": "Orange-fronted Parakeet",
  "sci": "Eupsittula canicularis",
  "region": "중앙아메리카 태평양 연안",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-fronted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/66853469/medium.jpg",
   "credit": "(c) laurarefugeforwildlife, some rights reserved (CC BY-NC), uploaded by laurarefugeforwildlife (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-concinnus",
  "ko": "Musk Lorikeet",
  "en": "Musk Lorikeet",
  "sci": "Trichoglossus concinnus",
  "region": "오스트레일리아 남동부",
  "sizeCm": 22,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Musk_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159048583/medium.jpg",
   "credit": "(c) patrickkavanagh, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "aratinga-nenday",
  "ko": "Nanday Parakeet",
  "en": "Nanday Parakeet",
  "sci": "Aratinga nenday",
  "region": "남아메리카 중부(파라과이·아르헨티나 등)",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Nanday_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/366685380/medium.jpeg",
   "credit": "(c) JeffreyGammon, some rights reserved (CC BY-NC), uploaded by JeffreyGammon (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "g",
    "b"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-chiriri",
  "ko": "Yellow-chevroned Parakeet",
  "en": "Yellow-chevroned Parakeet",
  "sci": "Brotogeris chiriri",
  "region": "남아메리카 중부",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-chevroned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157600886/medium.jpg",
   "credit": "(c) Paulo Barradas, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eupsittula-nana",
  "ko": "Olive-throated Parakeet",
  "en": "Olive-throated Parakeet",
  "sci": "Eupsittula nana",
  "region": "멕시코 남부~중앙아메리카",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Olive-throated_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/345582937/medium.jpg",
   "credit": "(c) Giff Beaton, some rights reserved (CC BY-NC), uploaded by Giff Beaton (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "platycercus-adscitus",
  "ko": "Pale-headed Rosella",
  "en": "Pale-headed Rosella",
  "sci": "Platycercus adscitus",
  "region": "오스트레일리아 북동부(퀸즐랜드)",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pale-headed_rosella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/71282187/medium.jpg",
   "credit": "(c) Sylvia Alexander, some rights reserved (CC BY-NC), uploaded by Sylvia Alexander (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "sb"
   ],
   "crown": [
    "y",
    "w"
   ],
   "forehead": [
    "y",
    "w"
   ],
   "face": [
    "y",
    "w"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "w",
    "sb"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "sb",
    "w"
   ],
   "back": [
    "k",
    "y"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-eupatria",
  "ko": "대본청앵무",
  "en": "Alexandrine Parakeet",
  "sci": "Psittacula eupatria",
  "region": "남아시아·동남아시아 숲·농경지",
  "sizeCm": 62,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Alexandrine_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/61055458/medium.jpeg",
   "credit": "(c) jageshwerverma, some rights reserved (CC BY-NC), uploaded by jageshwerverma (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "sb",
    "g",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "p",
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "b",
    "y"
   ],
   "beak": [
    "r",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "sb",
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "pionus-menstruus",
  "ko": "Blue-headed Parrot",
  "koMissing": true,
  "en": "Blue-headed Parrot",
  "sci": "Pionus menstruus",
  "region": "중남미 열대 저지대 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-headed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64477914/medium.jpg",
   "credit": "(c) Arman Moreno, some rights reserved (CC BY-NC), uploaded by Arman Moreno (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "k"
   ],
   "cheek": [
    "k"
   ],
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "k",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "g",
     "b"
    ],
    "throat": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "calyptorhynchus-lathami",
  "ko": "Glossy Black Cockatoo",
  "koMissing": true,
  "en": "Glossy Black Cockatoo",
  "sci": "Calyptorhynchus lathami",
  "region": "오스트레일리아 동부 유칼립투스 숲",
  "sizeCm": 50,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Glossy_black_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157561221/medium.jpg",
   "credit": "(c) Bowerbirdaus, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "k"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k",
    "r"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "k"
   ],
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "main": [
     "br"
    ],
    "crown": [
     "br"
    ],
    "forehead": [
     "br"
    ],
    "face": [
     "br"
    ],
    "throat": [
     "br"
    ],
    "breast": [
     "br"
    ],
    "belly": [
     "br"
    ],
    "back": [
     "br"
    ],
    "wing": [
     "br"
    ],
    "tail": [
     "br",
     "y"
    ],
    "collar": [
     "y"
    ],
    "pattern": "barred"
   }
  ]
 },
 {
  "id": "psittacara-mitratus",
  "ko": "Mitred Parakeet",
  "koMissing": true,
  "en": "Mitred Parakeet",
  "sci": "Psittacara mitratus",
  "region": "남아메리카 안데스 산림(볼리비아·아르헨티나 등)",
  "sizeCm": 38,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Mitred_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/509419990/medium.jpg",
   "credit": "(c) Leonardo Zoat, some rights reserved (CC BY-NC), uploaded by Leonardo Zoat (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "v"
   ],
   "face": [
    "g",
    "r"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g"
    ],
    "crown": [
     "g"
    ],
    "face": [
     "g"
    ],
    "cheek": "none"
   }
  ]
 },
 {
  "id": "psittacara-erythrogenys",
  "ko": "Red-masked Parakeet",
  "koMissing": true,
  "en": "Red-masked Parakeet",
  "sci": "Psittacara erythrogenys",
  "region": "에콰도르·페루 서부 건조림",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-masked_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/215867200/medium.jpg",
   "credit": "(c) Tom Benson, some rights reserved (CC BY-NC-ND) (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "psittacula-alexandri",
  "ko": "Red-breasted Parakeet",
  "koMissing": true,
  "en": "Red-breasted Parakeet",
  "sci": "Psittacula alexandri",
  "region": "남아시아·동남아시아 저지대 숲·도시",
  "sizeCm": 36,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-breasted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/230390646/medium.jpg",
   "credit": "(c) Marc Choisy, some rights reserved (CC BY-NC), uploaded by Marc Choisy (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k",
    "p"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "p",
    "r"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "y"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "gr"
    ],
    "breast": [
     "r",
     "gr"
    ]
   }
  ]
 },
 {
  "id": "amazona-ochrocephala",
  "ko": "Yellow-crowned Amazon",
  "koMissing": true,
  "en": "Yellow-crowned Amazon",
  "sci": "Amazona ochrocephala",
  "region": "남아메리카 북부 열대 저지대 숲",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-crowned_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/473737022/medium.jpg",
   "credit": "(c) barloventomagico, some rights reserved (CC BY-NC-ND) (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "amazona-amazonica",
  "ko": "Orange-winged Amazon",
  "koMissing": true,
  "en": "Orange-winged Amazon",
  "sci": "Amazona amazonica",
  "region": "남아메리카 아마존·오리노코 저지대 숲",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-winged_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/450563214/medium.jpeg",
   "credit": "(c) Carlos Alexandre Mattos Raposo, some rights reserved (CC BY), uploaded by Carlos Alexandre Mattos Raposo (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "y"
   ],
   "forehead": [
    "y",
    "b"
   ],
   "face": [
    "y",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "o"
   ],
   "tail": [
    "g",
    "o"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "trichoglossus-chlorolepidotus",
  "ko": "Scaly-breasted Lorikeet",
  "koMissing": true,
  "en": "Scaly-breasted Lorikeet",
  "sci": "Trichoglossus chlorolepidotus",
  "region": "오스트레일리아 동부 해안 숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scaly-breasted_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/367994967/medium.jpg",
   "credit": "(c) Nicole Brooker, some rights reserved (CC BY-NC), uploaded by Nicole Brooker (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "b"
   ],
   "forehead": [
    "g",
    "b"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "o"
   ],
   "tail": [
    "g",
    "o"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "amazona-oratrix",
  "ko": "Yellow-headed Amazon",
  "koMissing": true,
  "en": "Yellow-headed Amazon",
  "sci": "Amazona oratrix",
  "region": "멕시코·중앙아메리카 저지대 숲",
  "sizeCm": 43,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-headed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/35519714/medium.jpg",
   "credit": "(c) Bryan Pfeiffer, some rights reserved (CC BY-NC), uploaded by Bryan Pfeiffer (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "k"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "eupsittula-pertinax",
  "ko": "Brown-throated Parakeet",
  "koMissing": true,
  "en": "Brown-throated Parakeet",
  "sci": "Eupsittula pertinax",
  "region": "남아메리카 북부 카리브 연안 건조지대",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown-throated_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/100107080/medium.jpg",
   "credit": "(c) Fernando Nunes, some rights reserved (CC BY-NC), uploaded by Fernando Nunes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g",
    "gr"
   ],
   "belly": [
    "g",
    "o"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g",
     "y"
    ],
    "face": [
     "g",
     "y"
    ],
    "throat": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "amazona-farinosa",
  "ko": "Mealy Amazon",
  "koMissing": true,
  "en": "Mealy Amazon",
  "sci": "Amazona farinosa",
  "region": "중남미 아마존 저지대 열대우림",
  "sizeCm": 41,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Southern_mealy_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/390434181/medium.jpg",
   "credit": "(c) Gabriel Bonfa, some rights reserved (CC BY-NC-ND), uploaded by Gabriel Bonfa (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "y"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "w"
   ],
   "wing": [
    "g",
    "b",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "ara-militaris",
  "ko": "Military Macaw",
  "koMissing": true,
  "en": "Military Macaw",
  "sci": "Ara militaris",
  "region": "멕시코~아르헨티나 산악 낙엽수림",
  "sizeCm": 85,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Military_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/133941924/medium.jpeg",
   "credit": "(c) Christopher Lindsey, some rights reserved (CC BY-NC), uploaded by Christopher Lindsey (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "y"
   ],
   "tail": [
    "g",
    "b",
    "y"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "thectocercus-acuticaudatus",
  "ko": "Blue-crowned Parakeet",
  "koMissing": true,
  "en": "Blue-crowned Parakeet",
  "sci": "Thectocercus acuticaudatus",
  "region": "남아메리카 중부 건조림·사바나",
  "sizeCm": 37,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-crowned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/3931867/medium.jpg",
   "credit": "(c) Bill Keim, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "b"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "br"
   ],
   "tail": [
    "g",
    "br"
   ],
   "beak": [
    "w",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "r",
     "b"
    ],
    "forehead": [
     "r",
     "b"
    ]
   }
  ]
 },
 {
  "id": "eupsittula-aurea",
  "ko": "Peach-fronted Parakeet",
  "koMissing": true,
  "en": "Peach-fronted Parakeet",
  "sci": "Eupsittula aurea",
  "region": "남아메리카 중동부 세하두·사바나",
  "sizeCm": 28,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Peach-fronted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/97806849/medium.jpg",
   "credit": "(c) Reinaldo de Oliveira Elias, some rights reserved (CC BY), uploaded by Reinaldo de Oliveira Elias (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "o",
    "b"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g",
     "o"
    ],
    "crown": [
     "g",
     "b"
    ]
   }
  ]
 },
 {
  "id": "ara-severus",
  "ko": "Chestnut-fronted Macaw",
  "koMissing": true,
  "en": "Chestnut-fronted Macaw",
  "sci": "Ara severus",
  "region": "중남미 저지대 열대우림",
  "sizeCm": 50,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Chestnut-fronted_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/390762327/medium.jpg",
   "credit": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "w",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "amazona-finschi",
  "ko": "Lilac-crowned Amazon",
  "koMissing": true,
  "en": "Lilac-crowned Amazon",
  "sci": "Amazona finschi",
  "region": "멕시코 서부 태평양 연안 숲",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lilac-crowned_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/252786151/medium.jpeg",
   "credit": "(c) Mexfant Maravilloso, some rights reserved (CC BY-NC), uploaded by Mexfant Maravilloso (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "y",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "v"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr",
    "br"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g",
     "br"
    ]
   }
  ]
 },
 {
  "id": "pyrrhura-frontalis",
  "ko": "Maroon-bellied Parakeet",
  "koMissing": true,
  "en": "Maroon-bellied Parakeet",
  "sci": "Pyrrhura frontalis",
  "region": "브라질 남동부·아르헨티나 북부 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Maroon-bellied_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158992021/medium.jpg",
   "credit": "(c) Dario Sanches, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "g"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "br"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "forpus-conspicillatus",
  "ko": "Spectacled Parrotlet",
  "koMissing": true,
  "en": "Spectacled Parrotlet",
  "sci": "Forpus conspicillatus",
  "region": "콜롬비아·베네수엘라 저지대 숲·관목지",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Spectacled_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64735989/medium.jpg",
   "credit": "(c) David Monroy R, some rights reserved (CC BY-NC), uploaded by David Monroy R (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "b",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ],
    "eyeSkinColor": "w"
   }
  ]
 },
 {
  "id": "psittacara-holochlorus",
  "ko": "Green Parakeet",
  "koMissing": true,
  "en": "Green Parakeet",
  "sci": "Psittacara holochlorus",
  "region": "멕시코 북동부 숲",
  "sizeCm": 30.5,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Green_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/149994371/medium.jpeg",
   "credit": "(c) rakshas, some rights reserved (CC BY-NC), uploaded by rakshas (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "r"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g",
    "r"
   ],
   "collar": "none",
   "breast": [
    "g",
    "lg"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "brotogeris-tirica",
  "ko": "Plain Parakeet",
  "en": "Plain Parakeet",
  "sci": "Brotogeris tirica",
  "region": "브라질 동부 대서양림·도시 녹지",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Plain_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158896391/medium.jpg",
   "credit": "(c) Luiz Carlos  Rocha, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "br"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-cyanocephala",
  "ko": "Plum-headed Parakeet",
  "en": "Plum-headed Parakeet",
  "sci": "Psittacula cyanocephala",
  "region": "인도 아대륙 저지대 숲·농경지",
  "sizeCm": 37,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Plum-headed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/349177488/medium.jpg",
   "credit": "(c) Hari K  Patibanda, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "v"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "v"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "o",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr",
     "b"
    ],
    "forehead": [
     "gr",
     "b"
    ],
    "face": [
     "gr",
     "b"
    ],
    "throat": [
     "g"
    ],
    "collar": [
     "y"
    ],
    "wing": [
     "g"
    ],
    "beak": [
     "y"
    ]
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "collar": "none",
    "wing": [
     "g"
    ],
    "beak": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoliseus-patagonus",
  "ko": "Burrowing Parakeet",
  "en": "Burrowing Parakeet",
  "sci": "Cyanoliseus patagonus",
  "region": "아르헨티나·칠레 파타고니아 초원·절벽",
  "sizeCm": 52,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Burrowing_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/79627019/medium.jpg",
   "credit": "(c) jose_canas_fotografia, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "br",
    "g"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "br"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "br"
   ],
   "belly": [
    "o",
    "r"
   ],
   "back": [
    "br",
    "y"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-finschi",
  "ko": "Crimson-fronted Parakeet",
  "en": "Crimson-fronted Parakeet",
  "sci": "Psittacara finschi",
  "region": "중앙아메리카 코스타리카·니카라과 숲·농경지",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Finsch's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/172916437/medium.jpg",
   "credit": "(c) Lydia Cox, some rights reserved (CC BY-NC), uploaded by Lydia Cox (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g"
    ],
    "crown": [
     "g"
    ],
    "belly": [
     "g",
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "zanda-latirostris",
  "ko": "Carnaby's Black Cockatoo",
  "en": "Carnaby's Black Cockatoo",
  "sci": "Zanda latirostris",
  "region": "오스트레일리아 남서부 유칼립투스 숲",
  "sizeCm": 58,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Carnaby's_black_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/287180277/medium.jpg",
   "credit": "(c) John Bromilow, some rights reserved (CC BY-NC), uploaded by John Bromilow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "k",
    "gr"
   ],
   "crown": [
    "k",
    "gr"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k",
    "gr"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "k",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "k",
    "gr"
   ],
   "belly": [
    "k",
    "gr"
   ],
   "back": [
    "k",
    "gr"
   ],
   "wing": [
    "k",
    "gr"
   ],
   "tail": [
    "k",
    "w"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": true,
   "crestColor": [
    "k",
    "gr"
   ],
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "w"
    ],
    "eyeSkinColor": "gr"
   },
   {
    "label": "어린 새",
    "beak": [
     "w"
    ],
    "eyeSkinColor": "gr",
    "tail": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "platycercus-caledonicus",
  "ko": "Green Rosella",
  "en": "Green Rosella",
  "sci": "Platycercus caledonicus",
  "region": "오스트레일리아 태즈메이니아 숲",
  "sizeCm": 36,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Green_rosella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/53221261/medium.jpg",
   "credit": "(c) Shane Walker, some rights reserved (CC BY), uploaded by Shane Walker (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "y"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "v",
    "b"
   ],
   "collar": "none",
   "breast": [
    "y",
    "r"
   ],
   "belly": [
    "y",
    "r"
   ],
   "back": [
    "k",
    "g"
   ],
   "wing": [
    "k",
    "g",
    "v"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "cheek": "none",
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "back": [
     "g"
    ],
    "wing": [
     "k",
     "br"
    ],
    "tail": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-xanthopterygius",
  "ko": "Cobalt-rumped Parrotlet",
  "en": "Cobalt-rumped Parrotlet",
  "sci": "Forpus xanthopterygius",
  "region": "남아메리카 아마존 저지대 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-winged_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/384587/medium.JPG",
   "credit": "(c) Carmelo López Abad, some rights reserved (CC BY-NC), uploaded by Carmelo López Abad (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-senilis",
  "ko": "White-crowned Parrot",
  "en": "White-crowned Parrot",
  "sci": "Pionus senilis",
  "region": "멕시코·중앙아메리카 저지대 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-crowned_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/250092444/medium.jpg",
   "credit": "(c) Dean Thompson, some rights reserved (CC BY-NC), uploaded by Dean Thompson (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "g",
    "b",
    "v"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "b",
    "g",
    "v"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "br",
    "g"
   ],
   "wing": [
    "g",
    "br",
    "v"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "y",
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "y",
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "aprosmictus-erythropterus",
  "ko": "Red-winged Parrot",
  "en": "Red-winged Parrot",
  "sci": "Aprosmictus erythropterus",
  "region": "오스트레일리아 북부·뉴기니 사바나 숲",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-winged_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159014131/medium.jpg",
   "credit": "(c) KityKat79, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "lg"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-novaezelandiae",
  "ko": "Red-crowned Parakeet",
  "en": "Red-crowned Parakeet",
  "sci": "Cyanoramphus novaezelandiae",
  "region": "뉴질랜드 및 인근 섬 숲",
  "sizeCm": 27,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-crowned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/409524714/medium.jpg",
   "credit": "(c) Oscar Thomas, some rights reserved (CC BY-NC), uploaded by Oscar Thomas (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg",
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "lg",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "lg",
    "r"
   ],
   "wing": [
    "lg",
    "b"
   ],
   "tail": [
    "lg"
   ],
   "beak": [
    "w",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-maximiliani",
  "ko": "Scaly-headed Parrot",
  "en": "Scaly-headed Parrot",
  "sci": "Pionus maximiliani",
  "region": "남아메리카 브라질·파라과이·아르헨티나 숲",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scaly-headed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/314019219/medium.jpg",
   "credit": "(c) David Rodriguez, some rights reserved (CC BY-NC), uploaded by David Rodriguez (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g",
    "br"
   ],
   "crown": [
    "k",
    "br"
   ],
   "forehead": [
    "k",
    "br"
   ],
   "face": [
    "g",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b",
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "crown": [
     "g"
    ],
    "breast": [
     "g",
     "b"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "diopsittaca-nobilis",
  "ko": "Red-shouldered Macaw",
  "en": "Red-shouldered Macaw",
  "sci": "Diopsittaca nobilis",
  "region": "남아메리카 브라질·볼리비아 사바나·숲 가장자리",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-shouldered_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157826775/medium.jpg",
   "credit": "(c) Diego Torres Silvestre, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "ara-ambiguus",
  "ko": "Great Green Macaw",
  "en": "Great Green Macaw",
  "sci": "Ara ambiguus",
  "region": "중앙아메리카·남아메리카 북서부 저지대 열대우림",
  "sizeCm": 90,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Great_green_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/251572277/medium.jpeg",
   "credit": "(c) Walter Welss, some rights reserved (CC BY-NC), uploaded by Walter Welss (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "sb"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "br",
    "sb"
   ],
   "beak": null,
   "eyeSkin": "face",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "tail": [
     "g",
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-coelestis",
  "ko": "Pacific Parrotlet",
  "en": "Pacific Parrotlet",
  "sci": "Forpus coelestis",
  "region": "남아메리카 에콰도르·페루 태평양 연안 건조림",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pacific_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/138583603/medium.jpeg",
   "credit": "(c) Nelson Apolo, some rights reserved (CC BY-NC), uploaded by Nelson Apolo (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g",
    "gr"
   ],
   "crown": [
    "gr",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "g"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "gr",
    "g"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "aratinga-weddellii",
  "ko": "Dusky-headed Parakeet",
  "en": "Dusky-headed Parakeet",
  "sci": "Aratinga weddellii",
  "region": "남아메리카 아마존 서부 저지대 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Dusky-headed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/272358567/medium.jpeg",
   "credit": "(c) Edison Araguillin, some rights reserved (CC BY-NC), uploaded by Edison Araguillin (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "gr",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-auropalliata",
  "ko": "Yellow-naped Amazon",
  "en": "Yellow-naped Amazon",
  "sci": "Amazona auropalliata",
  "region": "중앙아메리카 니카라과·코스타리카 건조림·맹그로브",
  "sizeCm": 38,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Yellow-naped_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/6012624/medium.jpeg",
   "credit": "(c) elizabeth1, some rights reserved (CC BY-NC), uploaded by elizabeth1 (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "y",
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-sulphurea",
  "ko": "Yellow-crested Cockatoo",
  "en": "Yellow-crested Cockatoo",
  "sci": "Cacatua sulphurea",
  "region": "인도네시아 술라웨시·소순다 열도, 동티모르 숲",
  "sizeCm": 34,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-crested_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/179243597/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "y",
    "o"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "enicognathus-ferrugineus",
  "ko": "Austral Parakeet",
  "en": "Austral Parakeet",
  "sci": "Enicognathus ferrugineus",
  "region": "남아메리카 최남단 파타고니아 노토파거스 숲",
  "sizeCm": 34,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Austral_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/198371508/medium.jpeg",
   "credit": "(c) Nicolas Olejnik, some rights reserved (CC BY), uploaded by Nicolas Olejnik (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "br"
   ],
   "forehead": [
    "br",
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "br"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "purpureicephalus-spurius",
  "ko": "Red-capped Parrot",
  "en": "Red-capped Parrot",
  "sci": "Purpureicephalus spurius",
  "region": "오스트레일리아 남서부 유칼립투스 숲",
  "sizeCm": 38,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-capped_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/55463036/medium.jpg",
   "credit": "(c) Jenny Donald, some rights reserved (CC BY-NC), uploaded by Jenny Donald (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g",
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "v"
   ],
   "belly": [
    "v",
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "breast": [
     "gr",
     "v"
    ],
    "belly": [
     "v",
     "g",
     "y"
    ]
   },
   {
    "label": "어린 새",
    "crown": [
     "g",
     "r"
    ],
    "forehead": [
     "r",
     "g"
    ],
    "face": [
     "g"
    ],
    "breast": [
     "v",
     "gr"
    ],
    "belly": [
     "g",
     "r"
    ],
    "beak": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psephotellus-varius",
  "ko": "Mulga Parrot",
  "en": "Mulga Parrot",
  "sci": "Psephotellus varius",
  "region": "오스트레일리아 남부 내륙 말리·관목지대",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Mulga_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/175496368/medium.jpg",
   "credit": "(c) Kym Nicolson, some rights reserved (CC BY), uploaded by Kym Nicolson (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "r"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "g",
    "lg"
   ],
   "wing": [
    "g",
    "y",
    "b"
   ],
   "tail": [
    "b",
    "g",
    "w"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "br",
     "r"
    ],
    "forehead": [
     "y",
     "br"
    ],
    "face": [
     "br"
    ],
    "throat": [
     "br"
    ],
    "breast": [
     "br"
    ],
    "belly": [
     "g"
    ],
    "beak": [
     "br",
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-longicauda",
  "ko": "Long-tailed Parakeet",
  "en": "Long-tailed Parakeet",
  "sci": "Psittacula longicauda",
  "region": "동남아시아 저지대 열대우림 (말레이반도·수마트라·보르네오)",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Long-tailed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/328604108/medium.jpeg",
   "credit": "(c) Dixon Lau, some rights reserved (CC BY-NC), uploaded by Dixon Lau (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-vernalis",
  "ko": "Vernal Hanging-Parrot",
  "en": "Vernal Hanging-Parrot",
  "sci": "Loriculus vernalis",
  "region": "인도 아대륙·동남아시아 삼림",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Vernal_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/103731438/medium.jpg",
   "credit": "(c) prajath, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "orthopsittaca-manilatus",
  "ko": "Red-bellied Macaw",
  "en": "Red-bellied Macaw",
  "sci": "Orthopsittaca manilatus",
  "region": "남아메리카 아마존 분지 야자나무 습지",
  "sizeCm": 46,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-bellied_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/35115974/medium.jpg",
   "credit": "(c) Paul Cools, some rights reserved (CC BY-NC), uploaded by Paul Cools (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "g"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "beak": [
     "gr",
     "w"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-leadbeateri",
  "ko": "Pink Cockatoo",
  "en": "Pink Cockatoo",
  "sci": "Cacatua leadbeateri",
  "region": "오스트레일리아 내륙 건조지대",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Major_Mitchell's_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/112785464/medium.jpeg",
   "credit": "(c) Jeff Melvaine, some rights reserved (CC BY-NC), uploaded by Jeff Melvaine (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "p"
   ],
   "crown": [
    "p"
   ],
   "forehead": [
    "p"
   ],
   "face": [
    "p"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "p"
   ],
   "belly": [
    "p",
    "w"
   ],
   "back": [
    "w",
    "p"
   ],
   "wing": [
    "w",
    "p"
   ],
   "tail": [
    "p",
    "w"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "r",
    "y",
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "polytelis-swainsonii",
  "ko": "Superb Parrot",
  "en": "Superb Parrot",
  "sci": "Polytelis swainsonii",
  "region": "오스트레일리아 남동부 강변 숲",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Superb_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/112430365/medium.jpeg",
   "credit": "(c) John Bromilow, some rights reserved (CC BY-NC), uploaded by John Bromilow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "r",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "b",
     "g"
    ],
    "throat": [
     "gr",
     "p"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "platycercus-icterotis",
  "ko": "Western Rosella",
  "en": "Western Rosella",
  "sci": "Platycercus icterotis",
  "region": "오스트레일리아 남서부 숲",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Western_rosella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/321987479/medium.jpg",
   "credit": "(c) wacrakey, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r",
    "g"
   ],
   "back": [
    "k",
    "r",
    "g"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "r",
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-versicolurus",
  "ko": "White-winged Parakeet",
  "en": "White-winged Parakeet",
  "sci": "Brotogeris versicolurus",
  "region": "남아메리카 아마존 저지대 (일부 도시에 귀화)",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/458309507/medium.jpeg",
   "credit": "(c) Justin Walker, some rights reserved (CC BY-NC), uploaded by Justin Walker (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "w",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-personatus",
  "ko": "Yellow-collared Lovebird",
  "en": "Yellow-collared Lovebird",
  "sci": "Agapornis personatus",
  "region": "탄자니아 북부 사바나",
  "sizeCm": 14.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-collared_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/337016949/medium.jpg",
   "credit": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k",
    "w"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "y"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-elegans",
  "ko": "Elegant Parrot",
  "en": "Elegant Parrot",
  "sci": "Neophema elegans",
  "region": "오스트레일리아 남부 관목지·초원",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Elegant_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157281809/medium.jpeg",
   "credit": "(c) Dustyn and Catherine, some rights reserved (CC BY-NC), uploaded by Dustyn and Catherine (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "lg"
   ],
   "wing": [
    "lg",
    "b"
   ],
   "tail": [
    "lg",
    "y",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-chalcopterus",
  "ko": "Bronze-winged Parrot",
  "en": "Bronze-winged Parrot",
  "sci": "Pionus chalcopterus",
  "region": "안데스산맥 서사면 구름숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Bronze-winged_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158982399/medium.jpg",
   "credit": "(c) Randy, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g",
    "br"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "br",
    "p"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "br",
    "g"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b",
    "r"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-cyanoptera",
  "ko": "Cobalt-winged Parakeet",
  "en": "Cobalt-winged Parakeet",
  "sci": "Brotogeris cyanoptera",
  "region": "아마존 서부 저지대 숲",
  "sizeCm": 20,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Cobalt-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/46954886/medium.jpg",
   "credit": "(c) stanlilley, some rights reserved (CC BY-NC), uploaded by stanlilley (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-cyanopygius",
  "ko": "Mexican Parrotlet",
  "en": "Mexican Parrotlet",
  "sci": "Forpus cyanopygius",
  "region": "멕시코 서부 태평양 연안 건조림",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Mexican_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/32526528/medium.jpeg",
   "credit": "(c) eduarditea, some rights reserved (CC BY-NC), uploaded by eduarditea (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "primolius-maracana",
  "ko": "Blue-winged Macaw",
  "en": "Blue-winged Macaw",
  "sci": "Primolius maracana",
  "region": "브라질 동부·남부 대서양림",
  "sizeCm": 43,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-winged_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/71880063/medium.jpg",
   "credit": "(c) Norton Santos, some rights reserved (CC BY-NC), uploaded by Norton Santos (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "r",
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "b",
    "g"
   ],
   "tail": [
    "g",
    "b",
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "lathamus-discolor",
  "ko": "Swift Parrot",
  "en": "Swift Parrot",
  "sci": "Lathamus discolor",
  "region": "태즈메이니아 번식, 오스트레일리아 남동부 월동 (철새)",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Swift_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/332002192/medium.jpg",
   "credit": "(c) David de Groot, some rights reserved (CC BY-NC), uploaded by David de Groot (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-meyeri",
  "ko": "Meyer's Parrot",
  "en": "Meyer's Parrot",
  "sci": "Poicephalus meyeri",
  "region": "아프리카 동·중부 사바나",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Meyer's_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/337875683/medium.jpg",
   "credit": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "y",
    "k"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "sb"
   ],
   "back": [
    "k",
    "b"
   ],
   "wing": [
    "k",
    "y"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-galgulus",
  "ko": "Blue-crowned Hanging-Parrot",
  "en": "Blue-crowned Hanging-Parrot",
  "sci": "Loriculus galgulus",
  "region": "말레이반도·수마트라·보르네오 저지대 숲",
  "sizeCm": 12,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-crowned_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64901100/medium.jpg",
   "credit": "(c) Lip Kee, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "y",
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "northiella-haematogaster",
  "ko": "Greater Bluebonnet",
  "en": "Greater Bluebonnet",
  "sci": "Northiella haematogaster",
  "region": "오스트레일리아 내륙 건조 관목지",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Eastern_bluebonnet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/133009/medium.jpg",
   "credit": "(c) David Cook, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "gr"
   ],
   "crown": [
    "br",
    "gr"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "br",
    "gr"
   ],
   "belly": [
    "y",
    "r"
   ],
   "back": [
    "br",
    "gr"
   ],
   "wing": [
    "b",
    "y"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "belly": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "eclectus-polychloros",
  "ko": "Papuan Eclectus",
  "en": "Papuan Eclectus",
  "sci": "Eclectus polychloros",
  "region": "뉴기니·주변 섬 열대우림",
  "sizeCm": 35,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Papuan_eclectus",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/253840423/medium.jpg",
   "credit": "(c) Rob Solic, some rights reserved (CC BY-NC), uploaded by Rob Solic (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (초록)"
   },
   {
    "label": "암컷 (빨강·파랑)",
    "main": [
     "r",
     "b"
    ],
    "crown": [
     "r"
    ],
    "forehead": [
     "r"
    ],
    "face": [
     "r"
    ],
    "throat": [
     "r"
    ],
    "breast": [
     "b",
     "v"
    ],
    "belly": [
     "b",
     "v"
    ],
    "back": [
     "r",
     "br"
    ],
    "wing": [
     "r",
     "v"
    ],
    "tail": [
     "r",
     "o"
    ],
    "beak": [
     "k"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "b"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-chrysostoma",
  "ko": "Blue-winged Parrot",
  "en": "Blue-winged Parrot",
  "sci": "Neophema chrysostoma",
  "region": "태즈메이니아·오스트레일리아 남동부 초원",
  "sizeCm": 21,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-winged_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/241698019/medium.jpg",
   "credit": "(c) zebsphotography, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "lg"
   ],
   "wing": [
    "lg",
    "b"
   ],
   "tail": [
    "lg",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-haematodus",
  "ko": "Coconut Lorikeet",
  "en": "Coconut Lorikeet",
  "sci": "Trichoglossus haematodus",
  "region": "뉴기니·인도네시아 동부 열대림",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Coconut_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/269684159/medium.jpg",
   "credit": "(c) David J Barton, some rights reserved (CC BY-NC), uploaded by David J Barton (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "b"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "lg",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-haematotis",
  "ko": "Brown-hooded Parrot",
  "en": "Brown-hooded Parrot",
  "sci": "Pyrilia haematotis",
  "region": "멕시코 남부~중앙아메리카, 콜롬비아·에콰도르 북서부 저지대 숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown-hooded_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64607161/medium.jpg",
   "credit": "(c) Anneke Jonker, some rights reserved (CC BY-NC), uploaded by Anneke Jonker (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "r"
   ],
   "forehead": [
    "br",
    "r"
   ],
   "face": [
    "br",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "r"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psitteuteles-porphyrocephalus",
  "ko": "Purple-crowned Lorikeet",
  "en": "Purple-crowned Lorikeet",
  "sci": "Psitteuteles porphyrocephalus",
  "region": "오스트레일리아 남부 유칼립투스 숲·말리",
  "sizeCm": 15,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Purple-crowned_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/29673329/medium.jpg",
   "credit": "(c) Alan Melville, some rights reserved (CC BY-NC-ND), uploaded by Alan Melville (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "o",
    "y"
   ],
   "face": [
    "o",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "sb"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "sb"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "o"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-rubritorquis",
  "ko": "Red-collared Lorikeet",
  "en": "Red-collared Lorikeet",
  "sci": "Trichoglossus rubritorquis",
  "region": "오스트레일리아 북부(탑엔드) 사바나·숲",
  "sizeCm": 26,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-collared_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/10151673/medium.jpg",
   "credit": "(c) Tan Kok Hui, some rights reserved (CC BY-NC), uploaded by Tan Kok Hui (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": [
    "o",
    "r"
   ],
   "breast": [
    "o",
    "r"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-passerinus",
  "ko": "Green-rumped Parrotlet",
  "en": "Green-rumped Parrotlet",
  "sci": "Forpus passerinus",
  "region": "남아메리카 북부(베네수엘라·콜롬비아·브라질 북부) 저지대",
  "sizeCm": 12,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Green-rumped_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/65615037/medium.jpeg",
   "credit": "(c) Nelson Wisnik, some rights reserved (CC BY-NC), uploaded by Nelson Wisnik (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "gr"
   ],
   "wing": [
    "b",
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ],
    "crown": [
     "y",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "zanda-baudinii",
  "ko": "Baudin's Black Cockatoo",
  "en": "Baudin's Black Cockatoo",
  "sci": "Zanda baudinii",
  "region": "오스트레일리아 남서부 숲",
  "sizeCm": 56,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Baudin's_black_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/321031882/medium.jpg",
   "credit": "(c) wacrakey, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "k",
    "w"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": true,
   "crestColor": [
    "gr"
   ],
   "tailShape": "mid",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "w"
    ],
    "eyeSkinColor": "gr"
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-cryptoxanthus",
  "ko": "Brown-headed Parrot",
  "en": "Brown-headed Parrot",
  "sci": "Poicephalus cryptoxanthus",
  "region": "아프리카 남동부 해안 삼림(모잠비크·탄자니아·케냐)",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown-headed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/410668181/medium.jpg",
   "credit": "(c) lance_robinson, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": [
    "k",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "polytelis-anthopeplus",
  "ko": "Regent Parrot",
  "en": "Regent Parrot",
  "sci": "Polytelis anthopeplus",
  "region": "오스트레일리아 남서부·남부 내륙 삼림",
  "sizeCm": 42,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Regent_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/335751119/medium.jpg",
   "credit": "(c) Matt Campbell, some rights reserved (CC BY-NC), uploaded by Matt Campbell (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "y"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g",
    "y"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "b",
    "k"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "main": [
     "g"
    ],
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "aratinga-jandaya",
  "ko": "Jandaya Parakeet",
  "en": "Jandaya Parakeet",
  "sci": "Aratinga jandaya",
  "region": "브라질 북동부",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Jandaya_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/163703172/medium.jpeg",
   "credit": "(c) Lucas C. Marinho, some rights reserved (CC BY-NC), uploaded by Lucas C. Marinho (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "o"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "o"
   ],
   "collar": "none",
   "breast": [
    "o",
    "r"
   ],
   "belly": [
    "b",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psilopsiagon-aymara",
  "ko": "Gray-hooded Parakeet",
  "en": "Gray-hooded Parakeet",
  "sci": "Psilopsiagon aymara",
  "region": "안데스 산지(볼리비아·아르헨티나·칠레 북부)",
  "sizeCm": 20,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Grey-hooded_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/1152855/medium.jpg",
   "credit": "(c) Nicolas Olejnik, some rights reserved (CC BY), uploaded by Nicolas Olejnik (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": null,
   "cheek": "none",
   "throat": [
    "w",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "w",
    "gr"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "aratinga-auricapillus",
  "ko": "Golden-capped Parakeet",
  "en": "Golden-capped Parakeet",
  "sci": "Aratinga auricapillus",
  "region": "브라질 동부",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Golden-capped_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/118279128/medium.jpg",
   "credit": "(c) Luciano Bernardes, some rights reserved (CC BY-NC), uploaded by Luciano Bernardes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "r"
   ],
   "forehead": [
    "r",
    "y"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "o",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "eupsittula-cactorum",
  "ko": "Cactus Parakeet",
  "en": "Cactus Parakeet",
  "sci": "Eupsittula cactorum",
  "region": "브라질 북동부 카칭가(건조 관목지대)",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Caatinga_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/141276572/medium.jpg",
   "credit": "(c) Breno Farias, some rights reserved (CC BY-NC), uploaded by Breno Farias (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "br"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-goffiniana",
  "ko": "Tanimbar Corella",
  "en": "Tanimbar Corella",
  "sci": "Cacatua goffiniana",
  "region": "인도네시아 탄님바르 제도",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Tanimbar_corella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/337787529/medium.jpeg",
   "credit": "no rights reserved, uploaded by James Eaton (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "p"
   ],
   "face": [
    "p"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "p"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "probosciger-aterrimus",
  "ko": "Palm Cockatoo",
  "en": "Palm Cockatoo",
  "sci": "Probosciger aterrimus",
  "region": "뉴기니, 오스트레일리아 케이프요크 반도",
  "sizeCm": 60,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Palm_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/256916871/medium.jpg",
   "credit": "(c) Mark Simpson, some rights reserved (CC BY-NC), uploaded by Mark Simpson (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "k"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "r",
   "crest": true,
   "crestColor": [
    "k"
   ],
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-wagleri",
  "ko": "Scarlet-fronted Parakeet",
  "en": "Scarlet-fronted Parakeet",
  "sci": "Psittacara wagleri",
  "region": "남아메리카 북부 안데스(베네수엘라~볼리비아)",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scarlet-fronted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/60173896/medium.jpg",
   "credit": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "r"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyclopsitta-diophthalma",
  "ko": "Double-eyed Fig Parrot",
  "en": "Double-eyed Fig Parrot",
  "sci": "Cyclopsitta diophthalma",
  "region": "뉴기니, 오스트레일리아 북동부 열대우림",
  "sizeCm": 14,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Double-eyed_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/599926690/medium.jpg",
   "credit": "(c) Owen Lishmund, some rights reserved (CC BY-NC), uploaded by Owen Lishmund (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "r",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "b",
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-vinacea",
  "ko": "Vinaceous-breasted Amazon",
  "en": "Vinaceous-breasted Amazon",
  "sci": "Amazona vinacea",
  "region": "브라질 남동부·아르헨티나·파라과이 대서양림",
  "sizeCm": 36,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Vinaceous-breasted_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/258128302/medium.jpg",
   "credit": "(c) sobania, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "v",
    "p"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "sb"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "p",
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-strenuus",
  "ko": "Pacific Parakeet",
  "en": "Pacific Parakeet",
  "sci": "Psittacara strenuus",
  "region": "중앙아메리카(멕시코 남부~니카라과)",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pacific_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/177135578/medium.jpg",
   "credit": "(c) Don Marsille, some rights reserved (CC BY-NC), uploaded by Don Marsille (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "r"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-auriceps",
  "ko": "Yellow-crowned Parakeet",
  "en": "Yellow-crowned Parakeet",
  "sci": "Cyanoramphus auriceps",
  "region": "뉴질랜드 숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-crowned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/57107378/medium.jpeg",
   "credit": "(c) Ben Weatherley, some rights reserved (CC BY-NC), uploaded by Ben Weatherley (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "v"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-leucocephala",
  "ko": "Cuban Amazon",
  "en": "Cuban Amazon",
  "sci": "Amazona leucocephala",
  "region": "쿠바, 바하마 제도, 케이맨 제도",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Cuban_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/16664274/medium.jpg",
   "credit": "(c) mamu_man, some rights reserved (CC BY-NC), uploaded by mamu_man (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "p",
    "sb"
   ],
   "cheek": [
    "k"
   ],
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "r",
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-columboides",
  "ko": "Malabar Parakeet",
  "en": "Malabar Parakeet",
  "sci": "Psittacula columboides",
  "region": "인도 서고츠 산맥",
  "sizeCm": 37,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/107007214/medium.jpeg",
   "credit": "(c) Manuel Ruedi, some rights reserved (CC BY-NC), uploaded by Manuel Ruedi (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "sb",
    "gr"
   ],
   "crown": [
    "sb",
    "gr"
   ],
   "forehead": [
    "sb",
    "gr"
   ],
   "face": [
    "sb",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "sb",
    "gr"
   ],
   "collar": [
    "k",
    "g"
   ],
   "breast": [
    "sb",
    "gr"
   ],
   "belly": [
    "sb",
    "gr"
   ],
   "back": [
    "sb",
    "gr"
   ],
   "wing": [
    "b",
    "sb"
   ],
   "tail": [
    "sb",
    "y"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "collar": [
     "k"
    ],
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psitteuteles-pusillus",
  "ko": "Little Lorikeet",
  "en": "Little Lorikeet",
  "sci": "Psitteuteles pusillus",
  "region": "오스트레일리아 북부 삼림지대",
  "sizeCm": 15,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Little_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/91942214/medium.jpeg",
   "credit": "(c) Anthony Katon, some rights reserved (CC BY-NC), uploaded by Anthony Katon (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-pulchella",
  "ko": "Turquoise Parrot",
  "en": "Turquoise Parrot",
  "sci": "Neophema pulchella",
  "region": "오스트레일리아 남동부 관목지대",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Turquoise_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/30680196/medium.jpg",
   "credit": "(c) David McCorquodale, some rights reserved (CC BY-NC), uploaded by David McCorquodale (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "b",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "k",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "sb"
    ],
    "face": [
     "sb"
    ],
    "throat": [
     "g"
    ],
    "wing": [
     "b"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "w",
    "beak": [
     "gr",
     "w"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-sordidus",
  "ko": "Red-billed Parrot",
  "en": "Red-billed Parrot",
  "sci": "Pionus sordidus",
  "region": "남아메리카 북서부 안데스 산지 숲",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-billed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/54296584/medium.jpg",
   "credit": "(c) Felipe Campos, some rights reserved (CC BY-NC), uploaded by Felipe Campos (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "b"
   ],
   "forehead": [
    "g",
    "b"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b"
   ],
   "belly": [
    "br",
    "p"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-himalayana",
  "ko": "Slaty-headed Parakeet",
  "en": "Slaty-headed Parakeet",
  "sci": "Psittacula himalayana",
  "region": "히말라야~동남아시아 산지 숲",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Slaty-headed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159251764/medium.jpg",
   "credit": "(c) Koshy Koshy, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "br"
   ],
   "tail": [
    "g",
    "b",
    "y"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ],
    "tailShape": "mid"
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-sanctithomae",
  "ko": "Tui Parakeet",
  "en": "Tui Parakeet",
  "sci": "Brotogeris sanctithomae",
  "region": "아마존 분지 열대우림",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Tui_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158896010/medium.jpg",
   "credit": "(c) Félix Uribe, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "br"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "primolius-auricollis",
  "ko": "Yellow-collared Macaw",
  "en": "Yellow-collared Macaw",
  "sci": "Primolius auricollis",
  "region": "남아메리카 중부 건조림(볼리비아·브라질·파라과이·아르헨티나)",
  "sizeCm": 38,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Golden-collared_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/92152569/medium.jpg",
   "credit": "(c) doug_clarke, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k",
    "br"
   ],
   "forehead": [
    "k",
    "br"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "r",
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-beryllinus",
  "ko": "Sri Lanka Hanging-Parrot",
  "en": "Sri Lanka Hanging-Parrot",
  "sci": "Loriculus beryllinus",
  "region": "스리랑카 고유종, 산지 숲",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sri_Lanka_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/95897071/medium.jpg",
   "credit": "(c) Ravisara Jayamanna, some rights reserved (CC BY-NC), uploaded by Ravisara Jayamanna (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "sb"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "o"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "back": [
     "g"
    ],
    "throat": [
     "sb"
    ],
    "beak": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-festiva",
  "ko": "Festive Amazon",
  "en": "Festive Amazon",
  "sci": "Amazona festiva",
  "region": "아마존 강 유역 범람림",
  "sizeCm": 34,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Festive_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/130246133/medium.jpeg",
   "credit": "(c) Edwin Múnera Chavarría, some rights reserved (CC BY-NC), uploaded by Edwin Múnera Chavarría (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "b",
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-petrophila",
  "ko": "Rock Parrot",
  "en": "Rock Parrot",
  "sci": "Neophema petrophila",
  "region": "오스트레일리아 남부 해안 바위지대",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rock_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/278320126/medium.jpg",
   "credit": "(c) Tom Hunt, some rights reserved (CC BY-NC), uploaded by Tom Hunt (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "sb"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "br",
    "b"
   ],
   "tail": [
    "sb",
    "y"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-moluccensis",
  "ko": "Salmon-crested Cockatoo",
  "en": "Salmon-crested Cockatoo",
  "sci": "Cacatua moluccensis",
  "region": "인도네시아 몰루카 제도(세람 섬) 열대우림",
  "sizeCm": 50,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Salmon-crested_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/263625646/medium.jpg",
   "credit": "(c) Kyle Pearce, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "p",
    "w"
   ],
   "forehead": [
    "w",
    "p"
   ],
   "face": [
    "w",
    "p"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "p",
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w",
    "o"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": true,
   "crestColor": [
    "p",
    "o"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-xantholora",
  "ko": "Yellow-lored Amazon",
  "en": "Yellow-lored Amazon",
  "sci": "Amazona xantholora",
  "region": "유카탄 반도(멕시코·벨리즈) 건조림",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yucatan_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/2291842/medium.JPG",
   "credit": "(c) J. Ismael Arellano Ciau, some rights reserved (CC BY-NC), uploaded by J. Ismael Arellano Ciau (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "y",
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-pulchra",
  "ko": "Rose-faced Parrot",
  "en": "Rose-faced Parrot",
  "sci": "Pyrilia pulchra",
  "region": "콜롬비아·에콰도르 태평양 연안 저지대 숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rose-faced_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/471658689/medium.jpeg",
   "credit": "(c) Alexandre Terrigeol, some rights reserved (CC BY-NC-ND), uploaded by Alexandre Terrigeol (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "r"
   ],
   "forehead": [
    "p"
   ],
   "face": [
    "p"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "k",
    "o"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "rhynchopsitta-terrisi",
  "ko": "Maroon-fronted Parrot",
  "en": "Maroon-fronted Parrot",
  "sci": "Rhynchopsitta terrisi",
  "region": "멕시코 북동부 시에라마드레오리엔탈 침엽수림",
  "sizeCm": 45,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Maroon-fronted_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/249378304/medium.jpg",
   "credit": "(c) Leonardo Guzmán, some rights reserved (CC BY-NC-ND), uploaded by Leonardo Guzmán (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "k",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "beak": [
     "w"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "geoffroyus-geoffroyi",
  "ko": "Red-cheeked Parrot",
  "en": "Red-cheeked Parrot",
  "sci": "Geoffroyus geoffroyi",
  "region": "뉴기니 및 인근 섬 열대우림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-cheeked_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/360987940/medium.jpeg",
   "credit": "(c) Abu Hamas, some rights reserved (CC BY-SA), uploaded by Abu Hamas (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "v"
   ],
   "face": [
    "r",
    "p"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "br",
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "p",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "br"
    ],
    "forehead": [
     "br"
    ],
    "face": [
     "br",
     "g"
    ],
    "throat": [
     "br"
    ],
    "beak": [
     "br",
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "enicognathus-leptorhynchus",
  "ko": "Slender-billed Parakeet",
  "en": "Slender-billed Parakeet",
  "sci": "Enicognathus leptorhynchus",
  "region": "칠레 중남부 숲",
  "sizeCm": 40,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Slender-billed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/29552701/medium.jpeg",
   "credit": "(c) Alexander Görlt, some rights reserved (CC BY-NC), uploaded by Alexander Görlt (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "r",
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "main": [
     "g"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "w"
   }
  ],
  "koMissing": true
 },
 {
  "id": "deroptyus-accipitrinus",
  "ko": "Red-fan Parrot",
  "en": "Red-fan Parrot",
  "sci": "Deroptyus accipitrinus",
  "region": "아마존 분지 열대우림",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-fan_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64881892/medium.jpg",
   "credit": "(c) Frank Dietze, some rights reserved (CC BY), uploaded by Frank Dietze (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "w"
   ],
   "forehead": [
    "br",
    "w"
   ],
   "face": [
    "br",
    "w"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "w"
   ],
   "collar": "none",
   "breast": [
    "r",
    "b"
   ],
   "belly": [
    "r",
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "k",
   "crest": true,
   "crestColor": [
    "r",
    "b"
   ],
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "alipiopsitta-xanthops",
  "ko": "Yellow-faced Parrot",
  "en": "Yellow-faced Parrot",
  "sci": "Alipiopsitta xanthops",
  "region": "브라질 세하두 사바나",
  "sizeCm": 27,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-faced_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/275319999/medium.jpg",
   "credit": "(c) abelardomendesjr, some rights reserved (CC BY-NC), uploaded by abelardomendesjr (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neopsephotus-bourkii",
  "ko": "Bourke's Parrot",
  "en": "Bourke's Parrot",
  "sci": "Neopsephotus bourkii",
  "region": "오스트레일리아 내륙 건조지대",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Bourke's_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/264897644/medium.jpg",
   "credit": "(c) JJ Harrison, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "p"
   ],
   "belly": [
    "p"
   ],
   "back": [
    "br",
    "b"
   ],
   "wing": [
    "br"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "y",
    "br"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionites-leucogaster",
  "ko": "White-bellied Parrot",
  "en": "White-bellied Parrot",
  "sci": "Pionites leucogaster",
  "region": "아마존 남부 열대우림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Green-thighed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/432053134/medium.jpg",
   "credit": "(c) Luciano Bernardes, some rights reserved (CC BY-NC), uploaded by Luciano Bernardes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "o"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y",
    "w"
   ],
   "belly": [
    "w",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "rhynchopsitta-pachyrhyncha",
  "ko": "Thick-billed Parrot",
  "en": "Thick-billed Parrot",
  "sci": "Rhynchopsitta pachyrhyncha",
  "region": "멕시코 북서부 시에라마드레옥시덴탈 침엽수림",
  "sizeCm": 38,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Thick-billed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/102436108/medium.jpg",
   "credit": "(c) Hennie Cuper, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-hoffmanni",
  "ko": "Sulphur-winged Parakeet",
  "en": "Sulphur-winged Parakeet",
  "sci": "Pyrrhura hoffmanni",
  "region": "코스타리카·파나마 고산 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sulphur-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/199465060/medium.jpg",
   "credit": "(c) steven_bach, some rights reserved (CC BY-NC), uploaded by steven_bach (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "br"
   ],
   "belly": [
    "br",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-canus",
  "ko": "Grey-headed Lovebird",
  "en": "Grey-headed Lovebird",
  "sci": "Agapornis canus",
  "region": "마다가스카르",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Grey-headed_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/9092025/medium.jpeg",
   "credit": "(c) markus lilje, some rights reserved (CC BY-NC-ND), uploaded by markus lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (회색머리)"
   },
   {
    "label": "암컷 (초록머리)",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "tanygnathus-lucionensis",
  "ko": "Blue-naped Parrot",
  "en": "Blue-naped Parrot",
  "sci": "Tanygnathus lucionensis",
  "region": "필리핀 숲·농경지",
  "sizeCm": 31,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-naped_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/655850828/medium.jpg",
   "credit": "(c) Sebastian Ow, some rights reserved (CC BY-NC), uploaded by Sebastian Ow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "sb"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "sb"
   ],
   "wing": [
    "g",
    "br",
    "k"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-barrabandi",
  "ko": "Orange-cheeked Parrot",
  "en": "Orange-cheeked Parrot",
  "sci": "Pyrilia barrabandi",
  "region": "아마존 북서부 열대우림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-cheeked_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/118300227/medium.jpg",
   "credit": "(c) Luciano Bernardes, some rights reserved (CC BY-NC), uploaded by Luciano Bernardes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": [
    "o"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "o",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "br"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "br"
    ],
    "wing": [
     "g",
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-rufiventris",
  "ko": "Red-bellied Parrot",
  "en": "Red-bellied Parrot",
  "sci": "Poicephalus rufiventris",
  "region": "동아프리카(에티오피아·소말리아·케냐) 건조 사바나",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-bellied_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/46238556/medium.jpg",
   "credit": "(c) Donald Hampton, some rights reserved (CC BY-SA), uploaded by Donald Hampton (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "gr",
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "o"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "coracopsis-vasa",
  "ko": "Greater Vasa Parrot",
  "en": "Greater Vasa Parrot",
  "sci": "Coracopsis vasa",
  "region": "마다가스카르·코모로 제도",
  "sizeCm": 50,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Greater_vasa_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/112161986/medium.jpg",
   "credit": "(c) Janne Asp, some rights reserved (CC BY-NC-ND), uploaded by Janne Asp (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "gr"
   ],
   "crown": [
    "br",
    "gr"
   ],
   "forehead": [
    "br",
    "gr"
   ],
   "face": [
    "br",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "br"
   ],
   "belly": [
    "gr",
    "br"
   ],
   "back": [
    "br",
    "gr"
   ],
   "wing": [
    "br",
    "gr"
   ],
   "tail": [
    "br",
    "gr"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-chloropterus",
  "ko": "Hispaniolan Parakeet",
  "en": "Hispaniolan Parakeet",
  "sci": "Psittacara chloropterus",
  "region": "히스파니올라 섬(도미니카공화국·아이티)",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Hispaniolan_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/217474051/medium.jpg",
   "credit": "(c) Pedro Genaro Rodriguez, some rights reserved (CC BY-NC), uploaded by Pedro Genaro Rodriguez (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-melanura",
  "ko": "Maroon-tailed Parakeet",
  "en": "Maroon-tailed Parakeet",
  "sci": "Pyrrhura melanura",
  "region": "아마존 서부(콜롬비아·에콰도르·페루·브라질)",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Maroon-tailed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158993196/medium.jpg",
   "credit": "(c) ProAves Colombia, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "w"
   ],
   "collar": "none",
   "breast": [
    "g",
    "w"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "guaruba-guarouba",
  "ko": "Golden Parakeet",
  "en": "Golden Parakeet",
  "sci": "Guaruba guarouba",
  "region": "브라질 아마존 동부",
  "sizeCm": 36,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Golden_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/190756616/medium.jpg",
   "credit": "(c) Nereston (Nelinho) Camargo, some rights reserved (CC BY-NC), uploaded by Nereston (Nelinho) Camargo (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "y"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "y"
   ],
   "wing": [
    "y",
    "g"
   ],
   "tail": [
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "back": [
     "g",
     "y"
    ],
    "breast": [
     "g",
     "y"
    ],
    "tail": [
     "g"
    ],
    "beak": [
     "gr"
    ],
    "eyeSkinColor": "gr"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-philippensis",
  "ko": "Philippine Hanging-Parrot",
  "en": "Philippine Hanging-Parrot",
  "sci": "Loriculus philippensis",
  "region": "필리핀 제도",
  "sizeCm": 14,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Philippine_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/350052444/medium.jpg",
   "credit": "(c) shierandrulist, some rights reserved (CC BY-NC), uploaded by shierandrulist (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g",
    "r"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ]
   },
   {
    "label": "어린 새",
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "forehead": [
     "r",
     "g"
    ],
    "beak": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-mercenarius",
  "ko": "Scaly-naped Amazon",
  "en": "Scaly-naped Amazon",
  "sci": "Amazona mercenarius",
  "region": "안데스 산맥(콜롬비아~볼리비아) 산림",
  "sizeCm": 34,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scaly-naped_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/363897343/medium.jpg",
   "credit": "(c) Don Marsille, some rights reserved (CC BY-NC), uploaded by Don Marsille (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "k"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "o"
   ],
   "tail": [
    "g",
    "y",
    "v"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-roseata",
  "ko": "Blossom-headed Parakeet",
  "en": "Blossom-headed Parakeet",
  "sci": "Psittacula roseata",
  "region": "히말라야 동부~인도차이나 저지대 숲",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blossom-headed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/115397108/medium.jpg",
   "credit": "(c) Md. Zaber Ansary, some rights reserved (CC BY-NC), uploaded by Md. Zaber Ansary (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "p",
    "v"
   ],
   "forehead": [
    "p",
    "v"
   ],
   "face": [
    "p",
    "v"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "b",
    "y"
   ],
   "beak": [
    "o",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr",
     "g"
    ],
    "forehead": [
     "gr",
     "g"
    ],
    "face": [
     "gr",
     "g"
    ],
    "throat": [
     "g"
    ],
    "collar": "none",
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-lory",
  "ko": "Black-capped Lory",
  "en": "Black-capped Lory",
  "sci": "Lorius lory",
  "region": "뉴기니 저지대 열대우림",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-capped_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/242616808/medium.jpeg",
   "credit": "(c) Pankaj Nirale, some rights reserved (CC BY-NC), uploaded by Pankaj Nirale (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r",
    "b"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "r",
    "k"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psephotellus-dissimilis",
  "ko": "Hooded Parrot",
  "en": "Hooded Parrot",
  "sci": "Psephotellus dissimilis",
  "region": "오스트레일리아 북부(노던준주) 사바나",
  "sizeCm": 26,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Hooded_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/54694201/medium.jpg",
   "credit": "(c) Mick Jerram, some rights reserved (CC BY-NC), uploaded by Mick Jerram (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "sb",
    "br"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "sb"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "br",
    "y"
   ],
   "tail": [
    "g",
    "sb"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr",
     "br"
    ],
    "forehead": [
     "gr",
     "br"
    ],
    "face": [
     "gr",
     "br"
    ],
    "throat": [
     "gr",
     "br"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ],
    "back": [
     "g"
    ],
    "wing": [
     "g"
    ],
    "tail": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-ventralis",
  "ko": "Hispaniolan Amazon",
  "en": "Hispaniolan Amazon",
  "sci": "Amazona ventralis",
  "region": "히스파니올라 섬",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Hispaniolan_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64465180/medium.jpg",
   "credit": "(c) Pedro Genaro Rodriguez, some rights reserved (CC BY-NC), uploaded by Pedro Genaro Rodriguez (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "g",
    "k"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "r",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y",
    "r"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-calthrapae",
  "ko": "Layard's Parakeet",
  "en": "Layard's Parakeet",
  "sci": "Psittacula calthrapae",
  "region": "스리랑카 숲",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Layard's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8235406/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "g"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "y"
   ],
   "beak": [
    "r",
    "br"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "g",
     "gr"
    ],
    "beak": [
     "k"
    ]
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "back": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "collar": "none",
    "beak": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psilopsiagon-aurifrons",
  "ko": "Mountain Parakeet",
  "en": "Mountain Parakeet",
  "sci": "Psilopsiagon aurifrons",
  "region": "안데스 산맥 고산지대(페루·볼리비아·칠레·아르헨티나)",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Mountain_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/50860121/medium.jpg",
   "credit": "(c) Darío De la Fuente, some rights reserved (CC BY), uploaded by Darío De la Fuente (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g",
    "y"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-pyrrhoptera",
  "ko": "Gray-cheeked Parakeet",
  "en": "Gray-cheeked Parakeet",
  "sci": "Brotogeris pyrrhoptera",
  "region": "에콰도르·페루 북서부 건조림",
  "sizeCm": 20.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Grey-cheeked_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/395414/medium.jpg",
   "credit": "(c) Ronald Navarrete, some rights reserved (CC BY-NC), uploaded by Ronald Navarrete (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "sb"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": [
    "gr"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "platycercus-venustus",
  "ko": "Northern Rosella",
  "en": "Northern Rosella",
  "sci": "Platycercus venustus",
  "region": "오스트레일리아 북부(킴벌리~아른헴랜드) 사바나",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Northern_rosella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/48827904/medium.jpeg",
   "credit": "(c) Graham Winterflood, some rights reserved (CC BY-SA), uploaded by Graham Winterflood (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "y",
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": [
    "w",
    "v"
   ],
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "y",
    "k"
   ],
   "belly": [
    "y",
    "k"
   ],
   "back": [
    "k",
    "y"
   ],
   "wing": [
    "v",
    "k"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-vittata",
  "ko": "Puerto Rican Amazon",
  "en": "Puerto Rican Amazon",
  "sci": "Amazona vittata",
  "region": "푸에르토리코",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Puerto_Rican_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157591938/medium.jpg",
   "credit": "(c) U.S. Fish and Wildlife Service Southeast Region, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "brotogeris-chrysoptera",
  "ko": "Golden-winged Parakeet",
  "en": "Golden-winged Parakeet",
  "sci": "Brotogeris chrysoptera",
  "region": "남아메리카 아마존 분지 열대우림",
  "sizeCm": 16,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Golden-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157246723/medium.jpeg",
   "credit": "(c) Tomaz Nascimento de Melo, some rights reserved (CC BY-NC-ND), uploaded by Tomaz Nascimento de Melo (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "o"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "o"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (기준아종)"
   },
   {
    "label": "어린 새",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psitteuteles-versicolor",
  "ko": "Varied Lorikeet",
  "en": "Varied Lorikeet",
  "sci": "Psitteuteles versicolor",
  "region": "오스트레일리아 북부 사바나·우림",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Varied_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/91719606/medium.jpeg",
   "credit": "(c) Graham Winterflood, some rights reserved (CC BY-SA), uploaded by Graham Winterflood (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "v",
    "y"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g",
     "r"
    ],
    "breast": [
     "v",
     "g"
    ]
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "o"
    ],
    "face": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "beak": [
     "br",
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-brasiliensis",
  "ko": "Red-tailed Amazon",
  "en": "Red-tailed Amazon",
  "sci": "Amazona brasiliensis",
  "region": "브라질 남동부 해안 대서양림",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-tailed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/230183784/medium.jpg",
   "credit": "(c) Luciano Bernardes, some rights reserved (CC BY-NC), uploaded by Luciano Bernardes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "v"
   ],
   "cheek": "none",
   "throat": [
    "v"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "k",
    "r"
   ],
   "tail": [
    "r",
    "y",
    "b"
   ],
   "beak": [
    "y",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "ognorhynchus-icterotis",
  "ko": "Yellow-eared Parrot",
  "en": "Yellow-eared Parrot",
  "sci": "Ognorhynchus icterotis",
  "region": "콜롬비아·에콰도르 안데스 고산 왁스야자 숲 (멸종위기)",
  "sizeCm": 42,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-eared_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/97396269/medium.jpg",
   "credit": "(c) Arley Vargas, some rights reserved (CC BY-NC-ND) (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "graydidascalus-brachyurus",
  "ko": "Short-tailed Parrot",
  "en": "Short-tailed Parrot",
  "sci": "Graydidascalus brachyurus",
  "region": "아마존 분지 강변 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Short-tailed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157315163/medium.jpeg",
   "credit": "(c) Tomaz Nascimento de Melo, some rights reserved (CC BY-NC-ND), uploaded by Tomaz Nascimento de Melo (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "gr",
    "g"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "tail": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "leptosittaca-branickii",
  "ko": "Golden-plumed Parakeet",
  "en": "Golden-plumed Parakeet",
  "sci": "Leptosittaca branickii",
  "region": "콜롬비아·에콰도르·페루 안데스 구름숲",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Golden-plumed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/45204910/medium.jpg",
   "credit": "(c) George Armistead/Hillstar Nature, some rights reserved (CC BY-NC), uploaded by George Armistead/Hillstar Nature (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "o"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "y",
    "g",
    "o"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "y"
   ],
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "belly": [
     "g",
     "y",
     "o"
    ],
    "beak": [
     "p"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "ara-rubrogenys",
  "ko": "Red-fronted Macaw",
  "en": "Red-fronted Macaw",
  "sci": "Ara rubrogenys",
  "region": "볼리비아 안데스 계곡 고유종 (멸종위기)",
  "sizeCm": 60,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-fronted_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/582858983/medium.jpg",
   "credit": "(c) David F. Belmonte, some rights reserved (CC BY), uploaded by David F. Belmonte (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "r"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "face",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "coracopsis-nigra",
  "ko": "Lesser Vasa Parrot",
  "en": "Lesser Vasa Parrot",
  "sci": "Coracopsis nigra",
  "region": "마다가스카르 맹그로브·상록림",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lesser_vasa_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/245251487/medium.jpeg",
   "credit": "(c) Janne Teivonen, some rights reserved (CC BY), uploaded by Janne Teivonen (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "k"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "번식기 암컷 (머리 황색조)",
    "crown": [
     "y",
     "k"
    ],
    "face": [
     "y",
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-rhodocorytha",
  "ko": "Red-browed Amazon",
  "en": "Red-browed Amazon",
  "sci": "Amazona rhodocorytha",
  "region": "브라질 대서양림 고유종",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-browed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/280718249/medium.jpg",
   "credit": "(c) rebeca_andrade9, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "br"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "k",
    "r"
   ],
   "tail": [
    "r",
    "y",
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-lilianae",
  "ko": "Lilian's Lovebird",
  "en": "Lilian's Lovebird",
  "sci": "Agapornis lilianae",
  "region": "남부 아프리카 잠베지강 유역 미옴보 숲",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lilian's_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/6243832/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "o"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "o"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (암수 동일)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-leucotis",
  "ko": "Maroon-faced Parakeet",
  "en": "Maroon-faced Parakeet",
  "sci": "Pyrrhura leucotis",
  "region": "브라질 동부 대서양림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-eared_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/192217224/medium.jpg",
   "credit": "(c) Gabriel Bonfa, some rights reserved (CC BY-NC-ND), uploaded by Gabriel Bonfa (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "br"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "br"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-frontatus",
  "ko": "Cordilleran Parakeet",
  "en": "Cordilleran Parakeet",
  "sci": "Psittacara frontatus",
  "region": "페루 안데스 서부 사면",
  "sizeCm": 40,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Cordilleran_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/319538681/medium.jpeg",
   "credit": "(c) biped_cub, some rights reserved (CC BY), uploaded by biped_cub (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g",
     "r"
    ],
    "crown": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-fuscus",
  "ko": "Dusky Parrot",
  "en": "Dusky Parrot",
  "sci": "Pionus fuscus",
  "region": "남아메리카 북부 습윤림",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Dusky_parrot",
  "base": {
   "main": [
    "gr",
    "k"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "p",
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr",
    "b"
   ],
   "tail": [
    "b",
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/118192000/medium.jpeg",
   "credit": "(c) Tomaz Nascimento de Melo, some rights reserved (CC BY-NC-ND), uploaded by Tomaz Nascimento de Melo (cc-by-nc-nd) / iNaturalist"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-chrysogaster",
  "ko": "Orange-bellied Parrot",
  "en": "Orange-bellied Parrot",
  "sci": "Neophema chrysogaster",
  "region": "오스트레일리아 태즈메이니아~남동부 해안 (멸종위기 이동철새)",
  "sizeCm": 20,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-bellied_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/494555886/medium.jpeg",
   "credit": "(c) Tom Hunt, some rights reserved (CC BY-NC), uploaded by Tom Hunt (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "main": [
     "y",
     "g"
    ],
    "forehead": [
     "b",
     "g"
    ],
    "beak": [
     "y",
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pionus-tumultuosus",
  "ko": "Speckle-faced Parrot",
  "en": "Speckle-faced Parrot",
  "sci": "Pionus tumultuosus",
  "region": "페루·볼리비아 안데스 구름숲",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Speckle-faced_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/389682131/medium.jpg",
   "credit": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": null,
   "tail": [
    "b"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-pastinator",
  "ko": "Western Corella",
  "en": "Western Corella",
  "sci": "Cacatua pastinator",
  "region": "오스트레일리아 서부",
  "sizeCm": 48,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Western_corella",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/434979191/medium.jpeg",
   "credit": "(c) Cairina, some rights reserved (CC BY-NC), uploaded by Cairina (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w",
    "p"
   ],
   "cheek": "none",
   "throat": [
    "p",
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w",
    "y"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-barbadensis",
  "ko": "Yellow-shouldered Amazon",
  "en": "Yellow-shouldered Amazon",
  "sci": "Amazona barbadensis",
  "region": "베네수엘라 해안·카리브해 섬 건조림",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-shouldered_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64838618/medium.jpg",
   "credit": "(c) Mark Dennis, some rights reserved (CC BY-NC), uploaded by Mark Dennis (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "b"
   ],
   "collar": "none",
   "breast": [
    "g",
    "b"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "r",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "ara-glaucogularis",
  "ko": "Blue-throated Macaw",
  "en": "Blue-throated Macaw",
  "sci": "Ara glaucogularis",
  "region": "볼리비아 베니주 야자 사바나 고유종 (심각한 멸종위기)",
  "sizeCm": 85,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-throated_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157595508/medium.jpg",
   "credit": "(c) David Friel, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "p"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y",
    "sb"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "bolbopsittacus-lunulatus",
  "ko": "Guaiabero",
  "en": "Guaiabero",
  "sci": "Bolbopsittacus lunulatus",
  "region": "필리핀 고유종 저지대 숲",
  "sizeCm": 15,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Guaiabero",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/341450530/medium.jpg",
   "credit": "(c) Kirkamon Cabello, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "face": [
     "b",
     "g"
    ]
   },
   {
    "label": "암컷",
    "face": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-solitaria",
  "ko": "Collared Lory",
  "en": "Collared Lory",
  "sci": "Vini solitaria",
  "region": "남태평양 사모아·통가 등 섬 숲",
  "sizeCm": 20,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Collared_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159065874/medium.jpg",
   "credit": "(c) DickDaniels, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "v",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "v",
     "g"
    ]
   },
   {
    "label": "어린 새",
    "belly": [
     "v",
     "br"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-taranta",
  "ko": "Black-winged Lovebird",
  "en": "Black-winged Lovebird",
  "sci": "Agapornis taranta",
  "koMissing": true,
  "region": "에티오피아·에리트레아 고산지대",
  "sizeCm": 17,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-winged_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/54371613/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC), uploaded by Nik Borrow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "k"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "loriculus-stigmatus",
  "ko": "Sulawesi Hanging-Parrot",
  "en": "Sulawesi Hanging-Parrot",
  "sci": "Loriculus stigmatus",
  "koMissing": true,
  "region": "인도네시아 술라웨시 섬 및 주변 섬 숲",
  "sizeCm": 15,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Great_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/198569419/medium.jpg",
   "credit": "(c) andez197, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "pezoporus-wallicus",
  "ko": "Ground Parrot",
  "en": "Ground Parrot",
  "sci": "Pezoporus wallicus",
  "koMissing": true,
  "region": "오스트레일리아 동남부 해안 관목지대",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Eastern_ground_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/165072133/medium.jpg",
   "credit": "(c) Gavin Goodyear, some rights reserved (CC BY-NC), uploaded by Gavin Goodyear (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "k"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "y"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g",
    "k",
    "y"
   ],
   "wing": [
    "g",
    "k",
    "y"
   ],
   "tail": [
    "g",
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "forpus-crassirostris",
  "ko": "Riparian Parrotlet",
  "en": "Riparian Parrotlet",
  "sci": "Forpus crassirostris",
  "koMissing": true,
  "region": "남아메리카 파라과이강 유역 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Riparian_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/63809635/medium.jpeg",
   "credit": "(c) Eric van den Berghe, some rights reserved (CC BY-NC), uploaded by Eric van den Berghe (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg"
   ],
   "forehead": [
    "lg"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "lg",
    "b"
   ],
   "wing": [
    "lg",
    "b"
   ],
   "tail": [
    "lg"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "lg"
    ],
    "wing": [
     "lg"
    ],
    "belly": [
     "lg"
    ]
   }
  ]
 },
 {
  "id": "poicephalus-rueppellii",
  "ko": "Rüppell's Parrot",
  "en": "Rüppell's Parrot",
  "sci": "Poicephalus rueppellii",
  "koMissing": true,
  "region": "앙골라·나미비아 건조 사바나",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rüppell's_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158984676/medium.jpg",
   "credit": "(c) Charles J. Sharp, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "y",
    "k"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k",
    "y"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "b",
     "k"
    ]
   }
  ]
 },
 {
  "id": "psittinus-cyanurus",
  "ko": "Blue-rumped Parrot",
  "en": "Blue-rumped Parrot",
  "sci": "Psittinus cyanurus",
  "koMissing": true,
  "region": "동남아시아 저지대 숲 (말레이반도·보르네오·수마트라)",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-rumped_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/253722041/medium.jpg",
   "credit": "(c) Ultraman Max, some rights reserved (CC BY-NC), uploaded by Ultraman Max (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "g",
    "r",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr",
     "br"
    ],
    "forehead": [
     "gr",
     "br"
    ],
    "face": [
     "gr",
     "br"
    ],
    "throat": [
     "gr",
     "br"
    ],
    "back": [
     "g"
    ],
    "beak": [
     "k"
    ]
   }
  ]
 },
 {
  "id": "amazona-collaria",
  "ko": "Yellow-billed Amazon",
  "en": "Yellow-billed Amazon",
  "sci": "Amazona collaria",
  "koMissing": true,
  "region": "자메이카 숲 (고유종)",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-billed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/12449103/medium.jpg",
   "credit": "(c) Kevin Schafer, some rights reserved (CC BY-NC-ND), uploaded by Kevin Schafer (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "b",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "p",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "pyrrhura-griseipectus",
  "ko": "Gray-breasted Parakeet",
  "en": "Gray-breasted Parakeet",
  "sci": "Pyrrhura griseipectus",
  "koMissing": true,
  "region": "브라질 북동부 세아라 주 숲 (희귀종)",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Grey-breasted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158992309/medium.jpg",
   "credit": "(c) Michael Hurben, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "br"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "cyanoramphus-malherbi",
  "ko": "Malherbe's Parakeet",
  "en": "Malherbe's Parakeet",
  "sci": "Cyanoramphus malherbi",
  "koMissing": true,
  "region": "뉴질랜드 남섬 너도밤나무 숲 (멸종위기종)",
  "sizeCm": 20,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Malherbe's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/364258100/medium.jpeg",
   "credit": "(c) ppgesus, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "y"
    ]
   }
  ]
 },
 {
  "id": "pyrrhura-amazonum",
  "ko": "Santarém Parakeet",
  "en": "Santarém Parakeet",
  "sci": "Pyrrhura amazonum",
  "koMissing": true,
  "region": "브라질 아마존 분지 숲",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Santarem_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/188162038/medium.jpg",
   "credit": "(c) Hector Bottai, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "br"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "r",
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "pionopsitta-pileata",
  "ko": "Pileated Parrot",
  "en": "Pileated Parrot",
  "sci": "Pionopsitta pileata",
  "koMissing": true,
  "region": "브라질 남동부 대서양림",
  "sizeCm": 22,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Pileated_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/5650240/medium.jpeg",
   "credit": "(c) Douglas Bete, some rights reserved (CC BY-NC), uploaded by Douglas Bete (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "b",
     "g"
    ],
    "face": [
     "g"
    ],
    "breast": [
     "b",
     "g"
    ]
   }
  ]
 },
 {
  "id": "psittacula-derbiana",
  "ko": "Derbyan Parakeet",
  "en": "Derbyan Parakeet",
  "sci": "Psittacula derbiana",
  "koMissing": true,
  "region": "중국 남서부·티베트 산림",
  "sizeCm": 50,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lord_Derby's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/257726569/medium.jpg",
   "credit": "(c) Uday Agashe, some rights reserved (CC BY-NC), uploaded by Uday Agashe (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v",
    "b"
   ],
   "forehead": [
    "v",
    "b"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "v",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "v",
    "gr"
   ],
   "belly": [
    "v",
    "gr"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "k"
    ]
   }
  ]
 },
 {
  "id": "amazona-tucumana",
  "ko": "Tucumán Amazon",
  "en": "Tucumán Amazon",
  "sci": "Amazona tucumana",
  "koMissing": true,
  "region": "아르헨티나·볼리비아 안데스 산악림",
  "sizeCm": 31,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Tucumán_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/226964062/medium.jpeg",
   "credit": "(c) Pablo Demaio, some rights reserved (CC BY-NC), uploaded by Pablo Demaio (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "k"
   ],
   "belly": [
    "g",
    "o"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "belly": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "myiopsitta-luchsi",
  "ko": "Cliff Parakeet",
  "en": "Cliff Parakeet",
  "sci": "Myiopsitta luchsi",
  "koMissing": true,
  "region": "볼리비아 안데스 산지 절벽 지대",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Cliff_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/76303269/medium.jpg",
   "credit": "(c) eppsa, some rights reserved (CC BY-NC), uploaded by eppsa (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "y",
    "br"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "primolius-couloni",
  "ko": "Blue-headed Macaw",
  "en": "Blue-headed Macaw",
  "sci": "Primolius couloni",
  "koMissing": true,
  "region": "페루·브라질·볼리비아 아마존 저지대 숲",
  "sizeCm": 41,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-headed_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/115329865/medium.jpg",
   "credit": "(c) Thibaud Aronson, some rights reserved (CC BY-SA), uploaded by Thibaud Aronson (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "beak": [
     "k"
    ],
    "eyeSkinColor": "w"
   }
  ]
 },
 {
  "id": "pyrrhura-cruentata",
  "ko": "Ochre-marked Parakeet",
  "en": "Ochre-marked Parakeet",
  "sci": "Pyrrhura cruentata",
  "koMissing": true,
  "region": "브라질 대서양림 (바이아·이스피리투산투)",
  "sizeCm": 29,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Ochre-marked_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/395897384/medium.jpg",
   "credit": "(c) Gabriel Bonfa, some rights reserved (CC BY-NC-ND), uploaded by Gabriel Bonfa (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "anodorhynchus-leari",
  "ko": "Indigo Macaw",
  "en": "Indigo Macaw",
  "sci": "Anodorhynchus leari",
  "koMissing": true,
  "region": "브라질 바이아 주 카칭가 (희귀종)",
  "sizeCm": 75,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lear's_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/411582031/medium.jpeg",
   "credit": "(c) Thiago Gonçalves Coronado Antunes, some rights reserved (CC BY-NC), uploaded by Thiago Gonçalves Coronado Antunes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "agapornis-pullarius",
  "ko": "Red-headed Lovebird",
  "en": "Red-headed Lovebird",
  "sci": "Agapornis pullarius",
  "koMissing": true,
  "region": "사하라 이남 아프리카 사바나",
  "sizeCm": 15,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-headed_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/243325240/medium.jpeg",
   "credit": "(c) Tommy Andriollo, some rights reserved (CC BY), uploaded by Tommy Andriollo (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "o"
    ],
    "forehead": [
     "o"
    ],
    "face": [
     "o",
     "g"
    ]
   }
  ]
 },
 {
  "id": "poicephalus-robustus",
  "ko": "Cape Parrot",
  "en": "Cape Parrot",
  "sci": "Poicephalus robustus",
  "koMissing": true,
  "region": "남아프리카공화국 아프로몬테인 숲",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Cape_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/104453705/medium.jpg",
   "credit": "no rights reserved, uploaded by Dave Brown (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "gr",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "o"
    ]
   },
   {
    "label": "어린 새",
    "forehead": [
     "o",
     "p"
    ],
    "wing": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "forpus-modestus",
  "ko": "Dusky-billed Parrotlet",
  "en": "Dusky-billed Parrotlet",
  "sci": "Forpus modestus",
  "koMissing": true,
  "region": "남아메리카 아마존 분지",
  "sizeCm": 12,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Dusky-billed_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/115419426/medium.jpg",
   "credit": "(c) Edson Guilherme, some rights reserved (CC BY-NC), uploaded by Edson Guilherme (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "poicephalus-fuscicollis",
  "ko": "Grey-headed Parrot",
  "en": "Grey-headed Parrot",
  "sci": "Poicephalus fuscicollis",
  "region": "아프리카 서부·남부 사바나 숲",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown-necked_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/52413073/medium.jpeg",
   "credit": "(c) Gawie Malan, some rights reserved (CC BY-NC), uploaded by Gawie Malan (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "y"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psephotellus-chrysopterygius",
  "ko": "Golden-shouldered Parrot",
  "en": "Golden-shouldered Parrot",
  "sci": "Psephotellus chrysopterygius",
  "region": "오스트레일리아 북부 케이프요크반도",
  "sizeCm": 27,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Golden-shouldered_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/291899584/medium.jpg",
   "credit": "(c) Doug Herrington, some rights reserved (CC BY-NC), uploaded by Doug Herrington (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "b"
   ],
   "belly": [
    "p"
   ],
   "back": [
    "br",
    "gr"
   ],
   "wing": [
    "b",
    "y"
   ],
   "tail": [
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "main": [
     "g",
     "y"
    ],
    "crown": [
     "gr"
    ],
    "forehead": [
     "g",
     "y"
    ],
    "face": [
     "g",
     "y"
    ],
    "throat": [
     "g",
     "y"
    ],
    "breast": [
     "g",
     "y"
    ],
    "belly": [
     "g",
     "y",
     "p"
    ],
    "back": [
     "g",
     "y"
    ],
    "wing": [
     "g",
     "y"
    ],
    "tail": [
     "g",
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-picta",
  "ko": "Painted Parakeet",
  "en": "Painted Parakeet",
  "sci": "Pyrrhura picta",
  "region": "남아메리카 북부 아마존 열대우림",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Painted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/475736829/medium.jpg",
   "credit": "(c) Alan Wight, some rights reserved (CC BY-NC), uploaded by Alan Wight (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "br"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "y",
    "br"
   ],
   "belly": [
    "r",
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "b",
    "r"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "wing": [
     "g",
     "b"
    ],
    "eyeSkinColor": "w"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-borneus",
  "ko": "Red Lory",
  "en": "Red Lory",
  "sci": "Trichoglossus borneus",
  "region": "인도네시아 소순다 열도(티모르 등)",
  "sizeCm": 31,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387839929/medium.jpg",
   "credit": "(c) Navin, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r",
    "b",
    "k"
   ],
   "wing": [
    "r",
    "b",
    "k"
   ],
   "tail": [
    "br",
    "b"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-brevipes",
  "ko": "Socorro Parakeet",
  "en": "Socorro Parakeet",
  "sci": "Psittacara brevipes",
  "region": "멕시코 소코로섬 (고유종)",
  "sizeCm": 33,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Socorro_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/39350698/medium.jpg",
   "credit": "(c) world_lineage, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "v",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prosopeia-personata",
  "ko": "Masked Shining-Parrot",
  "en": "Masked Shining-Parrot",
  "sci": "Prosopeia personata",
  "region": "피지 비티레부섬 (고유종)",
  "sizeCm": 47,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Masked_shining_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/249722207/medium.jpg",
   "credit": "(c) peterodekerken, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "o"
   ],
   "belly": [
    "o",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "v"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-pretrei",
  "ko": "Red-spectacled Amazon",
  "en": "Red-spectacled Amazon",
  "sci": "Amazona pretrei",
  "region": "브라질 남부 아라우카리아 숲",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-spectacled_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/87821405/medium.jpg",
   "credit": "(c) Juan Diego Doke, some rights reserved (CC BY-NC), uploaded by Juan Diego Doke (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "r"
   ],
   "forehead": [
    "r",
    "g"
   ],
   "face": [
    "g",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g",
     "b"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-garrulus",
  "ko": "Chattering Lory",
  "en": "Chattering Lory",
  "sci": "Lorius garrulus",
  "region": "인도네시아 말루쿠 제도 할마헤라",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Chattering_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159056035/medium.jpg",
   "credit": "(c) Doug Janson, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r",
    "y"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-finschii",
  "ko": "Gray-headed Parakeet",
  "en": "Gray-headed Parakeet",
  "sci": "Psittacula finschii",
  "region": "동남아시아~히말라야 동부 산지 숲",
  "sizeCm": 35,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Grey-headed_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/156483873/medium.jpeg",
   "credit": "(c) Cole Gaerber, some rights reserved (CC BY-NC), uploaded by Cole Gaerber (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "k",
    "p"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "gr"
    ],
    "collar": "none"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-euteles",
  "ko": "Olive-headed Lorikeet",
  "en": "Olive-headed Lorikeet",
  "sci": "Trichoglossus euteles",
  "region": "인도네시아 소순다 열도",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Olive-headed_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387859802/medium.jpg",
   "credit": "(c) Ram-Man, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "br",
    "g"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "g"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-arausiaca",
  "ko": "Red-necked Amazon",
  "en": "Red-necked Amazon",
  "sci": "Amazona arausiaca",
  "region": "도미니카 섬 (고유종)",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-necked_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/137172423/medium.jpg",
   "credit": "(c) Stephen Cresswell, some rights reserved (CC BY-NC-ND), uploaded by Stephen Cresswell (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "b",
    "g"
   ],
   "face": [
    "b",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "r"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-calliptera",
  "ko": "Brown-breasted Parakeet",
  "en": "Brown-breasted Parakeet",
  "sci": "Pyrrhura calliptera",
  "region": "콜롬비아 동부 안데스 산지 숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Flame-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158990959/medium.jpg",
   "credit": "(c) Anthony Kaduck, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "br",
    "g"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y",
    "b"
   ],
   "tail": [
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-cookii",
  "ko": "Norfolk Parakeet",
  "en": "Norfolk Parakeet",
  "sci": "Cyanoramphus cookii",
  "region": "노퍽섬 (오스트레일리아·뉴질랜드 사이, 고유종)",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Norfolk_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/408874944/medium.jpeg",
   "credit": "(c) Duncan Henderson, some rights reserved (CC BY-NC), uploaded by Duncan Henderson (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "tanygnathus-sumatranus",
  "ko": "Azure-rumped Parrot",
  "en": "Azure-rumped Parrot",
  "sci": "Tanygnathus sumatranus",
  "region": "인도네시아 술라웨시·술루 제도",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-backed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/171182409/medium.jpeg",
   "credit": "(c) Phil Benstead, some rights reserved (CC BY-NC), uploaded by Phil Benstead (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "lg"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "y",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "y",
     "w"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacus-timneh",
  "ko": "Timneh Parrot",
  "en": "Timneh Parrot",
  "sci": "Psittacus timneh",
  "region": "서아프리카 기니~코트디부아르 숲",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Timneh_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/184856458/medium.jpeg",
   "credit": "(c) mlanguy, some rights reserved (CC BY-NC), uploaded by mlanguy (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "w",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "k",
    "w"
   ],
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittrichas-fulgidus",
  "ko": "Pesquet's Parrot",
  "en": "Pesquet's Parrot",
  "sci": "Psittrichas fulgidus",
  "region": "뉴기니 열대우림",
  "sizeCm": 46,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pesquet's_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/449330094/medium.jpeg",
   "credit": "(c) Marc Thibault, some rights reserved (CC BY-NC), uploaded by Marc Thibault (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k",
    "gr"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k",
    "r"
   ],
   "tail": [
    "k",
    "r"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "face",
   "eyeSkinColor": "k",
   "crest": false,
   "tailShape": "mid",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-unicolor",
  "ko": "Antipodes Parakeet",
  "en": "Antipodes Parakeet",
  "sci": "Cyanoramphus unicolor",
  "region": "뉴질랜드 앤티포디스 제도 (고유종)",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Antipodes_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159025886/medium.jpg",
   "credit": "(c) russellstreet, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prosopeia-tabuensis",
  "ko": "Red Shining-Parrot",
  "en": "Red Shining-Parrot",
  "sci": "Prosopeia tabuensis",
  "region": "피지·통가 숲",
  "sizeCm": 46,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Maroon_shining_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/147718635/medium.jpeg",
   "credit": "(c) happymountainnz, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br",
    "r"
   ],
   "forehead": [
    "r",
    "k"
   ],
   "face": [
    "r",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "br"
   ],
   "belly": [
    "br"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eunymphicus-cornutus",
  "ko": "Horned Parakeet",
  "en": "Horned Parakeet",
  "sci": "Eunymphicus cornutus",
  "region": "뉴칼레도니아 (고유종)",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Horned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159046976/medium.jpg",
   "credit": "(c) Roger Le Guen, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "g"
   ],
   "forehead": [
    "k",
    "r"
   ],
   "face": [
    "k",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "k",
    "r"
   ],
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neophema-splendida",
  "ko": "Scarlet-chested Parrot",
  "en": "Scarlet-chested Parrot",
  "sci": "Neophema splendida",
  "region": "오스트레일리아 내륙 건조지대",
  "sizeCm": 21,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scarlet-chested_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/301418547/medium.jpeg",
   "credit": "(c) hone, some rights reserved (CC BY-NC), uploaded by hone (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "sb"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "b",
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-squamatus",
  "ko": "Violet-necked Lory",
  "en": "Violet-necked Lory",
  "sci": "Trichoglossus squamatus",
  "region": "뉴기니 저지대 숲",
  "sizeCm": 27,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Violet-necked_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159046670/medium.jpg",
   "credit": "(c) Doug Janson, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r",
    "b"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": [
    "b"
   ],
   "breast": null,
   "belly": [
    "b"
   ],
   "back": null,
   "wing": [
    "r",
    "k"
   ],
   "tail": [
    "v",
    "r"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-devillei",
  "ko": "Blaze-winged Parakeet",
  "en": "Blaze-winged Parakeet",
  "sci": "Pyrrhura devillei",
  "region": "볼리비아·브라질·파라과이 접경 판타나우 지역",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blaze-winged_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/216692321/medium.jpg",
   "credit": "(c) Robin Gwen Agarwal, some rights reserved (CC BY-NC), uploaded by Robin Gwen Agarwal (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "lg",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "br"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "polytelis-alexandrae",
  "ko": "Princess Parrot",
  "en": "Princess Parrot",
  "sci": "Polytelis alexandrae",
  "region": "오스트레일리아 내륙 사막 멀가 숲",
  "sizeCm": 46,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Princess_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/260670801/medium.jpg",
   "credit": "(c) Steve Murray, some rights reserved (CC BY-NC), uploaded by Steve Murray (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "p"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr"
    ],
    "beak": null
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-spengeli",
  "ko": "Turquoise-winged Parrotlet",
  "en": "Turquoise-winged Parrotlet",
  "sci": "Forpus spengeli",
  "region": "콜롬비아·파나마 접경 저지대",
  "sizeCm": 12,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Turquoise-winged_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/376534819/medium.jpeg",
   "credit": "(c) Riley-Brendan Walsh, some rights reserved (CC BY-NC), uploaded by Riley-Brendan Walsh (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg"
   ],
   "forehead": [
    "lg"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "sb",
    "lg"
   ],
   "wing": [
    "lg"
   ],
   "tail": [
    "lg"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (터키석색 허리)"
   },
   {
    "label": "암컷",
    "back": [
     "lg"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "triclaria-malachitacea",
  "ko": "Blue-bellied Parrot",
  "en": "Blue-bellied Parrot",
  "sci": "Triclaria malachitacea",
  "region": "브라질 남동부 대서양림",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-bellied_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159008429/medium.jpg",
   "credit": "(c) Hector Bottai, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "암컷 (녹색 배)"
   },
   {
    "label": "수컷 (배에 남보라색 무늬)",
    "belly": [
     "v",
     "b"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "coracopsis-barklyi",
  "ko": "Seychelles Parrot",
  "en": "Seychelles Parrot",
  "sci": "Coracopsis barklyi",
  "region": "세이셸 제도 프랄린 섬 숲",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Seychelles_black_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/67444195/medium.jpg",
   "credit": "(c) sergiocanobbio, some rights reserved (CC BY-NC), uploaded by sergiocanobbio (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "gr",
    "br"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "gr",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "br"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "br"
   ],
   "belly": [
    "gr",
    "br"
   ],
   "back": [
    "gr",
    "br"
   ],
   "wing": [
    "gr",
    "br"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-gulielmi",
  "ko": "Red-fronted Parrot",
  "en": "Red-fronted Parrot",
  "sci": "Poicephalus gulielmi",
  "region": "중앙아프리카 콩고 분지 열대우림",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-fronted_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/143115351/medium.jpeg",
   "credit": "(c) markus lilje, some rights reserved (CC BY-NC-ND), uploaded by markus lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k",
    "g"
   ],
   "forehead": [
    "r",
    "o"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "k"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "k"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "k"
   ],
   "beak": [
    "gr",
    "br"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-viridicata",
  "ko": "Santa Marta Parakeet",
  "en": "Santa Marta Parakeet",
  "sci": "Pyrrhura viridicata",
  "region": "콜롬비아 산타마르타 산맥 고산림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Santa_Marta_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/285526447/medium.jpeg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "r",
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y",
    "o"
   ],
   "tail": [
    "r"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-euops",
  "ko": "Cuban Parakeet",
  "en": "Cuban Parakeet",
  "sci": "Psittacara euops",
  "region": "쿠바 전역 숲과 농경지",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Cuban_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/367776828/medium.jpg",
   "credit": "(c) ydielveunes, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg",
    "r"
   ],
   "forehead": [
    "lg"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg",
    "r"
   ],
   "collar": "none",
   "breast": [
    "lg",
    "r"
   ],
   "belly": [
    "y",
    "lg"
   ],
   "back": [
    "lg"
   ],
   "wing": [
    "lg",
    "r"
   ],
   "tail": [
    "lg"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "lg"
    ],
    "breast": [
     "lg"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-versicolor",
  "ko": "St. Lucia Amazon",
  "en": "St. Lucia Amazon",
  "sci": "Amazona versicolor",
  "region": "세인트루시아 섬 열대우림",
  "sizeCm": 46,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Saint_Lucia_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/460154441/medium.jpg",
   "credit": "(c) Alexander DeBear, some rights reserved (CC BY-NC), uploaded by Alexander DeBear (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "g",
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-lilacina",
  "ko": "Lilacine Amazon",
  "en": "Lilacine Amazon",
  "sci": "Amazona lilacina",
  "region": "에콰도르 서부 저지대 숲",
  "sizeCm": 34,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Lilacine_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157795508/medium.jpg",
   "credit": "(c) frank wouters, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-ducorpsii",
  "ko": "Solomons Corella",
  "en": "Solomons Corella",
  "sci": "Cacatua ducorpsii",
  "region": "솔로몬 제도 저지대 숲",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Solomons_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/477908995/medium.jpg",
   "credit": "(c) Jane Kempler & Andrew Goldby Freelance, some rights reserved (CC BY-NC-ND), uploaded by Jane Kempler & Andrew Goldby Freelance (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "tanygnathus-megalorynchos",
  "ko": "Great-billed Parrot",
  "en": "Great-billed Parrot",
  "sci": "Tanygnathus megalorynchos",
  "region": "인도네시아 말루쿠·라자암팟 제도 숲",
  "sizeCm": 38,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Great-billed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/592140430/medium.jpg",
   "credit": "(c) John Sterling, some rights reserved (CC BY-NC), uploaded by John Sterling (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "sb"
   ],
   "wing": [
    "k",
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-rupicola",
  "ko": "Black-capped Parakeet",
  "en": "Black-capped Parakeet",
  "sci": "Pyrrhura rupicola",
  "region": "페루·볼리비아·브라질 남서부 아마존 저지대 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-capped_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/239839401/medium.jpg",
   "credit": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND), uploaded by Josh van der Meulen (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "w"
   ],
   "collar": "none",
   "breast": [
    "g",
    "w"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-perlata",
  "ko": "Crimson-bellied Parakeet",
  "en": "Crimson-bellied Parakeet",
  "sci": "Pyrrhura perlata",
  "region": "브라질 중남부 아마존·마투그로수 전이림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Crimson-bellied_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158993954/medium.jpg",
   "credit": "(c) Beatriz Bukowitz, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "g",
    "sb"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "b"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "gr",
    "b"
   ],
   "belly": [
    "r",
    "sb"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "k",
    "b"
   ],
   "tail": [
    "br",
    "k"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-surdus",
  "ko": "Golden-tailed Parrotlet",
  "en": "Golden-tailed Parrotlet",
  "sci": "Touit surdus",
  "region": "브라질 동부 대서양림",
  "sizeCm": 16,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Golden-tailed_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/187592531/medium.jpeg",
   "credit": "(c) Eric Carpenter, some rights reserved (CC BY-NC), uploaded by Eric Carpenter (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g",
    "br",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "tail": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "alisterus-amboinensis",
  "ko": "Moluccan King Parrot",
  "en": "Moluccan King Parrot",
  "sci": "Alisterus amboinensis",
  "region": "인도네시아 말루쿠 제도 숲",
  "sizeCm": 40,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Moluccan_king_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/416821351/medium.jpeg",
   "credit": "no rights reserved, uploaded by James Eaton (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "v",
    "b"
   ],
   "wing": [
    "g",
    "v"
   ],
   "tail": [
    "k",
    "b"
   ],
   "beak": [
    "o",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-pyrilia",
  "ko": "Saffron-headed Parrot",
  "en": "Saffron-headed Parrot",
  "sci": "Pyrilia pyrilia",
  "region": "콜롬비아·파나마 열대우림",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Saffron-headed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/45165845/medium.jpg",
   "credit": "(c) Ryan Shaw, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y",
    "k"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-saisseti",
  "ko": "New Caledonian Parakeet",
  "en": "New Caledonian Parakeet",
  "sci": "Cyanoramphus saisseti",
  "region": "뉴칼레도니아 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/New_Caledonian_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159025310/medium.jpg",
   "credit": "(c) Fred-Desmoulins, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacella-brehmii",
  "ko": "Brehm's Tiger Parrot",
  "en": "Brehm's Tiger Parrot",
  "sci": "Psittacella brehmii",
  "region": "파푸아뉴기니 고산 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brehm's_tiger_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8235803/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "y",
    "k",
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "g"
    ],
    "breast": [
     "y",
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-capistratus",
  "ko": "Marigold Lorikeet",
  "en": "Marigold Lorikeet",
  "sci": "Trichoglossus capistratus",
  "region": "인도네시아 숨바·로테·웨타르·키사르 섬, 티모르섬 숲",
  "sizeCm": 26,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Marigold_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/67553014/medium.jpg",
   "credit": "(c) coracii, some rights reserved (CC BY-NC-ND) (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "o",
    "y"
   ],
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-orcesi",
  "ko": "El Oro Parakeet",
  "en": "El Oro Parakeet",
  "sci": "Pyrrhura orcesi",
  "region": "에콰도르 엘오로 주 서부 안데스 산록 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/El_Oro_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/32748192/medium.jpeg",
   "credit": "(c) Leovigildo Cabrera, some rights reserved (CC BY-NC), uploaded by Leovigildo Cabrera (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "g",
     "r"
    ]
   },
   {
    "label": "어린 새",
    "forehead": [
     "g"
    ],
    "wing": [
     "g",
     "b"
    ],
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-diadema",
  "ko": "Diademed Amazon",
  "en": "Diademed Amazon",
  "sci": "Amazona diadema",
  "region": "브라질 북부 아마존 리우네그루 유역 숲",
  "sizeCm": 33,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Diademed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/305787371/medium.jpg",
   "credit": "(c) Ivo Carlos Zecchin, osa oikeuksista pidätetään (CC BY-NC), lähettänyt Ivo Carlos Zecchin (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "hypocharmosyna-placentis",
  "ko": "Red-flanked Lorikeet",
  "en": "Red-flanked Lorikeet",
  "sci": "Hypocharmosyna placentis",
  "region": "뉴기니·몰루카 제도·비스마르크 군도 저지대 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-flanked_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/85044726/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC), uploaded by Nik Borrow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "crown": [
     "r",
     "g"
    ],
    "face": [
     "r",
     "g"
    ],
    "breast": [
     "g",
     "r"
    ]
   },
   {
    "label": "암컷"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-agilis",
  "ko": "Black-billed Amazon",
  "en": "Black-billed Amazon",
  "sci": "Amazona agilis",
  "region": "자메이카 산림 지대",
  "sizeCm": 29,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-billed_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/247588454/medium.jpeg",
   "credit": "(c) Jay VanderGaast, some rights reserved (CC BY-NC-ND), uploaded by Jay VanderGaast (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "k"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "v",
    "r"
   ],
   "tail": [
    "g",
    "r",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g",
     "v"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "chalcopsitta-cardinalis",
  "ko": "Cardinal Lory",
  "en": "Cardinal Lory",
  "sci": "Chalcopsitta cardinalis",
  "region": "솔로몬 제도 저지대 숲",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Cardinal_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/377058160/medium.jpeg",
   "credit": "(c) Noam Markus, some rights reserved (CC BY-NC), uploaded by Noam Markus (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "r"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "k",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-pusillus",
  "ko": "Yellow-throated Hanging-Parrot",
  "en": "Yellow-throated Hanging-Parrot",
  "sci": "Loriculus pusillus",
  "region": "인도네시아 자바·발리 숲",
  "sizeCm": 10,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-throated_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/47091405/medium.jpg",
   "credit": "(c) mwbirdco, some rights reserved (CC BY-NC), uploaded by mwbirdco (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-eques",
  "ko": "Echo Parakeet",
  "en": "Echo Parakeet",
  "sci": "Psittacula eques",
  "region": "모리셔스 섬 숲",
  "sizeCm": 42,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Echo_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159249541/medium.jpg",
   "credit": "(c) colin houston, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "k",
    "p"
   ],
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "o",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "collar": [
     "k",
     "g"
    ],
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "hapalopsittaca-fuertesi",
  "ko": "Indigo-winged Parrot",
  "en": "Indigo-winged Parrot",
  "sci": "Hapalopsittaca fuertesi",
  "region": "콜롬비아 중앙 안데스 고산 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Fuertes's_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/478388372/medium.jpeg",
   "credit": "(c) Edwin Múnera Chavarría, some rights reserved (CC BY-NC), uploaded by Edwin Múnera Chavarría (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "y"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "y"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "y",
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "v",
    "b",
    "r"
   ],
   "tail": [
    "b",
    "r"
   ],
   "beak": [
    "br"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-lucianii",
  "ko": "Bonaparte's Parakeet",
  "en": "Bonaparte's Parakeet",
  "sci": "Pyrrhura lucianii",
  "region": "브라질 서부 아마존 (리우네그루·솔리몽이스 강 유역)",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Bonaparte's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/237933477/medium.jpg",
   "credit": "(c) hbottai, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k",
    "br"
   ],
   "forehead": [
    "k",
    "br"
   ],
   "face": [
    "k",
    "br"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "g"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-huetii",
  "ko": "Scarlet-shouldered Parrotlet",
  "en": "Scarlet-shouldered Parrotlet",
  "sci": "Touit huetii",
  "region": "남아메리카 북부 아마존 저지대 숲 (베네수엘라~볼리비아)",
  "sizeCm": 16,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Scarlet-shouldered_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/221313125/medium.jpeg",
   "credit": "(c) Edwin Múnera Chavarría, some rights reserved (CC BY-NC), uploaded by Edwin Múnera Chavarría (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "b",
    "k"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "tail": [
     "g",
     "r"
    ]
   },
   {
    "label": "암컷",
    "tail": [
     "y",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-platurus",
  "ko": "Golden-mantled Racquet-tail",
  "en": "Golden-mantled Racquet-tail",
  "sci": "Prioniturus platurus",
  "region": "인도네시아 술라웨시 섬 숲",
  "sizeCm": 28,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Golden-mantled_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/359777673/medium.jpg",
   "credit": "(c) Stephen John Davies, some rights reserved (CC BY-NC), uploaded by Stephen John Davies (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g"
   ],
   "collar": [
    "o"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "gr",
    "b"
   ],
   "tail": [
    "g",
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "cheek": "none",
    "collar": "none",
    "wing": [
     "g",
     "b"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-caica",
  "ko": "Caica Parrot",
  "en": "Caica Parrot",
  "sci": "Pyrilia caica",
  "region": "브라질·베네수엘라·기아나 아마존 열대우림",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Caica_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/118300462/medium.jpg",
   "credit": "(c) Luciano Bernardes, some rights reserved (CC BY-NC), uploaded by Luciano Bernardes (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k",
    "br"
   ],
   "forehead": [
    "k",
    "br"
   ],
   "face": [
    "k",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": [
    "o"
   ],
   "breast": [
    "br",
    "o"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "k"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g",
     "k"
    ],
    "collar": [
     "o",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-haematuropygia",
  "ko": "Philippine Cockatoo",
  "en": "Philippine Cockatoo",
  "sci": "Cacatua haematuropygia",
  "region": "필리핀 팔라완·술루 제도",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-vented_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/584822855/medium.jpg",
   "credit": "(c) matthewkwan, some rights reserved (CC BY-NC-ND), uploaded by matthewkwan (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w",
    "r"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "crest": true,
   "crestColor": [
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-albipectus",
  "ko": "White-necked Parakeet",
  "en": "White-necked Parakeet",
  "sci": "Pyrrhura albipectus",
  "region": "에콰도르 남동부 안데스 산록 숲",
  "sizeCm": 25.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-breasted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/43723934/medium.jpg",
   "credit": "(c) Stephen John Davies, some rights reserved (CC BY-NC), uploaded by Stephen John Davies (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "gr"
   ],
   "forehead": [
    "br",
    "r"
   ],
   "face": [
    "g",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": [
    "w"
   ],
   "breast": [
    "y"
   ],
   "belly": [
    "g",
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "b"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "forehead": [
     "g"
    ],
    "face": [
     "w",
     "g"
    ],
    "breast": [
     "w"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-roseifrons",
  "ko": "Rose-fronted Parakeet",
  "en": "Rose-fronted Parakeet",
  "sci": "Pyrrhura roseifrons",
  "region": "페루·브라질·에콰도르 서부 아마존 저지대",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rose-fronted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/30781301/medium.jpg",
   "credit": "(c) shrike2, some rights reserved (CC BY-NC), uploaded by shrike2 (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "k",
    "w"
   ],
   "collar": "none",
   "breast": [
    "k",
    "w"
   ],
   "belly": [
    "r",
    "y"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "face": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-chlorocercus",
  "ko": "Yellow-bibbed Lory",
  "en": "Yellow-bibbed Lory",
  "sci": "Lorius chlorocercus",
  "region": "솔로몬 제도 저지대·구릉 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-bibbed_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/249781921/medium.jpg",
   "credit": "(c) sopacexplorer, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "r",
    "y"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-hypoinochrous",
  "ko": "Purple-bellied Lory",
  "en": "Purple-bellied Lory",
  "sci": "Lorius hypoinochrous",
  "region": "파푸아뉴기니·비스마르크 제도 저지대 숲",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Purple-bellied_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/26434899/medium.jpeg",
   "credit": "(c) Simon Nicholas, some rights reserved (CC BY-NC), uploaded by Simon Nicholas (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "v"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-ornatus",
  "ko": "Ornate Lorikeet",
  "en": "Ornate Lorikeet",
  "sci": "Trichoglossus ornatus",
  "region": "인도네시아 술라웨시 섬 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Ornate_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/377513292/medium.jpg",
   "credit": "(c) fachrynurmallojr, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "v"
   ],
   "forehead": [
    "b",
    "v"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "r",
    "b"
   ],
   "collar": "none",
   "breast": [
    "r",
    "b"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-guildingii",
  "ko": "St. Vincent Amazon",
  "en": "St. Vincent Amazon",
  "sci": "Amazona guildingii",
  "region": "세인트빈센트 섬 (카리브해) 산림",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Saint_Vincent_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/256246154/medium.jpeg",
   "credit": "(c) mikeakresh, some rights reserved (CC BY-NC), uploaded by mikeakresh (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "b",
    "g"
   ],
   "forehead": [
    "y",
    "w"
   ],
   "face": [
    "y",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "v",
    "b"
   ],
   "tail": [
    "b",
    "y"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-nigrigenis",
  "ko": "Black-cheeked Lovebird",
  "en": "Black-cheeked Lovebird",
  "sci": "Agapornis nigrigenis",
  "region": "잠비아 남서부 건조림",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-cheeked_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/2861691/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "k"
   ],
   "collar": "none",
   "breast": [
    "o",
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "beak": [
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-melanonotus",
  "ko": "Brown-backed Parrotlet",
  "en": "Brown-backed Parrotlet",
  "sci": "Touit melanonotus",
  "region": "브라질 남동부(바이아~상파울루) 습윤 산지림",
  "sizeCm": 15,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown-backed_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159007623/medium.jpg",
   "credit": "(c) Dario Sanches, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "k"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "bolborhynchus-ferrugineifrons",
  "ko": "Rufous-fronted Parakeet",
  "en": "Rufous-fronted Parakeet",
  "sci": "Bolborhynchus ferrugineifrons",
  "region": "콜롬비아 안데스 고산 초지",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rufous-fronted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/236769396/medium.jpeg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "br",
    "r"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "sb"
   ],
   "tail": [
    "g",
    "sb"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "bolborhynchus-orbygnesius",
  "ko": "Andean Parakeet",
  "en": "Andean Parakeet",
  "sci": "Bolborhynchus orbygnesius",
  "region": "페루·볼리비아 안데스 고산 초지",
  "sizeCm": 17,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Andean_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/316879587/medium.jpeg",
   "credit": "no rights reserved, uploaded by Manuel Roncal (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "y",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g"
    ],
    "belly": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-batavicus",
  "ko": "Lilac-tailed Parrotlet",
  "en": "Lilac-tailed Parrotlet",
  "sci": "Touit batavicus",
  "region": "트리니다드·베네수엘라·콜롬비아 북부 저지대 숲",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Lilac-tailed_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/28340645/medium.jpg",
   "credit": "(c) Jerome Foster, some rights reserved (CC BY-NC), uploaded by Jerome Foster (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k",
    "lg"
   ],
   "tail": [
    "p",
    "k"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-flavifrons",
  "ko": "Yellow-fronted Parrot",
  "en": "Yellow-fronted Parrot",
  "sci": "Poicephalus flavifrons",
  "region": "에티오피아 고원 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-fronted_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158984005/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "o",
    "y"
   ],
   "face": [
    "o",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "gr"
    ],
    "forehead": [
     "gr",
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "forpus-xanthops",
  "ko": "Yellow-faced Parrotlet",
  "en": "Yellow-faced Parrotlet",
  "sci": "Forpus xanthops",
  "region": "페루 마라뇽 계곡 건조림",
  "sizeCm": 14.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-faced_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/319904482/medium.jpeg",
   "credit": "no rights reserved, uploaded by Manuel Roncal (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "gr"
   ],
   "wing": [
    "b",
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "p"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "sb",
     "g",
     "gr"
    ],
    "wing": [
     "sb",
     "g"
    ],
    "tail": [
     "sb",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-platenae",
  "ko": "Blue-headed Racquet-tail",
  "en": "Blue-headed Racquet-tail",
  "sci": "Prioniturus platenae",
  "region": "필리핀 팔라완 저지대 숲",
  "sizeCm": 27,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-headed_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159072084/medium.jpg",
   "credit": "(c) Rackk67, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "crown": [
     "b"
    ],
    "forehead": [
     "b",
     "r"
    ]
   },
   {
    "label": "암컷"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prosopeia-splendens",
  "ko": "Crimson Shining-Parrot",
  "en": "Crimson Shining-Parrot",
  "sci": "Prosopeia splendens",
  "region": "피지 카다부·오노 섬",
  "sizeCm": 45,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Crimson_shining_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/194964946/medium.jpg",
   "credit": "(c) Keith Martin-Smith،  بعض الحقوق محفوظة (CC BY-NC-SA), uploaded by Keith Martin-Smith (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "chalcopsitta-fuscata",
  "ko": "Dusky Lory",
  "en": "Dusky Lory",
  "sci": "Chalcopsitta fuscata",
  "region": "인도네시아 소순다 열도",
  "sizeCm": 25,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Dusky_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/64903218/medium.jpg",
   "credit": "(c) SandyCole, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "k"
   ],
   "crown": [
    "br",
    "k"
   ],
   "forehead": [
    "br",
    "k"
   ],
   "face": [
    "br",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "k"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "br",
    "k"
   ],
   "back": [
    "br",
    "k"
   ],
   "wing": [
    "br",
    "k"
   ],
   "tail": [
    "w",
    "y"
   ],
   "beak": [
    "r",
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "오렌지 모프"
   },
   {
    "label": "옐로우 모프",
    "breast": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-lepida",
  "ko": "Pearly Parakeet",
  "en": "Pearly Parakeet",
  "sci": "Pyrrhura lepida",
  "region": "브라질 아마존 동부 저지대",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pearly_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/443923443/medium.jpeg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "sb",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "br",
    "b"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "k",
    "b"
   ],
   "tail": [
    "br",
    "k"
   ],
   "beak": [
    "br",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "hapalopsittaca-amazonina",
  "ko": "Rusty-faced Parrot",
  "en": "Rusty-faced Parrot",
  "sci": "Hapalopsittaca amazonina",
  "region": "콜롬비아·에콰도르 안데스 산지림",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rusty-faced_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/73726759/medium.jpeg",
   "credit": "(c) ricardoalvarezzamora, some rights reserved (CC BY-NC), uploaded by ricardoalvarezzamora (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "o",
    "r"
   ],
   "forehead": [
    "o",
    "r"
   ],
   "face": [
    "br",
    "r",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "r"
   ],
   "collar": "none",
   "breast": [
    "br",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "v",
    "k"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "charmosyna-stellae",
  "ko": "Stella’s Lorikeet",
  "en": "Stella’s Lorikeet",
  "sci": "Charmosyna stellae",
  "region": "파푸아뉴기니 산악 열대우림",
  "sizeCm": 19,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Stella's_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8235306/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-flavicans",
  "ko": "Yellow-breasted Racquet-tail",
  "en": "Yellow-breasted Racquet-tail",
  "sci": "Prioniturus flavicans",
  "region": "인도네시아 술라웨시 숲",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-breasted_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/107895066/medium.jpg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "r"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "k"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g",
     "b"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-exilis",
  "ko": "Pygmy Hanging-Parrot",
  "en": "Pygmy Hanging-Parrot",
  "sci": "Loriculus exilis",
  "region": "인도네시아 술라웨시 숲",
  "sizeCm": 10,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pygmy_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/80945499/medium.jpeg",
   "credit": "(c) ꦥꦤ꧀ꦗꦶꦒꦸꦱ꧀ꦠꦶꦄꦏ꧀ꦧꦂ, some rights reserved (CC BY), uploaded by ꦥꦤ꧀ꦗꦶꦒꦸꦱ꧀ꦠꦶꦄꦏ꧀ꦧꦂ (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-citrinocristata",
  "ko": "Citron-crested Cockatoo",
  "en": "Citron-crested Cockatoo",
  "sci": "Cacatua citrinocristata",
  "region": "인도네시아 숨바 섬",
  "sizeCm": 35,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Citron-crested_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/304390963/medium.jpeg",
   "credit": "(c) emskakoon, some rights reserved (CC BY-NC), uploaded by emskakoon (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w",
    "o"
   ],
   "cheek": [
    "o"
   ],
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "o"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-meyeri",
  "ko": "Yellow-cheeked Lorikeet",
  "en": "Yellow-cheeked Lorikeet",
  "sci": "Trichoglossus meyeri",
  "region": "인도네시아 술라 제도",
  "sizeCm": 20,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Sula_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/107838470/medium.jpg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "y",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-pfrimeri",
  "ko": "Pfrimer's Parakeet",
  "en": "Pfrimer's Parakeet",
  "sci": "Pyrrhura pfrimeri",
  "region": "브라질 고이아스·토칸칭스 카칭가 건조림",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pfrimer's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/29229562/medium.jpg",
   "credit": "(c) Karina Avila, some rights reserved (CC BY), uploaded by Karina Avila (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "br"
   ],
   "belly": [
    "br",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "r",
    "br"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "chalcopsitta-atra",
  "ko": "Black Lory",
  "en": "Black Lory",
  "sci": "Chalcopsitta atra",
  "region": "인도네시아 파푸아·뉴기니 서부",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/473253710/medium.jpg",
   "credit": "(c) Packa, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "k"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "k"
   ],
   "belly": [
    "k"
   ],
   "back": [
    "k",
    "b"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k",
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-luconensis",
  "ko": "Green Racquet-tail",
  "en": "Green Racquet-tail",
  "sci": "Prioniturus luconensis",
  "region": "필리핀 루손·마린두케 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Green_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159071682/medium.png",
   "credit": "(c) Vinz Pascua, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-keiensis",
  "ko": "Yellow-capped Pygmy-Parrot",
  "en": "Yellow-capped Pygmy-Parrot",
  "sci": "Micropsitta keiensis",
  "region": "뉴기니 서부·카이 제도 저지대 숲",
  "sizeCm": 9.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-capped_pygmy_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/65379580/medium.jpeg",
   "credit": "(c) Ganjar Cahyadi, some rights reserved (CC BY-NC), uploaded by Ganjar Cahyadi (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-dilectissimus",
  "ko": "Blue-fronted Parrotlet",
  "en": "Blue-fronted Parrotlet",
  "sci": "Touit dilectissimus",
  "region": "중앙아메리카~콜롬비아 북서부 저지대 열대우림",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-fronted_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/89687075/medium.jpeg",
   "credit": "(c) Edwin Múnera Chavarría, some rights reserved (CC BY-NC), uploaded by Edwin Múnera Chavarría (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "r",
    "b"
   ],
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "y",
    "k"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "wing": [
     "g",
     "r"
    ]
   },
   {
    "label": "암컷",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-emma",
  "ko": "Venezuelan Parakeet",
  "en": "Venezuelan Parakeet",
  "sci": "Pyrrhura emma",
  "region": "베네수엘라 북부 산지 숲",
  "sizeCm": 23,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Venezuelan_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/429689616/medium.jpg",
   "credit": "(c) Oswaldo Hernández, some rights reserved (CC BY-NC), uploaded by Oswaldo Hernández (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "r",
    "v"
   ],
   "cheek": [
    "w"
   ],
   "throat": [
    "gr",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "br",
    "g"
   ],
   "back": [
    "g",
    "br"
   ],
   "wing": [
    "g",
    "br",
    "b"
   ],
   "tail": [
    "br"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cacatua-ophthalmica",
  "ko": "Blue-eyed Cockatoo",
  "en": "Blue-eyed Cockatoo",
  "sci": "Cacatua ophthalmica",
  "region": "파푸아뉴기니 뉴브리튼 섬 숲",
  "sizeCm": 50,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-eyed_cockatoo",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8203569/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "w"
   ],
   "crown": [
    "w"
   ],
   "forehead": [
    "w"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "w"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": true,
   "crestColor": [
    "y",
    "w"
   ],
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-johnstoniae",
  "ko": "Mindanao Lorikeet",
  "en": "Mindanao Lorikeet",
  "sci": "Trichoglossus johnstoniae",
  "region": "필리핀 민다나오 섬 산지 숲",
  "sizeCm": 20,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Mindanao_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/48163447/medium.jpg",
   "credit": "(c) William Warby, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "p"
   ],
   "forehead": [
    "p"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "br"
    ],
    "face": [
     "r",
     "br"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-reticulatus",
  "ko": "Blue-streaked Lory",
  "en": "Blue-streaked Lory",
  "sci": "Trichoglossus reticulatus",
  "region": "인도네시아 술라웨시·말루쿠 제도 숲",
  "sizeCm": 31,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-streaked_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387832238/medium.jpg",
   "credit": "(c) Doug Janson, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "k",
    "r"
   ],
   "wing": [
    "r",
    "k"
   ],
   "tail": [
    "k",
    "r"
   ],
   "beak": [
    "r",
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-iris",
  "ko": "Iris Lorikeet",
  "en": "Iris Lorikeet",
  "sci": "Trichoglossus iris",
  "region": "인도네시아 소순다 열도(티모르 등) 숲",
  "sizeCm": 20,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Iris_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/60030040/medium.jpg",
   "credit": "(c) SandyCole, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "p"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r",
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyclopsitta-desmarestii",
  "ko": "Large Fig Parrot",
  "en": "Large Fig Parrot",
  "sci": "Cyclopsitta desmarestii",
  "region": "뉴기니 저지대 열대우림",
  "sizeCm": 16,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Large_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/223722645/medium.jpg",
   "credit": "(c) yuvalofek, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "o"
   ],
   "forehead": [
    "r",
    "o"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "sb"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "sb",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-dufresniana",
  "ko": "Blue-cheeked Amazon",
  "en": "Blue-cheeked Amazon",
  "sci": "Amazona dufresniana",
  "region": "남아메리카 북동부 기아나 고지 열대우림",
  "sizeCm": 37,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-cheeked_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/204511/medium.jpg",
   "credit": "(c) TJ Lin, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "g"
   ],
   "forehead": [
    "y",
    "o"
   ],
   "face": [
    "b",
    "v"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "k"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "gr",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-kawalli",
  "ko": "Kawall's Amazon",
  "en": "Kawall's Amazon",
  "sci": "Amazona kawalli",
  "region": "브라질 아마존 남부 열대우림",
  "sizeCm": 36,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Kawall's_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157587156/medium.jpg",
   "credit": "(c) Jacek Kisielewski, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "w",
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b",
    "r"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-discurus",
  "ko": "Blue-crowned Racquet-tail",
  "en": "Blue-crowned Racquet-tail",
  "sci": "Prioniturus discurus",
  "region": "필리핀 루손·민다나오·비사야 저지대 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-crowned_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/59810113/medium.jpg",
   "credit": "(c) Christian Artuso, some rights reserved (CC BY-NC-ND), uploaded by Christian Artuso (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": null,
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "geoffroyus-heteroclitus",
  "ko": "Singing Parrot",
  "en": "Singing Parrot",
  "sci": "Geoffroyus heteroclitus",
  "region": "비스마르크 제도·솔로몬 제도 숲",
  "sizeCm": 24,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Song_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/43439760/medium.jpg",
   "credit": "(c) devonderaad, some rights reserved (CC BY-NC), uploaded by devonderaad (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "gr"
   ],
   "forehead": [
    "b",
    "gr"
   ],
   "face": [
    "b",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-bruijnii",
  "ko": "Red-breasted Pygmy-Parrot",
  "en": "Red-breasted Pygmy-Parrot",
  "sci": "Micropsitta bruijnii",
  "region": "말루쿠 제도·멜라네시아 고산 숲",
  "sizeCm": 8,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-breasted_pygmy_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/127886310/medium.jpg",
   "credit": "(c) David Bishop, some rights reserved (CC BY-NC), uploaded by David Bishop (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-peruviana",
  "ko": "Blue Lorikeet",
  "en": "Blue Lorikeet",
  "sci": "Vini peruviana",
  "region": "남태평양 폴리네시아 섬 (쿡 제도·소시에테 제도)",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/164493513/medium.jpg",
   "credit": "(c) Joseph Brider, some rights reserved (CC BY-NC-ND), uploaded by Joseph Brider (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w"
   ],
   "collar": "none",
   "breast": [
    "w"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "face": [
     "gr",
     "b"
    ],
    "belly": [
     "gr",
     "b"
    ],
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-domicella",
  "ko": "Purple-naped Lory",
  "en": "Purple-naped Lory",
  "sci": "Lorius domicella",
  "region": "인도네시아 말루쿠 제도(스람 섬 등) 숲",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Purple-naped_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/63563327/medium.jpg",
   "credit": "(c) Jurong Bird Park contributor, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "y",
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r",
    "v"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "beak": [
     "br"
    ],
    "eyeSkinColor": "w"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-australis",
  "ko": "Blue-crowned Lorikeet",
  "en": "Blue-crowned Lorikeet",
  "sci": "Vini australis",
  "region": "남태평양 사모아·통가·피지 섬",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-crowned_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/31024129/medium.jpg",
   "credit": "(c) Casey Weissburg, some rights reserved (CC BY-NC), uploaded by Casey Weissburg (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "r",
    "v"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-purpuratus",
  "ko": "Sapphire-rumped Parrotlet",
  "en": "Sapphire-rumped Parrotlet",
  "sci": "Touit purpuratus",
  "region": "아마존 분지 열대우림",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sapphire-rumped_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/114137391/medium.jpeg",
   "credit": "(c) Tomaz Nascimento de Melo, some rights reserved (CC BY-NC-ND), uploaded by Tomaz Nascimento de Melo (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "b",
    "g"
   ],
   "wing": [
    "g",
    "v"
   ],
   "tail": [
    "r",
    "g",
    "k"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-rubiginosus",
  "ko": "Pohnpei Lorikeet",
  "en": "Pohnpei Lorikeet",
  "sci": "Trichoglossus rubiginosus",
  "region": "미크로네시아 포나페(폰페이) 섬 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Pohnpei_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/39755837/medium.jpeg",
   "credit": "(c) Thibaud Aronson, some rights reserved (CC BY-SA), uploaded by Thibaud Aronson (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "br"
   ],
   "belly": [
    "br"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "y",
    "g"
   ],
   "tail": [
    "y",
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "hapalopsittaca-pyrrhops",
  "ko": "Red-faced Parrot",
  "en": "Red-faced Parrot",
  "sci": "Hapalopsittaca pyrrhops",
  "region": "에콰도르 남부 안데스 구름숲",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Red-faced_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/6741584/medium.jpg",
   "credit": "(c) Leslie Flint, some rights reserved (CC BY-NC), uploaded by Leslie Flint (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-kuhlii",
  "ko": "Kuhl's Lorikeet",
  "en": "Kuhl's Lorikeet",
  "sci": "Vini kuhlii",
  "region": "남태평양 라인 제도·피닉스 제도",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Kuhl's_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/109930405/medium.jpg",
   "credit": "(c) desertnaturalist, some rights reserved (CC BY), uploaded by desertnaturalist (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "r",
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "oreopsittacus-arfaki",
  "ko": "Plum-faced Lorikeet",
  "en": "Plum-faced Lorikeet",
  "sci": "Oreopsittacus arfaki",
  "region": "뉴기니 중앙 고산 숲",
  "sizeCm": 15,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Plum-faced_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/9663349/medium.jpeg",
   "credit": "(c) markus lilje, some rights reserved (CC BY-NC-ND), uploaded by markus lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "w"
   ],
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷",
    "forehead": [
     "r"
    ]
   },
   {
    "label": "암컷",
    "forehead": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "neopsittacus-musschenbroekii",
  "ko": "Yellow-billed Lorikeet",
  "en": "Yellow-billed Lorikeet",
  "sci": "Neopsittacus musschenbroekii",
  "region": "뉴기니 산악 숲",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellow-billed_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/9519328/medium.jpeg",
   "credit": "(c) markus lilje, some rights reserved (CC BY-NC-ND), uploaded by markus lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-pusio",
  "ko": "Buff-faced Pygmy-Parrot",
  "en": "Buff-faced Pygmy-Parrot",
  "sci": "Micropsitta pusio",
  "region": "파푸아뉴기니 동부 저지대 숲",
  "sizeCm": 9,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Buff-faced_pygmy_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/10666647/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "b"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "charmosyna-papou",
  "ko": "West Papuan Lorikeet",
  "en": "West Papuan Lorikeet",
  "sci": "Charmosyna papou",
  "region": "뉴기니 고산 숲",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Papuan_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/3308705/medium.jpg",
   "credit": "(c) Nigel Voaden, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "k"
   ],
   "wing": [
    "k"
   ],
   "tail": [
    "k",
    "y"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "chalcopsitta-scintillata",
  "ko": "Yellow-streaked Lory",
  "en": "Yellow-streaked Lory",
  "sci": "Chalcopsitta scintillata",
  "region": "뉴기니 남부 저지대 숲",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Yellowish-streaked_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387831343/medium.jpg",
   "credit": "(c) Linda Kenney, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r",
    "y"
   ],
   "belly": [
    "r",
    "y"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "r",
    "k"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "alisterus-chloropterus",
  "ko": "Papuan King Parrot",
  "en": "Papuan King Parrot",
  "sci": "Alisterus chloropterus",
  "region": "파푸아뉴기니 동부 산지 숲",
  "sizeCm": 36,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Papuan_king_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/180644829/medium.jpg",
   "credit": "(c) David Barros Cardona, some rights reserved (CC BY-NC), uploaded by David Barros Cardona (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "g",
    "lg"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "breast": [
     "g",
     "r"
    ],
    "belly": [
     "r"
    ],
    "back": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-hochstetteri",
  "ko": "Reischek's Parakeet",
  "en": "Reischek's Parakeet",
  "sci": "Cyanoramphus hochstetteri",
  "region": "뉴질랜드 안티포디스 제도",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Reischek's_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387302822/medium.jpeg",
   "credit": "no rights reserved, uploaded by Mark Fraser (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-amabilis",
  "ko": "Moluccan Hanging-Parrot",
  "en": "Moluccan Hanging-Parrot",
  "sci": "Loriculus amabilis",
  "region": "인도네시아 할마헤라·바칸 섬 숲",
  "sizeCm": 11,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Moluccan_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/340220214/medium.jpg",
   "credit": "(c) Martin Walsh, some rights reserved (CC BY-NC-ND), uploaded by Martin Walsh (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "b",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-forbesi",
  "ko": "Chatham Parakeet",
  "en": "Chatham Parakeet",
  "sci": "Cyanoramphus forbesi",
  "region": "뉴질랜드 채텀 제도",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Chatham_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/14512387/medium.jpeg",
   "credit": "(c) Catherine Beard, some rights reserved (CC BY-NC), uploaded by Catherine Beard (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g",
    "v"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "neopsittacus-pullicauda",
  "ko": "Orange-billed Lorikeet",
  "en": "Orange-billed Lorikeet",
  "sci": "Neopsittacus pullicauda",
  "region": "뉴기니 고산 숲",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-billed_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/3093633/medium.jpg",
   "credit": "(c) Nigel Voaden, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "y"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "breast": [
     "g",
     "r"
    ],
    "belly": [
     "g",
     "r"
    ],
    "beak": [
     "br",
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "conuropsis-carolinensis",
  "ko": "Carolina Parakeet",
  "en": "Carolina Parakeet",
  "sci": "Conuropsis carolinensis",
  "region": "북아메리카 동부 (멸종)",
  "sizeCm": 33,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Carolina_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/519212147/medium.jpg",
   "credit": "(c) Mario Aliana Pedrosa, some rights reserved (CC BY-NC), uploaded by Mario Aliana Pedrosa (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "throat": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "nannopsittacus-melanogenia",
  "ko": "Dusky-cheeked Fig Parrot",
  "en": "Dusky-cheeked Fig Parrot",
  "sci": "Nannopsittacus melanogenia",
  "region": "뉴기니 남부·아루 제도 저지대 숲",
  "sizeCm": 9,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Dusky-cheeked_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8235288/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "aprosmictus-jonquillaceus",
  "ko": "Olive-shouldered Parrot",
  "en": "Olive-shouldered Parrot",
  "sci": "Aprosmictus jonquillaceus",
  "region": "티모르·숨바 섬 숲",
  "sizeCm": 33,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Jonquil_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/107995052/medium.jpeg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g",
     "y"
    ]
   },
   {
    "label": "어린 새",
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-caeruleiceps",
  "ko": "Perija Parakeet",
  "en": "Perija Parakeet",
  "sci": "Pyrrhura caeruleiceps",
  "region": "콜롬비아·베네수엘라 페리하 산맥 숲",
  "sizeCm": 22,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Perija_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/291684076/medium.jpeg",
   "credit": "(c) Christoph Moning, osa oikeuksista pidätetään (CC BY), lähettänyt Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "br",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "br",
    "w"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "r",
    "br"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nannopsittaca-dachilleae",
  "ko": "Amazonian Parrotlet",
  "en": "Amazonian Parrotlet",
  "sci": "Nannopsittaca dachilleae",
  "region": "페루 남동부 아마존 저지대 숲",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Manu_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158981228/medium.jpg",
   "credit": "(c) Hector Bottai, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-sclateri",
  "ko": "Sula Hanging-Parrot",
  "en": "Sula Hanging-Parrot",
  "sci": "Loriculus sclateri",
  "region": "인도네시아 방가이·술라 제도 숲",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sula_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/101919921/medium.jpeg",
   "credit": "(c) Alpian Maleso, some rights reserved (CC BY-NC), uploaded by Alpian Maleso (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "b",
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "glossoptilus-goldiei",
  "ko": "Goldie's Lorikeet",
  "en": "Goldie's Lorikeet",
  "sci": "Glossoptilus goldiei",
  "region": "뉴기니 고산 숲",
  "sizeCm": 19,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Goldie's_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/8235301/medium.jpg",
   "credit": "(c) Markus  Lilje, some rights reserved (CC BY-NC-ND), uploaded by Markus  Lilje (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "v",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "lg",
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "b",
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g",
     "r"
    ]
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "back": [
     "gr",
     "b"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "northiella-narethae",
  "ko": "Naretha Bluebonnet",
  "en": "Naretha Bluebonnet",
  "sci": "Northiella narethae",
  "region": "오스트레일리아 날라보 평원",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Naretha_bluebonnet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/96432358/medium.jpg",
   "credit": "(c) Tim Bawden, some rights reserved (CC BY-NC), uploaded by Tim Bawden (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "gr",
    "y"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "sb"
   ],
   "face": [
    "v"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "br"
   ],
   "belly": [
    "y"
   ],
   "back": [
    "gr",
    "g"
   ],
   "wing": [
    "y",
    "b",
    "r"
   ],
   "tail": [
    "sb"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "gr",
     "sb"
    ],
    "wing": [
     "gr",
     "y"
    ],
    "tail": [
     "gr"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrilia-vulturina",
  "ko": "Vulturine Parrot",
  "en": "Vulturine Parrot",
  "sci": "Pyrilia vulturina",
  "region": "브라질 아마존 동부 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Vulturine_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/329487745/medium.jpg",
   "credit": "(c) Steve Foss, some rights reserved (CC BY-NC), uploaded by Steve Foss (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g",
    "o"
   ],
   "wing": [
    "k",
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "face",
   "eyeSkinColor": "k",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g"
    ],
    "eyeSkin": "none",
    "collar": "none"
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-geelvinkiana",
  "ko": "Geelvink Pygmy-Parrot",
  "en": "Geelvink Pygmy-Parrot",
  "sci": "Micropsitta geelvinkiana",
  "region": "인도네시아 게엘빙크 만 섬들",
  "sizeCm": 8,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Geelvink_pygmy_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/117967181/medium.jpeg",
   "credit": "(c) Benoît Segerer, some rights reserved (CC BY-NC), uploaded by Benoît Segerer (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br",
    "sb"
   ],
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "g",
     "br"
    ],
    "face": [
     "sb",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacella-modesta",
  "ko": "Modest Tiger Parrot",
  "en": "Modest Tiger Parrot",
  "sci": "Psittacella modesta",
  "region": "뉴기니 아르팍산맥·고산 활엽수림",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Modest_tiger_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/60662771/medium.jpg",
   "credit": "(c) Nik Borrow, some rights reserved (CC BY-NC), uploaded by Nik Borrow (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eclectus-cornelia",
  "ko": "Sumba Eclectus",
  "en": "Sumba Eclectus",
  "sci": "Eclectus cornelia",
  "region": "인도네시아 숨바 섬 열대우림 (고유종)",
  "sizeCm": 43,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Sumba_eclectus",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/26729122/medium.jpeg",
   "credit": "(c) Yovie Jehabut, some rights reserved (CC BY-NC), uploaded by Yovie Jehabut (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "b",
    "g"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (초록)"
   },
   {
    "label": "암컷 (빨강)",
    "main": [
     "r"
    ],
    "crown": [
     "r"
    ],
    "forehead": [
     "r"
    ],
    "face": [
     "r"
    ],
    "throat": [
     "r"
    ],
    "breast": [
     "r"
    ],
    "belly": [
     "r"
    ],
    "back": [
     "r"
    ],
    "wing": [
     "r",
     "b"
    ],
    "tail": [
     "r"
    ],
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-forsteni",
  "ko": "Sunset Lorikeet",
  "en": "Sunset Lorikeet",
  "sci": "Trichoglossus forsteni",
  "region": "인도네시아 발리·롬복·숨바와 등 소순다열도",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Sunset_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387860460/medium.jpg",
   "credit": "(c) Ted, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": [
    "lg"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-imperialis",
  "ko": "Imperial Amazon",
  "en": "Imperial Amazon",
  "sci": "Amazona imperialis",
  "region": "도미니카 섬 산악 열대우림 (고유종)",
  "sizeCm": 48,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Imperial_amazon",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157586831/medium.jpg",
   "credit": "(c) Amazona_imperialis_-Roseau_-Dominica_-aviary-6a.jpg, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v"
   ],
   "forehead": [
    "v"
   ],
   "face": [
    "v"
   ],
   "cheek": "none",
   "throat": [
    "v"
   ],
   "collar": "none",
   "breast": [
    "v"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "br",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "agapornis-swindernianus",
  "ko": "Black-collared Lovebird",
  "en": "Black-collared Lovebird",
  "sci": "Agapornis swindernianus",
  "region": "중서부 아프리카 열대우림",
  "sizeCm": 13,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-collared_lovebird",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/54851606/medium.jpg",
   "credit": "(c) Mathias D'haen, some rights reserved (CC BY-NC), uploaded by Mathias D'haen (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "br",
    "r"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "o"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "collar": "none"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyclopsitta-salvadorii",
  "ko": "Salvadori's Fig Parrot",
  "en": "Salvadori's Fig Parrot",
  "sci": "Cyclopsitta salvadorii",
  "region": "뉴기니 동부 저지대 숲",
  "sizeCm": 14,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Salvadori's_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/387855822/medium.jpg",
   "credit": "(c) Petr Hamerník, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "y"
   ],
   "cheek": [
    "y"
   ],
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "lg",
     "y"
    ],
    "cheek": [
     "lg",
     "y"
    ],
    "breast": [
     "sb"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-hoematotis",
  "ko": "Red-eared Parakeet",
  "en": "Red-eared Parakeet",
  "sci": "Pyrrhura hoematotis",
  "region": "베네수엘라 북부 산악 숲",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blood-eared_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/705391465/medium.jpg",
   "credit": "(c) Oswaldo Hernández, some rights reserved (CC BY-NC), uploaded by Oswaldo Hernández (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": [
    "o"
   ],
   "throat": [
    "lg",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "lg",
    "gr"
   ],
   "belly": [
    "g",
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "br",
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nannopsittacus-gulielmitertii",
  "ko": "Blue-fronted Fig Parrot",
  "en": "Blue-fronted Fig Parrot",
  "sci": "Nannopsittacus gulielmitertii",
  "region": "뉴기니 저지대 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-fronted_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/29312921/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "w",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "w",
     "o",
     "k"
    ],
    "breast": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "eunymphicus-uvaeensis",
  "ko": "Ouvea Parakeet",
  "en": "Ouvea Parakeet",
  "sci": "Eunymphicus uvaeensis",
  "region": "뉴칼레도니아 우베아 섬 (고유종)",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Ouvea_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/27395234/medium.jpg",
   "credit": "(c) Frédéric Desmoulins, some rights reserved (CC BY-NC), uploaded by Frédéric Desmoulins (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": true,
   "crestColor": [
    "g"
   ],
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-aurantiifrons",
  "ko": "Papuan Hanging-Parrot",
  "en": "Papuan Hanging-Parrot",
  "sci": "Loriculus aurantiifrons",
  "region": "뉴기니 저지대 숲",
  "sizeCm": 10,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Orange-fronted_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/180896194/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y"
   ],
   "forehead": [
    "y"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "b",
     "g"
    ],
    "forehead": [
     "b",
     "g"
    ],
    "face": [
     "b",
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacella-picta",
  "ko": "Painted Tiger Parrot",
  "en": "Painted Tiger Parrot",
  "sci": "Psittacella picta",
  "region": "뉴기니 고산 숲",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Painted_tiger_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/3068969/medium.jpg",
   "credit": "(c) Nigel Voaden, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "chalcopsitta-duivenbodei",
  "ko": "Brown Lory",
  "en": "Brown Lory",
  "sci": "Chalcopsitta duivenbodei",
  "region": "뉴기니 북부 저지대 숲",
  "sizeCm": 31,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Brown_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159017163/medium.jpg",
   "credit": "(c) bob|P-&-S, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "y",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "br"
   ],
   "belly": [
    "br"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "br"
   ],
   "tail": [
    "w"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "touit-costaricensis",
  "ko": "Red-fronted Parrotlet",
  "en": "Red-fronted Parrotlet",
  "sci": "Touit costaricensis",
  "region": "코스타리카·파나마 산악 열대우림",
  "sizeCm": 17,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-fronted_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/33791607/medium.jpeg",
   "credit": "(c) Oliver Komar, some rights reserved (CC BY-NC), uploaded by Oliver Komar (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r",
    "k"
   ],
   "tail": [
    "k",
    "y"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "g",
     "r"
    ],
    "face": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-catamene",
  "ko": "Sangihe Hanging-Parrot",
  "en": "Sangihe Hanging-Parrot",
  "sci": "Loriculus catamene",
  "region": "인도네시아 상이헤 섬 (고유종)",
  "sizeCm": 13.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sangihe_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/377528884/medium.jpeg",
   "credit": "(c) fachrynurmallojr, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-cyanogenius",
  "ko": "Black-winged Lory",
  "en": "Black-winged Lory",
  "sci": "Trichoglossus cyanogenius",
  "region": "인도네시아 비악·숨푸르 등 체더라와시만 섬",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Black-winged_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/533056790/medium.jpg",
   "credit": "(c) Jonathan Newman, some rights reserved (CC BY-NC), uploaded by Jonathan Newman (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": [
    "v"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "r",
    "k"
   ],
   "tail": [
    "r"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "aratinga-maculata",
  "ko": "Sulphur-breasted Parakeet",
  "en": "Sulphur-breasted Parakeet",
  "sci": "Aratinga maculata",
  "region": "브라질 북부·수리남·가이아나 열대 사바나",
  "sizeCm": 30,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sulphur-breasted_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/359493733/medium.jpeg",
   "credit": "(c) Thomas Diemer, some rights reserved (CC BY-NC), uploaded by Thomas Diemer (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "y"
   ],
   "crown": [
    "lg",
    "y"
   ],
   "forehead": [
    "lg",
    "y"
   ],
   "face": [
    "y",
    "o"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "y",
    "o"
   ],
   "back": [
    "lg",
    "y"
   ],
   "wing": [
    "y",
    "g",
    "b"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린 새",
    "crown": [
     "g"
    ],
    "back": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-waterstradti",
  "ko": "Mindanao Racquet-tail",
  "en": "Mindanao Racquet-tail",
  "sci": "Prioniturus waterstradti",
  "region": "필리핀 민다나오 섬 고산 숲 (고유종)",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Mindanao_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159072366/medium.png",
   "credit": "(c) Chetatata, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-histrio",
  "ko": "Red-and-blue Lory",
  "en": "Red-and-blue Lory",
  "sci": "Trichoglossus histrio",
  "region": "인도네시아 술라웨시 북부 주변 섬 (고유종)",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-and-blue_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/56135328/medium.jpg",
   "credit": "(c) Christian Artuso, some rights reserved (CC BY-NC-ND), uploaded by Christian Artuso (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "v",
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": [
    "v"
   ],
   "breast": [
    "b"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "v"
   ],
   "wing": [
    "r",
    "k"
   ],
   "tail": [
    "r",
    "v"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-finschii",
  "ko": "Finsch's Pygmy-Parrot",
  "en": "Finsch's Pygmy-Parrot",
  "sci": "Micropsitta finschii",
  "region": "뉴기니·솔로몬 제도 저지대 숲",
  "sizeCm": 9.5,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Finsch's_pygmy_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/469859041/medium.jpeg",
   "credit": "(c) Bird Explorers, some rights reserved (CC BY-NC), uploaded by Bird Explorers (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "p"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "trichoglossus-weberi",
  "ko": "Leaf Lorikeet",
  "en": "Leaf Lorikeet",
  "sci": "Trichoglossus weberi",
  "region": "인도네시아 플로레스 섬 (고유종)",
  "sizeCm": 23,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Leaf_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/67553820/medium.jpg",
   "credit": "(c) Serge Melki, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "lg"
   ],
   "breast": [
    "lg"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanopsitta-spixii",
  "ko": "Spix's Macaw",
  "en": "Spix's Macaw",
  "sci": "Cyanopsitta spixii",
  "koMissing": true,
  "region": "브라질 북동부 카칭가 지역 (야생 절멸, 사육 개체군만 생존)",
  "sizeCm": 56,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Spix's_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157825506/medium.jpg",
   "credit": "(c) Etna 1984, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "gr",
    "b"
   ],
   "forehead": [
    "gr",
    "b"
   ],
   "face": [
    "gr",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "sb"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "sb"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "charmosynopsis-pulchella",
  "ko": "Fairy Lorikeet",
  "en": "Fairy Lorikeet",
  "sci": "Charmosynopsis pulchella",
  "koMissing": true,
  "region": "솔로몬 제도 산지 숲",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Fairy_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159020705/medium.jpg",
   "credit": "(c) Nick Athanas, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r",
    "g"
   ],
   "crown": [
    "r",
    "v"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r",
    "y"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "y",
    "r"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "lg",
     "y"
    ]
   }
  ]
 },
 {
  "id": "cyclopsitta-edwardsii",
  "ko": "Edwards's Fig Parrot",
  "en": "Edwards's Fig Parrot",
  "sci": "Cyclopsitta edwardsii",
  "koMissing": true,
  "region": "뉴기니 저지대·구릉 열대우림",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Edwards's_fig_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/141356624/medium.jpg",
   "credit": "(c) http://www.birdphotos.com, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "r",
    "y"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r",
    "k"
   ],
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "breast": [
     "g",
     "y",
     "k"
    ]
   }
  ]
 },
 {
  "id": "pyrilia-aurantiocephala",
  "ko": "Bald Parrot",
  "en": "Bald Parrot",
  "sci": "Pyrilia aurantiocephala",
  "koMissing": true,
  "region": "브라질 아마존 타파조스-싱구 강 유역 열대우림",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Bald_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/307293772/medium.jpg",
   "credit": "(c) David Bishop, some rights reserved (CC BY-NC), uploaded by David Bishop (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "o"
   ],
   "forehead": [
    "o"
   ],
   "face": [
    "o",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "k",
    "g"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "b"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "face",
   "eyeSkinColor": "o",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "hapalopsittaca-melanotis",
  "ko": "Black-winged Parrot",
  "en": "Black-winged Parrot",
  "sci": "Hapalopsittaca melanotis",
  "koMissing": true,
  "region": "안데스 산맥 남부 구름숲(페루·볼리비아)",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-winged_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/66329570/medium.jpg",
   "credit": "(c) Thibaud Aronson, some rights reserved (CC BY-SA), uploaded by Thibaud Aronson (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "b"
   ],
   "forehead": [
    "gr",
    "b"
   ],
   "face": [
    "k",
    "b",
    "p"
   ],
   "cheek": [
    "k"
   ],
   "throat": [
    "g",
    "y"
   ],
   "collar": [
    "gr",
    "b"
   ],
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "y",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "k",
    "b"
   ],
   "tail": [
    "g",
    "k"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "trichoglossus-flavoviridis",
  "ko": "Sula Lorikeet",
  "en": "Sula Lorikeet",
  "sci": "Trichoglossus flavoviridis",
  "koMissing": true,
  "region": "인도네시아 술라 제도 숲",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Citrine_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/143748751/medium.jpg",
   "credit": "(c) Peter Wilton, some rights reserved (CC BY-NC), uploaded by Peter Wilton (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "g"
   ],
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "loriculus-bonapartei",
  "ko": "Black-billed Hanging-Parrot",
  "en": "Black-billed Hanging-Parrot",
  "sci": "Loriculus bonapartei",
  "koMissing": true,
  "region": "필리핀 술루 제도 숲",
  "sizeCm": 12,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Black-billed_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/308656640/medium.jpg",
   "credit": "(c) abdel1980, osa oikeuksista pidätetään (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "vini-ultramarina",
  "ko": "Ultramarine Lorikeet",
  "en": "Ultramarine Lorikeet",
  "sci": "Vini ultramarina",
  "koMissing": true,
  "region": "프랑스령 폴리네시아 마르키즈 제도 숲 (심각한 멸종위기)",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Ultramarine_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/160179416/medium.jpg",
   "credit": "(c) peterodekerken, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "b"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b",
    "w"
   ],
   "cheek": "none",
   "throat": [
    "w",
    "b"
   ],
   "collar": "none",
   "breast": [
    "w",
    "b"
   ],
   "belly": [
    "w"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "b"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "prioniturus-mada",
  "ko": "Buru Racquet-tail",
  "en": "Buru Racquet-tail",
  "sci": "Prioniturus mada",
  "koMissing": true,
  "region": "인도네시아 부루섬 숲",
  "sizeCm": 32,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Buru_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/67552490/medium.jpg",
   "credit": "(c) Quartl, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "b"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "b",
    "g"
   ],
   "wing": [
    "b",
    "g"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "k",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g",
     "b"
    ],
    "back": [
     "g"
    ],
    "wing": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "touit-stictopterus",
  "ko": "Spot-winged Parrotlet",
  "en": "Spot-winged Parrotlet",
  "sci": "Touit stictopterus",
  "koMissing": true,
  "region": "남아메리카 안데스 동쪽 사면 숲(콜롬비아~페루)",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Spot-winged_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/231273993/medium.jpg",
   "credit": "(c) David Monroy R, some rights reserved (CC BY-NC), uploaded by David Monroy R (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "br",
    "w",
    "o"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "wing": [
     "g",
     "k"
    ]
   }
  ]
 },
 {
  "id": "psittinus-abbotti",
  "ko": "Simeulue Parrot",
  "en": "Simeulue Parrot",
  "sci": "Psittinus abbotti",
  "koMissing": true,
  "region": "인도네시아 시메울루에 섬 숲",
  "sizeCm": 19,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Simeulue_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/178431995/medium.jpg",
   "credit": "(c) Mehd Halaouate, osa oikeuksista pidätetään (CC BY-NC), lähettänyt Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "throat": [
     "g"
    ]
   }
  ]
 },
 {
  "id": "pyrrhura-subandina",
  "ko": "Subandean Parakeet",
  "en": "Subandean Parakeet",
  "sci": "Pyrrhura subandina",
  "koMissing": true,
  "region": "콜롬비아 북서부 저지대 숲",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sinú_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/30063515/medium.jpg",
   "credit": "(c) keesgroenendijk, some rights reserved (CC BY), uploaded by keesgroenendijk (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "k"
   ],
   "forehead": [
    "br",
    "k"
   ],
   "face": [
    "g"
   ],
   "cheek": [
    "r"
   ],
   "throat": [
    "g",
    "br"
   ],
   "collar": "none",
   "breast": [
    "br",
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "r",
    "br"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "trichoglossus-rosenbergii",
  "ko": "Biak Lorikeet",
  "en": "Biak Lorikeet",
  "sci": "Trichoglossus rosenbergii",
  "koMissing": true,
  "region": "인도네시아 비악섬·수페이오리섬 숲",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Biak_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/30360034/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "v"
   ],
   "forehead": [
    "b",
    "v"
   ],
   "face": [
    "b",
    "v"
   ],
   "cheek": "none",
   "throat": [
    "b"
   ],
   "collar": [
    "y",
    "g"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "b",
    "k"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "coracopsis-sibilans",
  "ko": "Comoro Black Parrot",
  "en": "Comoro Black Parrot",
  "sci": "Coracopsis sibilans",
  "koMissing": true,
  "region": "코모로 제도 숲",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Comoro_black_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/62115800/medium.jpg",
   "credit": "(c) Mikael Bauer, osa oikeuksista pidätetään (CC BY), lähettänyt Mikael Bauer (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "br",
    "k"
   ],
   "crown": [
    "br",
    "k"
   ],
   "forehead": [
    "br",
    "k"
   ],
   "face": [
    "br",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "br",
    "k"
   ],
   "collar": "none",
   "breast": [
    "br",
    "k"
   ],
   "belly": [
    "br",
    "k"
   ],
   "back": [
    "br",
    "k"
   ],
   "wing": [
    "br",
    "k"
   ],
   "tail": [
    "br",
    "k"
   ],
   "beak": [
    "w",
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "vini-stepheni",
  "ko": "Stephen's Lorikeet",
  "en": "Stephen's Lorikeet",
  "sci": "Vini stepheni",
  "koMissing": true,
  "region": "솔로몬 제도 레넬섬 숲",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Stephen's_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/395655071/medium.jpg",
   "credit": "no rights reserved, uploaded by James Eaton (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "r"
   ],
   "collar": [
    "g"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "v"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "lg"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린새",
    "throat": [
     "g",
     "p",
     "r"
    ],
    "belly": [
     "g"
    ],
    "beak": [
     "br"
    ]
   }
  ]
 },
 {
  "id": "pezoporus-occidentalis",
  "ko": "Night Parrot",
  "en": "Night Parrot",
  "sci": "Pezoporus occidentalis",
  "koMissing": true,
  "region": "오스트레일리아 내륙 건조지대 (스피니펙스 초원)",
  "sizeCm": 23,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Night_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/616046530/medium.jpg",
   "credit": "(c) Hugo Sun, some rights reserved (CC BY-NC), uploaded by Hugo Sun (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "lg",
    "y"
   ],
   "crown": [
    "lg",
    "br"
   ],
   "forehead": [
    "lg",
    "br"
   ],
   "face": [
    "lg",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "y",
    "lg"
   ],
   "collar": "none",
   "breast": [
    "y",
    "lg"
   ],
   "belly": [
    "y",
    "lg"
   ],
   "back": [
    "lg",
    "br",
    "k"
   ],
   "wing": [
    "lg",
    "br",
    "k"
   ],
   "tail": [
    "lg",
    "br"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "charmosyna-josefinae",
  "ko": "Josephine's Lorikeet",
  "en": "Josephine's Lorikeet",
  "sci": "Charmosyna josefinae",
  "koMissing": true,
  "region": "뉴기니 산지 숲",
  "sizeCm": 18,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Josephine's_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/227362848/medium.jpg",
   "credit": "(c) Jonathan M, some rights reserved (CC BY-NC), uploaded by Jonathan M (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r",
    "k"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "r",
    "y"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ]
 },
 {
  "id": "trichoglossus-semilarvatus",
  "ko": "Blue-eared Lory",
  "en": "Blue-eared Lory",
  "sci": "Trichoglossus semilarvatus",
  "koMissing": true,
  "region": "인도네시아 세람섬 산지 숲(1600~2400m)",
  "sizeCm": 24,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-eared_lory",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159046442/medium.jpg",
   "credit": "(c) Quartl, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "b"
   ],
   "cheek": [
    "b"
   ],
   "throat": [
    "b"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "v",
    "b"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "k",
    "r"
   ],
   "tail": [
    "r",
    "v"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린새",
    "beak": [
     "p"
    ]
   }
  ]
 },
 {
  "id": "pyrrhura-rhodocephala",
  "ko": "Rose-headed Parakeet",
  "en": "Rose-headed Parakeet",
  "sci": "Pyrrhura rhodocephala",
  "koMissing": true,
  "region": "베네수엘라 안데스 산지 숲",
  "sizeCm": 24,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Rose-crowned_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/730614168/medium.jpg",
   "credit": "(c) Sergio Rivero Beneitez, algunos derechos reservados (CC BY-NC-SA), subido por Sergio Rivero Beneitez (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "w",
    "b"
   ],
   "tail": [
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린새",
    "wing": [
     "g",
     "b"
    ]
   }
  ]
 },
 {
  "id": "geoffroyus-simplex",
  "ko": "Blue-collared Parrot",
  "en": "Blue-collared Parrot",
  "sci": "Geoffroyus simplex",
  "koMissing": true,
  "region": "뉴기니 고지대 숲 (500~2300m)",
  "sizeCm": 25,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-collared_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/127887342/medium.jpg",
   "credit": "(c) David Bishop, some rights reserved (CC BY-NC), uploaded by David Bishop (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "b"
   ],
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g",
     "b"
    ],
    "collar": "none"
   }
  ]
 },
 {
  "id": "nannopsittaca-panychlora",
  "ko": "Tepui Parrotlet",
  "en": "Tepui Parrotlet",
  "sci": "Nannopsittaca panychlora",
  "region": "남아메리카 기아나 고원(테푸이) 아열대·열대 산지숲 (750–2200m)",
  "sizeCm": 12,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Tepui_parrotlet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/33099666/medium.jpg",
   "credit": "(c) Catherine Harper, some rights reserved (CC BY-NC-ND), uploaded by Catherine Harper (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "lg"
   ],
   "crown": [
    "lg"
   ],
   "forehead": [
    "lg"
   ],
   "face": [
    "lg"
   ],
   "cheek": "none",
   "throat": [
    "lg"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "lg"
   ],
   "wing": [
    "lg"
   ],
   "tail": [
    "lg"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-mindorensis",
  "ko": "Mindoro Racquet-tail",
  "en": "Mindoro Racquet-tail",
  "sci": "Prioniturus mindorensis",
  "region": "필리핀 민도로 섬 고유종, 열대 저지대 숲",
  "sizeCm": 23,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Mindoro_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/477089860/medium.jpeg",
   "credit": "(c) Marc Thibault, some rights reserved (CC BY-NC), uploaded by Marc Thibault (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b",
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 빈약, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-camiguinensis",
  "ko": "Camiguin Hanging-Parrot",
  "en": "Camiguin Hanging-Parrot",
  "sci": "Loriculus camiguinensis",
  "region": "필리핀 카미긴 섬 고유종 저지대 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Camiguin_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/259150210/medium.jpeg",
   "credit": "(c) Keith Wheatley, osa oikeuksista pidätetään (CC BY-NC), lähettänyt Keith Wheatley (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 빈약, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacella-madaraszi",
  "ko": "Madarasz's Tiger Parrot",
  "en": "Madarasz's Tiger Parrot",
  "sci": "Psittacella madaraszi",
  "region": "뉴기니 고산지대 숲",
  "sizeCm": 14,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Madarasz's_tiger_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/84046060/medium.jpeg",
   "credit": "(c) Jay VanderGaast, osa oikeuksista pidätetään (CC BY-NC-ND), lähettänyt Jay VanderGaast (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "y",
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": null,
   "back": null,
   "wing": null,
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "forehead": [
     "b"
    ],
    "crown": [
     "y",
     "o"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "pyrrhura-egregia",
  "ko": "Fiery-shouldered Parakeet",
  "en": "Fiery-shouldered Parakeet",
  "sci": "Pyrrhura egregia",
  "region": "남아메리카 가이아나 고원(테푸이) 습윤 산지숲",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Fiery-shouldered_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/419307048/medium.jpg",
   "credit": "(c) Sergio Rivero Beneitez, algunos derechos reservados (CC BY-NC-SA), subido por Sergio Rivero Beneitez (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "g",
    "br"
   ],
   "belly": [
    "br"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y",
    "o"
   ],
   "tail": [
    "br",
    "gr"
   ],
   "beak": [
    "w",
    "gr"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-caniceps",
  "ko": "Nicobar Parakeet",
  "en": "Nicobar Parakeet",
  "sci": "Psittacula caniceps",
  "region": "인도양 니코바르 제도 고유종 열대우림",
  "sizeCm": 58,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Nicobar_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/51005337/medium.jpg",
   "credit": "(c) Milan Sojitra, some rights reserved (CC BY-NC), uploaded by Milan Sojitra (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "y",
    "gr"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "gr",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "k"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "k"
    ],
    "face": [
     "b",
     "gr",
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "hypocharmosyna-rubronotata",
  "ko": "Red-fronted Lorikeet",
  "en": "Red-fronted Lorikeet",
  "sci": "Hypocharmosyna rubronotata",
  "region": "뉴기니 저지대 열대우림",
  "sizeCm": 17,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-fronted_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/179242989/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "v",
    "b"
   ],
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "g"
    ],
    "forehead": [
     "g"
    ],
    "face": [
     "g",
     "y"
    ],
    "beak": null
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-montanus",
  "ko": "Luzon Racquet-tail",
  "en": "Luzon Racquet-tail",
  "sci": "Prioniturus montanus",
  "region": "필리핀 루손 섬 산악 숲 고유종",
  "sizeCm": 28,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Montane_racket-tail",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/252852735/medium.jpg",
   "credit": "(c) Forest Botial-Jarvis, some rights reserved (CC BY), uploaded by Forest Botial-Jarvis (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "lg",
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "b"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 빈약, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-flosculus",
  "ko": "Wallace's Hanging-Parrot",
  "en": "Wallace's Hanging-Parrot",
  "sci": "Loriculus flosculus",
  "region": "인도네시아 플로레스 섬 고유종 숲",
  "sizeCm": 12,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Wallace's_hanging_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/107995904/medium.jpeg",
   "credit": "(c) Christoph Moning, some rights reserved (CC BY), uploaded by Christoph Moning (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "r"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "throat": [
     "g"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "charmosyna-multistriata",
  "ko": "Striated Lorikeet",
  "en": "Striated Lorikeet",
  "sci": "Charmosyna multistriata",
  "region": "뉴기니 저지대 열대우림",
  "sizeCm": 19,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Striated_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/160616590/medium.jpg",
   "credit": "(c) peterodekerken, some rights reserved (CC BY-NC) (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g",
    "y"
   ],
   "belly": [
    "g",
    "y"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "성조 (설명 빈약, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "charminetta-wilhelminae",
  "ko": "Pygmy Lorikeet",
  "en": "Pygmy Lorikeet",
  "sci": "Charminetta wilhelminae",
  "region": "뉴기니 고산 숲",
  "sizeCm": 13,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Pygmy_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/177666889/medium.jpg",
   "credit": "(c) Mehd Halaouate, some rights reserved (CC BY-NC), uploaded by Mehd Halaouate (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": [
    "y",
    "g"
   ],
   "belly": null,
   "back": [
    "g",
    "v"
   ],
   "wing": null,
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "barred"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "back": [
     "g"
    ]
   },
   {
    "label": "어린새",
    "breast": [
     "g"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "charmosynopsis-toxopei",
  "ko": "Blue-fronted Lorikeet",
  "en": "Blue-fronted Lorikeet",
  "sci": "Charmosynopsis toxopei",
  "region": "인도네시아 부루 섬 고유종 산지 숲",
  "sizeCm": 15,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-fronted_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/709704162/medium.jpg",
   "credit": "no rights reserved, uploaded by James Eaton (cc0) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 거의 없음, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "tanygnathus-gramineus",
  "ko": "Black-lored Parrot",
  "en": "Black-lored Parrot",
  "sci": "Tanygnathus gramineus",
  "region": "인도네시아 부루 섬 고유종 숲",
  "sizeCm": 40,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-lored_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/95667363/medium.jpg",
   "credit": "(c) Marie Tarrant, some rights reserved (CC BY-NC), uploaded by Marie Tarrant (cc-by-nc) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "sb"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "g",
    "k"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "gr",
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psephotellus-pulcherrimus",
  "ko": "Paradise Parrot",
  "en": "Paradise Parrot",
  "sci": "Psephotellus pulcherrimus",
  "region": "오스트레일리아 퀸즐랜드 초원지대 (멸종, 1920년대 마지막 목격)",
  "sizeCm": 26,
  "extinct": true,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Paradise_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159073716/medium.jpg",
   "credit": "(c) Bowerbirdaus, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br",
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "r",
    "br"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "sb",
    "k"
   ],
   "tail": [
    "k",
    "sb"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-rubrigularis",
  "ko": "Red-chinned Lorikeet",
  "en": "Red-chinned Lorikeet",
  "sci": "Vini rubrigularis",
  "region": "파푸아뉴기니 비스마르크 제도(뉴브리튼·뉴아일랜드 등) 열대우림",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-chinned_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/302383858/medium.jpeg",
   "credit": "(c) Jay VanderGaast, some rights reserved (CC BY-NC-ND), uploaded by Jay VanderGaast (cc-by-nc-nd) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r",
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 빈약, 속 일반 지식으로 보완 — 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-margarethae",
  "ko": "Duchess Lorikeet",
  "en": "Duchess Lorikeet",
  "sci": "Vini margarethae",
  "region": "솔로몬 제도 고유종 열대 저지대·산지 숲",
  "sizeCm": 20,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Duchess_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/191385033/medium.jpg",
   "credit": "(c) Vertebrate Zoology Curator, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "r",
    "v"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": [
    "y",
    "v"
   ],
   "breast": [
    "y",
    "v",
    "k"
   ],
   "belly": [
    "v",
    "k"
   ],
   "back": [
    "r"
   ],
   "wing": [
    "r"
   ],
   "tail": [
    "r",
    "g",
    "y"
   ],
   "beak": [
    "o"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   },
   {
    "label": "어린새",
    "crown": [
     "k"
    ],
    "face": [
     "k"
    ],
    "breast": [
     "y"
    ],
    "beak": [
     "br",
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "poicephalus-crassus",
  "ko": "Niam-Niam Parrot",
  "en": "Niam-Niam Parrot",
  "sci": "Poicephalus crassus",
  "region": "아프리카 중부 사바나지대(수단·중앙아프리카공화국 등)",
  "sizeCm": 22,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Niam-Niam_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/462106226/medium.png",
   "credit": "(c) Callan Cohen, Claire Spottiswoode, and Julian Francis, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "br"
   ],
   "forehead": [
    "gr",
    "br"
   ],
   "face": [
    "gr",
    "br"
   ],
   "cheek": "none",
   "throat": [
    "gr",
    "br"
   ],
   "collar": "none",
   "breast": [
    "gr",
    "br"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr",
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "micropsitta-meeki",
  "ko": "Meek's Pygmy-Parrot",
  "en": "Meek's Pygmy-Parrot",
  "sci": "Micropsitta meeki",
  "region": "파푸아뉴기니 저지대 열대우림",
  "sizeCm": 9,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Meek's_pygmy_parrot",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br",
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "br"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "ara-tricolor",
  "ko": "Cuban Macaw",
  "en": "Cuban Macaw",
  "sci": "Ara tricolor",
  "region": "쿠바 고유종 (멸종, 19세기 말 마지막 기록)",
  "sizeCm": 50,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Cuban_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157808037/medium.jpg",
   "credit": "(c) Etemenanki3, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "o"
   ],
   "crown": [
    "r",
    "o"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "o"
   ],
   "cheek": "none",
   "throat": [
    "o"
   ],
   "collar": "none",
   "breast": [
    "o"
   ],
   "belly": [
    "o"
   ],
   "back": [
    "br",
    "g"
   ],
   "wing": [
    "br",
    "r",
    "v"
   ],
   "tail": [
    "r",
    "b",
    "br"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "w",
   "crest": false,
   "tailShape": "long",
   "pattern": "scaled"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-labati",
  "ko": "Guadeloupe Parakeet",
  "en": "Guadeloupe Parakeet",
  "sci": "Psittacara labati",
  "region": "카리브해 과들루프 섬 고유종 (멸종)",
  "sizeCm": 25,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Guadeloupe_parakeet",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "r"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "w"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-sinotoi",
  "ko": "Sinoto's Lorikeet",
  "en": "Sinoto's Lorikeet",
  "sci": "Vini sinotoi",
  "region": "마르키즈 제도 (멸종, 화석종)",
  "sizeCm": 31,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Sinoto's_lorikeet",
  "photo": null,
  "base": {
   "main": null,
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": null,
   "wing": null,
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (색상 정보 없음, 화석으로만 알려짐)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-subflavescens",
  "ko": "Lord Howe Parakeet",
  "en": "Lord Howe Parakeet",
  "sci": "Cyanoramphus subflavescens",
  "region": "로드하우섬 (멸종)",
  "sizeCm": 30,
  "extinct": true,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Lord_Howe_parakeet",
  "photo": null,
  "base": {
   "main": [
    "lg",
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "r",
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-bensoni",
  "ko": "Mauritius Gray Parrot",
  "en": "Mauritius Gray Parrot",
  "sci": "Psittacula bensoni",
  "region": "모리셔스·레위니옹 (멸종)",
  "sizeCm": 32,
  "extinct": true,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Mascarene_grey_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/412799855/medium.jpg",
   "credit": "(c) FunkMonk, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-martinicana",
  "ko": "Martinique Parrot",
  "en": "Martinique Parrot",
  "sci": "Amazona martinicana",
  "region": "마르티니크 (멸종)",
  "sizeCm": 35,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Martinique_amazon",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "gr",
    "r"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "r"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "tanygnathus-everetti",
  "ko": "Blue-backed Parrot",
  "en": "Blue-backed Parrot",
  "sci": "Tanygnathus everetti",
  "region": "필리핀 술루 제도 저지대 숲",
  "sizeCm": 32,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Blue-backed_parrot",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "lg"
   ],
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g",
    "b"
   ],
   "wing": [
    "g",
    "y"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "beak": [
     "y"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-ulietanus",
  "ko": "Raiatea Parakeet",
  "en": "Raiatea Parakeet",
  "sci": "Cyanoramphus ulietanus",
  "region": "소시에테 제도 라이아테아섬 (멸종)",
  "sizeCm": 25,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Society_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/159025597/medium.jpg",
   "credit": "(c) Mr intelo, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "br"
   ],
   "cheek": "none",
   "throat": [
    "br"
   ],
   "collar": "none",
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "br"
   ],
   "tail": [
    "br",
    "gr"
   ],
   "beak": [
    "gr",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (암수 동형)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-exsul",
  "ko": "Newton's Parakeet",
  "en": "Newton's Parakeet",
  "sci": "Psittacula exsul",
  "region": "모리셔스 (멸종)",
  "sizeCm": 40,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Newton's_parakeet",
  "photo": null,
  "base": {
   "main": [
    "sb",
    "g"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "sb",
    "g"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "sb",
    "g"
   ],
   "belly": [
    "sb",
    "g"
   ],
   "back": [
    "b"
   ],
   "wing": [
    "b"
   ],
   "tail": [
    "gr",
    "b"
   ],
   "beak": [
    "br",
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "crown": [
     "gr",
     "b"
    ],
    "forehead": [
     "gr",
     "b"
    ],
    "face": [
     "gr",
     "b"
    ],
    "collar": "none",
    "beak": [
     "k"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacula-wardi",
  "ko": "Seychelles Parakeet",
  "en": "Seychelles Parakeet",
  "sci": "Psittacula wardi",
  "region": "세이셸 (멸종)",
  "sizeCm": 41,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Seychelles_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/146760/medium.jpg",
   "credit": "(c) Biodiversity Heritage Library, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g",
    "sb"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "sb"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": [
    "k"
   ],
   "breast": [
    "lg"
   ],
   "belly": [
    "lg"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g",
    "b",
    "y"
   ],
   "beak": [
    "r",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "collar": "none"
   },
   {
    "label": "어린새",
    "collar": "none",
    "tailShape": "mid"
   }
  ],
  "koMissing": true
 },
 {
  "id": "amazona-violacea",
  "ko": "Guadeloupe Parrot",
  "en": "Guadeloupe Parrot",
  "sci": "Amazona violacea",
  "region": "과들루프 (멸종)",
  "sizeCm": 36,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Guadeloupe_amazon",
  "photo": null,
  "base": {
   "main": [
    "b",
    "gr"
   ],
   "crown": [
    "b",
    "gr"
   ],
   "forehead": [
    "b",
    "gr"
   ],
   "face": [
    "b",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "b",
    "gr"
   ],
   "collar": "none",
   "breast": [
    "b",
    "gr"
   ],
   "belly": [
    "b",
    "gr"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "y",
    "r"
   ],
   "tail": null,
   "beak": null,
   "eyeSkin": "ring",
   "eyeSkinColor": "p",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (기록마다 색 묘사가 엇갈림, 저슬레이트-블루 설로 통합)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "prioniturus-verticalis",
  "ko": "Blue-winged Racquet-tail",
  "en": "Blue-winged Racquet-tail",
  "sci": "Prioniturus verticalis",
  "region": "필리핀 타위타위섬 (멸종위기)",
  "sizeCm": 28,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Blue-winged_racket-tail",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "lorius-albidinucha",
  "ko": "White-naped Lory",
  "en": "White-naped Lory",
  "sci": "Lorius albidinucha",
  "region": "비스마르크 제도 (파푸아뉴기니)",
  "sizeCm": 26,
  "wikipedia_url": "http://en.wikipedia.org/wiki/White-naped_lory",
  "photo": null,
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "k"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": [
    "y"
   ],
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "w"
   ],
   "wing": [
    "g"
   ],
   "tail": null,
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "gr",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "loriculus-tener",
  "ko": "Green-fronted Hanging-Parrot",
  "en": "Green-fronted Hanging-Parrot",
  "sci": "Loriculus tener",
  "region": "비스마르크 제도 숲",
  "sizeCm": 11,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Bismarck_hanging_parrot",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g",
    "y"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "y",
    "g"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷"
   },
   {
    "label": "암컷",
    "face": [
     "g",
     "sb"
    ],
    "back": [
     "g"
    ],
    "tail": [
     "g"
    ]
   },
   {
    "label": "어린새",
    "throat": [
     "g"
    ],
    "beak": [
     "br"
    ]
   }
  ],
  "koMissing": true
 },
 {
  "id": "ara-autochthones",
  "ko": "St. Croix Macaw",
  "en": "St. Croix Macaw",
  "sci": "Ara autochthones",
  "region": "세인트크로이섬 (멸종, 뼈 화석으로만 알려짐)",
  "sizeCm": 50,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Saint_Croix_macaw",
  "photo": null,
  "base": {
   "main": null,
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": null,
   "wing": null,
   "tail": null,
   "beak": null,
   "eyeSkin": "face",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (색상 정보 없음, 뼈 화석으로만 알려짐)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eclectus-infectus",
  "ko": "Oceanic Eclectus",
  "en": "Oceanic Eclectus",
  "sci": "Eclectus infectus",
  "region": "통가·바누아투 (멸종)",
  "sizeCm": 32,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Oceanic_eclectus_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/473044920/medium.png",
   "credit": "(c) solidstatesystem, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (초록, 화석 기록상 색상은 근연종 에클렉투스앵무 추정)"
   },
   {
    "label": "암컷 (빨강·파랑, 추정)",
    "main": [
     "r",
     "b"
    ],
    "crown": [
     "r"
    ],
    "forehead": [
     "r"
    ],
    "face": [
     "r"
    ],
    "throat": [
     "r"
    ],
    "breast": [
     "b",
     "v"
    ],
    "belly": [
     "b",
     "v"
    ],
    "back": [
     "r",
     "br"
    ],
    "wing": [
     "r",
     "v"
    ],
    "tail": [
     "r",
     "o"
    ],
    "beak": [
     "k"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "b"
   }
  ],
  "koMissing": true
 },
 {
  "id": "lophopsittacus-mauritianus",
  "ko": "Broad-billed Parrot",
  "en": "Broad-billed Parrot",
  "sci": "Lophopsittacus mauritianus",
  "region": "모리셔스 (멸종)",
  "sizeCm": 55,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Broad-billed_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/146770/medium.jpg",
   "credit": "(c) Biodiversity Heritage Library, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "r"
   ],
   "crown": [
    "b"
   ],
   "forehead": [
    "b"
   ],
   "face": [
    "b"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "r"
   ],
   "belly": [
    "r"
   ],
   "back": [
    "r"
   ],
   "wing": null,
   "tail": null,
   "beak": [
    "r"
   ],
   "eyeSkin": "face",
   "crest": true,
   "crestColor": [
    "b"
   ],
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (색상·크기 모두 학설이 엇갈림, 수컷이 암컷보다 훨씬 큼)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "eclectus-riedeli",
  "ko": "Tanimbar Eclectus",
  "en": "Tanimbar Eclectus",
  "sci": "Eclectus riedeli",
  "region": "인도네시아 타님바르 제도",
  "sizeCm": 30,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Tanimbar_eclectus",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "g",
    "b"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "y"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "수컷 (초록)"
   },
   {
    "label": "암컷 (빨강)",
    "main": [
     "r"
    ],
    "crown": [
     "r"
    ],
    "forehead": [
     "r"
    ],
    "face": [
     "r"
    ],
    "throat": [
     "r"
    ],
    "breast": [
     "r"
    ],
    "belly": [
     "r"
    ],
    "back": [
     "r"
    ],
    "wing": [
     "r",
     "b"
    ],
    "tail": [
     "r",
     "y"
    ],
    "beak": [
     "k"
    ],
    "eyeSkin": "ring",
    "eyeSkinColor": "b"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-vidivici",
  "ko": "Conquered Lorikeet",
  "en": "Conquered Lorikeet",
  "sci": "Vini vidivici",
  "region": "폴리네시아 (멸종, 화석종)",
  "sizeCm": 28,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Conquered_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/297211257/medium.jpg",
   "credit": "(c) FunkMonk, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": null,
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": null,
   "wing": null,
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (색상 정보 없음, Vini 중 두 번째로 큼)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-palmarum",
  "ko": "Palm Lorikeet",
  "en": "Palm Lorikeet",
  "sci": "Vini palmarum",
  "region": "바누아투·산타크루즈 제도 숲",
  "sizeCm": 14,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Palm_lorikeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/69541250/medium.jpg",
   "credit": "(c) Auckland Museum, some rights reserved (CC BY) (cc-by) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g",
    "b"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (위키 설명에 생김새 정보 없어 일반 지식으로 보완, 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-amabilis",
  "ko": "Red-throated Lorikeet",
  "en": "Red-throated Lorikeet",
  "sci": "Vini amabilis",
  "region": "피지 (멸종위기종)",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Red-throated_lorikeet",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "r"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-meeki",
  "ko": "Meek's Lorikeet",
  "en": "Meek's Lorikeet",
  "sci": "Vini meeki",
  "region": "부건빌섬·솔로몬 제도 숲",
  "sizeCm": 18,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Meek's_lorikeet",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r",
    "g"
   ],
   "forehead": [
    "r"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (위키 설명에 생김새 정보 없어 일반 지식으로 보완, 재확인 권장)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "vini-diadema",
  "ko": "New Caledonian Lorikeet",
  "en": "New Caledonian Lorikeet",
  "sci": "Vini diadema",
  "region": "뉴칼레도니아 고산림 (1종만 채집된 극희귀종)",
  "sizeCm": 19,
  "wikipedia_url": "https://en.wikipedia.org/wiki/New_Caledonian_lorikeet",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "v",
    "b"
   ],
   "forehead": null,
   "face": [
    "y"
   ],
   "cheek": "none",
   "throat": [
    "y"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g",
    "r"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g",
    "y"
   ],
   "beak": [
    "o",
    "r"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (유일하게 기록된 암컷; 수컷은 미기록)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "cyanoramphus-zealandicus",
  "ko": "Black-fronted Parakeet",
  "en": "Black-fronted Parakeet",
  "sci": "Cyanoramphus zealandicus",
  "region": "프랑스령 폴리네시아 타히티 섬 (멸종)",
  "sizeCm": 25,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Black-fronted_parakeet",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "r"
   ],
   "forehead": [
    "k"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "b"
   ],
   "tail": [
    "g"
   ],
   "beak": [
    "gr"
   ],
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (근연종 기반 추정, 확신 낮음)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nannopsittacus-nigrifrons",
  "ko": "Black-fronted Fig Parrot",
  "en": "Black-fronted Fig Parrot",
  "sci": "Nannopsittacus nigrifrons",
  "region": "파푸아뉴기니 북부 저지대 열대우림",
  "sizeCm": 10,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Black-fronted_fig_parrot",
  "photo": null,
  "base": {
   "main": [
    "g"
   ],
   "crown": null,
   "forehead": [
    "k"
   ],
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (설명 매우 부족, 확신 낮음)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "mascarinus-mascarinus",
  "ko": "Mascarene Parrot",
  "en": "Mascarene Parrot",
  "sci": "Mascarinus mascarinus",
  "region": "레위니옹 섬 (멸종)",
  "sizeCm": 35,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Mascarene_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/132991/medium.jpg",
   "credit": "(c) Biodiversity Heritage Library, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "gr"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "k",
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "gr"
   ],
   "collar": "none",
   "breast": [
    "gr"
   ],
   "belly": [
    "gr"
   ],
   "back": [
    "gr"
   ],
   "wing": [
    "gr"
   ],
   "tail": [
    "gr"
   ],
   "beak": [
    "r"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "r",
   "crest": false,
   "tailShape": "mid",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (색상 기록에 혼선 있음, Brisson 1760 기준)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nestor-productus",
  "ko": "Norfolk Island Kaka",
  "en": "Norfolk Island Kaka",
  "sci": "Nestor productus",
  "region": "오스트레일리아 노퍽 섬·필립 섬 (멸종)",
  "sizeCm": 38,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Norfolk_kaka",
  "photo": null,
  "base": {
   "main": [
    "br"
   ],
   "crown": [
    "br"
   ],
   "forehead": [
    "br"
   ],
   "face": [
    "o",
    "r"
   ],
   "cheek": "none",
   "throat": [
    "o",
    "r"
   ],
   "collar": "none",
   "breast": [
    "y"
   ],
   "belly": [
    "o"
   ],
   "back": [
    "br"
   ],
   "wing": [
    "br"
   ],
   "tail": [
    "br"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "anodorhynchus-glaucus",
  "ko": "Glaucous Macaw",
  "en": "Glaucous Macaw",
  "sci": "Anodorhynchus glaucus",
  "region": "남아메리카 중부 (아르헨티나·파라과이·우루과이, 멸종위급/절멸 추정)",
  "sizeCm": 70,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Glaucous_macaw",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/157592801/medium.jpg",
   "credit": "(c) Rama, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "sb"
   ],
   "crown": [
    "gr"
   ],
   "forehead": [
    "gr"
   ],
   "face": [
    "gr"
   ],
   "cheek": "none",
   "throat": [
    "sb"
   ],
   "collar": "none",
   "breast": [
    "sb"
   ],
   "belly": [
    "sb"
   ],
   "back": [
    "sb"
   ],
   "wing": [
    "sb"
   ],
   "tail": [
    "sb"
   ],
   "beak": [
    "k"
   ],
   "eyeSkin": "ring",
   "eyeSkinColor": "y",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조"
   }
  ],
  "koMissing": true
 },
 {
  "id": "nestor-chathamensis",
  "ko": "Chatham Island Kaka",
  "en": "Chatham Island Kaka",
  "sci": "Nestor chathamensis",
  "region": "뉴질랜드 채텀 제도 (멸종, 아원화석으로만 발견)",
  "sizeCm": 45,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Chatham_kaka",
  "photo": null,
  "base": {
   "main": null,
   "crown": null,
   "forehead": null,
   "face": null,
   "cheek": "none",
   "throat": null,
   "collar": "none",
   "breast": null,
   "belly": null,
   "back": null,
   "wing": null,
   "tail": null,
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "short",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (가죽·외형 기록 전혀 없음, 아원화석 기반 추정종)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "necropsittacus-rodricanus",
  "ko": "Rodrigues Parrot",
  "en": "Rodrigues Parrot",
  "sci": "Necropsittacus rodricanus",
  "region": "모리셔스령 로드리게스 섬 (멸종)",
  "sizeCm": 50,
  "extinct": true,
  "wikipedia_url": "https://en.wikipedia.org/wiki/Rodrigues_parrot",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/146769/medium.jpg",
   "credit": "(c) Biodiversity Heritage Library, some rights reserved (CC BY-NC-SA) (cc-by-nc-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "none",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (뼈대 기록 위주, 색은 '균일한 초록'만 확인됨)"
   }
  ],
  "koMissing": true
 },
 {
  "id": "psittacara-maugei",
  "ko": "Puerto Rican Parakeet",
  "en": "Puerto Rican Parakeet",
  "sci": "Psittacara maugei",
  "region": "푸에르토리코 (멸종)",
  "sizeCm": 32,
  "extinct": true,
  "wikipedia_url": "http://en.wikipedia.org/wiki/Puerto_Rican_parakeet",
  "photo": {
   "src": "https://inaturalist-open-data.s3.amazonaws.com/photos/158988240/medium.jpeg",
   "credit": "(c) Souancé, 1856, some rights reserved (CC BY-SA) (cc-by-sa) / iNaturalist"
  },
  "base": {
   "main": [
    "g"
   ],
   "crown": [
    "g"
   ],
   "forehead": [
    "g"
   ],
   "face": [
    "g"
   ],
   "cheek": "none",
   "throat": [
    "g"
   ],
   "collar": "none",
   "breast": [
    "g"
   ],
   "belly": [
    "g"
   ],
   "back": [
    "g"
   ],
   "wing": [
    "g",
    "r"
   ],
   "tail": [
    "g"
   ],
   "beak": null,
   "eyeSkin": "ring",
   "crest": false,
   "tailShape": "long",
   "pattern": "plain"
  },
  "looks": [
   {
    "label": "성조 (근연종 히스파니올라앵무 기준 추정)"
   }
  ],
  "koMissing": true
 }
];
