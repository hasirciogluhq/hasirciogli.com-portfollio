import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Reveal, revealDelay } from "@/components/motion/Reveal"

export const metadata = {
  title: "Blog - Mustafa Hasırcıoğlu",
  description: "Notes from production. Systems, Go, Kubernetes, and the craft of shipping.",
}

export default async function BlogPage() {
  const posts = await getAllPosts({ limit: 40 })

  return (
    <section className="home-grid-cell">
      <Reveal variant="fade">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Writing
        </p>
        <h1
          className="mt-3 max-w-xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Notes from the work.
        </h1>
      </Reveal>

      <div className="mt-8 hidden grid-cols-[minmax(0,1.6fr)_8rem_4.5rem_minmax(8rem,0.7fr)_1.25rem] gap-x-4 pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] md:grid" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
        <span>Piece</span>
        <span>When</span>
        <span>Read</span>
        <span>Author</span>
        <span className="sr-only">Open</span>
      </div>
      <ul>
        {posts.map((post, index) => {
          const when = new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          return (
            <li key={post.id} className="border-t border-[var(--border-color)]">
              <Reveal variant="rise" delay={revealDelay(index)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-[minmax(0,1fr)_auto_1.25rem] items-center gap-x-4 py-3.5 md:grid-cols-[minmax(0,1.6fr)_8rem_4.5rem_minmax(8rem,0.7fr)_1.25rem]"
                >
                  <span className="text-[1.05rem] font-medium leading-snug text-foreground" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                    {post.title}
                  </span>
                  <span className="hidden text-[14px] text-[var(--text-secondary)] md:inline" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
                    {when}
                  </span>
                  <span className="text-[14px] italic text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
                    {post.readingTime} min
                  </span>
                  <span className="hidden truncate text-[14px] text-[var(--text-secondary)] md:inline" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
                    {post.author.title}
                  </span>
                  <ChevronRight className="h-4 w-4 justify-self-end text-[var(--link-primary)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" strokeWidth={1.5} aria-hidden />
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
