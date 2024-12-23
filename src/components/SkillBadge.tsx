"use client";

export default function SkillBadge({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-4 py-2 bg-[#151515] rounded-full text-sm border border-zinc-800 hover:border-zinc-700 transition-colors">
            {children}
        </div>
    );
}