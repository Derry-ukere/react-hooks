import React, { useEffect, useState } from 'react'

const CounterOne = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  const useEffectFunc = () => {
    document.title = `you clicked ${count} times!!`
  }
  useEffect(useEffectFunc)

  return (
    <div
      style={{
        marginLeft: '45px',
        marginTop: '50px',
        backgroundColor: 'GrayText',
      }}
    >
      <button onClick={handleClick}>click to {count}change title</button>
    </div>
  )
}

export default CounterOne
