"use client"

import { ChevronRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"
import { HomeSection } from "@/components/home/HomeSection"
import { OrbitLogos } from "@/components/home/OrbitLogos"

export const HeroSection = () => {
  const handleCTAClick = () => {
    sendGAEvent("event", "hero_cta_click", {
      category: "engagement",
      label: "Discover philosophy",
    })
  }

  return (
    <HomeSection embedded card={false} measure={false} sectionClassName="home-grid-hero">
      <div className="-mx-[var(--pad)] -mt-[var(--pad)] mb-6">
        <p
          className="flex h-6 items-center justify-between gap-x-4 border-b border-[var(--border-color)] px-[var(--pad)] text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-[var(--text-secondary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          {[
            ["Keep", "#keep"],
            ["Stack", "#stack"],
            ["Movements", "#movements"],
            ["Writing", "#writing"],
            ["Voices", "#voices"],
            ["Note", "#note"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="relative top-px hover:text-foreground">
              {label}
            </a>
          ))}
        </p>
        <p
          className="flex h-9 items-center justify-between gap-x-6 border-b border-[var(--border-color)] px-[var(--pad)] text-[11px] font-medium uppercase leading-none tracking-[0.18em] text-[var(--text-secondary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          <Link href="/about" className="relative top-px hover:text-foreground">
            İzmir · Remote
          </Link>
          <Link href="/projects" className="relative top-px hover:text-foreground">
            Go · Kubernetes · Payments
          </Link>
          <Link href="/contact" className="relative top-px hover:text-foreground">
            MVP to production
          </Link>
        </p>
      </div>
      <div className="ui-enter flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 flex-1 space-y-5">
          <p className="ui-kicker">Software engineer · Founder</p>
          <h1 className="ui-heading-1">
            Production systems, clear craft, long term thinking.
          </h1>
          <p className="ui-body max-w-md">
            Go, Kubernetes, and distributed backends. From MVP to scale. Code as craft, not “just ship it.”
          </p>
          <div className="flex items-baseline gap-6 pt-2">
            <Link
              href="/about"
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-1 text-[17px] italic text-foreground"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              Philosophy
              <ChevronRight
                className="h-3.5 w-3.5 text-[var(--link-primary)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
            <Link
              href="/contact"
              className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="relative mx-auto h-[340px] w-full min-w-0 flex-1 overflow-visible md:mx-0 md:h-[420px]">
          <OrbitLogos />
        </div>
      </div>
    </HomeSection>
  )
}
