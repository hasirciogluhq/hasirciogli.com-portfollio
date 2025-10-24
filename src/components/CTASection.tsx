"use client"

import { LiquidGlass } from "./liquid-glass"
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
    <section className="px-4 py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <LiquidGlass className="p-8 md:p-12 rounded-2xl !bg-white border border-zinc-200 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">
            Let&apos;s Build Something Great Together
          </h2>

          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a technical co-founder, a senior engineer, or someone to scale your infrastructure—I&apos;m here to help turn your vision into production-ready systems.
          </p>

          {/* Primary CTA */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('primary_strategy_call')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 mb-4"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs text-zinc-500">
            Free 30-minute consultation · No commitment required
          </p>
        </LiquidGlass>

        {/* Micro CTAs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Email CTA */}
          <a
            href="mailto:mustafa@hasirciogluhq.com"
            onClick={() => handleCTAClick('email_direct')}
            className="group"
          >
            <LiquidGlass className="p-6 rounded-xl !bg-white border border-zinc-200 hover:border-zinc-300 transition-all hover:scale-105 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Email Me Directly
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Quick questions? Drop me a line.
                  </p>
                  <p className="text-xs text-blue-600 mt-2 font-medium">
                    mustafa@hasirciogluhq.com →
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </a>

          {/* Case Study Request */}
          <a
            href="/contact"
            onClick={() => handleCTAClick('case_study_request')}
            className="group"
          >
            <LiquidGlass className="p-6 rounded-xl !bg-white border border-zinc-200 hover:border-zinc-300 transition-all hover:scale-105 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-green-600 transition-colors">
                    Request Case Study
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    See detailed project breakdowns.
                  </p>
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    Get case studies →
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </a>

          {/* Calendar Booking */}
          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick('calendar_booking')}
            className="group"
          >
            <LiquidGlass className="p-6 rounded-xl !bg-white border border-zinc-200 hover:border-zinc-300 transition-all hover:scale-105 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg flex-shrink-0">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-purple-600 transition-colors">
                    Schedule a Call
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Pick a time that works for you.
                  </p>
                  <p className="text-xs text-purple-600 mt-2 font-medium">
                    View calendar →
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </a>
        </div>

        {/* Social Proof Line */}
        <div className="text-center">
          <p className="text-sm text-zinc-600">
            Trusted by <span className="text-zinc-900 font-semibold">10+ startups and teams</span> · 
            <span className="text-zinc-900 font-semibold"> 99.9% uptime</span> on production systems · 
            <span className="text-zinc-900 font-semibold"> 7+ years</span> building at scale
          </p>
        </div>
      </div>
    </section>
  )
}
