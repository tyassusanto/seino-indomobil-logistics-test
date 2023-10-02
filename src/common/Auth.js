import React from 'react'
import { Navigate } from 'react-router-dom'

const Auth = ({children}) => {
    let auth = localStorage.getItem('auth')

    if(!auth){
        return <Navigate to={'/login'}/>
    }
    return children;
}

export default Auth
