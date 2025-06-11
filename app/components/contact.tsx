'use client'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'

const Contact = () => {
    return (
        <div className='relative mt-20 w-full'>
            <div className='mx-auto w-1/2'>
                <TextGenerateEffect words='Ready to take your digital presence to next level' isColorful={true} className='text-5xl' textClassName='!leading-14' />
                <p className='text-[#E4ECFF] opacity-90 my-6'>Reach out to me today and lets discuss how can i help you to achieve your goals.</p>
                <button className="inline-flex text-lg text-white font-bold px-12 py-5 cursor-pointer animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Contact me now
                </button>
            </div>
        </div>
    )
}

export default Contact