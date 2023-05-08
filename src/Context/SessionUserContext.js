import React, {createContext, useState, useEffect} from 'react'

export const SessionUserContext = createContext()

export const SessionUserContextProvider = ({children}) => {
  const [userSession, setUserSession] = useState({})

  return (
    <SessionUserContext.Provider
      value={{
        userSession,
        setUserSession,
      }}>
      {children}
    </SessionUserContext.Provider>
  )
}
