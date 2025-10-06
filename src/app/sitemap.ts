import { MetadataRoute } from 'next'
import { getAllPosts, getAllTags, getAllAuthors } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hasirciogli.com'
  // Mon Oct 6 2025, 3:25 PM GMT+3 (Istanbul, Turkey)
  const currentDate = new Date('2025-10-06T15:25:00+03:00')

  // Get all blog posts, tags, and authors
  const posts = await getAllPosts()
  const tags = await getAllTags()
  const authors = await getAllAuthors()

  // Blog post URLs
  const blogPostUrls: MetadataRoute.Sitemap = posts
    .filter(post => post.status === 'published')
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.9 : 0.7,
    }))

  // Tag URLs
  const tagUrls: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Author URLs
  const authorUrls: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${baseUrl}/blog/author/${author.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core Pages - High Priority
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Turkish About Page
    {
      url: `${baseUrl}/mustafa-hasircioglu-kimdir`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Blog Main Page
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Blog Tags Index
    {
      url: `${baseUrl}/blog/tags`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // All Blog Posts
    ...blogPostUrls,

    // All Tag Pages
    ...tagUrls,

    // All Author Pages
    ...authorUrls,
  ]
}
