"use client"

import { useState } from "react"
import skillsData from "@/data/skills.json"
import projectsData from "@/data/projects.json"
import { Code2, Sparkles } from "lucide-react"

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
      Languages: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
      Frontend: "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20",
      Backend: "bg-brand-success/10 text-brand-success border-brand-success/20",
      DevOps: "bg-brand-warning/10 text-brand-warning border-brand-warning/20",
      Cloud: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
      Tools: "bg-brand-error/10 text-brand-error border-brand-error/20",
      Architecture: "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
    }
    return colors[category] || "bg-muted text-muted-foreground border-border"
  }

  const getProjectNames = (projectSlugs: string[]) => {
    return projectSlugs
      .map(slug => projectsData.projects.find((p: { slug: string; _disabled?: boolean }) => p.slug === slug && !p._disabled)?.title)
      .filter(Boolean)
  }

  return (
    <section className="px-4 py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Minimalist Header */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3 h-3" />
            Tech Stack
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Technologies & Expertise
          </h2>
          
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
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="font-semibold text-foreground">Sparkle icon = Expert level proficiency</span>
          </div>
        </div>
      </div>
    </section>
  )
}

