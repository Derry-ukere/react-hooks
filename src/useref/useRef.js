import React, { useRef, useEffect } from 'react'

const useRefCom = () => {
  const inputRef = useRef(null)
  const useEffectFunc = () => {
    // do something when component mounts or updates
    inputRef.current.focus()
  }
  useEffect(useEffectFunc, [])
  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default useRefCom
