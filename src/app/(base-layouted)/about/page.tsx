import Link from "next/link"
import { Reveal, revealDelay } from "@/components/motion/Reveal"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" }

const stack = [
  ["Go", "5+ years"],
  ["Kubernetes", "4+ years"],
  ["PostgreSQL", "6+ years"],
  ["Next.js", "3+ years"],
]

const numbers = [
  ["7+", "Years of software"],
  ["10+", "Projects finished"],
  ["10+", "Still in production"],
  ["5M+", "Lines of code"],
]

const expertise = [
  "Cloud infrastructure and Kubernetes",
  "Payment systems",
  "Distributed systems",
  "Full-stack development",
]

const live = [
  ["deweloper.cloud", "https://deweloper.cloud"],
  ["hsrcpay.com", "https://hsrcpay.com"],
  ["ficksa.com", "https://ficksa.com"],
]

const values = [
  ["01", "Craft", "Writing code is a craft. I build the right solution, not the fast one. Every line should still be readable five years from now."],
  ["02", "Production", "Not demos. Real systems. Uptime, monitoring, and a response path from the first day."],
  ["03", "Ownership", "I do not only write the code. I think about the product, and I own the work end to end."],
  ["04", "Plain speech", "No jargon. Complex systems in simple words. Trust sits on that."],
]

const years = [
  ["2018", "The beginning", "The first line. PHP, then the web."],
  ["2023", "Work and the cloud", "First paid work, in e-commerce and fintech. Kubernetes and distributed systems from there."],
  ["2024", "Founder", "My own products. HsrcPay, and the ones around it."],
  ["2025", "Scale", "Ten-plus systems, hundreds of thousands of users. Larger problems, same craft."],
]

function Kicker({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]" style={serif}>
      {children}
    </p>
  )
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-3 max-w-xl text-[1.7rem] font-light leading-[1.1] text-foreground" style={display}>
      {children}
    </h2>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="home-grid-cell">
        <Reveal variant="left">
          <Kicker>About</Kicker>
          <h1
            className="mt-3 max-w-3xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
            style={display}
          >
            Mustafa. Engineer, founder, İzmir.
          </h1>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]" style={serif}>
              Software engineer and founder. Seven years of building software, four of them on my own products.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]" style={serif}>
              Cloud infrastructure, distributed systems, and payments. Go, Kubernetes, and PostgreSQL. The aim is always a system that stays up.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="home-grid-cell home-grid-split">
        <Reveal variant="rise">
          <Kicker>The stack</Kicker>
          <Heading>Years with the tools.</Heading>
          <ul className="mt-6">
            {stack.map(([name, yearsLabel]) => (
              <li key={name} className="flex items-baseline justify-between gap-6 border-t border-[var(--border-color)] py-3">
                <span className="text-[1.15rem] font-medium text-foreground" style={display}>{name}</span>
                <span className="text-[15px] italic text-[var(--text-secondary)]" style={serif}>{yearsLabel}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell home-grid-split">
        <Reveal variant="right">
          <Kicker>The count</Kicker>
          <Heading>What the years add up to.</Heading>
          <ul className="mt-6">
            {numbers.map(([value, label]) => (
              <li key={label} className="flex items-baseline justify-between gap-6 border-t border-[var(--border-color)] py-3">
                <span className="text-[1.35rem] font-light tabular-nums text-foreground" style={display}>{value}</span>
                <span className="text-[15px] italic text-[var(--text-secondary)]" style={serif}>{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell home-grid-split">
        <Reveal variant="fade">
          <Kicker>Expertise</Kicker>
          <Heading>Where the work sits.</Heading>
          <ul className="mt-6">
            {expertise.map((line, index) => (
              <li key={line} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[var(--border-color)] py-3">
                <span className="text-[13px] font-light tabular-nums text-[var(--text-secondary)]" style={display}>
                  0{index + 1}
                </span>
                <span className="text-[1.05rem] font-medium text-foreground" style={display}>{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell home-grid-split">
        <Reveal variant="settle">
          <Kicker>Live</Kicker>
          <Heading>Products still running.</Heading>
          <ul className="mt-6">
            {live.map(([name, href]) => (
              <li key={name} className="border-t border-[var(--border-color)]">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-6 py-3"
                >
                  <span className="text-[1.05rem] font-medium text-foreground" style={display}>{name}</span>
                  <span className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-secondary)]" style={serif}>Open</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="drop">
          <Kicker>Principles</Kicker>
          <Heading>What I will not trade.</Heading>
          <ol className="mt-8 grid gap-x-12 md:grid-cols-2">
            {values.map(([id, title, line], index) => (
              <li key={id} className="border-t border-[var(--border-color)] py-4">
                <Reveal variant="rise" delay={revealDelay(index)}>
                  <p className="text-[13px] font-light tabular-nums text-[var(--text-secondary)]" style={display}>{id}</p>
                  <p className="mt-1 text-[1.35rem] font-semibold text-foreground" style={display}>{title}</p>
                  <p className="mt-1 max-w-md text-[15px] italic leading-relaxed text-[var(--text-secondary)]" style={serif}>{line}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="left">
          <Kicker>The years</Kicker>
          <Heading>From the first line to now.</Heading>
          <p className="mt-3 max-w-xl text-[16px] italic text-[var(--text-secondary)]" style={serif}>
            Seven years. The same craft, larger systems.
          </p>
          <ul className="mt-8">
            {years.map(([year, title, line]) => (
              <li key={year} className="grid grid-cols-1 gap-1 border-t border-[var(--border-color)] py-4 sm:grid-cols-[5.5rem_12rem_1fr] sm:gap-6">
                <span className="text-[14px] text-[var(--text-secondary)]" style={serif}>{year}</span>
                <span className="text-[1.15rem] font-medium text-foreground" style={display}>{title}</span>
                <span className="text-[16px] leading-relaxed text-[var(--text-secondary)]" style={serif}>{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="fade">
          <Kicker>A line I keep</Kicker>
          <blockquote className="mt-4 max-w-3xl text-[1.7rem] font-light italic leading-[1.25] text-foreground sm:text-[2rem]" style={display}>
            I failed twenty times and did not stop. This is the twenty-first try. I expect the twenty-second to land. How will you beat that?
          </blockquote>
          <p className="mt-4 text-[15px] text-[var(--text-secondary)]" style={serif}>Mustafa Hasırcıoğlu</p>
        </Reveal>
      </section>

      <section className="home-grid-cell">
        <Reveal variant="settle">
          <Kicker>Next</Kicker>
          <Heading>From MVP to a system that stays up.</Heading>
          <p className="mt-3 max-w-xl text-[17px] italic text-[var(--text-secondary)]" style={serif}>
            Idea, scope, and a straight read on what it takes to ship.
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <Link href="/contact" className="text-[17px] italic text-[var(--link-primary)]" style={serif}>
              Write
            </Link>
            <Link href="/projects" className="text-[17px] italic text-[var(--text-secondary)]" style={serif}>
              See the work
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  )
}
