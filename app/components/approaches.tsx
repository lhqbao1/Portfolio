'use client'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { AnimatePresence } from 'motion/react'
import React, { useState } from "react";
import { motion } from "motion/react";


const Approaches = () => {
    return (
        <div className='relative mt-12 w-3/4'>
            <TextGenerateEffect words='My Approaches' isColorful={false} className='text-5xl' />
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto mt-8"
            >
                <Card
                    title="Component-First Development"
                    icon={<AceternityIcon />}
                    desc='I focus on building reusable, self-contained UI components that can scale as projects grow. This helps me keep code organized, reduce duplication, and work efficiently in frameworks like React or Vue.'
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Responsive And Accessible Design"
                    icon={<AceternityIcon />}
                    desc='I prioritize layouts that look great on all screen sizes and are usable for everyone. I use semantic HTML, follow accessibility best practices, and test across devices to ensure a consistent experience.'
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card
                    title="Performance, Maintainable And Clean Code"
                    icon={<AceternityIcon />}
                    desc='I aim for fast-loading, maintainable code by optimizing images, minimizing dependencies, and keeping my CSS and JavaScript lean. I write clean, readable code that’s easy for teams to understand and build on.'
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </div>
    )
}

export default Approaches

const Card = ({
    title,
    icon,
    children,
    desc
}: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto px-8 py-6 h-[30rem] relative"
            style={{
                background: 'linear-gradient(90deg,rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%, rgba(12, 14, 35, 1) 100%)'
            }}
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="absolute top-1/2 text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <p className="text-[#E4ECFF] text-base opacity-0 group-hover/canvas-card:opacity-80 relative z-10 mt-4 font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {desc}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
                style={{ mixBlendMode: "darken" }}
            />
        </svg>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
