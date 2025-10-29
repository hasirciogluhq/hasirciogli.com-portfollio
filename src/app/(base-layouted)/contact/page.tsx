"use client"

import { useState } from "react"
import { LiquidGlass } from "@/components/liquid-glass"
import { Mail, Calendar, MapPin, Send, Github, Linkedin, Twitter, Phone } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'

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
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mustafa@hasirciogluhq.com",
      href: "mailto:mustafa@hasirciogluhq.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Call",
      value: "Book 30-min meeting",
      href: "https://calendly.com/hasircioglu",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "İzmir, Turkey",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
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
    <div className="min-h-screen bg-[#0F0F0F] pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        <div className="max-w-6xl mx-auto text-center">
          <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                Contact
              </span>
            </div>
          </LiquidGlass>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Looking for a technical partner for your project? Need help with infrastructure? 
            Or just want to discuss your idea? Let&apos;s connect.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
                onClick={() => {
                  sendGAEvent('event', 'contact_method_click', {
                    category: 'engagement',
                    label: method.title
                  })
                }}
              >
                <LiquidGlass className="p-6 rounded-2xl !bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 hover:!bg-zinc-900/60 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {method.value}
                  </p>
                </LiquidGlass>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <LiquidGlass className="p-8 rounded-2xl !bg-zinc-900/40 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                      Company / Project
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    >
                      <option value="consulting">Consulting</option>
                      <option value="fulltime">Full-time Job Offer</option>
                      <option value="project">Project Development</option>
                      <option value="infrastructure">Infrastructure Setup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none transition-all"
                      placeholder="Tell me about your project in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full md:w-auto px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-zinc-900/20 border-t-zinc-900 rounded-full animate-spin" />
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
              </LiquidGlass>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Availability Card */}
              <LiquidGlass className="p-6 rounded-2xl !bg-zinc-900/40 border border-zinc-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="text-lg font-semibold text-white">
                    Availability Status
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Currently available for new projects. I typically respond within 24 hours.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Average response time</span>
                    <span className="text-white font-medium">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Working hours</span>
                    <span className="text-white font-medium">09:00 - 18:00 GMT+3</span>
                  </div>
                </div>
              </LiquidGlass>

              {/* Social Links */}
              <LiquidGlass className="p-6 rounded-2xl !bg-zinc-900/40 border border-zinc-800/50">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Social Media
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-lg bg-zinc-800/40 hover:bg-zinc-800/60 transition-all"
                      onClick={() => {
                        sendGAEvent('event', 'social_link_click', {
                          category: 'engagement',
                          label: social.name
                        })
                      }}
                    >
                      <div className="text-zinc-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{social.name}</p>
                        <p className="text-xs text-zinc-500">{social.username}</p>
                      </div>
                      <svg className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </LiquidGlass>

              {/* FAQ Quick Links */}
              <LiquidGlass className="p-6 rounded-2xl !bg-zinc-900/40 border border-zinc-800/50">
                <h3 className="text-lg font-semibold text-white mb-4">
                  FAQ
                </h3>
                <div className="space-y-3 text-sm">
                  <details className="group">
                    <summary className="cursor-pointer text-zinc-300 hover:text-white transition-colors list-none flex items-center justify-between">
                      <span>How do you charge?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-zinc-500 leading-relaxed">
                      Project-based and hourly rates available. Let&apos;s discuss details for your specific needs.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-zinc-300 hover:text-white transition-colors list-none flex items-center justify-between">
                      <span>Do you work remotely?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-zinc-500 leading-relaxed">
                      Yes, I work 100% remotely. I can adapt to all time zones.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-zinc-300 hover:text-white transition-colors list-none flex items-center justify-between">
                      <span>How long does a project take?</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-zinc-500 leading-relaxed">
                      Depends on scope. 4-8 weeks for MVP, 3-6 months for full stack.
                    </p>
                  </details>
                </div>
              </LiquidGlass>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-zinc-400 mb-8">
            First 30-minute consultation is free. No commitment required.
          </p>
          <a
            href="https://calendly.com/hasircioglu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a Call Now</span>
          </a>
        </div>
      </section>
    </div>
  )
}
