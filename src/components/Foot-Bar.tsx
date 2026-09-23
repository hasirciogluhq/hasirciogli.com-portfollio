"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FolderKanban, Mail, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export const FootBar = () => {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="layout-container flex h-14 items-center gap-2">
        <Link href="/" className="ui-brand shrink-0 transition-colors hover:text-primary">
          <span className="sm:hidden">MH</span>
          <span className="hidden sm:inline">Mustafa Hasırcıoğlu</span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-0.5 sm:justify-center sm:gap-1">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "ui-nav inline-flex h-9 items-center gap-1.5 rounded-md px-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-2.5",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
                <span className="hidden md:inline">{item.label}</span>
                <span className="sr-only md:hidden">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}
