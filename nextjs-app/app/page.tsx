import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const stats = [
  { num: '30+', label: '년 제조 경력' },
  { num: '100%', label: '직접 제조' },
  { num: '4+', label: '제품 라인업' },
];

const products = [
  { no: '01', name: '비닐폴리백',  desc: '투명·유색 다양한 규격의 식품용 폴리백. 위생 인증 소재 사용.' },
  { no: '02', name: '식품 포장지', desc: 'OPP, PE, 나일론 등 냉동·냉장·상온 식품에 맞는 포장지.' },
  { no: '03', name: '인쇄 포장재', desc: '브랜드 로고·디자인 맞춤 인쇄. 색상·패턴 커스터마이징 가능.' },
  { no: '04', name: '지퍼백·진공', desc: '지퍼백, 진공 포장재 등 특수 목적 포장재 제조 및 공급.' },
];

const strengths = [
  { title: '직접 제조', desc: '이천 공장 직영으로 품질을 직접 관리합니다.' },
  { title: '식품 등급 소재', desc: '위생·안전 인증 소재만 사용합니다.' },
  { title: '맞춤 인쇄', desc: '브랜드 디자인 인쇄 제작이 가능합니다.' },
  { title: '신속 납품', desc: '소량·대량 모두 빠르게 납품합니다.' },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden">
        {/* 배경 그리드 패턴 */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-0">
          <div className="grid md:grid-cols-2 gap-16 items-end">

            {/* 왼쪽 텍스트 */}
            <div className="pb-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 border border-gray-900 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                식품 포장 전문 제조
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
                포장이<br />
                <span className="font-editorial text-5xl md:text-6xl font-normal">곧</span>{' '}
                브랜드
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
                동우CNPACK은 식품 포장지와 비닐폴리백을 전문으로 제조합니다.
                정밀한 공정과 검증된 소재로 고객의 제품을 완성합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:031-631-7284"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                  031-631-7284
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/inquiry"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors">
                  온라인 문의
                </Link>
              </div>
            </div>

            {/* 오른쪽 통계 블록 */}
            <div className="animate-fade-up delay-2">
              <div className="bg-gray-900 rounded-t-3xl p-10">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  {stats.map(({ num, label }) => (
                    <div key={label} className="text-center">
                      <div className="font-display text-4xl text-white mb-1">{num}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    서울 사무소 · 이천 공장 직영 운영<br />
                    <span className="text-gray-600">031-631-7284 · 010-9002-8222</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 강점 스트립 ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {strengths.map(({ title, desc }, i) => (
              <div key={title} className="py-8 px-6">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
                  0{i + 1}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 제품 목록 ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Products</p>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">주요 제품</h2>
            </div>
            <Link href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 hover:opacity-60 transition-opacity">
              전체 보기 <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {products.map(({ no, name, desc }) => (
              <div key={no}
                className="group flex items-start gap-8 py-7 hover:bg-gray-50 -mx-5 px-5 transition-colors rounded-xl cursor-pointer">
                <span className="font-display text-2xl text-gray-200 group-hover:text-gray-400 transition-colors shrink-0 mt-0.5">{no}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold text-gray-900 mb-1">{name}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{desc}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 배너 ── */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                지금 바로 문의하세요
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                견적, 납기, 맞춤 제작 문의 환영합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:031-631-7284"
                className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                전화 문의
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/inquiry"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 text-sm font-semibold px-6 py-3 rounded-full hover:border-gray-400 hover:text-white transition-colors">
                온라인 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
