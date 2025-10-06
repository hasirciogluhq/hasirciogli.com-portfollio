"use client"

import { useState } from "react"
import { LiquidGlass } from "./liquid-glass"
import { Search, Code, Rocket, TrendingUp } from "lucide-react"

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
      icon: <Search className="w-6 h-6" strokeWidth={2} />,
      title: "Discover",
      description: "We define the right problem",
      outcome: "Clear technical roadmap, architecture decisions, and realistic timeline. No guessing.",
      technologies: ["System Design", "Tech Stack Selection", "Risk Assessment"]
    },
    {
      id: 2,
      icon: <Code className="w-6 h-6" strokeWidth={2} />,
      title: "Build",
      description: "Clean code, tested features",
      outcome: "Production-ready code with tests, documentation, and monitoring from day one.",
      technologies: ["Go", "TypeScript", "PostgreSQL", "Redis"]
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />,
      title: "Ship",
      description: "Deploy with confidence",
      outcome: "Automated CI/CD pipelines, zero-downtime deployments, and instant rollback capability.",
      technologies: ["Kubernetes", "Docker", "Terraform", "CI/CD"]
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      title: "Scale",
      description: "Grow without breaking",
      outcome: "Performance optimization, cost reduction, and systems that handle 10x growth.",
      technologies: ["Load Balancing", "Caching", "Database Optimization"]
    }
  ]

  const currentStep = steps.find(s => s.id === activeStep)!

  return (
    <section className="px-4 py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <LiquidGlass className="inline-block px-3 py-1 rounded-lg !bg-black/5 mb-4">
            <span className="text-xs font-medium text-zinc-700 uppercase tracking-wider">
              Process
            </span>
          </LiquidGlass>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            How I Work
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mx-auto">
            A proven 4-step process that takes your idea from concept to production. No surprises, just results.
          </p>
        </div>

        {/* Desktop: Horizontal Stepper */}
        <div className="hidden md:block">
          {/* Step Pills */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-zinc-900 text-white scale-110 shadow-xl'
                      : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      activeStep === step.id ? 'bg-white/10' : 'bg-zinc-100'
                    }`}>
                      <div className={activeStep === step.id ? 'text-white' : 'text-zinc-600'}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-60 mb-0.5">Step {step.id}</div>
                      <div className="font-semibold">{step.title}</div>
                    </div>
                  </div>
                </button>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 transition-colors ${
                    activeStep > step.id ? 'bg-zinc-900' : 'bg-zinc-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <LiquidGlass className="p-8 rounded-2xl !bg-white border border-zinc-200 shadow-lg">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {currentStep.title}
                </h3>
                <p className="text-base text-zinc-600 mb-6">
                  {currentStep.description}
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                  <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                    What You Get
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    {currentStep.outcome}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                    Example Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl opacity-20">
                    {currentStep.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-semibold text-zinc-600">
                    Step {currentStep.id} of {steps.length}
                  </div>
                </div>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* Mobile: Vertical Stepper */}
        <div className="md:hidden space-y-4">
          {steps.map((step) => (
            <LiquidGlass
              key={step.id}
              className={`p-5 rounded-xl transition-all ${
                activeStep === step.id
                  ? '!bg-zinc-900 text-white scale-105'
                  : '!bg-white text-zinc-900 border border-zinc-200'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg flex-shrink-0 ${
                  activeStep === step.id ? 'bg-white/10' : 'bg-zinc-100'
                }`}>
                  <div className={activeStep === step.id ? 'text-white' : 'text-zinc-600'}>
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold ${
                      activeStep === step.id ? 'text-white/60' : 'text-zinc-500'
                    }`}>
                      Step {step.id}
                    </span>
                    <span className="font-bold text-lg">{step.title}</span>
                  </div>
                  <p className={`text-sm mb-3 ${
                    activeStep === step.id ? 'text-white/80' : 'text-zinc-600'
                  }`}>
                    {step.description}
                  </p>
                  
                  {activeStep === step.id && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className={`p-3 rounded-lg ${
                        activeStep === step.id ? 'bg-white/10' : 'bg-blue-50'
                      }`}>
                        <p className="text-sm leading-relaxed">
                          {step.outcome}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              activeStep === step.id
                                ? 'bg-white/10 text-white'
                                : 'bg-zinc-100 text-zinc-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-zinc-600 mb-4">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Let's Talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

