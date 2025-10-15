import Link from 'next/link';
import { notFound } from 'next/navigation';

const celebrities: Record<string, any> = {
  "ISTJ": {
    title: "현실주의자",
    description: "체계적이고 책임감 있는 ISTJ 유명인들",
    people: [
      { name: "워런 버핏", role: "투자가", reason: "장기적 투자 전략과 신중함" },
      { name: "앤절라 메르켈", role: "전 독일 총리", reason: "안정적이고 실용적인 리더십" },
      { name: "조지 워싱턴", role: "미국 초대 대통령", reason: "책임감과 원칙" },
      { name: "나탈리 포트만", role: "배우", reason: "완벽주의적 연기" },
      { name: "데니스 리치", role: "C언어 개발자", reason: "체계적인 프로그래밍" },
      { name: "마츠 미켈슨", role: "배우", reason: "철저한 역할 준비" },
      { name: "스팅", role: "뮤지션", reason: "일관된 음악 세계" },
      { name: "매트 데이먼", role: "배우", reason: "성실한 연기 태도" }
    ]
  },
  "ISFJ": {
    title: "수호자",
    description: "헌신적이고 따뜻한 ISFJ 유명인들",
    people: [
      { name: "마더 테레사", role: "수녀, 자선가", reason: "헌신적인 봉사" },
      { name: "비욘세", role: "가수", reason: "완벽한 무대와 가족 중시" },
      { name: "케이트 미들턴", role: "영국 왕세자비", reason: "전통과 배려" },
      { name: "에드 시런", role: "싱어송라이터", reason: "진실되고 따뜻한 음악" },
      { name: "앤 해서웨이", role: "배우", reason: "성실하고 배려심 많음" },
      { name: "김연아", role: "피겨스케이터", reason: "완벽주의와 책임감" },
      { name: "로사 팍스", role: "인권운동가", reason: "조용하지만 강한 헌신" },
      { name: "팀 던컨", role: "NBA 선수", reason: "묵묵한 헌신" }
    ]
  },
  "INFJ": {
    title: "옹호자",
    description: "통찰력 있고 이상주의적인 INFJ 유명인들",
    people: [
      { name: "넬슨 만델라", role: "인권운동가", reason: "평화와 정의 추구" },
      { name: "마틴 루터 킹", role: "인권운동가", reason: "이상과 비전" },
      { name: "니콜 키드먼", role: "배우", reason: "깊이있는 연기" },
      { name: "레이디 가가", role: "가수", reason: "예술적 비전과 메시지" },
      { name: "칼융", role: "심리학자", reason: "인간 내면 탐구" },
      { name: "J.K. 롤링", role: "작가", reason: "의미있는 스토리텔링" },
      { name: "모건 프리먼", role: "배우", reason: "지혜로운 존재감" },
      { name: "플라톤", role: "철학자", reason: "이상국가 추구" }
    ]
  },
  "INTJ": {
    title: "전략가",
    description: "전략적이고 독립적인 INTJ 유명인들",
    people: [
      { name: "일론 머스크", role: "기업가", reason: "혁신적 비전과 전략" },
      { name: "마크 저커버그", role: "페이스북 창업자", reason: "장기적 전략" },
      { name: "크리스토퍼 놀란", role: "영화감독", reason: "복잡한 서사 구조" },
      { name: "아이작 뉴턴", role: "물리학자", reason: "논리적 사고" },
      { name: "니체", role: "철학자", reason: "독창적 사상" },
      { name: "스티븐 호킹", role: "물리학자", reason: "우주에 대한 통찰" },
      { name: "미셸 오바마", role: "전 영부인", reason: "전략적 사회운동" },
      { name: "제이 지", role: "래퍼, 사업가", reason: "비즈니스 전략" }
    ]
  },
  "ISTP": {
    title: "장인",
    description: "실용적이고 논리적인 ISTP 유명인들",
    people: [
      { name: "클린트 이스트우드", role: "배우, 감독", reason: "과묵하고 실용적" },
      { name: "마이클 조던", role: "NBA 선수", reason: "뛰어난 운동 능력" },
      { name: "브루스 리", role: "무술가, 배우", reason: "실전적 무술 철학" },
      { name: "톰 크루즈", role: "배우", reason: "액션과 스턴트" },
      { name: "베어 그릴스", role: "모험가", reason: "서바이벌 전문가" },
      { name: "스티브 잡스", role: "애플 창업자", reason: "실용적 디자인" },
      { name: "키아누 리브스", role: "배우", reason: "과묵하고 액션 전문" },
      { name: "에미넴", role: "래퍼", reason: "냉철한 랩 스킬" }
    ]
  },
  "ISFP": {
    title: "모험가",
    description: "예술적이고 감성적인 ISFP 유명인들",
    people: [
      { name: "마이클 잭슨", role: "가수", reason: "독창적 음악과 퍼포먼스" },
      { name: "브리트니 스피어스", role: "가수", reason: "감성적 표현" },
      { name: "케빈 코스트너", role: "배우", reason: "자연스러운 연기" },
      { name: "프린스", role: "뮤지션", reason: "예술적 자유로움" },
      { name: "레니 크라비츠", role: "뮤지션", reason: "창의적 음악" },
      { name: "밥 딜런", role: "싱어송라이터", reason: "시적 가사" },
      { name: "오드리 헵번", role: "배우", reason: "우아한 매력" },
      { name: "존 트라볼타", role: "배우", reason: "자유로운 연기" }
    ]
  },
  "INFP": {
    title: "중재자",
    description: "이상주의적이고 창의적인 INFP 유명인들",
    people: [
      { name: "윌리엄 셰익스피어", role: "작가", reason: "깊은 인간 이해" },
      { name: "조니 뎁", role: "배우", reason: "독특한 캐릭터 연기" },
      { name: "오드리 헵번", role: "배우", reason: "순수하고 우아함" },
      { name: "톨킨", role: "작가", reason: "판타지 세계관 창조" },
      { name: "커트 코베인", role: "뮤지션", reason: "진정성 있는 음악" },
      { name: "빈센트 반 고흐", role: "화가", reason: "감성적 예술" },
      { name: "앨리슨 매켈", role: "가수", reason: "진실된 노래" },
      { name: "프레드 로저스", role: "교육자", reason: "이상적 교육" }
    ]
  },
  "INTP": {
    title: "논리술사",
    description: "분석적이고 독창적인 INTP 유명인들",
    people: [
      { name: "알버트 아인슈타인", role: "물리학자", reason: "혁신적 이론" },
      { name: "빌 게이츠", role: "마이크로소프트 창업자", reason: "논리적 사고" },
      { name: "찰스 다윈", role: "생물학자", reason: "진화론 정립" },
      { name: "래리 페이지", role: "구글 창업자", reason: "알고리즘적 사고" },
      { name: "제임스 매디슨", role: "미국 대통령", reason: "헌법 이론" },
      { name: "크리스틴 스튜어트", role: "배우", reason: "독특한 매력" },
      { name: "릭 앤 모티 작가", role: "작가", reason: "복잡한 SF 서사" },
      { name: "타이거 우즈", role: "골프선수", reason: "전략적 골프" }
    ]
  },
  "ESTP": {
    title: "사업가",
    description: "대담하고 활동적인 ESTP 유명인들",
    people: [
      { name: "도널드 트럼프", role: "사업가, 정치인", reason: "대담한 비즈니스" },
      { name: "어니스트 헤밍웨이", role: "작가", reason: "모험적 삶" },
      { name: "브루스 윌리스", role: "배우", reason: "액션 히어로" },
      { name: "마돈나", role: "가수", reason: "과감한 변신" },
      { name: "윈스턴 처칠", role: "영국 총리", reason: "위기의 리더십" },
      { name: "에디 머피", role: "배우, 코미디언", reason: "즉흥적 재치" },
      { name: "니키 미나즈", role: "래퍼", reason: "과감한 스타일" },
      { name: "잭 니콜슨", role: "배우", reason: "카리스마 연기" }
    ]
  },
  "ESFP": {
    title: "연예인",
    description: "즐겁고 활기찬 ESFP 유명인들",
    people: [
      { name: "엘튼 존", role: "가수", reason: "화려한 퍼포먼스" },
      { name: "마릴린 먼로", role: "배우", reason: "매력적 존재감" },
      { name: "저스틴 비버", role: "가수", reason: "에너지 넘치는 무대" },
      { name: "제이미 폭스", role: "배우, 가수", reason: "다재다능한 엔터테이너" },
      { name: "마일리 사이러스", role: "가수, 배우", reason: "자유분방함" },
      { name: "아담 레빈", role: "가수", reason: "에너지 넘치는 공연" },
      { name: "휴 헤프너", role: "플레이보이 창업자", reason: "라이프스타일" },
      { name: "매튜 페리", role: "배우", reason: "코믹한 매력" }
    ]
  },
  "ENFP": {
    title: "활동가",
    description: "열정적이고 창의적인 ENFP 유명인들",
    people: [
      { name: "로빈 윌리엄스", role: "배우, 코미디언", reason: "즉흥적 재능" },
      { name: "엘렌 드제너러스", role: "코미디언, 진행자", reason: "따뜻한 유머" },
      { name: "윌 스미스", role: "배우, 래퍼", reason: "긍정적 에너지" },
      { name: "메그 라이언", role: "배우", reason: "밝고 사랑스러움" },
      { name: "제니퍼 애니스톤", role: "배우", reason: "친근한 매력" },
      { name: "퀜틴 타란티노", role: "영화감독", reason: "열정적 영화 제작" },
      { name: "케리 피셔", role: "배우, 작가", reason: "솔직하고 창의적" },
      { name: "찰스 디킨스", role: "작가", reason: "인간미 있는 스토리" }
    ]
  },
  "ENTP": {
    title: "변론가",
    description: "논쟁적이고 혁신적인 ENTP 유명인들",
    people: [
      { name: "토마스 에디슨", role: "발명가", reason: "혁신적 발명" },
      { name: "소크라테스", role: "철학자", reason: "질문하는 철학" },
      { name: "벤저민 프랭클린", role: "정치가, 발명가", reason: "다재다능함" },
      { name: "톰 행크스", role: "배우", reason: "다양한 역할 소화" },
      { name: "사라 실버맨", role: "코미디언", reason: "도발적 유머" },
      { name: "세스 맥팔레인", role: "애니메이터", reason: "풍자적 창작" },
      { name: "존 스튜어트", role: "코미디언, 진행자", reason: "날카로운 풍자" },
      { name: "아담 새비지", role: "괴짜 실험가", reason: "창의적 실험" }
    ]
  },
  "ESTJ": {
    title: "경영자",
    description: "조직적이고 실용적인 ESTJ 유명인들",
    people: [
      { name: "헨리 포드", role: "기업가", reason: "효율적 생산 시스템" },
      { name: "보리스 존슨", role: "영국 총리", reason: "강력한 리더십" },
      { name: "존 D. 록펠러", role: "사업가", reason: "체계적 경영" },
      { name: "버락 오바마", role: "미국 대통령", reason: "조직적 리더십" },
      { name: "제시카 심슨", role: "가수, 사업가", reason: "비즈니스 수완" },
      { name: "프랭크 시나트라", role: "가수", reason: "전통과 품격" },
      { name: "우마 서먼", role: "배우", reason: "강인한 이미지" },
      { name: "존 록펠러", role: "기업가", reason: "효율적 경영" }
    ]
  },
  "ESFJ": {
    title: "집정관",
    description: "사교적이고 따뜻한 ESFJ 유명인들",
    people: [
      { name: "테일러 스위프트", role: "가수", reason: "팬과의 소통" },
      { name: "제니퍼 가너", role: "배우", reason: "따뜻한 이미지" },
      { name: "휘트니 휴스턴", role: "가수", reason: "감동적 목소리" },
      { name: "제시카 알바", role: "배우, 사업가", reason: "사회적 책임" },
      { name: "대니 글로버", role: "배우", reason: "인간미 있는 연기" },
      { name: "스티브 하비", role: "코미디언, 진행자", reason: "따뜻한 진행" },
      { name: "샐리 필드", role: "배우", reason: "공감 능력" },
      { name: "릴리아나 바스케스", role: "TV 진행자", reason: "친근함" }
    ]
  },
  "ENFJ": {
    title: "선도자",
    description: "카리스마 있고 이타적인 ENFJ 유명인들",
    people: [
      { name: "오프라 윈프리", role: "방송인", reason: "영감을 주는 리더십" },
      { name: "버락 오바마", role: "미국 대통령", reason: "카리스마 있는 연설" },
      { name: "말랄라 유사프자이", role: "인권운동가", reason: "교육 운동" },
      { name: "제니퍼 로렌스", role: "배우", reason: "솔직하고 매력적" },
      { name: "벤 애플렉", role: "배우, 감독", reason: "사회적 메시지" },
      { name: "보노", role: "U2 리드싱어", reason: "사회운동" },
      { name: "존 쿠삭", role: "배우", reason: "사회 의식" },
      { name: "레오나르도 디카프리오", role: "배우", reason: "환경 운동" }
    ]
  },
  "ENTJ": {
    title: "통솔자",
    description: "대담하고 전략적인 ENTJ 유명인들",
    people: [
      { name: "스티브 잡스", role: "애플 창업자", reason: "비전과 추진력" },
      { name: "마가렛 대처", role: "영국 총리", reason: "강력한 리더십" },
      { name: "나폴레옹 보나파르트", role: "프랑스 황제", reason: "군사 전략" },
      { name: "고든 램지", role: "셰프", reason: "완벽주의 리더십" },
      { name: "말콤 X", role: "인권운동가", reason: "강력한 메시지" },
      { name: "시저", role: "로마 황제", reason: "전략적 통치" },
      { name: "해리슨 포드", role: "배우", reason: "카리스마 있는 리더 역할" },
      { name: "프랭클린 루즈벨트", role: "미국 대통령", reason: "위기의 리더" }
    ]
  }
};

export default function CelebrityDetailPage({ params }: { params: { type: string } }) {
  const type = params.type.toUpperCase();
  const celeb = celebrities[type];

  if (!celeb) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <Link 
            href="/celebrities"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-4">
            {type}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {celeb.title} 유명인
          </h1>
          <p className="text-lg text-gray-600">
            {celeb.description}
          </p>
        </div>

        {/* 유명인 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {celeb.people.map((person: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ⭐
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
                  <p className="text-sm text-orange-600 font-semibold mb-2">{person.role}</p>
                  <p className="text-gray-600 text-sm">{person.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            나도 이 유명인들과 같은 유형일까요?
          </p>
          <Link
            href="/test"
            className="inline-block bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            내 성격 유형 검사하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
