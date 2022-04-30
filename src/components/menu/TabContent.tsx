import React, { Fragment, ReactNode, useContext } from 'react'
import { TabulationContext } from '../../contexts/TabulationContext'

type TabContentProps = {
    children: ReactNode
    id: number
    className?: string
}
const TabContent = (props: TabContentProps) => {
    const { children, id, className } = props
    const [active_id, setActiveId] = useContext(TabulationContext)
    return (
        <div className={`${className} ${id == active_id ? "" : "hidden"}`}>
            {children}
        </div>
    )
}
export default TabContent
