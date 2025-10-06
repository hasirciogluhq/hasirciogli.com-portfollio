"use client"

import { useState } from "react"
import { LiquidGlass } from "./liquid-glass"
import skillsData from "@/data/skills.json"
import projectsData from "@/data/projects.json"

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
      Languages: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Frontend: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Backend: "bg-green-500/10 text-green-400 border-green-500/20",
      DevOps: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      Cloud: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      Tools: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      Architecture: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    }
    return colors[category] || "bg-zinc-800/40 text-zinc-400 border-zinc-700/50"
  }

  const getProjectNames = (projectSlugs: string[]) => {
    return projectSlugs
      .map(slug => projectsData.projects.find((p: { slug: string }) => p.slug === slug)?.title)
      .filter(Boolean)
  }

  return (
    <section className="px-4 py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <LiquidGlass className="inline-block px-3 py-1 rounded-lg border border-zinc-200 mb-4">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Tech Stack
            </span>
          </LiquidGlass>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mx-auto">
            Specialties: Go, Kubernetes, Distributed Storage, Payments. Click any skill to see which projects use it.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-zinc-900 text-white shadow-lg scale-105'
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Skills Tag Cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                  className={`group px-4 py-2 rounded-lg border transition-all duration-300 ${
                    getCategoryColor(skill.category)
                  } ${isHovered ? 'scale-110 shadow-lg' : 'scale-100'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    {/* Proficiency dots */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            i < skill.proficiency ? 'bg-current' : 'bg-current opacity-20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </button>

                {/* Tooltip */}
                {isHovered && projectNames.length > 0 && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <LiquidGlass className="px-3 py-2 !bg-white border border-zinc-200 shadow-2xl whitespace-nowrap">
                      <div className="text-xs text-zinc-700">
                        <div className="font-semibold mb-1">Used in:</div>
                        {projectNames.map((name, i) => (
                          <div key={i} className="text-zinc-600">• {name}</div>
                        ))}
                      </div>
                    </LiquidGlass>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-zinc-200" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Proficiency Legend */}
        <div className="text-center">
          <LiquidGlass className="inline-block px-6 py-3 rounded-xl !bg-white border border-zinc-200 shadow-lg">
            <div className="flex items-center gap-6 text-xs text-zinc-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  ))}
                </div>
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < 3 ? 'bg-zinc-700' : 'bg-zinc-700 opacity-20'
                      }`}
                    />
                  ))}
                </div>
                <span>Proficient</span>
              </div>
            </div>
          </LiquidGlass>
        </div>
      </div>
    </section>
  )
}

