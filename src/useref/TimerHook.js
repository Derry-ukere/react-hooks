import React, { useState, useEffect, useRef } from 'react'

const TimerHook = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  const intervalFunc = () => setTimer(timer + 1)

  const useEffectFunc = () => {
    intervalRef.current = setInterval(intervalFunc, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(useEffectFunc, [])

  const handleClick = () => clearInterval(intervalRef.current)

  return (
    <div>
      <div> timer - {timer}</div>
      <div>
        <button onClick={handleClick}>stop</button>
      </div>
    </div>
  )
}

export default TimerHook
