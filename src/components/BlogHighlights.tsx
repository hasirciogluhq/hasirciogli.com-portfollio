"use client"

import Link from "next/link"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { HomeSection } from "@/components/home/HomeSection"

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
      excerpt:
        "Why I reject the 'just make it work' mentality and how building elegant systems pays off in the long run. Code is not disposable.",
      date: "2024-10-01",
      readTime: "8 min",
      slug: "/blog/developer-philosophy",
      category: "Philosophy",
      featured: true,
    },
    {
      id: "kubernetes-production-lessons",
      title: "5 Kubernetes Lessons I Learned the Hard Way",
      excerpt:
        "Production incidents taught me more than any tutorial. Here are the critical Kubernetes lessons that will save you from midnight debugging sessions.",
      date: "2025-01-10",
      readTime: "5 min",
      slug: "/blog/kubernetes-production-lessons",
      category: "Infrastructure",
    },
    {
      id: "building-payment-gateway",
      title: "Building a Payment Gateway: Technical Deep Dive",
      excerpt:
        "How we built a secure, scalable payment processing system handling thousands of transactions daily. Architecture, security, and lessons learned.",
      date: "2025-01-05",
      readTime: "8 min",
      slug: "/blog/building-payment-gateway",
      category: "Technology",
    },
  ]

  const handlePostClick = (slug: string) => {
    sendGAEvent("event", "blog_post_click", {
      category: "engagement",
      label: slug,
    })
  }

  return (
    <HomeSection>
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Blog
        </div>
        <h2 className="ui-heading-1 mb-3">Thoughts & technical deep dives</h2>
        <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Systems design, production lessons, and the craft of software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Link
            href={posts[0].slug}
            onClick={() => handlePostClick(posts[0].slug)}
            className="group block h-full"
          >
            <div className="surface-card h-full rounded-xl p-8 transition-all duration-200 hover:shadow-md hover:ring-1 hover:ring-primary/20">
              <div className="mb-4 inline-block rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                Featured
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                {posts[0].title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">{posts[0].excerpt}</p>
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(posts[0].date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {posts[0].readTime} read
                </span>
              </div>
              <div className="inline-flex items-center gap-2 font-semibold text-foreground transition-all group-hover:gap-3">
                <span>Read full article</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {posts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={post.slug}
              onClick={() => handlePostClick(post.slug)}
              className="group block"
            >
              <div className="surface-card h-full rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:ring-1 hover:ring-primary/20">
                <div className="mb-3 inline-block rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {post.category}
                </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </HomeSection>
  )
}
