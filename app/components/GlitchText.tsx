'use client'

import React, { useState, useEffect } from 'react'

interface GlitchTextProps {
    text: string
    className?: string
    delay?: number // Time to wait before starting animation
}

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*'

export const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    className = '',
    delay = 0,
}) => {
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let interval: NodeJS.Timeout
        let frame = 0
        // Total frames to animate per character (adjust for speed)
        const iterations = 10

        // Initial delay timeout
        const startTimeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split('')
                        .map((char, index) => {
                            // If we've passed the "scramble" phase for this character index, show the real char
                            if (index < frame / 3) {
                                // Dividing by 3 slows down the "reveal" wave
                                return text[index]
                            }
                            // Otherwise show a random glitch char
                            return GLITCH_CHARS[
                                Math.floor(Math.random() * GLITCH_CHARS.length)
                            ]
                        })
                        .join('')
                )

                // Stop when all characters are revealed
                if (frame / 3 >= text.length) {
                    clearInterval(interval)
                    setDisplayText(text) // Ensure final state is clean
                }

                frame++
            }, 60) // Speed of character cycling (30ms is standard for 60fps feel)
        }, delay)

        return () => {
            clearTimeout(startTimeout)
            clearInterval(interval)
        }
    }, [text, delay])

    return <span className={className}>{displayText}</span>
}
