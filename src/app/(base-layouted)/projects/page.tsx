"use client"

import { useState } from "react"

import { BetaBadge } from "@/components/BetaBadge"
import { Reveal } from "@/components/motion/Reveal"
import { revealDelay } from "@/components/motion/reveal-delay"
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
    <section className="home-grid-cell">
      <Reveal variant="left">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Projects
        </p>
        <h1
          className="mt-3 max-w-xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Work that stayed in production.
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {categories.map((category) => {
            const on = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-[13px] ${on ? "font-semibold text-foreground" : "text-[var(--text-secondary)]"}`}
                style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
              >
                {category === "all" ? "All" : category}
              </button>
            )
          })}
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="ml-auto w-36 border-b border-[var(--border-color)] bg-transparent py-1 text-[14px] text-foreground outline-none placeholder:text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          />
        </div>
      </Reveal>

      <ul className="mt-6">
        {filteredProjects.length === 0 ? (
          <li className="border-t border-[var(--border-color)] py-6 text-[15px] italic text-[var(--text-secondary)]">
            Nothing under that name.
          </li>
        ) : (
          filteredProjects.map((project: Project, index: number) => (
            <li key={project.id} className="border-t border-[var(--border-color)]">
              <Reveal variant="rise" delay={revealDelay(index)}>
                <a
                  href={project.liveUrl || "/contact"}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  onClick={() => handleProjectClick(project.slug, "visit")}
                  className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[minmax(0,1.4fr)_8rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <span className="text-[1.15rem] font-medium text-foreground" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                    {project.title}
                    {project.beta ? <BetaBadge className="ml-2 align-middle" /> : null}
                  </span>
                  <span className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
                    {project.category}
                  </span>
                  <span className="text-[15px] italic text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
                    {project.role}
                  </span>
                </a>
              </Reveal>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
