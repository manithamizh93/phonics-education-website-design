import { Eye, Target, Users } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To help every child become a confident, independent reader through structured, evidence-based phonics.',
    className: 'bg-primary text-primary-foreground',
    iconClass: 'bg-primary-foreground/15 text-accent',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A world where no child is held back by reading difficulties — where literacy opens every door.',
    className: 'bg-accent text-accent-foreground',
    iconClass: 'bg-background/60 text-primary',
  },
  {
    icon: Users,
    title: 'Our Community',
    text: 'Empowering parents, teachers and educators with the knowledge to build strong reading foundations.',
    className: 'bg-coral text-coral-foreground',
    iconClass: 'bg-background/20 text-coral-foreground',
  },
]

export function Mission() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-24">
      <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.title} className={`rounded-[2rem] p-8 shadow-sm ${p.className}`}>
            <span className={`flex size-12 items-center justify-center rounded-2xl ${p.iconClass}`}>
              <p.icon className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold">{p.title}</h2>
            <p className="mt-3 text-pretty leading-relaxed opacity-90">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
