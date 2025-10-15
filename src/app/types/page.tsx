import Link from 'next/link';
import Image from 'next/image';

const typeGroups = {
  "탐구자": {
    emoji: "🧭",
    color: "from-purple-500 to-indigo-600",
    description: "논리와 혁신으로 세상을 분석하는 전략가들",
    types: [
      { code: "INTJ", title: "전략가" },
      { code: "INTP", title: "논리술사" },
      { code: "ENTJ", title: "통솔자" },
      { code: "ENTP", title: "변론가" }
    ]
  },
  "몽상가": {
    emoji: "🌟",
    color: "from-green-500 to-teal-600",
    description: "공감과 이상으로 세상을 변화시키는 영감가들",
    types: [
      { code: "INFJ", title: "옹호자" },
      { code: "INFP", title: "중재자" },
      { code: "ENFJ", title: "선도자" },
      { code: "ENFP", title: "활동가" }
    ]
  },
  "도전자": {
    emoji: "🏃",
    color: "from-orange-500 to-yellow-600",
    description: "행동과 자유로 현재를 즐기는 실천가들",
    types: [
      { code: "ISTP", title: "장인" },
      { code: "ISFP", title: "모험가" },
      { code: "ESTP", title: "사업가" },
      { code: "ESFP", title: "연예인" }
    ]
  },
  "지킴이": {
    emoji: "🏰",
    color: "from-blue-500 to-cyan-600",
    description: "책임과 헌신으로 질서를 지키는 수호자들",
    types: [
      { code: "ISTJ", title: "현실주의자" },
      { code: "ISFJ", title: "수호자" },
      { code: "ESTJ", title: "경영자" },
      { code: "ESFJ", title: "집정관" }
    ]
  }
};

export default function TypesPage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              16가지 성격 유형
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            각 유형을 클릭하여 자세한 정보를 확인하세요
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
                <p className="text-gray-600">{group.description}</p>
              </div>

              {/* 그룹 카드들 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.types.map((type) => (
                  <Link
                    key={type.code}
                    href={`/types/${type.code}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
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
                        <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                          {type.code}
                        </div>
                        <div className="text-sm text-gray-600">{type.title}</div>
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
