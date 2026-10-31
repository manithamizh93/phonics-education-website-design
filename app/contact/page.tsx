import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AtSign as Instagram, Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { Faq } from '@/components/classes/faq'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a free phonics demo class with EchoGen Phonics. Reach us on WhatsApp, phone or email.',
}

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: `https://wa.me/${site.whatsappNumber}`,
    tone: 'bg-primary text-primary-foreground',
    external: true,
  },
  { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref, tone: 'bg-accent text-accent-foreground' },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, tone: 'bg-coral text-coral-foreground' },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@echogenphonics',
    href: site.instagram,
    tone: 'bg-secondary text-primary',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start your child's reading journey"
        description="Have a question or ready to book a free demo? We'd love to hear from you."
      />

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${c.tone}`}>
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-muted-foreground">{c.label}</span>
                  <span className="block break-all font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-3xl bg-foreground p-6 text-primary-foreground">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-accent" aria-hidden="true" />
                <h2 className="text-lg font-semibold">Class timings</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                Flexible slots across IST, GST, GMT and US time zones. Monday to Saturday — tell us what works for your
                family.
              </p>
            </div>
          </div>

          <Suspense fallback={<div className="min-h-[36rem] rounded-[2rem] border border-border bg-card" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <div className="bg-secondary/60">
        <Faq />
      </div>
    </>
  )
}
