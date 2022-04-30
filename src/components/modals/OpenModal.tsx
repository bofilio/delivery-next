import React, { ReactNode } from 'react'
import { ModalContext } from '../../contexts'

type OpenModalProps={
    children?:ReactNode
    className?:string
}
const OpenModal = (props:OpenModalProps) => {
    const {children,className}=props
    const [open,setopen]=React.useContext(ModalContext);
    const handleOpen=()=>{
        setopen(true);
    }
    return (
        <div className={`${className} cursor-pointer`} onClick={handleOpen}>
            {children}
        </div>
    )
}

export default OpenModal
