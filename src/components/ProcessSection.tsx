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
          <div className="ui-eyebrow inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
            <CheckCircle className="h-3 w-3" />
            Process
          </div>
          
          <h2 className="ui-heading-1 max-w-2xl">From idea to production</h2>
          
          <p className="ui-body max-w-2xl">
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
                      : 'border border-border bg-card text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      activeStep === step.id ? 'bg-background/20' : 'bg-muted'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="ui-nav font-semibold">{step.title}</div>
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
                  <div className="ui-caption text-muted-foreground">Step {currentStep.id}</div>
                  <h3 className="ui-heading-2">
                    {currentStep.title}
                  </h3>
                </div>
              </div>
              <p className="ui-body">
                {currentStep.description}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-4 pl-5 border-l-4 border-l-primary">
              <div className="ui-caption mb-2 font-semibold text-primary">
                What You Get
              </div>
              <p className="ui-body text-foreground">
                {currentStep.outcome}
              </p>
            </div>

            <div>
              <div className="ui-caption mb-3 font-semibold text-muted-foreground">
                Technologies & Practices
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="ui-nav rounded-lg bg-muted px-3 py-1.5 text-foreground"
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
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-sans text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </HomeSection>
  )
}

