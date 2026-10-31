import { BookOpenCheck, CalendarClock, HeartHandshake, MessageSquareText, Sparkles, UserRound } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: BookOpenCheck,
    title: 'Structured & evidence-based',
    text: 'A proven, step-by-step phonics sequence so every new skill builds on the last.',
    tone: 'bg-secondary text-primary',
  },
  {
    icon: UserRound,
    title: 'Individual attention',
    text: 'Small groups and 1:1 sessions mean your child is seen, heard and gently guided.',
    tone: 'bg-accent/40 text-accent-foreground',
  },
  {
    icon: Sparkles,
    title: 'Fun, playful learning',
    text: 'Songs, actions, stories and games keep young learners excited to come back.',
    tone: 'bg-coral/20 text-coral',
  },
  {
    icon: CalendarClock,
    title: 'Flexible timings',
    text: 'Classes across time zones, with compensation sessions when you miss a class.',
    tone: 'bg-secondary text-primary',
  },
  {
    icon: MessageSquareText,
    title: 'Pronunciation & fluency',
    text: 'Beyond decoding — children learn to read aloud clearly and speak with confidence.',
    tone: 'bg-accent/40 text-accent-foreground',
  },
  {
    icon: HeartHandshake,
    title: 'Parent partnership',
    text: 'Regular guidance and simple at-home reading strategies for parents.',
    tone: 'bg-coral/20 text-coral',
  },
]

export function Benefits() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why EchoGen Phonics"
          title="Reading foundations that last a lifetime"
          description="We combine the science of reading with warm, patient teaching — so children don't just read, they love to read."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className={`flex size-12 items-center justify-center rounded-2xl ${b.tone}`}>
                <b.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
