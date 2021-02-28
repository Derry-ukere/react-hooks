import React, { useState, useEffect } from 'react'
import { useDocTile } from './docTile'
import { useDocCustomhook } from './DocCustomhook'

const Custom = () => {
  const [
    handleClickOne,
    handleClickTwo,
    handleClickThree,
    count,
  ] = useDocCustomhook(100, 10)
  useDocTile(count)

  return (
    <div>
      <h1>count - {count}</h1>
      <div>
        <button onClick={handleClickOne}>Increase</button>
        <button onClick={handleClickTwo}>Decrease</button>
        <button onClick={handleClickThree}>Reset</button>
      </div>
    </div>
  )
}

export default Custom
