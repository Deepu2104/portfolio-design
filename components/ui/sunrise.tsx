"use client";
import { motion } from "framer-motion";
import React from "react";

export const Sunrise = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
            {/* Sky Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 to-orange-50/50 mix-blend-overlay" />

            {/* The Sun */}
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex items-center justify-center"
            >
                {/* Outer Glow */}
                <div className="absolute w-[600px] h-[600px] rounded-full bg-orange-300/30 blur-[60px]" />

                {/* Core Sun - Sharp & Bright */}
                <div className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-t from-orange-400 via-yellow-200 to-white blur-[20px] shadow-[0_0_100px_rgba(255,200,50,0.6)]" />
            </motion.div>

            {/* Horizon Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-orange-200/40 via-sky-200/0 to-transparent"
            />
        </div>
    );
};
