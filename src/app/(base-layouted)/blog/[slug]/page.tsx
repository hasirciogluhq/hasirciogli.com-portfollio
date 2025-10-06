import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog"
import { formatDate } from "@/lib/blog-utils"
import { LiquidGlass } from "@/components/liquid-glass"
import { TagPill } from "@/components/blog/TagPill"
import { BlogCard } from "@/components/blog/BlogCard"
import { ShareButton } from "@/components/blog/ShareButton"
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import type { MDXComponents } from 'mdx/types'

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

  // MDX Custom Components
  const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-5 mt-8 border-b border-zinc-700 pb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-white mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-white mb-3 mt-5">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold text-white mb-3 mt-4">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold text-white mb-2 mt-3">{children}</h6>
    ),
    p: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-4 text-base">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-neutral-200 hover:text-blue-400 underline transition-colors">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-zinc-300 mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-zinc-300 mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-zinc-300">{children}</li>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-800 text-zinc-100 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto mb-6 border border-zinc-800">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-400 my-6">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="border-zinc-700 my-8" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-zinc-700">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left text-sm font-semibold text-white bg-zinc-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm text-zinc-300 border-t border-zinc-700">
        {children}
      </td>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-zinc-300">{children}</em>
    ),
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Back Button */}
      <div className="px-4 py-6 border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <article className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.primaryTag && (
              <TagPill {...post.primaryTag} variant="filled" size="md" />
            )}
            {post.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag.slug} {...tag} size="md" />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-zinc-800">
            {/* Author */}
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.title}
                  width={48}
                  height={48}
                  className="rounded-full aspect-square bg-cover object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-lg font-bold text-zinc-300">
                  {post.author.title?.charAt(0) || '?'}
                </div>
              )}
              <div>
                <div className="text-white font-semibold">{post.author.title}</div>
                <div className="text-sm text-zinc-500">{post.author.role}</div>
              </div>
            </div>

            {/* Date & Reading Time */}
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt, 'long')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Share Button */}
            <ShareButton title={post.title} excerpt={post.excerpt} />
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-zinc max-w-none text-zinc-100">
            <MDXRemote
              source={post.body}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12">
            <LiquidGlass className="p-8 !bg-zinc-900/60 border-zinc-800/50">
              <div className="flex items-start gap-6">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.title}
                    width={80}
                    height={80}
                    className="rounded-2xl flex-shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-zinc-700 flex items-center justify-center text-2xl font-bold text-zinc-300 flex-shrink-0">
                    {post.author.title?.charAt(0) || '?'}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Written by {post.author.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{post.author.role}</p>
                  <div className="flex gap-3">
                    {post.author.github && (
                      <a
                        href={`https://github.com/${post.author.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {post.author.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${post.author.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {post.author.twitter && (
                      <a
                        href={`https://twitter.com/${post.author.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <LiquidGlass className="p-12 !bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new posts or reach out if you want to discuss this topic further.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800/60 border border-zinc-700 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </LiquidGlass>
        </div>
      </section>
    </div>
  )
}
