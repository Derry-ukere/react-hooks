import React, { useState, useEffect } from 'react'

const SeltTimerHook = () => {
  const [count, setCount] = useState(0)
  const tick = () => setCount(count + 1)
  const effect = () => {
    const interval = setInterval(tick, 100)
    return () => clearInterval(interval)
  }
  useEffect(effect, [count])
  return <div>{count}</div>
}

export default SeltTimerHook
