import React, { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'

import { auth } from '../firebase/firebase'
import { onAuthStateChanged, User } from "firebase/auth";
import { getUserfromStorage } from '../helpers';


export type currentUserType = null | User
export const USER_STORAGE = "currentUseer"

export const AuthenticationContext = createContext<currentUserType>(null);

export const AuthenticationProvider = ({ children }) => {
    const [currentUser, setUser] = useState(null as currentUserType);
    
    useEffect(()=>{
         setUser(getUserfromStorage())
    },[])
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                localStorage.setItem(USER_STORAGE, JSON.stringify(user))
            } else {
                setUser(null)
                localStorage.removeItem(USER_STORAGE)
            }
        })
        return unsbscribe;
    }, [])
    return (
        <AuthenticationContext.Provider value={currentUser} >
            {children}
        </AuthenticationContext.Provider>
    )
}

