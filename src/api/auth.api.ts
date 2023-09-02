import { api, ApiResponse } from './'
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { router } from '../routes';


export interface ISignup{
    login: string | null;
    name: string | null;
    password: string | null;
}
export interface ISignin{
    login: string | null;
    password: string | null;
}

export enum updateResult {
    OK,
    ERROR
}


const AuthApi = {
    signup(data: ISignup): any {
        try {
            return api.post('/auth/signup', data).then(res => {
                console.log(res.data)
                
                return res.data
            })
        } catch (e) {
            return console.error(e)
        }
    },
    async signin(data: ISignin): Promise<any> {
        const token = await api.post('/auth/signin', data)
        if(token.status === 200){
            
            localStorage.setItem('token', token.data)
            console.log(localStorage.getItem('token'))
            router.navigate('/')
            return token.data
        }
    /*    try {
            return api.post('/auth/signin', data).then(res => {
                console.log(res)
                console.log(res.status)
                if(res.status === 200){
                    localStorage.setItem('token', res.data)
                    return res.status
                }

            })
        } catch (e) {
            return console.error(e)
        }*/
    },
    async logout(){
        const token = localStorage.getItem('token')
        console.log(token)
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
    }

}

export default AuthApi
