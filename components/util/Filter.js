import React from 'react'

const Filter = ({children,value}) => {
    return (
        <div className="flex right-0 items-center text-gray-900 bg-gray-200 py-2 px-3 rounded space-x-2">
            {children}
            <a className=" text-xs font-semibold  " href="#">{value} </a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    )
}

export default Filter
