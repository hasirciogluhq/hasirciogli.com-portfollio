"use client"

import { useState } from "react"

import { BetaBadge } from "@/components/BetaBadge"
import { ExternalLink, ArrowRight, Filter, Search } from "lucide-react"
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
  beta?: boolean
  imageUrl: string
  metrics?: {
    label: string
    value: string
  }
  _disabled?: boolean
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const categories = ["all", "SaaS", "Fintech", "E-commerce", "Social", "Community"]

  // Filter out disabled projects
  const activeProjects = projectsData.projects.filter((p: Project) => !p._disabled)

  const filteredProjects = activeProjects.filter((project: Project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const matchesSearch = searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const handleProjectClick = (projectSlug: string, action: string) => {
    sendGAEvent('event', 'project_interaction', {
      category: 'engagement',
      label: `${projectSlug}_${action}`
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
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="ui-kicker">Portfolio</span>
              </div>
            </div>

            <h1 className="ui-heading-1 mb-4">
              Projects I&apos;ve built: <span className="text-primary">from idea to scale</span>
            </h1>

            <p className="ui-body mx-auto mb-8 max-w-3xl">
              Real products solving real problems. Each project represents months of engineering, architectural
              decisions, and production battles won.
            </p>

            <div className="mx-auto max-w-2xl">
              <div className="surface-card flex items-center gap-3 px-4 py-3">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                <input
                  type="search"
                  placeholder="Search projects… (technology, category, name)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Total Projects", value: activeProjects.length },
              { label: "Active Projects", value: activeProjects.filter((p: Project) => p.featured).length },
              { label: "Technologies", value: "10+" },
              { label: "In Production", value: "99.9% Uptime" },
            ].map((stat, index) => (
              <div key={index} className="surface-card p-4 text-center">
                <div className="mb-1 text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="layout-section sticky top-12 z-40 border-b border-border bg-background/95 py-6 backdrop-blur-md">
        <div className="layout-container">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="ml-auto text-xs text-muted-foreground hover:text-muted-foreground transition-colors"
              >
                Clear Filters ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects list (compact) */}
      <section className="layout-section py-8">
        <div className="layout-container max-w-4xl">
          {filteredProjects.length > 0 ? (
            <ul className="divide-y divide-border rounded-xl border border-border bg-card">
              {filteredProjects.map((project: Project) => (
                <li key={project.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-6">
                  <div
                    className="relative flex h-16 w-full shrink-0 items-center justify-center rounded-md border border-border bg-muted sm:h-20 sm:w-28"
                    aria-hidden
                  >
                    <span className="text-2xl opacity-40 sm:text-3xl">🚀</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <span className="ui-caption rounded border border-border bg-background px-1.5 py-0.5 font-medium text-foreground">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="ui-caption rounded border border-yellow-500/35 bg-yellow-500/10 px-1.5 py-0.5 font-medium text-yellow-700 dark:text-yellow-400">
                          Featured
                        </span>
                      )}
                      {project.beta && <BetaBadge />}
                      {project.metrics && (
                        <span className="ui-caption text-muted-foreground">
                          {project.metrics.value}{" "}
                          <span className="text-muted-foreground/90">{project.metrics.label}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="ui-heading-3 mb-0.5">{project.title}</h3>
                    <p className="ui-caption mb-2 font-medium text-muted-foreground">{project.role}</p>
                    <p className="ui-body mb-3 line-clamp-2">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="ui-caption rounded border border-border bg-muted/60 px-1.5 py-0.5 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="ui-caption text-muted-foreground">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleProjectClick(project.slug, "visit")}
                        className="ui-nav inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 font-semibold text-primary-foreground"
                      >
                        <span>Visit</span>
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                      <a
                        href="/case-studies"
                        onClick={() => handleProjectClick(project.slug, "case_study")}
                        className="ui-nav inline-flex items-center gap-1 rounded-md border border-border bg-muted px-3 py-1.5 font-medium text-foreground"
                      >
                        Case studies
                        <ArrowRight className="h-3 w-3" aria-hidden />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-20">
              <div className="surface-card inline-flex flex-col items-center gap-4 p-12">
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold text-foreground">No results found</h3>
                <p className="text-muted-foreground max-w-md">
                  No projects match your search criteria. Please try changing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                  className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="layout-section border-t border-border py-16">
        <div className="layout-container text-center">
          <div className="surface-card border p-10">
            <h2 className="ui-heading-1 mb-4">Your next project could be here</h2>
            <p className="ui-body mx-auto mb-8 max-w-2xl">
              From MVP to production, from idea to scalable system.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted px-8 py-4 font-semibold text-foreground"
              >
                <span>Learn More About Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
