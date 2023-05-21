import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface IAuth {
  auth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<IAuth>({} as IAuth)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(true)

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext)

  // get token of backend

  return {
    auth,
  }
}
