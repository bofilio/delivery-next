import React from 'react'

const SectionHead = ({title,children,className="mt-12 mb-8"}) => {
    
    return (
        <div className={` ${className} flex items-center`}>
            <h1 className=" text-2xl font-bold text-dark">{title}</h1>
            <div className="flex-grow"></div>
            {children}
        </div>
    )
}

export default SectionHead
