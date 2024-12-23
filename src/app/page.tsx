"use client"

import { Github, Instagram, Mail, PhoneForwardedIcon } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SocialLink from "@/components/SocialLink";

import { motion } from "framer-motion";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <h1>
              Mustafa Hasırcıoğlu
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400"
          >
            <p>
              Software Developer & Designer
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-zinc-400"
          >
            <p>
              I create and manage innovative projects to learn, apply, and grow as a professional,
              aiming to build and manage a large-scale company in the future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            <SocialLink href="https://github.com/hasirciogli" icon={<Github />} label="GitHub" />
            <SocialLink href="mailto:mhasirciogl@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://instagram.com/m.hasirciogli" icon={<Instagram />} label="Instagram" />
            <SocialLink href="tel:+905558909899" icon={<PhoneForwardedIcon size={20} />} label="Phone" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="deweloper.cloud"
              description="Cloud development platform"
              link="https://deweloper.cloud"
            />
            <ProjectCard
              title="hsrcpay.com"
              description="Payment processing solution"
              link="https://hsrcpay.com"
            />
            <ProjectCard
              title="anonimsor.com"
              description="Anonymous Q&A platform"
              link="https://anonimsor.com"
            />
            <ProjectCard
              title="Fightland"
              description="Gaming platform"
              link="https://fightland.vercel.app"
            />
            <ProjectCard
              title="ficksa.com"
              description="E-commerce solution"
              link="https://ficksa.com"
            />
            <ProjectCard
              title="trinkmoney.com"
              description="Financial services platform"
              link="https://trinkmoney.com"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge>Node.js</SkillBadge>
            <SkillBadge>TypeScript</SkillBadge>
            <SkillBadge>C++</SkillBadge>
            <SkillBadge>C#</SkillBadge>
            <SkillBadge>PHP</SkillBadge>
            <SkillBadge>Laravel</SkillBadge>
            <SkillBadge>Next.js</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Docker</SkillBadge>
            <SkillBadge>Kubernetes</SkillBadge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-400 text-sm">
            © 2024 Mustafa Hasırcıoğlu. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="mailto:mhasirciogli@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              mhasirciogli@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
