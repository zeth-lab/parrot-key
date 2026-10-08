/*
  색 보정 데이터 (사진 재검증 결과)
  species.js의 범주 라벨보다 우선한다. 없는 항목은 species.js 값을 쓴다.
  형식: COLOR_FIX[종 id][모습 label 또는 "*"][부위] = { 기준색코드: 비율, ... }  (비율 합 = 1)
  기준색: w 흰 · gr 회색 · k 검정 · br 갈색 · ol 올리브 · y 노랑 · o 주황 · r 빨강 · p 분홍 · v 보라
          nv 남색 · b 파랑 · sb 하늘 · tl 청록 · g 초록 · lg 연두
  부위: main crown forehead face throat breast belly back wing tail beak crestColor
*/
window.COLOR_FIX = {};
