"use client"

import { LiquidGlass } from "./liquid-glass"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { sendGAEvent } from '@next/third-parties/google'

export const Footer = () => {
  const handleSocialClick = (platform: string) => {
    sendGAEvent('event', 'social_link_click', {
      category: 'engagement',
      label: platform
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hasirciogli",
      icon: <Github className="w-5 h-5" />,
      username: "@hasirciogli"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hasircioglu",
      icon: <Linkedin className="w-5 h-5" />,
      username: "Mustafa Hasırcıoğlu"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/hasirciogli",
      icon: <Twitter className="w-5 h-5" />,
      username: "@hasirciogli"
    },
    {
      name: "Email",
      href: "mailto:mhasirciogli@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      username: "mhasirciogli@gmail.com"
    }
  ]

  const navigation = {
    product: [
      { name: "Projects", href: "/projects" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Philosophy", href: "/blog/developer-philosophy" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ]
  }

  const recentPosts = [
    { title: "Developer Philosophy: Craft Over Speed", slug: "/blog/developer-philosophy" },
    { title: "Kubernetes Production Lessons", slug: "/blog/kubernetes-production-lessons" },
    { title: "Building a Payment Gateway", slug: "/blog/building-payment-gateway" }
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mustafa Hasırcıoğlu",
            "url": "https://hasirciogli.com",
            "jobTitle": "Software Engineer & Technical Founder",
            "description": "Full-stack developer specializing in Go, Kubernetes, and distributed systems. Building scalable products from 0 to 1.",
            "sameAs": [
              "https://github.com/hasirciogli",
              "https://linkedin.com/in/hasircioglu",
              "https://twitter.com/hasirciogli"
            ],
            "email": "mhasirciogli@gmail.com"
          })
        }}
      />

      <footer className="bg-[#1A1A1A] border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-3">
                Mustafa Hasırcıoğlu
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-sm">
                Software engineer building production-ready systems. Specializing in Go, Kubernetes, and distributed architectures. From MVP to scale.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.name.toLowerCase())}
                    className="group"
                    aria-label={social.name}
                  >
                    <LiquidGlass className="px-3 py-2 rounded-lg !bg-zinc-900/60 hover:!bg-zinc-800/60 transition-all flex items-center gap-2">
                      <div className="text-zinc-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {social.name}
                      </span>
                    </LiquidGlass>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation: Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation: Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Recent Posts
              </h4>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={post.slug}
                      className="text-sm text-zinc-400 hover:text-white transition-colors line-clamp-2 leading-tight"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-zinc-500">
                © {new Date().getFullYear()} Mustafa Hasırcıoğlu. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                {navigation.legal.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Built with */}
              <div className="text-xs text-zinc-600">
                Built with <span className="text-zinc-400">Next.js</span> · Deployed on <span className="text-zinc-400">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
