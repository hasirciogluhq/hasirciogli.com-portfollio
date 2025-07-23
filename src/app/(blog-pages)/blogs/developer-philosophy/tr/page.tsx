"use client";

import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";
import { motion } from "framer-motion";
import Image from "next/image";
import { setLanguagePreference } from "@/lib/language-utils";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function GelistiriciFelsefemTR() {
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
                            <h1>Standart Bir Developer Değilim</h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-xl text-zinc-400 z-10"
                        >
                            <p>Kod yazmak benim için bir meslek değil, bir zanaat.</p>
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
                                Çoğu developer&apos;ın &quot;çalışsın yeter&quot; mantığına karşı çıkıyorum. Benim için bir kodun sadece çalışması yeterli değil;
                                aynı zamanda zarif, verimli ve geleceğe dönük olması gerekiyor. Ben, dijital dünyada en ince detayına kadar
                                düşünülmüş, performanslı ve ölçeklenebilir sistemler inşa eden bir mimarım.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            >
                                Kod yazarken kafayı sıyırıyorum - ve bundan gurur duyuyorum. Sadece problemi çözmekle kalmıyorum,
                                o çözümün en optimize, en performanslı ve en güvenli versiyonunu bulana kadar uyumuyorum.
                                Bir milisaniyelik gecikme bile benim için bir yenilgi. Bu mükemmeliyetçilik takıntım aslında
                                kullanıcıya olan saygımın bir yansıması.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                            >
                                Ben sadece tuğlaları üst üste koymuyorum; yıllarca ayakta kalacak, depreme dayanıklı gökdelenlerin
                                temelini atıyorum. Clean Architecture, SOLID prensipleri - bunlar benim için sadece buzzword&apos;ler değil,
                                yaşam felsefem. Yazdığım her kod satırının altında sadece mantık değil, bir vizyon yatıyor.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                            >
                                TypeScript/Next.js gibi popüler yolları denedim, ama geleceği öngöremediğim için bilinçli olarak
                                onlardan vazgeçtim. Go&apos;yu seçmemin sebebi sadece bir dil tercihi değil; performans, basitlik ve
                                ölçeklenebilirlik felsefesini temsil ettiği için. Trend peşinde koşmak yerine, on yıl sonra bile
                                geçerli olacak teknolojilere yatırım yapıyorum.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                            >
                                Tüm bu &quot;kafayı sıyırma&quot; halimin tek bir amacı var: Kullanıcıya hızlı, güvenilir ve sorunsuz bir
                                deneyim sunmak. Benim mükemmeliyetçiliğim, aslında müşteri memnuniyeti takıntım. Çünkü kod yazmak
                                benim için bir sanat formu ve her sanat eseri gibi, yarattığım sistemler de kullanıcıların hayatına
                                değer katmalı.
                            </motion.p>

                            <motion.blockquote
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                                className="border-l-4 border-zinc-600 pl-6 text-zinc-400 italic"
                            >
                                &quot;Bir sistemin sadece bugünü değil, beş yıl sonraki halini de düşünerek kod yazarım.
                                Her bir kod satırı, gelecekteki bir problemi önlemek veya bir fırsat yaratmak için atılmış bir adımdır.&quot;
                            </motion.blockquote>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                                className="mt-8 text-center"
                            >
                                <Link
                                    href="/blogs/developer-philosophy/en"
                                    onClick={() => setLanguagePreference('en')}
                                    className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                                >
                                    <span className="mr-2"></span>
                                    Read in English
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