"use client"

import { LiquidGlass } from "./liquid-glass"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  category: string
  featured?: boolean
}

export const BlogHighlights = () => {
  const posts: BlogPost[] = [
    {
      id: "developer-philosophy",
      title: "Developer Philosophy: Craft Over Speed",
      excerpt: "Why I reject the 'just make it work' mentality and how building elegant systems pays off in the long run. Code is not disposable.",
      date: "2024-10-01",
      readTime: "8 min",
      slug: "/blog/developer-philosophy",
      category: "Philosophy",
      featured: true
    },
    {
      id: "kubernetes-production-lessons",
      title: "5 Kubernetes Lessons I Learned the Hard Way",
      excerpt: "Production incidents taught me more than any tutorial. Here are the critical Kubernetes lessons that will save you from midnight debugging sessions.",
      date: "2025-01-10",
      readTime: "5 min",
      slug: "/blog/kubernetes-production-lessons",
      category: "Infrastructure"
    },
    {
      id: "building-payment-gateway",
      title: "Building a Payment Gateway: Technical Deep Dive",
      excerpt: "How we built a secure, scalable payment processing system handling thousands of transactions daily. Architecture, security, and lessons learned.",
      date: "2025-01-05",
      readTime: "8 min",
      slug: "/blog/building-payment-gateway",
      category: "Technology"
    }
  ]

  const handlePostClick = (slug: string) => {
    sendGAEvent('event', 'blog_post_click', {
      category: 'engagement',
      label: slug
    })
  }

  return (
    <section className="px-4 py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                Blog
              </span>
            </div>
          </LiquidGlass>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thoughts & Technical Deep Dives
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            I write about systems design, production lessons, and the craft of software engineering.
          </p>
        </div>

        {/* Featured Post + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Post (Large) */}
          <div className="lg:col-span-2">
            <a
              href={posts[0].slug}
              onClick={() => handlePostClick(posts[0].slug)}
              className="group block h-full"
            >
              <LiquidGlass className="h-full p-8 rounded-2xl !bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 hover:shadow-xl transition-all duration-300">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-white text-zinc-900 text-xs font-medium rounded-md mb-4">
                  Featured
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {posts[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-zinc-300 leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{posts[0].readTime} read</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </LiquidGlass>
            </a>
          </div>

          {/* Other Posts (Smaller) */}
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((post) => (
              <a
                key={post.id}
                href={post.slug}
                onClick={() => handlePostClick(post.slug)}
                className="group block"
              >
                <LiquidGlass className="p-6 rounded-xl !bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Category */}
                  <div className="inline-block px-2 py-0.5 bg-zinc-800/60 text-zinc-300 text-xs font-medium rounded mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </LiquidGlass>
              </a>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

