"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split words into characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        // We use a ref to track validity to avoid race conditions with timeouts/animations
        let isValid = true;

        const typeWriterLoop = async () => {
            // 1. Initial State (Hidden)
            if (!isValid || !isInView) return;
            await animate(
                "span",
                { display: "none", opacity: 0 },
                { duration: 0 }
            );

            // 2. Type In
            if (!isValid || !isInView) return;
            await animate(
                "span",
                { display: "inline-block", opacity: 1 },
                { duration: 0.1, delay: stagger(0.1), ease: "easeInOut" }
            );

            // 3. Pause Visible (Hold the text)
            if (!isValid || !isInView) return;
            await new Promise(resolve => setTimeout(resolve, 2000));

            // 4. Delete Out (Backspace)
            if (!isValid || !isInView) return;
            await animate(
                "span",
                { opacity: 0, display: "none" },
                { duration: 0.05, delay: stagger(0.05, { from: "last" }), ease: "easeInOut" }
            );

            // 5. Short Pause Empty
            if (!isValid || !isInView) return;
            await new Promise(resolve => setTimeout(resolve, 500));

            // 6. Loop
            if (isValid && isInView) {
                typeWriterLoop();
            }
        };

        if (isInView) {
            typeWriterLoop();
        } else {
            // Reset if scrolled away
            animate("span", { display: "none", opacity: 0 }, { duration: 0 });
        }

        return () => {
            isValid = false;
        };
    }, [isInView, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{
                                    }}
                                    key={`char-${index}`}
                                    className={cn(
                                        `dark:text-white text-black opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split words into characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black `, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
