import { SectionHeading } from '@/components/section-heading'

const steps = [
  { title: 'Book a free demo', text: 'Reach out on WhatsApp, phone or the contact form to schedule a trial class.' },
  { title: 'Reading assessment', text: "We gently assess your child's current level to find the right starting point." },
  { title: 'Personalised plan', text: 'Your child joins the right group or 1:1 track with a clear learning roadmap.' },
  { title: 'Watch them shine', text: 'Regular progress updates as your child reads, spells and speaks with confidence.' },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="Getting started is as easy as A, B, C"
          description="Four simple steps from your first message to a confident, happy reader."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-dashed border-primary/30 bg-card p-7">
              <span
                className="flex size-12 items-center justify-center rounded-2xl bg-primary font-heading text-xl font-semibold text-primary-foreground"
                aria-hidden="true"
              >
                {String.fromCharCode(65 + i)}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
