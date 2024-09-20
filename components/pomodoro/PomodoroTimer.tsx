import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const DEFAULT_TIME = 52 * 60 // 52 minutes in seconds

export default function PomodoroTimer() {
  const [remainingTime, setRemainingTime] = useState(DEFAULT_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isRunning && !isPaused && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (remainingTime === 0) {
      setIsRunning(false)
      alert('Time is up!')
    }
    return () => clearInterval(timer)
  }, [isRunning, isPaused, remainingTime])

  const handleStart = () => {
    setRemainingTime(DEFAULT_TIME)
    setIsRunning(true)
    setIsPaused(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsPaused(false)
    setRemainingTime(DEFAULT_TIME)
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className="col-span-1 flex flex-col justify-between rounded-md p-3 dark:bg-[#2e3039]">
      <div className="flex justify-center gap-3 pt-3">
        <Button className="bg-[#19191f] font-supreme text-sm font-semibold text-white hover:bg-[#19191f]/70">
          Pomodoro
        </Button>
        <Button className="bg-[#19191f] font-supreme text-sm font-semibold text-white hover:bg-[#19191f]/70">
          Short break
        </Button>
        <Button className="bg-[#19191f] font-supreme text-sm font-semibold text-white hover:bg-[#19191f]/70">
          Long Break
        </Button>
      </div>
      <div className="grid gap-3 py-3">
        <div className={`my-20 flex justify-center ${isPaused ? 'animate-pulse' : ''}`}>
          <h2 className="font-outfit text-8xl font-bold">{formatTime(remainingTime)}</h2>
        </div>
        <div className="flex justify-center gap-3">
          {!isRunning && (
            <button
              onClick={handleStart}
              className="rounded-lg bg-black px-4 py-1 font-supreme text-xl text-white transition-all hover:bg-stone-950">
              Start
            </button>
          )}
          {isRunning && (
            <>
              <button
                onClick={handlePause}
                className={`rounded-lg bg-yellow-500 px-4 py-1.5 text-white transition-all hover:bg-yellow-600 ${isPaused ? 'animate-pulse' : ''}`}>
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg bg-red-500 px-4 py-1.5 text-white transition-all hover:bg-red-600">
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
