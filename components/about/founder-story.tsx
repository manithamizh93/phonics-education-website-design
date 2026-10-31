
import Image from 'next/image'
import { Award } from 'lucide-react'
import { assetPath } from '@/lib/asset-path'

export function FounderStory() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -left-4 -top-4 size-full rounded-[2.5rem] bg-accent" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-card shadow-xl">
            <Image
              src={assetPath('/images/rajalakshmi.jpg')}
              alt="Rajalakshmi S, founder of EchoGen Phonics"
              fill
              sizes="(min-width: 1024px) 440px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl sm:-right-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Award className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-foreground">Rajalakshmi S</p>
              <p className="text-xs text-muted-foreground">Founder & Phonics Educator</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">Our story</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            From corporate finance to a lifelong mission for literacy
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              Rajalakshmi S began her career in corporate finance, but her heart was always in education. That calling
              led her into the classroom, and later to serve as Vice Principal of a Montessori school.
            </p>
            <p>
              Working closely with young learners, she saw how many children struggled with reading — not from a lack
              of ability, but from a lack of strong foundations. Structured phonics became her answer.
            </p>
            <p>
              Today, through EchoGen Phonics, she teaches children across India, the USA, UK, UAE and Qatar, and mentors
              parents and teachers who want to bring evidence-based literacy into their homes and classrooms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
