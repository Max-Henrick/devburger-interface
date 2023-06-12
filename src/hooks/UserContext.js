import React, { useContext, createContext, useState } from 'react'

import Proptypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = userInfo => {
    setUserData(userInfo)
  }

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: Proptypes.node
}
