import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Link2, Github, Linkedin, Twitter } from "lucide-react"
import { getAuthorBySlug, getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/BlogCard"
import { LiquidGlass } from "@/components/liquid-glass"

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

  // Get all posts by this author
  const allPosts = await getAllPosts({ author: slug })

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Back Button */}
      <div className="px-4 py-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Author Hero */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={author.avatar}
                  alt={author.title}
                  width={200}
                  height={200}
                  className="rounded-3xl"
                  priority
                />
                {author.featured && (
                  <div className="absolute -bottom-3 -right-3">
                    <LiquidGlass className="px-3 py-1.5 !bg-white">
                      <span className="text-xs font-bold text-zinc-900">✨ Featured Author</span>
                    </LiquidGlass>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {author.title}
              </h1>
              <p className="text-xl text-zinc-400 mb-6">
                {author.role}
              </p>

              {/* Bio */}
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                {author.bio}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {author.website && (
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    <Link2 className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                )}
                {author.github && (
                  <a
                    href={`https://github.com/${author.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${author.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {author.twitter && (
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <LiquidGlass className="p-6 text-center !bg-zinc-900/40 border-zinc-800/50">
              <div className="text-3xl font-bold text-white mb-1">
                {allPosts.length}
              </div>
              <div className="text-sm text-zinc-500">Articles</div>
            </LiquidGlass>

            <LiquidGlass className="p-6 text-center !bg-zinc-900/40 border-zinc-800/50">
              <div className="text-3xl font-bold text-white mb-1">
                {allPosts.reduce((acc, post) => acc + post.readingTime, 0)}
              </div>
              <div className="text-sm text-zinc-500">Total Minutes</div>
            </LiquidGlass>

            <LiquidGlass className="p-6 text-center !bg-zinc-900/40 border-zinc-800/50">
              <div className="text-3xl font-bold text-white mb-1">
                {allPosts.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-zinc-500">Featured</div>
            </LiquidGlass>

            <LiquidGlass className="p-6 text-center !bg-zinc-900/40 border-zinc-800/50">
              <div className="text-3xl font-bold text-white mb-1">
                {new Set(allPosts.flatMap(p => p.tags.map(t => t.slug))).size}
              </div>
              <div className="text-sm text-zinc-500">Topics</div>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Articles by {author.title}
            </h2>
            <div className="text-sm text-zinc-500">
              {allPosts.length} {allPosts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>

          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">✍️</div>
                <h3 className="text-xl font-semibold text-white">No articles yet</h3>
                <p className="text-zinc-400 max-w-md">
                  {author.title} hasn't published any articles yet. Check back soon!
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
              Want to Collaborate?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Interested in working together or have questions? Let's connect and discuss your project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800/60 border border-zinc-700 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          </LiquidGlass>
        </div>
      </section>
    </div>
  )
}

