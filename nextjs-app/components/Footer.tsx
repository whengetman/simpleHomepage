import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-bold text-gray-900 mb-3">동우CNPACK</div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              식품 포장지 및 비닐폴리백 전문 제조.<br />
              이천 공장 직영 운영으로 품질과 신뢰를 드립니다.
            </p>
            <p className="text-xs text-gray-400 mt-4">사업자등록번호 201-18-48413 · 대표자 조남휘</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">메뉴</p>
            <ul className="space-y-2.5">
              {[['/', '홈'], ['/company', '기업소개'], ['/products', '제품소개'], ['/contact', '연락처'], ['/maps', '오시는 길'], ['/inquiry', '문의하기']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">연락처</p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="tel:031-631-7284" className="text-gray-900 font-semibold hover:text-gray-600">031-631-7284</a></li>
              <li>010-9002-8222</li>
              <li>Fax 031-631-7287</li>
              <li><a href="mailto:skagnl6855@naver.com" className="hover:text-gray-900 break-all transition-colors">skagnl6855@naver.com</a></li>
            </ul>
          </div>
        </div>
        <Separator className="mb-6" />
        <p className="text-xs text-gray-400 text-center">© {new Date().getFullYear()} 동우CNPACK. All rights reserved.</p>
      </div>
    </footer>
  );
}
