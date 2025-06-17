"use client";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Avoid rendering until theme is applied on client
        return <div style={{ visibility: "hidden" }} />;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
