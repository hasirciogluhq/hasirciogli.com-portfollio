import { cn } from "@/lib/utils"

type PageShellProps = {
  kicker?: string
  title: React.ReactNode
  description?: string
  children?: React.ReactNode
  className?: string
  headerClassName?: string
  headerExtra?: React.ReactNode
}

export function PageShell({
  kicker,
  title,
  description,
  children,
  className,
  headerClassName,
  headerExtra,
}: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <header className="layout-section border-b border-border/60">
        <div
          className={cn(
            "layout-container flex flex-col gap-4 pb-10 pt-[var(--page-content-pt)] ui-enter",
            headerClassName
          )}
        >
          {kicker ? <p className="ui-kicker">{kicker}</p> : null}
          <h1 className="ui-heading-1">{title}</h1>
          {description ? <p className="ui-body max-w-2xl">{description}</p> : null}
          {headerExtra}
        </div>
      </header>
      {children}
    </div>
  )
}
