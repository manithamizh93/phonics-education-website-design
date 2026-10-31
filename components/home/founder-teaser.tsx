import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const points = [
  'Certified phonics educator & former Montessori Vice Principal',
  'Mentor to teachers, parents and adult learners',
  'Founder of an MSME registered educational venture',
]

export function FounderTeaser() {
  return (
    <section className="px-4 pb-20 sm:px-6 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2rem] bg-foreground p-6 text-primary-foreground sm:p-10 lg:grid-cols-2 lg:p-14">
        <div className="relative aspect-square overflow-hidden rounded-3xl lg:aspect-[4/5]">
          <Image
            src={assetPath('/images/rajalakshmi.jpg')}
            alt="Rajalakshmi S, founder of EchoGen Phonics"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Meet the founder</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            {'"Every experience became a stepping stone toward creating literacy impact."'}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Rajalakshmi S moved from corporate finance into education with one mission — to help children become
            confident, independent readers through structured phonics.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-primary-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Read our story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
