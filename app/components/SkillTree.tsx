'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import {
    Cpu,
    Database,
    Code2,
    Layout,
    Braces,
    Share2,
    Atom,
    FileType,
    Palette,
} from 'lucide-react'

/* --- REUSABLE CONNECTION COMPONENT --- */
// This handles the "Living Line" logic: A base wire + a moving data pulse
const AnimatedConnection = ({ d, color }: { d: string; color: string }) => {
    return (
        <>
            {/* 1. Base Wire (Static, glowing slightly) */}
            <motion.path
                d={d}
                stroke={color}
                strokeWidth='4' // Increased width to 4
                fill='none'
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* 2. Traveling Data Pulse (The "Living" part) */}
            <motion.path
                d={d}
                stroke={color} // Use the branch color for the pulse, or white for contrast
                strokeWidth='4' // Increased width to 4
                fill='none'
                strokeDasharray='4 60' // "4px dash, 60px gap" - creates small packets
                initial={{ strokeDashoffset: 0, opacity: 0 }}
                animate={{
                    strokeDashoffset: [-64, 0], // Move the dashes along the path
                    opacity: [0, 1, 1, 0], // Fade in/out for smooth looping
                }}
                transition={{
                    duration: 2, // Speed of data flow
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{ filter: 'drop-shadow(0 0 2px currentColor)' }} // Extra glow
            />
        </>
    )
}

interface SkillNodeProps {
    icon: React.ElementType
    label: string
    level: string
    x: string
    y: string
    color?: string
    delay?: number
}

const SkillNode = ({
    icon: Icon,
    label,
    level,
    x,
    y,
    color = 'text-neon-cyan',
    delay = 0,
}: SkillNodeProps) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay + 0.5, type: 'spring' }}
        className='absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-10'
        style={{ left: x, top: y }}
    >
        <div
            className={`
      w-16 h-16 rounded-full bg-hud-dark border-2 border-${color.replace(
          'text-',
          ''
      )}/50
      flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)]
      group-hover:shadow-${color.replace(
          'text-',
          ''
      )} group-hover:scale-110 transition-all duration-300
    `}
        >
            <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <div className='text-center bg-black/80 px-2 py-1 rounded border border-white/10 backdrop-blur-sm'>
            <div className='text-xs font-bold text-gray-200 tracking-wider font-orbitron'>
                {label}
            </div>
            <div className={`text-[10px] ${color}`}>Lv.{level}</div>
        </div>
    </motion.div>
)

export default function SkillTree() {
    return (
        // Increased height to 600px to allow more vertical spacing
        <div className='relative w-full h-[600px] rounded-xl overflow-visible flex items-center justify-center max-[1500px]:left-[-50px]'>
            {/* SVG Layer for connecting lines */}
            <svg
                className='absolute inset-0 w-full h-full pointer-events-none opacity-80'
                style={{ overflow: 'visible' }}
            >
                {' '}
                {/* Ensure SVG overflows if needed */}
                <defs>
                    <linearGradient
                        id='line-gradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                    >
                        <stop offset='0%' stopColor='#0aff0a' />
                        <stop offset='50%' stopColor='#00f0ff' />
                        <stop offset='100%' stopColor='#bd00ff' />
                    </linearGradient>
                </defs>
                {/* --- ROOT BRANCHES (Vertical - Spaced Out) --- */}
                {/* Core (Top Center) -> Algo (Left) */}
                <AnimatedConnection
                    d='M 300 50 C 300 150, 150 150, 150 250'
                    color='#00f0ff'
                />
                {/* Core (Top Center) -> Frontend (Right) */}
                <AnimatedConnection
                    d='M 300 50 C 300 150, 450 150, 450 250'
                    color='#0aff0a'
                />
                {/* --- ALGORITHM BRANCHES (Vertical - Spaced Out) --- */}
                {/* Algo (Left) -> Leaves (Far Left, Mid Left, Inner Left) */}
                <AnimatedConnection
                    d='M 150 250 C 150 350, 50 350, 50 480'
                    color='#bd00ff'
                />
                <AnimatedConnection
                    d='M 150 250 C 150 350, 150 350, 150 480'
                    color='#bd00ff'
                />
                <AnimatedConnection
                    d='M 150 250 C 150 350, 250 350, 250 480'
                    color='#bd00ff'
                />
                {/* --- FRONTEND BRANCHES (Vertical - Spaced Out) --- */}
                {/* Frontend (Right) -> Leaves (Inner Right, Mid Right, Far Right) */}
                <AnimatedConnection
                    d='M 450 250 C 450 350, 350 350, 350 480'
                    color='#00f0ff'
                />
                <AnimatedConnection
                    d='M 450 250 C 450 350, 450 350, 450 480'
                    color='#00f0ff'
                />
                <AnimatedConnection
                    d='M 450 250 C 450 350, 550 350, 550 480'
                    color='#00f0ff'
                />
            </svg>

            {/* Nodes - Positioned for better spacing */}
            {/* Root - Top Center */}
            <SkillNode
                icon={Cpu}
                label='CORE SKILLS'
                level='MAX'
                x='300px'
                y='50px'
                color='text-neon-green'
                delay={0.2}
            />

            {/* Level 1 Branches - Spaced vertically from root */}
            <SkillNode
                icon={Database}
                label='ALGORITHMS'
                level='42'
                x='150px'
                y='250px'
                color='text-neon-cyan'
                delay={0.4}
            />
            <SkillNode
                icon={Layout}
                label='FRONTEND'
                level='50'
                x='450px'
                y='250px'
                color='text-neon-green'
                delay={0.4}
            />

            {/* Algo Leaves - Spaced horizontally */}
            <SkillNode
                icon={Braces}
                label='ARRAYS'
                level='10'
                x='50px'
                y='480px'
                color='text-neon-purple'
                delay={0.8}
            />
            <SkillNode
                icon={Atom}
                label='DP'
                level='5'
                x='150px'
                y='480px'
                color='text-neon-purple'
                delay={0.9}
            />
            <SkillNode
                icon={Share2}
                label='GRAPHS'
                level='7'
                x='250px'
                y='480px'
                color='text-neon-purple'
                delay={1.0}
            />

            {/* Frontend Leaves - Spaced horizontally */}
            <SkillNode
                icon={Atom}
                label='REACT'
                level='50'
                x='350px'
                y='480px'
                color='text-neon-cyan'
                delay={0.8}
            />
            <SkillNode
                icon={FileType}
                label='ANGULAR'
                level='30'
                x='450px'
                y='480px'
                color='text-neon-cyan'
                delay={0.9}
            />
            <SkillNode
                icon={Palette}
                label='CSS'
                level='45'
                x='550px'
                y='480px'
                color='text-neon-cyan'
                delay={1.0}
            />
        </div>
    )
}
