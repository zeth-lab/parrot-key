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
  id:"budgerigar", ko:"사랑앵무", en:"Budgerigar", sci:"Melopsittacus undulatus",
  region:"오스트레일리아 내륙 건조지대", sizeCm:18,
  base:{ main:["lg"], crown:["y"], forehead:["y"], face:["y"], cheek:["b","v"], throat:["y"], collar:"none",
    breast:["lg"], belly:["lg"], back:["k","y"], wing:["k","y"], tail:["b","g"], beak:["gr","y"],
    eyeSkin:"none", crest:false, tailShape:"long", pattern:"barred" },
  looks:[
    { label:"야생형 (초록)" },
    { label:"블루", main:["sb"], crown:["w"], forehead:["w"], face:["w"], throat:["w"], breast:["sb"], belly:["sb"], back:["k","w"], wing:["k","w"], tail:["b"] },
    { label:"루티노 (노랑)", main:["y"], cheek:["w"], breast:["y"], belly:["y"], back:["y"], wing:["y"], tail:["y"], pattern:"plain" }
  ]
},
{
  id:"cockatiel", ko:"왕관앵무", en:"Cockatiel", sci:"Nymphicus hollandicus",
  region:"오스트레일리아 내륙", sizeCm:32,
  base:{ main:["gr"], crown:["y"], forehead:["y"], face:["y"], cheek:["o"], throat:["y"], collar:"none",
    breast:["gr"], belly:["gr"], back:["gr"], wing:["gr","w"], tail:["gr"], beak:["gr"],
    eyeSkin:"none", crest:true, crestColor:["y","gr"], tailShape:"long", pattern:"plain" },
  looks:[
    { label:"노멀 수컷" },
    { label:"노멀 암컷", crown:["gr"], forehead:["gr","y"], face:["gr","y"], throat:["gr"], crestColor:["gr"], tail:["gr","y"] },
    { label:"루티노", main:["w","y"], breast:["w","y"], belly:["w","y"], back:["w","y"], wing:["w","y"], tail:["w","y"], beak:["w"], crestColor:["y"] }
  ]
},
{
  id:"rosyfaced", ko:"모란앵무", en:"Rosy-faced Lovebird", sci:"Agapornis roseicollis",
  region:"아프리카 남서부 건조지대", sizeCm:17,
  base:{ main:["g"], crown:["g"], forehead:["r"], face:["p"], cheek:"none", throat:["p"], collar:"none",
    breast:["lg"], belly:["lg"], back:["g"], wing:["g"], tail:["b","g"], beak:["w"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"plain" },
  looks:[
    { label:"노멀" },
    { label:"루티노", main:["y"], crown:["y"], breast:["y"], belly:["y"], back:["y"], wing:["y"], tail:["y","w"] }
  ]
},
{
  id:"fischers", ko:"피셔모란앵무", en:"Fischer's Lovebird", sci:"Agapornis fischeri",
  region:"탄자니아 북부 사바나", sizeCm:15,
  base:{ main:["g"], crown:["g","o"], forehead:["r","o"], face:["o"], cheek:"none", throat:["o","y"], collar:"none",
    breast:["lg"], belly:["lg"], back:["g"], wing:["g"], tail:["b","g"], beak:["r"],
    eyeSkin:"ring", crest:false, tailShape:"short", pattern:"plain" },
  looks:[ { label:"노멀" } ]
},
{
  id:"blueyellowmacaw", ko:"청금강앵무", en:"Blue-and-yellow Macaw", sci:"Ara ararauna",
  region:"남아메리카 열대 우림·습지", sizeCm:86,
  base:{ main:["b","y"], crown:["g","b"], forehead:["g"], face:["w"], cheek:"none", throat:["k"], collar:"none",
    breast:["y","o"], belly:["y","o"], back:["b"], wing:["b"], tail:["b"], beak:["k"],
    eyeSkin:"face", crest:false, tailShape:"long", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"scarletmacaw", ko:"홍금강앵무", en:"Scarlet Macaw", sci:"Ara macao",
  region:"중앙·남아메리카 열대 우림", sizeCm:84,
  base:{ main:["r"], crown:["r"], forehead:["r"], face:["w"], cheek:"none", throat:["r"], collar:"none",
    breast:["r"], belly:["r"], back:["r"], wing:["y","b","r"], tail:["r","b"], beak:["w","k"],
    eyeSkin:"face", crest:false, tailShape:"long", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"greenwingmacaw", ko:"그린윙마코", en:"Red-and-green Macaw", sci:"Ara chloropterus",
  region:"남아메리카 북·중부 열대 우림", sizeCm:90,
  base:{ main:["r"], crown:["r"], forehead:["r"], face:["w","r"], cheek:"none", throat:["r"], collar:"none",
    breast:["r"], belly:["r"], back:["r","g"], wing:["g","b"], tail:["r","b"], beak:["w","k"],
    eyeSkin:"face", crest:false, tailShape:"long", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"hyacinth", ko:"히아신스마코", en:"Hyacinth Macaw", sci:"Anodorhynchus hyacinthinus",
  region:"브라질 판타나우·세하두", sizeCm:100,
  base:{ main:["b"], crown:["b"], forehead:["b"], face:["b"], cheek:"none", throat:["b"], collar:"none",
    breast:["b"], belly:["b"], back:["b"], wing:["b"], tail:["b"], beak:["k"],
    eyeSkin:"ring", eyeSkinColor:"y", crest:false, tailShape:"long", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"africangrey", ko:"회색앵무", en:"Grey Parrot", sci:"Psittacus erithacus",
  region:"아프리카 중서부 열대 우림", sizeCm:33,
  base:{ main:["gr"], crown:["gr"], forehead:["gr"], face:["w","gr"], cheek:"none", throat:["gr"], collar:"none",
    breast:["gr"], belly:["gr"], back:["gr"], wing:["gr"], tail:["r"], beak:["k"],
    eyeSkin:"face", crest:false, tailShape:"short", pattern:"scaled" },
  looks:[ { label:"성조" } ]
},
{
  id:"sunconure", ko:"썬코뉴어", en:"Sun Parakeet", sci:"Aratinga solstitialis",
  region:"남아메리카 북동부 사바나", sizeCm:30,
  base:{ main:["y","o"], crown:["y"], forehead:["o"], face:["o"], cheek:"none", throat:["y","o"], collar:"none",
    breast:["o","y"], belly:["o"], back:["y"], wing:["y","g","b"], tail:["g","b"], beak:["k"],
    eyeSkin:"ring", crest:false, tailShape:"long", pattern:"plain" },
  looks:[
    { label:"성조" },
    { label:"어린 새", main:["g","y"], crown:["y","g"], back:["g"], breast:["y","g"], belly:["y","o"], wing:["g","b"] }
  ]
},
{
  id:"greencheek", ko:"그린칙코뉴어", en:"Green-cheeked Parakeet", sci:"Pyrrhura molinae",
  region:"볼리비아·브라질·아르헨티나 숲", sizeCm:26,
  base:{ main:["g"], crown:["br","gr"], forehead:["br"], face:["g"], cheek:"none", throat:["gr"], collar:"none",
    breast:["gr","g"], belly:["r","g"], back:["g"], wing:["g","b"], tail:["r","br"], beak:["k","gr"],
    eyeSkin:"ring", crest:false, tailShape:"long", pattern:"scaled" },
  looks:[
    { label:"노멀" },
    { label:"파인애플", main:["y","g"], breast:["y","o"], belly:["r","y"], back:["g","y"], wing:["g","y"], crown:["br","y"] }
  ]
},
{
  id:"monk", ko:"퀘이커앵무", en:"Monk Parakeet", sci:"Myiopsitta monachus",
  region:"남아메리카 남부 (도시에 귀화)", sizeCm:29,
  base:{ main:["g"], crown:["g"], forehead:["gr"], face:["gr"], cheek:"none", throat:["gr"], collar:"none",
    breast:["gr"], belly:["lg","y"], back:["g"], wing:["g","b"], tail:["g"], beak:["w","o"],
    eyeSkin:"none", crest:false, tailShape:"long", pattern:"scaled" },
  looks:[
    { label:"노멀" },
    { label:"블루", main:["sb"], crown:["sb"], belly:["sb"], back:["sb","b"], wing:["b","sb"], tail:["sb"] }
  ]
},
{
  id:"sulphurcrested", ko:"큰유황앵무", en:"Sulphur-crested Cockatoo", sci:"Cacatua galerita",
  region:"오스트레일리아 동·북부, 뉴기니", sizeCm:48,
  base:{ main:["w"], crown:["w"], forehead:["w"], face:["w"], cheek:"none", throat:["w"], collar:"none",
    breast:["w"], belly:["w"], back:["w"], wing:["w"], tail:["w"], beak:["k"],
    eyeSkin:"ring", eyeSkinColor:"sb", crest:true, crestColor:["y"], tailShape:"short", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"umbrella", ko:"흰유황앵무", en:"White Cockatoo", sci:"Cacatua alba",
  region:"인도네시아 북말루쿠 제도", sizeCm:46,
  base:{ main:["w"], crown:["w"], forehead:["w"], face:["w"], cheek:"none", throat:["w"], collar:"none",
    breast:["w"], belly:["w"], back:["w"], wing:["w"], tail:["w"], beak:["k"],
    eyeSkin:"ring", eyeSkinColor:"sb", crest:true, crestColor:["w"], tailShape:"short", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"galah", ko:"갈라", en:"Galah", sci:"Eolophus roseicapilla",
  region:"오스트레일리아 전역", sizeCm:35,
  base:{ main:["p","gr"], crown:["p","w"], forehead:["w","p"], face:["p"], cheek:"none", throat:["p"], collar:"none",
    breast:["p"], belly:["p"], back:["gr"], wing:["gr"], tail:["gr"], beak:["w"],
    eyeSkin:"ring", eyeSkinColor:"p", crest:true, crestColor:["w","p"], tailShape:"short", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"redtailblack", ko:"붉은꼬리검은유황앵무", en:"Red-tailed Black Cockatoo", sci:"Calyptorhynchus banksii",
  region:"오스트레일리아 북부·서부", sizeCm:60,
  base:{ main:["k"], crown:["k"], forehead:["k"], face:["k"], cheek:"none", throat:["k"], collar:"none",
    breast:["k"], belly:["k"], back:["k"], wing:["k"], tail:["k","r"], beak:["gr"],
    eyeSkin:"none", crest:true, crestColor:["k"], tailShape:"mid", pattern:"plain" },
  looks:[
    { label:"수컷" },
    { label:"암컷", face:["k","y"], crown:["k","y"], breast:["k","y"], tail:["k","o"], beak:["w"], pattern:"barred" }
  ]
},
{
  id:"eclectus", ko:"뉴기니아앵무", en:"Eclectus Parrot", sci:"Eclectus roratus",
  region:"뉴기니, 솔로몬 제도, 오스트레일리아 북단", sizeCm:42,
  base:{ main:["g"], crown:["g"], forehead:["g"], face:["g"], cheek:"none", throat:["g"], collar:"none",
    breast:["g"], belly:["g"], back:["g"], wing:["g","b"], tail:["g","y"], beak:["o","y"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"plain" },
  looks:[
    { label:"수컷 (초록)" },
    { label:"암컷 (빨강·파랑)", main:["r","b"], crown:["r"], forehead:["r"], face:["r"], throat:["r"], breast:["b","v"], belly:["b","v"],
      back:["r","br"], wing:["r","v"], tail:["r","o"], beak:["k"], eyeSkin:"ring", eyeSkinColor:"b" }
  ]
},
{
  id:"ringneck", ko:"목도리앵무", en:"Rose-ringed Parakeet", sci:"Psittacula krameri",
  region:"남아시아·아프리카 사헬 (세계 도시에 귀화)", sizeCm:40,
  base:{ main:["lg"], crown:["g"], forehead:["g"], face:["lg"], cheek:"none", throat:["k"], collar:["k","p"],
    breast:["lg"], belly:["lg"], back:["g"], wing:["g"], tail:["g","b"], beak:["r","k"],
    eyeSkin:"none", crest:false, tailShape:"long", pattern:"plain" },
  looks:[
    { label:"수컷" },
    { label:"암컷", throat:["lg"], collar:"none" },
    { label:"블루 수컷", main:["sb"], crown:["sb"], forehead:["sb"], face:["sb"], breast:["sb"], belly:["sb"], back:["sb","b"], wing:["sb","b"], tail:["sb","b"], collar:["k","w"] }
  ]
},
{
  id:"rainbowlorikeet", ko:"무지개로리킷", en:"Rainbow Lorikeet", sci:"Trichoglossus moluccanus",
  region:"오스트레일리아 동부 해안", sizeCm:30,
  base:{ main:["g"], crown:["b","v"], forehead:["b","v"], face:["b","v"], cheek:"none", throat:["b"], collar:["lg","y"],
    breast:["r","y"], belly:["b"], back:["g"], wing:["g"], tail:["g"], beak:["r"],
    eyeSkin:"none", crest:false, tailShape:"long", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"crimsonrosella", ko:"진홍로젤라", en:"Crimson Rosella", sci:"Platycercus elegans",
  region:"오스트레일리아 동·남동부 숲", sizeCm:35,
  base:{ main:["r"], crown:["r"], forehead:["r"], face:["r"], cheek:["b"], throat:["b","r"], collar:"none",
    breast:["r"], belly:["r"], back:["k","r"], wing:["b","k"], tail:["b"], beak:["w","gr"],
    eyeSkin:"none", crest:false, tailShape:"long", pattern:"scaled" },
  looks:[
    { label:"성조" },
    { label:"어린 새", main:["g","r"], crown:["r"], back:["g"], wing:["g","b"], breast:["g","r"], belly:["g"], pattern:"plain" }
  ]
},
{
  id:"bluefrontedamazon", ko:"청모자아마존", en:"Turquoise-fronted Amazon", sci:"Amazona aestiva",
  region:"브라질 동부·볼리비아·파라과이·아르헨티나 북부", sizeCm:37,
  base:{ main:["g"], crown:["y"], forehead:["sb","b"], face:["y"], cheek:"none", throat:["y","g"], collar:"none",
    breast:["g"], belly:["lg","g"], back:["g"], wing:["g","r"], tail:["g","y"], beak:["k"],
    eyeSkin:"ring", crest:false, tailShape:"short", pattern:"scaled" },
  looks:[ { label:"성조" } ]
},
{
  id:"senegal", ko:"세네갈앵무", en:"Senegal Parrot", sci:"Poicephalus senegalus",
  region:"서아프리카 사바나", sizeCm:23,
  base:{ main:["g","gr"], crown:["gr"], forehead:["gr"], face:["gr"], cheek:"none", throat:["g"], collar:"none",
    breast:["g"], belly:["o","y"], back:["g"], wing:["g"], tail:["g"], beak:["k","gr"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"caique", ko:"검은머리카이큐", en:"Black-headed Parrot", sci:"Pionites melanocephalus",
  region:"아마존 북부 열대 우림", sizeCm:23,
  base:{ main:["g","w"], crown:["k"], forehead:["k"], face:["o"], cheek:"none", throat:["o","y"], collar:"none",
    breast:["w"], belly:["w"], back:["g"], wing:["g","b"], tail:["g"], beak:["k"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"plain" },
  looks:[ { label:"성조" } ]
},
{
  id:"lineolated", ko:"사자나미앵무", en:"Barred Parakeet", sci:"Bolborhynchus lineola",
  region:"멕시코 남부~페루 산지 숲", sizeCm:16,
  base:{ main:["g"], crown:["g"], forehead:["g"], face:["g"], cheek:"none", throat:["g"], collar:"none",
    breast:["g"], belly:["g","lg"], back:["g","k"], wing:["g","k"], tail:["g"], beak:["w"],
    eyeSkin:"none", crest:false, tailShape:"mid", pattern:"barred" },
  looks:[
    { label:"노멀" },
    { label:"블루", main:["sb"], crown:["sb"], forehead:["sb"], face:["sb"], throat:["sb"], breast:["sb"], belly:["sb"], back:["sb","k"], wing:["sb","k"], tail:["sb"] }
  ]
},
{
  id:"kakapo", ko:"카카포", en:"Kakapo", sci:"Strigops habroptilus",
  region:"뉴질랜드 (포식자 없는 섬에서 보호 중)", sizeCm:60,
  base:{ main:["lg","y"], crown:["lg","k"], forehead:["y"], face:["y","lg"], cheek:"none", throat:["y"], collar:"none",
    breast:["lg","y"], belly:["y"], back:["g","k"], wing:["g","k"], tail:["g","br"], beak:["gr","w"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"barred" },
  looks:[ { label:"성조" } ]
},
{
  id:"kea", ko:"케아", en:"Kea", sci:"Nestor notabilis",
  region:"뉴질랜드 남섬 고산지대", sizeCm:48,
  base:{ main:["g","br"], crown:["g","br"], forehead:["g"], face:["g","br"], cheek:"none", throat:["g"], collar:"none",
    breast:["g"], belly:["g"], back:["g","r"], wing:["g","b"], tail:["g","b"], beak:["gr"],
    eyeSkin:"none", crest:false, tailShape:"short", pattern:"scaled" },
  looks:[ { label:"성조" } ]
}
];
