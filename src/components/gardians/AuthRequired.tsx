import { useRouter } from 'next/router'
import React, { useState, useEffect, useContext } from 'react'
import { AuthenticationContext } from '../../contexts';
import { getUserfromStorage } from '../../helpers';
// wrape any section that would require authentication with this component 
const AuthRequired = ({ children }) => {
    const currentUser = useContext(AuthenticationContext)
    const router = useRouter();

    useEffect(() => {
        currentUser ? "do nothing" : router.push("/auth/signin");
    }, [])

    return (
        <>
                {children}    
        </>
    )
}

export default AuthRequired
