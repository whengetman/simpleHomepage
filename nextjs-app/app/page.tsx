import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '동우CNPACK | 식품 포장지·비닐폴리백 전문 제조',
  description: '동우CNPACK은 30년 경력의 식품 포장지 및 비닐폴리백 전문 제조업체입니다. 고품질 포장재를 합리적인 가격으로 공급합니다.',
  alternates: { canonical: 'https://dongwoocnpack.com/' },
}

const features = [
  { icon: '🏭', title: '직접 제조', sub: '이천 공장 직영 운영' },
  { icon: '🔬', title: '품질 관리', sub: '식품 등급 소재 사용' },
  { icon: '📦', title: '맞춤 제작', sub: '규격·디자인 커스터마이징' },
  { icon: '🚚', title: '신속 납품', sub: '소량·대량 모두 대응' },
]

const productImages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-[#204080] text-white py-[72px] pb-16">
        {/* decorative radials */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 90% 20%, rgba(29,95,173,.35) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 90%, rgba(232,160,32,.12) 0%, transparent 55%)' }} />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="page-hero-eyebrow mb-4">식품 포장 전문 제조</div>
              <h1 className="text-[clamp(32px,5vw,54px)] font-black leading-[1.2] tracking-tight text-white mb-4">
                포장이 곧<br />
                <em className="text-accent not-italic">브랜드</em>입니다
              </h1>
              <p className="text-white/75 text-[16px] leading-[1.7] max-w-[480px] mb-7">
                동우CNPACK은 식품 포장지와 비닐폴리백을 전문으로 제조합니다.<br />
                고품질 소재와 정밀한 공정으로 고객의 제품을 더욱 빛나게 합니다.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <Button variant="accent" size="hero" asChild>
                  <Link href="/inquiry">📋 견적 문의하기</Link>
                </Button>
                <Button variant="hero-outline" size="hero" asChild>
                  <a href="#products">제품 보기 →</a>
                </Button>
              </div>
            </div>

            {/* 30+ badge */}
            <div className="hidden sm:flex flex-col items-center justify-center bg-white/7 border border-white/15 rounded-2xl p-6 min-w-[170px] text-center">
              <div className="font-bebas text-[52px] text-accent leading-none">30+</div>
              <div className="text-[13px] text-white/70 mt-1">년 제조 경력</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ───────────────────── */}
      <div className="bg-navy border-t border-white/8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-center gap-3.5 py-5 px-6 ${i < features.length - 1 ? 'border-r border-white/8' : ''}`}
              >
                <div className="w-10 h-10 rounded-[10px] bg-brand-blue/30 flex items-center justify-center text-xl shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">{f.title}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTS SECTION ─────────────────── */}
      <main className="py-12 md:py-16">
        <div className="container">
          <section id="products" className="animate-fade-up">
            <div className="section-label">Products</div>
            <div className="section-title">주요 제품</div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {productImages.map((n) => (
                <a
                  key={n}
                  href={`/assets/img/product${n}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[10px] overflow-hidden shadow-card hover:shadow-card-lg transition-shadow"
                >
                  <Image
                    src={`/assets/img/product${n}.jpg`}
                    alt={`제품 ${n}`}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover block"
                  />
                </a>
              ))}
            </div>

            <div className="mt-5 text-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/products">전체 제품 보기 →</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
