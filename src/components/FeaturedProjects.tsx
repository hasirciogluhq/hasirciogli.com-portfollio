"use client"

import { useState } from "react"
import Link from "next/link"
import { BetaBadge } from "./BetaBadge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import projectsData from "@/data/projects.json"
import { HomeSection } from "@/components/home/HomeSection"
import { cn } from "@/lib/utils"

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

export const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const featuredProjects = projectsData.projects.filter((p: Project) => p.featured && !p._disabled)

  const handleProjectClick = (projectSlug: string) => {
    sendGAEvent("event", "project_card_click", {
      category: "engagement",
      label: projectSlug,
    })
  }

  return (
    <HomeSection>
      <div className="ui-enter">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Portfolio
          </div>
          <h2 className="ui-heading-1 mb-3">Selected work</h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Real products from idea to scale. Engineering, design decisions, and production constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={cn(
                  "surface-card h-full overflow-hidden rounded-xl transition-all duration-200",
                  hoveredProject === project.id && "shadow-md ring-1 ring-primary/20"
                )}
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-25">
                    🚀
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-md border border-border/80 bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.beta && <BetaBadge />}
                  </div>
                  {project.metrics && (
                    <div
                      className={cn(
                        "absolute top-3 right-3 transition-opacity",
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="rounded-md border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
                        <span className="text-xs font-semibold text-foreground">{project.metrics.value}</span>
                        <span className="ml-1 text-xs text-muted-foreground">{project.metrics.label}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">{project.role}</p>
                  </div>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div
                    className={cn(
                      "mb-4 flex flex-wrap gap-1.5 transition-all duration-200",
                      hoveredProject === project.id ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                    )}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project.slug)}
                      className="group/link flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span>Visit site</span>
                      <ExternalLink className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                    <Link
                      href="/case-studies"
                      onClick={() => handleProjectClick(`${project.slug}_case_study`)}
                      className="flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Case studies
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </HomeSection>
  )
}
