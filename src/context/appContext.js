import React, { useContext } from 'react'

const defaultContextValue = {
  user: 'test',
}
export const appContext = React.createContext(defaultContextValue)

export function AppProvider({ children }) {
  return (
    <appContext.Provider value={defaultContextValue}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => useContext(appContext)
