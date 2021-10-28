import React,{useState,createContext} from 'react'

export const ModalContext=createContext();

export const ModalProvider = ({children}) => {
    const [open, setopen] = useState(false)
    return (
        <ModalContext.Provider value={[open,setopen]}>
            {children}
        </ModalContext.Provider>
    )
}
