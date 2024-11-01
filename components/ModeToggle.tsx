"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const handleThemeChange = (checked: boolean) => {
        setTheme(checked ? "dark" : "light")
    }

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Switch
                id="theme-switch"
                checked={theme === "dark"}
                onCheckedChange={handleThemeChange}
            />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
    )
}

