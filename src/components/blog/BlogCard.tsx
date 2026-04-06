"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

import { TagPill } from "./TagPill"
import { formatDate } from "@/lib/blog-utils"
import type { BlogPostMeta } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPostMeta
  variant?: "grid" | "list" | "spotlight"
  priority?: boolean
  className?: string
}

export function BlogCard({ post, variant = "grid", priority = false, className }: BlogCardProps) {
  if (variant === "list") {
    return <BlogCardList post={post} priority={priority} className={className} />
  }

  if (variant === "spotlight") {
    return <BlogCardSpotlight post={post} priority={priority} className={className} />
  }

  return <BlogCardGrid post={post} priority={priority} className={className} />
}

function BlogCardGrid({ post, priority, className }: Omit<BlogCardProps, "variant">) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn("group block h-full", className)}>
      <div className="surface-card h-full overflow-hidden p-0 transition-all duration-200 hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          {post.primaryTag && (
            <div className="absolute left-3 top-3">
              <TagPill {...post.primaryTag} variant="filled" size="sm" clickable={false} />
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag.slug} {...tag} size="sm" clickable={false} />
            ))}
          </div>

          <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" strokeWidth={1.5} />
              <span>{formatDate(post.publishedAt, "short")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" strokeWidth={1.5} />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.title}
                width={22}
                height={22}
                className="aspect-square rounded-full object-cover"
              />
            ) : (
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
                {post.author.title?.charAt(0) || "?"}
              </div>
            )}
            <span className="text-[11px] text-muted-foreground">{post.author.title || "Anonymous"}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function BlogCardList({ post, priority, className }: Omit<BlogCardProps, "variant">) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
      <div className="surface-card overflow-hidden p-0 transition-shadow hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden md:aspect-[4/3] md:w-72">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              priority={priority}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {post.primaryTag && (
                <TagPill {...post.primaryTag} variant="filled" size="sm" clickable={false} />
              )}
              {post.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag.slug} {...tag} size="sm" clickable={false} />
              ))}
            </div>

            <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <div className="flex items-center gap-3 text-sm">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.title}
                  width={32}
                  height={32}
                  className="aspect-square rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {post.author.title?.charAt(0) || "?"}
                </div>
              )}
              <div>
                <div className="font-medium text-foreground">{post.author.title || "Anonymous"}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatDate(post.publishedAt, "short")}</span>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function BlogCardSpotlight({ post, priority, className }: Omit<BlogCardProps, "variant">) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
      <div className="surface-card overflow-hidden p-0 transition-shadow hover:shadow-md">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.01]"
            priority={priority}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
            <div className="mb-3 flex flex-wrap gap-2">
              {post.primaryTag && (
                <TagPill {...post.primaryTag} variant="filled" size="md" clickable={false} />
              )}
              {post.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag.slug} {...tag} size="md" clickable={false} />
              ))}
            </div>

            <h2 className="mb-2 max-w-3xl font-sans text-2xl font-semibold leading-tight text-white transition-opacity duration-200 group-hover:opacity-95 md:text-4xl">
              {post.title}
            </h2>

            <p className="mb-4 line-clamp-2 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.title}
                  width={36}
                  height={36}
                  className="aspect-square rounded-full border border-white/20 object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                  {post.author.title?.charAt(0) || "?"}
                </div>
              )}
              <div>
                <div className="text-sm font-medium text-white">{post.author.title || "Anonymous"}</div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <span>{formatDate(post.publishedAt, "short")}</span>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
