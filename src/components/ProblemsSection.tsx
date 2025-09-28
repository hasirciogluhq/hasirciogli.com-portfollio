import { LiquidGlass } from "./liquid-glass"

export const ProblemsSection = () => {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "You built something but no one noticed",
      description:
        "You poured time, energy, and vision into your project. Yet, it feels like you're shouting into the void. You deserve recognition and users."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "You struggle to monetize it reliably",
      description:
        "You've tried different models—ads, subscriptions, freelancing—but nothing sticks. You want the pathway to recurring, stable revenue."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "You face constant rejections and setbacks",
      description:
        "You've failed 20 times. You didn't quit. You're going for the 21st. And the 22nd will be your victory. You ask: &ldquo;How will you beat me?&rdquo;"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "You believe you deserve more, but don't know where to begin",
      description:
        "You're capable, ambitious, and restless for change. You just need a roadmap—and support that understands the journey."
    }
  ]

  return (
    <section className="px-4 py-16 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Can you relate to these?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            You&apos;re not alone. Every founder, creator, or dreamer faces moments like this. Let&apos;s turn them into fuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <LiquidGlass
              key={index}
              className="p-6 rounded-2xl !bg-white shadow-none border-none transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <div className="text-white">{problem.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-tight">
                {problem.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{problem.description}</p>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  )
}
