"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4">
                <div
                    className=" group flex gap-16 pr-16 text-5xl md:text-6xl font-medium whitespace-nowrap cursor-pointer
             animate-marquee hover:[animation-play-state:paused]"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400">&#10038;</span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
