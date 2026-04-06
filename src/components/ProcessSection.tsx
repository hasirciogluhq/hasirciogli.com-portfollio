"use client"

import { useState } from "react"
import { Search, Code, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { HomeSection } from "@/components/home/HomeSection"

interface ProcessStep {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  outcome: string
  technologies: string[]
}

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number>(1)

  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: <Search className="w-6 h-6" />,
      title: "Discover",
      description: "Define the right problem",
      outcome: "Clear technical roadmap, architecture decisions, and realistic timeline. No guessing.",
      technologies: ["System Design", "Tech Stack", "Risk Assessment"]
    },
    {
      id: 2,
      icon: <Code className="w-6 h-6" />,
      title: "Build",
      description: "Clean code, tested features",
      outcome: "Production-ready code with tests, documentation, and monitoring from day one.",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Redis"]
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6" />,
      title: "Ship",
      description: "Deploy with confidence",
      outcome: "Automated CI/CD pipelines, zero-downtime deployments, and instant rollback capability.",
      technologies: ["Kubernetes", "Docker", "Terraform", "CI/CD"]
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scale",
      description: "Grow without breaking",
      outcome: "Performance optimization, cost reduction, and systems that handle 10x growth.",
      technologies: ["Load Balancing", "Caching", "Optimization"]
    }
  ]

  const currentStep = steps.find(s => s.id === activeStep)!

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            <CheckCircle className="h-3 w-3" />
            Process
          </div>
          
          <h2 className="ui-heading-1 max-w-2xl">From idea to production</h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A proven 4-step process that takes projects from concept to scale. Predictable, transparent, results-driven.
          </p>
        </div>

        {/* Process Steps - Horizontal */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 flex items-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full p-4 rounded-xl transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-foreground text-background'
                      : 'bg-card text-muted-foreground hover:bg-accent border border-border'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      activeStep === step.id ? 'bg-background/20' : 'bg-muted'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="text-sm font-semibold">{step.title}</div>
                  </div>
                </button>
                {index < steps.length - 1 && (
                  <ArrowRight className={`flex-shrink-0 mx-2 w-4 h-4 ${
                    activeStep > step.id ? 'text-foreground' : 'text-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Details */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <div className="text-primary">{currentStep.icon}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Step {currentStep.id}</div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentStep.title}
                  </h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                {currentStep.description}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-4 pl-5 border-l-4 border-l-primary">
              <div className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase">
                What You Get
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {currentStep.outcome}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Technologies & Practices
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </HomeSection>
  )
}

