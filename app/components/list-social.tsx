'use client'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { socialMedia } from '@/data/data'
import React from 'react'

const ListSocial = () => {
    return (
        <div className='relative mt-24 flex flex-col items-center justify-between w-3/4 px-4'>
            <div className='flex flex-row gap-3 bg-white rounded-full px-4 py-2'>
                <AnimatedTooltip items={socialMedia} containerClassName='border-2 p-2 rounded-full bg-white hover:bg-slate-200 hover:scale-115 transition-transform' />
            </div>
        </div>
    )
}

export default ListSocial