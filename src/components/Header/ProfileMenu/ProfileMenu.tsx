import { useContext } from 'react'
import AuthApi from '../../../api/auth.api'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../hooks/AuthContext'
import styles from './styles.module.css'
const ProfileMenu = ({isAuth}) => {
    const { signOut } = useContext(AuthContext)
    return(
        <>
            { !isAuth ? <div className={styles.container}>
                <Link to='/signup'>Зарегистрироваться</Link>
                <Link to='/signin'>Войти</Link>
            </div>
            : <button onClick={signOut}>LOGOUT</button>
            }
        </>
    )
}

export default ProfileMenu
