import { cn } from "@/lib/utils"

type SectionBlockProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  padded?: boolean
}

/** Alt sayfalarda bölüm: düz arka plan, layout-container ile hizalı içerik */
export function SectionBlock({
  children,
  className,
  containerClassName,
  padded = true,
}: SectionBlockProps) {
  return (
    <section className={cn("layout-section border-t border-border/60 bg-background", className)}>
      <div
        className={cn(
          "layout-container",
          padded && "py-[var(--home-section-y)]",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
