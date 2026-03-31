import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '동우CNPACK | 식품 포장지·비닐폴리백 전문 제조',
    template: '%s | 동우CNPACK',
  },
  description: '동우CNPACK은 30년 경력의 식품 포장지 및 비닐폴리백 전문 제조업체입니다. 고품질 포장재를 합리적인 가격으로 공급합니다.',
  metadataBase: new URL('https://dongwoocnpack.com'),
  openGraph: {
    type: 'website',
    siteName: '동우CNPACK',
    images: [{ url: '/logo.png' }],
  },
  twitter: { card: 'summary' },
  icons: { icon: '/logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#0f1e3d',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '동우CNPACK',
              url: 'https://dongwoocnpack.com',
              logo: 'https://dongwoocnpack.com/logo.png',
              description: '식품 포장지, 비닐폴리백 전문 제조',
              telephone: '031-631-7284',
              email: 'korea8222@hanmail.net',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '다산로 29길 45',
                addressLocality: '중구',
                addressRegion: '서울특별시',
                postalCountry: 'KR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '031-631-7284',
                contactType: 'customer service',
                availableLanguage: 'Korean',
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.variable} ${bebasNeue.variable} font-noto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
