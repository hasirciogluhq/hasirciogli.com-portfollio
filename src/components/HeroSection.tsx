"use client"

import { ArrowDownIcon } from "lucide-react"
import { LiquidGlass } from "./liquid-glass"
import { useEffect, useRef, useState } from "react"
import { sendGAEvent } from '@next/third-parties/google'

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCTAClick = () => {
    // Analytics event: hero_cta_click
    sendGAEvent('event', 'hero_cta_click', {
      category: 'engagement',
      label: 'Discover My Philosophy'
    })
  }

  return (
    <section 
      ref={sectionRef}
      className={`flex flex-col items-center justify-center px-4 md:px-0 pt-8 pb-16 md:pt-16 md:pb-24 relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row w-full gap-12 items-center">

          {/* Sol Kolon - İçerik */}
          <div className="flex-1">
            {/* Metin Grubu */}
            <div className="flex flex-col items-start">
              {/* Kategori Badge */}
              <LiquidGlass className="rounded-lg px-2 py-0 !bg-white/5 mb-4 cursor-default">
                <span className="text-xs font-normal text-zinc-400 uppercase tracking-wider">
                  Craft Developer
                </span>
              </LiquidGlass>

              {/* Ana Başlık */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] relative mb-6">
                <span className="relative z-10">
                  <span className="bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent font-extrabold">
                    Beyond
                  </span>
                  {" "}
                  <span className="text-white">Standard Development</span>
                </span>
              </h1>

              {/* Alt Başlık ve Açıklama */}
              <div className="max-w-xl space-y-4 mb-8">
                <p className="text-base text-zinc-400 leading-relaxed">
                  For me, coding is not a profession, it&apos;s a craft. I reject the &quot;just make it work&quot; mentality, building elegant, efficient, and future-oriented systems.
                </p>
                <p className="text-zinc-300 italic font-serif text-lg leading-relaxed">
                  &quot;I write code thinking not just about today, but about what a system will look like five years from now.&quot;
                </p>
              </div>

              {/* CTA Butonu */}
              <a
                href="/mustafa-hasircioglu-kimdir"
                onClick={handleCTAClick}
                className="group relative text-zinc-300 hover:text-white text-xs font-medium transition-all duration-300 flex items-center cursor-pointer hover:cursor-pointer"
              >
                <LiquidGlass className="pl-4 pr-2 py-2 rounded-xl flex items-center gap-2 !bg-zinc-800/60 !border-zinc-700/50 group-hover:!bg-zinc-700/60 transition-colors">
                  <span className="tracking-wide">Discover My Philosophy</span>
                  <div className="relative">
                    <LiquidGlass className="w-6 h-6 p-0 rounded-lg flex items-center justify-center !bg-zinc-700/40 group-hover:scale-110 transition-transform">
                      <svg className="w-2 h-2 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </LiquidGlass>
                  </div>
                </LiquidGlass>
              </a>
            </div>
          </div>

          {/* Sağ Kolon - Fotoğraf ve Liquid Glass Modaller */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 group">

              {/* Ana Fotoğraf - Masked + Blurred */}
              <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-zinc-700/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center relative">
                  {/* Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 via-transparent to-black/40" />
                  
                  <div className="text-zinc-400 text-center relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner ring-1 ring-zinc-600/50">
                      <span className="text-5xl filter drop-shadow-lg">👤</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-300">Portrait Photo</p>
                    <p className="text-xs text-zinc-500 mt-1">High Contrast + Vignette</p>
                  </div>
                </div>
              </div>

              {/* Glass Efektli Modaller - Apple Tasarımı */}
              <LiquidGlass className="absolute -top-4 -right-4 w-24 h-16 rounded-2xl p-3 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-white/90 text-xs font-medium">5+ Years</div>
                <div className="text-white/70 text-xs">Experience</div>
              </LiquidGlass>

              <LiquidGlass className="absolute top-8 -left-8 w-20 h-12 rounded-2xl p-2 group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-white/90 text-xs font-medium">15+</div>
                <div className="text-white/70 text-xs">Projects</div>
              </LiquidGlass>

              <LiquidGlass className="absolute -bottom-6 -left-4 w-28 h-16 rounded-2xl p-3 group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-white/90 text-xs font-medium">Innovation</div>
                <div className="text-white/70 text-xs">Passion</div>
              </LiquidGlass>

              <LiquidGlass className="absolute bottom-4 -right-6 w-24 h-14 rounded-2xl p-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-white/90 text-xs font-medium">Coffee</div>
                <div className="text-white/70 text-xs">Powered</div>
              </LiquidGlass>

              <LiquidGlass className="absolute top-1/2 -right-12 w-20 h-12 rounded-2xl p-2 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-white/90 text-xs font-medium">Code</div>
                <div className="text-white/70 text-xs">Lover</div>
              </LiquidGlass>

              {/* Dekoratif Elementler */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-pulse delay-150"></div>
              <div className="absolute top-1/2 -left-6 w-2 h-2 bg-pink-500 rounded-full opacity-50 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 w-full h-auto items-center justify-center flex flex-row">
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          className="animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded-full transition-all hover:scale-110"
          aria-label="Scroll to next section"
        >
          <LiquidGlass className="w-8 h-8 rounded-full flex items-center justify-center hover:!bg-white/10 transition-colors">
            <ArrowDownIcon className="w-4 h-4 text-zinc-300" />
          </LiquidGlass>
        </button>
      </div>
    </section>
  )
}
