import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducer'
import { addUserToLocalStorage } from './utils'

const initialState = {
  user: undefined,
}

export const appContext = React.createContext(null)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setupUser = async ({ currentUser, endpoint }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/v1/auth/${endpoint}`,
        currentUser,
      )
      console.log(data)
      const { user, token } = data
      dispatch({
        type: 'SETUP_USER_SUCCESS',
        payload: {user},
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SETUP_USER_ERROR',
        payload: { msg: error.message },
      })
    }
  }
  return (
    <appContext.Provider value={{ ...state, setupUser }}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => useContext(appContext)
