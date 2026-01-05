import { Sparkles } from "lucide-react"

export const BetaBadge = ({ className = "" }: { className?: string }) => {
  return (
    <span 
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 text-brand-primary dark:text-brand-accent border border-brand-primary/30 dark:border-brand-accent/30 rounded-md backdrop-blur-sm ${className}`}
      title="This project is currently in beta"
    >
      <Sparkles className="w-3 h-3" />
      <span>BETA</span>
    </span>
  )
}
