"use client"

import { HeroSection } from "@/components/HeroSection";
import { AboutHero } from "@/components/AboutHero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProblemsSection } from "@/components/ProblemsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogHighlights } from "@/components/BlogHighlights";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/NavBar";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";

export default function Home() {
  return (
    <>
      {/* <NavbarComponentByClaude2 /> */}
      <main className="min-h-screen bg-background pt-20">

        {/* Hero Section */}
        <HeroSection />
      </main>
    </>
  );
}
