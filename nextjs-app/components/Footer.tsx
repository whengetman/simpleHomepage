import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-9">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <div className="font-bebas text-[26px] text-white tracking-wide mb-2">
              동우<span className="text-accent">CNPACK</span>
            </div>
            <div className="text-[12px] leading-[1.9]">
              <strong className="text-white/90">사업자등록번호</strong>&nbsp;201-18-48413&nbsp;&nbsp;
              <strong className="text-white/90">대표자</strong>&nbsp;조남휘<br />
              <strong className="text-white/90">사무실</strong>&nbsp;서울특별시 중구 다산로 29길 45<br />
              <strong className="text-white/90">공장</strong>&nbsp;경기도 이천시 진상미로 1857-10
            </div>
          </div>
          <div className="text-[12px] sm:text-right">
            <div className="text-[14px] text-white/90 font-bold mb-2">문의하기</div>
            <div className="mb-1">
              <a href="tel:031-631-7284" className="text-accent font-bold text-[16px] hover:text-accent-hover transition-colors">
                031-631-7284
              </a>
            </div>
            <div className="mb-0.5">
              <a href="mailto:korea8222@hanmail.net" className="text-white/60 hover:text-white/90 transition-colors">
                korea8222@hanmail.net
              </a>
            </div>
            <div>
              <a href="mailto:skagnl6855@naver.com" className="text-white/60 hover:text-white/90 transition-colors">
                skagnl6855@naver.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 text-[11px] text-center">
          © 2026 동우CNPACK. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
