import React from 'react'

const SectionHead = ({title,children}) => {
    return (
        <div className="flex items-center mt-12 mb-8">
            <h1 className=" text-2xl font-bold text-gray-900">{title}</h1>
            <div className="flex-grow"></div>
            {children}
            
        </div>
    )
}

export default SectionHead
