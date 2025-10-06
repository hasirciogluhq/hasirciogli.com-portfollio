import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for consulting, full-time opportunities, or project development. Available for new projects with 24-hour response time.',
  openGraph: {
    title: 'Contact - Mustafa Hasırcıoğlu',
    description: 'Looking for a technical partner? Need help with infrastructure? Let\'s connect.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

