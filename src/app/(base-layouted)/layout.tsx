import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import { Footer } from "@/components/Footer";
import { NavbarComponentByClaude2 } from "@/components/NavBar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Mustafa Hasırcıoğlu - Software Engineer & Founder',
    template: '%s | Mustafa Hasırcıoğlu'
  },
  description: 'Software engineer specializing in Go, Kubernetes, and distributed systems. Building production-ready systems from MVP to scale.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Go Developer', 'Kubernetes', 'Cloud Infrastructure', 'Payment Systems', 'Distributed Systems'],
  authors: [{ name: 'Mustafa Hasırcıoğlu' }],
  creator: 'Mustafa Hasırcıoğlu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hasirciogli.com',
    title: 'Mustafa Hasırcıoğlu - Software Engineer & Founder',
    description: 'Building production-ready systems. Specializing in Go, Kubernetes, and distributed systems.',
    siteName: 'Mustafa Hasırcıoğlu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Hasırcıoğlu - Software Engineer & Founder',
    description: 'Building production-ready systems. Specializing in Go, Kubernetes, and distributed systems.',
    creator: '@hasirciogli',
  },
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarComponentByClaude2 />
      {children}

      {/* Footer */}
      <Footer />

      {/* Floating Quick Contact */}
      <FloatingQuickContact />
    </>
  );
}
