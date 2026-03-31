'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface FormState {
  company: string
  person: string
  phone: string
  email: string
  product: string
  width: string
  height: string
  thickness: string
  qty: string
  printing: string
  use: string
  memo: string
  to: string
}

const inputClass =
  'rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink font-noto focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 w-full'

const initial: FormState = {
  company: '', person: '', phone: '', email: '',
  product: '식품 포장지', width: '', height: '', thickness: '',
  qty: '', printing: '', use: '', memo: '',
  to: 'korea8222@hanmail.net',
}

export default function InquiryPage() {
  const [form, setForm] = useState<FormState>(initial)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.company && !form.person) { alert('회사명 또는 담당자명을 입력해주세요.'); return }
    if (!form.phone && !form.email) { alert('연락처 또는 이메일 중 하나는 입력해주세요.'); return }

    const subject = encodeURIComponent(`[견적 문의] ${form.company || form.person} / ${form.product}`)
    const lines = [
      `회사명: ${form.company}`,
      `담당자: ${form.person}`,
      `연락처: ${form.phone}`,
      `이메일: ${form.email}`,
      `제품 종류: ${form.product}`,
      `규격(가로x세로x두께): ${form.width} x ${form.height} x ${form.thickness}`,
      `수량: ${form.qty}`,
      `인쇄: ${form.printing}`,
      `용도: ${form.use}`,
      `요청사항: ${form.memo}`,
      '',
      '(첨부파일은 회신 메일로 보내주세요.)',
    ]
    const body = lines.map(encodeURIComponent).join('%0D%0A')
    window.location.href = `mailto:${form.to || 'korea8222@hanmail.net'}?subject=${subject}&body=${body}`
  }

  const handleCopy = () => {
    const text = Object.entries(form)
      .filter(([k]) => k !== 'to')
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    navigator.clipboard.writeText(text).then(() => {
      alert('요약을 복사했습니다. 이메일 작성 시 붙여넣기 하세요.')
    })
  }

  const fieldClass = 'flex flex-col gap-1.5'

  return (
    <>
      <PageHero
        eyebrow="Inquiry"
        title="견적/문의"
        description="제품 종류·규격·수량을 입력하시면 이메일로 견적을 보내드립니다."
      />

      <main className="py-12 md:py-16">
        <div className="container max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-border rounded-[14px] shadow-card p-7 space-y-4"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={fieldClass}>
                <Label htmlFor="q_company">회사명</Label>
                <Input id="q_company" placeholder="예) 동우CNPACK" value={form.company} onChange={set('company')} />
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_person">담당자명</Label>
                <Input id="q_person" placeholder="예) 홍길동" value={form.person} onChange={set('person')} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={fieldClass}>
                <Label htmlFor="q_phone">연락처</Label>
                <Input id="q_phone" type="tel" placeholder="예) 010-0000-0000" value={form.phone} onChange={set('phone')} />
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_email">발신 이메일</Label>
                <Input id="q_email" type="email" placeholder="예) user@example.com" value={form.email} onChange={set('email')} />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={fieldClass}>
                <Label htmlFor="q_product">제품 종류</Label>
                <select
                  id="q_product"
                  className={inputClass}
                  value={form.product}
                  onChange={set('product')}
                >
                  {['식품 포장지', '비닐폴리백', '인쇄 포장', '지퍼백', '기타'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_width">가로 (mm)</Label>
                <Input id="q_width" placeholder="예) 200" value={form.width} onChange={set('width')} />
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_height">세로 (mm)</Label>
                <Input id="q_height" placeholder="예) 300" value={form.height} onChange={set('height')} />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={fieldClass}>
                <Label htmlFor="q_thickness">두께 (μm)</Label>
                <Input id="q_thickness" placeholder="예) 50" value={form.thickness} onChange={set('thickness')} />
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_qty">수량</Label>
                <Input id="q_qty" placeholder="예) 10,000장" value={form.qty} onChange={set('qty')} />
              </div>
              <div className={fieldClass}>
                <Label htmlFor="q_printing">인쇄</Label>
                <Input id="q_printing" placeholder="예) 1도 단면 / 무인쇄" value={form.printing} onChange={set('printing')} />
              </div>
            </div>

            {/* Use */}
            <div className={fieldClass}>
              <Label htmlFor="q_use">용도</Label>
              <Input id="q_use" placeholder="예) 냉동식품 포장 / 건식 제품 포장 등" value={form.use} onChange={set('use')} />
            </div>

            {/* Memo */}
            <div className={fieldClass}>
              <Label htmlFor="q_memo">요청사항</Label>
              <Textarea id="q_memo" placeholder="납기, 포장 방식, 배송지 등 추가 요청사항을 적어주세요." value={form.memo} onChange={set('memo')} />
            </div>

            <Separator />

            {/* Submit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className={fieldClass}>
                <Label htmlFor="q_to">수신 이메일</Label>
                <Input id="q_to" type="email" value={form.to} onChange={set('to')} />
                <p className="text-[12px] text-muted">메일 앱이 열리며, 입력한 내용이 본문으로 채워집니다.</p>
              </div>
              <div className="flex gap-2.5 flex-wrap">
                <Button type="submit" variant="default">📧 메일로 보내기</Button>
                <Button type="button" variant="outline" onClick={handleCopy}>내용 복사</Button>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[12px] text-muted">※ 첨부파일이 있을 경우, 메일 앱이 열린 뒤 파일을 첨부해 보내주세요.</p>
              <p className="text-[12px] text-muted">
                ※ 직접 전화 문의도 가능합니다:{' '}
                <a href="tel:031-631-7284" className="text-brand-blue hover:underline">031-631-7284</a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

