"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { motion, AnimatePresence } from "framer-motion"
import { HomeSection } from "@/components/home/HomeSection"

const steps = [
  {
    id: "01",
    title: "Discover",
    line: "Name the problem before the stack.",
    detail: "Roadmap, architecture calls, and a timeline you can actually keep.",
    marks: ["System design", "Stack", "Risk"],
  },
  {
    id: "02",
    title: "Build",
    line: "Code that is already watched.",
    detail: "Tests, docs, and monitoring land with the first feature, not after launch.",
    marks: ["Go", "TypeScript", "Postgres"],
  },
  {
    id: "03",
    title: "Ship",
    line: "Deploy without a ceremony.",
    detail: "CI, zero-downtime releases, and a rollback that is one command.",
    marks: ["Kubernetes", "Docker", "Terraform"],
  },
  {
    id: "04",
    title: "Scale",
    line: "Growth that does not rewrite the core.",
    detail: "Load, cache, and cost stay calm when traffic jumps.",
    marks: ["Balancing", "Cache", "Cost"],
  },
]

export const ProcessSection = () => {
  const [open, setOpen] = useState("01")
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const rules = root.querySelectorAll<HTMLElement>("[data-rule]")
    if (reduce) {
      rules.forEach((rule) => {
        rule.style.transform = "scaleX(1)"
      })
      return
    }
    const tween = gsap.fromTo(
      rules,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.9, stagger: 0.12, ease: "power2.out" },
    )
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <HomeSection embedded measure={false} id="movements" sectionClassName="home-grid-process">
      <div ref={rootRef} className="w-full">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Four movements
        </p>
        <h2
          className="mt-3 max-w-xl text-[2.15rem] font-light leading-[1.05] tracking-tight text-foreground sm:text-[2.6rem]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Idea, then a system that stays up.
        </h2>

        <ol className="mt-8">
          {steps.map((step) => {
            const active = open === step.id
            return (
              <li key={step.id}>
                <div
                  data-rule
                  className="h-px origin-left bg-[var(--border-color)]"
                />
                <button
                  type="button"
                  onClick={() => setOpen(step.id)}
                  className="flex w-full items-baseline gap-4 py-4 text-left sm:gap-8"
                  aria-expanded={active}
                >
                  <span
                    className="w-12 shrink-0 text-[1.65rem] font-light tabular-nums text-[var(--text-secondary)] sm:text-[2rem]"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {step.id}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="block text-[1.35rem] font-semibold leading-none text-foreground sm:text-[1.6rem]"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {step.title}
                    </span>
                    <span
                      className="mt-1.5 block text-[15px] font-normal italic text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                    >
                      {step.line}
                    </span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      key={step.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 ml-16 border-l border-[var(--link-primary)] pl-4 sm:ml-20">
                        <p
                          className="max-w-md text-[17px] font-medium leading-snug text-foreground"
                          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                        >
                          {step.detail}
                        </p>
                        <p className="mt-3 flex flex-wrap items-center gap-x-3 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                          {step.marks.map((mark, index) => (
                            <span key={mark} className="inline-flex items-center gap-3">
                              {index > 0 ? (
                                <span className="inline-block h-2 w-px bg-[var(--border-color)]" />
                              ) : null}
                              {mark}
                            </span>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            )
          })}
          <div data-rule className="h-px origin-left bg-[var(--border-color)]" />
        </ol>
      </div>
    </HomeSection>
  )
}
