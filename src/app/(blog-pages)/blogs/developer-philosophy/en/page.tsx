"use client";

import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";
import { motion } from "framer-motion";
import Image from "next/image";
import { setLanguagePreference } from "@/lib/language-utils";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function DeveloperPhilosophyEN() {
    return (
        <>
            <BlogNavbar />
            <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
            <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-4xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight z-10"
                    >
                        <h1>I&apos;m Not a Standard Developer</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-xl text-zinc-400 z-10"
                    >
                        <p>For me, coding is not a profession, it&apos;s a craft.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 max-w-3xl text-zinc-300 z-40 space-y-6 text-lg leading-relaxed"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        >
                            I reject the &quot;just make it work&quot; mentality that most developers have. For me, it&apos;s not enough for code to just work;
                            it also needs to be elegant, efficient, and future-oriented. I am an architect who builds
                            performant and scalable systems in the digital world, thought through to the finest detail.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        >
                            I obsess over code - and I&apos;m proud of it. I don&apos;t just solve the problem,
                            I don&apos;t sleep until I find the most optimized, most performant, and most secure version of that solution.
                            Even a millisecond delay is a defeat for me. This perfectionist obsession is actually
                            a reflection of my respect for the user.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                        >
                            I don&apos;t just stack bricks on top of each other; I lay the foundation of earthquake-resistant skyscrapers
                            that will stand for years. Clean Architecture, SOLID principles - these aren&apos;t just buzzwords for me,
                            they&apos;re my life philosophy. Under every line of code I write lies not just logic, but a vision.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                        >
                            I tried popular paths like TypeScript/Next.js, but consciously abandoned them because I couldn&apos;t foresee the future.
                            My choice of Go isn&apos;t just a language preference; it&apos;s because it represents the philosophy of performance, simplicity, and
                            scalability. Instead of chasing trends, I invest in technologies that will still be relevant ten years from now.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                        >
                            All this &quot;obsessing&quot; has one purpose: To provide users with a fast, reliable, and seamless
                            experience. My perfectionism is actually my customer satisfaction obsession. Because coding
                            is an art form for me, and like every work of art, the systems I create must add value to users&apos; lives.
                        </motion.p>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                            className="border-l-4 border-zinc-600 pl-6 text-zinc-400 italic"
                        >
                            &quot;I write code thinking not just about today, but about what a system will look like five years from now.
                            Every line of code is a step taken to prevent a future problem or create an opportunity.&quot;
                        </motion.blockquote>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                            className="mt-8 text-center"
                        >
                            <Link
                                href="/blogs/developer-philosophy/tr"
                                onClick={() => setLanguagePreference('tr')}
                                className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                            >
                                <span className="mr-2">🇹🇷</span>
                                Türkçe Oku
                            </Link>
                        </motion.div>
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