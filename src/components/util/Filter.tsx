import React, { ReactNode } from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'

type FilterPtops={
    children:ReactNode
    value:any
}
const Filter = (props:FilterPtops) => {
    const {children,value}=props
    return (
        <div className="flex right-0 items-center text-dark bg-light py-2 px-3 rounded space-x-2">
            {children}
            <a className=" text-xs font-semibold  " href="#">{value} </a>
           <ArrowDownIcon className="w-4 h-4"/>
        </div>
    )
}

export default Filter
