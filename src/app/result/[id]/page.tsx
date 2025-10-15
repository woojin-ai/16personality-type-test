import { Metadata } from 'next';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // ID로 결과 조회 (서버 사이드)
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/share?id=${params.id}`, {
      cache: 'no-store'
    });
    
    if (response.ok) {
      const data = await response.json();
      const typeNames: Record<string, string> = {
        "ISTJ": "현실주의자", "ISFJ": "수호자", "INFJ": "옹호자", "INTJ": "전략가",
        "ISTP": "장인", "ISFP": "모험가", "INFP": "중재자", "INTP": "논리술사",
        "ESTP": "사업가", "ESFP": "연예인", "ENFP": "활동가", "ENTP": "변론가",
        "ESTJ": "경영자", "ESFJ": "집정관", "ENFJ": "선도자", "ENTJ": "통솔자"
      };
      
      const title = `${data.type} - ${typeNames[data.type] || ''}`;
      const description = `나의 성격 유형 검사 결과를 확인해보세요!`;
      
      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [`/images/types/${data.type}.png`],
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: [`/images/types/${data.type}.png`],
        },
      };
    }
  } catch (error) {
    console.error('메타데이터 생성 실패:', error);
  }
  
  return {
    title: '16가지 성격유형 검사 결과',
    description: '나의 성격 유형을 확인해보세요!',
  };
}

export { default } from './client-page';
