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
    <main className="flex min-h-screen flex-col bg-background">
      <div className="home-lead-grid">
        <HeroSection />
        <BenefitsSection />
        <SkillsSection />
        <ProcessSection />
      </div>
      <div className="flex flex-col divide-y divide-border">
        <BlogHighlights />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  )
}
