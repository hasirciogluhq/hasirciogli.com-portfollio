"use client"

import { motion, useReducedMotion } from "framer-motion"

export type RevealVariant = "rise" | "drop" | "left" | "right" | "fade" | "settle"

const hidden = {
  rise: { opacity: 0, y: 10 },
  drop: { opacity: 0, y: -8 },
  left: { opacity: 0, x: -14 },
  right: { opacity: 0, x: 14 },
  fade: { opacity: 0 },
  settle: { opacity: 0, scale: 0.985 },
}

const shown = {
  rise: { opacity: 1, y: 0 },
  drop: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  fade: { opacity: 1 },
  settle: { opacity: 1, scale: 1 },
}

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
}: {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={hidden[variant]}
      whileInView={shown[variant]}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
