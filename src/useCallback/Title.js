import React from 'react'

const Title = () => {
  console.log('rendering Title!!')
  return (
    <div>
      <h2>Use Call Back Hooks!!</h2>
    </div>
  )
}

export default React.memo(Title)
