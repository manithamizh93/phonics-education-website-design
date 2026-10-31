import { TrendingUp } from 'lucide-react'

export function SuccessStory() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border-2 border-dashed border-primary/25 bg-card p-8 sm:p-12 md:grid-cols-[auto_1fr]">
        <div className="flex size-24 items-center justify-center rounded-3xl bg-secondary text-primary">
          <TrendingUp className="size-10" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">A success story</p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            A Grade 2 learner who could not read sentences independently — now reading with confidence.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Through individual attention, regular practice and flexible scheduling, he moved from guessing words to
            blending and reading sentences on his own. Stories like his are why we do what we do.
          </p>
        </div>
      </div>
    </section>
  )
}
