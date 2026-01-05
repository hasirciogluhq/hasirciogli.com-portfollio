"use client"

import { Calendar, FileText, Mail, ArrowRight } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'

export const CTASection = () => {
  const handleCTAClick = (type: string) => {
    sendGAEvent('event', 'cta_click', {
      category: 'conversion',
      label: type
    })
  }

  return (
    <section className="px-4 py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA */}
        <div className="p-12 rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 text-background text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to build something great?
          </h2>

          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            From MVP to scale, let's turn your vision into production-ready systems.
          </p>

          {/* Primary CTA */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('primary_strategy_call')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg mb-4"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-background/70">
            Free 30-minute consultation · No commitment
          </p>
        </div>

        {/* Micro CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <a
            href="mailto:mustafa@hasirciogluhq.com"
            onClick={() => handleCTAClick('email_direct')}
            className="group p-6 rounded-xl bg-card border border-border hover:border-brand-primary/50 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                  Email Me
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Quick questions? Drop a line.
                </p>
                <p className="text-xs text-brand-primary font-medium">
                  mustafa@hasirciogluhq.com →
                </p>
              </div>
            </div>
          </a>

          {/* Case Study */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('case_study_request')}
            className="group p-6 rounded-xl bg-card border border-border hover:border-brand-success/50 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-success/10 rounded-lg">
                <FileText className="w-5 h-5 text-brand-success" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand-success transition-colors">
                  Case Studies
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  See detailed project breakdowns.
                </p>
                <p className="text-xs text-brand-success font-medium">
                  Request case studies →
                </p>
              </div>
            </div>
          </a>

          {/* Calendar */}
          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick('calendar_booking')}
            className="group p-6 rounded-xl bg-card border border-border hover:border-brand-secondary/50 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-secondary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-brand-secondary" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand-secondary transition-colors">
                  Schedule Call
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Pick a time that works for you.
                </p>
                <p className="text-xs text-brand-secondary font-medium">
                  View calendar →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">10+ startups</span> · 
          <span className="font-semibold text-foreground"> 99.9% uptime</span> · 
          <span className="font-semibold text-foreground"> 7+ years</span> building at scale
        </div>
      </div>
    </section>
  )
}
