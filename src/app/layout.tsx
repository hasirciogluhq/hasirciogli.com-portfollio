import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Mustafa Hasırcıoğlu - Software Developer & Designer',
  description: 'Portfolio of Mustafa Hasırcıoğlu, a software developer and designer. Showcasing innovative projects and technical expertise.',
  authors: [{ name: 'Mustafa Hasırcıoğlu' }],
  keywords: ['software developer', 'designer', 'portfolio', 'web development', 'AI', 'projects'],
  appleWebApp: {
    title: 'Mustafa Hasırcıoğlu',
  },
  openGraph: {
    title: 'Mustafa Hasırcıoğlu - Software Developer & Designer',
    description: 'Explore the portfolio of Mustafa Hasırcıoğlu, showcasing various projects, skills, and goals in the field of software development and design.',
    url: 'https://hasirciogluhq.com',
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
    creator: '@hasirciogluhq',
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-LSSWDGXJ9V" />
          <GoogleTagManager gtmId="G-LSSWDGXJ9V" />
        </ThemeProvider>
      </body>
    </html>
  );
}
