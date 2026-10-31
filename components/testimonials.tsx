import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/site'

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Parent love"
          title="Stories from our happy families"
          description="Real words from parents and learners who have grown with EchoGen Phonics."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <li key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="size-7 text-primary/20" aria-hidden="true" />
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/85">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary font-heading font-semibold text-primary-foreground"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
