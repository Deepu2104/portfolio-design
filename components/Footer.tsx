"use client";

import { DATA } from "@/data";

export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-border/50 bg-background text-center">
            <div className="flex justify-center gap-6 mb-4">
                {DATA.socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <social.icon className="w-5 h-5" />
                        <span className="sr-only">{social.name}</span>
                    </a>
                ))}
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} {DATA.name}. Built with Next.js & Tailwind.
            </p>
        </footer>
    );
}
