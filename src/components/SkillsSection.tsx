"use client"

import { useState } from "react"
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

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories: CategoryFilter[] = ["all", "Languages", "Frontend", "Backend", "DevOps", "Cloud", "Tools", "Architecture"]

  const filteredSkills = activeCategory === "all" 
    ? skillsData.skills 
    : skillsData.skills.filter((skill: Skill) => skill.category === activeCategory)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Languages: "border-primary/20 bg-primary/10 text-primary",
      Frontend: "border-violet-500/20 bg-violet-500/10 text-violet-700",
      Backend: "border-emerald-500/20 bg-emerald-500/10 text-emerald-800",
      DevOps: "border-amber-500/20 bg-amber-500/10 text-amber-800",
      Cloud: "border-sky-500/20 bg-sky-500/10 text-sky-800",
      Tools: "border-destructive/25 bg-destructive/10 text-destructive",
      Architecture: "border-primary/20 bg-primary/10 text-primary",
    }
    return colors[category] || "border-border bg-muted text-muted-foreground"
  }

  const getProjectNames = (projectSlugs: string[]) => {
    return projectSlugs
      .map(slug => projectsData.projects.find((p: { slug: string; _disabled?: boolean }) => p.slug === slug && !p._disabled)?.title)
      .filter(Boolean)
  }

  return (
    <HomeSection>
      <div className="mx-auto max-w-5xl">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wider text-accent-foreground uppercase">
            <Code2 className="h-3 w-3" />
            Tech Stack
          </div>
          
          <h2 className="ui-heading-1 max-w-2xl">Technologies &amp; Expertise</h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Specializing in Go, Kubernetes, distributed systems, and payment infrastructure.
          </p>
        </div>

        {/* Minimal Category Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border'
              }`}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        {/* Clean Tag Cloud */}
        <div className="flex flex-wrap gap-3">
          {filteredSkills.map((skill: Skill) => {
            const projectNames = getProjectNames(skill.projects)
            const isHovered = hoveredSkill === skill.name

            return (
              <div
                key={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <button
                  className={`group px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                    getCategoryColor(skill.category)
                  } ${isHovered ? 'scale-105 shadow-lg' : 'scale-100'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{skill.name}</span>
                    {skill.proficiency === 5 && (
                      <Sparkles className="w-3 h-3" />
                    )}
                  </div>
                </button>

                {/* Tooltip */}
                {isHovered && projectNames.length > 0 && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="px-3 py-2 bg-card border border-border rounded-lg shadow-2xl whitespace-nowrap">
                      <div className="text-xs text-foreground">
                        <div className="font-semibold mb-1">Used in:</div>
                        {projectNames.map((name, i) => (
                          <div key={i} className="text-muted-foreground">• {name}</div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card rotate-45 border-r border-b border-border -mt-1" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">Sparkle icon = Expert level proficiency</span>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

