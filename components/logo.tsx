import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="EchoGen Phonics home">
      <span
        className={cn(
          'relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background shadow-sm ring-1 ring-border transition-transform group-hover:-rotate-6 sm:size-14',
        )}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={112}
          height={112}
          priority
          className="size-full scale-110 object-contain"
        />
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
