"use client"

import { useState } from "react"
import { sendGAEvent } from "@next/third-parties/google"

const field =
  "w-full border-b border-[var(--border-color)] bg-transparent py-2 text-[16px] text-foreground outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--link-primary)]"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "consulting",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    sendGAEvent("event", "contact_form_submit", {
      category: "conversion",
      label: formData.projectType,
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok && data.success) {
        alert(data.message || "Your message has been received. I will write back soon.")
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          projectType: "consulting",
        })
      } else {
        alert(data.error || "Something went wrong. Try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Write to mustafa@hasirciogluhq.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="home-grid-cell">
      <p
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--link-primary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        Contact
      </p>
      <h1
        className="mt-3 max-w-xl text-[2.15rem] font-light leading-[1.05] text-foreground sm:text-[2.6rem]"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        A short note is enough.
      </h1>
      <p
        className="mt-3 max-w-md text-[17px] italic text-[var(--text-secondary)]"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        I reply within a day. Hours are 09:00–18:00, İzmir time.
      </p>

      <ul className="mt-8 w-full">
        {[
          ["Mail", "mustafa@hasirciogluhq.com", "mailto:mustafa@hasirciogluhq.com"],
          ["Time", "Pick a half hour", "https://calendly.com/hasircioglu"],
          ["Place", "İzmir · Remote", "/about"],
        ].map(([label, value, href]) => (
          <li key={label} className="border-t border-[var(--border-color)]">
            <a
              href={href}
              className="flex items-baseline justify-between gap-6 py-3"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
              >
                {label}
              </span>
              <span
                className="text-[1.05rem] font-medium text-foreground"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-10 grid w-full gap-x-10 gap-y-5 md:grid-cols-2">
        <label className="block">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">Name</span>
          <input id="name" name="name" required value={formData.name} onChange={handleInputChange} className={field} />
        </label>
        <label className="block">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">Email</span>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className={field} />
        </label>
        <label className="block">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">Company</span>
          <input id="company" name="company" value={formData.company} onChange={handleInputChange} className={field} />
        </label>
        <label className="block">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">Kind of work</span>
          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className={field}>
            <option value="consulting">Consulting</option>
            <option value="fulltime">Full-time</option>
            <option value="project">A build</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">Note</span>
          <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className={`${field} resize-y`} />
        </label>
        <button type="submit" disabled={isSubmitting} className="ui-btn-primary w-fit disabled:opacity-50 md:col-span-2">
          {isSubmitting ? "Sending" : "Write"}
        </button>
      </form>
    </section>
  )
}
