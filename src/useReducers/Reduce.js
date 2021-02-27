import React, { useReducer } from 'react'
const initialState = {
  init: 0,
  second: 100,
}
const reducer = (currentState, action) => {
  // returns new state
  switch (action.type) {
    case 'increase':
      return { ...initialState, init: currentState.init + action.value }
    case 'decrease':
      return { ...initialState, init: currentState.init - action.value }
    case 'increase-sec':
      return { ...initialState, second: currentState.second + action.value }
    case 'decrease-sec':
      return { ...initialState, second: currentState.second - action.value }
    case 'reset':
      return { ...initialState, init: initialState.init }
    default:
      return currentState
  }
}

const Reduce = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const increase = () => dispatch({ type: 'increase', value: 1 })
  const decrease = () => dispatch({ type: 'decrease', value: 1 })
  const increaseFiv = () => dispatch({ type: 'increase', value: 5 })
  const decreaseFiv = () => dispatch({ type: 'decrease', value: 5 })
  const increaseSec = () => dispatch({ type: 'increase-sec', value: 1 })
  const decreaseSec = () => dispatch({ type: 'decrease-sec', value: 1 })
  const reset = () => dispatch({ type: 'reset' })

  return (
    <div>
      <h5>count - {count.init} </h5>
      <h6> second counter- {count.second}</h6>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>decrement</button>
      <button onClick={increaseFiv}>Increment 5</button>
      <button onClick={decreaseFiv}>decrement 5</button>
      <button onClick={reset}>reset</button>
      <div>
        <button onClick={increaseSec}>Increment</button>
        <button onClick={decreaseSec}>decrement</button>
      </div>
    </div>
  )
}

export default Reduce
