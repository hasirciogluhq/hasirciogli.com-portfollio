"use client"

import { useMemo, useState } from "react"
import skillsData from "@/data/skills.json"
import { HomeSection } from "@/components/home/HomeSection"
import { Reveal } from "@/components/motion/Reveal"

interface Skill {
  name: string
  category: string
  proficiency: number
}

const categories = [
  "Languages",
  "Frontend",
  "Backend",
  "DevOps",
  "Cloud",
  "Tools",
  "Architecture",
] as const

export const SkillsSection = () => {
  const [active, setActive] = useState<(typeof categories)[number] | "All">("All")

  const columns = useMemo(() => {
    const skills = skillsData.skills as Skill[]
    const names = active === "All" ? categories : [active]
    const rows = names.flatMap((category) =>
      skills
        .filter((skill) => skill.category === category)
        .map((skill) => ({ category, name: skill.name })),
    )
    const mid = Math.ceil(rows.length / 2)
    return [rows.slice(0, mid), rows.slice(mid)]
  }, [active])

  return (
    <HomeSection embedded id="stack" sectionClassName="home-grid-skills">
      <Reveal variant="right">
      <p
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        The stack
      </p>
      <h2
        className="mt-3 text-[1.85rem] font-light leading-[1.05] text-foreground"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        Tools I actually ship with.
      </h2>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1" role="group" aria-label="Skill categories">
        {(["All", ...categories] as const).map((category) => {
          const on = active === category
          return (
            <button
              key={category}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(category)}
              className={`text-[13px] ${on ? "font-semibold text-foreground" : "font-normal text-[var(--text-secondary)]"}`}
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              {category}
            </button>
          )
        })}
      </div>
      </Reveal>

      <Reveal variant="settle" delay={0.05}>
      <div className="mt-6 grid grid-cols-2 gap-x-8">
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="space-y-1.5">
            {column.map((row, index) => {
              const showLabel = index === 0 || column[index - 1].category !== row.category
              return (
                <li key={row.name}>
                  {showLabel ? (
                    <p
                      className={`mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] ${index === 0 ? "" : "mt-3"}`}
                      style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                    >
                      {row.category}
                    </p>
                  ) : null}
                  <p
                    className="text-[1.02rem] font-medium leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {row.name}
                  </p>
                </li>
              )
            })}
          </ul>
        ))}
      </div>
      </Reveal>
    </HomeSection>
  )
}
