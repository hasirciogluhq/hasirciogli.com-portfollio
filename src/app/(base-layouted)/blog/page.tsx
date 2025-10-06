import { BlogCard } from "@/components/blog/BlogCard"
import { TagPill } from "@/components/blog/TagPill"
import { getAllPosts, getAllTags } from "@/lib/blog"
import { LiquidGlass } from "@/components/liquid-glass"
import { Search } from "lucide-react"

export const metadata = {
  title: "Blog - Mustafa Hasırcıoğlu",
  description: "Technical articles, insights, and deep dives into software engineering, infrastructure, and system design.",
}

export default async function BlogPage() {
  const posts = await getAllPosts({ limit: 20 })
  const tags = await getAllTags()
  const featuredPosts = posts.filter(p => p.featured).slice(0, 1)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] pt-40 md:pt-40">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Deep dives into software engineering, cloud infrastructure, system design, and lessons learned from building production systems.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <LiquidGlass className="!bg-zinc-900/60 border-zinc-800/50 p-0">
              <div className="flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-zinc-500" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="flex-1 bg-transparent text-white placeholder:text-zinc-600 outline-none"
                />
                <kbd className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded">⌘K</kbd>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* Featured Tags */}
      {tags.length > 0 && (
        <section className="px-4 py-8 border-b border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-zinc-500 font-medium">Popular Topics:</span>
              {tags.filter(t => t.featured).slice(0, 8).map((tag) => (
                <TagPill
                  key={tag.slug}
                  {...tag}
                  size="md"
                  showCount={true}
                />
              ))}
              {tags.length > 8 && (
                <a
                  href="/blog/tags"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View all →
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Post (Spotlight) */}
      {featuredPosts.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Featured</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            </div>
            <BlogCard post={featuredPosts[0]} variant="spotlight" priority />
          </div>
        </section>
      )}

      {/* Latest Posts Grid */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">Sort by:</span>
              <select className="bg-zinc-900/60 border border-zinc-800/50 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-zinc-700">
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="reading-time">Reading Time</option>
              </select>
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">📝</div>
                <h3 className="text-xl font-semibold text-white">No posts yet</h3>
                <p className="text-zinc-400 max-w-md">
                  Check back soon for technical articles and insights.
                </p>
              </LiquidGlass>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <LiquidGlass className="p-12 !bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about software engineering, infrastructure, and system design.
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

