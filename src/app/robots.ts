import { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/sitemap-config"

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl()
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${base}/sitemap.xml`, `${base}/blog/sitemap.xml`],
  }
}
