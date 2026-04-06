import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"
import { getAllPosts, getTagBySlug, getAllTags } from "@/lib/blog"

import { BlogCard } from "@/components/blog/BlogCard"
import { TagPill } from "@/components/blog/TagPill"
import { NewsletterForm } from "@/components/NewsletterForm"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tag = await getTagBySlug(slug)

  if (!tag) {
    return {
      title: "Tag Not Found",
    }
  }

  return {
    title: `${tag.title} - Blog`,
    description: tag.description || `Articles tagged with ${tag.title}`,
  }
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({
    slug: tag.slug,
  }))
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tag = await getTagBySlug(slug)

  if (!tag) {
    notFound()
  }

  const posts = await getAllPosts({ tag: slug })
  const allTags = await getAllTags()
  const relatedTags = allTags.filter((t) => t.slug !== slug && t.featured).slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60 bg-muted/25">
        <div className="layout-container pb-12 pt-[var(--page-content-pt)]">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <Link
              href="/blog/tags"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Tag className="h-4 w-4" />
              All Tags
            </Link>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-primary">
              <Tag className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h1 className="ui-heading-1">{tag.title}</h1>
                <TagPill {...tag} size="md" clickable={false} />
              </div>
              <p className="ui-body">
                {tag.description || `Exploring ${tag.title.toLowerCase()}`} · {tag.postCount || 0}{" "}
                {(tag.postCount || 0) === 1 ? "article" : "articles"}
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="layout-section py-12">
        <div className="layout-container">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="ui-heading-2">Articles</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort</span>
              <select className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="reading-time">Reading Time</option>
              </select>
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="surface-card mx-auto inline-flex max-w-md flex-col items-center gap-4 p-12">
                <div className="text-6xl">📝</div>
                <h3 className="ui-heading-3">No articles yet</h3>
                <p className="ui-body">
                  Articles tagged with <strong className="text-foreground">{tag.title}</strong> will appear here.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  Browse All Articles
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {relatedTags.length > 0 && (
        <section className="layout-section border-t border-border py-12">
          <div className="layout-container">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h2 className="ui-kicker">Related topics</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="surface-card p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {relatedTags.map((relatedTag) => (
                  <TagPill key={relatedTag.slug} {...relatedTag} size="lg" showCount={true} />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/blog/tags" className="text-sm font-medium text-primary transition-opacity duration-200 hover:opacity-80">
                  View all tags →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="layout-section border-t border-border py-16">
        <div className="layout-container max-w-4xl text-center">
          <div className="surface-card p-10">
            <h2 className="ui-heading-2 mb-4">More {tag.title} content</h2>
            <p className="ui-body mx-auto mb-8 max-w-2xl">
              Subscribe to get notified when I publish new articles about {tag.title.toLowerCase()} and other topics.
            </p>
            <NewsletterForm source={`tag_${tag.slug}`} />
          </div>
        </div>
      </section>
    </div>
  )
}
