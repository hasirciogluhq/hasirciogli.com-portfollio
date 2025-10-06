import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mustafa Hasırcıoğlu Kimdir',
  description: 'Mustafa Hasırcıoğlu - Yazılım mühendisi, founder ve üretim sistemleri uzmanı. 12+ yıl deneyim, Go, Kubernetes ve distributed systems.',
  openGraph: {
    title: 'Mustafa Hasırcıoğlu Kimdir',
    description: 'Yazılım mühendisi, founder ve üretim sistemleri uzmanı. 12+ yıl deneyim.',
  },
}

export default function MustafaHasirciogluKimdirLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

