"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { HomeSection } from "@/components/home/HomeSection"

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
      quote:
        "Working with Mustafa felt like having a technical co-founder. He didn't just code: he challenged our assumptions and helped us build the right product. Launched in 6 weeks.",
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

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="ui-eyebrow inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-amber-800 dark:text-amber-300">
            <Quote className="h-3 w-3" />
            Testimonials
          </div>
          
          <h2 className="ui-heading-1 max-w-2xl">Trusted by builders and teams</h2>
        </div>

        {/* Main Testimonial */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border mb-12">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="ui-quote">
              {currentTestimonial.quote}
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="ui-nav font-bold text-primary-foreground">
                {currentTestimonial.avatar}
              </span>
            </div>
            <div>
              <p className="ui-nav font-semibold text-foreground">{currentTestimonial.author}</p>
              <p className="ui-body">
                {currentTestimonial.title} · {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
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
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-foreground w-8'
                      : 'bg-border w-2 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-6 rounded-2xl border border-border bg-muted/30 p-8">
          <div className="text-center">
            <div className="mb-2 font-sans text-3xl font-bold tabular-nums text-foreground">10+</div>
            <div className="ui-caption text-muted-foreground">Projects Shipped</div>
          </div>
          <div className="border-x border-border text-center">
            <div className="mb-2 font-sans text-3xl font-bold tabular-nums text-foreground">99.9%</div>
            <div className="ui-caption text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-sans text-3xl font-bold tabular-nums text-foreground">100%</div>
            <div className="ui-caption text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
