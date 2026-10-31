import { ClipboardCheck, Laptop, RefreshCcw, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  { icon: Laptop, title: 'Live online sessions', text: 'Interactive video classes you can join from anywhere.' },
  { icon: ClipboardCheck, title: 'Free assessment', text: 'A reading check before we place your child in a class.' },
  { icon: RefreshCcw, title: 'Compensation classes', text: 'Missed a session? We help you catch up.' },
  { icon: TrendingUp, title: 'Progress updates', text: 'Regular feedback so parents always know how their child is doing.' },
]

export function ClassFeatures() {
  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Every class includes" title="More than a lesson — a learning partnership" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li key={f.title} className="rounded-3xl bg-card p-7 text-center shadow-sm">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <f.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
