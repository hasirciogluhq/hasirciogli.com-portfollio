import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Geliştirici Felsefem - Developer Philosophy | Mustafa Hasırcıoğlu',
  description: 'Kod yazmak benim için bir meslek değil, bir zanaat. For me, coding is not a profession, it&apos;s a craft.',
  authors: [{ name: 'Mustafa Hasırcıoğlu' }],
  keywords: ['developer philosophy', 'geliştirici felsefesi', 'software architect', 'clean architecture', 'Mustafa Hasırcıoğlu'],
  openGraph: {
    title: 'Geliştirici Felsefem - Developer Philosophy | Mustafa Hasırcıoğlu',
    description: 'Kod yazmak benim için bir meslek değil, bir zanaat. For me, coding is not a profession, it&apos;s a craft.',
    url: 'https://www.hasirciogli.com/blogs/developer-philosophy',
    images: [
      {
        url: '/mustafa-hasircioglu.webp',
        width: 800,
        height: 600,
        alt: 'Mustafa Hasırcıoğlu - Developer Philosophy',
      },
    ],
  },
};

export default function DeveloperPhilosophyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 