"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <motion.div key="sun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }}>
                    <SunIcon className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
                </motion.div>
            )
        } else {
            return (
                <motion.div key="moon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }}>
                    <MoonIcon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
                </motion.div>
            )
        }
    };

    return (
        <>
            {renderThemeChanger()}
        </>
    );
};

export default ThemeSwitcher;