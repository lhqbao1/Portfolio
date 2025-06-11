'use client'
import { PinContainer } from '@/components/ui/3d-pin-card'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { projects } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentProjects = () => {
    return (
        <div className='mt-20 relative w-3/4'>
            <div className='text-center'>
                <TextGenerateEffect words='A small selection of recent projects' isColorful={true} textClassName='text-5xl' />
            </div>
            <div className='grid grid-cols-2 gap-4 mt-3'>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className='relative flex items-center justify-center overflow-hidden h-[530px]'>
                            <PinContainer className='w-full' containerClassName='w-full h-full flex' title={project.title} href={project.link}>
                                <div className='relative overflow-hidden flex justify-center bg-[#13162D] p-0 rounded-2xl'>
                                    <Image
                                        src='/bg.png'
                                        height={500}
                                        width={500}
                                        alt=''
                                        className='w-full h-full object-cover'
                                    />
                                    <Image
                                        src={project.img}
                                        height={500}
                                        width={500}
                                        alt=''
                                        className='w-full h-[290px] object-contain absolute bottom-[-30px]'
                                    />
                                </div>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='text-start text-2xl font-bold'>{project.title}</div>
                                    <div className='text-start'>{project.des}</div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <div className='flex flex-row'>
                                            {project.iconLists.map((item, index) => {
                                                return (
                                                    <div key={index} className={`bg-[#04071D] rounded-full border-1 border-gray-500`}
                                                        style={{
                                                            transform: `translateX(-${4 * index * 2}px)`
                                                        }}
                                                    >
                                                        <Image
                                                            src={item}
                                                            width={50}
                                                            height={50}
                                                            alt=''
                                                            className='size-10 p-2'
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div >Check live site</div>
                                    </div>
                                </div>

                            </PinContainer>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentProjects