import React, { createContext, useReducer } from 'react'

import Component from './useMemo/counter'
const App = () => {
  return (
    <div
      style={{
        marginLeft: '200px',
        marginTop: 'auto',
      }}
    >
      <Component />
    </div>
  )
}
export default App
