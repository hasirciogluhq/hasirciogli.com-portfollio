import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Link2, Github, Linkedin, Twitter } from "lucide-react"
import { getAuthorBySlug, getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/BlogCard"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    return {
      title: "Author Not Found",
    }
  }

  return {
    title: `${author.title} - Blog Author`,
    description: author.bio,
  }
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const allPosts = await getAllPosts({ author: slug })

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60 bg-muted/25">
        <div className="layout-container pb-12 pt-[var(--page-content-pt)]">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="shrink-0">
              <div className="relative">
                <Image
                  src={author.avatar}
                  alt={author.title}
                  width={200}
                  height={200}
                  className="rounded-xl border border-border object-cover"
                  priority
                />
                {author.featured && (
                  <div className="absolute -bottom-3 -right-3">
                    <div className="rounded-md border border-border bg-card px-3 py-1.5 shadow-sm">
                      <span className="text-xs font-semibold text-foreground">Featured author</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="ui-heading-1 mb-3">{author.title}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{author.role}</p>
              <p className="ui-body mb-8 text-base">{author.bio}</p>

              <div className="flex flex-wrap gap-3">
                {author.website && (
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    <Link2 className="h-4 w-4" />
                    <span>Website</span>
                  </a>
                )}
                {author.github && (
                  <a
                    href={`https://github.com/${author.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${author.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {author.twitter && (
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="surface-card p-6 text-center">
              <div className="mb-1 text-3xl font-bold text-foreground">{allPosts.length}</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="mb-1 text-3xl font-bold text-foreground">
                {allPosts.reduce((acc, post) => acc + post.readingTime, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total minutes</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="mb-1 text-3xl font-bold text-foreground">{allPosts.filter((p) => p.featured).length}</div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="mb-1 text-3xl font-bold text-foreground">
                {new Set(allPosts.flatMap((p) => p.tags.map((t) => t.slug))).size}
              </div>
              <div className="text-sm text-muted-foreground">Topics</div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section py-16">
        <div className="layout-container">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="ui-heading-2">Articles by {author.title}</h2>
            <div className="text-sm text-muted-foreground">
              {allPosts.length} {allPosts.length === 1 ? "article" : "articles"}
            </div>
          </div>

          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="surface-card mx-auto inline-flex max-w-md flex-col items-center gap-4 p-12">
                <div className="text-6xl">✍️</div>
                <h3 className="ui-heading-3">No articles yet</h3>
                <p className="ui-body">
                  {author.title} hasn&apos;t published any articles yet. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="layout-section border-t border-border py-16">
        <div className="layout-container max-w-4xl text-center">
          <div className="surface-card p-10">
            <h2 className="ui-heading-2 mb-4">Want to collaborate?</h2>
            <p className="ui-body mx-auto mb-8 max-w-2xl">
              Interested in working together or have questions? Let&apos;s connect and discuss your project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
