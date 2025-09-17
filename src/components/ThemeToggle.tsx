"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => setMounted(true), []);
    // if (!mounted) return null;

    return (
        

        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 min-sm:ml-2 relative top-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition"
            id="link"
            >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
}
