import { LiquidGlass } from "./liquid-glass"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I felt trapped in a toxic job for 4 years. Within just 4 weeks of coaching, I landed 3 interviews and secured a higher-paying remote role that fits my lifestyle.",
      author: "Roberta D.",
      title: "UX Designer"
    },
    {
      quote: "Your resume advice completely changed my approach. I went from getting zero responses to landing multiple interviews—and for the first time, I could confidently explain my strengths and value.",
      author: "James K.",
      title: "Marketing Manager"
    }
  ]

  return (
    <section className="px-4 py-16 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Sol Kolon - Başlık ve Navigation */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 leading-tight">
              Real Results from Real People
            </h2>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Professionals just like you have found clarity, confidence, and career success through personalized coaching.
            </p>

            {/* Navigation */}
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-300 transition-colors">
                <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sağ Kolon - Testimonials */}
          <div className="flex-1 space-y-6">
            {testimonials.map((testimonial, index) => (
              <LiquidGlass
                key={index + 99}
                className="p-6 rounded-2xl !bg-white !border-zinc-200/50"
              >
                {/* Quote Icon */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>
                  <div className="text-6xl text-zinc-200 font-serif leading-none">66</div>
                </div>

                {/* Quote */}
                <p className="text-zinc-700 leading-relaxed mb-4">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-zinc-600">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{testimonial.author}</p>
                    <p className="text-sm text-zinc-600">{testimonial.title}</p>
                  </div>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
