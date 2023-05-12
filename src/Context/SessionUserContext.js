import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const SessionUserContext = createContext()

export const SessionUserContextProvider = ({children}) => {
  const [userSession, setUserSession] = useState(null)
  // const [session , setSession ] = useState({})

  useEffect(()=>{
    getData()
  }, [])
  
  const getData = () => {
    AsyncStorage.getItem('isLoggedIn').then((rs)=>{
      setUserSession(rs)
    })
  } 
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn')
    setUserSession({})
  };

  return (
    <SessionUserContext.Provider
      value={{
        userSession,
        setUserSession,
        getData,
        handleLogout
      }}>
      {children}
    </SessionUserContext.Provider>
  )
}
