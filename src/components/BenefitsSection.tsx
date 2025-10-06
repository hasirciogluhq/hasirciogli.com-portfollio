"use client"

import { LiquidGlass } from "./liquid-glass"
import { Zap, Shield, Rocket, TrendingUp } from "lucide-react"

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" strokeWidth={2} />,
      title: "Ship Faster",
      outcome: "Launch in weeks, not months",
      description: "Modern stack, automated deployments, and battle-tested patterns mean your MVP goes live quickly.",
      metric: "3x faster time-to-market"
    },
    {
      icon: <Shield className="w-5 h-5" strokeWidth={2} />,
      title: "Sleep Better",
      outcome: "99.9% uptime, production-ready",
      description: "Built with monitoring, logging, and incident response from day one. No 3 AM panic calls.",
      metric: "Zero downtime deployments"
    },
    {
      icon: <Rocket className="w-5 h-5" strokeWidth={2} />,
      title: "Scale Confidently",
      outcome: "Handle 10x growth without rewrites",
      description: "Architecture designed for scale. When users flood in, your system handles it gracefully.",
      metric: "Built for 100K+ users"
    },
    {
      icon: <TrendingUp className="w-5 h-5" strokeWidth={2} />,
      title: "Reduce Costs",
      outcome: "Optimized infrastructure = lower bills",
      description: "Smart caching, efficient queries, and right-sized infrastructure cut your cloud costs significantly.",
      metric: "40% avg. cost reduction"
    }
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Sol Kolon - İçerik */}
          <div className="flex-1">
            {/* Badge */}
            <LiquidGlass className="inline-block px-3 py-1 rounded-lg !bg-black/5 mb-4">
              <span className="text-xs font-medium text-zinc-700 uppercase tracking-wider">
                What You Gain
              </span>
            </LiquidGlass>

            {/* Başlık */}
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">
              Focus on your business,<br />not firefighting bugs
            </h2>
            
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Working with me means you get more than code. You get systems that work, 
              scale, and let you sleep at night.
            </p>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-zinc-900 mb-1">
                    {benefit.title}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    → {benefit.outcome}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 mb-3 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="inline-block px-2 py-1 bg-zinc-100 rounded text-xs font-medium text-zinc-700">
                    {benefit.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kolon - Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Code/Terminal Visual */}
              <LiquidGlass className="p-6 rounded-2xl !bg-zinc-900 border-none overflow-hidden">
                <div className="space-y-3">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="font-mono text-xs text-green-400 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">$</span>
                      <span>kubectl get deployments</span>
                    </div>
                    <div className="text-zinc-400 pl-4">
                      ✓ app-production   <span className="text-green-400">3/3</span>   Running
                    </div>
                    <div className="text-zinc-400 pl-4">
                      ✓ api-production   <span className="text-green-400">5/5</span>   Running
                    </div>
                    <div className="h-px bg-zinc-800 my-3" />
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">$</span>
                      <span>npm run deploy</span>
                    </div>
                    <div className="text-blue-400 pl-4">
                      Building... Done in 12s
                    </div>
                    <div className="text-green-400 pl-4">
                      ✓ Deployed to production
                    </div>
                    <div className="text-zinc-500 pl-4 text-[10px]">
                      https://your-app.com
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-zinc-800">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">99.9%</div>
                      <div className="text-[10px] text-zinc-500">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">&lt;200ms</div>
                      <div className="text-[10px] text-zinc-500">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">0</div>
                      <div className="text-[10px] text-zinc-500">Downtime</div>
                    </div>
                  </div>
                </div>
              </LiquidGlass>

              {/* Floating metrics */}
              <div className="absolute -top-4 -left-4">
                <LiquidGlass className="px-3 py-2 !bg-white shadow-lg">
                  <div className="text-xs font-medium text-zinc-900">⚡ Fast deploys</div>
                </LiquidGlass>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <LiquidGlass className="px-3 py-2 !bg-white shadow-lg">
                  <div className="text-xs font-medium text-zinc-900">🛡️ Secure by default</div>
                </LiquidGlass>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
