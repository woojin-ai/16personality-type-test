import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '16가지 성격유형 검사',
  description: '80개의 질문으로 알아보는 나의 성격 유형, 추천 직업, 궁합 분석',
  keywords: ['성격유형', '성격검사', 'MBTI', '심리테스트', '직업추천', '궁합'],
  openGraph: {
    title: '16가지 성격유형 검사',
    description: '80개의 질문으로 알아보는 나의 성격 유형',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
