import Link from "next/link"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }

const sections = [
  ["Keep", "/#keep"],
  ["Stack", "/#stack"],
  ["Movements", "/#movements"],
  ["Writing", "/#writing"],
  ["Voices", "/#voices"],
  ["Note", "/#note"],
]

const elsewhere = [
  { label: "GitHub", href: "https://github.com/hasirciogluhq", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/hasircioglu", external: true },
  { label: "Twitter", href: "https://twitter.com/hasirciogluhq", external: true },
  { label: "Mail", href: "mailto:mustafa@hasirciogluhq.com", external: false },
  { label: "Calendar", href: "https://calendly.com/hasircioglu", external: true },
]

export const PageRails = () => {
  return (
    <nav aria-label="Pages" className="home-grid-rails">
      <p
        className="flex h-6 items-center justify-between gap-x-4 overflow-x-auto border-b border-[var(--border-color)] px-[var(--pad)] text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-[var(--text-secondary)]"
        style={serif}
      >
        {sections.map(([label, href]) => (
          <Link key={label} href={href} className="relative top-px shrink-0 hover:text-foreground">
            {label}
          </Link>
        ))}
      </p>
      <p
        className="flex h-9 items-center justify-between gap-x-6 overflow-x-auto border-b border-[var(--border-color)] px-[var(--pad)] text-[11px] font-medium uppercase leading-none tracking-[0.18em] text-[var(--text-secondary)]"
        style={serif}
      >
        {elsewhere.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="relative top-px shrink-0 hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </p>
    </nav>
  )
}
