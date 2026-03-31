import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '기업 소개',
  description: '동우CNPACK 기업 소개 — 30년 경력의 식품 포장지·비닐폴리백 전문 제조업체.',
  alternates: { canonical: 'https://dongwoocnpack.com/company' },
  openGraph: {
    url: 'https://dongwoocnpack.com/company',
    title: '기업 소개 | 동우CNPACK',
    description: '30년 경력의 식품 포장지·비닐폴리백 전문 제조업체 동우CNPACK을 소개합니다.',
  },
}

const facilities = [
  { src: '/assets/img/gravure-press-1.jpg', alt: '그라비아 인쇄기 전경', caption: '그라비아 인쇄기 (전경)' },
  { src: '/assets/img/bag-making-1.jpg', alt: '가공기(봉투 제작) 라인', caption: '가공기 (봉투 제작 라인)' },
  { src: '/assets/img/gravure-press-2.jpg', alt: '그라비아 인쇄기 근접', caption: '그라비아 인쇄기 (근접)' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="기업 소개" description="30년 경력의 식품 포장 전문 제조업체 동우CNPACK입니다." />

      <main className="py-12 md:py-16">
        <div className="container space-y-12">

          {/* About */}
          <section className="animate-fade-up">
            <div className="section-label">About Us</div>
            <div className="section-title">동우CNPACK 소개</div>
            <Card>
              <CardContent className="space-y-2 text-[15px] leading-[1.7]">
                <p>동우CNPACK은 식품 포장지 및 비닐폴리백 전문 제조 기업입니다.</p>
                <p>30년 이상의 제조 경험을 바탕으로 고품질 소재와 정밀한 공정을 통해 고객의 제품을 더욱 돋보이게 하는 포장재를 공급합니다.</p>
                <p>서울 사무소와 경기도 이천 직영 공장을 운영하며, 소량·대량 주문 모두 신속하게 대응합니다.</p>
                <p className="text-[12px] text-muted mt-3">※ 상세 기업 정보(인증서, 설비 현황 등)가 있으시면 추가해 드립니다.</p>
              </CardContent>
            </Card>
          </section>

          {/* Facilities */}
          <section className="animate-fade-up [animation-delay:100ms]">
            <div className="section-label">Facilities</div>
            <div className="section-title">설비 소개</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {facilities.map((f) => (
                <figure
                  key={f.src}
                  className="bg-white border border-border rounded-[14px] shadow-card overflow-hidden m-0"
                >
                  <div className="relative w-full h-[220px] bg-off">
                    <Image src={f.src} alt={f.alt} fill className="object-cover" loading="lazy" />
                  </div>
                  <figcaption className="flex items-center px-3.5 py-3 text-[13px] text-ink">
                    {f.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-[12px] text-muted mt-2.5">※ 실제 설비 사진을 제공해 주시면 교체해 드립니다.</p>
          </section>

        </div>
      </main>
    </>
  )
}
