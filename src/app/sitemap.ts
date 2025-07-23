import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hasirciogli.com'
  const currentDate = new Date()

  return [
    // Ana Sayfa
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Hakkımda Sayfaları
    {
      url: `${baseUrl}/mustafa-hasircioglu-kimdir`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/who-is-mustafa-hasircioglu`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog Ana Sayfaları
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs/developer-philosophy`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog Türkçe Sayfaları
    {
      url: `${baseUrl}/blogs/developer-philosophy/tr`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog İngilizce Sayfaları
    {
      url: `${baseUrl}/blogs/developer-philosophy/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Manifest ve Icons (opsiyonel)
    {
      url: `${baseUrl}/manifest.json`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]
} 