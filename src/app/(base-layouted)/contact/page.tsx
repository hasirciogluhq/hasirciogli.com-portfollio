"use client"

import { useState } from "react"

import { Mail, Calendar, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { PageShell } from "@/components/layout/PageShell"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "consulting"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    sendGAEvent('event', 'contact_form_submit', {
      category: 'conversion',
      label: formData.projectType
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        alert(data.message || 'Your message has been received successfully! I will get back to you soon.')
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          projectType: "consulting"
        })
      } else {
        alert(data.error || 'An error occurred. Please try again later.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('An error occurred. Please try again later or send an email directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "mustafa@hasirciogluhq.com",
      href: "mailto:mustafa@hasirciogluhq.com",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      value: "Book 30-min meeting",
      href: "https://calendly.com/hasircioglu",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "İzmir, Turkey",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/hasirciogluhq",
      username: "@hasirciogluhq"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/hasircioglu",
      username: "Mustafa Hasırcıoğlu"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/hasirciogluhq",
      username: "@hasirciogluhq"
    }
  ]

  return (
    <PageShell
      kicker="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-primary">together</span>
        </>
      }
      description="Looking for a technical partner for your project? Need help with infrastructure? Or just want to discuss your idea? Let's connect."
    >
      <section className="layout-section">
        <div className="layout-container py-12">
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group"
                onClick={() => {
                  sendGAEvent("event", "contact_method_click", {
                    category: "engagement",
                    label: method.title,
                  })
                }}
              >
                <div className="surface-card h-full rounded-xl p-6 transition-all duration-200 hover:shadow-md">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-[1.02]">
                    {method.icon}
                  </div>
                  <h3 className="ui-heading-3 mb-2 transition-colors duration-200 group-hover:text-primary">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="surface-card rounded-xl p-8">
                <h2 className="ui-heading-2 mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
                      Company / Project
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-transparent transition-all"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-muted-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-transparent transition-all"
                    >
                      <option value="consulting">Consulting</option>
                      <option value="fulltime">Full-time Job Offer</option>
                      <option value="project">Project Development</option>
                      <option value="infrastructure">Infrastructure Setup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-transparent resize-none transition-all"
                      placeholder="Tell me about your project in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6 lg:col-span-2">
              <div className="surface-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Availability Status
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Currently available for new projects. I typically respond within 24 hours.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Average response time</span>
                    <span className="text-foreground font-medium">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Working hours</span>
                    <span className="text-foreground font-medium">09:00 - 18:00 GMT+3</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="surface-card rounded-xl p-6">
                <h3 className="ui-heading-3 mb-4">Social Media</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted transition-all"
                      onClick={() => {
                        sendGAEvent('event', 'social_link_click', {
                          category: 'engagement',
                          label: social.name
                        })
                      }}
                    >
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                      <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="surface-card rounded-xl p-6">
                <h3 className="ui-heading-3 mb-4">FAQ</h3>
                <div className="space-y-3 text-sm">
                  <details className="group">
                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors list-none flex items-center justify-between">
                      <span>How do you charge?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Project-based and hourly rates available. Let&apos;s discuss details for your specific needs.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors list-none flex items-center justify-between">
                      <span>Do you work remotely?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Yes, I work 100% remotely. I can adapt to all time zones.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors list-none flex items-center justify-between">
                      <span>How long does a project take?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Depends on scope. 4-8 weeks for MVP, 3-6 months for full stack.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section border-t border-border/60">
        <div className="layout-container py-16 text-center">
          <h2 className="ui-heading-1 mb-4">Ready to get started?</h2>
          <p className="ui-body mx-auto mb-8 max-w-xl">
            First 30-minute consultation is free. No commitment required.
          </p>
          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule a Call Now</span>
          </a>
        </div>
      </section>
    </PageShell>
  )
}
