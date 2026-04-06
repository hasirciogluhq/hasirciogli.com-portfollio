"use client"

import { Calendar, FileText, Mail, ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { HomeSection } from "@/components/home/HomeSection"

export const CTASection = () => {
  const handleCTAClick = (type: string) => {
    sendGAEvent('event', 'cta_click', {
      category: 'conversion',
      label: type
    })
  }

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Main CTA */}
        <div className="mb-8 rounded-2xl border border-border bg-foreground p-12 text-center text-background">
          <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tight text-background md:text-4xl">
            Ready to build something great?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-background/80">
            From MVP to scale, let's turn your vision into production-ready systems.
          </p>

          {/* Primary CTA */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('primary_strategy_call')}
            className="mb-4 inline-flex items-center gap-3 rounded-xl bg-background px-8 py-4 font-semibold text-foreground shadow-sm transition-opacity duration-200 hover:opacity-90"
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
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:scale-[1.02] hover:border-primary/40"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-primary">
                  Email Me
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Quick questions? Drop a line.
                </p>
                <p className="text-xs font-medium text-primary">
                  mustafa@hasirciogluhq.com →
                </p>
              </div>
            </div>
          </a>

          {/* Case Study */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('case_study_request')}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:scale-[1.02] hover:border-emerald-500/40"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-emerald-500/10 p-3">
                <FileText className="h-5 w-5 text-emerald-700" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-emerald-700">
                  Case Studies
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  See detailed project breakdowns.
                </p>
                <p className="text-xs font-medium text-emerald-700">
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
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:scale-[1.02] hover:border-violet-500/40"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-violet-500/10 p-3">
                <Calendar className="h-5 w-5 text-violet-700" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-violet-700">
                  Schedule Call
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Pick a time that works for you.
                </p>
                <p className="text-xs font-medium text-violet-700">
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
    </HomeSection>
  )
}
