'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface CopyState {
  office: boolean
  factory: boolean
  tel: boolean
  mobile: boolean
  fax: boolean
}

const contactRows = [
  { key: 'office' as const, label: '사무실', value: '서울특별시 중구 다산로 29길 45', copyText: '서울특별시 중구 다산로 29길 45' },
  { key: 'factory' as const, label: '공장', value: '경기도 이천시 진상미로 1857-10', copyText: '경기도 이천시 진상미로 1857-10' },
  { key: 'tel' as const, label: 'Tel', value: '031-631-7284', copyText: '031-631-7284', href: 'tel:031-631-7284' },
  { key: 'mobile' as const, label: 'Mobile', value: '010-9002-8222', copyText: '010-9002-8222', href: 'tel:010-9002-8222' },
  { key: 'fax' as const, label: 'Fax', value: '031-631-7287', copyText: '031-631-7287' },
]

export default function ContactPage() {
  const [copied, setCopied] = useState<Partial<CopyState>>({})

  const copy = (key: keyof CopyState, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 1500)
    }).catch(() => alert('복사에 실패했습니다.'))
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="연락처" description="전화, 이메일, 또는 견적 문의 양식으로 문의해 주세요." />

      <main className="py-12 md:py-16">
        <div className="container max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>📋 동우CNPACK 연락처 정보</CardHeader>
            <CardContent className="px-7 py-6">
              <div className="divide-y divide-border">
                {contactRows.map((row) => (
                  <div key={row.key} className="flex items-center flex-wrap gap-2 py-3">
                    <div className="w-[90px] shrink-0 text-[12px] font-bold text-muted uppercase tracking-[.5px]">
                      {row.label}
                    </div>
                    <div className="flex-1 text-[14px] font-medium text-ink">
                      {row.href ? (
                        <a href={row.href} className="text-brand-blue hover:underline">{row.value}</a>
                      ) : (
                        row.value
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copy(row.key, row.copyText)}
                    >
                      {copied[row.key] ? '✓ 복사됨' : '복사'}
                    </Button>
                  </div>
                ))}

                {/* Email row (no copy button) */}
                <div className="flex items-start flex-wrap gap-2 py-3">
                  <div className="w-[90px] shrink-0 text-[12px] font-bold text-muted uppercase tracking-[.5px]">
                    E-mail
                  </div>
                  <div className="flex-1 text-[14px] font-medium space-y-0.5">
                    <div><a href="mailto:korea8222@hanmail.net" className="text-brand-blue hover:underline">korea8222@hanmail.net</a></div>
                    <div><a href="mailto:skagnl6855@naver.com" className="text-brand-blue hover:underline">skagnl6855@naver.com</a></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap mt-5">
                <Button variant="default" asChild>
                  <a href="/inquiry">📋 견적/문의 양식</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:031-631-7284">📞 전화 문의</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
