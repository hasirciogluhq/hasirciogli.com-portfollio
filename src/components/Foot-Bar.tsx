"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" }

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export const FootBar = () => {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border-color)] bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex h-14 w-full max-w-[var(--home-grid-max-width)] items-center justify-between gap-6 px-[var(--pad)]">
        <Link href="/" className="shrink-0 text-[15px] font-medium text-foreground" style={display}>
          <span className="sm:hidden">MH</span>
          <span className="hidden sm:inline">Mustafa Hasırcıoğlu</span>
        </Link>

        <div className="flex min-w-0 items-center gap-6 overflow-x-auto">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative top-px shrink-0 text-[11px] font-medium uppercase leading-none tracking-[0.18em] transition-colors duration-200 hover:text-foreground ${
                  active ? "text-foreground" : "text-[var(--text-secondary)]"
                }`}
                style={serif}
              >
                {item.label}
              </Link>
            )
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
