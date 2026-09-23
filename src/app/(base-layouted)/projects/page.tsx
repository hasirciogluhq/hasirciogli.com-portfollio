"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Reveal } from "@/components/motion/Reveal"
import { revealDelay } from "@/components/motion/reveal-delay"
import { sendGAEvent } from "@next/third-parties/google"
import projectsData from "@/data/projects.json"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" }

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

const categories = ["all", "SaaS", "Fintech", "E-commerce", "Social", "Community"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const activeProjects = useMemo(
    () => (projectsData.projects as Project[]).filter((project) => !project._disabled),
    [],
  )

  const technologyCount = useMemo(() => {
    const names = new Set(activeProjects.flatMap((project) => project.technologies))
    return names.size
  }, [activeProjects])

  const filteredProjects = activeProjects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const query = searchTerm.trim().toLowerCase()
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.longDescription.toLowerCase().includes(query) ||
      project.role.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  const handleProjectClick = (projectSlug: string, action: string) => {
    sendGAEvent("event", "project_interaction", {
      category: "engagement",
      label: `${projectSlug}_${action}`,
    })
  }

  const stats = [
    [String(activeProjects.length), "Shipped"],
    [String(activeProjects.filter((project) => project.featured).length), "Featured"],
    [String(technologyCount), "Technologies"],
    ["99.9%", "Uptime in production"],
  ]

  return (
    <>
      <section className="home-grid-cell">
        <Reveal variant="left">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
            Projects
          </p>
          <h1
            className="mt-3 max-w-3xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
            style={display}
          >
            Work that stayed in production.
          </h1>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]" style={serif}>
              Real products, real problems. Each one is months of engineering, architecture calls, and production fights that already happened.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]" style={serif}>
              From an idea to a system that stays up. Payments, commerce, and the stack underneath.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="fade">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
            The count
          </p>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <li key={label} className="border-t border-[var(--border-color)] py-3">
                <p className="text-[1.7rem] font-light tabular-nums text-foreground" style={display}>
                  {value}
                </p>
                <p className="mt-1 text-[15px] italic text-[var(--text-secondary)]" style={serif}>
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="right">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
                Index
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {categories.map((category) => {
                  const on = activeCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`text-[13px] ${on ? "font-semibold text-foreground" : "text-[var(--text-secondary)]"}`}
                      style={serif}
                    >
                      {category === "all" ? "All" : category}
                    </button>
                  )
                })}
              </div>
            </div>
            <label className="block min-w-[12rem] flex-1 sm:max-w-xs">
              <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                Search
              </span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Name, stack, or tag"
                className="w-full border-b border-[var(--border-color)] bg-transparent py-2 text-[16px] text-foreground outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--link-primary)]"
                style={serif}
              />
            </label>
          </div>
          {searchTerm || activeCategory !== "all" ? (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("")
                setActiveCategory("all")
              }}
              className="mt-4 text-[13px] italic text-[var(--link-primary)]"
              style={serif}
            >
              Clear
            </button>
          ) : null}
        </Reveal>
      </section>

      {filteredProjects.length === 0 ? (
        <section className="home-grid-cell">
          <p className="text-[17px] italic text-[var(--text-secondary)]" style={serif}>
            Nothing under that name.
          </p>
        </section>
      ) : (
        filteredProjects.map((project, index) => (
          <section key={project.id} className="home-grid-cell">
            <Reveal variant="rise" delay={revealDelay(index)}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
                  {project.category}
                </p>
                <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-secondary)]" style={serif}>
                  {[
                    project.featured ? "Featured" : null,
                    project.beta ? "Beta" : null,
                    project.metrics ? `${project.metrics.value} ${project.metrics.label}` : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <h2 className="mt-3 text-[2rem] font-light leading-[1.05] text-foreground sm:text-[2.4rem]" style={display}>
                {project.title}
              </h2>
              <p className="mt-2 text-[16px] italic text-[var(--text-secondary)]" style={serif}>
                {project.role}
              </p>
              <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-foreground" style={serif}>
                {project.description}
              </p>
              {project.longDescription && project.longDescription !== project.description ? (
                <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[var(--text-secondary)]" style={serif}>
                  {project.longDescription}
                </p>
              ) : null}

              <ul className="mt-6">
                {project.technologies.map((tech) => (
                  <li key={tech} className="border-t border-[var(--border-color)] py-2.5">
                    <span className="text-[1.02rem] font-medium text-foreground" style={display}>
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              {project.tags.length > 0 ? (
                <p className="mt-4 text-[14px] text-[var(--text-secondary)]" style={serif}>
                  {project.tags.join(" · ")}
                </p>
              ) : null}

              <p className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                <a
                  href={project.liveUrl || "/contact"}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  onClick={() => handleProjectClick(project.slug, "visit")}
                  className="text-[17px] italic text-[var(--link-primary)]"
                  style={serif}
                >
                  Visit
                </a>
                <Link
                  href="/case-studies"
                  onClick={() => handleProjectClick(project.slug, "case_study")}
                  className="text-[17px] italic text-[var(--text-secondary)]"
                  style={serif}
                >
                  Case study
                </Link>
              </p>
            </Reveal>
          </section>
        ))
      )}

      <section className="home-grid-cell">
        <Reveal variant="settle">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
            Next
          </p>
          <h2 className="mt-3 max-w-xl text-[1.7rem] font-light leading-[1.1] text-foreground" style={display}>
            The next one can sit on this page.
          </h2>
          <p className="mt-3 max-w-xl text-[17px] italic text-[var(--text-secondary)]" style={serif}>
            From an MVP to a system that stays up. Idea, scope, and a straight read on what it takes.
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <Link href="/contact" className="text-[17px] italic text-[var(--link-primary)]" style={serif}>
              Write
            </Link>
            <Link href="/about" className="text-[17px] italic text-[var(--text-secondary)]" style={serif}>
              About the work
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  )
}
