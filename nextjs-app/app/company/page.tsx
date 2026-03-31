import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function CompanyPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Company</span>
        <span className="text-xs text-gray-400">동우씨앤팩 · Since 1990</span>
      </div>

      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[280px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                신뢰를<br/>만드는<br/>기업
              </h1>
              <p className="text-sm text-gray-400">30년 경력의 식품 포장 전문 제조업체</p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col divide-y divide-gray-100">
            {[
              { label: '회사명', value: '동우씨앤팩 (주)' },
              { label: '대표자', value: '조남휘' },
              { label: '설립연도', value: '1990년' },
              { label: '사업자등록번호', value: '201-18-48413' },
              { label: '사무소', value: '서울특별시 중구 다산로 29길 45' },
              { label: '공장', value: '경기도 이천시 진상미로 1857-10' },
            ].map(({ label, value }) => (
              <div key={label} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 w-28 shrink-0">{label}</span>
                <span className="text-sm font-bold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-black tracking-[4px] uppercase text-gray-400">Facility</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { img: '/assets/img/gravure-press-1.jpg', label: '그라비아 인쇄 공정' },
            { img: '/assets/img/gravure-press-2.jpg', label: '제대 공정' },
            { img: '/assets/img/bag-making-1.jpg',    label: '제조 현장' },
          ].map(({ img, label }) => (
            <div key={label} className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-2">
                <Image src={img} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold text-gray-900">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { no: '01', title: '직접 제조',  sub: '이천 공장 직영' },
            { no: '02', title: '식품 등급',  sub: '위생·안전 인증' },
            { no: '03', title: '맞춤 제작',  sub: '규격·인쇄 커스텀' },
            { no: '04', title: '신속 납품',  sub: '소량·대량 대응' },
          ].map(({ no, title, sub }) => (
            <div key={no} className="px-6 py-6 first:pl-0 last:pr-0">
              <div className="text-[10px] font-black text-gray-200 tracking-widest mb-2">{no}</div>
              <div className="text-sm font-black text-gray-900 mb-1">{title}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
