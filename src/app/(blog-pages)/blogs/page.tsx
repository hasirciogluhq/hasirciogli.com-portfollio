"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

export default function BlogsIndex() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the main blog post
        router.replace('/blogs/developer-philosophy');
    }, [router]);

    // Loading screen
    return (
        <>
            <BlogNavbar />
            <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center pt-20">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-zinc-400">Blog sayfasına yönlendiriliyor... / Redirecting to blog...</p>
                </div>
            </main>
            <BlogFooter />
        </>
    );
} 