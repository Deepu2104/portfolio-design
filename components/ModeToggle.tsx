"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-md hover:bg-muted transition-colors opacity-50 cursor-not-allowed">
                <Sun className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </button>
        )
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative p-2 rounded-md hover:bg-muted transition-colors group"
            aria-label="Toggle theme"
        >
            {/* Moon Icon: Visible when Light (isDark=false) to switch to Dark */}
            <Moon className={cn("h-5 w-5 transition-all absolute top-2 left-2", isDark ? "scale-0 rotate-90" : "scale-100 rotate-0")} />

            {/* Sun Icon: Visible when Dark (isDark=true) to switch to Light */}
            <Sun className={cn("h-5 w-5 transition-all", isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90")} />

            {/* Spacer */}
            <div className="w-5 h-5" />
        </button>
    );
}
