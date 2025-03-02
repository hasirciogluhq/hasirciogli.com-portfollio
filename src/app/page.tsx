"use client"

import { Github, Instagram, Mail, PhoneForwardedIcon } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SocialLink from "@/components/SocialLink";

import { motion } from "framer-motion";
import Image from "next/image";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight z-10"
          >
            <h1>
              Mustafa Hasırcıoğlu
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 z-10"
          >
            <p>
              Software Developer & Designer
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-zinc-400 z-40"
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
            className="mt-8 flex gap-4 z-10 flex-wrap"
          >
            <SocialLink href="https://github.com/hasirciogli" icon={<Github />} label="GitHub" />
            <SocialLink href="mailto:mhasirciogl@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://instagram.com/m.hasirciogli" icon={<Instagram />} label="Instagram" />
            <SocialLink href="tel:+905558909899" icon={<PhoneForwardedIcon size={20} />} label="Phone" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden text-4xl md:text-6xl font-bold tracking-tight absolute top-0 right-0 z-0"
          >
            <Image alt="Mustafa Hasırcıoğlu" src={"/my-image.png"} width={1080} height={1080}
              style={{
                WebkitMaskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
                maskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
              }}
              className="aspect-square h-24 w-24 lg:h-60 lg:w-60 duration-300" />
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

          <div className="grid grid-cols-8 flex-wrap gap-3 flex-1">

            {/* Web Development */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Web Development</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>PHP</SkillBadge>
                <SkillBadge>Laravel</SkillBadge>
              </div>
            </div>

            {/* Backend Development */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>C++</SkillBadge>
                <SkillBadge>C#</SkillBadge>
                <SkillBadge>Go</SkillBadge>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Databases</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>MySQL</SkillBadge>
                <SkillBadge>MongoDB</SkillBadge>
                <SkillBadge>PostgreSQL</SkillBadge>
                <SkillBadge>Redis</SkillBadge>
              </div>
            </div>

            {/* Cloud Services */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Cloud Services</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>AWS</SkillBadge>
                <SkillBadge>Google Cloud</SkillBadge>
                <SkillBadge>Hetzner</SkillBadge>
                <SkillBadge>Linode</SkillBadge>
                <SkillBadge>OVH</SkillBadge>
              </div>
            </div>

            {/* DevOps & Containerization */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">DevOps & Containerization</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>Kubernetes</SkillBadge>
                <SkillBadge>CI/CD</SkillBadge>
                <SkillBadge>Terraform</SkillBadge>
                <SkillBadge>Kafka</SkillBadge>
                <SkillBadge>Kafka-UI</SkillBadge>
              </div>
            </div>

            {/* Authentication & Authorization */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Authentication & Authorization</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Auth0</SkillBadge>
                <SkillBadge>JWT</SkillBadge>
                <SkillBadge>Clerk</SkillBadge>
                <SkillBadge>Kinde</SkillBadge>
              </div>
            </div>

            {/* Payment Systems */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Payment Systems</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Stripe</SkillBadge>
                <SkillBadge>Square</SkillBadge>
                <SkillBadge>PayPal</SkillBadge>
                <SkillBadge>Payoneer</SkillBadge>
              </div>
            </div>

            {/* Tools & Utilities */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Tools & Utilities</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Git</SkillBadge>
                <SkillBadge>Docker Compose</SkillBadge>
                <SkillBadge>Jenkins</SkillBadge>
                <SkillBadge>Redux</SkillBadge>
              </div>
            </div>

            {/* Knowledge & Concepts */}
            <div className="flex flex-col w-full col-span-8 md:col-span-4 mb-6">
              <h3 className="font-semibold mb-2">Knowledge & Concepts</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Algorithms</SkillBadge>
                <SkillBadge>Data Structures</SkillBadge>
                <SkillBadge>Design Patterns</SkillBadge>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="px-4 py-16 bg-[#1F1F1F]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            <h2>Support Me</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-zinc-400 mb-8"
          >
            <p>
              If you enjoy my work or find it helpful, consider supporting me through a donation.
              Your support helps me continue creating new projects and developing my skills.
            </p>
          </motion.div>

          {/* Donation Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://buymeacoffee.com/hasirciogli" // PayPal link or donation link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-full text-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              Donate with Buy Me a Coffee
            </a>
          </motion.div>
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
