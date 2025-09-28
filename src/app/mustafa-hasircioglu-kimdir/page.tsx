"use client";

import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function KimlikSayfasi() {
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
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Programlama Dilleri:</strong> C++, C#, Go, TypeScript, JavaScript, PHP</li>
                                <li><strong>Frontend Geliştirme:</strong> Next.js, React, Redux, HTML, CSS</li>
                                <li><strong>Backend Geliştirme:</strong> Node.js, Laravel</li>
                                <li><strong>Veritabanları:</strong> MySQL, MongoDB, PostgreSQL, Redis</li>
                                <li><strong>DevOps & Konteynerleştirme:</strong> Docker, Kubernetes, CI/CD, Jenkins, Terraform, Vault</li>
                                <li><strong>Mesajlaşma & Kuyruk Sistemleri:</strong> RabbitMQ, MQTT, Kafka</li>
                                <li><strong>Bulut Servisleri:</strong> AWS, Google Cloud, Hetzner, Linode, OVH</li>
                                <li><strong>Araçlar & Kavramlar:</strong> Git, Docker Compose, Algoritmalar, Veri Yapıları, Tasarım Desenleri</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Öne Çıkan Projelerim:</strong>
                            <ul className="list-disc list-inside">
                                <li><a href="https://deweloper.cloud" className="text-blue-500 hover:underline">Deweloper.cloud</a> - Verimli uygulama geliştirme ve dağıtımı için bir bulut platformu.</li>
                                <li><a href="https://hsrcpay.com" className="text-blue-500 hover:underline">HsrcPay</a> - Sorunsuz işlemler için tasarlanmış bir ödeme işleme çözümü.</li>
                                <li><a href="https://anonimsor.com" className="text-blue-500 hover:underline">AnonimSor</a> - Açık tartışmalar için anonim bir Soru-Cevap platformu.</li>
                                <li><a href="https://fightland.vercel.app" className="text-blue-500 hover:underline">Fightland</a> - Oyuncuları dünya çapında birleştiren bir oyun platformu.</li>
                                <li><a href="https://ficksa.com" className="text-blue-500 hover:underline">Ficksa</a> - Gelişmiş özelliklere sahip bir e-ticaret çözümü.</li>
                                {/* <li><a href="https://trinkmoney.com" className="text-blue-500 hover:underline">TrinkMoney</a> - Finansal araçlara kolay erişim sağlayan bir finansal hizmetler platformu.</li> */}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <p>
                                Ayrıca, müzikle de ilgileniyorum ve Apple Music, spotify ve birçok platform da "Bla Bla Bla" ve "Kayıp Yürekler" gibi şarkılarım mevcut.
                            </p>
                            <a href="https://music.apple.com/us/artist/mustafa-has%C4%B1rc%C4%B1o%C4%9Flu/1776362009" className="text-blue-500 hover:underline">Apple Music Profilim</a>
                            <a href="https://open.spotify.com/artist/2ULQn4aI8EULqHDRUB59qE?si=f7PJeHG-T-23yLYmK2zopg" className="text-blue-500 hover:underline">Spotify Profilim</a>
                            <a href="https://www.youtube.com/@hasirciogli" className="text-blue-500 hover:underline">Youtube Hesabım - Turkey</a>
                            <a href="https://www.youtube.com/@noxydev" className="text-blue-500 hover:underline">Youtube Hesabım - United States</a>
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
            <div className="mt-0">
              <BlogFooter />
            </div>
        </>
    );
}
