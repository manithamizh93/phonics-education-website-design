import { Briefcase, Building2, School, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const milestones = [
  { icon: Briefcase, title: 'Corporate Finance', text: 'Built discipline, structure and a results-driven mindset.' },
  { icon: School, title: 'Educator', text: 'Discovered a passion for teaching and early childhood learning.' },
  { icon: Building2, title: 'Montessori Vice Principal', text: 'Led teachers and shaped child-centred learning programs.' },
  { icon: Sparkles, title: 'Founder, EchoGen Phonics', text: 'Launched an MSME registered venture for literacy impact.' },
]

export function Journey() {
  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The journey"
          title="Every experience, a stepping stone"
          description="A path shaped by structure, leadership and a deep love for helping children learn."
        />
        <div className="relative mt-14">
        <div aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-primary/15 md:block" />
        <ol className="relative grid gap-6 md:grid-cols-4">
          {milestones.map((m, i) => (
            <li key={m.title} className="relative">
              <span
                className={`relative flex size-14 items-center justify-center rounded-2xl shadow-md ${
                  i === milestones.length - 1 ? 'bg-coral text-coral-foreground' : 'bg-primary text-primary-foreground'
                }`}
              >
                <m.icon className="size-6" aria-hidden="true" />
              </span>
              <div className="mt-5 rounded-3xl bg-card p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-coral">{`Chapter ${i + 1}`}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
