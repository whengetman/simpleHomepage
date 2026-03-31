import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* 브랜드 */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-white tracking-wider mb-4">동우CNPACK</div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              식품 포장지 및 비닐폴리백 전문 제조업체.<br />
              30년 경력의 이천 공장 직영으로<br />
              품질과 신뢰를 약속드립니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">메뉴</div>
            <ul className="space-y-2.5 text-sm">
              {[['/', '홈'], ['/company', '기업 소개'], ['/products', '제품 소개'], ['/contact', '연락처'], ['/maps', '오시는 길'], ['/inquiry', '문의하기']].map(([href, label]) => (
                <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">연락처</div>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-xs text-gray-600 mb-1">전화</div>
                <a href="tel:031-631-7284" className="text-white font-semibold hover:text-gray-300 transition-colors">031-631-7284</a>
                <div className="text-gray-600 text-xs mt-0.5">010-9002-8222</div>
              </li>
              <li>
                <div className="text-xs text-gray-600 mb-1">이메일</div>
                <a href="mailto:skagnl6855@naver.com" className="hover:text-white transition-colors text-xs break-all">skagnl6855@naver.com</a>
              </li>
              <li>
                <div className="text-xs text-gray-600 mb-1">팩스</div>
                <span className="text-xs">031-631-7287</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} 동우CNPACK. All rights reserved.</span>
          <span>사업자등록번호 201-18-48413 · 대표자 조남휘</span>
        </div>
      </div>
    </footer>
  );
}
