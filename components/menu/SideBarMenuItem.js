import React from 'react'
import Link from 'next/link'
const SideBarMenuItem = ({ children, to, title, active, onClick, index }) => {
  return (
    <Link href={to}>
      <div i={index} onClick={onClick} className={"flex items-center p-4  rounded-xl cursor-pointer hover:opacity-90 " + (active == "active" ? "bg-primary text-light" : "text-gray")}>
        {children}
        <span className="lg:block hidden ml-6 font-bold">{title}</span>
      </div>
    </Link>
  )
}

export default SideBarMenuItem
