"use client"

import Link from "next/link"
import { BetaBadge } from "./BetaBadge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import projectsData from "@/data/projects.json"
import { HomeSection } from "@/components/home/HomeSection"

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
          <div className="ui-eyebrow mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5">
            <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Portfolio
          </div>
          <h2 className="ui-heading-1 mb-3">Selected work</h2>
          <p className="ui-body mx-auto max-w-2xl">
            Real products from idea to scale. Engineering, design decisions, and production constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project: Project) => (
            <div key={project.id} className="relative">
              <div className="surface-card h-full overflow-hidden rounded-xl">
                <div className="relative h-44 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-25">
                    🚀
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="ui-nav rounded-md border border-border/80 bg-background/90 px-2 py-1 text-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.beta && <BetaBadge />}
                  </div>
                  {project.metrics && (
                    <div className="absolute top-3 right-3">
                      <div className="rounded-md border border-border bg-card/95 px-2 py-1 backdrop-blur-sm">
                        <span className="ui-nav font-semibold text-foreground">{project.metrics.value}</span>
                        <span className="ui-caption ml-1">{project.metrics.label}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="ui-heading-3 mb-1">
                      {project.title}
                    </h3>
                    <p className="ui-caption font-medium">{project.role}</p>
                  </div>
                  <p className="ui-body mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="ui-caption rounded-md border border-border bg-muted/60 px-2 py-0.5"
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
                      className="ui-nav flex items-center gap-2 text-muted-foreground"
                    >
                      <span>Visit site</span>
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                    <Link
                      href="/case-studies"
                      onClick={() => handleProjectClick(`${project.slug}_case_study`)}
                      className="ui-nav flex items-center gap-1 text-primary"
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
          <Link href="/projects" className="ui-nav inline-flex items-center gap-2 text-muted-foreground">
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </HomeSection>
  )
}
