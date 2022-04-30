import React, { useContext } from 'react'
import { TabulationContext } from '../../contexts/TabulationContext'


type TabProps = {
    icon?: JSX.Element
    title: string
    id: number
    className: string
}
const Tab = (props: TabProps) => {
    const { icon, title, id, className } = props
    const [active_id, setActiveId] = useContext(TabulationContext)
    const changeActiveTab = (e, tab_id) => {
        e.preventDefault();
        setActiveId(tab_id);
    }
    return (
        <div className={`${className} ${active_id == id ? " bg-primary text-text-light  " : " bg-light text-gray-normal"} 
             flex items-center justify-center cursor-pointer rounded-lg font-bold`}
            onClick={(e) => changeActiveTab(e, id)}
        >
            {icon}
            <span>
                {title}
            </span>
        </div>
    )
}

export default Tab
