"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8 p-12 rounded-2xl bg-gradient-to-br from-card to-muted border border-border"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Ready to build distributed systems?
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    I am currently open to Backend, Platform, and SRE roles.
                    If you&apos;re looking for someone who cares about performance,
                    scalability, and reliability, let&apos;s connect.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.email}`}
                        className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                    >
                        <Mail className="w-5 h-5" />
                        Send me an email
                    </a>
                    <a
                        href={DATA.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium px-6 py-4"
                    >
                        Connect on LinkedIn
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
