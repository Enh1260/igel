import { createContext, useState } from 'react'
import AuthApi from '../api/auth.api'
import type { ISignin } from '../types/auth'

type TAuthContextValues = {
    isAuth: boolean,
    signIn: (data: ISignin) => Promise<void>,
    signOut: () => Promise<void>
}

/*const [isAuth, setIsAuth] = useState(Boolean(window.localStorage.getItem('token')))
const signOut = async () => {
    await AuthApi.logout()
    setIsAuth(false)
}

const signIn = async (data: ISignin) => {
    const response = await AuthApi.signin(data)
    if(response) setIsAuth(true)
}    
*/
const AuthContext = createContext<TAuthContextValues | undefined>(undefined)

export { AuthContext, isAuth, signIn, signOut }