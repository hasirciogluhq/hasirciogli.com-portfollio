import { LiquidGlass } from "./liquid-glass"

export const ProblemsSection = () => {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "You're tired of sending out resumes and hearing crickets",
      description: "You've applied to dozens of jobs, yet your inbox remains empty. No interviews. No feedback. You're beginning to wonder what you're doing wrong — or if anyone's even reading your resume."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "You feel lost switching careers or re-entering the workforce",
      description: "Whether you're pivoting into a new field or returning after a break, everything feels overwhelming. You're unsure how to position yourself or where to even begin."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "You freeze during interviews and forget what to say",
      description: "You know you're capable — but interviews make you nervous. You stumble over words, forget key points, and walk away feeling frustrated."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "You know you deserve better — but don't know where to start",
      description: "You're stuck in a job that drains you, or you're unemployed and feeling unsure. You crave direction, strategy, and someone to help you take the next step confidently."
    }
  ]

  return (
    <section className="px-4 py-16 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Can you relate these?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            You&apos;re not alone. If any of these sound familiar, career coaching can help.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <LiquidGlass
              key={index}
              className="p-6 rounded-2xl !bg-white shadow-none border-none transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <div className="text-white">
                  {problem.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-tight">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed">
                {problem.description}
              </p>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  )
}
