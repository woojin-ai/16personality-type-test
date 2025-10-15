import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://16personality-type-test.vercel.app'),
  title: {
    default: '16가지 성격유형 검사 - 무료 성격 테스트',
    template: '%s | 16가지 성격유형 검사',
  },
  description: '80개의 질문으로 알아보는 나의 성격 유형! 16가지 성격 유형별 특징, 추천 직업, 궁합, 연애 스타일을 무료로 확인하세요.',
  keywords: ['성격유형검사', '성격테스트', '무료 성격검사', '16가지 성격', 'MBTI 스타일', '성격유형 테스트', '심리테스트', '직업추천', '궁합테스트', '연애유형'],
  authors: [{ name: '16가지 성격유형 검사' }],
  creator: '16가지 성격유형 검사',
  publisher: '16가지 성격유형 검사',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://16personality-type-test.vercel.app',
    title: '16가지 성격유형 검사 - 무료 성격 테스트',
    description: '80개의 질문으로 알아보는 나의 성격 유형! 16가지 성격 유형별 특징, 추천 직업, 궁합을 확인하세요.',
    siteName: '16가지 성격유형 검사',
  },
  twitter: {
    card: 'summary_large_image',
    title: '16가지 성격유형 검사',
    description: '80개의 질문으로 알아보는 나의 성격 유형',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 나중에 Google Search Console, 네이버 서치어드바이저 인증 코드 추가
    // google: 'google-site-verification-code',
    // other: {
    //   'naver-site-verification': 'naver-verification-code',
    // },
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
