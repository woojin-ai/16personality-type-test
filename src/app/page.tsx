import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              16가지 성격유형 검사
            </span>
          </h1>
          <p className="mb-12 text-xl text-gray-700 leading-relaxed">
            당신의 성격 유형을 알아보세요!<br />
            80개의 질문으로 정확한 결과를 제공합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">나의 성격 유형은?</h3>
              <p className="text-gray-600">
                80개의 질문으로 당신의 성격 유형을 정확하게 분석합니다
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">어떤 직업이 맞을까?</h3>
              <p className="text-gray-600">
                성격 유형에 맞는 추천 직업과 커리어 정보를 제공합니다
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-xl font-bold mb-2">나와 잘 맞는 유형은?</h3>
              <p className="text-gray-600">
                다른 유형과의 궁합을 확인하고 관계 조언을 받아보세요
              </p>
            </div>
          </div>

          <Link
            href="/test"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            검사 시작하기 →
          </Link>

          <div className="mt-8 text-sm text-gray-500">
            소요 시간: 약 10-15분
          </div>
        </div>
      </div>
    </div>
  );
}
