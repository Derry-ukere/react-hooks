import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(5000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
  // useCallback(incrementAge, [age])
  // useCallback(incrementSalary, [salary])

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent