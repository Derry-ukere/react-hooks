import { useState } from 'react'

export const useDocCustomhook = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount)
  const handleClickOne = () => setCount(count + value)
  const handleClickTwo = () => setCount(count - value)
  const handleClickThree = () => setCount(initialCount)
  return [handleClickOne, handleClickTwo, handleClickThree, count]
}

export default useDocCustomhook
