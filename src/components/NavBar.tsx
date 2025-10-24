"use client"

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { LiquidGlass } from "./liquid-glass";

export const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("/");
    
    // Get current pathname with fallback to state
    let pathname = "/";
    try {
        pathname = usePathname();
    } catch {
        // Fallback to state if usePathname fails
        pathname = activePath;
    }
    
    // Update active path state
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);
    
    // Helper function to check if link is active
    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    // Throttled scroll handler for better performance
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 24); // Changed threshold for smoother transition
    }, []);

    useEffect(() => {
        let ticking = false;

        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [handleScroll]);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md transition-all duration-300 border-b border-transparent ${isScrolled ? 'border-white/10 py-2' : 'py-4'
                }`}>
                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex items-center justify-between">

                        {/* İsim Logo - with size transition */}
                        <Link href="/" className="group">
                            <h1 className={`font-playfair font-bold tracking-tight text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
                                }`}>
                                Mustafa Hasırcıoğlu
                            </h1>
                        </Link>

                        {/* Desktop Navbar Items */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/about"
                                className={`transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1 ${
                                    isActive("/about") 
                                        ? "text-white font-semibold" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="About page"
                                aria-current={isActive("/about") ? "page" : undefined}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1 ${
                                    isActive("/projects") 
                                        ? "text-white font-semibold" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="Projects page"
                                aria-current={isActive("/projects") ? "page" : undefined}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                className={`transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1 ${
                                    isActive("/blog") 
                                        ? "text-white font-semibold" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="Blog page"
                                aria-current={isActive("/blog") ? "page" : undefined}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className={`transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1 ${
                                    isActive("/contact") 
                                        ? "text-white font-semibold" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="Contact page"
                                aria-current={isActive("/contact") ? "page" : undefined}
                            >
                                Contact
                            </Link>

                            {/* CTA Button - Apple Tasarımı */}
                            <Link
                                href="mailto:mustafa@hasirciogluhq.com"
                                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                aria-label="Send email to Mustafa"
                            >
                                <LiquidGlass className="px-4 py-2 rounded-xl text-xs font-inter font-medium group-hover:bg-white/20 transition-colors">
                                    <span className="text-zinc-300 group-hover:text-white transition-colors">Let&apos;s Talk</span>
                                </LiquidGlass>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle mobile menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Modal */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Content */}
                    <div className="relative z-50 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10">
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/about"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 ${
                                    isActive("/about") 
                                        ? "text-white font-semibold bg-white/10" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive("/about") ? "page" : undefined}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 ${
                                    isActive("/projects") 
                                        ? "text-white font-semibold bg-white/10" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive("/projects") ? "page" : undefined}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 ${
                                    isActive("/blog") 
                                        ? "text-white font-semibold bg-white/10" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive("/blog") ? "page" : undefined}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 ${
                                    isActive("/contact") 
                                        ? "text-white font-semibold bg-white/10" 
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive("/contact") ? "page" : undefined}
                            >
                                Contact
                            </Link>

                            {/* Mobile CTA */}
                            <div className="pt-4">
                                <Link
                                    href="mailto:mustafa@hasirciogluhq.com"
                                    className="block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <LiquidGlass className="px-6 py-3 rounded-xl text-sm font-inter font-medium w-full text-center">
                                        <span className="text-zinc-300">Let&apos;s Talk</span>
                                    </LiquidGlass>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// Claude Sonnet's alternative approach with enhanced UX patterns
export const NavbarComponentByClaude = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuAnimating, setIsMenuAnimating] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Enhanced scroll handler with section detection and progress tracking
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const newIsScrolled = scrollY > 50;

        if (newIsScrolled !== isScrolled) {
            setIsScrolled(newIsScrolled);
        }

        // Calculate scroll progress
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((scrollY / maxScroll) * 100, 100);
        setScrollProgress(progress);

        // Section detection for active nav highlighting
        const sections = ['home', 'about', 'projects', 'blog', 'contact'];
        const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });

        if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
        }
    }, [isScrolled, activeSection]);

    // Mouse tracking for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Debounced scroll handler for better performance
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const debouncedScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(timeoutId);
        };
    }, [handleScroll]);

    // Enhanced mobile menu with animation states
    const toggleMobileMenu = useCallback(() => {
        if (isMenuAnimating) return;

        setIsMenuAnimating(true);
        setIsMobileMenuOpen(!isMobileMenuOpen);

        // Reset animation state after transition
        setTimeout(() => setIsMenuAnimating(false), 300);
    }, [isMobileMenuOpen, isMenuAnimating]);

    // Keyboard navigation enhancement
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    // Body scroll lock with improved handling
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px'; // Prevent layout shift
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { href: '/', label: 'Home', id: 'home' },
        { href: '/about', label: 'About', id: 'about' },
        { href: '/projects', label: 'Projects', id: 'projects' },
        { href: '/blog', label: 'Blog', id: 'blog' },
        { href: '/contact', label: 'Contact', id: 'contact' }
    ];

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[60] origin-left transition-transform duration-300"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                    ? 'bg-[#1A1A1A]/95 backdrop-blur-xl border-b border-white/20 py-2 shadow-lg'
                    : 'bg-[#1A1A1A]/80 backdrop-blur-md border-b border-transparent py-4'
                }`}>
                {/* Subtle glassmorphism layer with parallax */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between">

                        {/* Enhanced Logo with micro-interactions and parallax */}
                        <Link
                            href="/"
                            className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1 -m-1"
                            onClick={() => setActiveSection('home')}
                        >
                            <div
                                className="relative"
                                style={{
                                    transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                                }}
                            >
                                <h1 className={`font-playfair font-bold tracking-tight text-white transition-all duration-500 ${isScrolled ? 'text-lg scale-95' : 'text-xl scale-100'
                                    } group-hover:scale-105`}>
                                    Mustafa Hasırcıoğlu
                                </h1>
                                {/* Subtle glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                                {/* Animated underline on hover */}
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </Link>

                        {/* Desktop Navigation with enhanced states and parallax */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`group relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 overflow-hidden ${activeSection === item.id
                                            ? 'text-white bg-white/10'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={() => setActiveSection(item.id)}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        transform: `translateY(${mousePosition.y * 0.02}px)`
                                    }}
                                >
                                    {/* Subtle gradient glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                                    <span className="relative z-10">{item.label}</span>

                                    {/* Active indicator */}
                                    {activeSection === item.id && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                                    )}

                                    {/* Bottom gradient bar on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button with enhanced interaction and effects */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                href="mailto:mustafa@hasirciogluhq.com"
                                className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                                aria-label="Send email to Mustafa"
                            >
                                <div
                                    className="relative overflow-hidden"
                                    style={{
                                        transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
                                    }}
                                >
                                    <LiquidGlass className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group-hover:scale-105">
                                        <span className="relative z-10 text-zinc-300 group-hover:text-white transition-colors">
                                            Let&apos;s Talk
                                        </span>
                                    </LiquidGlass>

                                    {/* Rotating gradient border */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300 animate-spin-slow" />

                                    {/* Ripple effect on click */}
                                    <div className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-active:scale-100 transition-transform duration-150" />
                                </div>
                            </Link>
                        </div>

                        {/* Enhanced Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className={`relative p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isMobileMenuOpen ? 'bg-white/10' : 'hover:bg-white/5'
                                    }`}
                                onClick={toggleMobileMenu}
                                disabled={isMenuAnimating}
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle navigation menu"
                            >
                                <div className="w-6 h-6 relative">
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''
                                        }`} />
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                                        }`} />
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : '-translate-y-1.5'
                                        }`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Mobile Menu with staggered animations */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Backdrop with enhanced blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Content with slide animation and decorative elements */}
                    <div className="relative z-50 bg-[#1A1A1A]/98 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-300 overflow-hidden">
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
                        <div
                            className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
                            style={{ animationDelay: '1s' }}
                        />

                        <div className="px-6 py-8 space-y-2 relative z-10">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${activeSection === item.id
                                            ? 'text-white bg-white/10 border border-white/20'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animation: 'fadeInUp 0.3s ease-out forwards'
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{item.label}</span>
                                        {activeSection === item.id && (
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                        )}
                                    </div>
                                </Link>
                            ))}

                            {/* Mobile CTA with enhanced styling */}
                            <div className="pt-6 border-t border-white/10">
                                <Link
                                    href="mailto:mustafa@hasirciogluhq.com"
                                    className="block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <LiquidGlass className="px-6 py-4 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105">
                                        <span className="text-zinc-300">Let&apos;s Talk</span>
                                    </LiquidGlass>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </>
    );
};

