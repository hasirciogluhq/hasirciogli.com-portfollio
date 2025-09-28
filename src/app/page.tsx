"use client"

import { NavbarComponent } from "@/components/navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutHero } from "@/components/AboutHero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main className="min-h-screen bg-[#1A1A1A] text-white pt-20">

      {/* Hero Section */}
        <HeroSection />

        {/* About Hero Section */}
        <AboutHero />

        {/* Problems Section */}
        <ProblemsSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />

      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
