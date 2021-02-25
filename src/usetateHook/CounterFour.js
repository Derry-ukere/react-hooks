import React, { useState } from 'react'

const CounterFour = () => {
  const [items, setItems] = useState([])

  let mappFunction = (obj) => {
    return <li key={obj.id}>{obj.value}</li>
  }
  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ])
  }
  return (
    <div>
      <button onClick={handleClick}>Add item</button>
      <ul>{items.map(mappFunction)}</ul>
    </div>
  )
}

export default CounterFour
