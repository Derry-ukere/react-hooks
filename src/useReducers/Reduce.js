import React, { useReducer } from 'react'
const initialState = 0
const reducer = (currentState, action) => {
  // returns new state
  switch (action) {
    case 'increase':
      return currentState + 1
    case 'decrease':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

const Reduce = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const increase = () => dispatch('increase')
  const decrease = () => dispatch('decrease')
  const reset = () => dispatch('reset')

  return (
    <div>
      <h5>count - {count} </h5>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Reduce
