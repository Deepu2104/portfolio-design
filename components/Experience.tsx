"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";
import SpotlightCard from "@/components/SpotlightCard";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>

                <div className="relative border-l border-border ml-3 space-y-12">
                    {DATA.experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8"
                        >
                            <div className="absolute -left-[4.5px] top-8 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background z-10" />

                            <SpotlightCard className="p-6 transition-all hover:shadow-md bg-card/50 backdrop-blur-sm hover-neon-box">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                                    <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                        {job.period}
                                    </span>
                                </div>

                                <div className="text-lg text-primary/80 font-medium mb-4">{job.company}</div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                                    {job.description.map((point, pIdx) => (
                                        <li key={pIdx} className="pl-1">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
