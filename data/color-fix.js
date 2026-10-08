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
 "agapornis-nigrigenis": {
  "*": {
   "crown": {
    "br": 0.55,
    "r": 0.45
   },
   "forehead": {
    "r": 0.55,
    "br": 0.45
   }
  }
 },
 "agapornis-swindernianus": {
  "*": {
   "throat": {
    "o": 0.7,
    "y": 0.3
   }
  }
 },
 "agapornis-taranta": {
  "*": {
   "wing": {
    "g": 0.65,
    "k": 0.35
   }
  }
 },
 "alipiopsitta-xanthops": {
  "*": {
   "throat": {
    "y": 1
   },
   "beak": {
    "gr": 0.5,
    "p": 0.5
   }
  }
 },
 "alisterus-chloropterus": {
  "*": {
   "tail": {
    "k": 0.7,
    "gr": 0.3
   }
  }
 },
 "amazona-agilis": {
  "*": {
   "beak": {
    "gr": 0.8,
    "w": 0.2
   }
  }
 },
 "amazona-auropalliata": {
  "*": {
   "wing": {
    "g": 0.6,
    "k": 0.25,
    "r": 0.15
   },
   "tail": {
    "g": 0.75,
    "y": 0.25
   }
  }
 },
 "amazona-brasiliensis": {
  "*": {
   "crown": {
    "v": 0.45,
    "g": 0.55
   }
  }
 },
 "amazona-diadema": {
  "*": {
   "wing": {
    "g": 0.55,
    "k": 0.25,
    "r": 0.2
   }
  }
 },
 "amazona-dufresniana": {
  "*": {
   "face": {
    "b": 0.6,
    "p": 0.4
   }
  }
 },
 "amazona-festiva": {
  "*": {
   "face": {
    "g": 0.7,
    "b": 0.3
   },
   "beak": {
    "gr": 0.5,
    "k": 0.5
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
 "amazona-guildingii": {
  "*": {
   "main": {
    "br": 0.8,
    "g": 0.2
   },
   "crown": {
    "w": 0.5,
    "gr": 0.3,
    "b": 0.2
   },
   "forehead": {
    "w": 0.7,
    "y": 0.3
   },
   "face": {
    "w": 0.55,
    "b": 0.45
   },
   "breast": {
    "br": 0.75,
    "r": 0.25
   },
   "belly": {
    "br": 0.75,
    "r": 0.25
   },
   "back": {
    "br": 0.6,
    "o": 0.4
   },
   "wing": {
    "y": 0.4,
    "b": 0.35,
    "o": 0.25
   },
   "tail": {
    "y": 0.5,
    "o": 0.3,
    "b": 0.2
   },
   "beak": {
    "gr": 0.6,
    "w": 0.4
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
 "amazona-pretrei": {
  "*": {
   "beak": {
    "w": 0.5,
    "gr": 0.5
   }
  }
 },
 "amazona-rhodocorytha": {
  "*": {
   "crown": {
    "b": 0.5,
    "g": 0.35,
    "r": 0.15
   }
  }
 },
 "amazona-ventralis": {
  "*": {
   "throat": {
    "g": 0.85,
    "w": 0.15
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
 "ara-ambiguus": {
  "*": {
   "tail": {
    "r": 0.5,
    "sb": 0.5
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
 "aratinga-auricapillus": {
  "*": {
   "face": {
    "g": 0.8,
    "r": 0.2
   },
   "tail": {
    "g": 0.7,
    "b": 0.3
   }
  }
 },
 "aratinga-maculata": {
  "*": {
   "crown": {
    "y": 1
   },
   "forehead": {
    "y": 0.5,
    "o": 0.5
   },
   "wing": {
    "g": 0.5,
    "b": 0.25,
    "y": 0.25
   }
  }
 },
 "bluefrontedamazon": {
  "*": {
   "wing": {
    "g": 0.65,
    "r": 0.2,
    "b": 0.15
   }
  }
 },
 "bolbopsittacus-lunulatus": {
  "*": {
   "belly": {
    "g": 0.65,
    "y": 0.35
   },
   "tail": {
    "g": 0.7,
    "gr": 0.3
   }
  },
  "수컷": {
   "throat": {
    "b": 0.55,
    "g": 0.45
   }
  }
 },
 "brotogeris-chrysoptera": {
  "*": {
   "beak": {
    "w": 0.6,
    "p": 0.4
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
 "brotogeris-versicolurus": {
  "*": {
   "beak": {
    "p": 0.65,
    "w": 0.35
   }
  }
 },
 "cacatua-haematuropygia": {
  "*": {
   "belly": {
    "w": 0.55,
    "r": 0.25,
    "y": 0.2
   }
  }
 },
 "cacatua-moluccensis": {
  "*": {
   "crown": {
    "w": 0.7,
    "p": 0.3
   },
   "breast": {
    "w": 0.65,
    "p": 0.35
   }
  }
 },
 "cacatua-sanguinea": {
  "*": {
   "face": {
    "w": 0.85,
    "p": 0.15
   }
  }
 },
 "cacatua-tenuirostris": {
  "*": {
   "forehead": {
    "p": 0.55,
    "w": 0.45
   },
   "face": {
    "w": 0.6,
    "p": 0.4
   },
   "throat": {
    "p": 0.6,
    "o": 0.4
   },
   "breast": {
    "w": 0.6,
    "p": 0.4
   }
  }
 },
 "calyptorhynchus-lathami": {
  "*": {
   "tail": {
    "r": 0.5,
    "o": 0.3,
    "k": 0.2
   }
  },
  "암컷": {
   "tail": {
    "r": 0.45,
    "o": 0.35,
    "k": 0.2
   }
  }
 },
 "chalcopsitta-fuscata": {
  "*": {
   "tail": {
    "r": 0.5,
    "k": 0.3,
    "o": 0.2
   },
   "wing": {
    "k": 0.45,
    "br": 0.35,
    "r": 0.2
   },
   "forehead": {
    "br": 0.4,
    "k": 0.3,
    "y": 0.3
   },
   "face": {
    "br": 0.4,
    "k": 0.3,
    "y": 0.3
   }
  }
 },
 "chalcopsitta-scintillata": {
  "*": {
   "main": {
    "r": 0.4,
    "g": 0.35,
    "y": 0.25
   },
   "back": {
    "g": 0.5,
    "y": 0.3,
    "r": 0.2
   },
   "wing": {
    "g": 0.5,
    "r": 0.3,
    "k": 0.2
   }
  }
 },
 "charmosyna-josefinae": {
  "*": {
   "back": {
    "k": 0.6,
    "g": 0.4
   },
   "wing": {
    "k": 0.6,
    "g": 0.4
   }
  }
 },
 "charmosyna-multistriata": {
  "*": {
   "crown": {
    "r": 0.7,
    "g": 0.3
   },
   "forehead": {
    "r": 0.7,
    "g": 0.3
   },
   "face": {
    "r": 0.6,
    "g": 0.4
   }
  }
 },
 "charmosyna-papou": {
  "*": {
   "back": {
    "g": 0.8,
    "b": 0.2
   },
   "wing": {
    "g": 0.6,
    "k": 0.4
   },
   "tail": {
    "y": 0.5,
    "g": 0.3,
    "k": 0.2
   }
  }
 },
 "charmosyna-stellae": {
  "*": {
   "tail": {
    "y": 0.65,
    "r": 0.35
   },
   "belly": {
    "k": 0.6,
    "r": 0.4
   }
  }
 },
 "coracopsis-nigra": {
  "*": {
   "main": {
    "br": 0.5,
    "gr": 0.3,
    "k": 0.2
   },
   "crown": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "forehead": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "face": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "throat": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "breast": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "belly": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "back": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "wing": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "tail": {
    "br": 0.45,
    "gr": 0.35,
    "k": 0.2
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
 "cyanoramphus-forbesi": {
  "*": {
   "back": {
    "g": 1
   },
   "wing": {
    "g": 0.8,
    "tl": 0.2
   }
  }
 },
 "cyanoramphus-hochstetteri": {
  "*": {
   "crown": {
    "g": 0.75,
    "r": 0.25
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
 "cyclopsitta-desmarestii": {
  "*": {
   "face": {
    "k": 0.75,
    "g": 0.25
   }
  }
 },
 "cyclopsitta-diophthalma": {
  "*": {
   "forehead": {
    "r": 0.5,
    "o": 0.5
   },
   "throat": {
    "b": 1
   },
   "belly": {
    "g": 0.6,
    "y": 0.25,
    "b": 0.15
   }
  }
 },
 "cyclopsitta-edwardsii": {
  "수컷": {
   "crown": {
    "g": 0.55,
    "b": 0.45
   }
  }
 },
 "cyclopsitta-salvadorii": {
  "*": {
   "breast": {
    "r": 0.75,
    "o": 0.25
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
 "eclectus": {
  "암컷 (빨강·파랑)": {
   "breast": {
    "r": 0.85,
    "b": 0.15
   }
  }
 },
 "eclectus-polychloros": {
  "*": {
   "wing": {
    "g": 0.6,
    "b": 0.2,
    "r": 0.2
   }
  }
 },
 "enicognathus-ferrugineus": {
  "*": {
   "tail": {
    "br": 0.6,
    "r": 0.4
   }
  }
 },
 "enicognathus-leptorhynchus": {
  "*": {
   "face": {
    "g": 1
   },
   "throat": {
    "g": 1
   },
   "breast": {
    "g": 1
   }
  }
 },
 "eunymphicus-uvaeensis": {
  "*": {
   "crestColor": {
    "br": 0.6,
    "k": 0.4
   },
   "breast": {
    "g": 0.7,
    "y": 0.3
   },
   "belly": {
    "g": 0.7,
    "y": 0.3
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
 "eupsittula-cactorum": {
  "*": {
   "crown": {
    "ol": 0.6,
    "br": 0.4
   },
   "forehead": {
    "ol": 0.6,
    "br": 0.4
   },
   "face": {
    "gr": 0.5,
    "ol": 0.5
   },
   "throat": {
    "ol": 0.5,
    "gr": 0.5
   },
   "breast": {
    "y": 0.5,
    "ol": 0.3,
    "gr": 0.2
   },
   "belly": {
    "y": 0.6,
    "g": 0.4
   },
   "beak": {
    "p": 0.7,
    "gr": 0.3
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
 "forpus-xanthops": {
  "*": {
   "back": {
    "gr": 0.5,
    "sb": 0.3,
    "g": 0.2
   },
   "beak": {
    "gr": 0.7,
    "w": 0.3
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
 "geoffroyus-heteroclitus": {
  "*": {
   "crown": {
    "y": 1
   },
   "forehead": {
    "y": 1
   },
   "face": {
    "gr": 0.5,
    "y": 0.5
   }
  }
 },
 "geoffroyus-simplex": {
  "*": {
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "glossoptilus-goldiei": {
  "*": {
   "face": {
    "v": 0.6,
    "p": 0.4
   },
   "beak": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "greencheek": {
  "*": {
   "breast": {
    "gr": 0.6,
    "br": 0.4
   }
  }
 },
 "hapalopsittaca-amazonina": {
  "*": {
   "breast": {
    "g": 0.5,
    "y": 0.3,
    "lg": 0.2
   }
  }
 },
 "hapalopsittaca-fuertesi": {
  "*": {
   "forehead": {
    "b": 0.7,
    "w": 0.3
   },
   "crown": {
    "y": 0.65,
    "b": 0.35
   },
   "beak": {
    "w": 0.5,
    "gr": 0.5
   }
  }
 },
 "hapalopsittaca-melanotis": {
  "*": {
   "crown": {
    "y": 0.55,
    "g": 0.45
   },
   "forehead": {
    "y": 0.6,
    "g": 0.4
   },
   "face": {
    "gr": 0.65,
    "w": 0.35
   }
  }
 },
 "hapalopsittaca-pyrrhops": {
  "*": {
   "tail": {
    "g": 0.5,
    "b": 0.5
   }
  }
 },
 "hypocharmosyna-placentis": {
  "수컷": {
   "wing": {
    "g": 0.7,
    "r": 0.3
   }
  }
 },
 "hypocharmosyna-rubronotata": {
  "수컷": {
   "throat": {
    "o": 0.65,
    "g": 0.35
   },
   "breast": {
    "o": 0.55,
    "g": 0.45
   }
  }
 },
 "kakapo": {
  "*": {
   "belly": {
    "y": 0.5,
    "g": 0.3,
    "k": 0.2
   },
   "tail": {
    "g": 0.5,
    "k": 0.35,
    "br": 0.15
   }
  }
 },
 "lathamus-discolor": {
  "*": {
   "crown": {
    "g": 0.65,
    "b": 0.35
   },
   "tail": {
    "g": 0.7,
    "r": 0.3
   }
  }
 },
 "leptosittaca-branickii": {
  "*": {
   "beak": {
    "gr": 0.55,
    "k": 0.45
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
 "loriculus-amabilis": {
  "*": {
   "forehead": {
    "r": 0.7,
    "o": 0.3
   },
   "face": {
    "r": 0.55,
    "g": 0.45
   }
  }
 },
 "loriculus-beryllinus": {
  "*": {
   "beak": {
    "o": 0.65,
    "r": 0.35
   }
  }
 },
 "loriculus-bonapartei": {
  "*": {
   "crown": {
    "o": 1
   },
   "forehead": {
    "o": 1
   },
   "throat": {
    "o": 0.6,
    "r": 0.4
   }
  }
 },
 "loriculus-catamene": {
  "*": {
   "crown": {
    "r": 1
   },
   "forehead": {
    "r": 1
   },
   "throat": {
    "b": 1
   }
  }
 },
 "loriculus-exilis": {
  "*": {
   "throat": {
    "b": 0.6,
    "r": 0.4
   },
   "breast": {
    "g": 0.7,
    "b": 0.3
   }
  }
 },
 "loriculus-philippensis": {
  "*": {
   "throat": {
    "b": 0.85,
    "g": 0.15
   },
   "back": {
    "g": 0.65,
    "r": 0.35
   },
   "beak": {
    "o": 0.65,
    "r": 0.35
   }
  }
 },
 "loriculus-pusillus": {
  "*": {
   "throat": {
    "o": 0.6,
    "y": 0.4
   }
  }
 },
 "loriculus-sclateri": {
  "*": {
   "crown": {
    "g": 0.85,
    "r": 0.15
   },
   "throat": {
    "r": 0.55,
    "b": 0.45
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
 "loriculus-vernalis": {
  "*": {
   "tail": {
    "tl": 0.6,
    "g": 0.4
   }
  }
 },
 "lorius-domicella": {
  "*": {
   "back": {
    "ol": 0.5,
    "k": 0.3,
    "g": 0.2
   },
   "wing": {
    "ol": 0.4,
    "k": 0.3,
    "g": 0.3
   }
  }
 },
 "lorius-hypoinochrous": {
  "*": {
   "tail": {
    "k": 0.6,
    "y": 0.3,
    "g": 0.1
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
 "micropsitta-geelvinkiana": {
  "*": {
   "crown": {
    "br": 0.6,
    "gr": 0.4
   },
   "breast": {
    "o": 0.6,
    "y": 0.4
   }
  }
 },
 "micropsitta-keiensis": {
  "*": {
   "crown": {
    "y": 0.45,
    "br": 0.35,
    "o": 0.2
   }
  }
 },
 "micropsitta-pusio": {
  "*": {
   "crown": {
    "b": 0.65,
    "gr": 0.35
   }
  }
 },
 "monk": {
  "*": {
   "tail": {
    "g": 0.65,
    "b": 0.35
   }
  }
 },
 "nannopsittaca-panychlora": {
  "*": {
   "main": {
    "g": 0.8,
    "lg": 0.2
   },
   "crown": {
    "g": 0.8,
    "lg": 0.2
   },
   "forehead": {
    "g": 0.7,
    "lg": 0.3
   },
   "back": {
    "g": 0.85,
    "lg": 0.15
   },
   "wing": {
    "g": 0.8,
    "lg": 0.2
   },
   "tail": {
    "g": 0.75,
    "lg": 0.25
   }
  }
 },
 "nannopsittacus-gulielmitertii": {
  "*": {
   "crown": {
    "k": 0.85,
    "g": 0.15
   },
   "forehead": {
    "w": 0.8,
    "b": 0.2
   },
   "face": {
    "o": 0.5,
    "r": 0.3,
    "w": 0.2
   },
   "throat": {
    "b": 0.6,
    "g": 0.4
   }
  }
 },
 "nannopsittacus-melanogenia": {
  "*": {
   "crown": {
    "k": 1
   },
   "forehead": {
    "k": 1
   },
   "face": {
    "k": 0.6,
    "w": 0.4
   },
   "throat": {
    "o": 0.6,
    "r": 0.4
   },
   "back": {
    "tl": 0.55,
    "g": 0.45
   },
   "wing": {
    "g": 0.6,
    "b": 0.4
   },
   "tail": {
    "b": 0.7,
    "g": 0.3
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
 "neopsephotus-bourkii": {
  "*": {
   "tail": {
    "b": 0.6,
    "k": 0.4
   },
   "belly": {
    "p": 0.5,
    "sb": 0.5
   }
  }
 },
 "neopsittacus-musschenbroekii": {
  "*": {
   "belly": {
    "r": 0.7,
    "o": 0.2,
    "g": 0.1
   }
  }
 },
 "nestor-meridionalis": {
  "*": {
   "main": {
    "br": 0.85,
    "r": 0.15
   },
   "face": {
    "br": 0.45,
    "r": 0.35,
    "y": 0.2
   },
   "breast": {
    "br": 0.85,
    "r": 0.15
   },
   "back": {
    "br": 1
   },
   "wing": {
    "br": 0.85,
    "r": 0.15
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
 "northiella-narethae": {
  "*": {
   "crown": {
    "gr": 0.6,
    "br": 0.4
   },
   "face": {
    "sb": 0.8,
    "b": 0.2
   },
   "back": {
    "gr": 0.7,
    "br": 0.3
   }
  }
 },
 "ognorhynchus-icterotis": {
  "*": {
   "forehead": {
    "k": 0.65,
    "y": 0.35
   },
   "face": {
    "y": 0.55,
    "g": 0.45
   }
  }
 },
 "oreopsittacus-arfaki": {
  "*": {
   "face": {
    "g": 0.45,
    "w": 0.25,
    "v": 0.3
   },
   "tail": {
    "g": 0.5,
    "r": 0.3,
    "o": 0.2
   },
   "wing": {
    "g": 0.7,
    "tl": 0.3
   }
  }
 },
 "pionopsitta-pileata": {
  "*": {
   "belly": {
    "g": 0.7,
    "y": 0.3
   }
  },
  "암컷": {
   "breast": {
    "g": 0.75,
    "y": 0.25
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
 "pionus-tumultuosus": {
  "*": {
   "crown": {
    "br": 0.4,
    "r": 0.35,
    "w": 0.25
   },
   "forehead": {
    "br": 0.4,
    "r": 0.35,
    "w": 0.25
   },
   "face": {
    "br": 0.4,
    "r": 0.35,
    "w": 0.25
   },
   "throat": {
    "v": 0.55,
    "gr": 0.45
   },
   "breast": {
    "v": 0.5,
    "g": 0.5
   },
   "wing": {
    "g": 1
   }
  }
 },
 "platycercus-adscitus": {
  "*": {
   "crown": {
    "w": 0.75,
    "y": 0.25
   },
   "forehead": {
    "w": 0.85,
    "y": 0.15
   },
   "face": {
    "w": 0.85,
    "y": 0.15
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
 "platycercus-eximius": {
  "*": {
   "belly": {
    "y": 0.75,
    "lg": 0.25
   },
   "wing": {
    "k": 0.45,
    "b": 0.35,
    "y": 0.2
   },
   "tail": {
    "b": 0.65,
    "g": 0.35
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
 "platycercus-venustus": {
  "*": {
   "wing": {
    "b": 0.6,
    "k": 0.4
   },
   "tail": {
    "b": 0.75,
    "r": 0.25
   }
  }
 },
 "poicephalus-crassus": {
  "*": {
   "breast": {
    "g": 0.7,
    "lg": 0.3
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
 "poicephalus-flavifrons": {
  "*": {
   "forehead": {
    "y": 0.85,
    "o": 0.15
   },
   "face": {
    "y": 0.85,
    "o": 0.15
   }
  }
 },
 "poicephalus-fuscicollis": {
  "*": {
   "forehead": {
    "gr": 0.6,
    "o": 0.4
   },
   "beak": {
    "w": 0.5,
    "gr": 0.5
   }
  }
 },
 "poicephalus-gulielmi": {
  "*": {
   "wing": {
    "g": 0.6,
    "k": 0.2,
    "r": 0.2
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
 "poicephalus-rueppellii": {
  "*": {
   "crown": {
    "gr": 0.45,
    "k": 0.35,
    "y": 0.2
   },
   "forehead": {
    "y": 0.45,
    "gr": 0.35,
    "k": 0.2
   },
   "face": {
    "gr": 0.55,
    "k": 0.45
   },
   "throat": {
    "gr": 0.55,
    "k": 0.45
   },
   "breast": {
    "gr": 0.55,
    "k": 0.45
   },
   "belly": {
    "gr": 0.5,
    "y": 0.35,
    "k": 0.15
   }
  }
 },
 "poicephalus-rufiventris": {
  "*": {
   "belly": {
    "g": 0.6,
    "o": 0.4
   }
  }
 },
 "polytelis-anthopeplus": {
  "수컷": {
   "wing": {
    "g": 0.45,
    "r": 0.25,
    "k": 0.3
   }
  }
 },
 "polytelis-swainsonii": {
  "*": {
   "breast": {
    "g": 0.75,
    "r": 0.25
   }
  }
 },
 "primolius-auricollis": {
  "*": {
   "wing": {
    "g": 0.6,
    "b": 0.3,
    "r": 0.1
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
 "primolius-maracana": {
  "*": {
   "forehead": {
    "g": 0.5,
    "b": 0.5
   },
   "wing": {
    "g": 0.45,
    "b": 0.35,
    "r": 0.2
   }
  }
 },
 "prioniturus-flavicans": {
  "*": {
   "breast": {
    "g": 0.45,
    "y": 0.4,
    "ol": 0.15
   }
  }
 },
 "prioniturus-mindorensis": {
  "*": {
   "forehead": {
    "b": 0.75,
    "g": 0.25
   },
   "crown": {
    "g": 0.65,
    "b": 0.35
   }
  }
 },
 "prioniturus-platenae": {
  "*": {
   "crown": {
    "tl": 0.65,
    "g": 0.35
   },
   "forehead": {
    "tl": 0.65,
    "g": 0.35
   },
   "face": {
    "tl": 0.55,
    "g": 0.45
   }
  }
 },
 "prioniturus-waterstradti": {
  "*": {
   "crown": {
    "g": 1
   }
  }
 },
 "probosciger-aterrimus": {
  "*": {
   "main": {
    "k": 0.6,
    "gr": 0.4
   },
   "breast": {
    "k": 0.55,
    "gr": 0.45
   },
   "belly": {
    "k": 0.55,
    "gr": 0.45
   },
   "back": {
    "k": 0.6,
    "gr": 0.4
   },
   "wing": {
    "k": 0.65,
    "gr": 0.35
   },
   "beak": {
    "gr": 0.5,
    "w": 0.5
   }
  }
 },
 "prosopeia-splendens": {
  "*": {
   "tail": {
    "b": 0.75,
    "g": 0.25
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
 "psephotellus-chrysopterygius": {
  "*": {
   "main": {
    "sb": 0.65,
    "gr": 0.25,
    "y": 0.1
   },
   "face": {
    "sb": 0.7,
    "b": 0.3
   },
   "throat": {
    "sb": 0.7,
    "b": 0.3
   },
   "breast": {
    "sb": 0.6,
    "b": 0.4
   },
   "belly": {
    "y": 0.6,
    "o": 0.4
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
 "psephotellus-pulcherrimus": {
  "*": {
   "crown": {
    "tl": 0.8,
    "k": 0.2
   },
   "face": {
    "tl": 1
   },
   "breast": {
    "br": 0.6,
    "o": 0.4
   },
   "back": {
    "k": 0.8,
    "br": 0.2
   },
   "wing": {
    "k": 0.5,
    "tl": 0.5
   },
   "tail": {
    "k": 0.7,
    "tl": 0.3
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
 "psilopsiagon-aymara": {
  "*": {
   "face": {
    "w": 0.85,
    "gr": 0.15
   },
   "belly": {
    "g": 0.6,
    "y": 0.4
   },
   "beak": {
    "br": 0.7,
    "gr": 0.3
   }
  }
 },
 "psittacara-chloropterus": {
  "*": {
   "beak": {
    "w": 0.55,
    "gr": 0.45
   }
  }
 },
 "psittacara-erythrogenys": {
  "*": {
   "face": {
    "r": 0.6,
    "g": 0.4
   },
   "beak": {
    "w": 1
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
 "psittacara-mitratus": {
  "*": {
   "forehead": {
    "r": 1
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
 "psittacella-madaraszi": {
  "*": {
   "breast": {
    "lg": 0.6,
    "g": 0.4
   }
  }
 },
 "psittacella-modesta": {
  "*": {
   "crown": {
    "br": 1
   },
   "forehead": {
    "br": 1
   },
   "face": {
    "br": 1
   },
   "throat": {
    "br": 1
   },
   "breast": {
    "g": 0.8,
    "lg": 0.2
   },
   "belly": {
    "lg": 0.6,
    "g": 0.4
   },
   "beak": {
    "w": 1
   }
  }
 },
 "psittacella-picta": {
  "*": {
   "crown": {
    "br": 0.6,
    "y": 0.4
   },
   "forehead": {
    "br": 0.8,
    "y": 0.2
   },
   "face": {
    "g": 0.8,
    "gr": 0.2
   },
   "breast": {
    "y": 0.6,
    "k": 0.25,
    "g": 0.15
   },
   "belly": {
    "g": 0.5,
    "y": 0.3,
    "k": 0.2
   }
  }
 },
 "psittacula-alexandri": {
  "*": {
   "breast": {
    "p": 0.5,
    "y": 0.35,
    "g": 0.15
   },
   "belly": {
    "y": 0.5,
    "g": 0.5
   },
   "wing": {
    "g": 0.75,
    "y": 0.25
   }
  }
 },
 "psittacula-caniceps": {
  "*": {
   "crown": {
    "gr": 0.55,
    "k": 0.45
   }
  },
  "수컷": {
   "face": {
    "r": 0.5,
    "gr": 0.3,
    "k": 0.2
   }
  }
 },
 "psittacula-columboides": {
  "*": {
   "back": {
    "tl": 0.5,
    "b": 0.3,
    "gr": 0.2
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
 "psittacula-eupatria": {
  "*": {
   "face": {
    "g": 0.4,
    "p": 0.35,
    "k": 0.25
   },
   "back": {
    "g": 1
   }
  }
 },
 "psittacula-finschii": {
  "수컷": {
   "wing": {
    "g": 0.85,
    "r": 0.15
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
 "psittacula-longicauda": {
  "*": {
   "crown": {
    "gr": 0.6,
    "g": 0.4
   },
   "forehead": {
    "gr": 0.6,
    "g": 0.4
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
 "psittinus-abbotti": {
  "수컷": {
   "crown": {
    "gr": 0.5,
    "b": 0.5
   },
   "throat": {
    "gr": 0.5,
    "b": 0.5
   },
   "beak": {
    "o": 0.5,
    "r": 0.5
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
 "purpureicephalus-spurius": {
  "*": {
   "back": {
    "g": 0.75,
    "r": 0.25
   }
  }
 },
 "pyrilia-aurantiocephala": {
  "*": {
   "crown": {
    "y": 0.55,
    "o": 0.45
   },
   "wing": {
    "g": 0.55,
    "y": 0.15,
    "r": 0.3
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
 "pyrilia-caica": {
  "*": {
   "crown": {
    "k": 0.9,
    "br": 0.1
   },
   "forehead": {
    "k": 0.9,
    "br": 0.1
   },
   "face": {
    "k": 0.8,
    "o": 0.2
   },
   "throat": {
    "o": 0.9,
    "y": 0.1
   },
   "breast": {
    "g": 0.75,
    "o": 0.25
   },
   "beak": {
    "w": 0.6,
    "gr": 0.4
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
 "pyrilia-vulturina": {
  "*": {
   "crown": {
    "o": 0.7,
    "k": 0.3
   },
   "forehead": {
    "o": 0.8,
    "k": 0.2
   },
   "face": {
    "o": 0.8,
    "k": 0.2
   },
   "throat": {
    "o": 0.7,
    "k": 0.3
   },
   "wing": {
    "g": 0.5,
    "k": 0.3,
    "r": 0.2
   }
  }
 },
 "pyrrhura-albipectus": {
  "*": {
   "forehead": {
    "br": 0.55,
    "gr": 0.45
   },
   "face": {
    "o": 0.6,
    "r": 0.4
   },
   "breast": {
    "w": 0.7,
    "y": 0.3
   },
   "tail": {
    "g": 0.35,
    "nv": 0.35,
    "k": 0.3
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
 "pyrrhura-caeruleiceps": {
  "*": {
   "crown": {
    "br": 0.6,
    "b": 0.4
   },
   "forehead": {
    "br": 0.6,
    "k": 0.4
   },
   "face": {
    "r": 0.4,
    "gr": 0.35,
    "br": 0.25
   },
   "throat": {
    "gr": 0.6,
    "w": 0.4
   }
  }
 },
 "pyrrhura-calliptera": {
  "*": {
   "face": {
    "br": 0.6,
    "gr": 0.4
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
 "pyrrhura-egregia": {
  "*": {
   "crown": {
    "br": 0.55,
    "gr": 0.45
   },
   "forehead": {
    "br": 0.55,
    "gr": 0.45
   },
   "face": {
    "gr": 0.5,
    "br": 0.5
   },
   "throat": {
    "gr": 0.5,
    "br": 0.5
   },
   "back": {
    "g": 0.75,
    "v": 0.25
   },
   "tail": {
    "br": 0.55,
    "k": 0.45
   }
  }
 },
 "pyrrhura-emma": {
  "*": {
   "face": {
    "gr": 0.6,
    "br": 0.4
   },
   "belly": {
    "r": 0.55,
    "g": 0.45
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
 "pyrrhura-griseipectus": {
  "*": {
   "face": {
    "w": 0.55,
    "gr": 0.45
   },
   "breast": {
    "gr": 0.5,
    "r": 0.35,
    "w": 0.15
   },
   "tail": {
    "r": 0.75,
    "br": 0.25
   }
  }
 },
 "pyrrhura-hoematotis": {
  "*": {
   "crown": {
    "br": 0.8,
    "gr": 0.2
   },
   "forehead": {
    "br": 0.8,
    "gr": 0.2
   },
   "tail": {
    "r": 0.7,
    "br": 0.3
   },
   "beak": {
    "gr": 0.5,
    "k": 0.5
   }
  }
 },
 "pyrrhura-lepida": {
  "*": {
   "face": {
    "br": 0.65,
    "sb": 0.35
   },
   "tail": {
    "r": 0.45,
    "o": 0.3,
    "k": 0.25
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
 "pyrrhura-lucianii": {
  "*": {
   "beak": {
    "gr": 0.6,
    "w": 0.4
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
 "pyrrhura-orcesi": {
  "*": {
   "tail": {
    "br": 0.45,
    "r": 0.3,
    "g": 0.25
   }
  }
 },
 "pyrrhura-pfrimeri": {
  "*": {
   "crown": {
    "br": 0.6,
    "r": 0.4
   },
   "forehead": {
    "br": 0.6,
    "r": 0.4
   },
   "face": {
    "br": 0.55,
    "r": 0.3,
    "g": 0.15
   },
   "throat": {
    "g": 0.5,
    "b": 0.5
   },
   "beak": {
    "k": 0.6,
    "gr": 0.4
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
 "pyrrhura-rhodocephala": {
  "*": {
   "crown": {
    "r": 0.55,
    "br": 0.45
   },
   "forehead": {
    "r": 0.55,
    "br": 0.45
   },
   "breast": {
    "g": 0.5,
    "br": 0.5
   },
   "tail": {
    "r": 0.55,
    "br": 0.45
   }
  }
 },
 "pyrrhura-rupicola": {
  "*": {
   "crown": {
    "k": 0.5,
    "br": 0.5
   },
   "forehead": {
    "k": 0.5,
    "br": 0.5
   },
   "face": {
    "gr": 0.45,
    "br": 0.3,
    "g": 0.25
   },
   "throat": {
    "gr": 0.45,
    "br": 0.35,
    "g": 0.2
   },
   "breast": {
    "g": 0.4,
    "br": 0.35,
    "gr": 0.25
   }
  }
 },
 "pyrrhura-subandina": {
  "*": {
   "crown": {
    "br": 0.7,
    "k": 0.3
   },
   "breast": {
    "br": 0.5,
    "w": 0.35,
    "g": 0.15
   },
   "throat": {
    "br": 0.5,
    "w": 0.5
   }
  }
 },
 "redtailblack": {
  "암컷": {
   "forehead": {
    "k": 0.65,
    "y": 0.35
   },
   "belly": {
    "k": 0.6,
    "y": 0.4
   },
   "back": {
    "k": 0.7,
    "y": 0.3
   },
   "wing": {
    "k": 0.75,
    "y": 0.25
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
 "tanygnathus-gramineus": {
  "*": {
   "crown": {
    "gr": 0.85,
    "g": 0.15
   },
   "forehead": {
    "gr": 1
   },
   "face": {
    "gr": 0.8,
    "g": 0.2
   },
   "tail": {
    "y": 0.6,
    "g": 0.4
   }
  }
 },
 "tanygnathus-lucionensis": {
  "*": {
   "crown": {
    "g": 1
   },
   "beak": {
    "r": 0.6,
    "o": 0.4
   }
  }
 },
 "touit-batavicus": {
  "*": {
   "breast": {
    "w": 0.8,
    "gr": 0.2
   },
   "wing": {
    "k": 0.55,
    "y": 0.45
   }
  }
 },
 "touit-costaricensis": {
  "*": {
   "crown": {
    "g": 0.8,
    "br": 0.2
   },
   "face": {
    "gr": 0.6,
    "b": 0.4
   }
  }
 },
 "touit-dilectissimus": {
  "*": {
   "forehead": {
    "gr": 0.5,
    "g": 0.3,
    "br": 0.2
   },
   "face": {
    "r": 0.6,
    "gr": 0.4
   },
   "throat": {
    "y": 0.6,
    "g": 0.4
   },
   "beak": {
    "o": 0.6,
    "p": 0.4
   }
  }
 },
 "touit-huetii": {
  "*": {
   "beak": {
    "w": 0.8,
    "p": 0.2
   }
  }
 },
 "touit-melanonotus": {
  "*": {
   "back": {
    "k": 0.75,
    "br": 0.25
   },
   "face": {
    "g": 0.65,
    "k": 0.35
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
 "trichoglossus-borneus": {
  "*": {
   "tail": {
    "k": 0.5,
    "b": 0.5
   }
  }
 },
 "trichoglossus-capistratus": {
  "*": {
   "breast": {
    "y": 0.65,
    "o": 0.35
   }
  }
 },
 "trichoglossus-concinnus": {
  "*": {
   "face": {
    "g": 0.75,
    "r": 0.25
   },
   "breast": {
    "o": 0.5,
    "g": 0.3,
    "r": 0.2
   },
   "belly": {
    "g": 0.55,
    "o": 0.3,
    "r": 0.15
   }
  }
 },
 "trichoglossus-cyanogenius": {
  "*": {
   "wing": {
    "k": 0.65,
    "r": 0.35
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
 },
 "trichoglossus-flavoviridis": {
  "*": {
   "crown": {
    "y": 0.8,
    "g": 0.2
   },
   "forehead": {
    "o": 0.6,
    "r": 0.4
   }
  }
 },
 "trichoglossus-forsteni": {
  "*": {
   "crown": {
    "nv": 0.6,
    "k": 0.4
   },
   "forehead": {
    "nv": 0.6,
    "k": 0.4
   },
   "face": {
    "nv": 0.6,
    "k": 0.4
   },
   "throat": {
    "nv": 0.6,
    "k": 0.4
   },
   "breast": {
    "o": 0.5,
    "r": 0.5
   },
   "belly": {
    "lg": 0.45,
    "k": 0.35,
    "g": 0.2
   },
   "beak": {
    "o": 0.8,
    "r": 0.2
   }
  }
 },
 "trichoglossus-histrio": {
  "*": {
   "crown": {
    "nv": 0.6,
    "k": 0.4
   }
  }
 },
 "trichoglossus-rubiginosus": {
  "*": {
   "main": {
    "br": 0.6,
    "r": 0.4
   },
   "crown": {
    "br": 0.6,
    "r": 0.4
   },
   "forehead": {
    "br": 0.6,
    "r": 0.4
   },
   "face": {
    "br": 0.6,
    "r": 0.4
   },
   "throat": {
    "br": 0.6,
    "r": 0.4
   },
   "breast": {
    "br": 0.6,
    "r": 0.4
   },
   "belly": {
    "br": 0.6,
    "r": 0.4
   },
   "back": {
    "br": 0.6,
    "r": 0.4
   },
   "wing": {
    "br": 0.6,
    "y": 0.4
   },
   "tail": {
    "y": 0.6,
    "k": 0.4
   }
  }
 },
 "trichoglossus-rubritorquis": {
  "*": {
   "crown": {
    "b": 1
   },
   "forehead": {
    "b": 1
   },
   "face": {
    "b": 1
   },
   "throat": {
    "b": 1
   },
   "back": {
    "g": 1
   }
  }
 },
 "trichoglossus-weberi": {
  "*": {
   "breast": {
    "y": 0.7,
    "lg": 0.3
   }
  }
 },
 "vini-kuhlii": {
  "*": {
   "crown": {
    "g": 0.65,
    "v": 0.35
   },
   "wing": {
    "g": 0.7,
    "k": 0.3
   },
   "tail": {
    "r": 0.5,
    "k": 0.5
   }
  }
 },
 "vini-peruviana": {
  "*": {
   "main": {
    "nv": 0.75,
    "v": 0.25
   },
   "crown": {
    "nv": 1
   },
   "forehead": {
    "nv": 1
   },
   "belly": {
    "nv": 1
   },
   "back": {
    "nv": 1
   },
   "wing": {
    "nv": 1
   },
   "tail": {
    "nv": 1
   }
  }
 },
 "vini-solitaria": {
  "*": {
   "forehead": {
    "k": 0.85,
    "r": 0.15
   },
   "crown": {
    "k": 0.85,
    "g": 0.15
   },
   "belly": {
    "g": 0.55,
    "r": 0.45
   }
  }
 },
 "vini-ultramarina": {
  "*": {
   "belly": {
    "w": 0.7,
    "b": 0.3
   }
  }
 },
 "zanda-baudinii": {
  "*": {
   "main": {
    "k": 0.6,
    "br": 0.4
   },
   "crown": {
    "k": 0.5,
    "br": 0.5
   },
   "forehead": {
    "k": 0.5,
    "br": 0.5
   },
   "face": {
    "k": 0.5,
    "br": 0.5
   },
   "throat": {
    "k": 0.5,
    "br": 0.5
   },
   "breast": {
    "k": 0.5,
    "br": 0.5
   },
   "belly": {
    "k": 0.5,
    "br": 0.5
   },
   "back": {
    "k": 0.5,
    "br": 0.5
   },
   "wing": {
    "k": 0.4,
    "br": 0.6
   },
   "crestColor": {
    "k": 0.5,
    "br": 0.5
   }
  }
 },
 "zanda-funerea": {
  "암컷": {
   "crown": {
    "y": 0.55,
    "k": 0.45
   },
   "forehead": {
    "y": 0.55,
    "k": 0.45
   },
   "face": {
    "y": 0.5,
    "k": 0.4,
    "br": 0.1
   },
   "breast": {
    "k": 0.6,
    "y": 0.3,
    "br": 0.1
   },
   "belly": {
    "k": 0.6,
    "y": 0.3,
    "br": 0.1
   },
   "back": {
    "k": 0.6,
    "y": 0.3,
    "br": 0.1
   },
   "wing": {
    "k": 0.65,
    "y": 0.25,
    "br": 0.1
   }
  }
 }
};
