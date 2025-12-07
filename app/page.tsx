'use client'

import { motion } from 'framer-motion'
import { Trophy, Activity, Bug, Flame, Terminal } from 'lucide-react'
import SkillTree from './components/SkillTree'
import { CyberCard } from './components/CyberCard'
import { CyberProgressBar } from './components/CyberProgressBar'
import { GlitchText } from './components/GlitchText'
import { AnimatedFlame } from './components/AnimatedFlame'

/* --- HOLO PEDESTAL (UPSCALED) --- */
const HoloPedestal = () => (
    <div className='absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center z-0'>
        {/* Increased base size to w-80 for larger avatar support */}
        <div className='relative w-80 h-80 flex items-center justify-center'>
            <div className='absolute inset-0 rounded-full border-[2px] border-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-y-[0.3] animate-spin-slow' />
            <div className='absolute w-[75%] h-[75%] rounded-full border-[1px] border-neon-cyan/30 border-dashed scale-y-[0.3] animate-spin-reverse-slower' />
            <div className='absolute w-[50%] h-[50%] bg-neon-cyan/20 blur-xl rounded-full scale-y-[0.3] animate-pulse' />
            <div className='absolute bottom-1/2 w-full h-full bg-gradient-to-t from-neon-cyan/20 to-transparent blur-2xl -translate-y-4' />
        </div>
    </div>
)

