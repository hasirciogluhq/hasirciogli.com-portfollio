/**
 * Production base URL for sitemaps, robots, and canonical metadata.
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://hasirciogluhq.com) in env.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
  return "https://hasirciogluhq.com"
}
