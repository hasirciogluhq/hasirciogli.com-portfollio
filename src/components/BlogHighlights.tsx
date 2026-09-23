"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { HomeSection } from "@/components/home/HomeSection"

import { useState } from "react"


const pages = [
  [
    {
      id: "developer-philosophy",
      title: "Developer Philosophy: Craft Over Speed",
      slug: "/blog/developer-philosophy",
      date: "1 Oct 2024",
      read: "8 min",
      author: "Mustafa Hasırcıoğlu",
    },
    {
      id: "kubernetes-production-lessons",
      title: "5 Kubernetes Lessons I Learned the Hard Way",
      slug: "/blog/kubernetes-production-lessons",
      date: "10 Jan 2025",
      read: "5 min",
      author: "Mustafa Hasırcıoğlu",
    },
    {
      id: "building-payment-gateway",
      title: "Building a Payment Gateway: Technical Deep Dive",
      slug: "/blog/building-payment-gateway",
      date: "5 Jan 2025",
      read: "8 min",
      author: "Mustafa Hasırcıoğlu",
    },
  ],
  [
    {
      id: "silent-disruption",
      title: "Silent Disruption: Stealth Mode Payment Revolution",
      slug: "/blog/silent-disruption",
      date: "20 Jun 2025",
      read: "6 min",
      author: "Mustafa Hasırcıoğlu",
    },
    {
      id: "five-years-later",
      title: "Five Years Later, I'm Still Building the Same Thing",
      slug: "/blog/five-years-later-still-building-the-same-thing",
      date: "5 Nov 2025",
      read: "12 min",
      author: "Mustafa Hasırcıoğlu",
    },
    {
      id: "no-cap",
      title: "No Cap: Why I Built My Own Framework at 16",
      slug: "/blog/no-cap-building-my-own-framework",
      date: "1 Nov 2025",
      read: "9 min",
      author: "Mustafa Hasırcıoğlu",
    },
  ],
  [
    {
      id: "hsrcpay-api",
      title: "Designing the Future of Payments: Hsrcpay API Architecture",
      slug: "/blog/designing-future-payments-hsrcpay-api-architecture",
      date: "25 Sep 2025",
      read: "11 min",
      author: "Mustafa Hasırcıoğlu",
    },
    {
      id: "welcome",
      title: "Welcome to My Blog",
      slug: "/blog/welcome-to-my-blog",
      date: "15 Jan 2024",
      read: "4 min",
      author: "Mustafa Hasırcıoğlu",
    },
  ],
]

const cols =
  "grid grid-cols-[minmax(0,1fr)_auto_1.25rem] items-center gap-x-4 md:grid-cols-[minmax(0,1.6fr)_7.5rem_4.5rem_minmax(8rem,0.7fr)_1.25rem]"

export const BlogHighlights = () => {
  const [page, setPage] = useState(0)
  const posts = pages[page]
  return (
    <HomeSection embedded card={false} measure={false} id="writing" sectionClassName="home-grid-posts">
      <p
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        Writing
      </p>
      <h2
        className="mt-3 text-[1.85rem] font-light leading-[1.05] text-foreground"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        Thoughts & technical deep dives
      </h2>

      <div className="mt-6">
        <div
          className={`${cols} pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]`}
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          <span>Piece</span>
          <span className="hidden md:inline">When</span>
          <span>Read</span>
          <span className="hidden md:inline">Author</span>
          <span className="sr-only">Open</span>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-t border-[var(--border-color)]">
              <Link
                href={post.slug}
                onClick={() =>
                  sendGAEvent("event", "blog_post_click", {
                    category: "engagement",
                    label: post.slug,
                  })
                }
                className={`${cols} group py-3.5 text-foreground`}
              >
                <span
                  className="min-w-0 text-[1.05rem] font-medium leading-snug"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {post.title}
                </span>
                <span
                  className="hidden text-[14px] text-[var(--text-secondary)] md:inline"
                  style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                >
                  {post.date}
                </span>
                <span
                  className="text-[14px] italic text-[var(--text-secondary)]"
                  style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                >
                  {post.read}
                </span>
                <span
                  className="hidden truncate text-[14px] text-[var(--text-secondary)] md:inline"
                  style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                >
                  {post.author}
                </span>
                <ChevronRight
                  className="h-4 w-4 justify-self-end text-[var(--link-primary)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-center gap-1">
          {pages.map((_, index) => {
            const on = page === index
            return (
              <button
                key={index}
                type="button"
                aria-label={`Writing page ${index + 1}`}
                aria-current={on ? "true" : undefined}
                onClick={() => setPage(index)}
                className={`px-3 py-2 text-[13px] tabular-nums leading-none ${
                  on ? "font-semibold text-foreground" : "font-normal text-[var(--text-secondary)]"
                }`}
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            )
          })}
        </div>
      </div>
    </HomeSection>
  )
}
