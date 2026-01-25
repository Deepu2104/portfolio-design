"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { DATA } from "@/data";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sunrise } from "@/components/ui/sunrise";

export default function Hero() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine if we show dark mode effects
    const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

    const words = [
        {
            text: "Hi,",
        },
        {
            text: "I'm",
        },
        {
            text: DATA.name,
            className: "text-[#5e4bfa] dark:text-[#5e4bfa]",
        },
        {
            text: ".",
            className: "text-[#5e4bfa] dark:text-[#5e4bfa]",
        },
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Layers */}
            {mounted && (
                <div className="absolute inset-0 z-0">
                    {isDark ? (
                        <>
                            {/* Deep Space Gradient Base - Pure Black */}
                            <div className="absolute inset-0 bg-background/0">
                                <div className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-[image:radial-gradient(circle_farthest-side,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
                            </div>

                            {/* Static Stars Layer - Context for Shooting Stars */}
                            <StarsBackground
                                starDensity={0.0003}
                                allStarsTwinkle={true}
                                twinkleProbability={0.7}
                                minTwinkleSpeed={0.5}
                                maxTwinkleSpeed={1.5}
                                className="z-0"
                            />

                            {/* Shooting Stars - Tuned for majesty */}
                            <ShootingStars
                                minDelay={2000}
                                maxDelay={4000}
                                minSpeed={4}
                                maxSpeed={8}
                                starWidth={25}
                                starHeight={3}
                                starColor="#FFFFFF"
                                trailColor="#64ffda" // Neon Mint for "Shiny"
                                className="z-0"
                            />
                        </>
                    ) : (
                        // Light Mode: Sunrise
                        <Sunrise />
                    )}
                </div>
            )}

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mx-auto shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open to new opportunities
                    </div>

                    <div className="flex flex-col items-center">
                        <TypewriterEffect words={words} className="text-4xl md:text-6xl lg:text-7xl" />
                        <h1 className="text-4xl md:text-6xl lg:text-3xl font-bold tracking-tight text-muted-foreground mt-2">
                            Backend Software Engineer.
                        </h1>
                    </div>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {DATA.hero.title} {DATA.hero.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 py-4">
                        {DATA.hero.badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium border border-transparent shadow-sm ${badge.color.replace("bg-", "bg-opacity-10 bg-")}`}
                            >
                                {badge.text}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 group"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={DATA.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border border-border bg-background/50 backdrop-blur-sm hover:bg-muted transition-all hover:scale-105 active:scale-95"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95"
                        >
                            <Mail className="w-4 h-4" />
                            Contact
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
