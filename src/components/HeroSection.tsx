"use client"

import { ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HomeSection } from "@/components/home/HomeSection"

export const HeroSection = () => {
  const [imageError, setImageError] = useState(false)

  const handleCTAClick = () => {
    sendGAEvent("event", "hero_cta_click", {
      category: "engagement",
      label: "Discover philosophy",
    })
  }

  return (
    <HomeSection first>
      <div className="ui-enter flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
        <div className="min-w-0 flex-1 space-y-5">
          <p className="ui-kicker">Software engineer · Founder</p>
          <h1 className="ui-heading-1">
            Production systems, clear craft, long term thinking.
          </h1>
          <p className="ui-body max-w-md">
            Go, Kubernetes, and distributed backends — from MVP to scale. Code as craft, not “just ship it.”
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/about"
              onClick={handleCTAClick}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Philosophy
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mx-auto shrink-0 md:mx-0">
          <div className="surface-card ui-enter ui-enter-delay-1 overflow-hidden p-1">
            <div className="relative aspect-square w-[200px] overflow-hidden rounded-md bg-muted sm:w-[220px]">
              {!imageError ? (
                <Image
                  src="/mustafa-hasircioglu.webp"
                  alt="Mustafa Hasırcıoğlu"
                  width={220}
                  height={220}
                  className="h-full w-full object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted text-2xl font-semibold text-muted-foreground">
                  MH
                </div>
              )}
            </div>
            <div className="px-2 py-2.5">
              <p className="text-center text-sm font-medium text-foreground">Mustafa Hasırcıoğlu</p>
              <p className="text-center text-xs text-muted-foreground">İzmir · Remote</p>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
