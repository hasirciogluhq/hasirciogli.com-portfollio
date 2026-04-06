import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog"
import { formatDate } from "@/lib/blog-utils"

import { TagPill } from "@/components/blog/TagPill"
import { BlogCard } from "@/components/blog/BlogCard"
import { ShareButton } from "@/components/blog/ShareButton"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import type { MDXComponents } from "mdx/types"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.ogImage || post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.slug)

  const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
      <h1 className="mb-5 mt-10 font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 border-b border-border pb-2 font-sans text-2xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-5 mb-2 text-lg font-semibold text-foreground">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-4 mb-2 text-base font-semibold text-foreground">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-3 mb-2 text-sm font-semibold text-foreground">{children}</h6>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-[15px] leading-relaxed text-muted-foreground">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-4 list-inside list-disc space-y-1.5 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-4 list-inside list-decimal space-y-1.5 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="text-[15px] leading-relaxed">{children}</li>,
    code: ({ children }) => (
      <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg border border-border bg-card p-4 text-sm text-card-foreground">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-primary pl-4 italic text-muted-foreground">{children}</blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-border">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-muted px-4 py-2 text-left text-sm font-semibold text-foreground">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-t border-border px-4 py-2 text-sm text-muted-foreground">{children}</td>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="layout-section border-b border-border">
        <div className="layout-container py-4 pt-[var(--page-content-pt)]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Blog
          </Link>
        </div>
      </div>

      <article className="layout-section py-10">
        <div className="layout-container">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.primaryTag && <TagPill {...post.primaryTag} variant="filled" size="md" />}
            {post.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag.slug} {...tag} size="md" />
            ))}
          </div>

          <h1 className="ui-heading-1 mb-4">
            {post.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-border pb-8">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.title}
                  width={44}
                  height={44}
                  className="aspect-square rounded-full object-cover"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-base font-semibold text-muted-foreground">
                  {post.author.title?.charAt(0) || "?"}
                </div>
              )}
              <div>
                <div className="font-medium text-foreground">{post.author.title}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" strokeWidth={1.5} />
                <span>{formatDate(post.publishedAt, "long")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                <span>{post.readingTime} min read</span>
              </div>
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>
          </div>

          {post.coverImage && (
            <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-lg border border-border md:h-[min(420px,50vh)]">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          <div className="max-w-none">
            <MDXRemote
              source={post.body}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </div>

          <div className="mt-12">
            <div className="surface-card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.title}
                    width={72}
                    height={72}
                    className="shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-muted-foreground">
                    {post.author.title?.charAt(0) || "?"}
                  </div>
                )}
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Written by {post.author.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{post.author.role}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {post.author.github && (
                      <a
                        href={`https://github.com/${post.author.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {post.author.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${post.author.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                    {post.author.twitter && (
                      <a
                        href={`https://twitter.com/${post.author.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="layout-section border-t border-border py-12">
          <div className="layout-container">
            <h2 className="ui-heading-2 mb-6">Related</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="layout-section border-t border-border py-12">
        <div className="layout-container flex justify-center">
          <div className="w-full max-w-md text-center">
          <div className="surface-card p-8">
            <h2 className="ui-heading-2 mb-2">Enjoyed this?</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Reach out or read more — new posts land here first.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                All posts
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
