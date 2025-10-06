import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Real products solving real problems. From MVP to scale - HsrcPay, Deweloper Cloud, FIGHTLAND, and more. Built with Go, Kubernetes, Next.js.',
  openGraph: {
    title: 'Projects - Mustafa Hasırcıoğlu',
    description: 'Real products solving real problems. From MVP to scale - payment systems, cloud infrastructure, game servers.',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

