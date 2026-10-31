import { Hero } from '@/components/home/hero'
import { StatsStrip } from '@/components/stats-strip'
import { Benefits } from '@/components/home/benefits'
import { ProgramsPreview } from '@/components/home/programs-preview'
import { HowItWorks } from '@/components/home/how-it-works'
import { FounderTeaser } from '@/components/home/founder-teaser'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Benefits />
      <ProgramsPreview />
      <HowItWorks />
      <FounderTeaser />
      <Testimonials limit={3} />
      <CtaBanner />
    </>
  )
}
