"use client";

import { motion } from "framer-motion";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ y: -2 }}
        >
            {icon}
            <span>{label}</span>
        </motion.a>
    );
}