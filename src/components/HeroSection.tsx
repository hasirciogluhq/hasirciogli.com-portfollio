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
      <div className="ui-enter flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 flex-1 space-y-5">
          <p className="ui-kicker">Software engineer · Founder</p>
          <h1
            className="max-w-[16ch] text-[2.65rem] leading-[0.98] tracking-[-0.025em] text-foreground sm:text-[3.25rem]"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 320,
              fontVariationSettings: '"SOFT" 0, "WONK" 0, "opsz" 144',
            }}
          >
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
