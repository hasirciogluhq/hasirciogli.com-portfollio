"use client"

import { useMemo, useState } from "react"
import skillsData from "@/data/skills.json"
import projectsData from "@/data/projects.json"
import { Code2, Sparkles } from "lucide-react"
import { HomeSection } from "@/components/home/HomeSection"

interface Skill {
  name: string
  category: string
  proficiency: number
  projects: string[]
}

type CategoryFilter = "all" | "Languages" | "Frontend" | "Backend" | "DevOps" | "Cloud" | "Tools" | "Architecture"

const CATEGORY_BORDER: Record<string, string> = {
  Languages: "border-l-[3px] border-l-primary",
  Frontend: "border-l-[3px] border-l-violet-500",
  Backend: "border-l-[3px] border-l-emerald-600",
  DevOps: "border-l-[3px] border-l-amber-600",
  Cloud: "border-l-[3px] border-l-sky-600",
  Tools: "border-l-[3px] border-l-destructive",
  Architecture: "border-l-[3px] border-l-primary",
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all")

  const categories: CategoryFilter[] = [
    "all",
    "Languages",
    "Frontend",
    "Backend",
    "DevOps",
    "Cloud",
    "Tools",
    "Architecture",
  ]

  const filteredSkills = useMemo(() => {
    return activeCategory === "all"
      ? skillsData.skills
      : skillsData.skills.filter((skill: Skill) => skill.category === activeCategory)
  }, [activeCategory])

  const getProjectNames = (projectSlugs: string[]) => {
    return projectSlugs
      .map(
        (slug) =>
          projectsData.projects.find(
            (p: { slug: string; _disabled?: boolean }) => p.slug === slug && !p._disabled
          )?.title
      )
      .filter(Boolean) as string[]
  }

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 space-y-3">
          <div className="ui-eyebrow inline-flex items-center gap-2 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-muted-foreground">
            <Code2 className="h-3 w-3" aria-hidden />
            Tech stack
          </div>
          <h2 className="ui-heading-1 max-w-2xl">Technologies &amp; Expertise</h2>
          <p className="ui-body max-w-2xl">
            Go, Kubernetes, distributed systems, and payment infrastructure. Filter by area or scan the grid.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap gap-1.5" aria-label="Skill categories">
          {categories.map((category) => {
            const active = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={`ui-nav rounded-md border px-2.5 py-1.5 ${
                  active
                    ? "border-foreground/20 bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            )
          })}
        </div>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill: Skill) => {
            const projectNames = getProjectNames(skill.projects)
            const borderAccent =
              CATEGORY_BORDER[skill.category] ?? "border-l-[3px] border-l-muted-foreground/40"
            const aria =
              projectNames.length > 0
                ? `${skill.name}, used in ${projectNames.join(", ")}`
                : skill.name

            return (
              <li key={skill.name}>
                <span
                  aria-label={aria}
                  className={`flex w-full items-center justify-between gap-2 rounded-md border border-border bg-card px-2.5 py-2 text-left ${borderAccent}`}
                >
                  <span className="ui-nav min-w-0 truncate font-semibold text-foreground">
                    {skill.name}
                  </span>
                  {skill.proficiency === 5 && (
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                  )}
                </span>
              </li>
            )
          })}
        </ul>

        <p className="ui-caption mt-6 flex items-center justify-center gap-2 border-t border-border pt-6 text-center text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
          <span>
            <span className="font-medium text-foreground">Sparkle</span> = expert-level proficiency.
          </span>
        </p>
      </div>
    </HomeSection>
  )
}