// Gemini Pro's approach: Structured, performant, and modern.
const NAV_CONFIG = {
    items: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ],
    scrollThreshold: 30,
};

// Custom hook for managing scroll state efficiently
const useScrollState = (threshold: number) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};

// Custom hook for managing body scroll lock
const useBodyScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (isLocked) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [isLocked]);
};


export const NavbarComponentByGemini = () => {
    const isScrolled = useScrollState(NAV_CONFIG.scrollThreshold);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(NAV_CONFIG.items[0].label);

    useBodyScrollLock(isMobileMenuOpen);

    // Keyboard accessibility
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const NavItem = ({ item }: { item: typeof NAV_CONFIG.items[0] }) => (
        <Link
            href={item.href}
            className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg ${activeItem === item.label
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
            onClick={() => {
                setActiveItem(item.label);
                setIsMobileMenuOpen(false);
            }}
        >
            {item.label}
        </Link>
    );

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? 'bg-[#1A1A1A]/90 backdrop-blur-lg border-b border-white/10 shadow-md h-16'
                    : 'h-20'
                }`}>
                <div className="max-w-6xl mx-auto px-4 lg:px-0 h-full">
                    <div className="flex items-center justify-between h-full">

                        {/* Logo with 3D hover effect */}
                        <Link href="/" className="group [transform-style:preserve-3d]">
                            <h1 className="text-xl font-playfair font-bold text-white transition-transform duration-300 group-hover:[transform:translateZ(10px)]">
                                Mustafa Hasırcıoğlu
                            </h1>
                        </Link>

                        {/* Desktop Navigation with sliding pill indicator */}
                        <div className="hidden md:flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full p-1 relative">
                            {NAV_CONFIG.items.map(item => (
                                <NavItem key={item.label} item={item} />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link href="mailto:mustafa@hasirciogluhq.com">
                                <LiquidGlass className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                                    <span className="text-zinc-300">Let&apos;s Talk</span>
                                </LiquidGlass>
                            </Link>
                        </div>

                        {/* Mobile Menu Trigger */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative w-8 h-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-full"
                                aria-label="Toggle menu"
                            >
                                <span className={`block w-5 h-0.5 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-2'
                                    }`} />
                                <span className={`block w-5 h-0.5 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-0'
                                    }`} />
                                <span className={`block w-5 h-0.5 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'translate-y-2'
                                    }`} />
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'bg-black/70 backdrop-blur-md' : 'pointer-events-none'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`absolute top-24 left-4 right-4 bg-[#1F1F1F] border border-zinc-700/50 rounded-2xl p-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="flex flex-col items-center space-y-4">
                        {NAV_CONFIG.items.map(item => (
                            <NavItem key={item.label} item={item} />
                        ))}
                        <div className="pt-4 w-full">
                            <Link href="mailto:mustafa@hasirciogluhq.com" className="block w-full">
                                <LiquidGlass className="w-full py-3 rounded-full text-center">
                                    <span className="text-zinc-300 font-medium">Let&apos;s Talk</span>
                                </LiquidGlass>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Claude Sonnet's advanced approach: Gesture-based, glassmorphism, and micro-interactions
export const NavbarComponentByClaudeSonnet = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Advanced scroll tracking with direction detection
    useEffect(() => {
        let ticking = false;
        let lastY = window.scrollY;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = Math.min((currentScrollY / maxScroll) * 100, 100);

                    setScrollProgress(progress);
                    setIsScrollingDown(currentScrollY > lastY && currentScrollY > 100);
                    setLastScrollY(currentScrollY);

                    lastY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mouse tracking for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);

            // Quick navigation with Ctrl/Cmd + Number
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '5') {
                e.preventDefault();
                const navItems = ['/', '/about', '/projects', '/blog', '/contact'];
                window.location.href = navItems[parseInt(e.key) - 1];
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Body scroll lock with smooth handling
    useEffect(() => {
        if (isMobileMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isMobileMenuOpen]);

    const navigationItems = [
        { href: '/', label: 'Home', icon: '🏠', shortcut: '⌘1' },
        { href: '/about', label: 'About', icon: '👨‍💻', shortcut: '⌘2' },
        { href: '/projects', label: 'Projects', icon: '🚀', shortcut: '⌘3' },
        { href: '/blog', label: 'Blog', icon: '📝', shortcut: '⌘4' },
        { href: '/contact', label: 'Contact', icon: '✉️', shortcut: '⌘5' }
    ];

    const isScrolled = scrollProgress > 1;
    const navbarOpacity = isScrollingDown ? 0.97 : 1;

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[60] origin-left transition-transform duration-300"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'
                    }`}
                style={{ opacity: navbarOpacity }}
            >
                <div className={`relative transition-all duration-500 ${isScrolled
                        ? 'bg-[#1A1A1A]/70 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
                        : 'bg-transparent'
                    }`}>
                    {/* Glassmorphism Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />

                    <div className="max-w-7xl mx-auto px-4 lg:px-6">
                        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'
                            }`}>

                            {/* Logo with magnetic effect */}
                            <Link
                                href="/"
                                className="group relative z-10"
                                onMouseEnter={(e) => setHoveredItem('logo')}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative">
                                    <h1 className={`font-playfair font-bold tracking-tight text-white transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-2xl'
                                        } ${hoveredItem === 'logo' ? 'scale-110' : 'scale-100'
                                        }`}>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-3">M</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-2">u</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">s</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-1">t</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-2">a</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-1">f</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">a</span>
                                        <span className="mx-1">/</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-2">H</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-1">a</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">s</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-2">ı</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">r</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-1">c</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-2">ı</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-1">o</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">ğ</span>
                                        <span className="inline-block transition-transform duration-300 hover:-rotate-2">l</span>
                                        <span className="inline-block transition-transform duration-300 hover:rotate-1">u</span>
                                    </h1>

                                    {/* Animated underline */}
                                    {hoveredItem === 'logo' && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
                                    )}
                                </div>
                            </Link>

                            {/* Desktop Navigation with advanced hover effects */}
                            <div className="hidden lg:flex items-center gap-2">
                                {navigationItems.map((item, index) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="group relative px-4 py-2 rounded-xl overflow-hidden"
                                        onMouseEnter={() => setHoveredItem(item.label)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        style={{
                                            transitionDelay: `${index * 50}ms`
                                        }}
                                    >
                                        {/* Background glow */}
                                        {hoveredItem === item.label && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse rounded-xl" />
                                        )}

                                        {/* Glass morphism background */}
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                        <div className="relative flex items-center gap-2">
                                            <span className="text-lg transition-transform duration-300 group-hover:scale-125">
                                                {item.icon}
                                            </span>
                                            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300">
                                                {item.label}
                                            </span>

                                            {/* Keyboard shortcut hint */}
                                            <span className="ml-2 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                                                {item.shortcut}
                                            </span>
                                        </div>

                                        {/* Bottom indicator */}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300" />
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Button with magnetic effect */}
                            <div className="hidden lg:block">
                                <Link
                                    href="mailto:mustafa@hasirciogluhq.com"
                                    className="group relative"
                                    onMouseEnter={() => setHoveredItem('cta')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <div className="relative overflow-hidden">
                                        <LiquidGlass className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-110">
                                            <span className="relative z-10 text-zinc-300 group-hover:text-white transition-colors">
                                                Let&apos;s Talk ✨
                                            </span>
                                        </LiquidGlass>

                                        {/* Animated gradient border */}
                                        {hoveredItem === 'cta' && (
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-50 blur-sm" />
                                        )}
                                    </div>
                                </Link>
                            </div>

                            {/* Advanced Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="relative w-10 h-10 rounded-full bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center group"
                                    aria-label="Toggle menu"
                                >
                                    <div className="w-5 h-4 flex flex-col justify-between items-center">
                                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                                            }`} />
                                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                            }`} />
                                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                                            }`} />
                                    </div>

                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Advanced Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Animated backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu panel with slide-in animation */}
                    <div className="absolute top-20 left-4 right-4 bottom-4 bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 animate-in slide-in-from-top-10 duration-500 overflow-y-auto">
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                            style={{ animationDelay: '1s' }}
                        />

                        <div className="relative z-10 space-y-4">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        animation: `slideInFromRight 0.4s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <div className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/0 hover:border-white/20">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                                                {item.icon}
                                            </span>
                                            <span className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">
                                                {item.label}
                                            </span>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/* Mobile CTA */}
                            <div className="pt-6" style={{ animation: 'slideInFromRight 0.4s ease-out 0.5s both' }}>
                                <Link
                                    href="mailto:mustafa@hasirciogluhq.com"
                                    className="block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <LiquidGlass className="w-full py-4 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                                        <span className="text-lg font-medium text-zinc-300 group-hover:text-white">
                                            Let&apos;s Talk ✨
                                        </span>
                                    </LiquidGlass>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </>
    );
};


// Claude Sonnet's alternative approach with enhanced UX patterns
export const NavbarComponentByClaude2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("/");
    const [isMenuAnimating, setIsMenuAnimating] = useState(false);

    // Get current pathname with fallback to state
    let pathname = "/";
    try {
        pathname = usePathname();
    } catch {
        // Fallback to state if usePathname fails
        pathname = activePath;
    }
    
    // Update active path state
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);
    
    // Helper function to check if link is active
    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    // Enhanced scroll handler
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const newIsScrolled = scrollY > 50;

        if (newIsScrolled !== isScrolled) {
            setIsScrolled(newIsScrolled);
        }
    }, [isScrolled]);

    // Debounced scroll handler for better performance
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const debouncedScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(timeoutId);
        };
    }, [handleScroll]);

    // Enhanced mobile menu with animation states
    const toggleMobileMenu = useCallback(() => {
        if (isMenuAnimating) return;

        setIsMenuAnimating(true);
        setIsMobileMenuOpen(!isMobileMenuOpen);

        // Reset animation state after transition
        setTimeout(() => setIsMenuAnimating(false), 300);
    }, [isMobileMenuOpen, isMenuAnimating]);

    // Keyboard navigation enhancement
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    // Body scroll lock with improved handling
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px'; // Prevent layout shift
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { href: '/', label: 'Home', id: 'home' },
        { href: '/about', label: 'About', id: 'about' },
        { href: '/projects', label: 'Projects', id: 'projects' },
        { href: '/blog', label: 'Blog', id: 'blog' },
        { href: '/contact', label: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                    ? 'bg-[#1A1A1A]/95 backdrop-blur-xl border-b border-white/20 py-2 shadow-lg'
                    : 'bg-[#1A1A1A]/80 backdrop-blur-md border-b border-transparent py-4'
                }`}>
                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex items-center justify-between">

                        {/* Enhanced Logo with micro-interactions */}
                        <Link
                            href="/"
                            className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1 -m-1"
                            onClick={() => setActivePath('home')}
                        >
                            <div className="relative">
                                <h1 className={`font-playfair font-bold tracking-tight text-white transition-all duration-500 ${isScrolled ? 'text-lg scale-95' : 'text-xl scale-100'
                                    } group-hover:scale-105`}>
                                    Mustafa Hasırcıoğlu
                                </h1>
                                {/* Subtle glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                            </div>
                        </Link>

                        {/* Desktop Navigation with enhanced states */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isActive(item.href)
                                            ? 'text-white bg-white/10 font-semibold'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                >
                                    {item.label}
                                    {/* Active indicator */}
                                    {isActive(item.href) && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button with enhanced interaction */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                href="mailto:mustafa@hasirciogluhq.com"
                                className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                                aria-label="Send email to Mustafa"
                            >
                                <LiquidGlass className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group-hover:scale-105">
                                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                                        Let&apos;s Talk
                                    </span>
                                </LiquidGlass>
                                {/* Ripple effect on click */}
                                <div className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-active:scale-100 transition-transform duration-150" />
                            </Link>
                        </div>

                        {/* Enhanced Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className={`relative p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isMobileMenuOpen ? 'bg-white/10' : 'hover:bg-white/5'
                                    }`}
                                onClick={toggleMobileMenu}
                                disabled={isMenuAnimating}
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle navigation menu"
                            >
                                <div className="w-6 h-6 relative">
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''
                                        }`} />
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                                        }`} />
                                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : '-translate-y-1.5'
                                        }`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Mobile Menu with staggered animations */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Backdrop with enhanced blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                        {/* Menu Content with slide animation */}
                        <div className="relative z-50 bg-[#1A1A1A]/98 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-300">
                            <div className="px-6 py-8 space-y-2">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isActive(item.href)
                                                ? 'text-white bg-white/10 border border-white/20 font-semibold'
                                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        aria-current={isActive(item.href) ? "page" : undefined}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animation: 'fadeInUp 0.3s ease-out forwards'
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{item.label}</span>
                                            {isActive(item.href) && (
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                            )}
                                        </div>
                                    </Link>
                                ))}

                                {/* Mobile CTA with enhanced styling */}
                                <div className="pt-6 border-t border-white/10">
                                    <Link
                                        href="mailto:mustafa@hasirciogluhq.com"
                                        className="block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <LiquidGlass className="px-6 py-4 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105">
                                            <span className="text-zinc-300">Let&apos;s Talk</span>
                                        </LiquidGlass>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};