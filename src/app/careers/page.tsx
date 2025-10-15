import Link from 'next/link';
import Image from 'next/image';

const typeGroups = {
  "탐구자": {
    emoji: "🧭",
    color: "from-purple-500 to-indigo-600",
    types: [
      { code: "INTJ", title: "전략가", field: "전략·기획" },
      { code: "INTP", title: "논리술사", field: "연구·개발" },
      { code: "ENTJ", title: "통솔자", field: "경영·CEO" },
      { code: "ENTP", title: "변론가", field: "법률·컨설팅" }
    ]
  },
  "몽상가": {
    emoji: "🌟",
    color: "from-green-500 to-teal-600",
    types: [
      { code: "INFJ", title: "옹호자", field: "상담·교육" },
      { code: "INFP", title: "중재자", field: "창작·문학" },
      { code: "ENFJ", title: "선도자", field: "교육·리더십" },
      { code: "ENFP", title: "활동가", field: "마케팅·PR" }
    ]
  },
  "도전자": {
    emoji: "🏃",
    color: "from-orange-500 to-yellow-600",
    types: [
      { code: "ISTP", title: "장인", field: "기술·엔지니어" },
      { code: "ISFP", title: "모험가", field: "예술·디자인" },
      { code: "ESTP", title: "사업가", field: "영업·사업" },
      { code: "ESFP", title: "연예인", field: "엔터테인먼트" }
    ]
  },
  "지킴이": {
    emoji: "🏰",
    color: "from-blue-500 to-cyan-600",
    types: [
      { code: "ISTJ", title: "현실주의자", field: "관리·행정" },
      { code: "ISFJ", title: "수호자", field: "의료·복지" },
      { code: "ESTJ", title: "경영자", field: "경영·관리" },
      { code: "ESFJ", title: "집정관", field: "서비스·지원" }
    ]
  }
};

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              💼 유형별 직업 가이드
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            나에게 꼭 맞는 직업을 찾아보세요
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(typeGroups).map(([groupName, group]) => (
            <div key={groupName}>
              {/* 그룹 헤더 */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-3">
                  <span className="text-3xl">{group.emoji}</span>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                    {groupName}
                  </h2>
                </div>
              </div>

              {/* 그룹 카드들 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.types.map((type) => (
                  <Link
                    key={type.code}
                    href={`/careers/${type.code}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-indigo-100 hover:border-indigo-300">
                      {/* 이미지 */}
                      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
                        <Image
                          src={`/images/types/${type.code}.png`}
                          alt={`${type.code} ${type.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      
                      {/* 텍스트 */}
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1 text-gray-800">
                          {type.code}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{type.title}</div>
                        <div className="text-xs text-indigo-600 font-medium">
                          {type.field}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
