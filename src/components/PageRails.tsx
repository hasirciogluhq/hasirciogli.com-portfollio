"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }

const sections = [
  ["Keep", "/#keep"],
  ["Stack", "/#stack"],
  ["Movements", "/#movements"],
  ["Writing", "/#writing"],
  ["Voices", "/#voices"],
  ["Note", "/#note"],
]

const pages = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
]

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export const PageRails = () => {
  const pathname = usePathname()

  return (
    <nav aria-label="Pages" className="home-grid-rails">
      <p
        className="flex h-6 items-center justify-between gap-x-4 overflow-x-auto border-b border-[var(--border-color)] px-[var(--pad)] text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-[var(--text-secondary)]"
        style={serif}
      >
        {sections.map(([label, href]) => (
          <Link key={label} href={href} className="relative top-px shrink-0 hover:text-foreground">
            {label}
          </Link>
        ))}
      </p>
      <p
        className="flex h-9 items-center justify-between gap-x-6 overflow-x-auto border-b border-[var(--border-color)] px-[var(--pad)] text-[11px] font-medium uppercase leading-none tracking-[0.18em] text-[var(--text-secondary)]"
        style={serif}
      >
        {pages.map(([label, href]) => {
          const current = isCurrent(pathname, href)
          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? "page" : undefined}
              className={`relative top-px shrink-0 hover:text-foreground ${current ? "text-foreground" : ""}`}
            >
              {label}
            </Link>
          )
        })}
      </p>
    </nav>
  )
}
