'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/company',  label: '기업 소개' },
  { href: '/products', label: '제품 소개' },
  { href: '/contact',  label: '연락처' },
  { href: '/maps',     label: '오시는 길' },
  { href: '/inquiry',  label: '문의하기' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={cn(
      'sticky top-0 z-50 bg-white transition-all duration-300',
      scrolled ? 'border-b border-gray-900/10 shadow-sm' : 'border-b border-transparent'
    )}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="h-7 w-auto grayscale" onError={e => (e.currentTarget.style.display='none')} />
            <span className="font-display text-2xl text-gray-900 tracking-wider">
              동우CNPACK
            </span>
          </Link>

          {/* 데스크탑 네비 */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                )}
              >{link.label}</Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="tel:031-631-7284"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-700 transition-colors">
              031-631-7284
            </a>
          </div>

          {/* 모바일 */}
          <button className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setOpen(!open)} aria-label="메뉴">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                {link.label}
              </Link>
            ))}
            <a href="tel:031-631-7284"
              className="mt-2 text-center bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-full">
              031-631-7284
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
