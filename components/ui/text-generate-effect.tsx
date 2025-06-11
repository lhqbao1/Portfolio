"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { ColourfulText } from "./colorful-text";

export const TextGenerateEffect = ({
    words,
    className,
    textClassName,
    isColorful,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    textClassName?: string;
    filter?: boolean;
    duration?: number;
    isColorful?: boolean;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={``}
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {isColorful && idx > wordsArray.length - 3 ? <ColourfulText text={word} /> : word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className={cn('dark:text-white text-black leading-snug tracking-wide', textClassName)}>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
