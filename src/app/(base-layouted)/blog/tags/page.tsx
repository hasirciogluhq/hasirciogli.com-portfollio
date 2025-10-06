import { TagPill } from "@/components/blog/TagPill"
import { getAllTags } from "@/lib/blog"
import { LiquidGlass } from "@/components/liquid-glass"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"

export const metadata = {
  title: "All Tags - Blog",
  description: "Browse all topics and categories from the blog.",
}

export default async function TagsPage() {
  const tags = await getAllTags()
  
  // Group tags by post count
  const popularTags = tags.filter(t => (t.postCount || 0) >= 2)
  const otherTags = tags.filter(t => (t.postCount || 0) < 2)

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Back Button */}
      <div className="px-4 py-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
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
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-xl border border-blue-500/10">
              <Tag className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                All Tags
              </h1>
              <p className="text-zinc-400 mt-2">
                Browse by topic · {tags.length} total tags
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <section className="px-4 py-12 border-b border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <h2 className="text-lg font-semibold text-zinc-300 uppercase tracking-wider">
                Popular Topics
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            </div>
            
            <LiquidGlass className="!bg-zinc-900/40 border-zinc-800/50 p-8">
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag) => (
                  <TagPill
                    key={tag.slug}
                    {...tag}
                    size="lg"
                    showCount={true}
                  />
                ))}
              </div>
            </LiquidGlass>
          </div>
        </section>
      )}

      {/* All Tags */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            <h2 className="text-lg font-semibold text-zinc-300 uppercase tracking-wider">
              All Topics
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="group"
              >
                <LiquidGlass className="!bg-zinc-900/40 border-zinc-800/50 p-6 hover:!bg-zinc-900/60 transition-all duration-300 hover:border-zinc-700/50 h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {tag.title}
                      </h3>
                      {tag.description && (
                        <p className="text-sm text-zinc-400 mb-3">
                          {tag.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500">
                          {tag.postCount || 0} {(tag.postCount || 0) === 1 ? 'article' : 'articles'}
                        </span>
                        {tag.featured && (
                          <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div 
                      className={`w-3 h-3 rounded-full bg-${tag.color}-500 ring-2 ring-${tag.color}-500/20`}
                      aria-hidden="true"
                    />
                  </div>
                </LiquidGlass>
              </Link>
            ))}
          </div>

          {tags.length === 0 && (
            <div className="text-center py-20">
              <LiquidGlass className="inline-flex flex-col items-center gap-4 p-12 !bg-zinc-900/40 border-zinc-800/50">
                <div className="text-6xl">🏷️</div>
                <h3 className="text-xl font-semibold text-white">No tags yet</h3>
                <p className="text-zinc-400 max-w-md">
                  Tags will appear here as articles are published.
                </p>
              </LiquidGlass>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <LiquidGlass className="!bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  {tags.length}
                </div>
                <div className="text-zinc-400 text-sm">Total Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  {popularTags.length}
                </div>
                <div className="text-zinc-400 text-sm">Popular Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  {tags.reduce((acc, tag) => acc + (tag.postCount || 0), 0)}
                </div>
                <div className="text-zinc-400 text-sm">Total Articles</div>
              </div>
            </div>
          </LiquidGlass>
        </div>
      </section>
    </div>
  )
}

