"use client"

import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card block rounded-xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
      </div>
    </a>
  )
}
