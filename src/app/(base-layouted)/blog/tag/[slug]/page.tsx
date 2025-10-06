import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"
import { getAllPosts, getTagBySlug, getAllTags } from "@/lib/blog"
import { LiquidGlass } from "@/components/liquid-glass"
import { BlogCard } from "@/components/blog/BlogCard"
import { TagPill } from "@/components/blog/TagPill"

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

// Color mapping for tag icons
const tagIconColors: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-500/10', text: 'text-blue-400' },
  green: { bg: 'from-green-500/10 to-green-600/5', border: 'border-green-500/10', text: 'text-green-400' },
  purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/10', text: 'text-purple-400' },
  orange: { bg: 'from-orange-500/10 to-orange-600/5', border: 'border-orange-500/10', text: 'text-orange-400' },
  pink: { bg: 'from-pink-500/10 to-pink-600/5', border: 'border-pink-500/10', text: 'text-pink-400' },
  cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-500/10', text: 'text-cyan-400' },
  rose: { bg: 'from-rose-500/10 to-rose-600/5', border: 'border-rose-500/10', text: 'text-rose-400' },
  sky: { bg: 'from-sky-500/10 to-sky-600/5', border: 'border-sky-500/10', text: 'text-sky-400' },
  emerald: { bg: 'from-emerald-500/10 to-emerald-600/5', border: 'border-emerald-500/10', text: 'text-emerald-400' },
  lime: { bg: 'from-lime-500/10 to-lime-600/5', border: 'border-lime-500/10', text: 'text-lime-400' },
  fuchsia: { bg: 'from-fuchsia-500/10 to-fuchsia-600/5', border: 'border-fuchsia-500/10', text: 'text-fuchsia-400' },
  zinc: { bg: 'from-zinc-500/10 to-zinc-600/5', border: 'border-zinc-500/10', text: 'text-zinc-400' },
  indigo: { bg: 'from-indigo-500/10 to-indigo-600/5', border: 'border-indigo-500/10', text: 'text-indigo-400' },
  yellow: { bg: 'from-yellow-500/10 to-yellow-600/5', border: 'border-yellow-500/10', text: 'text-yellow-400' },
  stone: { bg: 'from-stone-500/10 to-stone-600/5', border: 'border-stone-500/10', text: 'text-stone-400' },
  red: { bg: 'from-red-500/10 to-red-600/5', border: 'border-red-500/10', text: 'text-red-400' },
  amber: { bg: 'from-amber-500/10 to-amber-600/5', border: 'border-amber-500/10', text: 'text-amber-400' },
  violet: { bg: 'from-violet-500/10 to-violet-600/5', border: 'border-violet-500/10', text: 'text-violet-400' },
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tag = await getTagBySlug(slug)

  if (!tag) {
    notFound()
  }

  const posts = await getAllPosts({ tag: slug })
  const allTags = await getAllTags()
  const relatedTags = allTags
    .filter(t => t.slug !== slug && t.featured)
    .slice(0, 6)
  
  const iconColors = tagIconColors[tag.color] || tagIconColors.blue

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Back Button */}
      <div className="px-4 py-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Link
            href="/blog/tags"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <Tag className="w-4 h-4" />
            All Tags
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 bg-gradient-to-br ${iconColors.bg} rounded-xl border ${iconColors.border}`}>
              <Tag className={`w-8 h-8 ${iconColors.text}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {tag.title}
                </h1>
                <TagPill {...tag} size="md" clickable={false} />
              </div>
              <p className="text-zinc-400">
                {tag.description || `Exploring ${tag.title.toLowerCase()}`} · {tag.postCount || 0} {(tag.postCount || 0) === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>

          {/* Tag Description Card */}
          {tag.description && (
            <LiquidGlass className="!bg-zinc-900/40 border-zinc-800/50 p-6 mt-8">
              <p className="text-zinc-300 leading-relaxed">
                {tag.description}
              </p>
            </LiquidGlass>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Articles
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">Sort by:</span>
              <select className="bg-zinc-900/60 border border-zinc-800/50 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-zinc-700">
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="reading-time">Reading Time</option>
              </select>
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">📝</div>
                <h3 className="text-xl font-semibold text-white">No articles yet</h3>
                <p className="text-zinc-400 max-w-md">
                  Articles tagged with <strong>{tag.title}</strong> will appear here.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 px-4 py-2 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
                >
                  Browse All Articles
                </Link>
              </LiquidGlass>
            </div>
          )}
        </div>
      </section>

      {/* Related Tags */}
      {relatedTags.length > 0 && (
        <section className="px-4 py-12 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <h2 className="text-lg font-semibold text-zinc-300 uppercase tracking-wider">
                Related Topics
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            </div>
            
            <LiquidGlass className="!bg-zinc-900/40 border-zinc-800/50 p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {relatedTags.map((relatedTag) => (
                  <TagPill
                    key={relatedTag.slug}
                    {...relatedTag}
                    size="lg"
                    showCount={true}
                  />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/blog/tags"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View all tags →
                </Link>
              </div>
            </LiquidGlass>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <LiquidGlass className="p-12 !bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want More {tag.title} Content?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified when I publish new articles about {tag.title.toLowerCase()} and other topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600"
              />
              <button className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-zinc-600 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </LiquidGlass>
        </div>
      </section>
    </div>
  )
}

