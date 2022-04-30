import { useState } from 'react'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential,
    signInWithPopup, GoogleAuthProvider, User
} from "firebase/auth";

type authStateType = {
    isloading: boolean
    data: User|null
    error: string | null
}
type authActionType = "SIGNUP" | "SIGNIN" | "SIGNOUT" | "SEND_EMAIL_VERIFICATION" | "SEND_RESET_PASSWORD_EMAIL" | "DELETE_USER" | "GOOGLE_SIGNIIN" | "REAUTHGENTICATE"

const useFireBaseAuth = () => {
    const [state, setstate] = useState({ isloading: false, data: null, error: null } as authStateType)
    async function performAction(action: authActionType, paylaod?: any) {

        setstate(prev => ({ ...prev, isloading: true }))
        switch (action) {
            case "SIGNUP":
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, paylaod.email, paylaod.password);
                    setstate({ isloading: false, data: userCredential.user, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;

            case "SIGNIN":
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, paylaod.email, paylaod.password);
                    setstate({ isloading: false, data: userCredential.user, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;

            case "SIGNOUT":
                try {
                    await signOut(auth)
                    setstate({ isloading: false, data: null, error: null })
                } catch (err) {
                    setstate(prev => ({ ...prev, isloading: false, error: err.message }))
                }; break;

            case "SEND_EMAIL_VERIFICATION":
                try {
                    await sendEmailVerification(auth.currentUser)
                    setstate({ isloading: false, data: null, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;

            case "SEND_RESET_PASSWORD_EMAIL":
                try {
                    await sendPasswordResetEmail(auth, paylaod.email)
                    setstate({ isloading: false, data: null, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;

            case "DELETE_USER":
                try {
                    await deleteUser(auth.currentUser)
                    setstate({ isloading: false, data: null, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;
            //Use before operations such as updatePassword that require tokens from recent sign-in attempts. 
            
            case "GOOGLE_SIGNIIN":
                const provider = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(auth, provider);
                    const user = result.user;
                    setstate({ isloading: false, data: user, error: null })
                } catch (err) {
                    setstate({ isloading: false, data: null, error: err.message })
                }; break;

            default:
                setstate({ isloading: false, data: null, error: "action undefined!" })
        }
    }

    return { state, performAction };
}

export default useFireBaseAuth
