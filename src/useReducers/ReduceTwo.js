import React, { useReducer } from 'react'
const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case 'increase':
      return currentState + 1
    case 'decrease':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      break
  }
}
const ReduceTwo = () => {
  const [countOne, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  const reset = () => dispatch('reset')
  const increase = () => dispatch('increase')
  const decrease = () => dispatch('decrease')

  const increaseTwo = () => dispatchTwo('increase')
  const decreaseTwo = () => dispatchTwo('decrease')
  const reset2 = () => dispatchTwo('reset')

  return (
    <div>
      <h1>count One - {countOne}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
      <div>
        <h1>count Two - {countTwo}</h1>
        <button onClick={increaseTwo}>increase</button>
        <button onClick={decreaseTwo}>decrease</button>
        <button onClick={reset2}>reset</button>
      </div>
    </div>
  )
}

export default ReduceTwo
