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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase">
            <TrendingUp className="h-3 w-3" />
            What You Get
          </div>
          
          <h2 className="ui-heading-1 max-w-3xl">Systems that work while you sleep</h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            More than code. You get reliable systems that scale, perform, and require minimal maintenance.
          </p>
        </div>

        {/* Benefits Grid - 2x2 Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/25"
            >
              {/* Icon with gradient background */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-[1.02]">
                <div className="text-primary">{benefit.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="mb-3 text-sm font-semibold text-primary">
                {benefit.outcome}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {benefit.description}
              </p>

              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-semibold text-foreground">
                <ArrowRight className="w-3 h-3" />
                {benefit.metric}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-muted/0 opacity-0 transition-opacity duration-200 group-hover:bg-muted/40 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="rounded-2xl border border-border bg-foreground p-8 text-background">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Ready to build something great?
              </h3>
              <p className="text-background/80">
                Let's discuss your project and see how I can help you succeed.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-xl text-sm font-semibold hover:scale-105 transition-transform whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
