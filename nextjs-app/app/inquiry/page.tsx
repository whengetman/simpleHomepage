'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function InquiryPage() {
  const [form, setForm] = useState({ company:'', name:'', phone:'', email:'', product:'', qty:'', print:'', memo:'' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));
  const submit = () => {
    const body = Object.entries({ 회사명:form.company, 담당자:form.name, 연락처:form.phone, 이메일:form.email, 제품규격:form.product, 수량:form.qty, 인쇄여부:form.print, 메모:form.memo })
      .map(([k,v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:skagnl6855@naver.com?subject=제품 문의&body=${encodeURIComponent(body)}`;
  };
  return (
    <main className="bg-white">
      <div className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-black tracking-[4px] uppercase text-gray-900">Inquiry</span>
        <span className="text-xs text-gray-400">견적·문의</span>
      </div>

      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:col-span-5 bg-black p-8 flex flex-col justify-between min-h-[240px]">
            <div />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                문의<br/>하기
              </h1>
              <p className="text-sm text-gray-400">견적·납기·맞춤 제작 문의</p>
            </div>
          </div>
          <div className="md:col-span-7 p-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">회사명</Label>
                <Input placeholder="회사명" value={form.company} onChange={set('company')} className="rounded-xl border-gray-200 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">담당자</Label>
                <Input placeholder="담당자명" value={form.name} onChange={set('name')} className="rounded-xl border-gray-200 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">연락처</Label>
                <Input placeholder="010-0000-0000" value={form.phone} onChange={set('phone')} className="rounded-xl border-gray-200 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">이메일</Label>
                <Input placeholder="email@example.com" value={form.email} onChange={set('email')} className="rounded-xl border-gray-200 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">제품·규격</Label>
                <Input placeholder="예: 비닐폴리백 30×40cm" value={form.product} onChange={set('product')} className="rounded-xl border-gray-200 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">수량</Label>
                <Input placeholder="예: 10,000매" value={form.qty} onChange={set('qty')} className="rounded-xl border-gray-200 text-sm" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">인쇄 여부</Label>
              <select value={form.print} onChange={set('print')}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-gray-900">
                <option value="">선택해주세요</option>
                <option value="인쇄 있음">인쇄 있음</option>
                <option value="인쇄 없음 (무지)">인쇄 없음 (무지)</option>
                <option value="미정">미정</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">추가 메모</Label>
              <Textarea placeholder="기타 요청사항을 입력해주세요" value={form.memo} onChange={set('memo')} rows={3} className="rounded-xl border-gray-200 text-sm resize-none" />
            </div>
            <Button onClick={submit} className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-700 font-bold py-3">
              이메일로 문의 보내기
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      <section className="px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { label: 'Tel', value: '031-631-7284', href: 'tel:031-631-7284' },
            { label: 'Mobile', value: '010-9002-8222', href: 'tel:010-9002-8222' },
            { label: 'E-mail', value: 'skagnl6855@naver.com', href: 'mailto:skagnl6855@naver.com' },
          ].map(({ label, value, href }) => (
            <div key={label} className="px-6 py-6 first:pl-0 last:pr-0">
              <div className="text-[10px] font-black text-gray-300 tracking-widest mb-2">{label}</div>
              <a href={href} className="text-sm font-black text-gray-900 hover:text-gray-500 transition-colors">{value}</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
