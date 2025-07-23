import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | Mustafa Hasırcıoğlu',
  description: 'Yazılım geliştirme, teknoloji ve kod felsefesi hakkında düşüncelerim.',
  authors: [{ name: 'Mustafa Hasırcıoğlu' }],
  keywords: ['blog', 'yazılım geliştirme', 'teknoloji', 'kod felsefesi', 'Mustafa Hasırcıoğlu'],
  openGraph: {
    title: 'Blog | Mustafa Hasırcıoğlu',
    description: 'Yazılım geliştirme, teknoloji ve kod felsefesi hakkında düşüncelerim.',
    url: 'https://www.hasirciogli.com/blogs',
    images: [
      {
        url: '/mustafa-hasircioglu.webp',
        width: 800,
        height: 600,
        alt: 'Mustafa Hasırcıoğlu Blog',
      },
    ],
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 