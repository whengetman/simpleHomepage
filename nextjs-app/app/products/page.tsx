import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const products = [
  { no: '01', name: '비닐폴리백',  desc: '투명·유색 다양한 규격의 식품용 폴리백. 위생 인증 소재 사용.', imgs: ['/assets/img/product3.jpg','/assets/img/product4.jpg','/assets/img/product5.jpg'] },
  { no: '02', name: '식품 포장지', desc: 'OPP·PE·나일론 등 냉동·냉장·상온 식품에 맞는 포장지.', imgs: ['/assets/img/product6.jpg','/assets/img/product7.jpg','/assets/img/product8.jpg'] },
  { no: '03', name: '인쇄 포장재', desc: '브랜드 로고·디자인 맞춤 인쇄. 색상·패턴 커스터마이징 가능.', imgs: ['/assets/img/product9.jpg','/assets/img/product10.jpg','/assets/img/product11.jpg'] },
  { no: '04', name: '지퍼백·진공', desc: '지퍼백, 진공 포장재 등 특수 목적 포장재 제조 및 공급.', imgs: ['/assets/img/product12.jpg','/assets/img/product2.jpg','/assets/img/product.jpg'] },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Products</span>
        <span className="text-xs text-gray-400">제품 소개</span>
      </div>

      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[240px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                주요<br/>제품
              </h1>
              <p className="text-sm text-gray-400">식품 포장재 전문 4개 라인업</p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col divide-y divide-gray-100">
            {products.map(({ no, name, desc }) => (
              <div key={no} className="px-6 py-5 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                <span className="text-[10px] font-black text-gray-200 tracking-widest mt-1 w-6 shrink-0">{no}</span>
                <div>
                  <div className="text-base font-black text-gray-900 mb-1">{name}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">맞춤 제작 문의 환영</span>
              <Button asChild size="sm" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 text-xs px-5">
                <a href="tel:031-631-7284">문의하기</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {products.map(({ no, name, imgs }) => (
        <section key={no} className="px-4 sm:px-6 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-black tracking-[4px] uppercase text-gray-400">{no} — {name}</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {imgs.map((img, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image src={img} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <Separator />

      <section className="border-t-2 border-gray-900 px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-[10px] font-black tracking-[4px] uppercase text-gray-400 mb-3">Contact Us</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-gray-900">맞춤 제작 문의하세요</h2>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button asChild size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-8">
            <a href="tel:031-631-7284">031-631-7284</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-gray-200 text-gray-700 hover:border-gray-900 px-8">
            <Link href="/inquiry">온라인 문의</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
