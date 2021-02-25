import React, { useState } from 'react'

const FunctionalComponent = () => {
  const [name, setName] = useState({
    firstName: '',
    lastNmae: '',
  })
  const handleChange = (e) => setName({ ...name, firstName: e.target.value })
  const handleChangeTwo = (e) => setName({ ...name, lastNmae: e.target.value })

  return (
    <div
      style={{
        marginLeft: '45px',
        marginTop: '50px',
        backgroundColor: 'GrayText',
      }}
    >
      <input type='text' onChange={handleChange} />
      <input type='text' onChange={handleChangeTwo} />
      <h3>{`my name is ${name.firstName} ${name.lastNmae}`}</h3>
    </div>
  )
}

export default FunctionalComponent
