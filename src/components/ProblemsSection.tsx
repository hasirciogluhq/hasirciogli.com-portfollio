"use client"

import { useState } from "react"
import { LiquidGlass } from "./liquid-glass"
import { Target, Zap, Briefcase, Code } from "lucide-react"

type Persona = "founders" | "infra-teams" | "developers" | "indie-makers"

interface PersonaData {
  id: Persona
  label: string
  icon: React.ReactNode
  problems: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
  outcome: string
  cta: string
}

export const ProblemsSection = () => {
  const [activePersona, setActivePersona] = useState<Persona>("founders")

  const personas: PersonaData[] = [
    {
      id: "founders",
      label: "Founders",
      icon: <Target className="w-4 h-4" />,
      problems: [
        {
          title: "Technical debt is slowing you down",
          description: "Your MVP worked, but now scaling is painful. Every new feature takes weeks instead of days.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )
        },
        {
          title: "You need someone who thinks like a co-founder",
          description: "Not just code execution — you need strategic technical decisions and ownership mentality.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ],
      outcome: "Ship faster, scale confidently, and build a technical foundation that grows with your business.",
      cta: "Let's build together"
    },
    {
      id: "infra-teams",
      label: "Infra Teams",
      icon: <Zap className="w-4 h-4" />,
      problems: [
        {
          title: "Kubernetes is complex, deployments are risky",
          description: "You need reliability at scale but managing clusters and orchestration is consuming your team's bandwidth.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          )
        },
        {
          title: "Observability and incident response gaps",
          description: "When things break at 3 AM, you need systems that help you diagnose and fix issues fast.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ],
      outcome: "Build resilient infrastructure with clear observability, automated deployments, and peace of mind.",
      cta: "Strengthen your stack"
    },
    {
      id: "developers",
      label: "Developers",
      icon: <Code className="w-4 h-4" />,
      problems: [
        {
          title: "You want to level up but don't know how",
          description: "Junior to mid-level? You're writing code but not building systems. You need mentorship and real-world challenges.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Your portfolio doesn't reflect your potential",
          description: "Todo apps and clones won't land you the job. You need projects that showcase real engineering thinking.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        }
      ],
      outcome: "Accelerate your growth with hands-on experience on production systems and direct mentorship.",
      cta: "Start your journey"
    },
    {
      id: "indie-makers",
      label: "Indie Makers",
      icon: <Briefcase className="w-4 h-4" />,
      problems: [
        {
          title: "You have ideas but struggle with execution",
          description: "You know what to build but get stuck on architecture, deployment, or scaling. You need a technical partner.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        },
        {
          title: "You're wearing too many hats",
          description: "Designer, developer, marketer, support... You need someone to own the technical side so you can focus on growth.",
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ],
      outcome: "Ship your product faster with solid technical foundations and focus on what you do best.",
      cta: "Ship your idea"
    }
  ]

  const currentPersona = personas.find(p => p.id === activePersona)!

  return (
    <section className="px-4 py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <LiquidGlass className="inline-block px-3 py-1 rounded-lg !bg-white/5 mb-4">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Who I Help
            </span>
          </LiquidGlass>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Are you one of these?
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            I work with different types of builders. Choose your profile to see how I can help.
          </p>
        </div>

        {/* Persona Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activePersona === persona.id
                  ? 'bg-white text-zinc-900'
                  : 'bg-zinc-800/40 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200'
              }`}
            >
              <span className="flex items-center gap-2">
                {persona.icon}
                {persona.label}
              </span>
            </button>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentPersona.problems.map((problem, index) => (
            <LiquidGlass
              key={index}
              className="p-6 rounded-xl !bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-400">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* Outcome & CTA */}
        <div className="text-center">
          <LiquidGlass className="inline-block p-6 rounded-2xl !bg-zinc-900/60 border border-zinc-800 max-w-2xl">
            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              <span className="text-white font-semibold">The Outcome: </span>
              {currentPersona.outcome}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors"
            >
              {currentPersona.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </LiquidGlass>
        </div>
      </div>
    </section>
  )
}
