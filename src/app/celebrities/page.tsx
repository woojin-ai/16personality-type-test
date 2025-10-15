import Link from 'next/link';
import Image from 'next/image';

const typeGroups = {
  "탐구자": {
    emoji: "🧭",
    color: "from-purple-500 to-indigo-600",
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
    types: [
      { code: "ISTJ", title: "현실주의자" },
      { code: "ISFJ", title: "수호자" },
      { code: "ESTJ", title: "경영자" },
      { code: "ESFJ", title: "집정관" }
    ]
  }
};

export default function CelebritiesPage() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
              ⭐ 유형별 유명인
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            나와 같은 유형의 유명인을 만나보세요!
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
                    href={`/celebrities/${type.code}`}
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
                        <div className="text-2xl font-bold mb-1 text-gray-800">
                          {type.code}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{type.title}</div>
                        <div className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full inline-block">
                          8+ 명
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
