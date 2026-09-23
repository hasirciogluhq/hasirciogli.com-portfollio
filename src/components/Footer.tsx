"use client"

import { sendGAEvent } from "@next/third-parties/google"
import { Reveal } from "@/components/motion/Reveal"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" }

const socialLinks = [
  { name: "GitHub", href: "https://github.com/hasirciogluhq" },
  { name: "LinkedIn", href: "https://linkedin.com/in/hasircioglu" },
  { name: "Twitter", href: "https://twitter.com/hasirciogluhq" },
  { name: "Mail", href: "mailto:mustafa@hasirciogluhq.com" },
]

export const Footer = () => {
  return (
    <footer className="home-grid-footer">
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
      <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Reveal variant="fade">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
              Colophon
            </p>
            <p className="mt-2 text-[1.7rem] font-light leading-none text-foreground" style={display}>
              Mustafa Hasırcıoğlu
            </p>
            <p className="mt-3 max-w-sm text-[16px] italic leading-relaxed text-[var(--text-secondary)]" style={serif}>
              Go, Kubernetes, distributed systems. Production-focused engineering.
            </p>
          </div>
        </Reveal>
        <Reveal variant="rise" delay={0.06} className="flex flex-col gap-3 sm:items-end">
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() =>
                  sendGAEvent("event", "social_link_click", {
                    category: "engagement",
                    label: s.name.toLowerCase(),
                  })
                }
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] transition-colors duration-200 hover:text-foreground"
                style={serif}
              >
                {s.name}
              </a>
            ))}
          </p>
          <p className="text-[13px] text-[var(--text-secondary)]" style={serif}>
            © {new Date().getFullYear()} Mustafa Hasırcıoğlu
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
