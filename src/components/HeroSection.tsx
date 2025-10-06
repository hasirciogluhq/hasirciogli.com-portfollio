"use client"

import { ArrowDownIcon } from "lucide-react"
import { LiquidGlass } from "./liquid-glass"
import { useEffect, useRef, useState } from "react"
import { sendGAEvent } from '@next/third-parties/google'
import Image from "next/image"

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
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
      className={`flex flex-col items-center justify-center px-4 md:px-0 pt-8 pb-16 md:pt-16 md:pb-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row w-full gap-12 items-center">

          {/* Sol Kolon - İçerik */}
          <div className="flex-1">
            {/* Metin Grubu */}
            <div className="flex flex-col items-start">
              {/* Kategori Badge */}
              <LiquidGlass className="inline-block px-3 py-1.5 rounded-lg !bg-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-white uppercase tracking-wider">
                    Craft Developer
                  </span>
                </div>
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
                href="/about"
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

          {/* Sağ Kolon - Professional Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 group">

              {/* Main Professional Card */}
              <LiquidGlass className="absolute inset-0 rounded-3xl overflow-hidden !bg-zinc-900/60 border border-zinc-800/50 shadow-2xl">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

                  {/* Profile Avatar with Photo */}
                  <div className="relative z-10 mb-6">
                    <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-zinc-800/50 group-hover:scale-105 transition-transform duration-500">
                      {!imageError ? (
                        <Image 
                          src="/mustafa-hasircioglu.webp"
                          alt="Mustafa Hasırcıoğlu"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                          priority
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                          <span className="text-6xl font-bold text-white tracking-tight">MH</span>
                        </div>
                      )}
                    </div>
                    {/* Active Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-zinc-900 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center relative z-10 mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">Mustafa Hasırcıoğlu</h3>
                    <p className="text-sm text-zinc-400">Software Engineer & Founder</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 w-full relative z-10">
                    <div className="text-center p-3 rounded-xl bg-zinc-800/40 backdrop-blur-sm">
                      <div className="text-lg font-bold text-white">Go</div>
                      <div className="text-xs text-zinc-500">Primary</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-zinc-800/40 backdrop-blur-sm">
                      <div className="text-lg font-bold text-white">K8s</div>
                      <div className="text-xs text-zinc-500">Expert</div>
                    </div>
                  </div>
                </div>
              </LiquidGlass>

              {/* Floating Tech Badges */}
              <LiquidGlass className="absolute -top-4 -right-4 rounded-xl p-3 !bg-blue-500/10 border border-blue-500/20 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                <div className="text-blue-400 text-xs font-bold">7+ Years</div>
                <div className="text-blue-300/70 text-[10px]">Experience</div>
              </LiquidGlass>

              <LiquidGlass className="absolute top-8 -left-8 rounded-xl p-2 !bg-purple-500/10 border border-purple-500/20 group-hover:-translate-x-2 group-hover:translate-y-1 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                <div className="text-purple-400 text-xs font-bold">10+</div>
                <div className="text-purple-300/70 text-[10px]">Projects</div>
              </LiquidGlass>

              <LiquidGlass className="absolute -bottom-6 -left-4 rounded-xl p-3 !bg-green-500/10 border border-green-500/20 group-hover:-translate-x-1 group-hover:-translate-y-2 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 text-xs font-bold">Available</span>
                </div>
                <div className="text-green-300/70 text-[10px]">for Projects</div>
              </LiquidGlass>

              <LiquidGlass className="absolute bottom-4 -right-6 rounded-xl p-2 !bg-pink-500/10 border border-pink-500/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                <div className="text-pink-400 text-xs font-bold">99.9%</div>
                <div className="text-pink-300/70 text-[10px]">Uptime</div>
              </LiquidGlass>

              <LiquidGlass className="absolute top-1/2 -right-12 rounded-xl p-2 !bg-cyan-500/10 border border-cyan-500/20 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                <div className="text-cyan-400 text-xs font-bold">Cloud</div>
                <div className="text-cyan-300/70 text-[10px]">Native</div>
              </LiquidGlass>

              {/* Animated Dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-pulse delay-150 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-1/2 -left-6 w-2 h-2 bg-pink-500 rounded-full opacity-50 animate-pulse delay-300 shadow-lg shadow-pink-500/50"></div>
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
