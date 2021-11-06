import React, { useState } from 'react'
import app from './firebase'
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser,reauthenticateWithCredential
} from "firebase/auth";

const auth = getAuth(app);

const useFireBaseAuth = () => {
    const [state, setstate] = useState({ isloading: false, uid: '', errormsg: "" })
    async function performAction(action, paylaod) {

        setstate({ isloading: true, uid: '', errormsg: "" })

        switch (action) {

            case "signup":
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, paylaod.email, paylaod.password);
                    setstate({ isloading: false, uid: userCredential.user.uid, errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "signin":
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, paylaod.email, paylaod.password);
                    setstate({ isloading: false, uid: userCredential.user.uid, errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "signout":
                try {
                    await signOut(auth)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "send_email_verification":
                try {
                    await sendEmailVerification(auth.currentUser)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "send_reset_password_email":
                try {
                    await sendPasswordResetEmail(auth, paylaod.email)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "delete_user":
                try {
                    await deleteUser(auth.currentUser)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;
            //Use before operations such as updatePassword that require tokens from recent sign-in attempts. 
            case "reauthenticate":
                try {
                    await reauthenticateWithCredential(auth.currentUser,credential)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            default:
                setstate({ loading: false, uid: '', error: new Error("action undefined!") })
        }
    }

    return { state, performAction };
}

export default useFireBaseAuth
