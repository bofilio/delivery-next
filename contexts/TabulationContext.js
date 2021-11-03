import React,{useState,createContext,Children} from 'react'

export const TabulationContext=createContext();

export const TabulationProvider = ({children}) => {
    const [active_id, setActiveId] = useState(1)
    
    return (
        <TabulationContext.Provider value={[active_id, setActiveId]}>
            {children}
        </TabulationContext.Provider>
    )
}