import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-brand-blue/8 text-brand-blue border-brand-blue/18',
        accent: 'bg-accent/10 text-accent border-accent/30',
        outline: 'border-border text-muted bg-transparent',
        eyebrow: 'bg-accent/10 text-accent border-accent/30 font-bold tracking-[3px] uppercase text-[11px] px-3 py-1',
        'section-label': 'bg-transparent border-none text-brand-blue font-bold tracking-[3px] uppercase text-[11px] px-0',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
