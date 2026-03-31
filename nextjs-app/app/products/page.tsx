import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '제품 소개',
  description: '동우CNPACK 제품 소개 — 비닐폴리백, 식품 포장지, 인쇄 포장, 지퍼백 등 다양한 포장재를 제공합니다.',
  alternates: { canonical: 'https://dongwoocnpack.com/products' },
  openGraph: {
    url: 'https://dongwoocnpack.com/products',
    title: '제품 소개 | 동우CNPACK',
    description: '비닐폴리백, 식품 포장지, 인쇄 포장, 지퍼백 등 맞춤 포장재를 제조합니다.',
  },
}

const products = [
  {
    name: '식품 포장지',
    desc: '냉동·냉장·상온 식품에 맞는 소재별 포장지. 식품 안전 기준에 맞춘 소재 적용.',
    badges: ['OPP', 'CPP', 'PP', '나일론'],
    query: '식품 포장지',
  },
  {
    name: '비닐폴리백',
    desc: '다양한 규격의 투명·유색 폴리백. 규격·두께·색상·인쇄 커스텀 가능.',
    badges: ['LDPE', 'HDPE', 'LLDPE'],
    query: '비닐폴리백',
  },
  {
    name: '인쇄 포장재',
    desc: '브랜드 로고·디자인 인쇄. 고객 맞춤 색상·패턴 그라비아 인쇄 제작.',
    badges: ['단면/양면', '컬러 인쇄', '그라비아'],
    query: '인쇄 포장',
  },
  {
    name: '지퍼백',
    desc: '보관·유통 편의성을 높인 지퍼백. 평지퍼·스탠딩 등 다양한 형태 제작.',
    badges: ['평지퍼', '스탠딩', '투명/무지'],
    query: '지퍼백',
  },
  {
    name: '기타 포장재',
    desc: '롤백, 보냉백 등 특수 목적 포장재. 용도에 맞춘 소재·사양 추천.',
    badges: ['롤백', '보냉백', '주문제작'],
    query: '기타',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="제품 소개"
        description="규격·소재·인쇄 모두 맞춤 제작 가능합니다. 견적 문의는 아래 버튼을 이용해 주세요."
      />

      <main className="py-12 md:py-16">
        <div className="container space-y-14">

          {/* 카탈로그 이미지 */}
          <section className="animate-fade-up">
            <h2 className="text-xl font-bold text-navy mb-5 pb-2.5 border-b-2 border-accent">제품 카탈로그</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[1, 2].map((n) => (
                <a
                  key={n}
                  href={`/assets/img/product${n === 1 ? '' : '2'}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,.12)] hover:shadow-card-lg transition-shadow"
                >
                  <Image
                    src={`/assets/img/product${n === 1 ? '' : '2'}.jpg`}
                    alt={`동우CNPACK 제품 카탈로그 ${n}`}
                    width={800}
                    height={600}
                    className="w-full block"
                  />
                </a>
              ))}
            </div>
            <p className="text-[12px] text-muted mt-2.5">※ 이미지를 클릭하면 크게 볼 수 있습니다.</p>
            <div className="text-center mt-7">
              <Button variant="default" size="lg" asChild>
                <Link href="/inquiry">견적 문의하기</Link>
              </Button>
            </div>
          </section>

          {/* 제품 카드 */}
          <section className="animate-fade-up [animation-delay:100ms]">
            <div className="section-label">Product Line-up</div>
            <div className="section-title">제품 라인업</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-border rounded-[14px] shadow-card p-6 flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all"
                >
                  <div className="w-14 h-14 bg-off rounded-[14px] flex items-center justify-center text-3xl mb-3.5">
                    📦
                  </div>
                  <div className="text-[15px] font-bold text-navy mb-1.5">{p.name}</div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.badges.map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                  </div>
                  <div className="text-[13px] text-muted leading-relaxed flex-1">{p.desc}</div>
                  <div className="mt-3.5">
                    <Button variant="default" size="sm" asChild>
                      <Link href={`/inquiry?product=${encodeURIComponent(p.query)}`}>견적/문의</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-muted mt-3.5">※ 실제 제품 사진을 제공해 주시면 교체해 드립니다.</p>
          </section>

        </div>
      </main>
    </>
  )
}
