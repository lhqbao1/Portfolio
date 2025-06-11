'use client'
import { Button, MovingBorder } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { workExperience } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const WorkExperience = () => {
    return (
        <div className='relative mt-20 w-3/4'>
            <TextGenerateEffect words='My work experience' isColorful={true} textClassName='text-5xl' />
            <div className='grid grid-cols-2 gap-x-8 gap-y-5 mt-14'>
                {workExperience.map((item, index) => {
                    return (
                        <Button key={index} className='flex flex-row justify-between p-10 gap-6'
                        >
                            <Image
                                src={item.thumbnail}
                                width={500}
                                height={500}
                                alt=''
                                className='w-28 h-24'
                            />
                            <div>
                                <div className='text-start text-2xl font-bold mb-2'>{item.title}</div>
                                <div className='text-start text-base'>{item.desc}</div>
                            </div>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkExperience