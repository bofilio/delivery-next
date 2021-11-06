import React,{useState,useEffect,createContext} from 'react'
import {useRouter} from 'next/router'
export const AuthenticationContext=createContext();
import {auth} from '../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";
export const AuthenticationProvider = ({children}) => {
    const [uid, setUid] = useState('');
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUid(user.uid)
               localStorage.setItem("uid",user.uid)
               localStorage.setItem("email",user.email)
            } else {
                setUid(null)
                localStorage.setItem("uid","")
                localStorage.setItem("email","")
            }
        })
        return unsbscribe;
    }, [])
    return (
        <AuthenticationContext.Provider value={uid} >
            {children}
        </AuthenticationContext.Provider>
    )
}

