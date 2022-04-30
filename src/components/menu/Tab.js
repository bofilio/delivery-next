import React,{useContext} from 'react'
import { TabulationContext } from '../../contexts/TabulationContext'
const Tab = ({ children, title,id,className }) => {
    const [active_id, setActiveId] = useContext(TabulationContext)
    const changeActiveTab=(e,tab_id)=>{
        e.preventDefault();
        setActiveId(tab_id);
    }
    return (
            <div className={`${className} ${active_id==id?" bg-primary text-text-light  ":" bg-light text-gray-normal"} 
             flex items-center justify-center cursor-pointer rounded-lg font-bold`}
            onClick={(e,tab_id)=>changeActiveTab(e,id)}
            >
                {children}
                <span>
                    {title}
                </span>
            </div>
    )
}

export default Tab
