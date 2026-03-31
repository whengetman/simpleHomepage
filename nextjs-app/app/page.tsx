import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-14 text-center">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-5">
            식품 포장 전문 제조
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
            포장이<br />브랜드입니다.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
            동우CNPACK은 30년 이상의 경험으로<br />
            신뢰할 수 있는 식품 포장재를 설계하고 제조합니다.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm">
            <Link href="/inquiry" className="text-blue-600 hover:underline">
              온라인 문의 →
            </Link>
            <a href="tel:031-631-7284" className="text-blue-600 hover:underline">
              031-631-7284
            </a>
          </div>
        </div>
        <img
          src="/assets/img/product3.jpg"
          alt="동우CNPACK 제품"
          className="w-full h-[62vh] object-cover"
        />
      </section>

      {/* ── 강점 4가지 ── */}
      <section className="border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { title: '직접 제조', desc: '이천 공장 직영으로 품질을 직접 관리합니다.' },
              { title: '식품 등급 소재', desc: '위생·안전 인증 소재만 사용합니다.' },
              { title: '맞춤 인쇄', desc: '브랜드 디자인 인쇄 제작이 가능합니다.' },
              { title: '신속 납품', desc: '소량·대량 모두 빠르게 납품합니다.' },
            ].map(({ title, desc }) => (
              <div key={title} className="py-10 px-8">
                <p className="text-sm font-semibold text-gray-900 mb-2">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 제품 소개 1: 폴리백 ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">비닐폴리백</p>
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight leading-snug mb-6">
              투명하고 위생적인<br />식품용 폴리백
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              투명·유색 다양한 규격의 식품용 폴리백을 직접 제조합니다.
              위생 인증 소재를 사용하여 안전하게 식품을 보호합니다.
            </p>
            <Link href="/products" className="text-blue-600 text-sm hover:underline">
              제품 더 보기 →
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/assets/img/product4.jpg"
              alt="폴리백"
              className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ── 풀와이드: 그라비아 인쇄 ── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <img
          src="/assets/img/gravure-press-1.jpg"
          alt="그라비아 인쇄"
          className="w-full h-[70vh] object-cover opacity-55"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-16 md:px-24 md:pb-20">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">인쇄 포장재</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-5">
            브랜드를 담는<br />맞춤 인쇄
          </h2>
          <p className="text-gray-300 text-base mb-7 max-w-md leading-relaxed">
            그라비아 인쇄 방식으로 선명하고 정확한 색상을 구현합니다.
            로고·디자인·패턴 모두 커스터마이징 가능합니다.
          </p>
          <Link href="/inquiry" className="text-blue-400 text-sm hover:underline">
            인쇄 문의하기 →
          </Link>
        </div>
      </section>

      {/* ── 제품 소개 2: 제대 공정 ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="overflow-hidden rounded-3xl order-2 md:order-1">
            <img
              src="/assets/img/bag-making-1.jpg"
              alt="제대 공정"
              className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">제대 공정</p>
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight leading-snug mb-6">
              이천 공장 직영<br />직접 제조
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              모든 공정을 자체 공장에서 직접 관리합니다.
              소량 맞춤부터 대량 납품까지 빠르고 정확하게 처리합니다.
            </p>
            <Link href="/company" className="text-blue-600 text-sm hover:underline">
              회사 소개 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 풀와이드: 그라비아 2 ── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <img
          src="/assets/img/gravure-press-2.jpg"
          alt="제조 공정"
          className="w-full h-[60vh] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">30년 제조 경력</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-5">
            검증된 기술,<br />일관된 품질
          </h2>
          <Link href="/history" className="text-blue-400 text-sm hover:underline">
            연혁 보기 →
          </Link>
        </div>
      </section>

      {/* ── 제품 갤러리 그리드 ── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">Products</p>
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">다양한 포장재 라인업</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: 'product5.jpg',  name: '식품 포장지' },
              { img: 'product6.jpg',  name: '지퍼백' },
              { img: 'product7.jpg',  name: '진공 포장재' },
              { img: 'product8.jpg',  name: '인쇄 포장재' },
              { img: 'product9.jpg',  name: 'OPP 포장재' },
              { img: 'product10.jpg', name: 'PE 포장재' },
              { img: 'product11.jpg', name: '냉동용 포장재' },
              { img: 'product12.jpg', name: '맞춤 포장재' },
            ].map(({ img, name }) => (
              <div key={name} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                <img
                  src={`/assets/img/${img}`}
                  alt={name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900">{name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="text-blue-600 text-sm hover:underline">
              전체 제품 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-5">Contact</p>
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-5">
            지금 바로 문의하세요
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            견적, 납기, 맞춤 제작 등 모든 문의를 환영합니다.<br />
            빠르게 답변드리겠습니다.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm">
            <Link href="/inquiry" className="text-blue-600 hover:underline">
              온라인 문의 →
            </Link>
            <a href="tel:031-631-7284" className="text-blue-600 hover:underline">
              031-631-7284
            </a>
            <a href="mailto:korea8222@hanmail.net" className="text-blue-600 hover:underline">
              이메일 문의
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
