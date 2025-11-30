import fs from 'fs';
import path from 'path';

const targetDir = path.join(process.cwd(), 'src', 'content', 'spots');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const spots = [
    // 기존 17개 + 신규 18개 (좌표 포함)
    { filename: "yeongoksa.md", content: `---
title: "연곡사"
category: "문화유산"
region: "구례"
distance: 18.5
time: "25분"
address: "전남 구례군 토지면 피아골로 774"
image: "https://images.unsplash.com/photo-1605628472266-005522668285?auto=format&fit=crop&w=800&q=80"
lat: 35.2342
lng: 127.5931
---
# 국보와 보물의 보고, 연곡사
피아골 입구에 위치한 연곡사는 통일신라시대에 창건된 사찰입니다. 동승탑, 북승탑 등 국보 2점과 보물 4점을 보유하고 있습니다.`},
    { filename: "yeongiam.md", content: `---
title: "연기암"
category: "문화유산"
region: "구례"
distance: 2.5
time: "10분"
address: "전남 구례군 마산면 화엄사로 539"
image: "https://images.unsplash.com/photo-1564496282678-2124d22576a4?auto=format&fit=crop&w=800&q=80"
lat: 35.2578
lng: 127.4972
---
# 섬진강이 내려다보이는 암자
화엄사에서 숲길을 따라 올라가면 만날 수 있는 암자입니다. 구례읍과 섬진강 줄기가 시원하게 펼쳐지는 전망 명소입니다.`},
    { filename: "cheoneunsa.md", content: `---
title: "천은사"
category: "문화유산"
region: "구례"
distance: 6.5
time: "10분"
address: "전남 구례군 광의면 노고단로 209"
image: "https://images.unsplash.com/photo-1599575574859-ada530387b8b?auto=format&fit=crop&w=800&q=80"
lat: 35.2936
lng: 127.4769
---
# 미스터 션샤인 촬영지
지리산 3대 사찰 중 하나입니다. 드라마 촬영지로 유명하며, 상생의 길 산책로가 아름답습니다.`},
    { filename: "saseongam.md", content: `---
title: "사성암"
category: "문화유산"
region: "구례"
distance: 14.0
time: "20분"
address: "전남 구례군 문척면 사성암길 303"
image: "https://images.unsplash.com/photo-1627653134284-85b78a969198?auto=format&fit=crop&w=800&q=80"
lat: 35.1856
lng: 127.4853
---
# 절벽 위의 암자
오산 정상 부근 절벽에 지어진 신비로운 사찰입니다. 섬진강 풍경이 한눈에 들어옵니다.`},
    { filename: "unjoru.md", content: `---
title: "운조루"
category: "문화유산"
region: "구례"
distance: 9.0
time: "15분"
address: "전남 구례군 토지면 운조루길 59"
image: "https://images.unsplash.com/photo-1584527266915-69540c83c227?auto=format&fit=crop&w=800&q=80"
lat: 35.2072
lng: 127.5231
---
# 나눔의 정신이 깃든 고택
조선 영조 때 지어진 양반가 저택으로, 타인능해 뒤주를 통해 나눔을 실천했던 곳입니다.`},
    { filename: "ssangsanjae.md", content: `---
title: "쌍산재"
category: "문화유산"
region: "구례"
distance: 9.5
time: "15분"
address: "전남 구례군 마산면 사도리 632"
image: "https://images.unsplash.com/photo-1592237968577-587389392830?auto=format&fit=crop&w=800&q=80"
lat: 35.2247
lng: 127.4967
---
# 비밀의 정원을 품은 고택
윤스테이 촬영지로 유명한 민간 정원입니다. 대나무 숲길을 지나면 아름다운 정원이 나옵니다.`},
    { filename: "bamboo_path.md", content: `---
title: "섬진강 대숲길"
category: "자연"
region: "구례"
distance: 11.0
time: "18분"
address: "전남 구례군 구례읍 원방리 1"
image: "https://images.unsplash.com/photo-1445296608115-37f3c932f657?auto=format&fit=crop&w=800&q=80"
lat: 35.2067
lng: 127.4878
---
# 바람이 머무는 대나무 숲
섬진강변을 따라 조성된 평지 산책로입니다. 밤에는 조명이 켜져 야경 명소로도 꼽힙니다.`},
    { filename: "piagol.md",
      content: `---
title: "피아골"
category: "자연"
region: "구례"
distance: 22.0
time: "30분"
address: "전남 구례군 토지면 내동리"
image: "https://images.unsplash.com/photo-1507640014654-9a6031a0e623?auto=format&fit=crop&w=800&q=80"
lat: 35.2658
lng: 127.5817
---
# 단풍의 명소
지리산의 대표적인 계곡으로 가을 단풍이 붉게 물드는 삼홍소로 유명합니다.`},
    { filename: "fish_eco.md",
      content: `---
title: "섬진강어류생태관"
category: "기타"
region: "구례"
distance: 9.0
time: "12분"
address: "전남 구례군 간전면 간전중앙로 47"
image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
lat: 35.1939
lng: 127.5136
---
# 섬진강 생태 체험
섬진강 민물고기와 수달 등 다양한 생태 자원을 전시하는 곳입니다.`},
    { filename: "juniper_forest.md",
      content: `---
title: "천개의 향나무숲"
category: "정원"
region: "구례"
distance: 8.0
time: "12분"
address: "전남 구례군 광의면 천변길 12"
image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
lat: 35.2647
lng: 127.4572
---
# 향기로운 힐링 숲
수많은 향나무가 숲을 이루는 민간 정원입니다. 숲길 산책과 사색을 즐기기 좋습니다.`},
    { filename: "banyawon.md",
      content: `---
title: "반야원 플라타너스"
category: "정원"
region: "구례"
distance: 8.5
time: "13분"
address: "전남 구례군 광의면 한국통신로 152-25"
image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
lat: 35.2689
lng: 127.4558
---
# 이국적인 플라타너스 숲
오래된 플라타너스 나무들이 줄지어 서 있는 풍경이 아름다운 곳입니다.`},
    { filename: "ssanggyesa.md",
      content: `---
title: "쌍계사"
category: "문화유산"
region: "하동"
distance: 38.0
time: "45분"
address: "경남 하동군 화개면 쌍계사길 59"
image: "https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?auto=format&fit=crop&w=800&q=80"
lat: 35.2324
lng: 127.6461
---
# 십리벚꽃길과 고찰
한국 차 시배지이자 벚꽃길로 유명한 사찰입니다. 국보 진감선사탑비가 있습니다.`},
    { filename: "gwanghanru.md",
      content: `---
title: "광한루"
category: "문화유산"
region: "남원"
distance: 28.0
time: "35분"
address: "전북 남원시 요천로 1447"
image: "https://images.unsplash.com/photo-1621910306569-6f513c293422?auto=format&fit=crop&w=800&q=80"
lat: 35.4036
lng: 127.3775
---
# 춘향전의 무대
우리나라 4대 누각 중 하나로, 아름다운 정원과 야경이 일품입니다.`},
    { filename: "daewonsa.md",
      content: `---
title: "대원사"
category: "문화유산"
region: "산청"
distance: 85.0
time: "1시간 20분"
address: "경남 산청군 삼장면 대원사길 455"
image: "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?auto=format&fit=crop&w=800&q=80"
lat: 35.3700
lng: 127.8158
---
# 비구니 수행 도량
깊은 계곡과 아름다운 숲길이 있는 사찰입니다. 고요한 산사의 분위기를 느낄 수 있습니다.`},
    { filename: "taeansa.md",
      content: `---
title: "태안사"
category: "문화유산"
region: "곡성"
distance: 28.0
time: "35분"
address: "전남 곡성군 죽곡면 태안로 622-215"
image: "https://images.unsplash.com/photo-1540644093797-6304dfe24e76?auto=format&fit=crop&w=800&q=80"
lat: 35.1383
lng: 127.3875
---
# 숲길이 아름다운 천년 고찰
절 들어가는 진입로의 숲길과 계곡이 매우 아름답습니다. 가을 단풍 명소입니다.`},
    { filename: "seonamsa.md",
      content: `---
title: "선암사"
category: "문화유산"
region: "순천"
distance: 45.0
time: "50분"
address: "전남 순천시 승주읍 선암사길 450"
image: "https://images.unsplash.com/photo-1580137197581-4407450c063a?auto=format&fit=crop&w=800&q=80"
lat: 34.9969
lng: 127.3264
---
# 유네스코 세계유산
한국의 산지승원을 대표하는 사찰입니다. 승선교와 강선루가 어우러진 풍경이 아름답습니다.`},
    { filename: "hwaeomsa.md", content: `---
title: "화엄사"
category: "문화유산"
region: "구례"
distance: 5.2
time: "10분"
address: "전남 구례군 마산면 화엄사로 539"
image: "https://images.unsplash.com/photo-1598596683529-3966e3576236?auto=format&fit=crop&w=800&q=80"
lat: 35.2570
lng: 127.4975
---
# 천년의 고찰, 구례 화엄사
지리산의 대표적인 사찰로 국보인 각황전이 있습니다.`},
    { filename: "nogodan.md", content: `---
title: "노고단"
category: "자연"
region: "구례"
distance: 15.5
time: "30분"
address: "전남 구례군 산동면 노고단로 1068"
image: "https://images.unsplash.com/photo-1616165261487-672536fa945e?auto=format&fit=crop&w=800&q=80"
lat: 35.2947
lng: 127.5272
---
# 지리산 3대 봉우리
성삼재 휴게소에서 쉽게 오를 수 있는 봉우리입니다. 운해가 아름답습니다.`},
    { filename: "sansuyu.md", content: `---
title: "산수유마을"
category: "자연"
region: "구례"
distance: 15.0
time: "20분"
address: "전남 구례군 산동면 위안리"
image: "https://images.unsplash.com/photo-1616397656979-0c2b43338496?auto=format&fit=crop&w=800&q=80"
lat: 35.3158
lng: 127.4733
---
# 노란 봄의 전령사
매년 3월이면 마을 전체가 노란 산수유 꽃으로 뒤덮입니다.`},
    { filename: "suncheonman_wetland.md", content: `---
title: "순천만습지"
category: "자연"
region: "순천"
distance: 65.0
time: "55분"
address: "전남 순천시 순천만길 513-25"
image: "https://images.unsplash.com/photo-1571732022876-a682d3b1024d?auto=format&fit=crop&w=800&q=80"
lat: 34.9151
lng: 127.5089
---
# 세계 5대 연안습지
광활한 갯벌과 갈대밭이 어우러진 대한민국 대표 생태 관광지입니다.`},
    { filename: "suncheon_garden.md", content: `---
title: "순천만국가정원"
category: "정원"
region: "순천"
distance: 60.0
time: "50분"
address: "전남 순천시 국가정원1호길 47"
image: "https://images.unsplash.com/photo-1596512036561-40f387df8a6e?auto=format&fit=crop&w=800&q=80"
lat: 34.9289
lng: 127.5108
---
# 대한민국 제1호 국가정원
세계 각국의 정원 양식을 한곳에서 볼 수 있는 거대한 정원입니다.`},
    { filename: "samseonggung.md", content: `---
title: "삼성궁"
category: "문화유산"
region: "하동"
distance: 45.0
time: "50분"
address: "경남 하동군 청암면 삼성궁길 86-15"
image: "https://images.unsplash.com/photo-1629617545260-956c935e463a?auto=format&fit=crop&w=800&q=80"
lat: 35.2817
lng: 127.7469
---
# 신비로운 돌탑의 향연
해발 850m 지리산 청학동에 위치한 수행 도량입니다. 이국적인 풍경이 압권입니다.`},
    { filename: "choichampan.md", content: `---
title: "최참판댁"
category: "문화유산"
region: "하동"
distance: 25.0
time: "30분"
address: "경남 하동군 악양면 평사리길 66-7"
image: "https://images.unsplash.com/photo-1617164697728-032544945814?auto=format&fit=crop&w=800&q=80"
lat: 35.1761
lng: 127.7164
---
# 소설 토지의 배경
박경리 작가의 소설 '토지'의 배경이 된 한옥 마을입니다.`},
    { filename: "hwagae_market.md", content: `---
title: "화개장터"
category: "기타"
region: "하동"
distance: 19.0
time: "25분"
address: "경남 하동군 화개면 쌍계로 15"
image: "https://images.unsplash.com/photo-1572687725681-543953556144?auto=format&fit=crop&w=800&q=80"
lat: 35.1886
lng: 127.6303
---
# 영호남 화합의 장
전라도와 경상도를 가로지르는 섬진강변의 전통 시장입니다.`},
    { filename: "hadong_pine.md", content: `---
title: "하동송림"
category: "자연"
region: "하동"
distance: 35.0
time: "40분"
address: "경남 하동군 하동읍 광평리 443-10"
image: "https://images.unsplash.com/photo-1500323718535-900e5f5d092e?auto=format&fit=crop&w=800&q=80"
lat: 35.0656
lng: 127.7539
---
# 섬진강변의 푸른 쉼터
천연기념물로 지정된 숲으로, 수령 270년이 넘는 노송이 울창합니다.`},
    { filename: "pyeongsari.md", content: `---
title: "평사리공원"
category: "자연"
region: "하동"
distance: 23.0
time: "28분"
address: "경남 하동군 악양면 평사리"
image: "https://images.unsplash.com/photo-1625888972026-3f195232745e?auto=format&fit=crop&w=800&q=80"
lat: 35.1672
lng: 127.7058
---
# 섬진강의 넉넉함을 품은 곳
섬진강변에 조성된 넓은 공원으로 캠핑장과 산책로가 있습니다.`},
    { filename: "chilseon.md", content: `---
title: "칠선계곡"
category: "자연"
region: "함양"
distance: 50.0
time: "55분"
address: "경남 함양군 마천면 추성리"
image: "https://images.unsplash.com/photo-1464244929837-92a7583080c2?auto=format&fit=crop&w=800&q=80"
lat: 35.3789
lng: 127.6328
---
# 지리산 최후의 원시림
우리나라 3대 계곡 중 하나로 원시림의 생태가 잘 보존되어 있습니다.`},
    { filename: "baekmudong.md", content: `---
title: "백무동계곡"
category: "자연"
region: "함양"
distance: 45.0
time: "50분"
address: "경남 함양군 마천면 강청리"
image: "https://images.unsplash.com/photo-1470753675953-3b383c527705?auto=format&fit=crop&w=800&q=80"
lat: 35.3653
lng: 127.6644
---
# 천왕봉으로 가는 주요 관문
천왕봉 등산 코스의 시작점으로 여름철 피서지로 인기입니다.`},
    { filename: "hansin.md", content: `---
title: "한신계곡"
category: "자연"
region: "함양"
distance: 45.0
time: "50분"
address: "경남 함양군 마천면 백무동로"
image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
lat: 35.3500
lng: 127.6600
---
# 폭포가 빚어낸 절경
지리산에서 폭포가 가장 많은 계곡입니다.`},
    { filename: "baemsagol.md", content: `---
title: "뱀사골"
category: "자연"
region: "남원"
distance: 24.0
time: "30분"
address: "전북 남원시 산내면 부운리"
image: "https://images.unsplash.com/photo-1544989164-c44a6cb36d52?auto=format&fit=crop&w=800&q=80"
lat: 35.3622
lng: 127.5694
---
# 지리산 북쪽의 웅장한 계곡
계곡을 따라 걷기 좋은 데크길이 잘 조성되어 있습니다.`},
    { filename: "silsangsa.md", content: `---
title: "실상사"
category: "문화유산"
region: "남원"
distance: 26.0
time: "35분"
address: "전북 남원시 산내면 입석길 94-129"
image: "https://images.unsplash.com/photo-1613962605908-67de6f20c8e5?auto=format&fit=crop&w=800&q=80"
lat: 35.3833
lng: 127.6222
---
# 들판 한가운데 자리한 평지 사찰
지리산 자락 평지에 위치한 유서 깊은 사찰입니다.`},
    { filename: "baemsagol_center.md", content: `---
title: "뱀사골탐방안내소"
category: "국립공원시설"
region: "남원"
distance: 24.0
time: "30분"
address: "전북 남원시 산내면 와운길 10"
image: "https://images.unsplash.com/photo-1534234828569-16d29c286444?auto=format&fit=crop&w=800&q=80"
lat: 35.3622
lng: 127.5694
---
# 뱀사골 탐방의 시작점
지리산 뱀사골 입구에 위치한 안내소입니다.`},
    { filename: "jeonnam_center.md", content: `---
title: "지리산전남탐방안내소"
category: "국립공원시설"
region: "구례"
distance: 0.2
time: "1분"
address: "전남 구례군 마산면 화엄사로 402-31"
image: "https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80"
lat: 35.2481
lng: 127.4933
---
# 화엄사 지구의 거점
지리산생태탐방원 바로 옆에 위치한 안내소입니다.`},
    { filename: "hwagae_center.md", content: `---
title: "화개탐방안내소"
category: "국립공원시설"
region: "하동"
distance: 19.0
time: "25분"
address: "경남 하동군 화개면 화개로 536"
image: "https://images.unsplash.com/photo-1580213790166-995c11e43d96?auto=format&fit=crop&w=800&q=80"
lat: 35.2258
lng: 127.6361
---
# 하동 지리산의 길잡이
화개장터에서 쌍계사로 가는 길목에 위치해 있습니다.`},
    { filename: "bear_center.md", content: `---
title: "반달가슴곰공존센터"
category: "국립공원시설"
region: "구례"
distance: 1.2
time: "3분"
address: "전남 구례군 마산면 화엄사로 402-31"
image: "https://images.unsplash.com/photo-1588167056840-137d6384108f?auto=format&fit=crop&w=800&q=80"
lat: 35.2481
lng: 127.4933
---
# 반달가슴곰 복원의 중심
멸종 위기 반달가슴곰을 복원하고 연구하는 곳입니다.`}
];

spots.forEach(spot => {
    const filePath = path.join(targetDir, spot.filename);
    fs.writeFileSync(filePath, spot.content);
    console.log(`✅ 생성 완료: ${spot.filename}`);
});