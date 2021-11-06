import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
// wrape any section that would require authentication with this component 
const AuthRequired = ({ children }) => {
    const [uid, setuid] = useState('')
    const router = useRouter();
    useEffect(() => {
        const stored_uid= localStorage.getItem("uid");
        const isauthenticated= uid || stored_uid;
        isauthenticated? setuid (isauthenticated):router.push("/auth/signin");
    }, [])

    return (
        <>
            {
                uid ? children: <></>
            }
        </>
    )
}

export default AuthRequired
