import { LiquidGlass } from "./liquid-glass"

export const CTASection = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* CTA Card */}
        <LiquidGlass className="p-8 rounded-2xl !bg-zinc-800 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of professionals who&apos;ve transformed their careers through expert coaching. 
            Whether you&apos;re switching fields or leveling up, your breakthrough starts here.
          </p>

          {/* CTA Button */}
          <a
            href="/contact"
            className="group relative text-white text-sm font-medium transition-all duration-300 inline-flex items-center"
          >
            <LiquidGlass className="pl-6 pr-4 py-3 rounded-xl flex items-center gap-3 !bg-zinc-700 group-hover:!bg-zinc-600 transition-colors">
              <span className="tracking-wide">Book Your Free Strategy Call</span>
              <div className="relative">
                <LiquidGlass className="w-6 h-6 rounded-full flex items-center justify-center !bg-zinc-600">
                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LiquidGlass>
              </div>
            </LiquidGlass>
          </a>
        </LiquidGlass>

        {/* Email Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            Let&apos;s Work Together
          </h3>
          
          <div className="text-4xl md:text-5xl font-bold text-zinc-900">
            <span className="text-zinc-600">mhasirciogli</span>
            <span className="text-zinc-900">@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
