import Link from 'next/link';
import { notFound } from 'next/navigation';

const careerGuides: Record<string, any> = {
  "ISTJ": {
    title: "현실주의자",
    icon: "💼",
    mainField: "체계적이고 신뢰할 수 있는 전문가",
    description: "ISTJ는 책임감 있고 꼼꼼하여 정확성과 신뢰성이 중요한 직업에서 탁월합니다. 전통과 규칙을 존중하며, 장기적으로 안정적인 커리어를 쌓는 것을 선호합니다.",
    bestCareers: [
      { job: "회계사", reason: "정확한 수치 관리와 체계적 업무" },
      { job: "은행원", reason: "신뢰와 정확성이 핵심" },
      { job: "공무원", reason: "안정적이고 규칙적인 업무" },
      { job: "경찰관", reason: "법과 질서 유지" },
      { job: "판사", reason: "객관적 판단력" },
      { job: "의사", reason: "체계적 진료와 책임감" },
      { job: "건축가", reason: "정확한 설계와 계획" },
      { job: "군인", reason: "규율과 책임" }
    ],
    whyFit: [
      "세부사항을 놓치지 않는 꼼꼼함",
      "규칙과 절차를 철저히 따름",
      "장기적 계획과 실행 능력",
      "높은 책임감과 신뢰성",
      "체계적인 문제 해결"
    ],
    avoidCareers: [
      { job: "즉흥적 크리에이티브", reason: "구조 없는 업무 부담" },
      { job: "프리랜서", reason: "불안정한 수입" },
      { job: "이벤트 기획", reason: "과도한 변수" }
    ],
    successTips: [
      "유연성을 키워 변화에 대응하기",
      "혁신적인 아이디어도 수용하기",
      "감정적 커뮤니케이션 능력 향상",
      "워라밸 유지하기"
    ]
  },
  "ISFJ": {
    title: "수호자",
    icon: "🏥",
    mainField: "헌신적이고 배려심 많은 조력자",
    description: "ISFJ는 다른 사람을 돕고 지원하는 역할에서 빛을 발합니다. 세심한 배려와 책임감으로 의료, 교육, 복지 분야에서 필수적인 역할을 합니다.",
    bestCareers: [
      { job: "간호사", reason: "환자 케어와 세심한 관찰" },
      { job: "교사", reason: "학생들을 세심하게 지도" },
      { job: "사회복지사", reason: "취약계층 지원" },
      { job: "상담사", reason: "공감과 경청 능력" },
      { job: "영양사", reason: "건강 관리 지원" },
      { job: "사서", reason: "조용하고 체계적인 업무" },
      { job: "인사 담당자", reason: "직원 복지와 관리" },
      { job: "유치원 교사", reason: "아이들 돌봄" }
    ],
    whyFit: [
      "타인에 대한 깊은 배려심",
      "세심한 관찰과 기억력",
      "안정적이고 신뢰할 수 있음",
      "실용적인 도움 제공",
      "인내심과 헌신"
    ],
    avoidCareers: [
      { job: "영업", reason: "공격적인 판매 스타일 부담" },
      { job: "투자 트레이더", reason: "높은 스트레스" },
      { job: "정치인", reason: "갈등 상황" }
    ],
    successTips: [
      "자신의 필요도 우선시하기",
      "거절하는 법 배우기",
      "번아웃 방지를 위한 휴식",
      "자기 주장 능력 키우기"
    ]
  },
  "INFJ": {
    title: "옹호자",
    icon: "📚",
    mainField: "통찰력 있는 상담자와 교육자",
    description: "INFJ는 깊은 통찰력과 공감 능력으로 타인의 성장을 돕는 역할에 적합합니다. 의미 있는 일을 통해 세상을 변화시키고자 합니다.",
    bestCareers: [
      { job: "상담사", reason: "깊은 공감과 이해" },
      { job: "작가", reason: "의미있는 메시지 전달" },
      { job: "심리학자", reason: "인간 내면 탐구" },
      { job: "예술가", reason: "창의적 표현" },
      { job: "교육자", reason: "학생들의 잠재력 개발" },
      { job: "사회운동가", reason: "사회 변화 추구" },
      { job: "종교인", reason: "영적 지도" },
      { job: "인사 컨설턴트", reason: "조직 문화 개선" }
    ],
    whyFit: [
      "깊은 통찰력과 직관",
      "타인의 성장 지원",
      "의미와 목적 추구",
      "창의적 문제 해결",
      "높은 공감 능력"
    ],
    avoidCareers: [
      { job: "영업", reason: "피상적 관계" },
      { job: "금융 트레이더", reason: "물질 중심" },
      { job: "콜센터", reason: "반복적이고 의미 없음" }
    ],
    successTips: [
      "완벽주의 내려놓기",
      "현실적 기대치 설정",
      "자기 돌봄 우선시",
      "경계 설정하기"
    ]
  },
  "INTJ": {
    title: "전략가",
    icon: "🎯",
    mainField: "혁신적인 전략가와 시스템 설계자",
    description: "INTJ는 복잡한 문제를 전략적으로 해결하고 혁신적인 시스템을 구축하는 데 탁월합니다. 지적 도전이 있는 분야에서 최고의 성과를 냅니다.",
    bestCareers: [
      { job: "과학자", reason: "연구와 발견" },
      { job: "엔지니어", reason: "시스템 설계" },
      { job: "경영 컨설턴트", reason: "전략 수립" },
      { job: "프로그래머", reason: "논리적 코딩" },
      { job: "전략기획자", reason: "장기 비전 수립" },
      { job: "교수", reason: "지식 탐구와 전수" },
      { job: "변호사", reason: "논리적 변론" },
      { job: "투자 분석가", reason: "전략적 분석" }
    ],
    whyFit: [
      "전략적 사고와 계획",
      "독립적으로 작업",
      "혁신적 해결책 개발",
      "장기적 비전",
      "높은 집중력"
    ],
    avoidCareers: [
      { job: "고객 서비스", reason: "반복적 대인 업무" },
      { job: "이벤트 진행", reason: "즉흥성 요구" },
      { job: "접객업", reason: "감정 노동" }
    ],
    successTips: [
      "팀워크와 협업 능력 개발",
      "감정적 지능 향상",
      "타인의 의견 경청",
      "완벽주의 조절"
    ]
  },
  "ISTP": {
    title: "장인",
    icon: "🔧",
    mainField: "실용적인 문제 해결사",
    description: "ISTP는 손재주가 뛰어나고 실용적인 문제를 즉각적으로 해결합니다. 기술적이고 물리적인 작업에서 탁월한 능력을 발휘합니다.",
    bestCareers: [
      { job: "기술자", reason: "실용적 수리와 조립" },
      { job: "엔지니어", reason: "시스템 구축과 개선" },
      { job: "정비사", reason: "기계 문제 해결" },
      { job: "운동선수", reason: "신체 능력 활용" },
      { job: "파일럿", reason: "기술적 조작" },
      { job: "경찰관", reason: "위기 대응" },
      { job: "소방관", reason: "긴급 상황 처리" },
      { job: "건축 기사", reason: "실용적 설계" }
    ],
    whyFit: [
      "뛰어난 문제 해결 능력",
      "실용적이고 논리적",
      "침착한 위기 대응",
      "기술적 능력",
      "독립적 작업"
    ],
    avoidCareers: [
      { job: "텔레마케터", reason: "반복적 대화" },
      { job: "행정 업무", reason: "서류 작업 중심" },
      { job: "장기 계획 업무", reason: "즉각성 선호" }
    ],
    successTips: [
      "장기 목표 설정하기",
      "감정 표현 연습",
      "팀워크 능력 향상",
      "인내심 키우기"
    ]
  },
  "ISFP": {
    title: "모험가",
    icon: "🎨",
    mainField: "창의적인 예술가",
    description: "ISFP는 예술적 감각이 뛰어나고 아름다움을 창조합니다. 자유로운 환경에서 창의력을 발휘할 때 가장 행복합니다.",
    bestCareers: [
      { job: "디자이너", reason: "시각적 창의성" },
      { job: "예술가", reason: "자유로운 표현" },
      { job: "음악가", reason: "감성적 연주" },
      { job: "사진작가", reason: "순간 포착" },
      { job: "요리사", reason: "창의적 요리" },
      { job: "수의사", reason: "동물 케어" },
      { job: "물리치료사", reason: "신체적 돌봄" },
      { job: "패션 디자이너", reason: "스타일 창조" }
    ],
    whyFit: [
      "뛰어난 예술적 감각",
      "현재 순간 즐김",
      "유연하고 적응력 있음",
      "섬세한 감성",
      "실용적 창의성"
    ],
    avoidCareers: [
      { job: "영업", reason: "공격적 판매" },
      { job: "관리직", reason: "통제와 관리" },
      { job: "법조인", reason: "엄격한 규칙" }
    ],
    successTips: [
      "장기 계획 세우기",
      "자기 주장 능력 키우기",
      "갈등 직면하기",
      "재정 관리 개선"
    ]
  },
  "INFP": {
    title: "중재자",
    icon: "✍️",
    mainField: "이상주의적 창작자",
    description: "INFP는 진정성과 의미를 추구하며 창의적으로 표현합니다. 가치관에 부합하는 일을 통해 세상에 긍정적 영향을 주고자 합니다.",
    bestCareers: [
      { job: "작가", reason: "내면의 세계 표현" },
      { job: "상담사", reason: "깊은 공감과 이해" },
      { job: "예술가", reason: "창의적 표현" },
      { job: "심리학자", reason: "인간 이해" },
      { job: "사회복지사", reason: "도움이 필요한 이들 지원" },
      { job: "번역가", reason: "언어와 의미" },
      { job: "교육자", reason: "가치 전달" },
      { job: "큐레이터", reason: "의미있는 전시" }
    ],
    whyFit: [
      "깊은 공감 능력",
      "창의적 표현",
      "가치 중심 업무",
      "진정성 추구",
      "개인 맞춤 접근"
    ],
    avoidCareers: [
      { job: "영업", reason: "물질적 목표" },
      { job: "금융", reason: "이윤 중심" },
      { job: "군인", reason: "엄격한 위계질서" }
    ],
    successTips: [
      "현실적 기대 설정",
      "실행력 키우기",
      "비판 수용하기",
      "재정 관리 능력"
    ]
  },
  "INTP": {
    title: "논리술사",
    icon: "🧪",
    mainField: "혁신적인 연구자",
    description: "INTP는 복잡한 이론과 시스템을 분석하고 혁신적인 해결책을 개발합니다. 지적 자유가 있는 환경에서 최고의 성과를 냅니다.",
    bestCareers: [
      { job: "과학자", reason: "이론 연구" },
      { job: "프로그래머", reason: "논리적 코딩" },
      { job: "수학자", reason: "추상적 문제 해결" },
      { job: "철학자", reason: "사고의 탐구" },
      { job: "연구원", reason: "독립적 연구" },
      { job: "교수", reason: "지식 탐구" },
      { job: "분석가", reason: "데이터 분석" },
      { job: "건축가", reason: "창의적 설계" }
    ],
    whyFit: [
      "논리적 분석력",
      "창의적 문제 해결",
      "독립적 작업 선호",
      "지적 호기심",
      "객관적 사고"
    ],
    avoidCareers: [
      { job: "영업", reason: "감정적 설득" },
      { job: "서비스직", reason: "반복적 대인 업무" },
      { job: "관리직", reason: "행정 업무" }
    ],
    successTips: [
      "프로젝트 완성하기",
      "실용적 적용 고려",
      "커뮤니케이션 능력",
      "감정 표현 연습"
    ]
  },
  "ESTP": {
    title: "사업가",
    icon: "💰",
    mainField: "역동적인 실행가",
    description: "ESTP는 빠른 판단력과 행동력으로 즉각적인 결과를 만들어냅니다. 역동적이고 경쟁적인 환경에서 탁월합니다.",
    bestCareers: [
      { job: "영업사원", reason: "설득력과 협상" },
      { job: "사업가", reason: "기회 포착" },
      { job: "운동선수", reason: "경쟁과 도전" },
      { job: "마케터", reason: "트렌드 파악" },
      { job: "경찰관", reason: "위기 대응" },
      { job: "응급구조사", reason: "긴급 상황 처리" },
      { job: "기자", reason: "현장 취재" },
      { job: "부동산 중개인", reason: "빠른 거래" }
    ],
    whyFit: [
      "빠른 행동력",
      "현실적 문제 해결",
      "위기 대응 능력",
      "사교성과 설득력",
      "유연한 적응력"
    ],
    avoidCareers: [
      { job: "연구직", reason: "장기 이론 연구" },
      { job: "사서", reason: "조용하고 반복적" },
      { job: "회계", reason: "세밀한 수치 작업" }
    ],
    successTips: [
      "장기 계획 세우기",
      "인내심 키우기",
      "타인 감정 고려",
      "충동 조절하기"
    ]
  },
  "ESFP": {
    title: "연예인",
    icon: "🎭",
    mainField: "활기찬 엔터테이너",
    description: "ESFP는 사람들을 즐겁게 하고 에너지를 전달하는 데 천부적입니다. 역동적이고 사교적인 환경에서 빛을 발합니다.",
    bestCareers: [
      { job: "배우", reason: "무대 위의 열정" },
      { job: "가수", reason: "음악으로 소통" },
      { job: "이벤트 플래너", reason: "즐거운 행사 기획" },
      { job: "영업사원", reason: "친화력과 설득" },
      { job: "여행 가이드", reason: "사람들과 함께" },
      { job: "디자이너", reason: "시각적 창의성" },
      { job: "홍보 담당자", reason: "대중 소통" },
      { job: "MC", reason: "무대 진행" }
    ],
    whyFit: [
      "뛰어난 사교성",
      "긍정적 에너지",
      "즉흥적 대응",
      "현재를 즐김",
      "사람들에게 활력 제공"
    ],
    avoidCareers: [
      { job: "데이터 분석", reason: "혼자 하는 작업" },
      { job: "회계", reason: "세밀하고 반복적" },
      { job: "연구직", reason: "장기 이론 연구" }
    ],
    successTips: [
      "장기 목표 설정",
      "재정 관리 능력",
      "계획성 키우기",
      "깊이 있는 관계"
    ]
  },
  "ENFP": {
    title: "활동가",
    icon: "🎤",
    mainField: "열정적인 소통가",
    description: "ENFP는 창의적이고 열정적으로 사람들과 소통합니다. 새로운 가능성을 탐색하고 타인에게 영감을 주는 역할에 적합합니다.",
    bestCareers: [
      { job: "저널리스트", reason: "스토리 발굴" },
      { job: "상담사", reason: "공감과 소통" },
      { job: "교사", reason: "학생들에게 영감" },
      { job: "마케터", reason: "창의적 캠페인" },
      { job: "배우", reason: "감정 표현" },
      { job: "작가", reason: "창의적 글쓰기" },
      { job: "컨설턴트", reason: "다양한 프로젝트" },
      { job: "HR 담당자", reason: "사람 중심 업무" }
    ],
    whyFit: [
      "열정과 에너지",
      "창의적 아이디어",
      "뛰어난 소통 능력",
      "공감과 이해",
      "새로운 시도"
    ],
    avoidCareers: [
      { job: "회계", reason: "반복적 수치 작업" },
      { job: "공장 근무", reason: "단조로운 작업" },
      { job: "데이터 입력", reason: "창의성 부족" }
    ],
    successTips: [
      "프로젝트 완료하기",
      "한 가지에 집중",
      "현실적 계획",
      "시간 관리"
    ]
  },
  "ENTP": {
    title: "변론가",
    icon: "⚖️",
    mainField: "혁신적인 문제 해결사",
    description: "ENTP는 지적 도전을 즐기고 혁신적인 해결책을 제시합니다. 토론과 아이디어 교환이 활발한 환경에서 최고의 능력을 발휘합니다.",
    bestCareers: [
      { job: "발명가", reason: "창의적 발명" },
      { job: "기업가", reason: "혁신적 사업" },
      { job: "변호사", reason: "논리적 변론" },
      { job: "마케터", reason: "창의적 전략" },
      { job: "컨설턴트", reason: "문제 해결" },
      { job: "과학자", reason: "연구와 실험" },
      { job: "프로그래머", reason: "혁신적 코딩" },
      { job: "저널리스트", reason: "탐사와 분석" }
    ],
    whyFit: [
      "창의적 문제 해결",
      "논리적 사고",
      "지적 호기심",
      "빠른 학습 능력",
      "도전적 태도"
    ],
    avoidCareers: [
      { job: "행정 업무", reason: "반복적 작업" },
      { job: "고객 서비스", reason: "정해진 스크립트" },
      { job: "공장 근무", reason: "단조로움" }
    ],
    successTips: [
      "프로젝트 완성도",
      "타인 감정 고려",
      "인내심 키우기",
      "실행력 향상"
    ]
  },
  "ESTJ": {
    title: "경영자",
    icon: "📊",
    mainField: "효율적인 관리자",
    description: "ESTJ는 조직을 효율적으로 운영하고 관리하는 데 탁월합니다. 체계와 질서를 중시하며 실용적인 결과를 만들어냅니다.",
    bestCareers: [
      { job: "경영자", reason: "조직 운영" },
      { job: "관리자", reason: "팀 관리" },
      { job: "공무원", reason: "행정 업무" },
      { job: "판사", reason: "법 집행" },
      { job: "군인", reason: "위계질서" },
      { job: "은행원", reason: "재무 관리" },
      { job: "영업 관리자", reason: "팀 목표 달성" },
      { job: "건설 관리자", reason: "프로젝트 관리" }
    ],
    whyFit: [
      "강력한 리더십",
      "조직 능력",
      "실용적 사고",
      "결단력",
      "책임감"
    ],
    avoidCareers: [
      { job: "예술가", reason: "자유로운 창작" },
      { job: "상담사", reason: "감정적 교감" },
      { job: "프리랜서", reason: "불안정성" }
    ],
    successTips: [
      "유연성 키우기",
      "감정적 지능 향상",
      "타인 의견 경청",
      "워라밸 유지"
    ]
  },
  "ESFJ": {
    title: "집정관",
    icon: "🤝",
    mainField: "헌신적인 지원자",
    description: "ESFJ는 사람들을 돕고 조화로운 환경을 만드는 데 능숙합니다. 팀워크와 협력이 중요한 역할에서 탁월합니다.",
    bestCareers: [
      { job: "교사", reason: "학생 지도" },
      { job: "간호사", reason: "환자 케어" },
      { job: "사회복지사", reason: "복지 지원" },
      { job: "영업사원", reason: "고객 관계" },
      { job: "행정 관리자", reason: "조직 운영" },
      { job: "이벤트 플래너", reason: "사람들을 위한 행사" },
      { job: "HR 담당자", reason: "직원 복지" },
      { job: "리셉셔니스트", reason: "친절한 응대" }
    ],
    whyFit: [
      "뛰어난 사교성",
      "협조적 태도",
      "책임감",
      "조직적",
      "타인 배려"
    ],
    avoidCareers: [
      { job: "프로그래머", reason: "혼자 하는 작업" },
      { job: "연구직", reason: "대인 교류 부족" },
      { job: "비평가", reason: "부정적 피드백" }
    ],
    successTips: [
      "자신의 필요 챙기기",
      "거절하는 법 배우기",
      "비판 수용하기",
      "개인 시간 확보"
    ]
  },
  "ENFJ": {
    title: "선도자",
    icon: "✨",
    mainField: "영감을 주는 리더",
    description: "ENFJ는 타인에게 영감을 주고 성장을 돕는 데 탁월합니다. 카리스마와 공감 능력으로 사람들을 이끕니다.",
    bestCareers: [
      { job: "교사", reason: "학생 성장 지원" },
      { job: "상담사", reason: "심리적 지원" },
      { job: "코치", reason: "개인 성장 돕기" },
      { job: "인사 담당자", reason: "조직 문화" },
      { job: "정치인", reason: "사회 변화" },
      { job: "사회운동가", reason: "대의 추구" },
      { job: "홍보 담당자", reason: "메시지 전달" },
      { job: "목사/성직자", reason: "영적 지도" }
    ],
    whyFit: [
      "강력한 리더십",
      "공감 능력",
      "의사소통 능력",
      "열정적",
      "이타적"
    ],
    avoidCareers: [
      { job: "데이터 분석", reason: "사람 교류 부족" },
      { job: "회계", reason: "수치 중심" },
      { job: "공장 근무", reason: "반복 작업" }
    ],
    successTips: [
      "자기 돌봄 우선",
      "경계 설정하기",
      "완벽주의 내려놓기",
      "현실적 기대"
    ]
  },
  "ENTJ": {
    title: "통솔자",
    icon: "👔",
    mainField: "전략적 리더",
    description: "ENTJ는 대담하고 결단력 있게 조직을 이끕니다. 장기적 비전을 가지고 효율적으로 목표를 달성합니다.",
    bestCareers: [
      { job: "CEO", reason: "조직 경영" },
      { job: "경영 컨설턴트", reason: "전략 수립" },
      { job: "변호사", reason: "논리적 변론" },
      { job: "투자가", reason: "전략적 투자" },
      { job: "사업가", reason: "비즈니스 구축" },
      { job: "관리자", reason: "팀 리더십" },
      { job: "정치인", reason: "정책 수립" },
      { job: "교수", reason: "지식 전달과 연구" }
    ],
    whyFit: [
      "강력한 리더십",
      "전략적 사고",
      "결단력",
      "효율성",
      "목표 지향"
    ],
    avoidCareers: [
      { job: "상담사", reason: "감정적 지원" },
      { job: "예술가", reason: "자유로운 창작" },
      { job: "서비스직", reason: "반복적 업무" }
    ],
    successTips: [
      "감정적 지능 향상",
      "타인 의견 존중",
      "유연성 키우기",
      "워라밸 관리"
    ]
  }
};

