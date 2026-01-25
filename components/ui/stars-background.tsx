"use client";
import React, { useState, useEffect } from "react";

export const StarsBackground = ({
    starDensity = 0.0005, // Stars per pixel
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.5,
    maxTwinkleSpeed = 1,
    className,
}: {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}) => {
    const [stars, setStars] = useState<
        {
            x: number;
            y: number;
            radius: number;
            opacity: number;
            twinkleSpeed: number | null;
        }[]
    >([]);

    useEffect(() => {
        const generateStars = () => {
            const { innerWidth, innerHeight } = window;
            const numStars = Math.floor(innerWidth * innerHeight * starDensity);

            const newStars = Array.from({ length: numStars }).map(() => {
                const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * innerWidth,
                    y: Math.random() * innerHeight,
                    radius: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 px
                    opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                };
            });

            setStars(newStars);
        };

        generateStars();
        window.addEventListener("resize", generateStars);

        return () => {
            window.removeEventListener("resize", generateStars);
        };
    }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

    return (
        <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <svg className="w-full h-full">
                {stars.map((star, i) => (
                    <circle
                        key={i}
                        cx={star.x}
                        cy={star.y}
                        r={star.radius}
                        fill="white"
                        opacity={star.opacity}
                        style={
                            star.twinkleSpeed
                                ? {
                                    animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
                                }
                                : {}
                        }
                    />
                ))}
                <style>{`
                @keyframes twinkle {
                    0% { opacity: 0.3; }
                    100% { opacity: 1; }
                }
            `}</style>
            </svg>
        </div>
    );
};
