import React from 'react'
import { collection, doc, addDoc, updateDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';
const useFireStore = () => {
    const [state, setstate] = useState({ isloading: false, data: null, errormsg: "" })
    async function performAction(action, payload) {
        setstate({ isloading: true, data: null, errormsg: "" });
        switch (action) {
            case "addDoc":
                try {
                    const docRef = await addDoc(collection(db, payload.collection_name), payload.docObj);
                    setstate({ isloading: false, data: docRef, errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, data: null, errormsg: err.message })
                }; break;
            case "updateDoc":
                try {
                    const docRef = doc(db, payload.collection_name, payload.doc_id);
                    await updateDoc(docRef, payload.docObj);
                    setstate({ isloading: false, data: docRef, errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, data: null, errormsg: err.message })
                }; break;

            case "readCollection":
                try {
                    const querySnapshot = await getDocs(collection(db, "users"));
                    setstate({ isloading: false, data: querySnapshot.docs, errormsg: "" })
                } catch (err) {
                    setstate({ isloading: false, data: null, errormsg: err.message })
                }; break;

            default:
                setstate({ isloading: false, data: null.docs, errormsg: "action undefined!" })
        }


    }
    return (
        <div>

        </div>
    )
}

export default useFireStore
