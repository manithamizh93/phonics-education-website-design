import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="EchoGen Phonics home">
      <span
        aria-hidden="true"
        className="relative flex size-10 items-center justify-center rounded-2xl bg-primary font-heading text-lg font-bold text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6"
      >
        Eg
        <span className="absolute -right-1 -top-1 size-3.5 rounded-full border-2 border-background bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-heading text-lg font-bold', inverted ? 'text-primary-foreground' : 'text-foreground')}>
          EchoGen Phonics
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-bold uppercase tracking-[0.2em]',
            inverted ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          Learn · Grow · Succeed
        </span>
      </span>
    </Link>
  )
}
