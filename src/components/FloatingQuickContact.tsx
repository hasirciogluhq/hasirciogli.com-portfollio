"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"

const field =
  "w-full border-b border-[var(--border-color)] bg-transparent py-2 text-[16px] text-foreground outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--link-primary)]"

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" }
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" }

export const FloatingQuickContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const triggerRef = useRef<HTMLButtonElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      nameRef.current?.focus()
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    sendGAEvent("event", "quick_contact_submit", {
      category: "engagement",
      label: "floating_contact",
    })
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: "other",
          company: "",
        }),
      })
      const data = await response.json()
      if (response.ok && data.success) {
        alert(data.message || "Your message has been received. I will write back soon.")
        setFormData({ name: "", email: "", message: "" })
        close()
      } else {
        alert(data.error || "Something went wrong.")
      }
    } catch {
      alert("Something went wrong. Write to mustafa@hasirciogluhq.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <div className="fixed right-4 z-40 bottom-[calc(var(--footbar-height)+1rem)] sm:right-6">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-[13px] italic text-[var(--text-secondary)] transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]"
          style={serif}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Quick contact"
        >
          Write
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--background)]/70"
            aria-label="Close"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-contact-title"
            className="relative w-full max-w-md border border-[var(--border-color)] bg-[var(--background)] px-6 py-6 sm:px-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
                  style={serif}
                >
                  Note
                </p>
                <h2
                  id="quick-contact-title"
                  className="mt-2 text-[1.7rem] font-light leading-[1.05] text-foreground"
                  style={display}
                >
                  A short note is enough.
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="mt-1 text-[var(--text-secondary)] transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-6">
              <li className="border-t border-[var(--border-color)]">
                <a
                  href="mailto:mustafa@hasirciogluhq.com"
                  className="flex items-baseline justify-between gap-6 py-3"
                  onClick={() =>
                    sendGAEvent("event", "quick_contact_email", {
                      category: "engagement",
                      label: "floating_contact",
                    })
                  }
                >
                  <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                    Mail
                  </span>
                  <span className="text-[15px] font-medium text-foreground" style={display}>
                    mustafa@hasirciogluhq.com
                  </span>
                </a>
              </li>
              <li className="border-t border-[var(--border-color)]">
                <a
                  href="https://calendly.com/hasircioglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-6 py-3"
                  onClick={() =>
                    sendGAEvent("event", "quick_contact_calendar", {
                      category: "engagement",
                      label: "floating_contact",
                    })
                  }
                >
                  <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                    Time
                  </span>
                  <span className="text-[15px] font-medium text-foreground" style={display}>
                    Pick a half hour
                  </span>
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <label className="block">
                <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                  Name
                </span>
                <input
                  ref={nameRef}
                  id="quick-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={field}
                />
              </label>
              <label className="block">
                <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                  Email
                </span>
                <input
                  id="quick-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={field}
                />
              </label>
              <label className="block">
                <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]" style={serif}>
                  Note
                </span>
                <textarea
                  id="quick-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`${field} resize-y`}
                />
              </label>
              <button type="submit" disabled={isSubmitting} className="ui-btn-primary w-fit disabled:opacity-50">
                {isSubmitting ? "Sending" : "Write"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
