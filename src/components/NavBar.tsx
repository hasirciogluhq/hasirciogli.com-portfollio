"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useState } from "react";

export const NavbarComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 bg-background backdrop-blur-md z-10 transition-all duration-300 border-b border-transparent`}>
                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex items-center justify-between">

                        {/* İsim Logo - with size transition */}
                        <Link href="/" className="group">
                            <h1 className={`font-inter font-bold tracking-tight text-primary transition-all duration-300`}>
                                Mustafa Hasırcıoğlu
                            </h1>
                        </Link>

                        {/* Desktop Navbar Items */}
                        <div className="hidden md:flex items-start space-x-8">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
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
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className={`block transition-colors duration-300 font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}