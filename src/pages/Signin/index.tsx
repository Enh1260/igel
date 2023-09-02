import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { redirect, useNavigate } from "react-router-dom";
import AuthApi from "../../api/auth.api";
import styles from './styles.module.css'
function Signin() {
    const { signIn } = useContext(AuthContext)
    const [isSigninDone, setIsSignInDone] = useState(false)
/*    useEffect(() => {
        if(isSigninDone){
            const navigate = useNavigate()
            navigate('/')
        }
        
    }, [isSigninDone])*/

    const [postData, setPostData] = useState({
        login: '',
        password: '',
    })




    const submitHandler = async (e: any) => {
        console.log(postData)
        signIn(postData)

    }
    return(
        <>
        <div className={styles.container}>
            <h2>Регистрация</h2>
            <div className={styles.form}>
                <label>
                    Логин
                    <input onChange={(e) => setPostData({...postData, login: e.target.value})} type="text" />
                </label>               
                <label>
                    Пароль
                    <input onChange={(e) => setPostData({...postData, password: e.target.value})} type="password" />
                </label>
                <button className={styles.submit} onClick={submitHandler}>Зарегистрироваться</button>               
            </div>
        </div>
        </>
    )
}

export default Signin
