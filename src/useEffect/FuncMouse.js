import React, { useEffect, useState } from 'react'

const FuncMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const eventListenerFunc = (e) => {
    console.log('mouse event happened!!')
    setX(e.clientX)
    setY(e.clientY)
  }
  const useEffectFunc = () => {
    console.log('useEffect calld!!')
    window.addEventListener('mousemove', eventListenerFunc)
  }
  useEffect(useEffectFunc, [])
  return (
    <div>
      X- {x} Y - {y}
    </div>
  )
}

export default FuncMouse
