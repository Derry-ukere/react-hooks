import React, { createContext, useReducer } from 'react'

import Component from './useReducer/DataFetch2'

const initialState = 0
export const CountContext = React.createContext()
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState

    default:
      return currentState
  }
}
const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
      <div
        style={{
          marginLeft: '200px',
          marginTop: 'auto',
        }}
      >
        <Component />
      </div>
    </CountContext.Provider>
  )
}
export default App
