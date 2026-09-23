import { cn } from "@/lib/utils"

export type HomeSectionProps = {
  children: React.ReactNode
  id?: string
  className?: string
  /** İlk blok: sayfa üst boşluğu */
  first?: boolean
  /** Dikey padding (Tailwind). Verilmezse `first` / varsayılan `py` uygulanır. */
  padY?: string
  /** Section kökü: arka plan, border vb. */
  sectionClassName?: string
  /** Üst ızgara hücresi: kendi container ve padding’ini kullanmaz. */
  embedded?: boolean
}

export function HomeSection({
  children,
  id,
  className,
  first = false,
  padY,
  sectionClassName,
  embedded = false,
}: HomeSectionProps) {
  const padding =
    padY ??
    (first
      ? "pb-[var(--home-section-y)] pt-[var(--home-first-section-pt)]"
      : "py-[var(--home-section-y)]")

  if (embedded) {
    return (
      <section id={id} className={cn("home-grid-cell", sectionClassName, className)}>
        {children}
      </section>
    )
  }

  return (
    <section id={id} className={cn("layout-section", sectionClassName)}>
      <div className={cn("layout-container", padding, className)}>{children}</div>
    </section>
  )
}
