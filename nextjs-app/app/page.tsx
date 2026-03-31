import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── 매거진 헤더 라인 ── */}
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Dongwoo</span>
        <div className="flex gap-6">
          <Link href="/products" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">제품</Link>
          <Link href="/contact"  className="text-xs text-gray-400 hover:text-gray-900 transition-colors">연락처</Link>
        </div>
      </div>

      {/* ── 메인 그리드 ── */}
      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">

          {/* 왼쪽 — 블랙 히어로 */}
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[320px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
                포장이<br/>곧<br/>브랜드
              </h1>
            </div>
          </div>

          {/* 오른쪽 — 정보 카드들 */}
          <div className="md:col-span-7 flex flex-col divide-y divide-gray-100">

            {/* Since 1990 + 비닐폴리백 */}
            <div className="p-6 flex flex-col gap-1 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gray-400">Since 1990</span>
              <span className="text-lg font-black text-gray-900">비닐폴리백</span>
              <span className="text-xs text-gray-400">투명·유색 다양한 규격의 식품용 폴리백</span>
            </div>

            {/* Products + 식품포장지 */}
            <div className="p-6 flex flex-col gap-1 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gray-400">Products</span>
              <span className="text-lg font-black text-gray-900">식품포장지</span>
              <span className="text-xs text-gray-400">OPP·PE·나일론 냉동·냉장·상온용 포장지</span>
            </div>

            {/* 인쇄 포장재 */}
            <div className="p-6 flex flex-col gap-1 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gray-400">Products</span>
              <span className="text-lg font-black text-gray-900">인쇄 포장재</span>
              <span className="text-xs text-gray-400">브랜드 로고·디자인 맞춤 인쇄 제작</span>
            </div>

            {/* 하단 — 주소 + 문의 버튼 */}
            <div className="p-6 flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-400">서울·이천 공장 직영</span>
              <Button asChild size="sm" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 text-xs px-5">
                <a href="tel:031-631-7284">문의하기</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── 제품 이미지 그리드 ── */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-black tracking-[4px] uppercase text-gray-400">Products</span>
          <div className="flex-1 h-px bg-gray-100" />
          <Link href="/products" className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:opacity-50 transition-opacity">
            전체 보기 <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { name: '비닐폴리백',  img: '/assets/img/product3.jpg' },
            { name: '식품포장지', img: '/assets/img/product4.jpg' },
            { name: '인쇄포장재', img: '/assets/img/product5.jpg' },
            { name: '지퍼백',     img: '/assets/img/product6.jpg' },
            { name: '진공포장',   img: '/assets/img/product7.jpg' },
            { name: '롤백',       img: '/assets/img/product8.jpg' },
            { name: '합지포장',   img: '/assets/img/product9.jpg' },
            { name: '특수포장',   img: '/assets/img/product10.jpg' },
          ].map(({ name, img }) => (
            <div key={name} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2">
                <Image src={img} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold text-gray-900">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── 강점 ── */}
      <section className="px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { no: '01', title: '직접 제조',    sub: '이천 공장 직영' },
            { no: '02', title: '식품 등급',    sub: '위생·안전 인증' },
            { no: '03', title: '맞춤 제작',    sub: '규격·인쇄 커스텀' },
            { no: '04', title: '신속 납품',    sub: '소량·대량 대응' },
          ].map(({ no, title, sub }) => (
            <div key={no} className="px-6 py-6 first:pl-0 last:pr-0">
              <div className="text-[10px] font-black text-gray-200 tracking-widest mb-2">{no}</div>
              <div className="text-sm font-black text-gray-900 mb-1">{title}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t-2 border-gray-900 px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-[10px] font-black tracking-[4px] uppercase text-gray-400 mb-3">Contact Us</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-gray-900">지금 바로 문의하세요</h2>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button asChild size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-8">
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-gray-200 text-gray-700 hover:border-gray-900 px-8">
            <Link href="/inquiry">온라인 문의</Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
