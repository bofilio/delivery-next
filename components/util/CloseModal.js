import React from 'react'
import { ModalContext } from '../../contexts/ModalContext'
const CloseModal = ({children,className}) => {
    const [open,setopen]=React.useContext(ModalContext);
    const handleOpen=()=>{
        setopen(false);
    }
    return (
        <div className={className+ " cursor-pointer"} onClick={handleOpen}>
            {children}
        </div>
    )
}

export default CloseModal
