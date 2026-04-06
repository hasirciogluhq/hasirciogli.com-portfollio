"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface TagPillProps {
  title: string
  slug: string
  color?: string
  count?: number
  variant?: "default" | "filled" | "outline"
  size?: "sm" | "md" | "lg"
  showCount?: boolean
  clickable?: boolean
  className?: string
}

/** Renk anahtarları — stiller globals.css içindeki .pill-surface--* + CSS değişkenleri */
const pillSurfaceClass: Record<string, string> = {
  blue: "pill-surface--blue",
  green: "pill-surface--green",
  purple: "pill-surface--purple",
  orange: "pill-surface--orange",
  pink: "pill-surface--pink",
  cyan: "pill-surface--cyan",
  rose: "pill-surface--rose",
  sky: "pill-surface--sky",
  emerald: "pill-surface--emerald",
  lime: "pill-surface--lime",
  fuchsia: "pill-surface--fuchsia",
  zinc: "pill-surface--zinc",
  indigo: "pill-surface--indigo",
  yellow: "pill-surface--yellow",
  stone: "pill-surface--stone",
  red: "pill-surface--red",
  amber: "pill-surface--amber",
  violet: "pill-surface--violet",
  teal: "pill-surface--teal",
  slate: "pill-surface--slate",
}

const sizeMap = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
}

export function TagPill({
  title,
  slug,
  color = "blue",
  count,
  variant = "default",
  size = "md",
  showCount = false,
  clickable = true,
  className,
}: TagPillProps) {
  const surface = pillSurfaceClass[color] ?? pillSurfaceClass.blue

  const baseStyles = cn(
    "pill-surface backdrop-blur-sm",
    sizeMap[size],
    variant === "default" && surface,
    variant === "filled" && "border-transparent bg-primary text-primary-foreground hover:opacity-90",
    variant === "outline" && "border-border bg-transparent text-muted-foreground hover:bg-muted",
    clickable && "cursor-pointer transition-opacity hover:opacity-90",
    className
  )

  const content = (
    <>
      <span>{title}</span>
      {showCount && count !== undefined && <span className="opacity-60">·</span>}
      {showCount && count !== undefined && <span className="font-normal opacity-60">{count}</span>}
    </>
  )

  if (clickable) {
    return (
      <Link href={`/blog/tag/${slug}`} className={baseStyles} aria-label={`View posts tagged with ${title}`}>
        {content}
      </Link>
    )
  }

  return (
    <span className={baseStyles} aria-label={title}>
      {content}
    </span>
  )
}
