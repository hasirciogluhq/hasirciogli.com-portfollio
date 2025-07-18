import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mustafa Hasırcıoğlu - Software Developer & Designer',
  description: 'Portfolio of Mustafa Hasırcıoğlu, a software developer and designer. Showcasing innovative projects and technical expertise.',
  authors: [{ name: 'Mustafa Hasırcıoğlu' }],
  keywords: ['software developer', 'designer', 'portfolio', 'web development', 'AI', 'projects'],
  openGraph: {
    title: 'Mustafa Hasırcıoğlu - Software Developer & Designer',
    description: 'Explore the portfolio of Mustafa Hasırcıoğlu, showcasing various projects, skills, and goals in the field of software development and design.',
    url: 'https://www.hasirciogli.com',
    images: [
      {
        url: '/mustafa-hasircioglu.webp', // Görsel yolunu buraya ekleyin
        width: 800,
        height: 600,
        alt: 'Mustafa Hasırcıoğlu Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@hasirciogli',
    title: 'Mustafa Hasırcıoğlu - Software Developer & Designer',
    description: 'Explore the portfolio of Mustafa Hasırcıoğlu, showcasing various projects, skills, and goals in the field of software development and design.',
    images: ['/mustafa-hasircioglu.webp'], // Görsel yolunu buraya ekleyin
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
