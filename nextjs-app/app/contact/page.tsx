'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Copy, Check } from 'lucide-react';

function CopyRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-400 w-28 shrink-0">{label}</span>
      {href ? (
        <a href={href} className="text-sm font-bold text-gray-900 hover:text-gray-600 flex-1">{value}</a>
      ) : (
        <span className="text-sm font-bold text-gray-900 flex-1">{value}</span>
      )}
      <button onClick={copy} className="ml-4 text-gray-300 hover:text-gray-900 transition-colors">
        {copied ? <Check className="w-3.5 h-3.5 text-gray-900" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Contact</span>
        <span className="text-xs text-gray-400">연락처</span>
      </div>

      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[240px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                연락처
              </h1>
              <p className="text-sm text-gray-400">언제든지 문의해 주세요</p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col divide-y divide-gray-100">
            <CopyRow label="사무소" value="서울특별시 중구 다산로 29길 45" />
            <CopyRow label="공장" value="경기도 이천시 진상미로 1857-10" />
            <CopyRow label="Tel" value="031-631-7284" href="tel:031-631-7284" />
            <CopyRow label="Mobile" value="010-9002-8222" href="tel:010-9002-8222" />
            <CopyRow label="Fax" value="031-631-7287" />
            <CopyRow label="E-mail" value="skagnl6855@naver.com" href="mailto:skagnl6855@naver.com" />
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">항목을 클릭하면 복사됩니다</span>
              <Button asChild size="sm" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 text-xs px-5">
                <a href="mailto:skagnl6855@naver.com?subject=문의">이메일 문의</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="border-t-2 border-gray-900 px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-[10px] font-black tracking-[4px] uppercase text-gray-400 mb-3">Call Us</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-gray-900">031-631-7284</h2>
          <p className="text-xs text-gray-400 mt-2">평일 09:00 — 18:00</p>
        </div>
        <Button asChild size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold px-10 shrink-0">
          <a href="tel:031-631-7284">전화하기</a>
        </Button>
      </section>
    </main>
  );
}
