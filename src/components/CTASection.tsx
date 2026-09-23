"use client"

import { sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"
import { HomeSection } from "@/components/home/HomeSection"

export const CTASection = () => {
  const track = (label: string) => {
    sendGAEvent("event", "cta_click", { category: "conversion", label })
  }

  return (
    <HomeSection embedded measure={false} id="note" sectionClassName="home-grid-cta">
      <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            className="max-w-md text-[2rem] font-light leading-[1.05] text-foreground sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            A short note is enough.
          </h2>
          <p
            className="mt-3 max-w-sm text-[17px] italic text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Tell me the system you need. I reply with a straight read on scope.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Link
            href="/contact"
            onClick={() => track("contact")}
            className="ui-btn-primary"
          >
            Write
          </Link>
          <a
            href="mailto:mustafa@hasirciogluhq.com"
            onClick={() => track("email")}
            className="text-[15px] text-[var(--link-primary)]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            mustafa@hasirciogluhq.com
          </a>
          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("calendar")}
            className="text-[13px] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Or pick a time
          </a>
        </div>
      </div>
    </HomeSection>
  )
}