export default function CareerDetailPage({ params }: { params: { type: string } }) {
  const type = params.type.toUpperCase();
  const career = careerGuides[type];

  if (!career) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <Link 
            href="/careers"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center border-2 border-indigo-200">
          <div className="text-6xl mb-4">{career.icon}</div>
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {type}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {career.title}의 직업 가이드
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mb-4">
            {career.mainField}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {career.description}
          </p>
        </div>

        {/* 최고의 직업 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span>✨</span> {type}에게 최고의 직업
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {career.bestCareers.map((item: any, index: number) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-indigo-700 mb-2">{item.job}</h3>
                <p className="text-gray-600 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 왜 잘 맞는가 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>🎯</span> 왜 이 직업들이 잘 맞을까?
          </h2>
          <ul className="space-y-2">
            {career.whyFit.map((reason: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 피해야 할 직업 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>⚠️</span> 주의해야 할 직업 분야
          </h2>
          <div className="space-y-3">
            {career.avoidCareers.map((item: any, index: number) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-700 mb-1">{item.job}</h3>
                <p className="text-gray-600 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 성공 팁 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <span>💡</span> 커리어 성공을 위한 팁
          </h2>
          <ul className="space-y-2">
            {career.successTips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">⭐</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/test"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            내 성격 유형 검사하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
