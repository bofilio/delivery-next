import React from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'

const Filter = ({children,value}) => {
    return (
        <div className="flex right-0 items-center text-dark bg-light py-2 px-3 rounded space-x-2">
            {children}
            <a className=" text-xs font-semibold  " href="#">{value} </a>
           <ArrowDownIcon className="w-4 h-4"/>
        </div>
    )
}

export default Filter
