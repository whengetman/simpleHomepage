import Link from 'next/link';
import { ArrowRight, Package, Printer, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  { icon: ShieldCheck, title: '식품 등급 소재', desc: '위생·안전 인증 소재만 사용합니다' },
  { icon: Package,     title: '직접 제조',     desc: '이천 공장 직영으로 품질을 관리합니다' },
  { icon: Printer,     title: '맞춤 인쇄',     desc: '브랜드 디자인 인쇄 제작이 가능합니다' },
  { icon: Truck,       title: '신속 납품',     desc: '소량·대량 모두 빠르게 납품합니다' },
];

const products = [
  { name: '비닐폴리백',  desc: '투명·유색 다양한 규격의 식품용 폴리백',   tag: '베스트' },
  { name: '식품 포장지', desc: 'OPP·PE·나일론 등 용도별 맞춤 포장지',    tag: null },
  { name: '인쇄 포장재', desc: '로고·디자인 인쇄 맞춤 제작',             tag: '인기' },
  { name: '지퍼백·진공', desc: '특수 목적용 포장재 제조 및 공급',         tag: null },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white">
        {/* 배경 장식 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-bl-[80px]" />
          <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full bg-amber-50 blur-3xl opacity-60" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-xl animate-fade-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              식품 포장 전문 제조
            </Badge>

            <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-tight mb-6">
              포장이 곧<br />
              <span className="text-amber-500 italic">브랜드</span>입니다
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              동우CNPACK은 식품 포장지와 비닐폴리백을 전문으로 제조합니다.
              고품질 소재와 정밀한 공정으로 고객의 제품을 더욱 빛나게 합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="tel:031-631-7284">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-700 text-white rounded-full px-6 gap-2">
                  지금 문의하기
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/products">
                <Button size="lg" variant="outline" className="rounded-full px-6 gap-2 border-slate-200 text-slate-700">
                  제품 보기
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 통계 뱃지 */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 animate-fade-up animate-fade-up-delay-3">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 px-6 py-4 text-center">
              <div className="font-display text-4xl text-slate-900">30<span className="text-amber-500">+</span></div>
              <div className="text-xs text-slate-500 mt-1">년 제조 경력</div>
            </div>
            <div className="bg-slate-900 rounded-2xl px-6 py-4 text-center">
              <div className="font-display text-4xl text-white">100<span className="text-amber-400">%</span></div>
              <div className="text-xs text-slate-400 mt-1">직접 제조</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700 rounded-2xl overflow-hidden">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900 px-6 py-7">
                <Icon className="w-6 h-6 text-amber-400 mb-3" />
                <div className="text-white text-sm font-semibold mb-1">{title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Products</p>
              <h2 className="font-display text-3xl md:text-4xl text-slate-900">주요 제품</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors">
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(({ name, desc, tag }) => (
              <div
                key={name}
                className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                {tag && (
                  <Badge className="absolute top-4 right-4 bg-amber-100 text-amber-700 border-amber-200 rounded-full text-xs">
                    {tag}
                  </Badge>
                )}
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-amber-50 transition-colors flex items-center justify-center mb-4">
                  <Package className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-50 section-divider">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl text-slate-900 mb-4">
            지금 바로 문의하세요
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            제품 견적, 납기, 맞춤 제작 등 어떤 문의도 환영합니다.<br />
            친절하게 안내해드리겠습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:031-631-7284">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-700 text-white rounded-full px-8">
                031-631-7284 전화하기
              </Button>
            </a>
            <Link href="/inquiry">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-200 text-slate-700">
                온라인 문의
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
