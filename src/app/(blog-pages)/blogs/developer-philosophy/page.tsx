"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function DeveloperPhilosophyRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Cookie'den dil tercihini kontrol et
        const savedLanguage = document.cookie
            .split('; ')
            .find(row => row.startsWith('preferred-language='))
            ?.split('=')[1];

        // Eğer cookie varsa, yönlendirme yapma (kullanıcı daha önce manuel seçim yapmış)
        if (savedLanguage) {
            router.replace(`/blogs/developer-philosophy/${savedLanguage}`);
            return;
        }

        // Browser language detection
        const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
        
        // Türkçe variantlarını kontrol et
        const isTurkish = browserLanguage.toLowerCase().startsWith('tr') || 
                         browserLanguage.toLowerCase().includes('tr-');
        
        // Browser diline göre yönlendir ama cookie set etme (sadece default yönlendirme)
        const targetLanguage = isTurkish ? 'tr' : 'en';
        router.replace(`/blogs/developer-philosophy/${targetLanguage}`);
        
    }, [router]);

    // Loading screen
    return (
        <>
            <BlogNavbar />
            <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center pt-20">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-zinc-400">Yönlendiriliyor... / Redirecting...</p>
                </div>
                    </main>
        <div className="mt-0">
          <BlogFooter />
        </div>
      </>
    );
} 