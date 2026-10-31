import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ClassList } from '@/components/classes/class-list'
import { ClassFeatures } from '@/components/classes/class-features'
import { Faq } from '@/components/classes/faq'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Classes',
  description:
    'Online phonics classes for ages 3–12, struggling reader support and an Adult Phonics Masterclass for parents and teachers.',
}

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Classes"
        title="Phonics programs for every little (and big) learner"
        description="Live, interactive online classes designed around your child's age, level and pace — from first sounds to fluent reading."
      />
      <ClassList />
      <ClassFeatures />
      <Faq />
      <CtaBanner />
    </>
  )
}
