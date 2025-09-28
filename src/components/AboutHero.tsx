import { LiquidGlass } from "./liquid-glass"

export const AboutHero = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Sol Kolon - İçerik */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-block mb-6">
              <LiquidGlass className="px-3 py-1.5 rounded-lg !bg-black !border-black/20">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-xs font-medium text-white uppercase tracking-wider">
                    About Me
                  </span>
                </div>
              </LiquidGlass>
            </div>

            {/* Açıklama Metni */}
            <p className="text-base text-zinc-700 leading-relaxed mb-8 max-w-2xl">
              With over 12 years of experience helping professionals land jobs at companies like 
              Mobbbies, Samsung, I specialize in career clarity, job search strategy, resume 
              optimization, and interview mastery. Whether you&apos;re stuck in the wrong role or 
              entering the job market fresh, I&apos;ll help you move forward with confidence.
            </p>

            {/* CTA Butonu */}
            <a
              href="/about"
              className="group relative text-white text-sm font-medium transition-all duration-300 flex items-center"
            >
              <LiquidGlass className="pl-5 pr-4 py-3 rounded-xl flex items-center gap-3 !bg-zinc-800 group-hover:!bg-zinc-700 transition-colors">
                <span className="tracking-wide">More About Me</span>
                <div className="relative">
                  <LiquidGlass className="w-6 h-6 rounded-full flex items-center justify-center !bg-zinc-700">
                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LiquidGlass>
                </div>
              </LiquidGlass>
            </a>
          </div>

          {/* Sağ Kolon - Başlık ve Fotoğraf */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            {/* Ana Başlık */}
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8 text-center lg:text-right">
              I&apos;m Your Career Growth Partner for Clarity, Confidence, and Results
            </h2>

            {/* Fotoğraf */}
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-zinc-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-sm text-zinc-600">Professional Headshot</p>
                  <p className="text-xs text-zinc-500">Portrait Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
