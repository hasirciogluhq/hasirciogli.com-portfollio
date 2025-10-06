"use client"

import { useState } from "react"
import { LiquidGlass } from "@/components/liquid-glass"
import { ExternalLink, ArrowRight, Clock, TrendingUp, Users, Zap } from "lucide-react"
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

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "Fintech", "Infrastructure", "E-commerce", "Gaming"]

  const filteredProjects = selectedCategory === "all"
    ? projectsData.projects
    : projectsData.projects.filter((p: Project) => p.category === selectedCategory)

  const handleCaseStudyClick = (projectSlug: string) => {
    sendGAEvent('event', 'case_study_click', {
      category: 'engagement',
      label: projectSlug
    })
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  Case Studies
                </span>
              </div>
            </LiquidGlass>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              From Zero to Production
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Projects, Real Impact
              </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Deep dives into projects I&apos;ve built from scratch. See the problems, solutions, architecture decisions, and outcomes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, label: "Projects", value: projectsData.projects.length },
              { icon: <Users className="w-5 h-5" />, label: "Users Served", value: "100K+" },
              { icon: <Zap className="w-5 h-5" />, label: "Uptime", value: "99.9%" },
              { icon: <Clock className="w-5 h-5" />, label: "In Production", value: "24/7" }
            ].map((stat, index) => (
              <LiquidGlass key={index} className="p-4 text-center !bg-zinc-900/40 border-zinc-800/50">
                <div className="flex items-center justify-center gap-2 mb-2 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 py-8 sticky top-16 z-40 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-lg font-semibold text-white">
              Case Studies ({filteredProjects.length})
            </h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-white text-zinc-900'
                      : 'bg-zinc-900/40 text-zinc-400 hover:bg-zinc-800/60 hover:text-white border border-zinc-800/50'
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="space-y-8">
              {(filteredProjects as Project[]).map((project, index) => (
                <LiquidGlass
                  key={project.id}
                  className="p-0 rounded-2xl overflow-hidden !bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Image/Visual Side */}
                    <div className="lg:col-span-2 relative h-64 lg:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20">
                          {index === 0 ? "💳" : index === 1 ? "☁️" : index === 2 ? "🛒" : "🎮"}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-black/80 backdrop-blur-sm text-white rounded-lg border border-zinc-700/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Metrics Badge */}
                      {project.metrics && (
                        <div className="absolute bottom-4 right-4">
                          <LiquidGlass className="px-3 py-2 !bg-black/80 backdrop-blur-sm">
                            <div className="text-xs text-white font-medium">{project.metrics.value}</div>
                            <div className="text-[10px] text-zinc-400">{project.metrics.label}</div>
                          </LiquidGlass>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-3 p-8">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-500 font-medium">{project.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {project.longDescription || project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-zinc-800/60 text-zinc-300 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleCaseStudyClick(project.slug)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors"
                        >
                          <span>Visit Live Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        <button
                          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                          onClick={() => handleCaseStudyClick(`${project.slug}_detailed`)}
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </LiquidGlass>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">📂</div>
                <h3 className="text-xl font-semibold text-white">No case studies found</h3>
                <p className="text-zinc-400 max-w-md">
                  Try selecting a different category or check back later for new case studies.
                </p>
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
              Want Your Own Case Study?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s build something amazing together. From idea to production, I&apos;ll help you create systems that scale.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/60 text-white rounded-xl font-semibold hover:bg-zinc-700/60 transition-colors"
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

