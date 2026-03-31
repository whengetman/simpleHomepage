import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import MapsClient from '@/components/MapsClient'

export const metadata: Metadata = {
  title: '오시는 길',
  description: '동우CNPACK 오시는 길 — 서울 사무소 및 경기도 이천 공장 위치를 안내합니다.',
  alternates: { canonical: 'https://dongwoocnpack.com/maps' },
  openGraph: {
    url: 'https://dongwoocnpack.com/maps',
    title: '오시는 길 | 동우CNPACK',
    description: '서울 사무소 및 이천 공장 오시는 길.',
  },
}

export default function MapsPage() {
  return (
    <>
      <PageHero
        eyebrow="Directions"
        title="오시는 길"
        description="서울 사무소와 경기도 이천 공장 위치를 안내합니다."
      />
      <main className="py-12 md:py-16">
        <div className="container">
          <MapsClient />
        </div>
      </main>
    </>
  )
}
