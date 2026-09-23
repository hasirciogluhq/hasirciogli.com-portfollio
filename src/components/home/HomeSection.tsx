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
  /** İç kart. Hero gibi sade hücrelerde kapalı. */
  card?: boolean
  /** false: içerik section genişliğinde kalır. */
  measure?: boolean
}

export function HomeSection({
  children,
  id,
  className,
  first = false,
  padY,
  sectionClassName,
  embedded = false,
  card = false,
  measure = true,
}: HomeSectionProps) {
  const padding =
    padY ??
    (first
      ? "pb-[var(--home-section-y)] pt-[var(--home-first-section-pt)]"
      : "py-[var(--home-section-y)]")

  if (embedded) {
    return (
      <section id={id} className={cn("home-grid-cell", sectionClassName, className)}>
        {card ? (
          <div className="theme-card home-measure" style={{ "--radius": "24px" } as React.CSSProperties}>
            {children}
          </div>
        ) : (
          <div className={measure ? "home-measure" : "w-full"}>{children}</div>
        )}
      </section>
    )
  }

  return (
    <section id={id} className={cn("layout-section", sectionClassName)}>
      <div className={cn("layout-container", padding, className)}>{children}</div>
    </section>
  )
}
