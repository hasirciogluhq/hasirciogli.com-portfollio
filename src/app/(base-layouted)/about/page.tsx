import Link from "next/link"

const values = [
  ["01", "Craft", "The right system, not the fast one. It should still read in five years."],
  ["02", "Production", "Monitoring and a response path exist before the first user."],
  ["03", "Ownership", "I treat the product as mine, not as a ticket queue."],
  ["04", "Plain speech", "Complex systems, simple words."],
]

const years = [
  ["2018", "First line", "PHP and the web."],
  ["2023", "Cloud", "E-commerce, fintech, Kubernetes."],
  ["2024", "Founder", "HsrcPay and the products around it."],
  ["2025", "Scale", "Ten-plus systems, still the same craft."],
]

export default function AboutPage() {
  return (
    <section className="home-grid-cell">
      <p
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        About
      </p>
      <h1
        className="mt-3 max-w-2xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        Mustafa. Engineer, founder, İzmir.
      </h1>
      <p
        className="mt-4 max-w-xl text-[17px] leading-relaxed text-[var(--text-secondary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        Seven years of software, four of them on my own products. Go, Kubernetes, PostgreSQL, and payment systems that stay up.
      </p>

      <ol className="mt-10 max-w-xl">
        {values.map(([id, title, line]) => (
          <li key={id} className="border-t border-[var(--border-color)] py-4">
            <p className="text-[13px] font-light tabular-nums text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{id}</p>
            <p className="mt-1 text-[1.35rem] font-semibold text-foreground" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{title}</p>
            <p className="mt-1 text-[15px] italic text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>{line}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-[1.6rem] font-light text-foreground" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
        The years
      </h2>
      <ul className="mt-4 max-w-xl">
        {years.map(([year, title, line]) => (
          <li key={year} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-[var(--border-color)] py-3">
            <span className="text-[14px] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>{year}</span>
            <span>
              <span className="block text-[1.05rem] font-medium text-foreground" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{title}</span>
              <span className="text-[15px] italic text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>{line}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <Link href="/contact" className="text-[17px] italic text-[var(--link-primary)]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}>
          Write
        </Link>
      </p>
    </section>
  )
}
