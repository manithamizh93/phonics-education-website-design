import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { FounderStory } from '@/components/about/founder-story'
import { StatsStrip } from '@/components/stats-strip'
import { Mission } from '@/components/about/mission'
import { Journey } from '@/components/about/journey'
import { SuccessStory } from '@/components/about/success-story'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Rajalakshmi S, founder of EchoGen Phonics — a certified phonics educator helping children become confident, independent readers.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building confident readers, one sound at a time"
        description="EchoGen Phonics is an MSME registered educational venture dedicated to structured, evidence-based literacy for children and adults."
      />
      <FounderStory />
      <StatsStrip />
      <Mission />
      <Journey />
      <div className="pt-20">
        <SuccessStory />
      </div>
      <Testimonials />
      <CtaBanner />
    </>
  )
}
