'use client'
import React from 'react'
import TopNav from './nav'
import { Spotlight } from '@/components/ui/spotlight-new'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { ArrowUpRight } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='relative'>
            <Spotlight height={1000} />
            <div>
                <div className='pt-14 flex flex-col items-center'>
                    <TopNav />

                    <div className='flex flex-col items-center justify-center text-center pt-4 w-4/6'>
                        <h1 className='text-sm text-white opacity-60 uppercase spacing tracking-[.55rem]'>Dynamic Web Magic with Next.js</h1>
                        <TextGenerateEffect
                            words='Transforming Concepts into Seamless User Experiences'
                            isColorful={true}
                            textClassName='text-6xl leading-20'
                        />
                        <p className='py-6 text-[#E4ECFF] text-lg'>Hi! I’m Bao, a Next.js Developer based in Can Tho, Viet Nam.</p>
                        <button className="relative mt-4 inline-flex h-12 overflow-hidden rounded-xl p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex gap-1 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-white text-black px-5 py-1 text-sm font-semibold backdrop-blur-3xl">
                                See my work
                                <ArrowUpRight size={18} strokeWidth={3} className='inline-flex text-black' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection