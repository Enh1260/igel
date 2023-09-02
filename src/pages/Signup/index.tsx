import { useEffect, useState } from "react";
import AuthApi from "../../api/auth.api";
import styles from './styles.module.css'
const SignUp = () => {

    const [postData, setPostData] = useState({
        login: '',
        password: '',
        name: ''
    })

    const submitHandler = async (e: any) => {
        console.log(postData)
        AuthApi.signup(postData)

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
                    Имя
                    <input onChange={(e) => setPostData({...postData, name: e.target.value})} type="text" />
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

export default SignUp
