import AuthApi from "../../api/auth.api"
import { useContext } from 'react'
import { AuthContext } from "../../hooks/AuthContext"
import useAuthStatus from "../../hooks/useAuthStatus"
import styles from './styles.module.css'
import ProfileMenu from "./ProfileMenu/ProfileMenu"
const Header = () => {

    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return(
        <>
            <div className={styles.header}>
                <div className="logo"></div>
                <nav className="nav">

                </nav>
                <ProfileMenu isAuth={isAuth} />
            </div>
        </>
    )
}

export default Header
