'use client'

import { useRef } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'

interface MapInfo {
  id: string
  label: string
  address: string
  dotColor?: string
  naverHref: string
  kakaoHref: string
  ref: React.RefObject<HTMLDivElement>
}

export default function MapsClient() {
  const officeRef = useRef<HTMLDivElement>(null)
  const factoryRef = useRef<HTMLDivElement>(null)

  const renderMap = (container: HTMLDivElement | null, address: string) => {
    if (!container) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kakao = (window as any).kakao
    if (!kakao?.maps) return

    const map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 4,
    })
    const geocoder = new kakao.maps.services.Geocoder()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    geocoder.addressSearch(address, (result: any[], status: string) => {
      if (status === kakao.maps.services.Status.OK && result.length) {
        const latlng = new kakao.maps.LatLng(parseFloat(result[0].y), parseFloat(result[0].x))
        map.setCenter(latlng)
        new kakao.maps.Marker({ map, position: latlng })
      }
    })
  }

  const handleScriptLoad = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kakao = (window as any).kakao
    if (!kakao?.maps) return
    kakao.maps.load(() => {
      renderMap(officeRef.current, '서울특별시 중구 다산로 29길 45')
      renderMap(factoryRef.current, '경기도 이천시 진상미로 1857-10')
    })
  }

  const maps: Omit<MapInfo, 'ref'>[] = [
    {
      id: 'office',
      label: '사무실',
      address: '서울특별시 중구 다산로 29길 45',
      dotColor: 'bg-brand-blue',
      naverHref: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EB%8B%A4%EC%82%B0%EB%A1%9C+29%EA%B8%B8+45',
      kakaoHref: 'https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EB%8B%A4%EC%82%B0%EB%A1%9C+29%EA%B8%B8+45',
    },
    {
      id: 'factory',
      label: '공장',
      address: '경기도 이천시 진상미로 1857-10',
      dotColor: 'bg-accent',
      naverHref: 'https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%9D%B4%EC%B2%9C%EC%8B%9C+%EC%A7%84%EC%83%81%EB%AF%B8%EB%A1%9C+1857-10',
      kakaoHref: 'https://map.kakao.com/link/search/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%9D%B4%EC%B2%9C%EC%8B%9C+%EC%A7%84%EC%83%81%EB%AF%B8%EB%A1%9C+1857-10',
    },
  ]

  const refs = [officeRef, factoryRef]

  return (
    <>
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=bebb4d43642ffeb6f21dacdb60c80c08&libraries=services&autoload=false"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {maps.map((m, i) => (
          <div key={m.id} className="bg-white border border-border rounded-[14px] shadow-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${m.dotColor}`} />
                <span className="text-[14px] font-bold text-navy">{m.label}</span>
              </div>
              <div className="text-[12px] text-muted mt-1">{m.address}</div>
            </div>
            <div ref={refs[i]} className="w-full h-[260px]" />
            <div className="px-4 py-3 flex gap-2 flex-wrap border-t border-border">
              <Button variant="ghost" size="sm" asChild>
                <a href={m.naverHref} target="_blank" rel="noopener noreferrer">🗺 네이버 길찾기</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={m.kakaoHref} target="_blank" rel="noopener noreferrer">🗺 카카오 길찾기</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
