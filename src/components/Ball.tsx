import React from 'react'

interface BallProps {
    color: string;
    number: number;
}

export default function Ball({ color, number }: BallProps) {
    return (
        <div className={`
            w-[110px] h-[110px] 
            flex items-center justify-center 
            rounded-full text-white text-4xl font-bold 
            ${color}
        `}>
            {number}
        </div>
    )
}
