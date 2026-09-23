"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
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

  return (
      <footer className="home-grid-footer">
      <div className="flex w-full flex-col gap-6">
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid grid-cols-2 gap-1" aria-label="Social">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => handleSocialClick(s.name.toLowerCase())}
                className="inline-flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div>
            <p className="ui-brand">Mustafa Hasırcıoğlu</p>
            <p className="ui-body mt-0.5 max-w-xs">
              Go, Kubernetes, distributed systems. Production-focused engineering.
            </p>
          </div>
        </div>
        <p className="ui-caption">© {new Date().getFullYear()} Mustafa Hasırcıoğlu</p>
      </div>
      </div>
    </footer>
  )
}
