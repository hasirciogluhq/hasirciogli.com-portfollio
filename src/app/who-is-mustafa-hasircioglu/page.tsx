"use client";

import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function ProfilePage() {
  return (
    <>
      <BlogNavbar />
      <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <section className="px-4 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight z-10"
          >
            <h1>Hello, I&apos;m Mustafa Hasırcıoğlu</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-zinc-400 z-40 space-y-4"
          >
            <p>
              As a software developer and designer, I focus on creating innovative and scalable projects. My goal is to produce effective solutions using my skills and to grow professionally. You can check out my work on my GitHub profile and view my portfolio at hasirciogli.com.
            </p>
            <div>
              <strong>Technologies and Skills:</strong>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Programming Languages:</strong> C++, C#, Go, TypeScript, JavaScript, PHP</li>
                <li><strong>Frontend Development:</strong> Next.js, React, Redux, HTML, CSS</li>
                <li><strong>Backend Development:</strong> Node.js, Laravel</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL, Redis</li>
                <li><strong>DevOps & Containerization:</strong> Docker, Kubernetes, CI/CD, Jenkins, Terraform, Vault</li>
                <li><strong>Messaging & Queues:</strong> RabbitMQ, MQTT, Kafka</li>
                <li><strong>Cloud Services:</strong> AWS, Google Cloud, Hetzner, Linode, OVH</li>
                <li><strong>Tools & Concepts:</strong> Git, Docker Compose, Algorithms, Data Structures, Design Patterns</li>
              </ul>
            </div>
            <div>
              <strong>Featured Projects:</strong>
              <ul className="list-disc list-inside">
                <li><a href="https://deweloper.cloud" className="text-blue-500 hover:underline">Deweloper.cloud</a> - A cloud platform for efficient application development and deployment.</li>
                <li><a href="https://hsrcpay.com" className="text-blue-500 hover:underline">HsrcPay</a> - A payment processing solution designed for seamless transactions.</li>
                <li><a href="https://anonimsor.com" className="text-blue-500 hover:underline">AnonimSor</a> - An anonymous Q&A platform for open discussions.</li>
                <li><a href="https://fightland.vercel.app" className="text-blue-500 hover:underline">Fightland</a> - A gaming platform that connects players worldwide.</li>
                <li><a href="https://ficksa.com" className="text-blue-500 hover:underline">Ficksa</a> - An advanced e-commerce solution with powerful features.</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p>Additionally, I&apos;m interested in music, and my songs like &quot;Bla Bla Bla&quot; and &quot;Kayıp Yürekler&quot; are available on Apple Music, Spotify, and many other platforms.</p>
              <a href="https://music.apple.com/us/artist/mustafa-has%C4%B1rc%C4%B1o%C4%9Flu/1776362009" className="text-blue-500 hover:underline">My Apple Music Profile</a>
              <a href="https://open.spotify.com/artist/2ULQn4aI8EULqHDRUB59qE?si=f7PJeHG-T-23yLYmK2zopg" className="text-blue-500 hover:underline">My Spotify Profile</a>
              <a href="https://www.youtube.com/@hasirciogli" className="text-blue-500 hover:underline">My Youtube Account - Turkey</a>
              <a href="https://www.youtube.com/@noxydev" className="text-blue-500 hover:underline">My Youtube Account - United States</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 z-10 flex-wrap"
          >
            <SocialLink href="https://www.linkedin.com/in/hasircioglu/" icon={<LinkedinIcon />} label="LinkedIn" />
            <SocialLink href="https://github.com/hasirciogli" icon={<Github />} label="GitHub" />
            <SocialLink href="mailto:mhasirciogli@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://instagram.com/mr.hasircioglu" icon={<Instagram />} label="Instagram" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden absolute top-0 right-0 z-0"
          >
            <Image
              alt="Mustafa Hasırcıoğlu"
              src="/mustafa-hasircioglu.webp"
              width={1080}
              height={1080}
              style={{
                WebkitMaskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
                maskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
              }}
              className="aspect-square h-24 w-24 lg:h-60 lg:w-60 duration-300 rounded-full overflow-hidden"
            />
          </motion.div>
        </div>
      </section>
      </main>
      <BlogFooter />
    </>
  );
}
