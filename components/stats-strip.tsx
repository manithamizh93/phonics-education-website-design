import { impactStats } from '@/lib/site'

export function StatsStrip() {
  return (
    <section aria-label="Our impact" className="px-4 sm:px-6">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-primary/15 shadow-lg shadow-primary/10 md:grid-cols-4">
        {impactStats.map((s) => (
          <div key={s.label} className="flex flex-col items-center bg-primary px-4 py-8 text-center text-primary-foreground">
            <dt className="order-2 mt-1 text-sm font-semibold text-primary-foreground/75">{s.label}</dt>
            <dd className="order-1 font-heading text-4xl font-semibold text-accent md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
