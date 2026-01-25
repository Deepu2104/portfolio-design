"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { DATA } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/ModeToggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Handle scroll for glass effect and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section logic
            const sections = navItems.map(item => item.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If top of section is within viewport (with some offset)
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            }
            if (current) setActiveSection("#" + current);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-4 left-0 right-0 z-50 flex justify-center px-4",
                "transition-all duration-300 ease-in-out"
            )}
        >
            <div
                className={cn(
                    "relative flex items-center justify-between gap-4 rounded-full border px-4 py-2 transition-all duration-300",
                    scrolled || isOpen
                        ? "bg-background/80 backdrop-blur-xl border-border shadow-lg w-full max-w-5xl"
                        : "bg-transparent border-transparent w-full max-w-7xl"
                )}
            >
                {/* Logo */}
                <Link
                    href="#"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity z-50 p-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    {DATA.name}<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                                activeSection === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onClick={(e) => scrollToSection(e, item.href)}
                        >
                            {/* Hover Pill */}
                            {hoveredIdx === idx && (
                                <motion.div
                                    layoutId="hover-pill"
                                    className="absolute inset-0 z-0 rounded-full bg-accent/50"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            {/* Active Indicator (Dot) */}
                            {activeSection === item.href && (
                                <motion.span
                                    layoutId="active-dot"
                                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                                    transition={{ duration: 0.3 }}
                                />
                            )}

                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4 z-50">
                    <ModeToggle />
                    <a
                        href={DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95",
                            "bg-gradient-to-r from-primary to-primary/80  text-primary-foreground shadow-sm hover:shadow-md"
                        )}
                    >
                        <Download className="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden z-50">
                    <ModeToggle />
                    <button
                        className="p-2 text-foreground hover:bg-accent rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 inset-x-4 p-4 rounded-3xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                                            activeSection === item.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                        )}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <a
                                href={DATA.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity mt-2"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
