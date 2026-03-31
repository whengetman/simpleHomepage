import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* 브랜드 */}
          <div>
            <div className="font-display text-2xl text-white mb-3">
              동우<span className="text-amber-400">CNPACK</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              식품 포장지 및 비닐폴리백 전문 제조.<br />
              품질과 신뢰로 고객과 함께합니다.
            </p>
            <p className="mt-4 text-xs text-slate-600">
              사업자등록번호 201-18-48413 · 대표자 조남휘
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">바로가기</div>
            <ul className="space-y-2 text-sm">
              {[
                ['/', '홈'],
                ['/company', '기업 소개'],
                ['/products', '제품 소개'],
                ['/contact', '연락처'],
                ['/maps', '오시는 길'],
                ['/inquiry', '문의하기'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">연락처</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <div>
                  <a href="tel:031-631-7284" className="text-white hover:text-amber-400 transition-colors font-medium">031-631-7284</a>
                  <div className="text-slate-600 text-xs mt-0.5">010-9002-8222</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <a href="mailto:skagnl6855@naver.com" className="hover:text-white transition-colors break-all">
                  skagnl6855@naver.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <div className="text-slate-500 text-xs leading-relaxed">
                  서울 중구 다산로 29길 45<br />
                  경기 이천시 진상미로 1857-10
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} 동우CNPACK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
