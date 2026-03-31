import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, ChevronRight } from 'lucide-react';

const products = [
  { name: '비닐폴리백', desc: '투명·유색 다양한 규격의 식품용 폴리백', img: '/assets/img/bag-making-1.jpg' },
  { name: '식품 포장지', desc: 'OPP·PE·나일론 냉동·냉장·상온용 포장지', img: '/assets/img/gravure-press-1.jpg' },
  { name: '인쇄 포장재', desc: '브랜드 로고·디자인 맞춤 인쇄 포장재', img: '/assets/img/gravure-press-2.jpg' },
];

const strengths = [
  { title: '직접 제조', desc: '이천 공장 직영 운영으로 품질을 처음부터 끝까지 책임집니다.' },
  { title: '식품 등급 소재', desc: '식품의약품안전처 기준을 충족하는 소재만 사용합니다.' },
  { title: '맞춤 제작', desc: '규격, 색상, 인쇄 디자인까지 고객 요구에 맞게 제작합니다.' },
  { title: '신속 납품', desc: '소량 주문부터 대량 생산까지 빠른 납기를 약속합니다.' },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: '92vh' }}>
        <Image src="/assets/img/gravure-press-1.jpg" alt="동우CNPACK 제조 현장"
          fill className="object-cover opacity-40" priority />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-end h-full pb-20 pt-32">
          <Badge variant="outline" className="w-fit mb-6 text-white border-white/40 bg-white/10 text-xs tracking-widest uppercase">
            식품 포장 전문 제조
          </Badge>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
            포장이<br />곧 브랜드
          </h1>
          <p className="text-lg text-white/70 max-w-md mb-10 leading-relaxed">
            동우CNPACK은 30년 경력의 식품 포장지·비닐폴리백 전문 제조업체입니다.
            이천 공장 직영으로 품질을 보장합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold px-8">
              <a href="tel:031-631-7284">031-631-7284 <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10 px-8">
              <Link href="/products">제품 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 제품 쇼케이스 ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Products</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-gray-900">주요 제품</h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex gap-1 text-gray-500 hover:text-gray-900">
            <Link href="/products">전체 보기 <ChevronRight className="w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(({ name, desc, img }) => (
            <Card key={name} className="group overflow-hidden border-0 bg-gray-50 hover:bg-gray-100 transition-colors rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-3">
                <Image src={img} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="px-5 pb-6 pt-3">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* ── 강점 ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Why us</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-gray-900">동우CNPACK을<br />선택하는 이유</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strengths.map(({ title, desc }) => (
            <Card key={title} className="border border-gray-100 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <CardContent className="p-7">
                <h3 className="font-bold text-gray-900 text-base mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-6 text-white/60 border-white/20 text-xs tracking-widest uppercase">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
            지금 바로<br />문의하세요
          </h2>
          <p className="text-white/50 mb-10 text-base max-w-sm mx-auto leading-relaxed">
            견적, 납기, 맞춤 제작 등 어떤 문의도 환영합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold px-10">
              <a href="tel:031-631-7284">031-631-7284</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-10">
              <Link href="/inquiry">온라인 문의</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
