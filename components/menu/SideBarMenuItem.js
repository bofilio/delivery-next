import React from 'react'
import Link from 'next/link'
import NotificationIcon from '../icons/NotificationIcon'
const SideBarMenuItem = ({ children, to, title, active, onClick, index, badge }) => {
  return (
    <Link href={to}>
      <div i={index} onClick={onClick} className={" relative flex items-center p-4  rounded-xl cursor-pointer hover:opacity-90 " + (active ? "bg-primary text-light" : "text-gray")}>
        {children}
        <span className="lg:block hidden ml-6 font-bold">{title}</span>
        {
          badge >0 &&
          <div className="lg:static absolute top-4 right-4  flex  justify-end flex-grow text-xs font-bold text-gray ">
            <div className={(active ? "lg:flex hidden items-center justify-center bg-light w-4 h-4 rounded-full  " : "lg:flex hidden")}>
              {badge}
            </div>
            <div className={(active?"bg-secondary":"bg-primary") +" w-2 h-2 lg:hidden rounded-full inline-block"}></div>
          </div>
        }
      </div>
    </Link>
  )
}

export default SideBarMenuItem
