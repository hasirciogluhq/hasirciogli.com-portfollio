import { LiquidGlass } from "./liquid-glass"

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Career Clarity",
      description: "Discover the roles that align with your values, strengths, and long-term goals.",
      bullet: "Perfect for you if: you feel stuck, lost, or unsure what career."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn Makeover",
      description: "Craft a compelling personal brand that stands out to recruiters.",
      bullet: "Great if you've been applying but not getting interviews."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Interview Preparation",
      description: "Get real-time practice and expert feedback to master any interview.",
      bullet: "Ideal if interviews make you freeze or ramble."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Job Search Strategy",
      description: "Find the right jobs, apply effectively, and follow up like a pro.",
      bullet: "For those overwhelmed by job boards or applying blindly."
    }
  ]

  return (
    <section className="px-4 py-16 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Sol Kolon - Fotoğraf */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-zinc-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-sm text-zinc-300">Professional Headshot</p>
                  <p className="text-xs text-zinc-400">Portrait Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - İçerik */}
          <div className="flex-1">
            {/* Başlık */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You&apos;ll Get From Career Coaching
            </h2>
            
            <p className="text-lg text-zinc-300 mb-8">
              Gain the clarity, confidence, and tools you need to land the job you truly deserve.
            </p>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <LiquidGlass 
                  key={index}
                  className="p-4 rounded-xl !bg-zinc-800/50 !border-zinc-700/50 hover:!bg-zinc-700/50 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 mb-2 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bullet */}
                  <p className="text-xs text-zinc-400">
                    {benefit.bullet}
                  </p>
                </LiquidGlass>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
