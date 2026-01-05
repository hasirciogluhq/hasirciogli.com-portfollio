"use client"

import { Zap, Shield, Rocket, TrendingUp, ArrowRight } from "lucide-react"

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
    <section className="px-4 py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-success/10 text-brand-success text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3 h-3" />
            What You Get
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            Systems that work while you sleep
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            More than code. You get reliable systems that scale, perform, and require minimal maintenance.
          </p>
        </div>

        {/* Benefits Grid - 2x2 Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/30 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="text-brand-primary">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-sm font-semibold text-brand-primary mb-3">
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 text-background">
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
    </section>
  )
}
