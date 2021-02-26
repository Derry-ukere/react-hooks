import React, { useEffect, useState } from 'react'

const FuncMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const eventListenerFunc = (e) => {
    console.log('mouse event happened!!')
    setX(e.clientX)
    setY(e.clientY)
  }

  const useEffCleanUp = () =>
    window.removeEventListener('mousemove', eventListenerFunc)
  const useEffectFunc = () => {
    console.log('useEffect calld!!')
    window.addEventListener('mousemove', eventListenerFunc)
    return useEffCleanUp
  }
  useEffect(useEffectFunc, [])
  return (
    <div>
      X- {x} Y - {y}
    </div>
  )
}

export default FuncMouse
