import { BlogCard } from "@/components/blog/BlogCard"
import { TagPill } from "@/components/blog/TagPill"
import { getAllPosts, getAllTags } from "@/lib/blog"

import { NewsletterForm } from "@/components/NewsletterForm"
import { Search } from "lucide-react"

export const metadata = {
  title: "Blog - Mustafa Hasırcıoğlu",
  description:
    "Technical articles, insights, and deep dives into software engineering, infrastructure, and system design.",
}

export default async function BlogPage() {
  const posts = await getAllPosts({ limit: 20 })
  const tags = await getAllTags()
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 1)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60 bg-muted/25">
        <div className="layout-container pb-12 pt-[var(--page-content-pt)] text-center">
          <h1 className="ui-heading-1 ui-enter mb-4">
            Technical <span className="text-primary">insights</span>
          </h1>
          <p className="ui-body mx-auto mb-8 max-w-xl">
            Software engineering, infrastructure, and system design — notes from production.
          </p>

          <div className="mx-auto max-w-lg">
            <div className="surface-card flex items-center gap-3 px-4 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <input
                type="search"
                placeholder="Search articles…"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </section>

      {tags.length > 0 && (
        <section className="layout-section border-b border-border py-6">
          <div className="layout-container">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Topics</span>
              {tags
                .filter((t) => t.featured)
                .slice(0, 8)
                .map((tag) => (
                  <TagPill key={tag.slug} {...tag} size="md" showCount={true} />
                ))}
              {tags.length > 8 && (
                <a
                  href="/blog/tags"
                  className="text-xs font-medium text-primary transition-opacity hover:opacity-80"
                >
                  All tags →
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {featuredPosts.length > 0 && (
        <section className="layout-section py-10">
          <div className="layout-container">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Featured
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <BlogCard post={featuredPosts[0]} variant="spotlight" priority />
          </div>
        </section>
      )}

      <section className="layout-section py-10">
        <div className="layout-container">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="ui-heading-2">Latest</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Sort</span>
              <select className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="reading-time">Reading time</option>
              </select>
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="surface-card mx-auto inline-flex max-w-sm flex-col gap-2 p-8">
                <p className="text-sm font-medium text-foreground">No posts yet</p>
                <p className="text-xs text-muted-foreground">Check back soon.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="layout-section border-t border-border py-12">
        <div className="layout-container flex justify-center">
          <div className="w-full max-w-md text-center">
          <div className="surface-card p-8">
            <h2 className="ui-heading-2 mb-2">Newsletter</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              New articles — infrastructure, Go, and systems.
            </p>
            <NewsletterForm source="blog" />
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
