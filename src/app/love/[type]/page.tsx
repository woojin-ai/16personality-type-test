import Link from 'next/link';
import { notFound } from 'next/navigation';

const loveStyles: Record<string, any> = {
  "ISTJ": {
    title: "현실주의자",
    emoji: "💼",
    mainStyle: "신뢰와 안정을 최우선으로 하는 연애",
    description: "ISTJ는 연애에서도 책임감 있고 성실한 모습을 보입니다. 화려한 로맨스보다는 실질적이고 안정적인 관계를 선호하며, 약속을 반드시 지키는 믿음직한 파트너입니다.",
    characteristics: [
      "말보다 행동으로 사랑을 표현",
      "계획적이고 체계적인 데이트 선호",
      "한번 마음을 열면 평생 헌신적",
      "감정 표현에 서툴 수 있음",
      "전통적인 가치관 중시"
    ],
    idealDate: ["조용한 레스토랑에서 식사", "박물관이나 전시회 관람", "집에서 영화 보기", "계획된 여행"],
    loveLanguage: "봉사와 행동",
    tips: [
      "감정을 말로 표현하는 연습 필요",
      "상대방의 변화나 새로운 시도 존중하기",
      "가끔은 즉흥적인 데이트도 시도해보기"
    ],
    compatibility: ["ESFP", "ESTP"]
  },
  "ISFJ": {
    title: "수호자",
    emoji: "🛡️",
    mainStyle: "헌신적이고 따뜻한 보살핌의 연애",
    description: "ISFJ는 상대방을 세심하게 챙기고 배려하는 것에서 행복을 느낍니다. 작은 것 하나하나 기억하며, 상대방이 편안함을 느낄 수 있도록 최선을 다합니다.",
    characteristics: [
      "상대방의 작은 필요까지 챙김",
      "안정적이고 오래가는 관계 선호",
      "감정적으로 매우 지지적",
      "자신의 필요는 뒤로 미루는 경향",
      "갈등을 피하려는 성향"
    ],
    idealDate: ["홈 쿠킹 데이트", "산책하며 대화", "조용한 카페", "상대방이 좋아하는 곳"],
    loveLanguage: "봉사와 배려",
    tips: [
      "자신의 필요와 감정도 표현하기",
      "완벽하게 하려는 부담 내려놓기",
      "때로는 자신을 우선시하기"
    ],
    compatibility: ["ESFP", "ESTP"]
  },
  "INFJ": {
    title: "옹호자",
    emoji: "🔮",
    mainStyle: "깊고 의미있는 영혼의 연결",
    description: "INFJ는 피상적인 관계를 싫어하고, 깊은 정서적 교감을 추구합니다. 이상적인 사랑을 꿈꾸며, 상대방을 완전히 이해하고자 노력합니다.",
    characteristics: [
      "깊은 대화와 정서적 유대감 중시",
      "상대방의 성장을 지원",
      "직관적으로 상대방의 감정 파악",
      "완벽한 관계를 추구하는 경향",
      "자신의 내면을 천천히 공개"
    ],
    idealDate: ["철학적 대화", "별 보며 산책", "작은 서점이나 갤러리", "의미있는 봉사활동"],
    loveLanguage: "깊은 대화와 이해",
    tips: [
      "완벽한 관계에 대한 기대 낮추기",
      "상대방에게 완벽을 강요하지 않기",
      "현실적인 면도 수용하기"
    ],
    compatibility: ["ENFP", "ENTP"]
  },
  "INTJ": {
    title: "전략가",
    emoji: "🎯",
    mainStyle: "지적 교감을 기반으로 한 깊은 연애",
    description: "INTJ는 연애에서도 논리적이고 전략적입니다. 지적으로 자극을 주는 파트너를 찾으며, 관계에도 명확한 목표와 비전을 가집니다.",
    characteristics: [
      "지적 대화를 즐김",
      "독립적이지만 깊게 헌신",
      "감정 표현보다 실질적 행동",
      "장기적 관계 계획 선호",
      "겉으로 드러내지 않지만 깊은 감정"
    ],
    idealDate: ["지적 토론", "전략 게임", "다큐멘터리 관람", "새로운 것 배우기"],
    loveLanguage: "지적 교감과 신뢰",
    tips: [
      "감정을 더 자주 표현하기",
      "완벽주의 내려놓기",
      "상대방의 감정적 필요 인식하기"
    ],
    compatibility: ["ENFP", "ENTP"]
  },
  "ISTP": {
    title: "장인",
    emoji: "🔧",
    mainStyle: "자유롭고 여유로운 연애",
    description: "ISTP는 개인의 자유를 중시하며, 부담스럽지 않은 자연스러운 관계를 선호합니다. 말보다는 행동으로 배려를 표현합니다.",
    characteristics: [
      "독립적이고 자유로운 공간 필요",
      "실용적인 방식으로 도움 제공",
      "즉흥적이고 모험적인 데이트",
      "감정 표현에 서툴",
      "문제 해결 지향적"
    ],
    idealDate: ["야외 활동", "드라이브", "스포츠", "새로운 기술 배우기"],
    loveLanguage: "실질적 도움",
    tips: [
      "감정을 말로 표현하는 연습",
      "상대방의 감정적 필요 이해하기",
      "계획적인 데이트도 가끔 시도"
    ],
    compatibility: ["ESFJ", "ESTJ"]
  },
  "ISFP": {
    title: "모험가",
    emoji: "🎨",
    mainStyle: "감성적이고 로맨틱한 연애",
    description: "ISFP는 예술적 감각으로 사랑을 표현합니다. 순간의 감정을 소중히 여기며, 작은 것에서 아름다움을 찾아 상대방과 공유합니다.",
    characteristics: [
      "감성적이고 로맨틱한 표현",
      "현재 순간을 즐김",
      "창의적인 데이트 아이디어",
      "조용하지만 깊은 애정",
      "갈등을 피하는 경향"
    ],
    idealDate: ["미술관", "자연 속 피크닉", "공연 관람", "수공예 체험"],
    loveLanguage: "선물과 신체적 접촉",
    tips: [
      "자신의 의견을 더 명확히 전달하기",
      "갈등을 회피하지 않고 해결하기",
      "미래 계획도 함께 세우기"
    ],
    compatibility: ["ESFJ", "ESTJ"]
  },
  "INFP": {
    title: "중재자",
    emoji: "🌸",
    mainStyle: "이상적이고 진실된 사랑 추구",
    description: "INFP는 진정한 영혼의 동반자를 꿈꿉니다. 순수하고 진실한 사랑을 믿으며, 상대방을 있는 그대로 받아들이고자 합니다.",
    characteristics: [
      "깊고 진실한 감정 표현",
      "상대방의 꿈과 가치관 존중",
      "로맨틱하고 시적인 사랑",
      "이상과 현실의 괴리에 상처",
      "완전한 이해를 갈망"
    ],
    idealDate: ["시 낭독회", "조용한 카페에서 대화", "일출/일몰 보기", "의미있는 장소 방문"],
    loveLanguage: "진심어린 말과 이해",
    tips: [
      "이상적 기대를 현실화하기",
      "상대방의 불완전함 받아들이기",
      "감정 과잉 주의"
    ],
    compatibility: ["ENFJ", "ENTJ"]
  },
  "INTP": {
    title: "논리술사",
    emoji: "🧪",
    mainStyle: "지적 호기심으로 시작되는 연애",
    description: "INTP는 지적으로 흥미로운 사람에게 끌립니다. 논리적 대화를 즐기지만, 일단 사랑에 빠지면 의외로 로맨틱합니다.",
    characteristics: [
      "지적 자극을 주는 대화",
      "독립성을 존중",
      "분석적으로 관계 접근",
      "감정 표현이 서툴지만 진심",
      "창의적인 문제 해결"
    ],
    idealDate: ["과학관", "토론 카페", "퍼즐이나 방탈출", "새로운 이론 공부"],
    loveLanguage: "지적 대화",
    tips: [
      "감정을 더 표현하기",
      "실질적인 배려도 보이기",
      "상대방의 감정적 필요 인식"
    ],
    compatibility: ["ENFJ", "ENTJ"]
  },
  "ESTP": {
    title: "사업가",
    emoji: "⚡",
    mainStyle: "열정적이고 즉흥적인 연애",
    description: "ESTP는 에너지 넘치고 재미있는 연애를 합니다. 현재를 즐기며, 활동적이고 모험적인 데이트를 선호합니다.",
    characteristics: [
      "즉흥적이고 스릴있는 데이트",
      "활발하고 사교적",
      "실용적인 문제 해결",
      "장기 계획은 부담스러워함",
      "순간을 즐기는 자세"
    ],
    idealDate: ["익스트림 스포츠", "파티나 클럽", "여행", "새로운 레스토랑 도전"],
    loveLanguage: "함께하는 시간과 모험",
    tips: [
      "감정적 깊이 키우기",
      "장기적 관계 고민하기",
      "상대방의 안정감 필요 이해"
    ],
    compatibility: ["ISFJ", "ISTJ"]
  },
  "ESFP": {
    title: "연예인",
    emoji: "🎭",
    mainStyle: "즐겁고 활기찬 연애",
    description: "ESFP는 연애를 즐거운 모험으로 만듭니다. 긍정적이고 낙천적이며, 상대방을 웃게 만드는 것을 좋아합니다.",
    characteristics: [
      "재미있고 활기찬 분위기",
      "즉흥적이고 자유로운",
      "애정 표현이 풍부",
      "사교적이고 외향적",
      "현재를 즐김"
    ],
    idealDate: ["테마파크", "콘서트", "파티", "맛집 탐방"],
    loveLanguage: "신체적 접촉과 즐거운 시간",
    tips: [
      "깊은 대화도 나누기",
      "미래 계획 세우기",
      "감정의 기복 조절"
    ],
    compatibility: ["ISFJ", "ISTJ"]
  },
  "ENFP": {
    title: "활동가",
    emoji: "🎉",
    mainStyle: "열정적이고 낭만적인 연애",
    description: "ENFP는 사랑에 빠지면 온 세상이 아름답게 보입니다. 열정적으로 사랑하며, 상대방에게 무한한 애정을 쏟아붓습니다.",
    characteristics: [
      "열정적이고 낭만적",
      "창의적인 깜짝 이벤트",
      "깊은 정서적 연결 추구",
      "새로운 경험 함께 하기",
      "때때로 이상적 기대"
    ],
    idealDate: ["즉흥 여행", "새로운 활동 시도", "페스티벌", "의미있는 대화"],
    loveLanguage: "진심어린 말과 함께하는 시간",
    tips: [
      "현실적 기대 갖기",
      "한 관계에 집중하기",
      "일상적인 부분도 소중히"
    ],
    compatibility: ["INFJ", "INTJ"]
  },
  "ENTP": {
    title: "변론가",
    emoji: "💡",
    mainStyle: "지적 도전과 재미가 있는 연애",
    description: "ENTP는 지적으로 자극적이고 재미있는 연애를 추구합니다. 토론을 즐기며, 관계에서도 성장과 발전을 중시합니다.",
    characteristics: [
      "지적인 대화와 토론",
      "창의적이고 재치있음",
      "독립성 존중",
      "틀에 박힌 것 싫어함",
      "논쟁적일 수 있음"
    ],
    idealDate: ["토론 카페", "방탈출", "즉흥 여행", "새로운 아이디어 실험"],
    loveLanguage: "지적 교감과 자유",
    tips: [
      "논쟁보다는 공감하기",
      "감정적 배려 더하기",
      "안정감도 제공하기"
    ],
    compatibility: ["INFJ", "INTJ"]
  },
  "ESTJ": {
    title: "경영자",
    emoji: "📊",
    mainStyle: "책임감 있고 안정적인 연애",
    description: "ESTJ는 연애에서도 책임감 있고 신뢰할 수 있는 모습을 보입니다. 전통적인 가치관을 존중하며, 계획적으로 관계를 발전시킵니다.",
    characteristics: [
      "책임감 있고 믿음직함",
      "명확한 기대치 설정",
      "실용적이고 현실적",
      "전통적 관계 선호",
      "리더십 발휘"
    ],
    idealDate: ["계획된 데이트", "스포츠 관람", "고급 레스토랑", "실용적 쇼핑"],
    loveLanguage: "행동과 책임",
    tips: [
      "융통성 발휘하기",
      "감정적 측면 더 표현하기",
      "상대방의 의견 존중"
    ],
    compatibility: ["ISFP", "ISTP"]
  },
  "ESFJ": {
    title: "집정관",
    emoji: "🤝",
    mainStyle: "따뜻하고 사교적인 연애",
    description: "ESFJ는 상대방을 행복하게 만드는 것에서 기쁨을 느낍니다. 사교적이고 다정하며, 관계를 매우 중요하게 생각합니다.",
    characteristics: [
      "따뜻하고 배려심 많음",
      "사회적 활동 함께 즐김",
      "상대방의 필요 민감하게 파악",
      "전통적 가치관",
      "인정받고 싶어함"
    ],
    idealDate: ["친구들과 모임", "가족 행사", "자선 활동", "홈 파티"],
    loveLanguage: "봉사와 인정",
    tips: [
      "자신의 필요도 챙기기",
      "타인의 인정에 덜 의존하기",
      "갈등을 건강하게 해결하기"
    ],
    compatibility: ["ISFP", "ISTP"]
  },
  "ENFJ": {
    title: "선도자",
    emoji: "✨",
    mainStyle: "이타적이고 카리스마 있는 연애",
    description: "ENFJ는 상대방의 성장과 행복을 위해 헌신합니다. 카리스마 있고 열정적이며, 관계에 깊이 투자합니다.",
    characteristics: [
      "상대방의 성장 지원",
      "이타적이고 헌신적",
      "감정 표현이 풍부",
      "이상적 관계 추구",
      "때로 과도한 희생"
    ],
    idealDate: ["의미있는 대화", "봉사활동", "문화 행사", "성장 워크샵"],
    loveLanguage: "진심어린 말과 봉사",
    tips: [
      "자신을 희생하지 않기",
      "상대방에게 공간 주기",
      "완벽한 관계 기대 낮추기"
    ],
    compatibility: ["INFP", "INTP"]
  },
  "ENTJ": {
    title: "통솔자",
    emoji: "👑",
    mainStyle: "주도적이고 확신에 찬 연애",
    description: "ENTJ는 연애에서도 리더십을 발휘합니다. 명확한 목표를 가지고 관계를 이끌어가며, 파트너와 함께 성장하기를 원합니다.",
    characteristics: [
      "주도적이고 결단력 있음",
      "장기적 비전 공유",
      "효율적이고 실용적",
      "높은 기준 설정",
      "감정보다 논리 우선"
    ],
    idealDate: ["목표 달성 축하", "고급 레스토랑", "비즈니스 토론", "성장 세미나"],
    loveLanguage: "존중과 성취",
    tips: [
      "감정적 측면 더 고려하기",
      "완벽주의 내려놓기",
      "상대방의 의견 존중하기"
    ],
    compatibility: ["INFP", "INTP"]
  }
};

