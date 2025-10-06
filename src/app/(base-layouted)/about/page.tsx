"use client"

import { LiquidGlass } from "@/components/liquid-glass"
import { Code, Database, Server, GitBranch, Award, Target, Heart, Zap, Users, TrendingUp } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [imageError, setImageError] = useState(false)
  const techStack = [
    { name: "Go", icon: <Code className="w-4 h-4" />, color: "from-blue-500 to-cyan-500", years: "5+" },
    { name: "Kubernetes", icon: <Server className="w-4 h-4" />, color: "from-blue-500 to-indigo-500", years: "4+" },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, color: "from-blue-400 to-blue-600", years: "6+" },
    { name: "Next.js", icon: <GitBranch className="w-4 h-4" />, color: "from-zinc-400 to-zinc-600", years: "3+" }
  ]

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Craft Over Speed",
      description: "Writing code is a craft. I build the right solutions, not fast ones. Every line should be maintainable even five years from now.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Production First",
      description: "Not demos, but real systems. 99.9% uptime, monitoring, and incident response from day one.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ownership Mindset",
      description: "I don't just write code, I think about the product. With a founder mentality, I take ownership of all aspects of the work.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Clear Communication",
      description: "No technical jargon. I translate complex systems into simple words. Transparency and trust are the foundation of everything.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const journey = [
    {
      year: "2013",
      title: "The Beginning",
      description: "My first line of code. Started with Pascal, then moved to C# and web technologies.",
      icon: "🎯"
    },
    {
      year: "2016",
      title: "Professional Life",
      description: "First professional projects. Started working in e-commerce and fintech.",
      icon: "💼"
    },
    {
      year: "2019",
      title: "Cloud & Infrastructure",
      description: "Focused on Kubernetes and distributed systems. Started managing production systems.",
      icon: "☁️"
    },
    {
      year: "2021",
      title: "Founder Journey",
      description: "Started building my own products. HsrcPay and other projects came to life.",
      icon: "🚀"
    },
    {
      year: "2025",
      title: "Scale & Impact",
      description: "10+ projects, hundreds of thousands of users. Now solving bigger problems.",
      icon: "🌟"
    }
  ]

  const stats = [
    { label: "Years Experience", value: "7+", icon: <Zap className="w-5 h-5" /> },
    { label: "Completed Projects", value: "10+", icon: <Target className="w-5 h-5" /> },
    { label: "In Production", value: "10+", icon: <Server className="w-5 h-5" /> },
    { label: "Lines of Code", value: "5M+", icon: <Code className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-white uppercase tracking-wider">
                    About Me
                  </span>
                </div>
              </LiquidGlass>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Entrepreneurial Developer,
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Production & Scaling Focused
                </span>
              </h1>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  I&apos;m Mustafa. Software engineer, founder, and production systems enthusiast. 
                  I&apos;ve been building software for 12+ years, and creating my own products for the past 5 years.
                </p>

                <p className="text-base text-zinc-400 leading-relaxed">
                  I specialize in cloud infrastructure, distributed systems, and payment systems. 
                  I love working with Go, Kubernetes, and PostgreSQL. I always aim to build production-grade, 
                  scalable systems.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech) => (
                  <LiquidGlass
                    key={tech.name}
                    className="px-4 py-3 rounded-xl !bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700 hover:!bg-zinc-900/60 transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${tech.color} p-2 rounded-lg`}>
                        <div className="text-white">
                          {tech.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{tech.name}</p>
                        <p className="text-xs text-zinc-500">{tech.years} experience</p>
                      </div>
                    </div>
                  </LiquidGlass>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/contact"
                onClick={() => sendGAEvent('event', 'about_cta_click', { category: 'engagement', label: 'Lets Work Together' })}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Let&apos;s Work Together</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right - Professional Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <LiquidGlass className="p-8 rounded-2xl !bg-zinc-900/60 border-zinc-800/50 shadow-2xl">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                      {!imageError ? (
                        <Image 
                          src="/mustafa-hasircioglu.webp"
                          alt="Mustafa Hasırcıoğlu"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
                          MH
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Mustafa Hasırcıoğlu</h3>
                      <p className="text-sm text-zinc-400">Software Engineer · Founder</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stats.map((stat) => (
                      <div key={stat.label} className="p-3 rounded-xl bg-zinc-800/40 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-blue-400">{stat.icon}</div>
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                        </div>
                        <div className="text-xs text-zinc-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expertise */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Expertise</p>
                    <div className="space-y-2">
                      {['Cloud Infrastructure & K8s', 'Payment Systems', 'Distributed Systems', 'Full-Stack Development'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          <span className="text-sm text-zinc-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Projects */}
                  <div className="pt-6 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-semibold">Featured Projects</p>
                    <div className="space-y-2">
                      {['deweloper.cloud', 'hsrcpay.com', 'ficksa.com'].map((project) => (
                        <div key={project} className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 hover:bg-zinc-800/60 transition-colors">
                          <span className="text-sm text-zinc-300 font-medium">{project}</span>
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>
                </LiquidGlass>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4">
                  <LiquidGlass className="px-4 py-2 !bg-zinc-900/80 backdrop-blur-xl shadow-xl border-zinc-800">
                    <div className="text-xs font-semibold text-white">🚀 Active Builder</div>
                  </LiquidGlass>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <LiquidGlass className="px-4 py-2 !bg-zinc-900/80 backdrop-blur-xl shadow-xl border-zinc-800">
                    <div className="text-xs font-semibold text-white">⚡ 99.9% Uptime</div>
                  </LiquidGlass>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 md:py-24 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  My Values
                </span>
              </div>
            </LiquidGlass>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Values & Principles
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Coding isn&apos;t just a job. These values guide me in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <LiquidGlass
                key={index}
                className="p-6 rounded-2xl !bg-zinc-900/40 border-zinc-800/50 hover:!bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.description}</p>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  My Journey
                </span>
              </div>
            </LiquidGlass>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Journey
            </h2>
            <p className="text-zinc-400">
              From first line of code to today, a 12-year adventure.
            </p>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {index < journey.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-zinc-700 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <LiquidGlass className="flex-1 p-6 rounded-xl !bg-zinc-900/40 border-zinc-800/50 group-hover:!bg-zinc-900/60 group-hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </LiquidGlass>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <LiquidGlass className="p-12 text-center !bg-zinc-900/40 border-zinc-800/50">
            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6 italic">
              &ldquo;I failed 20 times but didn&apos;t give up — now I&apos;m on my 21st attempt and I know I&apos;ll win on the 22nd. 
              How will you beat me?&rdquo;
            </blockquote>
            <p className="text-zinc-500 text-sm">— Mustafa Hasırcıoğlu</p>
          </LiquidGlass>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for your project?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            From MVP to production, from idea to scalable system. 
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Get In Touch</span>
              <TrendingUp className="w-5 h-5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900/60 text-white rounded-xl font-semibold hover:bg-zinc-900 transition-all border border-zinc-800"
            >
              <span>View My Projects</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
