"use client"

import {
  Code,
  Database,
  Server,
  GitBranch,
  Award,
  Target,
  Heart,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SectionBlock } from "@/components/layout/SectionBlock"

export default function AboutPage() {
  const [imageError, setImageError] = useState(false)

  const techStack = [
    { name: "Go", icon: <Code className="h-4 w-4" />, years: "5+" },
    { name: "Kubernetes", icon: <Server className="h-4 w-4" />, years: "4+" },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" />, years: "6+" },
    { name: "Next.js", icon: <GitBranch className="h-4 w-4" />, years: "3+" },
  ]

  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Craft Over Speed",
      description:
        "Writing code is a craft. I build the right solutions, not fast ones. Every line should be maintainable even five years from now.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Production First",
      description:
        "Not demos, but real systems. 99.9% uptime, monitoring, and incident response from day one.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ownership Mindset",
      description:
        "I don't just write code, I think about the product. With a founder mentality, I take ownership of all aspects of the work.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clear Communication",
      description:
        "No technical jargon. I translate complex systems into simple words. Transparency and trust are the foundation of everything.",
    },
  ]

  const journey = [
    {
      year: "2018",
      title: "The Beginning",
      description: "My first line of code. Started with PHP and web technologies.",
      icon: "🎯",
    },
    {
      year: "2023",
      title: "Professional Life & Cloud",
      description:
        "First professional projects. Started working in e-commerce and fintech. Focused on Kubernetes and distributed systems.",
      icon: "💼",
    },
    {
      year: "2024",
      title: "Founder Journey",
      description: "Started building my own products. HsrcPay and other projects came to life.",
      icon: "🚀",
    },
    {
      year: "2025",
      title: "Scale & Impact",
      description: "10+ projects, hundreds of thousands of users. Now solving bigger problems.",
      icon: "🌟",
    },
  ]

  const stats = [
    { label: "Years Experience", value: "7+", icon: <Zap className="h-5 w-5" /> },
    { label: "Completed Projects", value: "10+", icon: <Target className="h-5 w-5" /> },
    { label: "In Production", value: "10+", icon: <Server className="h-5 w-5" /> },
    { label: "Lines of Code", value: "5M+", icon: <Code className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="layout-section border-b border-border/60">
        <div className="layout-container ui-enter grid grid-cols-1 items-center gap-12 pb-16 pt-[var(--page-content-pt)] lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-md border border-border bg-muted px-3 py-1.5">
              <div className="flex items-center gap-2">
                <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ui-kicker">About me</span>
              </div>
            </div>

            <h1 className="ui-heading-1 mb-6">
              Entrepreneurial developer — <span className="text-primary">production &amp; scale</span>
            </h1>

            <div className="mb-8 space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m Mustafa. Software engineer, founder, and production systems enthusiast. I&apos;ve been
                building software for 7+ years, and creating my own products for the past 4 years.
              </p>
              <p className="ui-body">
                I specialize in cloud infrastructure, distributed systems, and payment systems. I love working with
                Go, Kubernetes, and PostgreSQL. I always aim to build production-grade, scalable systems.
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div key={tech.name} className="surface-card rounded-lg px-4 py-3 transition-shadow duration-200 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">{tech.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.years} experience</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() =>
                sendGAEvent("event", "about_cta_click", { category: "engagement", label: "Lets Work Together" })
              }
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
            >
              <span>Let&apos;s Work Together</span>
              <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="surface-card rounded-xl p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-2xl">
                    {!imageError ? (
                      <Image
                        src="/mustafa-hasircioglu.webp"
                        alt="Mustafa Hasırcıoğlu"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-2xl font-semibold text-muted-foreground">
                        MH
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="ui-heading-3">Mustafa Hasırcıoğlu</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer · Founder</p>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-muted p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="text-primary">{stat.icon}</div>
                        <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expertise</p>
                  <div className="space-y-2">
                    {["Cloud Infrastructure & K8s", "Payment Systems", "Distributed Systems", "Full-Stack Development"].map(
                      (skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Featured Projects
                  </p>
                  <div className="space-y-2">
                    {["deweloper.cloud", "hsrcpay.com", "ficksa.com"].map((project) => (
                      <div
                        key={project}
                        className="flex items-center justify-between rounded-lg bg-muted p-2 transition-colors duration-200 hover:bg-muted/80"
                      >
                        <span className="text-sm font-medium text-muted-foreground">{project}</span>
                        <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionBlock>
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block rounded-md border border-border bg-muted px-3 py-1.5">
            <div className="flex items-center gap-2">
              <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ui-kicker">Values</span>
            </div>
          </div>
          <h2 className="ui-heading-1 mb-4">My Values &amp; Principles</h2>
          <p className="ui-body mx-auto max-w-2xl">
            Coding isn&apos;t just a job. These values guide me in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="surface-card p-6 transition-shadow duration-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="ui-heading-3 mb-3">{value.title}</h3>
              <p className="ui-body">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock className="bg-muted/20">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-md border border-border bg-background px-3 py-1.5">
            <div className="flex items-center gap-2">
              <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ui-kicker">Journey</span>
            </div>
          </div>
          <h2 className="ui-heading-1 mb-4">My Journey</h2>
          <p className="ui-body">From first line of code to today, a 7-year adventure.</p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {journey.map((item, index) => (
            <div key={index} className="group flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl transition-transform duration-200 group-hover:scale-[1.02]">
                  {item.icon}
                </div>
                {index < journey.length - 1 && <div className="mt-2 h-full w-px grow bg-border" />}
              </div>
              <div className="surface-card flex-1 p-6 transition-shadow duration-200 group-hover:shadow-sm">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {item.year}
                  </span>
                  <h3 className="ui-heading-3">{item.title}</h3>
                </div>
                <p className="ui-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="surface-card mx-auto max-w-4xl p-10 text-center">
          <blockquote className="ui-heading-2 mb-6 italic leading-relaxed text-foreground md:text-2xl">
            &ldquo;I failed 20 times but didn&apos;t give up — now I&apos;m on my 21st attempt and I know I&apos;ll win on
            the 22nd. How will you beat me?&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground">— Mustafa Hasırcıoğlu</p>
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="ui-heading-1 mb-4">Ready for your project?</h2>
          <p className="ui-body mx-auto mb-8 max-w-2xl">
            From MVP to production, from idea to scalable system. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
            >
              <span>Get in touch</span>
              <TrendingUp className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
            >
              <span>Projects</span>
            </Link>
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
