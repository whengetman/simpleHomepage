import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Phone } from 'lucide-react';

// ── 이미지 분류 ──────────────────────────────────────────────
// 공장/제조 현장 사진
//   gravure-press-1.jpg  → 그라비아 인쇄 프레스 (히어로 배경)
//   gravure-press-2.jpg  → 그라비아 인쇄 현장 2 (제조 현장 섹션)
//   bag-making-1.jpg     → 제대(봉지 제조) 공정   (제조 현장 섹션)
//
// 대형 제품/카탈로그 이미지 (1.2–1.3 MB)
//   product.jpg, product2.jpg → 피처 와이드 카드
//
// 개별 제품 사진 (400–580 KB × 10장)
//   product3 ~ product12 → 제품 카드 그리드

const products = [
  { img: '/assets/img/product3.jpg',  name: '비닐폴리백',    desc: '투명·유색 다양한 규격의 식품용 폴리백' },
  { img: '/assets/img/product4.jpg',  name: '식품 포장지',   desc: 'OPP·PE·나일론 냉동·냉장·상온용' },
  { img: '/assets/img/product5.jpg',  name: '인쇄 포장재',   desc: '브랜드 로고·패턴 맞춤 인쇄' },
  { img: '/assets/img/product6.jpg',  name: '지퍼백',        desc: '재밀봉 가능한 지퍼식 포장재' },
  { img: '/assets/img/product7.jpg',  name: '진공 포장재',   desc: '신선도 유지 진공 포장재' },
  { img: '/assets/img/product8.jpg',  name: '냉동용 포장재', desc: '냉동·냉장 환경 최적화 소재' },
  { img: '/assets/img/product9.jpg',  name: 'PE 포장재',     desc: '유연하고 내구성 있는 PE 소재' },
  { img: '/assets/img/product10.jpg', name: '맞춤 포장재',   desc: '규격·소재 완전 커스터마이징' },
  { img: '/assets/img/product11.jpg', name: '특수 포장재',   desc: '특수 목적 대응 포장재' },
  { img: '/assets/img/product12.jpg', name: '대용량 포장재', desc: '대량 납품 전용 포장재' },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── 매거진 헤더 라인 ── */}
      <div className="border-b-2 border-gray-900 px-5 sm:px-10 py-2 flex items-center justify-between">
        <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">
          Food Packaging Manufacturer
        </span>
        <span className="text-[10px] text-gray-400">Since 1990 · 이천 공장 직영</span>
      </div>

      {/* ── HERO: gravure-press-1 배경 ── */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: '88vh' }}>
        <Image
          src="/assets/img/gravure-press-1.jpg"
          alt="그라비아 인쇄 프레스 제조 현장"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end h-full pb-20 pt-36">
          <Badge
            variant="outline"
            className="w-fit mb-6 border-white/30 text-white/60 text-[10px] tracking-[4px] uppercase"
          >
            식품 포장 전문 제조
          </Badge>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 drop-shadow-lg">
            포장이<br />곧<br />브랜드
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            30년 경력의 식품 포장지·비닐폴리백 전문 제조업체.
            이천 공장 직영으로 처음부터 끝까지 품질을 책임집니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold px-8"
            >
              <a href="tel:031-631-7284">
                <Phone className="w-4 h-4 mr-2" />031-631-7284
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 text-white bg-white/15 hover:bg-white/25 px-8"
            >
              <Link href="/products">제품 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 제조 현장 2컬럼: bag-making + gravure-press-2 ── */}
      <section className="px-5 sm:px-10 py-10 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Manufacturing</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 제대 공정 */}
          <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: '340px' }}>
            <Image
              src="/assets/img/bag-making-1.jpg"
              alt="제대 공정 — 봉지 제조 현장"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="text-[9px] font-bold tracking-widest text-white/50 uppercase mb-2">
                제대 공정
              </div>
              <div className="text-2xl font-black text-white leading-tight">
                봉지 제조 현장
              </div>
              <p className="text-white/60 text-xs mt-2 leading-relaxed max-w-xs">
                이천 공장 직영으로 전 공정을 직접 관리합니다.
              </p>
            </div>
          </div>
          {/* 그라비아 인쇄 */}
          <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: '340px' }}>
            <Image
              src="/assets/img/gravure-press-2.jpg"
              alt="그라비아 인쇄 프레스 현장"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="text-[9px] font-bold tracking-widest text-white/50 uppercase mb-2">
                그라비아 인쇄
              </div>
              <div className="text-2xl font-black text-white leading-tight">
                인쇄 프레스 현장
              </div>
              <p className="text-white/60 text-xs mt-2 leading-relaxed max-w-xs">
                선명하고 정확한 색상의 브랜드 맞춤 인쇄.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 피처 와이드 카드: product.jpg + product2.jpg ── */}
      <section className="px-5 sm:px-10 py-10 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Featured</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden group aspect-[16/9]">
            <Image
              src="/assets/img/product.jpg"
              alt="동우CNPACK 제품 카탈로그"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <Badge variant="outline" className="border-white/30 text-white/70 text-[9px] tracking-widest uppercase mb-2">
                Catalog
              </Badge>
              <div className="text-xl font-black text-white">식품 포장재 전 라인업</div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group aspect-[16/9]">
            <Image
              src="/assets/img/product2.jpg"
              alt="동우CNPACK 대표 제품"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <Badge variant="outline" className="border-white/30 text-white/70 text-[9px] tracking-widest uppercase mb-2">
                Premium
              </Badge>
              <div className="text-xl font-black text-white">대표 제품 라인</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 제품 그리드: product3 ~ product12 (10개) ── */}
      <section className="px-5 sm:px-10 py-14">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Products</span>
          <div className="flex-1 h-px bg-gray-200" />
          <Link
            href="/products"
            className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:opacity-50 transition-opacity"
          >
            전체 보기 <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map(({ img, name, desc }) => (
            <Card
              key={name}
              className="group overflow-hidden border-gray-100 shadow-none hover:shadow-md transition-shadow rounded-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <div className="font-bold text-gray-900 text-sm mb-1">{name}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 강점 ── */}
      <section className="border-t border-gray-100 px-5 sm:px-10 py-14 bg-gray-50">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Why Us</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {[
            { no: '01', title: '직접 제조',  desc: '이천 공장 직영 운영으로 품질을 처음부터 끝까지 책임집니다.' },
            { no: '02', title: '식품 등급',  desc: '식품의약품안전처 기준을 충족하는 위생 소재만 사용합니다.' },
            { no: '03', title: '맞춤 제작',  desc: '규격, 색상, 인쇄 디자인까지 고객 요구에 맞게 제작합니다.' },
            { no: '04', title: '신속 납품',  desc: '소량 주문부터 대량 생산까지 빠른 납기를 약속합니다.' },
          ].map(({ no, title, desc }) => (
            <div key={no} className="md:px-8 py-7 first:md:pl-0 last:md:pr-0">
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
            지금 바로<br />문의하세요
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            견적, 납기, 맞춤 제작 등 모든 문의를 환영합니다.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-10"
          >
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-gray-200 text-gray-700 hover:border-gray-900 px-10"
          >
            <Link href="/inquiry">온라인 문의</Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
