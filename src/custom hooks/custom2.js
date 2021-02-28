import React, { useState, useEffect } from 'react'

const Custom = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  const handleEffec = () => {
    document.title = ` count - ${count} times`
  }
  useEffect(handleEffec, [count])

  return (
    <div>
      <button onClick={handleClick}>button count - {count}</button>
    </div>
  )
}

export default Custom
