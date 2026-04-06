"use client"

import { Calendar, FileText, Mail, ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { HomeSection } from "@/components/home/HomeSection"

export const CTASection = () => {
  const handleCTAClick = (type: string) => {
    sendGAEvent("event", "cta_click", {
      category: "conversion",
      label: type,
    })
  }

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        <div className="surface-cta mb-8">
          <h2 className="surface-cta-title">Ready to build something great?</h2>

          <p className="surface-cta-body">
            From MVP to scale, let&apos;s turn your vision into production-ready systems.
          </p>

          <a
            href="/contact"
            onClick={() => handleCTAClick("primary_strategy_call")}
            className="surface-cta-button"
          >
            <Calendar className="h-5 w-5" aria-hidden />
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>

          <p className="surface-cta-note">Free 30-minute consultation · No commitment</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href="mailto:mustafa@hasirciogluhq.com"
            onClick={() => handleCTAClick("email_direct")}
            className="group rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="ui-heading-3 mb-1">Email Me</h3>
                <p className="ui-body mb-2">Quick questions? Drop a line.</p>
                <p className="ui-caption font-medium text-primary">mustafa@hasirciogluhq.com →</p>
              </div>
            </div>
          </a>

          <a
            href="/contact"
            onClick={() => handleCTAClick("case_study_request")}
            className="group rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-emerald-500/10 p-2.5">
                <FileText className="h-5 w-5 text-emerald-700 dark:text-emerald-400" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="ui-heading-3 mb-1">Case Studies</h3>
                <p className="ui-body mb-2">See detailed project breakdowns.</p>
                <p className="ui-caption font-medium text-emerald-700 dark:text-emerald-400">
                  Request case studies →
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick("calendar_booking")}
            className="group rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-violet-500/10 p-2.5">
                <Calendar className="h-5 w-5 text-violet-700 dark:text-violet-400" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="ui-heading-3 mb-1">Schedule Call</h3>
                <p className="ui-body mb-2">Pick a time that works for you.</p>
                <p className="ui-caption font-medium text-violet-700 dark:text-violet-400">
                  View calendar →
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="ui-body mt-10 text-center">
          <span className="font-semibold text-foreground">10+ startups</span>
          {" · "}
          <span className="font-semibold text-foreground">99.9% uptime</span>
          {" · "}
          <span className="font-semibold text-foreground">7+ years</span> building at scale
        </div>
      </div>
    </HomeSection>
  )
}
