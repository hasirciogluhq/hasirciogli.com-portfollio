"use client"

import { Zap, Shield, Rocket, TrendingUp, ArrowRight } from "lucide-react"
import { HomeSection } from "@/components/home/HomeSection"

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ship Faster",
      outcome: "Launch in weeks, not months",
      description: "Modern stack, automated deployments, and battle-tested patterns mean your MVP goes live quickly.",
      metric: "3x faster"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sleep Better",
      outcome: "99.9% uptime, production-ready",
      description: "Built with monitoring, logging, and incident response from day one. No 3 AM panic calls.",
      metric: "Zero downtime"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scale Confidently",
      outcome: "Handle 10x growth without rewrites",
      description: "Architecture designed for scale. When users flood in, your system handles it gracefully.",
      metric: "100K+ users"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Reduce Costs",
      outcome: "Optimized infrastructure = lower bills",
      description: "Smart caching, efficient queries, and right-sized infrastructure cut your cloud costs significantly.",
      metric: "40% reduction"
    }
  ]

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="ui-eyebrow inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-800 dark:text-emerald-300">
            <TrendingUp className="h-3 w-3" />
            What You Get
          </div>
          
          <h2 className="ui-heading-1 max-w-3xl">Systems that work while you sleep</h2>
          
          <p className="ui-body max-w-2xl">
            More than code. You get reliable systems that scale, perform, and require minimal maintenance.
          </p>
        </div>

        {/* Benefits Grid - 2x2 Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              {/* Icon with gradient background */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <div className="text-primary">{benefit.icon}</div>
              </div>

              {/* Content */}
              <h3 className="ui-heading-2 mb-2">
                {benefit.title}
              </h3>
              
              <p className="ui-nav mb-3 font-semibold text-primary">
                {benefit.outcome}
              </p>
              
              <p className="ui-body mb-4">
                {benefit.description}
              </p>

              {/* Metric Badge */}
              <div className="ui-caption inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 font-semibold text-foreground">
                <ArrowRight className="w-3 h-3" />
                {benefit.metric}
              </div>

            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="surface-cta-band">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="surface-cta-band-title">Ready to build something great?</h3>
              <p className="surface-cta-band-body">
                Let&apos;s discuss your project and see how I can help you succeed.
              </p>
            </div>
            <a href="/contact" className="surface-cta-band-button">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
