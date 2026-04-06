"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { sendGAEvent } from "@next/third-parties/google"

export const Footer = () => {
  const handleSocialClick = (platform: string) => {
    sendGAEvent("event", "social_link_click", {
      category: "engagement",
      label: platform,
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hasirciogluhq",
      icon: <Github className="h-4 w-4" strokeWidth={1.5} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hasircioglu",
      icon: <Linkedin className="h-4 w-4" strokeWidth={1.5} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/hasirciogluhq",
      icon: <Twitter className="h-4 w-4" strokeWidth={1.5} />,
    },
    {
      name: "Email",
      href: "mailto:mustafa@hasirciogluhq.com",
      icon: <Mail className="h-4 w-4" strokeWidth={1.5} />,
    },
  ]

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mustafa Hasırcıoğlu",
            url: "https://hasirciogluhq.com",
            jobTitle: "Software Engineer & Technical Founder",
            description:
              "Full-stack developer specializing in Go, Kubernetes, and distributed systems.",
            sameAs: [
              "https://github.com/hasirciogluhq",
              "https://linkedin.com/in/hasircioglu",
              "https://twitter.com/hasirciogluhq",
            ],
            email: "mustafa@hasirciogluhq.com",
          }),
        }}
      />

      <footer className="border-t border-border bg-muted/30">
        <div className="layout-container flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="ui-brand">Mustafa Hasırcıoğlu</p>
              <p className="ui-body mt-0.5 max-w-xs">
                Go, Kubernetes, distributed systems. Production-focused engineering.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="ui-nav text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-5">
            <div className="flex flex-wrap gap-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(s.name.toLowerCase())}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="ui-caption">© {new Date().getFullYear()} Mustafa Hasırcıoğlu</p>
          </div>
        </div>
      </footer>
    </>
  )
}
