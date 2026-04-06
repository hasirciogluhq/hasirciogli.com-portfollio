import { cn } from "@/lib/utils"

export type HomeSectionProps = {
  children: React.ReactNode
  id?: string
  className?: string
  /** İlk blok: sabit navbar altında üst boşluk */
  first?: boolean
  /** Dikey padding (Tailwind). Verilmezse `first` / varsayılan `py` uygulanır. */
  padY?: string
  /** Section kökü: arka plan, border vb. */
  sectionClassName?: string
}

export function HomeSection({
  children,
  id,
  className,
  first = false,
  padY,
  sectionClassName,
}: HomeSectionProps) {
  const padding =
    padY ??
    (first
      ? "pb-[var(--home-section-y)] pt-[var(--home-first-section-pt)]"
      : "py-[var(--home-section-y)]")

  return (
    <section id={id} className={cn("layout-section", sectionClassName)}>
      <div className={cn("layout-container", padding, className)}>{children}</div>
    </section>
  )
}
