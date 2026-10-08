/*
  색 보정 데이터 (사진 재검증 결과)
  species.js의 범주 라벨보다 우선한다. 없는 항목은 species.js 값을 쓴다.
  형식: COLOR_FIX[종 id][모습 label 또는 "*"][부위] = { 기준색코드: 비율, ... }  (비율 합 = 1)
  기준색: w 흰 · gr 회색 · k 검정 · br 갈색 · ol 올리브 · y 노랑 · o 주황 · r 빨강 · p 분홍 · v 보라
          nv 남색 · b 파랑 · sb 하늘 · tl 청록 · g 초록 · lg 연두
  부위: main crown forehead face throat breast belly back wing tail beak crestColor
*/
window.COLOR_FIX = {
 "agapornis-lilianae": {
  "*": {
   "forehead": {
    "r": 0.6,
    "o": 0.4
   },
   "face": {
    "r": 0.5,
    "o": 0.5
   }
  }
 },
 "amazona-finschi": {
  "*": {
   "forehead": {
    "r": 1
   },
   "face": {
    "g": 0.6,
    "b": 0.4
   }
  }
 },
 "amazona-leucocephala": {
  "*": {
   "face": {
    "p": 0.6,
    "gr": 0.4
   },
   "wing": {
    "g": 0.8,
    "b": 0.2
   },
   "tail": {
    "g": 0.8,
    "b": 0.2
   },
   "beak": {
    "w": 0.6,
    "br": 0.4
   }
  }
 },
 "amazona-lilacina": {
  "*": {
   "crown": {
    "r": 1
   },
   "wing": {
    "g": 0.85,
    "r": 0.15
   }
  }
 },
 "amazona-vinacea": {
  "*": {
   "tail": {
    "g": 0.6,
    "r": 0.2,
    "b": 0.2
   },
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "amazona-xantholora": {
  "수컷": {
   "face": {
    "g": 0.7,
    "r": 0.3
   },
   "wing": {
    "g": 0.8,
    "b": 0.2
   },
   "beak": {
    "y": 0.8,
    "o": 0.2
   }
  }
 },
 "ara-glaucogularis": {
  "*": {
   "main": {
    "b": 0.6,
    "tl": 0.4
   },
   "crown": {
    "tl": 0.8,
    "b": 0.2
   },
   "throat": {
    "tl": 0.8,
    "b": 0.2
   },
   "breast": {
    "o": 0.55,
    "y": 0.45
   },
   "back": {
    "tl": 0.8,
    "b": 0.2
   },
   "wing": {
    "tl": 0.8,
    "b": 0.2
   },
   "tail": {
    "tl": 0.8,
    "b": 0.2
   }
  }
 },
 "ara-militaris": {
  "*": {
   "wing": {
    "g": 0.55,
    "b": 0.45
   },
   "tail": {
    "b": 0.55,
    "r": 0.45
   }
  }
 },
 "brotogeris-jugularis": {
  "*": {
   "beak": {
    "p": 0.6,
    "w": 0.4
   }
  }
 },
 "brotogeris-tirica": {
  "*": {
   "wing": {
    "g": 0.7,
    "y": 0.3
   }
  }
 },
 "cyanoliseus-patagonus": {
  "*": {
   "wing": {
    "br": 0.5,
    "g": 0.3,
    "k": 0.2
   },
   "tail": {
    "b": 0.65,
    "g": 0.35
   }
  }
 },
 "cyanoramphus-saisseti": {
  "*": {
   "breast": {
    "lg": 0.6,
    "g": 0.4
   },
   "belly": {
    "lg": 0.5,
    "y": 0.3,
    "g": 0.2
   }
  }
 },
 "cyanoramphus-unicolor": {
  "*": {
   "wing": {
    "g": 0.8,
    "b": 0.2
   }
  }
 },
 "diopsittaca-nobilis": {
  "*": {
   "crown": {
    "b": 0.6,
    "g": 0.4
   }
  }
 },
 "eupsittula-aurea": {
  "*": {
   "face": {
    "g": 0.6,
    "ol": 0.4
   },
   "throat": {
    "g": 0.6,
    "ol": 0.4
   }
  }
 },
 "eupsittula-pertinax": {
  "*": {
   "crown": {
    "gr": 0.5,
    "g": 0.5
   },
   "forehead": {
    "o": 0.55,
    "y": 0.45
   },
   "face": {
    "o": 0.55,
    "y": 0.45
   },
   "throat": {
    "o": 0.5,
    "y": 0.5
   }
  }
 },
 "forpus-coelestis": {
  "*": {
   "crown": {
    "g": 0.75,
    "gr": 0.25
   },
   "throat": {
    "g": 0.8,
    "gr": 0.2
   },
   "breast": {
    "g": 0.8,
    "gr": 0.2
   },
   "belly": {
    "g": 0.8,
    "gr": 0.2
   }
  }
 },
 "geoffroyus-geoffroyi": {
  "암컷": {
   "beak": {
    "gr": 0.5,
    "w": 0.5
   }
  }
 },
 "lineolated": {
  "*": {
   "beak": {
    "p": 0.7,
    "w": 0.3
   }
  }
 },
 "loriculus-stigmatus": {
  "*": {
   "crown": {
    "g": 1
   },
   "forehead": {
    "g": 1
   },
   "face": {
    "g": 1
   },
   "throat": {
    "r": 0.8,
    "o": 0.2
   },
   "tail": {
    "g": 0.7,
    "b": 0.3
   },
   "beak": {
    "r": 0.9,
    "k": 0.1
   }
  }
 },
 "lorius-lory": {
  "*": {
   "belly": {
    "nv": 0.5,
    "k": 0.3,
    "r": 0.2
   },
   "wing": {
    "g": 0.35,
    "y": 0.35,
    "k": 0.3
   }
  }
 },
 "neophema-chrysogaster": {
  "*": {
   "tail": {
    "tl": 0.5,
    "y": 0.3,
    "g": 0.2
   }
  }
 },
 "neophema-chrysostoma": {
  "*": {
   "tail": {
    "b": 0.6,
    "lg": 0.4
   },
   "breast": {
    "lg": 0.55,
    "y": 0.45
   }
  }
 },
 "neophema-petrophila": {
  "*": {
   "main": {
    "ol": 0.6,
    "y": 0.2,
    "br": 0.2
   },
   "crown": {
    "ol": 0.6,
    "y": 0.4
   },
   "throat": {
    "ol": 0.5,
    "br": 0.3,
    "y": 0.2
   },
   "back": {
    "ol": 0.6,
    "br": 0.4
   }
  }
 },
 "neophema-pulchella": {
  "수컷": {
   "wing": {
    "b": 0.4,
    "g": 0.3,
    "r": 0.3
   }
  }
 },
 "northiella-haematogaster": {
  "*": {
   "wing": {
    "y": 0.35,
    "b": 0.35,
    "r": 0.3
   }
  }
 },
 "pionus-chalcopterus": {
  "*": {
   "wing": {
    "br": 0.6,
    "b": 0.3,
    "g": 0.1
   }
  }
 },
 "pionus-fuscus": {
  "*": {
   "breast": {
    "gr": 0.5,
    "p": 0.5
   }
  }
 },
 "pionus-maximiliani": {
  "*": {
   "crown": {
    "br": 0.55,
    "gr": 0.45
   },
   "forehead": {
    "br": 0.55,
    "gr": 0.45
   }
  }
 },
 "pionus-sordidus": {
  "*": {
   "breast": {
    "b": 0.6,
    "v": 0.4
   }
  }
 },
 "platycercus-caledonicus": {
  "*": {
   "breast": {
    "y": 0.5,
    "g": 0.4,
    "k": 0.1
   },
   "belly": {
    "y": 0.5,
    "g": 0.4,
    "k": 0.1
   },
   "throat": {
    "nv": 0.6,
    "b": 0.4
   },
   "wing": {
    "k": 0.4,
    "g": 0.4,
    "b": 0.2
   }
  }
 },
 "platycercus-icterotis": {
  "*": {
   "wing": {
    "tl": 0.4,
    "k": 0.3,
    "b": 0.3
   }
  },
  "수컷": {
   "back": {
    "k": 0.4,
    "tl": 0.3,
    "b": 0.3
   }
  }
 },
 "poicephalus-cryptoxanthus": {
  "*": {
   "crown": {
    "br": 0.5,
    "gr": 0.5
   },
   "forehead": {
    "br": 0.5,
    "gr": 0.5
   },
   "face": {
    "br": 0.5,
    "gr": 0.5
   },
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "poicephalus-meyeri": {
  "*": {
   "main": {
    "br": 0.6,
    "gr": 0.2,
    "g": 0.2
   },
   "crown": {
    "gr": 0.4,
    "br": 0.3,
    "y": 0.3
   },
   "face": {
    "gr": 0.5,
    "br": 0.5
   },
   "throat": {
    "gr": 0.5,
    "br": 0.5
   },
   "breast": {
    "gr": 0.5,
    "br": 0.5
   },
   "back": {
    "g": 0.9,
    "b": 0.1
   },
   "wing": {
    "g": 0.4,
    "k": 0.4,
    "y": 0.2
   }
  }
 },
 "primolius-couloni": {
  "*": {
   "face": {
    "b": 0.7,
    "gr": 0.3
   },
   "tail": {
    "g": 0.6,
    "br": 0.4
   }
  }
 },
 "prosopeia-tabuensis": {
  "*": {
   "main": {
    "g": 0.6,
    "br": 0.25,
    "b": 0.15
   },
   "throat": {
    "g": 1
   },
   "breast": {
    "g": 1
   },
   "belly": {
    "g": 0.5,
    "b": 0.5
   },
   "back": {
    "g": 1
   },
   "tail": {
    "b": 0.85,
    "g": 0.15
   }
  }
 },
 "psephotellus-dissimilis": {
  "수컷": {
   "tail": {
    "sb": 0.6,
    "g": 0.4
   }
  }
 },
 "psephotellus-varius": {
  "*": {
   "main": {
    "g": 0.65,
    "tl": 0.35
   }
  },
  "수컷": {
   "beak": {
    "gr": 0.9,
    "w": 0.1
   }
  }
 },
 "psephotus-haematonotus": {
  "수컷": {
   "crown": {
    "tl": 0.6,
    "g": 0.4
   },
   "forehead": {
    "tl": 0.6,
    "g": 0.4
   },
   "face": {
    "tl": 0.55,
    "g": 0.45
   },
   "throat": {
    "tl": 0.5,
    "g": 0.5
   },
   "breast": {
    "g": 0.55,
    "y": 0.45
   }
  }
 },
 "psittacara-frontatus": {
  "*": {
   "crown": {
    "g": 0.9,
    "r": 0.1
   },
   "face": {
    "g": 0.6,
    "r": 0.4
   }
  }
 },
 "psittacara-strenuus": {
  "*": {
   "throat": {
    "g": 1
   },
   "breast": {
    "g": 1
   },
   "belly": {
    "g": 1
   }
  }
 },
 "psittacella-brehmii": {
  "*": {
   "wing": {
    "g": 0.5,
    "y": 0.3,
    "k": 0.2
   }
  }
 },
 "psittacula-cyanocephala": {
  "*": {
   "breast": {
    "lg": 0.7,
    "g": 0.3
   },
   "belly": {
    "lg": 0.7,
    "g": 0.3
   }
  }
 },
 "psittacula-himalayana": {
  "수컷": {
   "beak": {
    "o": 0.6,
    "r": 0.4
   }
  }
 },
 "psittacula-roseata": {
  "수컷": {
   "crown": {
    "v": 0.7,
    "p": 0.3
   },
   "forehead": {
    "v": 0.7,
    "p": 0.3
   },
   "tail": {
    "tl": 0.5,
    "b": 0.4,
    "y": 0.1
   }
  }
 },
 "psittacus-timneh": {
  "*": {
   "beak": {
    "p": 0.5,
    "br": 0.5
   }
  }
 },
 "psitteuteles-porphyrocephalus": {
  "*": {
   "belly": {
    "lg": 0.5,
    "y": 0.25,
    "sb": 0.25
   }
  }
 },
 "psitteuteles-pusillus": {
  "*": {
   "face": {
    "g": 0.6,
    "r": 0.4
   },
   "tail": {
    "g": 0.7,
    "y": 0.3
   }
  }
 },
 "psittinus-cyanurus": {
  "암컷": {
   "crown": {
    "br": 0.7,
    "gr": 0.3
   },
   "forehead": {
    "br": 0.7,
    "gr": 0.3
   },
   "face": {
    "br": 0.7,
    "gr": 0.3
   },
   "throat": {
    "br": 0.7,
    "gr": 0.3
   }
  }
 },
 "pyrilia-barrabandi": {
  "*": {
   "breast": {
    "o": 0.45,
    "y": 0.3,
    "g": 0.25
   }
  }
 },
 "pyrilia-haematotis": {
  "*": {
   "breast": {
    "g": 0.5,
    "br": 0.3,
    "tl": 0.2
   }
  }
 },
 "pyrilia-pulchra": {
  "*": {
   "crown": {
    "br": 0.7,
    "gr": 0.3
   }
  }
 },
 "pyrilia-pyrilia": {
  "*": {
   "crown": {
    "y": 0.6,
    "o": 0.4
   },
   "forehead": {
    "y": 0.6,
    "o": 0.4
   },
   "face": {
    "y": 0.5,
    "o": 0.3,
    "k": 0.2
   },
   "wing": {
    "g": 0.6,
    "b": 0.3,
    "k": 0.1
   }
  }
 },
 "pyrrhura-amazonum": {
  "*": {
   "crown": {
    "b": 0.5,
    "g": 0.5
   },
   "forehead": {
    "br": 0.8,
    "g": 0.2
   }
  }
 },
 "pyrrhura-cruentata": {
  "*": {
   "forehead": {
    "br": 0.6,
    "g": 0.4
   },
   "wing": {
    "g": 0.5,
    "r": 0.3,
    "b": 0.2
   }
  }
 },
 "pyrrhura-devillei": {
  "*": {
   "face": {
    "ol": 0.5,
    "gr": 0.3,
    "br": 0.2
   },
   "throat": {
    "gr": 0.5,
    "br": 0.5
   },
   "breast": {
    "gr": 0.5,
    "br": 0.5
   },
   "wing": {
    "g": 0.5,
    "r": 0.3,
    "b": 0.2
   },
   "tail": {
    "br": 0.8,
    "g": 0.2
   }
  }
 },
 "pyrrhura-frontalis": {
  "*": {
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "pyrrhura-leucotis": {
  "*": {
   "forehead": {
    "br": 0.7,
    "gr": 0.3
   }
  }
 },
 "pyrrhura-melanura": {
  "*": {
   "forehead": {
    "br": 0.6,
    "k": 0.4
   },
   "face": {
    "gr": 0.5,
    "br": 0.3,
    "g": 0.2
   }
  }
 },
 "pyrrhura-picta": {
  "*": {
   "forehead": {
    "br": 0.6,
    "r": 0.4
   },
   "face": {
    "r": 0.65,
    "br": 0.35
   },
   "throat": {
    "w": 0.5,
    "br": 0.5
   },
   "breast": {
    "w": 0.5,
    "br": 0.5
   }
  }
 },
 "rhynchopsitta-terrisi": {
  "*": {
   "face": {
    "g": 0.7,
    "br": 0.3
   },
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "sunconure": {
  "*": {
   "crown": {
    "o": 0.55,
    "y": 0.45
   },
   "belly": {
    "y": 0.65,
    "o": 0.35
   }
  }
 },
 "touit-surdus": {
  "*": {
   "crown": {
    "br": 0.6,
    "g": 0.4
   }
  }
 },
 "trichoglossus-euteles": {
  "*": {
   "forehead": {
    "o": 0.6,
    "r": 0.4
   },
   "crown": {
    "g": 0.6,
    "y": 0.4
   },
   "face": {
    "g": 0.5,
    "y": 0.3,
    "o": 0.2
   }
  }
 }
};
