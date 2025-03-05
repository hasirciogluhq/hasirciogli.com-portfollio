"use client";

import { Github, Instagram, Mail, PhoneForwardedIcon } from "lucide-react";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";
import { motion } from "framer-motion";
import Image from "next/image";

export default function KimlikSayfasi() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-4xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight z-10"
                    >
                        <h1>Merhaba, ben Mustafa Hasırcıoğlu</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 max-w-2xl text-zinc-400 z-40 space-y-4"
                    >
                        <p>
                            Yazılım geliştiricisi ve tasarımcı olarak, inovatif ve ölçeklenebilir projeler geliştirmeye odaklanıyorum. Amacım, becerilerimi kullanarak etkili çözümler üretmek ve profesyonel olarak büyümek. Çalışmalarıma GitHub profilimden ulaşabilir ve portföyümü hasirciogli.com adresinde inceleyebilirsiniz.
                        </p>
                        <div>
                            <strong>Teknolojiler ve Beceriler:</strong>
                            <ul className="list-disc list-inside">
                                <li>Frontend Geliştirme: React, Next.js, TypeScript, PHP, Laravel</li>
                                <li>Backend Geliştirme: Node.js, C++, C#, Go</li>
                                <li>DevOps ve Konteynerleştirme: Docker, Kubernetes, CI/CD, Terraform</li>
                                <li>Veritabanları: MySQL, MongoDB, PostgreSQL, Redis</li>
                                <li>Bulut Hizmetleri: AWS, Google Cloud</li>
                                <li>Araçlar: Git, Docker Compose, Jenkins, Redux</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Öne Çıkan Projelerim:</strong>
                            <ul className="list-disc list-inside">
                                <li><a href="https://deweloper.cloud" className="text-blue-500 hover:underline">Deweloper.cloud</a> - Verimli uygulama geliştirme ve dağıtımı için bir bulut platformu.</li>
                                <li><a href="https://hsrcpay.com" className="text-blue-500 hover:underline">HsrcPay</a> - Sorunsuz işlemler için tasarlanmış bir ödeme işleme çözümü.</li>
                                <li><a href="https://anonimsor.com" className="text-blue-500 hover:underline">AnonimSor</a> - Açık tartışmalar için anonim bir Soru-Cevap platformu.</li>
                                <li><a href="https://fightland.vercel.app">Fightland</a> - Oyuncuları dünya çapında birleştiren bir oyun platformu.</li>
                                <li><a href="https://ficksa.com">Ficksa</a> - Gelişmiş özelliklere sahip bir e-ticaret çözümü.</li>
                                <li><a href="https://trinkmoney.com">TrinkMoney</a> - Finansal araçlara kolay erişim sağlayan bir finansal hizmetler platformu.</li>
                            </ul>
                        </div>
                        <p>
                            Ayrıca, müzikle de ilgileniyorum ve Apple Music, spotify ve birçok platform da &quot;Bla Bla Bla&quot; ve &quot;Kayıp Yürekler&quot; gibi şarkılarım mevcut. <a href="https://music.apple.com/us/artist/mustafa-has%C4%B1rc%C4%B1o%C4%9Flu/1776362009" className="text-blue-500 hover:underline">Apple Music Profilim</a>
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
                        <SocialLink href="tel:+905558909899" icon={<PhoneForwardedIcon size={20} />} label="Telefon" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="overflow-hidden absolute top-0 right-0 z-0"
                    >
                        <Image
                            alt="Mustafa Hasırcıoğlu"
                            src="/my-photo-3-minified.png"
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

            <footer className="px-4 py-8 border-t border-zinc-800">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-zinc-400 text-sm">
                        © 2025 Mustafa Hasırcıoğlu. Tüm hakları saklıdır.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/who-is-mustafa-hasircioglu" className="text-zinc-400 hover:text-white transition-colors">
                            English Version
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
