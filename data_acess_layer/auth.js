import app from './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

//basic sign up
export async function BasicSignUp(email, password){
    let res={loading:true,data:null,error:null};
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(await userCredential.user.getIdToken());
        console.log(userCredential.user.uid);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(` error-${errorCode} : ${errorMessage}` )
        // ..
    };
}
