import React, { ReactNode } from 'react'
import { ModalContext } from '../../contexts'
import { useNibbleStore } from '../../store'
import {useRouter} from"next/router"

type OpenModalProps={
    children?:ReactNode
    className?:string
}
const OpenModal = (props:OpenModalProps) => {
    const router =useRouter();
    const currentUser=useNibbleStore(store=>store.currentUser)
    const {children,className}=props
    const [open,setopen]=React.useContext(ModalContext);
    const handleOpen=()=>{
        if (currentUser!==null){
            setopen(true);
        }
        else{
            router.push("/auth/signin")
        }
        
    }
    return (
        <div className={`${className} cursor-pointer`} onClick={handleOpen}>
            {children}
        </div>
    )
}

export default OpenModal
