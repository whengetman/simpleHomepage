'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/company',  label: '기업소개' },
  { href: '/products', label: '제품소개' },
  { href: '/contact',  label: '연락처' },
  { href: '/maps',     label: '오시는 길' },
  { href: '/inquiry',  label: '문의하기' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80' : 'bg-white border-b border-gray-200')}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-bold text-lg text-gray-900 tracking-tight">동우CNPACK</Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className={cn('px-4 py-1.5 text-sm rounded-full transition-colors',
                pathname === link.href ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900')}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full bg-gray-900 hover:bg-gray-700 text-white text-xs px-4">
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
        </div>
        <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="py-2.5 text-sm text-gray-700 border-b border-gray-50 last:border-0">
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 rounded-full bg-gray-900 text-white">
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
        </div>
      )}
    </header>
  );
}
