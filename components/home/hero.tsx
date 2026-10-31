import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe2, Star, Video } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-secondary" />
      <div aria-hidden="true" className="absolute -left-24 bottom-0 size-64 rounded-full bg-accent/25 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-bold text-primary shadow-sm">
            <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
            Live online phonics classes · Ages 3–12
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Helping every child become a{' '}
            <span className="relative inline-block text-primary">
              confident reader
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path d="M2 9C80 2 220 2 298 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Structured, evidence-based phonics that builds strong reading, spelling and pronunciation skills — taught
            with patience, play and personal attention, right from your home.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              Book a Free Demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center rounded-full border-2 border-border bg-card px-7 py-3 font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Classes
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {['K', 'N', 'S', 'I'].map((c, i) => (
                <span
                  key={c}
                  className={`flex size-10 items-center justify-center rounded-full border-2 border-background font-heading font-semibold ${
                    ['bg-primary text-primary-foreground', 'bg-accent text-accent-foreground', 'bg-coral text-coral-foreground', 'bg-secondary text-primary'][i]
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">Loved by 500+ students & parents</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-card shadow-2xl shadow-primary/15">
            <Image
              src="/images/hero-child.png"
              alt="A young girl smiling while learning letter sounds in an online phonics class"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-card p-3.5 shadow-xl sm:-left-10">
            <span className="flex size-10 items-center justify-center rounded-xl bg-coral text-coral-foreground">
              <Video className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Live & interactive</p>
              <p className="text-xs text-muted-foreground">1:1 and small groups</p>
            </div>
          </div>

          <div className="absolute -right-3 bottom-24 rounded-2xl bg-accent px-4 py-3 font-heading text-2xl font-bold text-accent-foreground shadow-xl sm:-right-8">
            {'s · a · t'}
            <span className="block font-sans text-xs font-bold">{"Let's blend!"}</span>
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-foreground px-5 py-3.5 text-primary-foreground shadow-xl">
            <Globe2 className="size-5 text-accent" aria-hidden="true" />
            <p className="whitespace-nowrap text-sm font-bold">India · USA · UK · UAE · Qatar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
