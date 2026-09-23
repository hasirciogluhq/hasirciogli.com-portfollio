"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center" aria-hidden />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]"
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      {isDark ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
    </button>
  )
}
