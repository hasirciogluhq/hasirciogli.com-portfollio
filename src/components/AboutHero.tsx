import { LiquidGlass } from "./liquid-glass"
import Image from "next/image"

export const AboutHero = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Column - Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-block mb-8">
              <LiquidGlass className="px-3 py-1.5 rounded-lg !bg-black !border-black/20">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-white uppercase tracking-wider">
                    About Me
                  </span>
                </div>
              </LiquidGlass>
            </div>

            {/* Description Text - more detailed */}
            <div className="max-w-2xl space-y-6">
              <p className="text-lg text-zinc-700 leading-relaxed">
                I&apos;m an engineer and founder-focused developer who specializes in taking software products from concept to production,
                designing and building scalable, secure, and maintainable systems. I make product decisions based on data,
                operational reality, and user needs.
              </p>

              <p className="text-lg text-zinc-700 leading-relaxed">
                I&apos;m Mustafa Hasırcıoğlu. Over 12 years, I&apos;ve developed cloud-based infrastructures, payment
                systems, and e-commerce solutions. My tech stack includes <strong>Go, TypeScript, Next.js, Kubernetes, Docker, PostgreSQL</strong>
                and distributed storage/network technologies. I enjoy coding on both product and infrastructure sides,
                taking operational responsibility.
              </p>

              <blockquote className="text-lg text-zinc-700 leading-relaxed italic border-l-4 border-gray-400 pl-6 my-6">
                <p className="italic">
                  &ldquo;I failed 20 times but didn&apos;t give up — now I&apos;m on my 21st attempt and I know I&apos;ll win on the 22nd.
                  How will you beat me?&rdquo;
                </p>
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="/about"
                className="group relative text-white text-sm font-medium transition-all duration-300 flex items-center"
              >
                <LiquidGlass className="pl-5 pr-4 py-3 rounded-xl flex items-center gap-3 !bg-zinc-800 group-hover:!bg-zinc-700 transition-colors">
                  <span className="tracking-wide">Continue My Story</span>
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
          </div>

          {/* Right Column - Title and Photo */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8 text-center lg:text-right">
              Entrepreneurial Developer, Production & Scaling Focused
            </h2>

            {/* Short notes / badge list (can be linked if desired) */}
            <div className="mb-10 text-sm text-zinc-600 text-center lg:text-right space-y-2">
              <div>Projects: <span className="font-medium">ficksa.com</span>, <span className="font-medium">hsrcpay.com</span>, <span className="font-medium">anonimsor.com</span></div>
              <div>Expertise: Cloud infrastructure, payment systems, identity & session management</div>
            </div>

            {/* Photo */}
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-32 h-32 bg-zinc-400 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {/* Change src if you want to add a real photo */}
                    <Image src="/images/mustafa.jpg" alt="Mustafa Hasırcıoğlu" width={128} height={128} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-zinc-600">Mustafa Hasırcıoğlu</p>
                  <p className="text-xs text-zinc-500">Software Engineer · Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final italic quote at the end */}
        <blockquote className="mt-12 italic text-zinc-600 text-right text-lg">&ldquo;The best way to predict the future is to create it.&rdquo;</blockquote>
      </div>
    </section>
  )
}
