import React, { useState } from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const incre5 = () => setCount((prevState) => prevState + 5)
  const incre1 = () => setCount((prevState) => prevState + -1)
  const decre1 = () => setCount((prevState) => prevState + 1)
  const reset = () => setCount((prevState) => prevState * 0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incre5}>+1</button>
      <button onClick={decre1}>-1</button>
      <button onClick={incre5}>+5</button>
      <button onClick={reset}>0</button>
    </div>
  )
}

export default FunctionalComponent
