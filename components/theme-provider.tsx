'use client'
import { useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mounted, setMounted] = useState(false);

    // Get initial theme from localStorage if available, otherwise default to 'light'
    const [, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as Theme) || 'light';
        }
        return 'light';
    });

    // Update theme in localStorage and document
    const updateTheme = (newTheme: Theme) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
            document.documentElement.className = newTheme;
            document.documentElement.style.colorScheme = newTheme;
        }
        setTheme(newTheme);
    };

    // Handle initial client-side mount
    useEffect(() => {
        setMounted(true);

        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        // If no saved theme, use system preference
        if (!savedTheme) {
            updateTheme(systemPrefersDark ? 'dark' : 'light');
        } else {
            updateTheme(savedTheme);
        }
    }, []);

    // Avoid hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null;
    }

    return children;
};

export default ThemeProvider;