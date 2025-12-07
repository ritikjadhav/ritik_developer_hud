'use client'

import { motion } from 'framer-motion'

export const AnimatedFlame = () => {
    return (
        <div className='relative w-16 h-20 flex items-center justify-center'>
            {/* 1. Outer Glow (The Halo) */}
            <motion.div
                className='absolute inset-0 bg-orange-500 blur-2xl opacity-40 rounded-full'
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* 2. Base Flame (Darker Red/Orange) */}
            <motion.svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute w-full h-full text-orange-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.5)]'
                animate={{
                    scale: [1, 1.05, 1],
                    y: [0, -2, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <path
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    className='opacity-0' /* Invisible bounding box helper */
                />
                <motion.path
                    d='M12 23C16.5 23 19 18 19 14C19 9 15 2 12 2C9 2 5 9 5 14C5 18 7.5 23 12 23Z'
                    fill='url(#baseGradient)'
                    animate={{
                        d: [
                            'M12 23C16.5 23 19 18 19 14C19 9 15 2 12 2C9 2 5 9 5 14C5 18 7.5 23 12 23Z',
                            'M12 23C17 23 19.5 17.5 19.5 13.5C19.5 8.5 15.5 1.5 12 1.5C8.5 1.5 4.5 8.5 4.5 13.5C4.5 17.5 7 23 12 23Z',
                            'M12 23C16.5 23 19 18 19 14C19 9 15 2 12 2C9 2 5 9 5 14C5 18 7.5 23 12 23Z',
                        ],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <defs>
                    <linearGradient
                        id='baseGradient'
                        x1='12'
                        y1='2'
                        x2='12'
                        y2='23'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#ea580c' /> {/* Orange-600 */}
                        <stop offset='1' stopColor='#c2410c' />{' '}
                        {/* Orange-700 */}
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* 3. Inner Flame (Bright Orange) */}
            <motion.svg
                viewBox='0 0 24 24'
                className='absolute w-[80%] h-[80%] text-orange-400 bottom-1'
                animate={{
                    scale: [1, 1.1, 0.95, 1],
                    rotate: [0, 2, -2, 0],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <path
                    d='M12 21C15 21 17 17 17 13.5C17 9.5 14 4 12 4C10 4 7 9.5 7 13.5C7 17 9 21 12 21Z'
                    fill='url(#innerGradient)'
                />
                <defs>
                    <linearGradient
                        id='innerGradient'
                        x1='12'
                        y1='4'
                        x2='12'
                        y2='21'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#fb923c' /> {/* Orange-400 */}
                        <stop offset='1' stopColor='#ea580c' />{' '}
                        {/* Orange-600 */}
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* 4. Core (White/Yellow Hot Center) */}
            <motion.div
                className='absolute bottom-3 w-3 h-6 bg-yellow-200 rounded-[100%] blur-[2px]'
                animate={{
                    height: ['24px', '32px', '24px'],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* 5. Floating Sparks */}
            <Sparks />
        </div>
    )
}

const Sparks = () => {
    return (
        <>
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-yellow-300 rounded-full'
                    initial={{ opacity: 0, y: 10, x: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: -30,
                        x: (Math.random() - 0.5) * 20,
                    }}
                    transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </>
    )
}
