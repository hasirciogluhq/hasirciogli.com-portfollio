"use client"

import { useState } from "react"

import { ExternalLink, ArrowRight, Clock, TrendingUp, Users, Zap } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'
import projectsData from "@/data/projects.json"

interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  role: string
  category: string
  tags: string[]
  technologies: string[]
  liveUrl: string
  featured: boolean
  imageUrl: string
  metrics?: {
    label: string
    value: string
  }
}

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "Fintech", "Infrastructure", "E-commerce", "Gaming"]

  const filteredProjects = selectedCategory === "all"
    ? projectsData.projects
    : projectsData.projects.filter((p: Project) => p.category === selectedCategory)

  const handleCaseStudyClick = (projectSlug: string) => {
    sendGAEvent('event', 'case_study_click', {
      category: 'engagement',
      label: projectSlug
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60">
        <div className="layout-container ui-enter py-16 pb-12 pt-[var(--page-content-pt)]">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-block rounded-md border border-border bg-muted px-3 py-1.5">
              <div className="flex items-center gap-2">
                <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="ui-kicker">Case studies</span>
              </div>
            </div>

            <h1 className="ui-heading-1 mb-6">
              Zero to production: <span className="text-primary">real impact</span>
            </h1>

            <p className="ui-body mx-auto max-w-3xl leading-relaxed">
              Deep dives into projects I&apos;ve built from scratch. See the problems, solutions, architecture decisions, and outcomes.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, label: "Projects", value: projectsData.projects.length },
              { icon: <Users className="w-5 h-5" />, label: "Users Served", value: "100K+" },
              { icon: <Zap className="w-5 h-5" />, label: "Uptime", value: "99.9%" },
              { icon: <Clock className="w-5 h-5" />, label: "In Production", value: "24/7" }
            ].map((stat, index) => (
              <div key={index} className="surface-card p-4 text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-12 z-40 border-b border-border bg-background/95 py-6 backdrop-blur-sm">
        <div className="layout-container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="ui-heading-3">Case Studies ({filteredProjects.length})</h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section py-16">
        <div className="layout-container">
          {filteredProjects.length > 0 ? (
            <div className="space-y-8">
              {(filteredProjects as Project[]).map((project, index) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-border bg-card p-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Image/Visual Side */}
                    <div className="relative h-64 overflow-hidden bg-muted lg:col-span-2 lg:h-auto">
                      <div className="absolute inset-0 bg-primary/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20">
                          {index === 0 ? "💳" : index === 1 ? "☁️" : index === 2 ? "🛒" : "🎮"}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="rounded-lg border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Metrics Badge */}
                      {project.metrics && (
                        <div className="absolute bottom-4 right-4">
                          <div className="rounded-md border border-border bg-card px-3 py-2 backdrop-blur-sm">
                            <div className="text-xs text-foreground font-medium">{project.metrics.value}</div>
                            <div className="text-[10px] text-muted-foreground">{project.metrics.label}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-3 p-8">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="mb-2 text-2xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">{project.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.longDescription || project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleCaseStudyClick(project.slug)}
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          <span>Visit Live Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        <button
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => handleCaseStudyClick(`${project.slug}_detailed`)}
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="surface-card inline-flex flex-col items-center gap-4 p-12">
                <div className="text-6xl">📂</div>
                <h3 className="text-xl font-semibold text-foreground">No case studies found</h3>
                <p className="text-muted-foreground max-w-md">
                  Try selecting a different category or check back later for new case studies.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="layout-section border-t border-border py-16">
        <div className="layout-container max-w-4xl text-center">
          <div className="surface-card p-10">
            <h2 className="ui-heading-2 mb-3 md:text-2xl">Want your own case study?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground md:text-base">
              From idea to production: systems that scale.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <span>About</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

