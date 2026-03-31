import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import MapsClient from '@/components/MapsClient';

export default function MapsPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Directions</span>
        <span className="text-xs text-gray-400">오시는 길</span>
      </div>

      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[240px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                오시는<br/>길
              </h1>
              <p className="text-sm text-gray-400">서울 사무소 · 이천 공장</p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col divide-y divide-gray-100">
            <div className="px-6 py-5">
              <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">사무소</div>
              <div className="text-sm font-black text-gray-900 mb-1">서울특별시 중구 다산로 29길 45</div>
              <div className="flex gap-2 mt-3">
                <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-gray-200 hover:border-gray-900">
                  <a href="https://map.naver.com/v5/search/서울특별시+중구+다산로+29길+45" target="_blank" rel="noopener">네이버 지도</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-gray-200 hover:border-gray-900">
                  <a href="https://map.kakao.com/link/search/서울특별시+중구+다산로+29길+45" target="_blank" rel="noopener">카카오 지도</a>
                </Button>
              </div>
            </div>
            <div className="px-6 py-5">
              <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">공장</div>
              <div className="text-sm font-black text-gray-900 mb-1">경기도 이천시 진상미로 1857-10</div>
              <div className="flex gap-2 mt-3">
                <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-gray-200 hover:border-gray-900">
                  <a href="https://map.naver.com/v5/search/경기도+이천시+진상미로+1857-10" target="_blank" rel="noopener">네이버 지도</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-gray-200 hover:border-gray-900">
                  <a href="https://map.kakao.com/link/search/경기도+이천시+진상미로+1857-10" target="_blank" rel="noopener">카카오 지도</a>
                </Button>
              </div>
            </div>
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">카카오 지도로 길찾기</span>
              <Button asChild size="sm" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 text-xs px-5">
                <a href="tel:031-631-7284">전화 문의</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-black tracking-[4px] uppercase text-gray-400">Map</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <MapsClient />
      </section>

      <Separator />

      <section className="border-t-2 border-gray-900 px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-[10px] font-black tracking-[4px] uppercase text-gray-400 mb-3">Contact</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-gray-900">031-631-7284</h2>
        </div>
        <Button asChild size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-10 shrink-0">
          <a href="tel:031-631-7284">전화하기</a>
        </Button>
      </section>
    </main>
  );
}
