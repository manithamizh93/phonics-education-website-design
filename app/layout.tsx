import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', weight: ['400', '500', '600', '700'] })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    default: 'EchoGen Phonics — Online Phonics Classes for Confident Readers',
    template: '%s | EchoGen Phonics',
  },
  description:
    'Live online phonics classes for children aged 3–12, struggling reader support and adult phonics masterclasses. Structured, evidence-based literacy teaching by Rajalakshmi S.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/images/logo.png', type: 'image/png', sizes: '500x500' }],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf8f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
