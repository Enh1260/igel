import { useSyncExternalStore } from "react";

const useAuthStatus = () => {

    const isAuth = useSyncExternalStore(subscribe, getSnapshot)
    console.log(Boolean(isAuth))
    return Boolean(isAuth)
}

const subscribe = (listener) => {
    window.addEventListener('storage',listener)
    return () => window.removeEventListener('storage', listener)
}

const getSnapshot = () => {
    console.log('getsna[shot')
    return window.localStorage.getItem('token')
}

export default useAuthStatus

