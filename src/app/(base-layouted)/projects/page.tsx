"use client"

import { useState } from "react"
import { LiquidGlass } from "@/components/liquid-glass"
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
  imageUrl: string
  metrics?: {
    label: string
    value: string
  }
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = ["all", "SaaS", "Fintech", "E-commerce", "Social", "Community"]

  const filteredProjects = projectsData.projects.filter((project: Project) => {
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
    <div className="min-h-screen bg-[#0F0F0F] pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  Portfolio
                </span>
              </div>
            </LiquidGlass>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects I&apos;ve Built
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                From Idea to Scale
              </span>
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Real products solving real problems. Each project represents months of engineering,
              architectural decisions, and production battles won.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <LiquidGlass className="!bg-zinc-900/60 border-zinc-800/50 p-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Search className="w-5 h-5 text-zinc-500" />
                  <input
                    type="search"
                    placeholder="Search projects... (technology, category, name)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder:text-zinc-600 outline-none"
                  />
                </div>
              </LiquidGlass>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Total Projects", value: projectsData.projects.length },
              { label: "Active Projects", value: projectsData.projects.filter((p: Project) => p.featured).length },
              { label: "Technologies", value: "10+" },
              { label: "In Production", value: "99.9% Uptime" }
            ].map((stat, index) => (
              <LiquidGlass key={index} className="p-4 text-center !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 py-8 border-b border-zinc-800/50 sticky top-20 bg-[#0F0F0F]/95 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-zinc-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-white text-zinc-900 shadow-lg'
                    : 'bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-900/60 border border-zinc-800/50'
                  }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="ml-auto text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Clear Filters ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: Project) => (
                <div
                  key={project.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <LiquidGlass
                    className={`h-full p-0 rounded-2xl overflow-hidden !bg-zinc-900/40 border border-zinc-800/50 transition-all duration-300 ${hoveredProject === project.id
                        ? 'scale-105 !border-zinc-700 shadow-2xl'
                        : 'scale-100'
                      }`}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                      {/* Placeholder gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-20">🚀</span>
                      </div>

                      {/* Category & Featured Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white rounded-md">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 backdrop-blur-sm text-yellow-400 rounded-md border border-yellow-500/30">
                            ⭐ Featured
                          </span>
                        )}
                      </div>

                      {/* Metrics Badge */}
                      {project.metrics && (
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <LiquidGlass className="px-2 py-1 !bg-black/80 backdrop-blur-sm">
                            <span className="text-xs text-white font-medium">{project.metrics.value}</span>
                            <span className="text-xs text-zinc-400 ml-1">{project.metrics.label}</span>
                          </LiquidGlass>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Title & Role */}
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-medium">{project.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Pills - Animated like homepage */}
                      <div className={`flex flex-wrap gap-1.5 mb-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-zinc-800/60 text-zinc-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 text-xs bg-zinc-800/60 text-zinc-500 rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleProjectClick(project.slug, 'visit')}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-zinc-900 rounded-lg text-xs font-semibold hover:bg-zinc-100 transition-all group/link"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>

                        <button
                          className="flex items-center gap-1 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg text-xs font-medium hover:bg-zinc-800 hover:text-white transition-all"
                          onClick={() => handleProjectClick(project.slug, 'case_study')}
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </LiquidGlass>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold text-white">No results found</h3>
                <p className="text-zinc-400 max-w-md">
                  No projects match your search criteria. Please try changing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                  className="mt-4 px-4 py-2 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
                >
                  Reset Filters
                </button>
              </LiquidGlass>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <LiquidGlass className="p-12 !bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Next Project Could Be Here
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              From MVP to production, from idea to scalable system.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800/60 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all border border-zinc-700/50"
              >
                <span>Learn More About Me</span>
              </a>
            </div>
          </LiquidGlass>
        </div>
      </section>
    </div>
  )
}
