"use client"

import { useState } from "react"
import { sendGAEvent } from '@next/third-parties/google'

interface NewsletterFormProps {
  source?: string
  className?: string
}

export const NewsletterForm = ({ source = "unknown", className = "" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    sendGAEvent('event', 'newsletter_subscribe', {
      category: 'conversion',
      label: source
    })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setMessage({ type: "success", text: data.message })
        setEmail("")
      } else {
        setMessage({ type: "error", text: data.error || 'An error occurred. Please try again.' })
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setMessage({ type: "error", text: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <p className={`text-sm mt-3 text-center ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
          {message.text}
        </p>
      )}
      
      <p className="text-xs text-zinc-600 mt-4 text-center">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}

