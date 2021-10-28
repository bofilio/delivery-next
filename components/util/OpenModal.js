import React from 'react'
import { ModalContext } from '../../contexts/ModalContext'
const OpenModal = ({children,className}) => {
    const [open,setopen]=React.useContext(ModalContext);
    const handleOpen=()=>{
        setopen(true);
    }
    return (
        <div className={className+ " cursor-pointer"} onClick={handleOpen}>
            {children}
        </div>
    )
}

export default OpenModal
