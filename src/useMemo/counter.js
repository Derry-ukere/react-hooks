import React, { useState, useMemo } from 'react'

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  const handleclick = () => setCounterOne(counterOne + 1)
  const handleclickT = () => setCounterTwo(counterTwo + 1)
  const useMemoFunc = () => {
    let i = 0
    while (i < 200000000) {
      i++
    }
    return counterOne % 2 === 0
  }
  let isEven = useMemo(useMemoFunc, [counterOne])
  return (
    <div>
      <div>
        <button onClick={handleclick}>count - {counterOne}</button>{' '}
        <span>{isEven ? 'Even' : 'odd'}</span>
      </div>
      <div>
        <button onClick={handleclickT}>count - {counterTwo}</button>
      </div>
    </div>
  )
}

export default React.memo(Counter)
