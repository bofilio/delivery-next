import React from 'react'
import Link from 'next/link'
const Tab = ({ children, to, title,active }) => {
    return (
        <Link href={to}>
            <div className={(active=="active"?"bg-primary text-light font-bold":"bg-light text-gray" )+" flex items-center justify-center lg:flex-grow-0 flex-grow p-3 cursor-pointer rounded-lg space-x-3"}>
                {children}
                <span>
                    {title}
                </span>
            </div>
        </Link>
    )
}

export default Tab