export default function LoveDetailPage({ params }: { params: { type: string } }) {
  const type = params.type.toUpperCase();
  const loveData = loveStyles[type];

  if (!loveData) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6">
          <Link 
            href="/love"
            className="text-pink-600 hover:text-pink-700 font-semibold"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center border-2 border-pink-200">
          <div className="text-6xl mb-4">{loveData.emoji}</div>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            {type}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {loveData.title}의 연애 스타일
          </h1>
          <p className="text-xl text-pink-600 font-semibold mb-4">
            {loveData.mainStyle}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {loveData.description}
          </p>
        </div>

        {/* 연애 특징 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💕</span> 연애할 때 특징
          </h2>
          <ul className="space-y-2">
            {loveData.characteristics.map((char: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-pink-600 mt-1">❤️</span>
                <span className="text-gray-700">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 이상적인 데이트 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>🎯</span> 이상적인 데이트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {loveData.idealDate.map((date: string, index: number) => (
              <div key={index} className="bg-pink-50 px-4 py-3 rounded-lg text-gray-700">
                • {date}
              </div>
            ))}
          </div>
        </div>

        {/* 사랑의 언어 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💬</span> 사랑의 언어
          </h2>
          <p className="text-lg text-gray-700 bg-pink-50 px-6 py-4 rounded-lg">
            {loveData.loveLanguage}
          </p>
        </div>

        {/* 연애 팁 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💡</span> 더 나은 연애를 위한 팁
          </h2>
          <ul className="space-y-2">
            {loveData.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">⭐</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 궁합 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💝</span> 최고의 연애 궁합
          </h2>
          <div className="flex gap-4">
            {loveData.compatibility.map((compType: string, index: number) => (
              <Link
                key={index}
                href={`/love/${compType}`}
                className="bg-gradient-to-r from-pink-100 to-red-100 px-6 py-3 rounded-lg font-bold text-pink-700 hover:shadow-md transition-shadow"
              >
                {compType}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/test"
            className="inline-block bg-gradient-to-r from-pink-600 to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            내 성격 유형 검사하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
