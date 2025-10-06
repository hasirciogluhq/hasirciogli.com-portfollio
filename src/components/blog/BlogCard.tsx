"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { LiquidGlass } from "@/components/liquid-glass"
import { TagPill } from "./TagPill"
import { formatDate } from "@/lib/blog-utils"
import type { BlogPostMeta } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPostMeta
  variant?: 'grid' | 'list' | 'spotlight'
  priority?: boolean
  className?: string
}

export function BlogCard({ post, variant = 'grid', priority = false, className }: BlogCardProps) {
  if (variant === 'list') {
    return <BlogCardList post={post} priority={priority} className={className} />
  }

  if (variant === 'spotlight') {
    return <BlogCardSpotlight post={post} priority={priority} className={className} />
  }

  return <BlogCardGrid post={post} priority={priority} className={className} />
}

// Grid Variant (3-column)
function BlogCardGrid({ post, priority, className }: Omit<BlogCardProps, 'variant'>) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block h-full", className)}
    >
      <LiquidGlass className="h-full !bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-700 overflow-hidden p-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 aspect-square bg-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
          
          {/* Primary Tag on Image */}
          {post.primaryTag && (
            <div className="absolute top-3 left-3">
              <TagPill
                {...post.primaryTag}
                variant="filled"
                size="sm"
                clickable={false}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Tags Row */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <TagPill
                key={tag.slug}
                {...tag}
                size="sm"
                clickable={false}
              />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(post.publishedAt, 'short')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.title}
                width={24}
                height={24}
                className="rounded-full aspect-square bg-cover object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                {post.author.title?.charAt(0) || '?'}
              </div>
            )}
            <span className="text-xs text-zinc-400">{post.author.title || 'Anonymous'}</span>
          </div>
        </div>
      </LiquidGlass>
    </Link>
  )
}

// List Variant (full-width with horizontal layout)
function BlogCardList({ post, priority, className }: Omit<BlogCardProps, 'variant'>) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block", className)}
    >
      <LiquidGlass className="!bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-700 overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-80 aspect-[16/9] md:aspect-[4/3] flex-shrink-0 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 aspect-square bg-cover"
              priority={priority}
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/20" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8">
            {/* Tags Row */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.primaryTag && (
                <TagPill {...post.primaryTag} variant="filled" size="sm" clickable={false} />
              )}
              {post.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag.slug} {...tag} size="sm" clickable={false} />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-base text-zinc-300 mb-4 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta & Author */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.title}
                    width={32}
                    height={32}
                    className="rounded-full aspect-square bg-cover object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-bold text-zinc-300">
                    {post.author.title?.charAt(0) || '?'}
                  </div>
                )}
                <div>
                  <div className="text-white font-medium">{post.author.title || 'Anonymous'}</div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span>{formatDate(post.publishedAt, 'short')}</span>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LiquidGlass>
    </Link>
  )
}

// Spotlight Variant (large hero card)
function BlogCardSpotlight({ post, priority, className }: Omit<BlogCardProps, 'variant'>) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block", className)}
    >
      <LiquidGlass className="!bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-700 overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 aspect-square bg-cover"
            priority={priority}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.primaryTag && (
                <TagPill {...post.primaryTag} variant="filled" size="md" clickable={false} />
              )}
              {post.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag.slug} {...tag} size="md" clickable={false} />
              ))}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight max-w-4xl">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-lg text-zinc-200 mb-6 leading-relaxed max-w-3xl line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta & Author */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.title}
                    width={40}
                    height={40}
                    className="rounded-full aspect-square bg-cover object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-lg font-bold text-zinc-300">
                    {post.author.title?.charAt(0) || '?'}
                  </div>
                )}
                <div>
                  <div className="text-white font-semibold">{post.author.title || 'Anonymous'}</div>
                  <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <span>{formatDate(post.publishedAt, 'short')}</span>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LiquidGlass>
    </Link>
  )
}

