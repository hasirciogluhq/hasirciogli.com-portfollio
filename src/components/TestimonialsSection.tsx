"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

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

  return (
    <section className="px-4 py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-warning/10 text-brand-warning text-xs font-semibold uppercase tracking-wider">
            <Quote className="w-3 h-3" />
            Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Trusted by builders and teams
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border mb-12">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-warning text-brand-warning" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              {currentTestimonial.quote}
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {currentTestimonial.avatar}
              </span>
            </div>
            <div>
              <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
              <p className="text-sm text-muted-foreground">
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
        <div className="grid grid-cols-3 gap-6 p-8 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Projects Shipped</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
