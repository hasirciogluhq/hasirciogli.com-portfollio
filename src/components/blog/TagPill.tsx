"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface TagPillProps {
  title: string
  slug: string
  color?: string
  count?: number
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  clickable?: boolean
  className?: string
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20',
  // Hsrcpay related tags
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20',
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20',
  lime: 'bg-lime-500/10 text-lime-400 border-lime-500/20 hover:bg-lime-500/20',
  fuchsia: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 hover:bg-fuchsia-500/20',
  // API and development tags
  zinc: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20 hover:bg-zinc-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20',
  stone: 'bg-stone-500/10 text-stone-400 border-stone-500/20 hover:bg-stone-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20',
  // Philosophy and craftsmanship tags
  teal: 'bg-teal-500/10 text-teal-400 border-teal-500/20 hover:bg-teal-500/20',
  slate: 'bg-slate-500/10 text-slate-400 border-slate-500/20 hover:bg-slate-500/20'
}

const sizeMap = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm'
}

export function TagPill({
  title,
  slug,
  color = 'blue',
  count,
  variant = 'default',
  size = 'md',
  showCount = false,
  clickable = true,
  className
}: TagPillProps) {
  const baseStyles = cn(
    "inline-flex items-center gap-1.5 rounded-md font-medium transition-all duration-200",
    "border backdrop-blur-sm",
    sizeMap[size],
    {
      [colorMap[color] || colorMap.blue]: variant === 'default',
      'bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-100': variant === 'filled',
      'bg-transparent text-zinc-400 border-zinc-700 hover:bg-zinc-800/40': variant === 'outline'
    },
    clickable && "hover:-translate-y-0.5 hover:shadow-lg cursor-pointer",
    className
  )

  const content = (
    <>
      <span>{title}</span>
      {showCount && count !== undefined && (
        <span className="opacity-60">·</span>
      )}
      {showCount && count !== undefined && (
        <span className="opacity-60 font-normal">{count}</span>
      )}
    </>
  )

  if (clickable) {
    return (
      <Link
        href={`/blog/tag/${slug}`}
        className={baseStyles}
        aria-label={`View posts tagged with ${title}`}
      >
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

