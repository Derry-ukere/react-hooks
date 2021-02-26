import React, { useEffect, useState } from 'react'

const CounterOne = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const handleClick = () => setCount(count + 1)
  const handleInputChange = (e) => setName(e.target.name)
  const useEffectFunc = () => {
    console.log('compnt upated!!')
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
      <input type='text' value={name} onChange={handleInputChange} />
      <button onClick={handleClick}>click to {count}change title</button>
    </div>
  )
}

export default CounterOne
