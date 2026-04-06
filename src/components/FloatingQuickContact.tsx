"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Mail, Calendar } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"

export const FloatingQuickContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
        alert(data.message || "Message sent.")
        setFormData({ name: "", email: "", message: "" })
        setIsOpen(false)
      } else {
        alert(data.error || "Something went wrong.")
      }
    } catch {
      alert("Network error. Try email instead.")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Quick contact"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
          <button
            type="button"
            className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-contact-title"
            className="relative w-full max-w-sm rounded-t-lg border border-border bg-card text-card-foreground shadow-lg sm:rounded-lg"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 id="quick-contact-title" className="text-sm font-semibold">
                Quick contact
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-4 p-4">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="mailto:mustafa@hasirciogluhq.com"
                  className="surface-card flex flex-col items-center gap-1.5 px-3 py-3 text-center text-xs font-medium transition-colors hover:bg-muted/80"
                  onClick={() =>
                    sendGAEvent("event", "quick_contact_email", {
                      category: "engagement",
                      label: "floating_contact",
                    })
                  }
                >
                  <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  Email
                </a>
                <a
                  href="https://calendly.com/hasircioglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex flex-col items-center gap-1.5 px-3 py-3 text-center text-xs font-medium transition-colors hover:bg-muted/80"
                  onClick={() =>
                    sendGAEvent("event", "quick_contact_calendar", {
                      category: "engagement",
                      label: "floating_contact",
                    })
                  }
                >
                  <Calendar className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  Book call
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="quick-name" className="mb-1 block text-[11px] font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="quick-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="quick-email" className="mb-1 block text-[11px] font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="quick-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="you@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="quick-message" className="mb-1 block text-[11px] font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="quick-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Brief project context…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
