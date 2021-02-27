import React, { useState } from 'react'
import Component from './FuncMouse'

const FuncMouseContainer = () => {
  const [display, setDisplay] = useState(true)
  const handleClick = () => setDisplay(!display)
  return (
    <div>
      <button onClick={handleClick}> display</button>
      {display && <Component />}
    </div>
  )
}

export default FuncMouseContainer
