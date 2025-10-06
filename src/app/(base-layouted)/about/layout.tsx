import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software engineer, founder, and production systems enthusiast. 12+ years building scalable systems with Go, Kubernetes, and PostgreSQL.',
  openGraph: {
    title: 'About - Mustafa Hasırcıoğlu',
    description: 'Software engineer, founder, and production systems enthusiast. 12+ years building scalable systems.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

