import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const BetaBadge = ({ className = "" }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary",
        className
      )}
      title="This project is currently in beta"
    >
      <Sparkles className="h-3 w-3" />
      <span>BETA</span>
    </span>
  )
}
