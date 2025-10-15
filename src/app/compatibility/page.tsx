'use client';

import { useState } from 'react';

const allTypes = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

const compatibilityScores: Record<string, Record<string, number>> = {
  "ISTJ": { "ESFP": 95, "ESTP": 90, "ISFJ": 85, "ESTJ": 80, "ISTP": 75, "ISFP": 70 },
  "ISFJ": { "ESFP": 95, "ESTP": 90, "ISTJ": 85, "ESFJ": 80, "ISTP": 75, "ISFP": 70 },
  "INFJ": { "ENFP": 95, "ENTP": 90, "INFP": 85, "ENFJ": 80, "INTJ": 75, "INTP": 70 },
  "INTJ": { "ENFP": 95, "ENTP": 90, "INFJ": 75, "ENTJ": 80, "INTP": 85, "INFP": 70 },
  "ISTP": { "ESFJ": 95, "ESTJ": 90, "ISTJ": 75, "ESTP": 80, "ISFJ": 75, "ISFP": 70 },
  "ISFP": { "ESFJ": 95, "ESTJ": 90, "ISFJ": 70, "ESFP": 80, "ISTP": 70, "ISTJ": 70 },
  "INFP": { "ENFJ": 95, "ENTJ": 90, "INFJ": 85, "ENFP": 80, "INTP": 75, "INTJ": 70 },
  "INTP": { "ENFJ": 95, "ENTJ": 90, "INFJ": 70, "ENTP": 80, "INTJ": 85, "INFP": 75 },
  "ESTP": { "ISFJ": 95, "ISTJ": 90, "ESFP": 80, "ESTJ": 75, "ISTP": 80, "ISFP": 70 },
  "ESFP": { "ISFJ": 95, "ISTJ": 90, "ESTP": 80, "ESFJ": 75, "ISTP": 70, "ISFP": 80 },
  "ENFP": { "INFJ": 95, "INTJ": 95, "ENFJ": 80, "ENTP": 85, "INFP": 80, "INTP": 70 },
  "ENTP": { "INFJ": 95, "INTJ": 90, "ENFP": 85, "ENTJ": 80, "INTP": 80, "INFP": 70 },
  "ESTJ": { "ISFP": 95, "ISTP": 90, "ISTJ": 80, "ESFJ": 75, "ESTP": 75, "ISFJ": 70 },
  "ESFJ": { "ISFP": 95, "ISTP": 95, "ISFJ": 80, "ESTJ": 75, "ESFP": 75, "ISTJ": 70 },
  "ENFJ": { "INFP": 95, "INTP": 95, "INFJ": 80, "ENFP": 75, "ENTJ": 70, "INTJ": 70 },
  "ENTJ": { "INFP": 95, "INTP": 90, "INTJ": 80, "ENFJ": 70, "ENTP": 80, "INFJ": 70 }
};

function getCompatibilityScore(type1: string, type2: string): number {
  if (!type1 || !type2) return 0;
  if (type1 === type2) return 100;
  return compatibilityScores[type1]?.[type2] || compatibilityScores[type2]?.[type1] || 60;
}

function getCompatibilityText(score: number): string {
  if (score >= 90) return "환상의 궁합!";
  if (score >= 80) return "매우 좋은 궁합!";
  if (score >= 70) return "좋은 궁합!";
  if (score >= 60) return "보통 궁합";
  return "노력이 필요한 궁합";
}

export default function CompatibilityPage() {
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  const score = getCompatibilityScore(type1, type2);
  const showResult = type1 && type2;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              성격 유형 궁합
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            두 가지 유형을 선택하여 궁합을 확인하세요
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
            <select
              value={type1}
              onChange={(e) => setType1(e.target.value)}
              className="w-full md:w-48 px-6 py-3 border-2 border-purple-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-purple-600 transition-colors"
            >
              <option value="">첫 번째 유형</option>
              {allTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <div className="text-3xl">💕</div>

            <select
              value={type2}
              onChange={(e) => setType2(e.target.value)}
              className="w-full md:w-48 px-6 py-3 border-2 border-pink-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-pink-600 transition-colors"
            >
              <option value="">두 번째 유형</option>
              {allTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {showResult && (
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {score}점
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {getCompatibilityText(score)}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {type1 === type2 
                  ? "같은 유형끼리는 서로를 잘 이해하지만, 때로는 같은 약점을 공유할 수 있습니다."
                  : score >= 90 
                    ? "서로의 강점을 극대화하고 약점을 보완하는 환상의 조합입니다."
                    : score >= 80
                      ? "서로의 차이를 존중하며 이해하면 훌륭한 관계를 만들어갈 수 있습니다."
                      : score >= 70
                        ? "약간의 노력과 소통으로 좋은 관계를 유지할 수 있습니다."
                        : "서로 다른 부분이 많지만, 그 차이를 인정하고 존중한다면 좋은 관계를 만들 수 있습니다."
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
