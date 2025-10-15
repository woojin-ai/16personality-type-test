import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const personalityTypes: Record<string, any> = {
  "ISTJ": {
    title: "현실주의자",
    description: "체계적이고 신뢰할 수 있는 성격으로, 책임감이 강하고 논리적입니다. 전통과 질서를 중시하며 실용적인 해결책을 찾습니다.",
    strengths: ["책임감이 강함", "조직적이고 체계적", "신뢰할 수 있음", "꼼꼼하고 정확함", "현실적인 판단력"],
    weaknesses: ["융통성 부족", "변화에 대한 저항", "감정 표현 서툴", "새로운 아이디어 수용 어려움"],
    jobs: ["회계사", "은행원", "공무원", "경찰관", "변호사", "의사", "군인", "건축가"],
    compatibility: ["ESFP", "ESTP"]
  },
  "ISFJ": {
    title: "수호자",
    description: "따뜻하고 성실한 성격으로, 다른 사람을 돕는 것을 좋아합니다. 실용적이면서도 배려심이 깊습니다.",
    strengths: ["헌신적이고 충실함", "책임감이 강함", "세심하고 배려심 많음", "인내심이 강함", "실용적"],
    weaknesses: ["자신의 필요 무시", "변화 적응 어려움", "과도한 헌신", "비판에 민감"],
    jobs: ["간호사", "교사", "사회복지사", "상담사", "영양사", "사서", "인사 담당자"],
    compatibility: ["ESFP", "ESTP"]
  },
  "INFJ": {
    title: "옹호자",
    description: "이상주의적이고 통찰력 있는 성격으로, 깊은 내면세계를 가지고 있습니다. 의미와 목적을 추구합니다.",
    strengths: ["통찰력이 뛰어남", "창의적이고 헌신적", "이상을 추구함", "공감 능력 뛰어남", "결단력 있음"],
    weaknesses: ["완벽주의", "비현실적일 수 있음", "타인에게 기대가 높음", "번아웃 쉬움"],
    jobs: ["상담사", "작가", "심리학자", "예술가", "교육자", "사회운동가", "종교인"],
    compatibility: ["ENFP", "ENTP"]
  },
  "INTJ": {
    title: "전략가",
    description: "독립적이고 분석적인 성격으로, 전략적 사고와 장기 계획에 능합니다. 지적 호기심이 강합니다.",
    strengths: ["전략적 사고", "독립적", "논리적 분석력", "목표 지향적", "자기주도적"],
    weaknesses: ["감정 표현 서툴", "고집이 셈", "비판적", "사회성 부족"],
    jobs: ["과학자", "엔지니어", "경영 컨설턴트", "프로그래머", "전략기획자", "교수", "변호사"],
    compatibility: ["ENFP", "ENTP"]
  },
  "ISTP": {
    title: "장인",
    description: "실용적이고 논리적인 성격으로, 문제 해결에 능하며 손재주가 있습니다. 독립적이고 적응력이 뛰어납니다.",
    strengths: ["논리적 문제 해결", "실용적", "적응력 뛰어남", "침착함", "기술적 능력"],
    weaknesses: ["감정 표현 어려움", "장기 계획 부족", "타인의 감정 이해 어려움", "충동적일 수 있음"],
    jobs: ["기술자", "엔지니어", "정비사", "운동선수", "파일럿", "경찰관", "소방관"],
    compatibility: ["ESFJ", "ESTJ"]
  },
  "ISFP": {
    title: "모험가",
    description: "온화하고 예술적인 성격으로, 현재를 즐기며 자유로움을 추구합니다. 심미적 감각이 뛰어납니다.",
    strengths: ["예술적 감각", "유연하고 개방적", "따뜻하고 친절함", "현재를 즐김", "관찰력 뛰어남"],
    weaknesses: ["계획성 부족", "비판에 민감", "갈등 회피", "자기 주장 약함"],
    jobs: ["디자이너", "예술가", "음악가", "사진작가", "요리사", "수의사", "물리치료사"],
    compatibility: ["ESFJ", "ESTJ"]
  },
  "INFP": {
    title: "중재자",
    description: "이상주의적이고 창의적인 성격으로, 가치와 의미를 중시합니다. 깊은 감수성을 가지고 있습니다.",
    strengths: ["공감 능력", "창의적", "개방적", "이상을 추구함", "진정성 있음"],
    weaknesses: ["현실성 부족", "과도하게 이상적", "비판에 민감", "우유부단함"],
    jobs: ["작가", "상담사", "예술가", "심리학자", "사회복지사", "번역가", "교육자"],
    compatibility: ["ENFJ", "ENTJ"]
  },
  "INTP": {
    title: "논리술사",
    description: "분석적이고 독창적인 성격으로, 이론과 추상적 개념을 탐구합니다. 지적 호기심이 매우 강합니다.",
    strengths: ["논리적 분석", "창의적 문제 해결", "객관적", "지적 호기심", "독립적"],
    weaknesses: ["감정 표현 서툴", "사교성 부족", "실천력 부족", "비판적"],
    jobs: ["과학자", "프로그래머", "수학자", "철학자", "연구원", "교수", "분석가"],
    compatibility: ["ENFJ", "ENTJ"]
  },
  "ESTP": {
    title: "사업가",
    description: "활동적이고 현실적인 성격으로, 즉각적인 결과를 추구합니다. 위기 상황에서 빠르게 대처합니다.",
    strengths: ["행동력", "현실적", "적응력", "사교적", "관찰력"],
    weaknesses: ["충동적", "장기 계획 부족", "규칙 무시 경향", "지루함 쉽게 느낌"],
    jobs: ["영업사원", "사업가", "운동선수", "마케터", "경찰관", "응급구조사", "기자"],
    compatibility: ["ISFJ", "ISTJ"]
  },
  "ESFP": {
    title: "연예인",
    description: "사교적이고 즐거움을 추구하는 성격으로, 주변 사람들에게 활력을 줍니다. 현재를 즐기며 삽니다.",
    strengths: ["사교적", "낙천적", "실용적", "유연함", "관찰력"],
    weaknesses: ["계획성 부족", "쉽게 산만해짐", "장기 목표 설정 어려움", "비판에 민감"],
    jobs: ["배우", "가수", "이벤트 플래너", "영업사원", "여행 가이드", "디자이너", "홍보 담당자"],
    compatibility: ["ISFJ", "ISTJ"]
  },
  "ENFP": {
    title: "활동가",
    description: "열정적이고 창의적인 성격으로, 새로운 가능성을 탐색합니다. 사람들과의 관계를 소중히 여깁니다.",
    strengths: ["열정적", "창의적", "공감 능력", "낙천적", "의사소통 능력"],
    weaknesses: ["산만함", "계획 실행 어려움", "스트레스 관리 부족", "지루함 쉽게 느낌"],
    jobs: ["저널리스트", "상담사", "교사", "마케터", "배우", "작가", "컨설턴트"],
    compatibility: ["INFJ", "INTJ"]
  },
  "ENTP": {
    title: "변론가",
    description: "독창적이고 논쟁을 즐기는 성격으로, 지적 도전을 추구합니다. 빠른 사고와 재치가 있습니다.",
    strengths: ["창의적 문제 해결", "논리적", "빠른 사고", "유연함", "도전적"],
    weaknesses: ["논쟁을 즐김", "일상 업무 싫어함", "무례할 수 있음", "계획 실행 어려움"],
    jobs: ["발명가", "기업가", "변호사", "마케터", "컨설턴트", "과학자", "프로그래머"],
    compatibility: ["INFJ", "INTJ"]
  },
  "ESTJ": {
    title: "경영자",
    description: "조직적이고 실용적인 성격으로, 질서와 구조를 중시합니다. 리더십이 강하고 책임감이 있습니다.",
    strengths: ["리더십", "조직 능력", "책임감", "현실적", "결단력"],
    weaknesses: ["융통성 부족", "감정 고려 부족", "고집이 셈", "비판적"],
    jobs: ["경영자", "관리자", "공무원", "판사", "군인", "은행원", "영업 관리자"],
    compatibility: ["ISFP", "ISTP"]
  },
  "ESFJ": {
    title: "집정관",
    description: "사교적이고 협조적인 성격으로, 조화로운 환경을 만듭니다. 타인을 돕는 것을 좋아합니다.",
    strengths: ["친절하고 따뜻함", "협조적", "책임감", "조직적", "실용적"],
    weaknesses: ["비판에 민감", "타인 의견에 영향 많이 받음", "변화 적응 어려움", "갈등 회피"],
    jobs: ["교사", "간호사", "사회복지사", "영업사원", "행정 관리자", "이벤트 플래너"],
    compatibility: ["ISFP", "ISTP"]
  },
  "ENFJ": {
    title: "선도자",
    description: "카리스마 있고 영감을 주는 성격으로, 타인의 성장을 돕습니다. 뛰어난 의사소통 능력을 가집니다.",
    strengths: ["리더십", "공감 능력", "의사소통 능력", "열정적", "이타적"],
    weaknesses: ["과도한 이상주의", "비판에 민감", "자신을 희생함", "결정 어려움"],
    jobs: ["교사", "상담사", "코치", "인사 담당자", "정치인", "사회운동가", "홍보 담당자"],
    compatibility: ["INFP", "INTP"]
  },
  "ENTJ": {
    title: "통솔자",
    description: "대담하고 결단력 있는 성격으로, 목표 달성을 위해 전략적으로 행동합니다. 강한 리더십을 가집니다.",
    strengths: ["리더십", "전략적 사고", "결단력", "효율적", "자신감"],
    weaknesses: ["무뚝뚝함", "감정 고려 부족", "지나치게 비판적", "참을성 부족"],
    jobs: ["CEO", "경영 컨설턴트", "변호사", "투자가", "사업가", "관리자", "정치인"],
    compatibility: ["INFP", "INTP"]
  }
};

export default function TypeDetailPage({ params }: { params: { type: string } }) {
  const type = params.type.toUpperCase();
  const typeData = personalityTypes[type];

  if (!typeData) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6">
          <Link 
            href="/types"
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center">
          {/* 이미지 */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src={`/images/types/${type}.png`}
                alt={`${type} - ${typeData.title}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {type}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {typeData.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {typeData.description}
          </p>
        </div>

        {/* 장점 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💪</span> 장점
          </h2>
          <ul className="space-y-2">
            {typeData.strengths.map((strength: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 약점 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>⚠️</span> 약점
          </h2>
          <ul className="space-y-2">
            {typeData.weaknesses.map((weakness: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 추천 직업 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💼</span> 추천 직업
          </h2>
          <p className="text-gray-700">
            {typeData.jobs.join(', ')}
          </p>
        </div>

        {/* 잘 맞는 유형 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💕</span> 잘 맞는 유형
          </h2>
          <div className="flex gap-4">
            {typeData.compatibility.map((compType: string, index: number) => (
              <Link
                key={index}
                href={`/types/${compType}`}
                className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-lg font-bold text-purple-700 hover:shadow-md transition-shadow"
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
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            내 성격 유형 검사하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
