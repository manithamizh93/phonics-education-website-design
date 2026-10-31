import { LetterBubbles } from '@/components/letter-bubbles'

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <LetterBubbles />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-24">
        <p className="inline-flex rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-bold text-accent">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
      <div aria-hidden="true" className="h-6 rounded-t-[2rem] bg-background" />
    </section>
  )
}
