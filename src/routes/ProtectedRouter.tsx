import { Navigate, Outlet } from "react-router-dom"
const ProtectedRouter = ({element}) => {
    const token = localStorage.getItem('token')
    console.log(token)
    if(token){
        return element
    }
    return <Navigate to="/signup" replace />

}

export default ProtectedRouter