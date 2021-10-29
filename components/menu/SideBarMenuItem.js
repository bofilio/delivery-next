import React from 'react'
import Link from 'next/link'
const SideBarMenuItem = ({children,to,title,active,onClick,index}) => {
    return (
        <Link href={to}>
          <div i={index} onClick={onClick} className={"flex items-center p-4  rounded-xl cursor-pointer hover:text-purple-400 "+ (active=="active"?" bg-purple-900 text-gray-200":" text-gray-500")}>
           {children}
            <span className="lg:block hidden ml-6 font-bold">{title}</span>
          </div>
        </Link>
    )
}

export default SideBarMenuItem
