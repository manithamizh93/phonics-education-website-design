
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { programs } from '@/lib/site'
import { assetPath } from '@/lib/asset-path'

const badgeTone = {
  primary: 'bg-primary text-primary-foreground',
  accent: 'bg-accent text-accent-foreground',
  coral: 'bg-coral text-coral-foreground',
}

export function ProgramsPreview() {
  const featured = [programs[0], programs[1], programs[2], programs[4]]

  return (
    <section className="bg-secondary/60 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our classes"
            title="A class for every stage of the reading journey"
            description="From first letter sounds to fluent reading — and masterclasses for parents and teachers too."
          />
          <Link
            href="/classes"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all classes
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/classes#${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={assetPath(p.image || '/placeholder.svg')}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${badgeTone[p.color]}`}>
                    {p.ages}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
