import React, { useContext } from 'react'
import { UserContext, MailContext } from '../App'
const ComponentF = () => {
  const user = useContext(UserContext)
  const email = useContext(MailContext)
  return (
    <div>
      this is my {email} nd {user}
    </div>
  )
}

export default ComponentF
