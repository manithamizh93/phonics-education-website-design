import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-center sm:px-12 md:py-16">
        <div aria-hidden="true" className="absolute -left-10 -top-10 size-40 rounded-full bg-coral/30" />
        <div aria-hidden="true" className="absolute -bottom-16 -right-8 size-52 rounded-full bg-primary/15" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-accent-foreground sm:text-4xl">
            Give your child the gift of confident reading
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-accent-foreground/80">
            Book a free demo class and get a personalised reading assessment — online, from anywhere in the world.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              Book a Free Demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent-foreground/20 bg-background/60 px-7 py-3 font-bold text-accent-foreground transition-colors hover:bg-background"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
