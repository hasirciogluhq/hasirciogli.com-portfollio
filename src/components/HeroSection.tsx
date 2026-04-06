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
            Go, Kubernetes, and distributed backends. From MVP to scale. Code as craft, not “just ship it.”
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link href="/about" onClick={handleCTAClick} className="ui-btn-primary gap-2">
              Philosophy
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link href="/contact" className="ui-link-muted">
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
                <div className="flex h-full w-full items-center justify-center bg-muted font-sans text-xl font-semibold text-muted-foreground">
                  MH
                </div>
              )}
            </div>
            <div className="px-2 py-2.5">
              <p className="ui-brand text-center">Mustafa Hasırcıoğlu</p>
              <p className="ui-caption mt-0.5 text-center">İzmir · Remote</p>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
