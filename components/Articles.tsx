"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Articles() {
    return (
        <section id="articles" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col gap-2 mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">Writing & Thoughts</h2>
                    <p className="text-muted-foreground text-lg">
                        Thoughts on software engineering, system design, and distributed architectures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DATA.articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <Link href={article.link} target="_blank" className="flex flex-col h-full">
                                {article.image && (
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-xs font-medium text-muted-foreground mb-2">
                                        {article.date}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                        {article.summary}
                                    </p>
                                    <div className="flex items-center text-primary text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                        Read more <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
