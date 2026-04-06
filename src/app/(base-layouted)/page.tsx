"use client"

import { HeroSection } from "@/components/HeroSection"
import { FeaturedProjects } from "@/components/FeaturedProjects"
import { ProblemsSection } from "@/components/ProblemsSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { BlogHighlights } from "@/components/BlogHighlights"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col divide-y divide-border bg-background">
      <HeroSection />
      <FeaturedProjects />
      <ProblemsSection />
      <BenefitsSection />
      <SkillsSection />
      <ProcessSection />
      <BlogHighlights />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
