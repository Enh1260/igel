import Header from '../../components/Header/header'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import { createContext, useState } from 'react';
import AuthApi from '../../api/auth.api';
import type { ISignin } from '../../types/auth';
import { AuthContext } from '../../hooks/AuthContext';


function Root() {

  const [isAuth, setIsAuth] = useState(Boolean(window.localStorage.getItem('token')))
    const signOut = async () => {
        await AuthApi.logout()
        setIsAuth(false)
    }

    const signIn = async (data: ISignin) => {
        const response = await AuthApi.signin(data)
        if(response) setIsAuth(true)
    }    
  return (
    <>
    <AuthContext.Provider value={{isAuth, signIn, signOut}}>
        <div className={styles.container}>
            <Header />
            <div className={styles.outletWrapper}>
                <Outlet />
            </div>
        </div>
        </AuthContext.Provider>
    </>
  )
}

export default Root
