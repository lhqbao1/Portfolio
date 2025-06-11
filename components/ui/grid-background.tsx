import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo() {
    return (
        <div className="absolute top-0 left-0 z-0 h-full w-full flex items-center justify-center bg-white dark:bg-black-100">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:120px_120px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
            {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                Backgrounds
            </p> */}
        </div>
    );
}
