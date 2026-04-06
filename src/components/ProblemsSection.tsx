"use client"

import { useState } from "react"
import { Target, Zap, Briefcase, Code, ArrowRight, Check } from "lucide-react"
import { HomeSection } from "@/components/home/HomeSection"

type Persona = "founders" | "infra-teams" | "developers" | "indie-makers"

interface PersonaData {
  id: Persona
  label: string
  icon: React.ReactNode
  problems: Array<{
    title: string
    description: string
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
        },
        {
          title: "You need someone who thinks like a co-founder",
          description: "Not just code execution — you need strategic technical decisions and ownership mentality.",
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
        },
        {
          title: "Observability and incident response gaps",
          description: "When things break at 3 AM, you need systems that help you diagnose and fix issues fast.",
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
        },
        {
          title: "Your portfolio doesn't reflect your potential",
          description: "Todo apps and clones won't land you the job. You need projects that showcase real engineering thinking.",
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
        },
        {
          title: "You're wearing too many hats",
          description: "Designer, developer, marketer, support... You need someone to own the technical side so you can focus on growth.",
        }
      ],
      outcome: "Ship your product faster with solid technical foundations and focus on what you do best.",
      cta: "Ship your idea"
    }
  ]

  const currentPersona = personas.find(p => p.id === activePersona)!

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            <Target className="h-3 w-3" />
            Who I Help
          </div>
          
          <h2 className="ui-heading-1 max-w-2xl">Built for builders, optimized for results</h2>
        </div>

        {/* Minimal Persona Selector */}
        <div className="flex flex-wrap gap-2 mb-12">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activePersona === persona.id
                  ? 'bg-foreground text-background'
                  : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span className="flex items-center gap-2">
                {persona.icon}
                {persona.label}
              </span>
              {activePersona === persona.id && (
                <div className="absolute inset-0 -z-10 rounded-xl bg-primary/5" />
              )}
            </button>
          ))}
        </div>

        {/* Clean Problems Display */}
        <div className="space-y-4 mb-10">
          {currentPersona.problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome Statement */}
        <div className="rounded-2xl border border-border bg-muted/30 p-8">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            {currentPersona.outcome}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
          >
            {currentPersona.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </HomeSection>
  )
}
