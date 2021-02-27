import React from 'react'
import Component from './useContext/ComponentC'
export const UserContext = React.createContext()
export const MailContext = React.createContext()

const App = () => {
  return (
    <div
      style={{
        marginLeft: '200px',
        marginTop: 'auto',
      }}
    >
      <UserContext.Provider value='Derry'>
        <MailContext.Provider value='ukderry@gmail.com'>
          <Component />
        </MailContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
export default App
