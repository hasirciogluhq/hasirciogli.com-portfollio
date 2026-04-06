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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
              Projects I&apos;ve built — <span className="text-primary">from idea to scale</span>
            </h1>

            <p className="ui-body mx-auto mb-8 max-w-3xl text-base">
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

      {/* Projects Grid */}
      <section className="layout-section py-12">
        <div className="layout-container">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: Project) => (
                <div
                  key={project.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`h-full p-0 rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 ${hoveredProject === project.id
                        ? 'scale-105 !border-border shadow-2xl'
                        : 'scale-100'
                      }`}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-primary/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-25">🚀</span>
                      </div>

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="rounded-md border border-border bg-card/95 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 backdrop-blur-sm text-yellow-400 rounded-md border border-yellow-500/30">
                            ⭐ Featured
                          </span>
                        )}
                        {project.beta && (
                          <BetaBadge />
                        )}
                      </div>

                      {/* Metrics Badge */}
                      {project.metrics && (
                        <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <div className="rounded-md border border-border bg-card px-2 py-1 backdrop-blur-sm">
                            <span className="text-xs font-medium text-foreground">{project.metrics.value}</span>
                            <span className="ml-1 text-xs text-muted-foreground">{project.metrics.label}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Title & Role */}
                      <div className="mb-3">
                        <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium">{project.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Pills - Animated like homepage */}
                      <div className={`flex flex-wrap gap-1.5 mb-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-3 border-t border-border">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleProjectClick(project.slug, 'visit')}
                          className="group/link flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>

                        <button
                          className="flex items-center gap-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg text-xs font-medium hover:bg-muted hover:text-foreground transition-all"
                          onClick={() => handleProjectClick(project.slug, 'case_study')}
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted transition-all border border-border"
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
