"use client"

import { useState } from "react"
import { LiquidGlass } from "./liquid-glass"
import { ExternalLink, ArrowRight } from "lucide-react"
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

export const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const featuredProjects = projectsData.projects.filter((p: Project) => p.featured)

  const handleProjectClick = (projectSlug: string) => {
    sendGAEvent('event', 'project_card_click', {
      category: 'engagement',
      label: projectSlug
    })
  }

  return (
    <section className="px-4 py-16 md:py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                Portfolio
              </span>
            </div>
          </LiquidGlass>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            Real products I launched — from idea to scale. Each project represents months of engineering, design decisions, and solving complex problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project: Project) => (
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
                  {/* Placeholder gradient - replace with real images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-20">🚀</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white rounded-md">
                      {project.category}
                    </span>
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
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className={`flex flex-wrap gap-1.5 mb-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-zinc-800/60 text-zinc-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project.slug)}
                      className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors group/link"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={() => handleProjectClick(`${project.slug}_case_study`)}
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </LiquidGlass>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

