'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  direction: number;
}

const questions: Question[] = [
  // E/I 질문 (20개)
  { id: 1, text: "새로운 사람들을 만나는 것이 즐겁고 에너지가 생긴다.", dimension: "EI", direction: 1 },
  { id: 2, text: "혼자만의 시간이 필요하고 소중하다.", dimension: "EI", direction: -1 },
  { id: 3, text: "파티나 모임에 참석하면 활기차진다.", dimension: "EI", direction: 1 },
  { id: 4, text: "깊이 있는 대화를 소수의 사람들과 나누는 것을 선호한다.", dimension: "EI", direction: -1 },
  { id: 5, text: "먼저 다가가서 대화를 시작하는 편이다.", dimension: "EI", direction: 1 },
  { id: 6, text: "사람들과 오래 있으면 피곤해진다.", dimension: "EI", direction: -1 },
  { id: 7, text: "다양한 활동과 경험을 즐긴다.", dimension: "EI", direction: 1 },
  { id: 8, text: "생각을 정리한 후에 말하는 편이다.", dimension: "EI", direction: -1 },
  { id: 9, text: "주목받는 것을 좋아한다.", dimension: "EI", direction: 1 },
  { id: 10, text: "관찰하고 분석하는 것을 선호한다.", dimension: "EI", direction: -1 },
  { id: 11, text: "말하면서 생각이 정리된다.", dimension: "EI", direction: 1 },
  { id: 12, text: "조용한 환경에서 집중이 잘 된다.", dimension: "EI", direction: -1 },
  { id: 13, text: "넓고 얕은 관계를 많이 맺는다.", dimension: "EI", direction: 1 },
  { id: 14, text: "깊고 친밀한 관계를 소수로 유지한다.", dimension: "EI", direction: -1 },
  { id: 15, text: "단체 활동을 선호한다.", dimension: "EI", direction: 1 },
  { id: 16, text: "혼자 하는 취미를 즐긴다.", dimension: "EI", direction: -1 },
  { id: 17, text: "즉흥적으로 행동하는 편이다.", dimension: "EI", direction: 1 },
  { id: 18, text: "신중하게 계획하고 행동한다.", dimension: "EI", direction: -1 },
  { id: 19, text: "활동적인 모임을 좋아한다.", dimension: "EI", direction: 1 },
  { id: 20, text: "조용한 모임을 선호한다.", dimension: "EI", direction: -1 },

  // S/N 질문 (20개)
  { id: 21, text: "구체적이고 실질적인 정보를 선호한다.", dimension: "SN", direction: 1 },
  { id: 22, text: "추상적이고 이론적인 개념에 관심이 많다.", dimension: "SN", direction: -1 },
  { id: 23, text: "현재에 집중하며 지금 여기를 중요하게 생각한다.", dimension: "SN", direction: 1 },
  { id: 24, text: "미래의 가능성에 대해 자주 생각한다.", dimension: "SN", direction: -1 },
  { id: 25, text: "경험과 사실을 중시한다.", dimension: "SN", direction: 1 },
  { id: 26, text: "직관과 영감을 중시한다.", dimension: "SN", direction: -1 },
  { id: 27, text: "세부사항에 주의를 기울인다.", dimension: "SN", direction: 1 },
  { id: 28, text: "전체적인 그림을 보는 것을 선호한다.", dimension: "SN", direction: -1 },
  { id: 29, text: "정해진 방법대로 하는 것이 편하다.", dimension: "SN", direction: 1 },
  { id: 30, text: "새로운 방법을 시도하는 것을 좋아한다.", dimension: "SN", direction: -1 },
  { id: 31, text: "실용적이고 현실적이다.", dimension: "SN", direction: 1 },
  { id: 32, text: "상상력이 풍부하고 창의적이다.", dimension: "SN", direction: -1 },
  { id: 33, text: "사실과 데이터에 기반하여 판단한다.", dimension: "SN", direction: 1 },
  { id: 34, text: "패턴과 의미를 찾는다.", dimension: "SN", direction: -1 },
  { id: 35, text: "단계별로 순서대로 진행하는 것을 선호한다.", dimension: "SN", direction: 1 },
  { id: 36, text: "여러 가지를 동시에 생각한다.", dimension: "SN", direction: -1 },
  { id: 37, text: "검증된 방법을 신뢰한다.", dimension: "SN", direction: 1 },
  { id: 38, text: "혁신적인 아이디어에 끌린다.", dimension: "SN", direction: -1 },
  { id: 39, text: "구체적인 예시로 설명하는 것을 선호한다.", dimension: "SN", direction: 1 },
  { id: 40, text: "은유나 비유로 설명하는 것을 좋아한다.", dimension: "SN", direction: -1 },

  // T/F 질문 (20개)
  { id: 41, text: "논리적이고 분석적으로 판단한다.", dimension: "TF", direction: 1 },
  { id: 42, text: "사람들의 감정을 먼저 고려한다.", dimension: "TF", direction: -1 },
  { id: 43, text: "객관적인 사실이 중요하다.", dimension: "TF", direction: 1 },
  { id: 44, text: "조화와 관계가 중요하다.", dimension: "TF", direction: -1 },
  { id: 45, text: "공정함과 원칙을 중시한다.", dimension: "TF", direction: 1 },
  { id: 46, text: "상황에 따라 유연하게 대응한다.", dimension: "TF", direction: -1 },
  { id: 47, text: "비판적으로 분석하는 것을 좋아한다.", dimension: "TF", direction: 1 },
  { id: 48, text: "공감하고 이해하는 것을 중요하게 생각한다.", dimension: "TF", direction: -1 },
  { id: 49, text: "효율성과 성과를 중시한다.", dimension: "TF", direction: 1 },
  { id: 50, text: "사람들의 행복을 우선시한다.", dimension: "TF", direction: -1 },
  { id: 51, text: "진실이 중요하다고 생각한다.", dimension: "TF", direction: 1 },
  { id: 52, text: "다른 사람의 기분을 먼저 생각한다.", dimension: "TF", direction: -1 },
  { id: 53, text: "결정할 때 장단점을 분석한다.", dimension: "TF", direction: 1 },
  { id: 54, text: "결정할 때 영향받을 사람들을 생각한다.", dimension: "TF", direction: -1 },
  { id: 55, text: "문제를 해결하는 데 집중한다.", dimension: "TF", direction: 1 },
  { id: 56, text: "사람들의 필요를 충족시키는 데 집중한다.", dimension: "TF", direction: -1 },
  { id: 57, text: "냉정하고 객관적이라는 말을 자주 듣는다.", dimension: "TF", direction: 1 },
  { id: 58, text: "따뜻하고 친절하다는 말을 자주 듣는다.", dimension: "TF", direction: -1 },
  { id: 59, text: "직설적으로 의견을 말한다.", dimension: "TF", direction: 1 },
  { id: 60, text: "완곡하게 표현하는 편이다.", dimension: "TF", direction: -1 },

  // J/P 질문 (20개)
  { id: 61, text: "계획을 세우고 그대로 실행하는 것을 선호한다.", dimension: "JP", direction: 1 },
  { id: 62, text: "즉흥적이고 융통성 있게 대응한다.", dimension: "JP", direction: -1 },
  { id: 63, text: "정리정돈이 잘 되어 있어야 한다.", dimension: "JP", direction: 1 },
  { id: 64, text: "다소 어질러져 있어도 괜찮다.", dimension: "JP", direction: -1 },
  { id: 65, text: "마감일을 잘 지킨다.", dimension: "JP", direction: 1 },
  { id: 66, text: "마감 직전에 몰아서 하는 편이다.", dimension: "JP", direction: -1 },
  { id: 67, text: "체계적이고 조직적이다.", dimension: "JP", direction: 1 },
  { id: 68, text: "자유롭고 개방적이다.", dimension: "JP", direction: -1 },
  { id: 69, text: "결정을 빨리 내린다.", dimension: "JP", direction: 1 },
  { id: 70, text: "여러 선택지를 열어두는 것을 선호한다.", dimension: "JP", direction: -1 },
  { id: 71, text: "To-do 리스트를 작성하고 체크한다.", dimension: "JP", direction: 1 },
  { id: 72, text: "그때그때 상황에 맞게 행동한다.", dimension: "JP", direction: -1 },
  { id: 73, text: "계획이 변경되면 스트레스를 받는다.", dimension: "JP", direction: 1 },
  { id: 74, text: "계획 변경을 유연하게 받아들인다.", dimension: "JP", direction: -1 },
  { id: 75, text: "미리미리 준비하는 편이다.", dimension: "JP", direction: 1 },
  { id: 76, text: "필요할 때 준비한다.", dimension: "JP", direction: -1 },
  { id: 77, text: "결론을 내리는 것을 선호한다.", dimension: "JP", direction: 1 },
  { id: 78, text: "탐색하고 알아가는 과정을 즐긴다.", dimension: "JP", direction: -1 },
  { id: 79, text: "규칙과 절차를 따르는 것이 중요하다.", dimension: "JP", direction: 1 },
  { id: 80, text: "상황에 맞게 적응하는 것이 중요하다.", dimension: "JP", direction: -1 },
];

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      // 결과 계산
      const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
      const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

      questions.forEach((q, index) => {
        const answer = newAnswers[index];
        if (answer !== undefined) {
          const score = (answer - 4) * q.direction;
          scores[q.dimension] += score;
          counts[q.dimension]++;
        }
      });

      const type = [];
      const percentages: any = {};

      // E/I
      const eiPercent = ((scores.EI / (counts.EI * 3)) + 1) / 2 * 100;
      percentages.EI = { E: eiPercent, I: 100 - eiPercent };
      type.push(eiPercent >= 50 ? 'E' : 'I');

      // S/N
      const snPercent = ((scores.SN / (counts.SN * 3)) + 1) / 2 * 100;
      percentages.SN = { S: snPercent, N: 100 - snPercent };
      type.push(snPercent >= 50 ? 'S' : 'N');

      // T/F
      const tfPercent = ((scores.TF / (counts.TF * 3)) + 1) / 2 * 100;
      percentages.TF = { T: tfPercent, F: 100 - tfPercent };
      type.push(tfPercent >= 50 ? 'T' : 'F');

      // J/P
      const jpPercent = ((scores.JP / (counts.JP * 3)) + 1) / 2 * 100;
      percentages.JP = { J: jpPercent, P: 100 - jpPercent };
      type.push(jpPercent >= 50 ? 'J' : 'P');

      const personalityType = type.join('');
      
      // 결과 페이지로 이동
      router.push(`/test/result?type=${personalityType}&data=${encodeURIComponent(JSON.stringify(percentages))}`);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* 진행률 */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>질문 {currentQuestion + 1} / {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* 질문 */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
              {question.text}
            </h2>
          </div>

          {/* 답변 옵션 */}
          <div className="space-y-6">
            <div className="flex justify-between text-sm font-semibold text-gray-700 px-4">
              <span>그렇다</span>
              <span>그렇지 않다</span>
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-4">
              {[7, 6, 5, 4, 3, 2, 1].map((value, index) => {
                const sizes = [60, 50, 40, 35, 40, 50, 60];
                const colors = [
                  'from-blue-400 to-cyan-400',
                  'from-green-400 to-teal-400', 
                  'from-blue-300 to-cyan-300',
                  'from-gray-300 to-gray-400',
                  'from-orange-300 to-yellow-300',
                  'from-orange-400 to-yellow-400',
                  'from-pink-400 to-red-400'
                ];

                return (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className="group transition-transform hover:scale-110"
                  >
                    <div 
                      className={`rounded-full bg-gradient-to-br ${colors[index]} shadow-md group-hover:shadow-lg transition-all ${
                        answers[currentQuestion] === value ? 'ring-4 ring-purple-600 scale-110' : ''
                      }`}
                      style={{ 
                        width: `${sizes[index]}px`, 
                        height: `${sizes[index]}px` 
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
