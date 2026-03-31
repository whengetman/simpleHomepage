import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Phone } from 'lucide-react';

const products = [
  { name: '비닐폴리백',  desc: '식품용 위생 인증 소재',  img: '/assets/img/bag-making-1.jpg',    span: 'md:col-span-1' },
  { name: '식품 포장지', desc: 'OPP·PE·나일론 포장지',  img: '/assets/img/gravure-press-1.jpg', span: 'md:col-span-1' },
  { name: '인쇄 포장재', desc: '브랜드 맞춤 인쇄 제작',  img: '/assets/img/gravure-press-2.jpg', span: 'md:col-span-1' },
  { name: '지퍼백·진공', desc: '특수 목적 포장재 공급',  img: '/assets/img/product.jpg',         span: 'md:col-span-1' },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── 매거진 헤더 라인 ── */}
      <div className="border-b-2 border-gray-900 px-5 sm:px-10 py-2 flex items-center justify-between">
        <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Food Packaging Manufacturer</span>
        <span className="text-[10px] text-gray-400">Since 1990 · 이천 공장 직영</span>
      </div>

      {/* ── HERO: 비대칭 매거진 그리드 ── */}
      <section className="px-5 sm:px-10 py-8 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* 왼쪽 메인 카드 — 풀블랙 */}
          <div className="md:col-span-5 bg-gray-900 rounded-2xl overflow-hidden relative flex flex-col justify-between p-8 min-h-[420px]">
            <div className="absolute inset-0">
              <Image src="/assets/img/gravure-press-1.jpg" alt="제조 현장" fill className="object-cover opacity-20" />
            </div>
            <div className="relative z-10">
              <Badge variant="outline" className="border-white/30 text-white/60 text-[10px] tracking-widest uppercase mb-6">
                동우CNPACK
              </Badge>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-6">
                포장이<br/>곧<br/>브랜드
              </h1>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
                30년 경력의 식품 포장 전문 제조업체. 이천 공장 직영으로 품질을 책임집니다.
              </p>
              <div className="flex gap-3">
                <Button asChild className="rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm px-6">
                  <a href="tel:031-631-7284"><Phone className="w-3.5 h-3.5 mr-1.5" />문의하기</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 text-sm px-6">
                  <Link href="/products">제품 보기</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 오른쪽 그리드 */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">

            {/* 상단 와이드 — 통계 */}
            <div className="col-span-2 border border-gray-100 rounded-2xl p-6 flex items-center justify-between bg-gray-50">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">경력</div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">30<span className="text-gray-300">+</span></div>
                <div className="text-xs text-gray-400 mt-1">년 식품 포장 제조</div>
              </div>
              <div className="w-px h-16 bg-gray-200" />
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">운영</div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">직영</div>
                <div className="text-xs text-gray-400 mt-1">이천 공장</div>
              </div>
              <div className="w-px h-16 bg-gray-200" />
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">제품군</div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">4<span className="text-gray-300">+</span></div>
                <div className="text-xs text-gray-400 mt-1">라인업</div>
              </div>
            </div>

            {/* 제품 카드 2개 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[180px] group">
              <Image src="/assets/img/bag-making-1.jpg" alt="비닐폴리백" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-[9px] font-bold tracking-widest text-white/60 uppercase mb-1">Product 01</div>
                <div className="text-base font-black text-white">비닐폴리백</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[180px] group">
              <Image src="/assets/img/gravure-press-2.jpg" alt="식품 포장지" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-[9px] font-bold tracking-widest text-white/60 uppercase mb-1">Product 02</div>
                <div className="text-base font-black text-white">식품 포장지</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 매거진 섹션 타이틀 ── */}
      <section className="px-5 sm:px-10 py-14">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Products</div>
          <div className="flex-1 h-px bg-gray-200" />
          <Link href="/products" className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:opacity-50 transition-opacity">
            전체 보기 <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 제품 가로 스크롤 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(({ name, desc, img }) => (
            <div key={name} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                <Image src={img} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-0.5">{name}</div>
              <div className="text-xs text-gray-400">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 강점 매거진 레이아웃 ── */}
      <section className="border-t border-gray-100 px-5 sm:px-10 py-14 bg-gray-50">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Why Us</div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {[
            { no: '01', title: '직접 제조',    desc: '이천 공장 직영 운영으로 품질을 처음부터 끝까지 책임집니다.' },
            { no: '02', title: '식품 등급',    desc: '식품의약품안전처 기준을 충족하는 위생 소재만 사용합니다.' },
            { no: '03', title: '맞춤 제작',    desc: '규격, 색상, 인쇄 디자인까지 고객 요구에 맞게 제작합니다.' },
            { no: '04', title: '신속 납품',    desc: '소량 주문부터 대량 생산까지 빠른 납기를 약속합니다.' },
          ].map(({ no, title, desc }) => (
            <div key={no} className="md:px-8 py-6 first:pl-0 last:pr-0">
              <div className="text-[10px] font-black text-gray-300 tracking-widest mb-3">{no}</div>
              <div className="text-base font-black text-gray-900 mb-2">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t-2 border-gray-900 px-5 sm:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-[10px] font-black tracking-[5px] uppercase text-gray-400 mb-4">Contact Us</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-gray-900 leading-tight">
            지금 바로<br/>문의하세요
          </h2>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Button asChild size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-10">
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-gray-200 text-gray-700 hover:border-gray-900 px-10">
            <Link href="/inquiry">온라인 문의</Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
