import { MetadataRoute } from "next"
import { getAllPosts, getAllTags, getAllAuthors } from "@/lib/blog"
import { getSiteUrl } from "@/lib/sitemap-config"

/**
 * Blog-only URLs: posts, tags, authors, and blog index pages.
 * Core routes live in /sitemap.xml.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl()
  const now = new Date()

  const [posts, tags, authors] = await Promise.all([
    getAllPosts(),
    getAllTags(),
    getAllAuthors(),
  ])

  const blogPosts: MetadataRoute.Sitemap = posts
    .filter((post) => post.status === "published")
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: post.featured ? 0.9 : 0.7,
    }))

  const tagUrls: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const authorUrls: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${baseUrl}/blog/author/${author.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }))

  return [
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/tags`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
    ...tagUrls,
    ...authorUrls,
  ]
}
