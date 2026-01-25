"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { DATA } from "@/data";
import SpotlightCard from "@/components/SpotlightCard";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-12">Projects</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {DATA.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <SpotlightCard className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card/50 backdrop-blur-sm hover-neon-box">
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        <div className="flex gap-3">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-foreground transition-colors z-10"
                                                >
                                                    <SiGithub className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-foreground transition-colors z-10"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-4 mb-6 flex-1">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Backend Challenges Solved
                                        </h4>
                                        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-foreground/80">
                                            {project.details.map((detail, dIdx) => (
                                                <li key={dIdx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                        {project.tech.map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/10"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
