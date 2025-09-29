import Link from "next/link";
import { useState, useEffect } from "react";
import { LiquidGlass } from "./liquid-glass";

export const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md transition-all duration-300 border-b border-transparent ${isScrolled ? ' border-white/10' : ''
            }`}>
            <div className="max-w-6xl mx-auto px-4 lg:px-0 py-3">
                <div className="flex items-center justify-between">

                    {/* İsim Logo */}
                    <Link href="/" className="group">
                        <h1 className="text-xl font-playfair font-bold tracking-tight text-white">
                            Mustafa Hasırcıoğlu
                        </h1>
                    </Link>

                    {/* Navbar Items */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/about"
                            className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                        >
                            Contact
                        </Link>

                        {/* CTA Button - Apple Tasarımı */}
                        <Link
                            href="mailto:mhasirciogli@gmail.com"
                        >
                            <LiquidGlass className="px-4 py-2 rounded-xl text-xs font-inter font-medium group-hover:bg-white/20 transition-colors">
                                <span className="text-zinc-300 group-hover:text-white transition-colors">Let&apos;s Talk</span>
                            </LiquidGlass>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-zinc-300 hover:text-orange-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}