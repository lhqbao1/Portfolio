'use client'
import { FloatingNav } from '@/components/ui/floating-navbar'
import React from 'react'

const TopNav = () => {
    return (
        // <div className='h-[66px] bg-[#04071D] w-[460px] rounded-xl flex flex-row justify-center items-center'>

        // </div>
        <FloatingNav
            navItems={[
                { name: 'Home', link: '/' },
                { name: 'About', link: '/about' },
                { name: 'Projects', link: '/projects' },
                { name: 'Contact', link: '/contact' },
            ]}
            className="max-w-3xl mx-auto mt-4" // Adjust the max-width and margin as needed
        // You can add more props or styles as needed
        />
    )
}

export default TopNav