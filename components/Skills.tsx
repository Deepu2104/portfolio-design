"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-10">{DATA.skills.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DATA.skills.categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-foreground/80">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-card border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