export default function Home() {
    return (
        <main className='min-h-screen p-6 relative selection:bg-neon-cyan selection:text-black overflow-hidden'>
            {/* Background Layers */}
            <div className='absolute inset-0 bg-grid-pattern pointer-events-none' />
            <div className='absolute inset-0 bg-hud-vignette pointer-events-none' />
            <div className='scanline' />

            {/* Header Section */}
            <header className='relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-4'>
                <div className='flex items-center gap-3'>
                    <Terminal className='text-neon-cyan w-6 h-6' />
                    <h1 className='text-2xl md:text-3xl font-orbitron font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple'>
                        RITIK'S DEVELOPER HUD{' '}
                        <span className='text-sm text-gray-400 font-rajdhani font-normal opacity-70 ml-2'>
                            // LEVEL 42 CODE WIZARD
                        </span>
                    </h1>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-neon-green animate-pulse' />
                    <span className='text-neon-green font-mono text-sm'>
                        SYSTEM ONLINE
                    </span>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start'>
                {/* Left Column: Avatar & Stats */}
                <div className='lg:col-span-4 flex flex-col gap-6'>
                    {/* 1. Avatar Group */}
                    <div className='flex flex-row items-start gap-4 pt-4'>
                        {' '}
                        {/* Changed items-center to items-start for top alignment */}
                        {/* Wrapper for Avatar + Pedestal (Increased Size) */}
                        <div className='relative w-96 h-96 shrink-0 flex justify-center'>
                            <HoloPedestal />
                            {/* The Avatar Image */}
                            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[85%] z-10 flex items-center justify-center'>
                                <div className='absolute bottom-0 w-24 h-10 bg-neon-cyan blur-lg opacity-60 z-0' />
                                <motion.img
                                    src='/images/avatar.png'
                                    alt="Ritik's Flaming Avatar"
                                    animate={{
                                        y: [0, -10, 0], // Move up 10px then back down
                                    }}
                                    transition={{
                                        duration: 4, // Takes 4 seconds for one full cycle
                                        repeat: Infinity, // Loops forever
                                        ease: 'easeInOut', // Smooth start and end
                                    }}
                                    className='relative z-10 w-full h-full object-contain animate-avatar-float animate-flame-glow drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] sepia-[0.3] hue-rotate-[180deg] saturate-[1.5] brightness-110'
                                />
                                <div className='absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent bg-[length:100%_20%] bg-no-repeat animate-holo-scan mix-blend-plus-lighter opacity-40' />
                            </div>
                        </div>
                        {/* Streak Counter */}
                        <div className='flex flex-col items-center justify-center pt-8 -ml-4'>
                            {' '}
                            {/* Added pt-8 to align visually with avatar head */}
                            <div className='relative group cursor-pointer mb-2'>
                                <AnimatedFlame />
                            </div>
                            <div className='text-center'>
                                <div className='text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.5)]'>
                                    108
                                </div>
                                <div className='text-sm text-orange-400/80 font-rajdhani tracking-[0.2em] font-bold uppercase mt-1'>
                                    Day Streak
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Skill Mastery Card (UPDATED: w-[85%]) */}
                    <CyberCard
                        glowColor='cyan'
                        className='w-[85%] p-4 border-neon-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                    >
                        <div className='flex justify-between items-center mb-3 border-b border-white/10 pb-2'>
                            <h3 className='text-neon-green font-orbitron text-sm tracking-widest'>
                                <GlitchText text='SKILL MASTERY' />
                            </h3>
                            <div className='flex items-center gap-2'>
                                <span className='relative flex h-2 w-2'>
                                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75'></span>
                                    <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
                                </span>
                                <span className='text-[10px] text-red-400 font-mono'>
                                    LIVE
                                </span>
                            </div>
                        </div>

                        <div className='space-y-0'>
                            <CyberProgressBar
                                label='DSA RATING'
                                value='1850'
                                subLabel='(Master)'
                                percentage={85}
                                color='green'
                                delay={0}
                            />
                            <CyberProgressBar
                                label='FRONTEND MASTERY'
                                value='85%'
                                subLabel='(Elite)'
                                percentage={85}
                                color='cyan'
                                delay={0.2}
                            />
                            <CyberProgressBar
                                label='TOTAL SOLVES'
                                value='750'
                                percentage={60}
                                color='purple'
                                delay={0.4}
                            />
                        </div>
                    </CyberCard>
                </div>

                {/* Center Column: Skill Tree */}
                <div className='lg:col-span-5 flex flex-col pt-10 h-full justify-center'>
                    {' '}
                    {/* Added h-full and justify-center to center vertically */}
                    <SkillTree />
                </div>

                {/* Right Column: Recent Activity & Achievements */}
                <div className='lg:col-span-3 space-y-6'>
                    {/* Recent Activity Card */}
                    <CyberCard glowColor='purple' className='min-h-[250px]'>
                        <h3 className='text-neon-cyan font-orbitron text-base mb-5 border-b border-white/10 pb-2 flex justify-between items-center'>
                            <GlitchText text='RECENT ACTIVITY' />
                            <span className='text-[10px] font-mono text-neon-purple animate-pulse'>
                                LOG_V2.0
                            </span>
                        </h3>
                        <ul className='space-y-3'>
                            <li className='group flex items-start gap-3 p-2 rounded-r border-l-2 border-neon-green bg-white/5 hover:bg-white/10 transition-all cursor-pointer'>
                                <span className='text-neon-cyan/60 font-mono text-xs mt-1 min-w-[45px]'>
                                    [09:41]
                                </span>
                                <div>
                                    <span className='text-gray-200 font-bold block text-sm group-hover:text-neon-green transition-colors'>
                                        Solved "Two Sum"
                                    </span>
                                    <div className='text-xs text-gray-400'>
                                        Hard • 5ms{' '}
                                        <span className='text-neon-green'>
                                            (New Record!)
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className='group flex items-start gap-3 p-2 rounded-r border-l-2 border-neon-blue bg-white/5 hover:bg-white/10 transition-all cursor-pointer'>
                                <span className='text-neon-cyan/60 font-mono text-xs mt-1 min-w-[45px]'>
                                    [Ystrd]
                                </span>
                                <div>
                                    <span className='text-gray-200 font-bold block text-sm group-hover:text-neon-blue transition-colors'>
                                        Pushed 12 commits
                                    </span>
                                    <div className='text-xs text-gray-400'>
                                        to "portfolio" repo
                                    </div>
                                </div>
                            </li>
                            <li className='group flex items-start gap-3 p-2 rounded-r border-l-2 border-neon-purple bg-white/5 hover:bg-white/10 transition-all cursor-pointer'>
                                <span className='text-neon-cyan/60 font-mono text-xs mt-1 min-w-[45px]'>
                                    [Ystrd]
                                </span>
                                <div>
                                    <span className='text-gray-200 font-bold block text-sm group-hover:text-neon-purple transition-colors'>
                                        Won Race Mode
                                    </span>
                                    <div className='text-xs text-gray-400'>
                                        vs. Alex (Rank #420)
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </CyberCard>

                    {/* Achievements Card */}
                    <CyberCard glowColor='green'>
                        <h3 className='text-neon-green font-orbitron text-base mb-5 border-b border-white/10 pb-2'>
                            <GlitchText text='ACHIEVEMENTS' delay={200} />
                        </h3>
                        <div className='space-y-4'>
                            <div className='group flex items-center gap-4 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(10,255,10,0.2)] transition-all cursor-pointer'>
                                <div className='p-2.5 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/20 group-hover:bg-neon-green group-hover:text-black transition-all duration-300'>
                                    <Trophy className='w-5 h-5' />
                                </div>
                                <div>
                                    <div className='font-bold text-gray-200 text-sm group-hover:text-neon-green transition-colors'>
                                        100 Day Streak
                                    </div>
                                    <div className='text-[10px] text-gray-500 uppercase tracking-wider'>
                                        Consistent Coder
                                    </div>
                                </div>
                            </div>
                            <div className='group flex items-center gap-4 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all cursor-pointer'>
                                <div className='p-2.5 rounded-md bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300'>
                                    <Activity className='w-5 h-5' />
                                </div>
                                <div>
                                    <div className='font-bold text-gray-200 text-sm group-hover:text-neon-cyan transition-colors'>
                                        Contest Winner
                                    </div>
                                    <div className='text-[10px] text-gray-500 uppercase tracking-wider'>
                                        Top 1% Global
                                    </div>
                                </div>
                            </div>
                            <div className='group flex items-center gap-4 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-neon-purple/50 hover:shadow-[0_0_15px_rgba(189,0,255,0.2)] transition-all cursor-pointer'>
                                <div className='p-2.5 rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20 group-hover:bg-neon-purple group-hover:text-black transition-all duration-300'>
                                    <Bug className='w-5 h-5' />
                                </div>
                                <div>
                                    <div className='font-bold text-gray-200 text-sm group-hover:text-neon-purple transition-colors'>
                                        Bug Squasher
                                    </div>
                                    <div className='text-[10px] text-gray-500 uppercase tracking-wider'>
                                        Fixed 50+ Criticals
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CyberCard>
                </div>
            </div>
        </main>
    )
}
