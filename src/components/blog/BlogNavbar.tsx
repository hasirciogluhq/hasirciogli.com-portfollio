"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, BookOpen, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function BlogNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Enhanced Apple-style glass morphism background */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-2xl border-b border-white/[0.12] 
                      shadow-[0_1px_0_0_rgba(255,255,255,0.08),0_0_20px_rgba(0,0,0,0.3)] 
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.12] before:via-white/[0.04] before:to-transparent before:pointer-events-none">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/[0.02] to-transparent pointer-events-none"></div>
      </div>
      
      {/* Enhanced metallic shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent 
                      transform -skew-x-12 animate-pulse duration-4000 opacity-70"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/"
              className="group relative text-xl font-semibold bg-gradient-to-r from-white via-zinc-100 to-zinc-200 
                         bg-clip-text text-transparent hover:from-zinc-50 hover:to-white 
                         transition-all duration-500 tracking-tight"
            >
              <span className="relative z-10">Mustafa Hasırcıoğlu</span>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 
                              opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10"></div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:flex items-center space-x-1"
          >
            <NavLink
              href="/"
              icon={<Home size={16} />}
              label="Ana Sayfa"
            />
            <NavLink
              href="/mustafa-hasircioglu-kimdir"
              icon={<User size={16} />}
              label="Hakkımda"
            />
            <NavLink
              href="/blogs/developer-philosophy"
              icon={<BookOpen size={16} />}
              label="Blog"
            />
          </motion.div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden"
          >
            <MobileNavButton />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center space-x-2 px-4 py-2.5 rounded-full
                 bg-white/[0.04] hover:bg-white/[0.12] 
                 border border-white/[0.08] hover:border-white/[0.2]
                 backdrop-blur-sm transition-all duration-400
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_1px_3px_rgba(0,0,0,0.1)]
                 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.05)]
                 active:scale-[0.98] hover:scale-105 transform-gpu"
    >
      <span className="text-zinc-400 group-hover:text-white transition-all duration-400 group-hover:drop-shadow-sm">
        {icon}
      </span>
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-all duration-400 
                       group-hover:drop-shadow-sm tracking-wide">
        {label}
      </span>
      
      {/* Enhanced metallic shine on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none transform
                      group-hover:animate-pulse"></div>
                      
      {/* Premium rim light */}
      <div className="absolute inset-0 rounded-full border border-white/[0.02] group-hover:border-white/[0.08]
                                             transition-all duration-400 pointer-events-none"></div>
    </Link>
  );
}

function MobileNavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-10 h-10 rounded-full
                   bg-white/[0.04] hover:bg-white/[0.12] 
                   border border-white/[0.08] hover:border-white/[0.2]
                   backdrop-blur-sm transition-all duration-400
                   shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_1px_3px_rgba(0,0,0,0.1)]
                   hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.25)]
                   active:scale-95 hover:scale-105 transform-gpu"
      >
        <Menu size={18} className="text-zinc-400 group-hover:text-white transition-all duration-400" />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute right-0 top-12 w-48 bg-black/40 backdrop-blur-2xl border border-white/[0.15] 
                     rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-50"
        >
          <div className="p-2 space-y-1">
            <MobileNavLink href="/" icon={<Home size={16} />} label="Ana Sayfa" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/mustafa-hasircioglu-kimdir" icon={<User size={16} />} label="Hakkımda" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/blogs/developer-philosophy" icon={<BookOpen size={16} />} label="Blog" onClick={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

function MobileNavLink({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center space-x-3 w-full px-3 py-2.5 rounded-xl
                 bg-white/[0.02] hover:bg-white/[0.08] 
                 border border-transparent hover:border-white/[0.1]
                 transition-all duration-300"
    >
      <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">
        {icon}
      </span>
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </Link>
  );
} 