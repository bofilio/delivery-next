import React, { Fragment, useContext } from 'react'
import { TabulationContext } from '../../contexts/TabulationContext'

const TabContent = ({ children, id,className }) => {
    const [active_id, setActiveId] = useContext(TabulationContext)
    return (
        <div className={className+" "+(id == active_id ? "" : "hidden")}>
            {children}
        </div>
    )
}

export default TabContent
