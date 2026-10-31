import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'What age should my child start phonics?',
    a: 'Children can begin as early as 3 years old with playful letter-sound activities. We also support older children and teens who need help with reading.',
  },
  {
    q: 'Are the classes live or recorded?',
    a: 'All children’s classes are live and interactive, held online in small groups or 1:1 so every child gets personal attention.',
  },
  {
    q: 'Do you teach students outside India?',
    a: 'Yes! We teach learners in the USA, UK, UAE, Qatar and more, with flexible timings across time zones.',
  },
  {
    q: 'What if we miss a class?',
    a: 'We offer compensation classes so your child never falls behind.',
  },
  {
    q: 'Can parents or teachers learn phonics too?',
    a: 'Absolutely. Our Adult Phonics Masterclass is designed for parents, teachers and aspiring phonics educators.',
  },
]

export function Faq() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions parents often ask" />
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
