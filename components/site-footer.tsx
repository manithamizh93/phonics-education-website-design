import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, programs, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Structured, evidence-based phonics classes online — helping children become confident, independent readers.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground/80">
            MSME Registered Educational Venture
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold">Classes</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {programs.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link href={`/classes#${p.slug}`} className="hover:text-accent">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-accent">
                <Phone className="size-4 text-accent" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all hover:text-accent">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between sm:px-6">
          <p>{`© ${new Date().getFullYear()} EchoGen Phonics. All rights reserved.`}</p>
          <p>Serving learners in India, USA, UK, UAE & Qatar</p>
        </div>
      </div>
    </footer>
  )
}
