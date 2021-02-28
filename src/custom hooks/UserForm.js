import React, { useState } from 'react'
import { useInput } from './useInput'

const UserForm = () => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`hello ${first}`)
  }
  const handleOne = (e) => {
    e.preventDefault()
    setFirst(e.target.value)
  }
  const handleTwo = (e) => {
    e.preventDefault()
    setLast(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type='text' value={first} onChange={handleOne} />
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' value={last} onChange={handleTwo} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UserForm
