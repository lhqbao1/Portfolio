'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { World } from "./globe";
import { globeConfig, sampleArcs } from "@/data/globe";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { ContainerTextFlip } from "./container-text-flip";
import dynamic from "next/dynamic";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid w-3/4 grid-cols-10 gap-4 relative grid-rows-[220px_220px_180px_180px]",
                className,
            )}
        >
            {children}
        </div>
    );
};



export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    imgClassName,
    titleClassName,
    img,
    spareImg,
    id
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    imgClassName?: string,
    titleClassName?: string,
    img?: string,
    spareImg?: string,
    id?: number
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('luonghoangquocbao@gmail.com');
        setCopied(true);
    };

    return (
        <div
            className={cn(
                "group/bento relative shadow-input overflow-hidden row-span-1 rounded-xl border auto-cols-max border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                // (id && id >= 4 && id <= 6) ? "min-h-44 h-full" : "min-h-58 h-full",
                className,
            )}
            style={{
                background: '#04071D',
                backgroundColor: 'linear-gradient(90deg, rgba(4, 7, 29, 1) 0 %, rgba(12, 14, 35, 1) 100 %, rgba(12, 14, 35, 1) 100 %)',
            }}
        >
            <div className={`${id == 6 && '&& flex flex-row justify-center h-full'} `}>
                {img && (
                    <div className="w-full h-full absolute z-0">
                        <Image
                            src={img}
                            alt="Bento Grid Item Image"
                            className={cn("object-cover w-full h-full rounded-xl", imgClassName)}
                            width={500}
                            height={500}
                            style={
                                id == 1
                                    ? {
                                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                                    }
                                    : {}
                            }
                        />
                    </div>
                )}
                {spareImg && (
                    <div className={`absolute z-0 ${id == 4 && 'bottom-0 right-0 w-[200px] h-[70px]'} ${id == 5 && 'w-full h-full'}`}>
                        <Image
                            src={spareImg}
                            alt="Bento Grid Item Image"
                            className={cn("object-cover w-full h-full rounded-xl")}
                            width={500}
                            height={500}
                            style={
                                id == 5
                                    ? {
                                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                                    }
                                    : {}
                            }
                        />
                    </div>
                )}
                {id === 6 && (
                    <BackgroundGradientAnimation containerClassName="w-full h-full rounded-xl" />
                )}
                {id === 2 && (
                    <div className="w-full h-full absolute z-10">
                        <World data={sampleArcs} globeConfig={globeConfig} />
                    </div>
                )}
                {id === 3 && (
                    <div className="absolute right-0 bottom-[-10px] grid grid-cols-2 gap-2 z-0 overflow-hidden">
                        <div className="flex flex-col gap-2">
                            {['React', 'Next.js', 'Tailwind CSS', ""].map((tech, index) => (
                                <div key={index} className="text-sm dark:text-neutral-300 font-sans font-bold bg-[#10132E] px-3 py-5 rounded-lg shadow-md">
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            {["", 'TypeScript', 'Node.js', 'Express.js'].map((tech, index) => (
                                <div key={index} className="text-sm dark:text-neutral-300 font-sans font-bold bg-[#10132E] px-3 py-5 rounded-lg shadow-md">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* Make title/description absolute and stick on image */}
            <div className={
                `absolute w-full inset-0 z-10 flex flex-col justify-end p-6 transition duration-200 group-hover/bento:translate-x-2 
                ${id == 6 && 'items-center !justify-center'} 
                ${id == 2 && 'inline-flex h-[100px] top-4'}
                ${id == 3 && '!items-start !justify-center'}
                ${id == 4 && '!items-start !justify-start'}
                `
            }
            >
                <div className={
                    `text-start text-xl mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 
                    ${id == 1 || id == 5 ? '!text-3xl w-3/5' : ''} 
                    ${id == 6 && 'w-3/4 left-0 top-0 !text-center leading-6 !mb-4'} 
                    ${id == 2 || id == 3 ? '!text-xl' : ''}
                    `}>
                    {title}
                </div>
                <div className="text-start font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
                {id == 6 && (
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div
                            className="flex flex-row gap-0 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl"
                            onClick={handleCopy}
                        >
                            {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
                            <ContainerTextFlip words={['Copy to clipboard', 'myemail@gmail.com']} />
                        </div>
                    </button>
                )}
            </div>
        </div >
    );
};
