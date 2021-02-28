import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentD = () => {
  const countText = useContext(CountContext)
  const increase = () => countText.dispatch('increment')
  const decrease = () => countText.dispatch('decrement')
  const reset = () => countText.dispatch('reset')

  return (
    <div>
      ComponentD
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ComponentD
