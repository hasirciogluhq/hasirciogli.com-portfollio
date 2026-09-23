"use client"

import { HeroSection } from "@/components/HeroSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { BlogHighlights } from "@/components/BlogHighlights"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"

export default function Home() {
  return (
    <main className="contents">
      <HeroSection />
      <BenefitsSection />
      <SkillsSection />
      <ProcessSection />
      <BlogHighlights />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
