"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-6">{DATA.about.title}</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    {DATA.about.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
