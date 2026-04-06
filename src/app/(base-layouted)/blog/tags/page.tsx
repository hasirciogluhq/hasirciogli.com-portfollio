import { TagPill } from "@/components/blog/TagPill"
import { getAllTags } from "@/lib/blog"

import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"

export const metadata = {
  title: "All Tags - Blog",
  description: "Browse all topics and categories from the blog.",
}

export default async function TagsPage() {
  const tags = await getAllTags()

  const popularTags = tags.filter((t) => (t.postCount || 0) >= 2)

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60 bg-muted/25">
        <div className="layout-container pb-12 pt-[var(--page-content-pt)]">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-primary">
              <Tag className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="ui-heading-1">All tags</h1>
              <p className="ui-body mt-2">Browse by topic · {tags.length} total tags</p>
            </div>
          </div>
        </div>
      </section>

      {popularTags.length > 0 && (
        <section className="layout-section border-b border-border py-12">
          <div className="layout-container">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h2 className="ui-kicker">Popular topics</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="surface-card p-8">
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag) => (
                  <TagPill key={tag.slug} {...tag} size="lg" showCount={true} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="layout-section py-12">
        <div className="layout-container">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="ui-kicker">All topics</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tags.map((tag) => (
              <Link key={tag.slug} href={`/blog/tag/${tag.slug}`} className="group block">
                <div className="surface-card h-full p-6 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="ui-heading-3 mb-2 transition-colors duration-200 group-hover:text-primary">
                        {tag.title}
                      </h3>
                      {tag.description && <p className="mb-3 text-sm text-muted-foreground">{tag.description}</p>}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {tag.postCount || 0} {(tag.postCount || 0) === 1 ? "article" : "articles"}
                        </span>
                        {tag.featured && (
                          <span className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 text-xs text-primary">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-3 w-3 shrink-0 rounded-full bg-primary/40 ring-2 ring-primary/20" aria-hidden />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {tags.length === 0 && (
            <div className="py-20 text-center">
              <div className="surface-card mx-auto inline-flex max-w-md flex-col items-center gap-4 p-12">
                <div className="text-6xl">🏷️</div>
                <h3 className="ui-heading-3">No tags yet</h3>
                <p className="ui-body">Tags will appear here as articles are published.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="layout-section border-t border-border py-12">
        <div className="layout-container">
          <div className="surface-card p-8">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-3xl font-bold text-foreground">{tags.length}</div>
                <div className="text-sm text-muted-foreground">Total topics</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-foreground">{popularTags.length}</div>
                <div className="text-sm text-muted-foreground">Popular topics</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-foreground">
                  {tags.reduce((acc, tag) => acc + (tag.postCount || 0), 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total articles</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
