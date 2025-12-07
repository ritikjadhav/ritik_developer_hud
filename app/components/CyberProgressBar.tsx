'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlitchText } from './GlitchText' // Import the new component

interface CyberProgressBarProps {
    label: string
    value: string | number
    subLabel?: string
    percentage: number
    color: 'green' | 'cyan' | 'purple'
    delay?: number
}

// ... colorMap logic remains the same ...
const colorMap = {
    green: {
        text: 'text-emerald-400',
        containerStyles:
            'border-emerald-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5),0_0_30px_rgba(34,197,94,0.3)]',
        gradient: 'bg-gradient-to-r from-emerald-400 to-green-500',
        glow: 'shadow-[0_0_20px_rgba(34,197,94,0.8)]',
    },
    cyan: {
        text: 'text-cyan-400',
        containerStyles:
            'border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5),0_0_30px_rgba(6,182,212,0.3)]',
        gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
        glow: 'shadow-[0_0_20px_rgba(6,182,212,0.8)]',
    },
    purple: {
        text: 'text-purple-400',
        containerStyles:
            'border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.5),0_0_30px_rgba(147,51,234,0.3)]',
        gradient: 'bg-gradient-to-r from-fuchsia-500 to-purple-600',
        glow: 'shadow-[0_0_20px_rgba(147,51,234,0.8)]',
    },
}

export const CyberProgressBar: React.FC<CyberProgressBarProps> = ({
    label,
    value,
    subLabel,
    percentage,
    color,
    delay = 0,
}) => {
    const styles = colorMap[color]

    return (
        <div className='mb-8 last:mb-0'>
            <div className='flex justify-between items-end mb-3 font-rajdhani tracking-wider'>
                <div className='flex items-center gap-2'>
                    <span className='font-bold text-gray-200 text-lg'>
                        {/* UPDATE: Use GlitchText instead of plain text */}
                        <GlitchText text={label} delay={delay * 1000} />:
                    </span>
                    <span
                        className={`font-bold text-xl ${styles.text} drop-shadow-[0_0_5px_currentColor]`}
                    >
                        {/* Optionally glitch the value too, or keep it static for readability */}
                        {value}
                    </span>
                    {subLabel && (
                        <span className='text-gray-400 text-sm relative top-[2px] font-medium'>
                            {subLabel}
                        </span>
                    )}
                </div>
            </div>

            {/* ... Progress Bar container logic remains the same ... */}
            <div
                className={`
        relative h-8 w-full rounded-full
        bg-black/60 backdrop-blur-md
        border-[3px]
        ${styles.containerStyles}
        p-[5px]
        overflow-hidden
      `}
            >
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay }}
                    className={`
            h-full rounded-full 
            ${styles.gradient}
            ${styles.glow}
            relative
          `}
                >
                    <div className='absolute top-0 inset-x-0 h-[40%] bg-white/30 rounded-t-full' />
                </motion.div>
            </div>
        </div>
    )
}
