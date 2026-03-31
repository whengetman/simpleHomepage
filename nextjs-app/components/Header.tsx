'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/company', label: '기업 소개' },
  { href: '/products', label: '제품 소개' },
  { href: '/contact', label: '연락처' },
  { href: '/maps', label: '오시는 길' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-[0_2px_16px_rgba(0,0,0,.25)]">
      <div className="container">
        <div className="flex items-center justify-between py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bebas text-[clamp(22px,3vw,32px)] tracking-wide text-white" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="동우CNPACK 로고" width={34} height={34} className="h-[34px] w-auto" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
            동우<span className="text-accent">CNPACK</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-3.5 py-1.5 rounded-sm text-[13px] font-medium transition-colors',
                  pathname === href || pathname?.startsWith(href + '/')
                    ? 'bg-white/12 text-white'
                    : 'text-white/75 hover:bg-white/12 hover:text-white'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className={cn(
                'ml-1 px-3.5 py-1.5 rounded-sm text-[13px] font-bold bg-accent text-navy transition-colors hover:bg-accent-hover',
                pathname === '/inquiry' && 'bg-accent-hover'
              )}
            >
              견적/문의
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-1 cursor-pointer"
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="text-white" size={22} /> : <Menu className="text-white" size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="flex md:hidden flex-col pb-4 border-t border-white/10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-white/80 text-[15px] py-2.5 border-b border-white/[0.06] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setOpen(false)}
              className="text-white/80 text-[15px] py-2.5 border-b border-white/[0.06] hover:text-white transition-colors"
            >
              견적/문의
            </Link>
            <a href="tel:031-631-7284" className="text-accent font-bold text-[15px] pt-2.5">
              📞 031-631-7284
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
