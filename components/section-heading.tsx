import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
