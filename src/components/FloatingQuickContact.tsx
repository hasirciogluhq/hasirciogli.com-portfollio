"use client"

import { useState, useEffect } from "react";
import { LiquidGlass } from "./liquid-glass";
import { MessageCircle, X, Mail, Calendar, Phone } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google';

export const FloatingQuickContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Analytics event
        sendGAEvent('event', 'quick_contact_submit', {
            category: 'engagement',
            label: 'floating_contact'
        });
        
        // Here you would typically send the form data to your API
        console.log('Quick contact form submitted:', formData);
        
        // Reset form and close
        setFormData({ name: "", email: "", message: "" });
        setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Open quick contact"
                >
                    <LiquidGlass className="w-12 h-12 rounded-full flex items-center justify-center !bg-zinc-800/80 hover:!bg-zinc-700/80 transition-all">
                        <MessageCircle className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" strokeWidth={2} />
                    </LiquidGlass>
                    
                    {/* Hover Label - Desktop Only */}
                    {isHovered && (
                        <div className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 animate-in slide-in-from-right-2 fade-in duration-200">
                            <div className="bg-zinc-800/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-zinc-700/50">
                                Quick Contact
                            </div>
                            <div className="absolute right-0 top-1/2 translate-x-[6px] -translate-y-1/2 w-1.5 h-1.5 bg-zinc-800/95 rotate-45 border-r border-b border-zinc-700/50"></div>
                        </div>
                    )}
                </button>
            </div>

            {/* Quick Contact Sheet */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    
                    {/* Sheet Content */}
                    <div className="relative bg-[#1A1A1A]/95 backdrop-blur-xl border border-zinc-800/50 rounded-t-2xl md:rounded-2xl w-full max-w-sm mx-0 md:mx-4 animate-in slide-in-from-bottom md:zoom-in-95 duration-300 shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80">
                            <h3 className="text-sm font-semibold text-white tracking-tight">Quick Contact</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-zinc-800/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                aria-label="Close contact form"
                            >
                                <X className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5 space-y-4">
                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href="mailto:mhasirciogli@gmail.com"
                                    className="flex flex-col items-center gap-2 p-3 bg-zinc-800/40 rounded-lg hover:bg-zinc-700/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-600 group"
                                    onClick={() => {
                                        sendGAEvent('event', 'quick_contact_email', {
                                            category: 'engagement',
                                            label: 'floating_contact'
                                        });
                                    }}
                                >
                                    <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" strokeWidth={2} />
                                    <span className="text-xs text-zinc-300 font-medium">Email</span>
                                </a>
                                
                                <a
                                    href="https://calendly.com/mustafa-hasircioglu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-3 bg-zinc-800/40 rounded-lg hover:bg-zinc-700/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-600 group"
                                    onClick={() => {
                                        sendGAEvent('event', 'quick_contact_calendar', {
                                            category: 'engagement',
                                            label: 'floating_contact'
                                        });
                                    }}
                                >
                                    <Calendar className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" strokeWidth={2} />
                                    <span className="text-xs text-zinc-300 font-medium">Book Call</span>
                                </a>
                            </div>

                            {/* Quick Form */}
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <label htmlFor="quick-name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="quick-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 text-sm bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="quick-email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="quick-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 text-sm bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="quick-message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        id="quick-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-3 py-2 text-sm bg-zinc-800/40 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent resize-none transition-all"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group"
                                    onClick={() => {
                                        sendGAEvent('event', 'quick_contact_open', {
                                            category: 'engagement',
                                            label: 'floating_contact'
                                        });
                                    }}
                                >
                                    <LiquidGlass className="w-full px-4 py-2.5 rounded-lg text-center !bg-zinc-800/60 hover:!bg-zinc-700/60 transition-colors">
                                        <span className="text-white text-sm font-medium">Send Message</span>
                                    </LiquidGlass>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
