'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems: NavItem[] = [
    { name: '점심추천', href: 'https://lunchmenu-xi.vercel.app/', external: true },
    { name: '검사하기', href: '/test' },
    { name: '성격 유형', href: '/types' },
    { name: '연애 스타일', href: '/love' },
    { name: '유명인', href: '/celebrities' },
    { name: '직업 가이드', href: '/careers' },
    { name: '궁합', href: '/compatibility' },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
          16가지 성격유형 검사
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 xl:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-purple-600 whitespace-nowrap text-gray-700"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-purple-600 font-bold border-b-2 border-purple-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium transition-colors hover:text-purple-600 text-gray-700"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors hover:text-purple-600 ${
                      isActive(item.href)
                        ? 'text-purple-600 font-bold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
