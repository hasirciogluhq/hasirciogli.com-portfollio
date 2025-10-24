"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import SocialLink from "@/components/SocialLink";

export default function BlogFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mt-0 overflow-hidden"
    >
      {/* Enhanced Apple-style glass morphism background */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl border-t border-white/[0.15] 
                      shadow-[0_-1px_0_0_rgba(255,255,255,0.08),0_0_40px_rgba(0,0,0,0.4)]
                      before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/[0.08] before:via-white/[0.03] before:to-transparent before:pointer-events-none">
        {/* Enhanced inner glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-400/[0.03] via-zinc-500/[0.01] to-transparent pointer-events-none"></div>
      </div>

      {/* Premium metallic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-zinc-800/30 pointer-events-none"></div>

      {/* Subtle texture noise */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-0 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white via-zinc-100 to-zinc-300 
                           bg-clip-text text-transparent">
              Mustafa Hasırcıoğlu
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Standart bir developer değilim. Kod yazmak benim için bir meslek değil, bir zanaat.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-zinc-200">Sayfalar</h4>
            <div className="space-y-3">
              <FooterLink href="/" label="Ana Sayfa" />
              <FooterLink href="/about" label="Mustafa Hasırcıoğlu Kimdir?" />
              <FooterLink href="/about" label="Who is Mustafa Hasırcıoğlu?" />
              <FooterLink href="/blog/developer-philosophy" label="Geliştirici Felsefem" />
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-zinc-200">İletişim</h4>
            <div className="flex flex-wrap gap-3">
              <MetallicSocialLink href="https://www.linkedin.com/in/hasircioglu/" icon={<LinkedinIcon size={16} />} label="LinkedIn" />
              <MetallicSocialLink href="https://github.com/hasirciogluhq" icon={<Github size={16} />} label="GitHub" />
              <MetallicSocialLink href="mailto:mustafa@hasirciogluhq.com" icon={<Mail size={16} />} label="Email" />
              <MetallicSocialLink href="https://instagram.com/mr.hasircioglu" icon={<Instagram size={16} />} label="Instagram" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10 flex justify-center items-center"
        >
          <div className="text-zinc-400 text-sm">
            © 2025 Mustafa Hasırcıoğlu. Tüm hakları saklıdır.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-zinc-400 hover:text-white transition-all duration-300 text-sm
                 hover:translate-x-1 relative group"
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-white/20 to-transparent 
                      bottom-0 transition-all duration-300"></div>
    </Link>
  );
}

function MetallicSocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-11 h-11 rounded-full
                 bg-white/[0.06] hover:bg-white/[0.15] 
                 border border-white/[0.12] hover:border-white/[0.25]
                 backdrop-blur-sm transition-all duration-400
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.1)]
                 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_6px_16px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)]
                 hover:scale-115 active:scale-95 transform-gpu"
      title={label}
    >
      <span className="text-zinc-400 group-hover:text-white transition-all duration-400 group-hover:drop-shadow-sm">
        {icon}
      </span>

      {/* Enhanced metallic shine on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none
                      group-hover:animate-pulse"></div>

      {/* Premium rim light */}
      <div className="absolute inset-0 rounded-full border border-white/[0.05] group-hover:border-white/[0.15]
                      transition-all duration-400 pointer-events-none"></div>
    </a>
  );
}

