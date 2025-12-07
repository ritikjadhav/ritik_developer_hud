'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CyberCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
    glowColor?: 'cyan' | 'green' | 'purple' | 'orange'
}

const shadowMap = {
    cyan: 'hover:shadow-neon-cyan',
    green: 'hover:shadow-neon-green',
    purple: 'hover:shadow-neon-purple',
    orange: 'hover:shadow-neon-orange',
}

const borderMap = {
    cyan: 'border-neon-cyan/30',
    green: 'border-neon-green/30',
    purple: 'border-neon-purple/30',
    orange: 'border-neon-orange/30',
}

export const CyberCard: React.FC<CyberCardProps> = ({
    children,
    className = '',
    delay = 0,
    glowColor = 'cyan',
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`
        relative overflow-hidden
        bg-hud-glass backdrop-blur-md
        border ${borderMap[glowColor]}
        rounded-xl
        transition-all duration-300
        ${shadowMap[glowColor]}
        ${className}
      `}
        >
            {/* Decorative Corner Brackets */}
            <div
                className='absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current opacity-70 rounded-tl-sm pointer-events-none'
                style={{ color: getColorHex(glowColor) }}
            />
            <div
                className='absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current opacity-70 rounded-tr-sm pointer-events-none'
                style={{ color: getColorHex(glowColor) }}
            />
            <div
                className='absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current opacity-70 rounded-bl-sm pointer-events-none'
                style={{ color: getColorHex(glowColor) }}
            />
            <div
                className='absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current opacity-70 rounded-br-sm pointer-events-none'
                style={{ color: getColorHex(glowColor) }}
            />

            {/* Inner Content */}
            <div className='p-4 h-full'>{children}</div>
        </motion.div>
    )
}

// Helper to map prop string to hex for inline styles
function getColorHex(color: string) {
    switch (color) {
        case 'cyan':
            return '#00f0ff'
        case 'green':
            return '#0aff0a'
        case 'purple':
            return '#bd00ff'
        case 'orange':
            return '#ff5e00'
        default:
            return '#00f0ff'
    }
}
