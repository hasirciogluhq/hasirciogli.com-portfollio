"use client"

import { LiquidGlass } from "./liquid-glass"
import Image from "next/image"
import { sendGAEvent } from '@next/third-parties/google'
import { Code, Database, Server, GitBranch } from "lucide-react"

export const AboutHero = () => {
  const techStack = [
    { name: "Go", icon: <Code className="w-4 h-4" />, color: "from-blue-500 to-cyan-500" },
    { name: "Kubernetes", icon: <Server className="w-4 h-4" />, color: "from-blue-500 to-indigo-500" },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", icon: <GitBranch className="w-4 h-4" />, color: "from-zinc-400 to-zinc-600" }
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Column - Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-block mb-8">
              <LiquidGlass className="px-3 py-1.5 rounded-lg !bg-white border border-zinc-200">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-3 h-3 text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-zinc-900 uppercase tracking-wider">
                    About Me
                  </span>
                </div>
              </LiquidGlass>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-6">
              Entrepreneurial Developer,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Production & Scaling Focused
              </span>
            </h2>

            {/* Description Text */}
            <div className="max-w-2xl space-y-4 mb-8">
              <p className="text-base text-zinc-700 leading-relaxed">
                I&apos;m an engineer and founder-focused developer who specializes in taking software products from concept to production,
                designing and building scalable, secure, and maintainable systems.
              </p>

              <p className="text-base text-zinc-600 leading-relaxed">
                Over <span className="text-zinc-900 font-semibold">12 years</span>, I&apos;ve developed cloud-based infrastructures, payment
                systems, and e-commerce solutions. I make product decisions based on data, operational reality, and user needs.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {techStack.map((tech) => (
                <LiquidGlass
                  key={tech.name}
                  className="px-3 py-2 rounded-lg !bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <div className={`bg-gradient-to-r ${tech.color} p-1 rounded text-white`}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-700">{tech.name}</span>
                  </div>
                </LiquidGlass>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-500 pl-6 mb-8">
              <p className="text-base text-zinc-600 italic leading-relaxed">
                &ldquo;I failed 20 times but didn&apos;t give up — now I&apos;m on my 21st attempt and I know I&apos;ll win on the 22nd.
                How will you beat me?&rdquo;
              </p>
            </blockquote>

            {/* Projects Highlight */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 mb-1">10+</div>
                <div className="text-xs text-zinc-600">Projects</div>
              </div>
              <div className="text-center border-x border-zinc-300">
                <div className="text-2xl font-bold text-zinc-900 mb-1">7+</div>
                <div className="text-xs text-zinc-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 mb-1">1</div>
                <div className="text-xs text-zinc-600">Company</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/about"
              onClick={() => sendGAEvent('event', 'about_cta_click', { category: 'engagement', label: 'Continue My Story' })}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Continue My Story</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Column - Visual Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <LiquidGlass className="p-8 rounded-2xl !bg-white border border-zinc-200 shadow-xl overflow-hidden">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    MH
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">Mustafa Hasırcıoğlu</h3>
                    <p className="text-sm text-zinc-600">Software Engineer · Founder</p>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-zinc-700">Cloud Infrastructure & Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-zinc-700">Payment Systems & Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-zinc-700">Full-Stack Development</span>
                  </div>
                </div>

                {/* Featured Projects */}
                <div className="pt-6 border-t border-zinc-200">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Featured Projects</p>
                  <div className="space-y-2">
                    {['ficksa.com', 'hsrcpay.com', 'anonimsor.com'].map((project) => (
                      <div key={project} className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                        <span className="text-sm text-zinc-700 font-medium">{project}</span>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </LiquidGlass>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4">
                <LiquidGlass className="px-4 py-2 !bg-white shadow-xl">
                  <div className="text-xs font-semibold text-zinc-900">🚀 Active Builder</div>
                </LiquidGlass>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <LiquidGlass className="px-4 py-2 !bg-white shadow-xl">
                  <div className="text-xs font-semibold text-zinc-900">⚡ 99.9% Uptime</div>
                </LiquidGlass>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 pt-12 border-t border-zinc-200">
          <p className="text-sm text-zinc-600 italic">
            &ldquo;The best way to predict the future is to create it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
