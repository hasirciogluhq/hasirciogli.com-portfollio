import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Mustafa Hasırcıoğlu',
  description: 'Deep dives into real projects built from scratch. Payment systems, cloud infrastructure, e-commerce platforms, and more. See the architecture, challenges, and outcomes.',
  keywords: ['case studies', 'project portfolio', 'software engineering', 'system architecture', 'production systems', 'mustafa hasirciogli'],
  openGraph: {
    title: 'Case Studies | Mustafa Hasırcıoğlu',
    description: 'Deep dives into real projects: Payment systems, cloud infrastructure, e-commerce. From zero to production.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Mustafa Hasırcıoğlu',
    description: 'Deep dives into real projects built from scratch',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

