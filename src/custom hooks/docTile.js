import { useEffect } from 'react'

export const useDocTile = (count) => {
  const handleEffec = () => {
    document.title = ` count - ${count} times`
  }
  useEffect(handleEffec, [count])
}

export default useDocTile
