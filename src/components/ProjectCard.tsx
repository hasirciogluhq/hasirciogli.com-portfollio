"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-[#151515] rounded-xl hover:bg-[#1A1A1A] transition-all duration-300 border border-zinc-800 hover:border-zinc-700"
            whileHover={{ y: -4 }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{description}</p>
                </div>
                <ArrowUpRight className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
        </motion.a>
    );
}