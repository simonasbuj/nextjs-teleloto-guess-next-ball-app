'use client'

import React, { useEffect, useState } from 'react'
import Ball from './Ball'
import ScoreBoard from './ScoreBoard'

const BALL_COLORS = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-black']

export default function MainGame() {
    const [points, setPoints] = useState(0)
    const [lastOutcome, setLastOutcome] = useState('')

    const [currentBall, setCurrentBall] = useState({
        "color": BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)],
        "number": Math.floor(Math.random() * 100)
    })
    const [guessedColor, setGuessedColor] = useState('zzz')
    
    function changeBall(guessedColor: string) {
        const randomBall = {
            "color": BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)],
            "number": Math.floor(Math.random() * 100)
        }
        console.log(randomBall);
        setGuessedColor(guessedColor)
        setCurrentBall(randomBall)
    }

    
    function checkWin() {
        if (guessedColor === "zzz") {
            return
        }
        const currentColorPretty = currentBall.color.replace(/^bg-/, "").replace(/-\d+$/, "")
        const guessedColorPretty = guessedColor.replace(/^bg-/, "").replace(/-\d+$/, "")
        const outcomeSuffix = 'You guessed ' + guessedColorPretty + ' but it was ' + currentColorPretty
        if (currentBall.color === guessedColor) {
            console.log("You winzzzz!");
            setPoints(points + 5)
            setLastOutcome('You win $5! ' + outcomeSuffix.replace('but', 'and'))
        } else {
            console.log("You lose! " + guessedColor);
            setPoints(points - 1)
            setLastOutcome('You lose $1... ' + outcomeSuffix)
        }
    }

    // useEffects that are called whenever value in the array changes
    useEffect(checkWin, [currentBall])



    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className='text-lg font-bold text-center'>
                <ScoreBoard points={points} lastOutcome={lastOutcome}/>
                <Ball color={currentBall.color} number={currentBall.number}/>
            </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <div>
                    {BALL_COLORS.map((color) => (
                        <button key={color} className={`
                            ml-2
                            w-[70px] h-[70px] 
                            ${color} 
                            text-white rounded-full font-bold 
                            cursor-pointer
                            ${color === guessedColor ? 'opacity-50' : ''}
                        `}
                        onClick={() => changeBall(color)}
                        >
                            {color.split('-')[1]}
                        </button>
                    ))}
                </div>
            </footer>
        </div>
  )
}
