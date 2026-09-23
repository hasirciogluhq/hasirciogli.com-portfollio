import { HomeSection } from "@/components/home/HomeSection"

const outcomes = [
  {
    id: "01",
    title: "Ship",
    line: "Launch in weeks, not months.",
    detail: "A modern stack and deploys that do not wait on a ceremony.",
  },
  {
    id: "02",
    title: "Sleep",
    line: "It stays up through the night.",
    detail: "Monitoring and a response path exist before the first user.",
  },
  {
    id: "03",
    title: "Scale",
    line: "Ten times the traffic, same core.",
    detail: "The architecture absorbs growth instead of asking for a rewrite.",
  },
  {
    id: "04",
    title: "Cost",
    line: "The bill stays honest.",
    detail: "Cache, queries, and right-sized machines. About forty percent less waste.",
  },
]

export const BenefitsSection = () => {
  return (
    <HomeSection embedded id="keep" sectionClassName="home-grid-benefits">
      <p
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        What you keep
      </p>
      <h2
        className="mt-3 text-[1.85rem] font-light leading-[1.05] text-foreground"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        Systems that work while you sleep.
      </h2>
      <ol className="mt-6">
        {outcomes.map((item) => (
          <li key={item.id} className="py-3">
            <p
              className="text-[13px] font-light tabular-nums text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              {item.id}
            </p>
            <p
              className="mt-1 text-[1.25rem] font-semibold leading-none text-foreground"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              {item.title}
            </p>
            <p
              className="mt-1.5 text-[15px] italic text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              {item.line}
            </p>
            <p
              className="mt-1 text-[15px] font-normal text-foreground"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </HomeSection>
  )
}
