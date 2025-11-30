const fs = require('fs');
const path = require('path');

// 저장할 폴더 경로
const targetDir = path.join('src', 'content', 'spots');

// 폴더가 없으면 생성
if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

const spots = [
    {
        filename: "yeongoksa.md",
        content: `---
title: "연곡사"
category: "문화유산"
region: "구례"
distance: 18.5
time: "25분"
address: "전남 구례군 토지면 피아골로 774"
image: "https://images.unsplash.com/photo-1605628472266-005522668285?auto=format&fit=crop&w=800&q=80"
---
# 국보와 보물의 보고, 연곡사
피아골 입구에 위치한 연곡사는 통일신라시대에 창건된 사찰입니다.
동승탑, 북승탑 등 국보 2점과 보물 4점을 보유하고 있어 문화유산적 가치가 매우 높습니다.
가을철 단풍이 들면 사찰 주변이 붉게 물들어 장관을 이룹니다.`
    },
    {
        filename: "yeongiam.md",
        content: `---
title: "연기암"
category: "문화유산"
region: "구례"
distance: 2.5
time: "10분"
address: "전남 구례군 마산면 화엄사로 539"
image: "https://images.unsplash.com/photo-1564496282678-2124d22576a4?auto=format&fit=crop&w=800&q=80"
---
# 섬진강이 내려다보이는 암자, 연기암
화엄사에서 숲길을 따라 약 2km 정도 올라가면 만날 수 있는 암자입니다.
지리산 자락 높은 곳에 위치하여, 발아래로 구례읍과 섬진강 줄기가 시원하게 펼쳐지는 최고의 전망 명소입니다.
차량으로 이동 가능하지만 경사가 가파르니 주의가 필요합니다.`
    },
    {
        filename: "cheoneunsa.md",
        content: `---
title: "천은사"
category: "문화유산"
region: "구례"
distance: 6.5
time: "10분"
address: "전남 구례군 광의면 노고단로 209"
image: "https://images.unsplash.com/photo-1599575574859-ada530387b8b?auto=format&fit=crop&w=800&q=80"
---
# 미스터 션샤인 촬영지, 천은사
지리산 3대 사찰 중 하나로, 노고단으로 가는 길목에 위치해 있습니다.
드라마 '미스터 션샤인'의 촬영지로 유명해졌으며, 일주문 뒤로 이어지는 소나무 숲길과 수홍루(다리)가 포토존으로 인기입니다.
상생의 길이라는 산책로가 잘 조성되어 있어 걷기 좋습니다.`
    },
    {
        filename: "saseongam.md",
        content: `---
title: "사성암"
category: "문화유산"
region: "구례"
distance: 14.0
time: "20분"
address: "전남 구례군 문척면 사성암길 303"
image: "https://images.unsplash.com/photo-1627653134284-85b78a969198?auto=format&fit=crop&w=800&q=80"
---
# 깎아지른 절벽 위의 암자, 사성암
오산 정상 부근의 깎아지른 절벽에 지어진 신비로운 사찰입니다.
원효대사, 도선국사 등 4명의 고승이 수도했다고 하여 사성암이라 불립니다.
전망대에서 바라보는 구례 들판과 굽이치는 섬진강의 풍경은 구례 제1경으로 꼽힙니다.`
    },
    {
        filename: "unjoru.md",
        content: `---
title: "운조루"
category: "문화유산"
region: "구례"
distance: 9.0
time: "15분"
address: "전남 구례군 토지면 운조루길 59"
image: "https://images.unsplash.com/photo-1584527266915-69540c83c227?auto=format&fit=crop&w=800&q=80"
---
# 나눔과 상생의 정신, 운조루
조선 영조 때 지어진 양반가 저택으로, 호남 지방을 대표하는 전통 가옥입니다.
'타인능해(누구나 열 수 있다)'라는 뒤주를 두어 가난한 이웃에게 쌀을 나누었던 나눔의 정신이 깃든 곳입니다.
고즈넉한 한옥의 정취를 느낄 수 있습니다.`
    },
    {
        filename: "ssangsanjae.md",
        content: `---
title: "쌍산재"
category: "문화유산"
region: "구례"
distance: 9.5
time: "15분"
address: "전남 구례군 마산면 사도리 632"
image: "https://images.unsplash.com/photo-1592237968577-587389392830?auto=format&fit=crop&w=800&q=80"
---
# 비밀의 정원을 품은 고택, 쌍산재
오랜 역사를 지닌 고택이자 민간 정원입니다.
tvN 예능 '윤스테이'의 촬영지로 유명해졌습니다. 대나무 숲길을 지나면 나타나는 넓은 정원과 잔디밭이 마치 비밀의 화원 같습니다.
입장료를 내면 웰컴 티를 제공합니다.`
    },
    {
        filename: "bamboo_path.md",
        content: `---
title: "섬진강 대숲길"
category: "자연"
region: "구례"
distance: 11.0
time: "18분"
address: "전남 구례군 구례읍 원방리 1"
image: "https://images.unsplash.com/photo-1445296608115-37f3c932f657?auto=format&fit=crop&w=800&q=80"
---
# 바람이 머무는 곳, 섬진강 대숲길
섬진강변을 따라 길게 조성된 대나무 숲 산책로입니다.
평지라 걷기 편하며, 밤에는 조명이 켜져 낭만적인 야경을 즐길 수 있습니다.
'섬진강 벚꽃길'과도 가까워 봄철 드라이브 코스로도 제격입니다.`
    },
    {
        filename: "piagol.md",
        content: `---
title: "피아골"
category: "자연"
region: "구례"
distance: 22.0
time: "30분"
address: "전남 구례군 토지면 내동리"
image: "https://images.unsplash.com/photo-1507640014654-9a6031a0e623?auto=format&fit=crop&w=800&q=80"
---
# 붉게 타오르는 단풍의 명소, 피아골
지리산의 대표적인 계곡 중 하나로, 특히 가을 단풍이 아름답기로 유명합니다.
'삼홍소'라 불리는 곳은 산도 붉고, 물도 붉고, 사람의 얼굴도 붉게 물든다 하여 붙여진 이름입니다.
여름철에는 시원한 계곡 피서지로 인기가 많습니다.`
    },
    {
        filename: "fish_eco.md",
        content: `---
title: "섬진강어류생태관"
category: "기타"
region: "구례"
distance: 9.0
time: "12분"
address: "전남 구례군 간전면 간전중앙로 47"
image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
---
# 섬진강의 생태를 한눈에
섬진강에 서식하는 다양한 민물고기와 수달 등 생태 자원을 전시하는 곳입니다.
초대형 수조와 야외 공원이 있어 아이들과 함께 방문하기 좋습니다.
바로 앞 섬진강변 자전거길과 연계하여 둘러보기 좋습니다.`
    },
    {
        filename: "juniper_forest.md",
        content: `---
title: "천개의 향나무숲"
category: "정원"
region: "구례"
distance: 8.0
time: "12분"
address: "전남 구례군 광의면 천변길 12"
image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
---
# 향기로운 힐링 숲
부부가 오랜 시간 정성껏 가꿔온 민간 정원입니다.
이름처럼 수많은 향나무가 숲을 이루고 있으며, 숲길 사이사이 아기자기한 소품과 쉼터가 있어 사진 찍기 좋습니다.
조용히 산책하며 사색하기 좋은 힐링 명소입니다.`
    },
    {
        filename: "banyawon.md",
        content: `---
title: "반야원 플라타너스"
category: "정원"
region: "구례"
distance: 8.5
time: "13분"
address: "전남 구례군 광의면 한국통신로 152-25"
image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
---
# 이국적인 풍경의 수목원
오래된 플라타너스 나무들이 줄지어 서 있는 풍경이 이국적인 느낌을 주는 곳입니다.
원래 개인이 운영하던 조경수 농장이었으나, 아름다운 풍경이 입소문을 타면서 개방되었습니다.
가을철 낙엽이 질 때 특히 운치가 있습니다.`
    },
    {
        filename: "ssanggyesa.md",
        content: `---
title: "쌍계사"
category: "문화유산"
region: "하동"
distance: 38.0
time: "45분"
address: "경남 하동군 화개면 쌍계사길 59"
image: "https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?auto=format&fit=crop&w=800&q=80"
---
# 차 시배지와 십리벚꽃길, 쌍계사
지리산 남쪽 기슭에 위치한 고찰로, 한국 차(Tea)의 시배지(처음 심은 곳)가 있는 곳입니다.
절 입구까지 이어지는 '화개장터 십리벚꽃길'은 봄이면 전국에서 가장 아름다운 벚꽃 터널을 만듭니다.
국보인 진감선사탑비 등 많은 문화재가 있습니다.`
    },
    {
        filename: "gwanghanru.md",
        content: `---
title: "광한루"
category: "문화유산"
region: "남원"
distance: 28.0
time: "35분"
address: "전북 남원시 요천로 1447"
image: "https://images.unsplash.com/photo-1621910306569-6f513c293422?auto=format&fit=crop&w=800&q=80"
---
# 춘향전의 무대, 광한루원
우리나라 4대 누각 중 하나인 광한루를 중심으로 조성된 아름다운 정원입니다.
성춘향과 이몽룡의 사랑 이야기 배경이 된 곳입니다.
밤에는 화려한 야경 조명이 켜져 낮과는 또 다른 매력을 보여줍니다.`
    },
    {
        filename: "daewonsa.md",
        content: `---
title: "대원사"
category: "문화유산"
region: "산청"
distance: 85.0
time: "1시간 20분"
address: "경남 산청군 삼장면 대원사길 455"
image: "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?auto=format&fit=crop&w=800&q=80"
---
# 비구니 스님들의 수행 도량, 대원사
지리산 동쪽 깊은 골짜기에 위치한 사찰로, 비구니(여승) 스님들의 참선 도량으로 유명합니다.
절까지 들어가는 약 2km의 계곡길은 한국의 아름다운 길로 선정될 만큼 풍경이 빼어납니다.
고요하고 정갈한 산사의 분위기를 느낄 수 있습니다.`
    },
    {
        filename: "taeansa.md",
        content: `---
title: "태안사"
category: "문화유산"
region: "곡성"
distance: 28.0
time: "35분"
address: "전남 곡성군 죽곡면 태안로 622-215"
image: "https://images.unsplash.com/photo-1540644093797-6304dfe24e76?auto=format&fit=crop&w=800&q=80"
---
# 숲길이 아름다운 고찰, 태안사
신라 시대 창건된 천년 고찰입니다. 절 들어가는 진입로의 숲길과 계곡이 매우 아름답습니다.
가을 단풍 명소로 유명하며, 조용한 산사에서 휴식을 취하기 좋습니다.
인근에 조태일 시문학관이 있어 함께 둘러보기 좋습니다.`
    },
    {
        filename: "seonamsa.md",
        content: `---
title: "선암사"
category: "문화유산"
region: "순천"
distance: 45.0
time: "50분"
address: "전남 순천시 승주읍 선암사길 450"
image: "https://images.unsplash.com/photo-1580137197581-4407450c063a?auto=format&fit=crop&w=800&q=80"
---
# 유네스코 세계유산, 선암사
한국의 산지승원을 대표하는 사찰로 유네스코 세계유산에 등재되었습니다.
보물인 승선교(무지개다리)와 강선루가 어우러진 풍경은 한국 사찰의 백미로 꼽힙니다.
봄에는 수백 년 된 겹벚꽃과 매화가 피어 장관을 이룹니다.`
    }
];

// 파일 생성 실행
spots.forEach(spot => {
    const filePath = path.join(targetDir, spot.filename);
    fs.writeFileSync(filePath, spot.content);
    console.log(`✅ 생성 완료: ${spot.filename}`);
}); 