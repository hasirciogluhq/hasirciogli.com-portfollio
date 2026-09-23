"use client"

import { motion } from "framer-motion"
import { HomeSection } from "@/components/home/HomeSection"

const voices = [
  {
    quote:
      "He built the payment path from nothing. We have moved millions since, and it has not gone down.",
    name: "Ahmet Y.",
    role: "CEO, fintech",
  },
  {
    quote: "Deploys went from hours to minutes. He also left the team able to run it.",
    name: "Sarah K.",
    role: "CTO, SaaS",
  },
  {
    quote: "He argued with the product until it was the right one. We shipped in six weeks.",
    name: "Mehmet D.",
    role: "Founder, commerce",
  },
]

export const TestimonialsSection = () => {
  return (
    <HomeSection embedded measure={false} id="voices" sectionClassName="home-grid-testimonials">
      <div className="grid w-full gap-10 md:grid-cols-2 md:items-start md:gap-16">
        <div>
        <p
          className="text-[13px] font-medium uppercase tracking-[0.22em] text-[var(--text-secondary)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          After the launch
        </p>
        <motion.blockquote
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="mt-6"
        >
          <p
            className="text-[1.85rem] font-light italic leading-[1.2] text-foreground sm:text-[2.35rem]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {voices[0].quote}
          </p>
          <footer
            className="mt-4 text-[15px] font-medium text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            {voices[0].name}
            <span className="font-normal"> · {voices[0].role}</span>
          </footer>
        </motion.blockquote>
        </div>

        <div className="flex flex-col gap-8 md:pt-12">
          {voices.slice(1).map((voice, index) => (
            <motion.blockquote
              key={voice.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.05 * (index + 1) }}
            >
              <p
                className="text-[1.15rem] font-normal leading-snug text-foreground"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {voice.quote}
              </p>
              <footer
                className="mt-2 text-[13px] italic text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
              >
                {voice.name}, {voice.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </HomeSection>
  )
}
