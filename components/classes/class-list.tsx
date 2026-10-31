import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, GraduationCap, Users } from 'lucide-react'
import { programs } from '@/lib/site'
import { cn } from '@/lib/utils'

const tone = {
  primary: { badge: 'bg-primary text-primary-foreground', soft: 'bg-secondary', check: 'bg-primary text-primary-foreground' },
  accent: { badge: 'bg-accent text-accent-foreground', soft: 'bg-accent/25', check: 'bg-accent text-accent-foreground' },
  coral: { badge: 'bg-coral text-coral-foreground', soft: 'bg-coral/15', check: 'bg-coral text-coral-foreground' },
}

export function ClassList() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <ul className="mx-auto flex max-w-6xl flex-col gap-10">
        {programs.map((p, i) => {
          const t = tone[p.color]
          return (
            <li
              key={p.slug}
              id={p.slug}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm"
            >
              <article className={cn('grid lg:grid-cols-2', i % 2 === 1 && 'lg:[&>*:first-child]:order-2')}>
                <div className={cn('relative min-h-72 lg:min-h-full', t.soft)}>
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, 95vw"
                    className="object-cover"
                  />
                  <span className={cn('absolute left-5 top-5 rounded-full px-4 py-1.5 text-sm font-bold shadow', t.badge)}>
                    {p.ages}
                  </span>
                </div>

                <div className="flex flex-col p-7 sm:p-10">
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-primary">
                      <GraduationCap className="size-3.5" aria-hidden="true" />
                      {p.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-primary">
                      <Users className="size-3.5" aria-hidden="true" />
                      {p.format}
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-foreground">{p.title}</h2>
                  <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">{p.description}</p>

                  <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">
                    {"What they'll learn"}
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {p.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2.5 text-foreground/85">
                        <span className={cn('flex size-5 shrink-0 items-center justify-center rounded-full', t.check)}>
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-9 sm:flex-row">
                    <Link
                      href={`/contact?class=${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Enquire about this class
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
