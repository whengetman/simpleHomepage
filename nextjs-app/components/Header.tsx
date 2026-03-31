'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/',         label: '홈' },
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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        scrolled ? 'shadow-sm border-b border-border' : 'border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="동우CNPACK" className="h-8 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <span className="font-display text-xl text-slate-900 tracking-tight">
              동우<span className="text-amber-500">CNPACK</span>
            </span>
          </Link>

          {/* 데스크탑 네비 */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 전화 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:031-631-7284">
              <Button size="sm" className="gap-2 bg-slate-900 hover:bg-slate-700 text-white rounded-full px-4">
                <Phone className="w-3.5 h-3.5" />
                031-631-7284
              </Button>
            </a>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="메뉴"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:031-631-7284" className="mt-2">
              <Button size="sm" className="w-full gap-2 bg-slate-900 hover:bg-slate-700 text-white rounded-full">
                <Phone className="w-3.5 h-3.5" />
                031-631-7284
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
