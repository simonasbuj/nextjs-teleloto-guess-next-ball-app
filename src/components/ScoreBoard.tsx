import React from 'react'

interface ScoreBoardProps {
    points: number;
    lastOutcome: string;
}

export default function ScoreBoard({ points, lastOutcome }: ScoreBoardProps) {
    

  return (
    <div className='fixed top-0 right-0 left-0'>
        <div>
        Prize: ${ points } 
        </div>
        <div>
            <span className='text-sm text-gray-500'>{lastOutcome}</span>
        </div>
    </div>
  )
}
