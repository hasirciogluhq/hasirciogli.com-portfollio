"use client"

import { useState } from "react"
import { LiquidGlass } from "./liquid-glass"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  avatar: string
  rating: number
}

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      quote: "Mustafa built our entire payment infrastructure from scratch. His deep understanding of security and scalability gave us confidence to process millions in transactions. Zero downtime since launch.",
      author: "Ahmet Y.",
      title: "CEO",
      company: "Fintech Startup",
      avatar: "AY",
      rating: 5
    },
    {
      quote: "We needed Kubernetes expertise fast. Mustafa not only migrated our entire stack but also trained our team. Our deployment time went from hours to minutes. Best investment we made.",
      author: "Sarah K.",
      title: "CTO",
      company: "SaaS Platform",
      avatar: "SK",
      rating: 5
    },
    {
      quote: "Working with Mustafa felt like having a technical co-founder. He didn't just code—he challenged our assumptions and helped us build the right product. Launched in 6 weeks.",
      author: "Mehmet D.",
      title: "Founder",
      company: "E-commerce",
      avatar: "MD",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  // Company logos (placeholder - replace with real logos)
  const companies = [
    { name: "Deweloper Cloud", logo: "DC" },
    { name: "HsrcPay", logo: "HP" },
    { name: "Ficksa", logo: "FK" },
    { name: "AnonimSor", logo: "AS" }
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <LiquidGlass className="inline-block px-3 py-1 rounded-lg !bg-black/5 mb-4">
            <span className="text-xs font-medium text-zinc-700 uppercase tracking-wider">
              Testimonials
            </span>
          </LiquidGlass>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Trusted by Founders & Teams
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mx-auto">
            Real results from real projects. Here&apos;s what clients say about working with me.
          </p>
        </div>

        {/* Company Logos Strip */}
        <div className="mb-12">
          <p className="text-center text-xs text-zinc-500 uppercase tracking-wider mb-6">
            Projects I&apos;ve Built
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company) => (
              <LiquidGlass
                key={company.name}
                className="px-6 py-3 rounded-lg !bg-white border border-zinc-200 hover:border-zinc-300 transition-all"
              >
                <div className="text-zinc-700 font-semibold text-sm">
                  {company.logo}
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <LiquidGlass className="p-8 md:p-12 rounded-2xl !bg-white border border-zinc-200">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed italic">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {currentTestimonial.avatar}
                </span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900">{currentTestimonial.author}</p>
                <p className="text-sm text-zinc-600">
                  {currentTestimonial.title} · {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-zinc-900 w-6'
                        : 'bg-zinc-300 hover:bg-zinc-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </LiquidGlass>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-1">15+</div>
            <div className="text-sm text-zinc-600">Projects Shipped</div>
          </div>
          <div className="text-center border-x border-zinc-300">
            <div className="text-3xl font-bold text-zinc-900 mb-1">99.9%</div>
            <div className="text-sm text-zinc-600">Uptime Agreements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-1">100%</div>
            <div className="text-sm text-zinc-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
