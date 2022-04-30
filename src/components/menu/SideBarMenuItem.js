import React from 'react'
import Link from 'next/link'
const SideBarMenuItem = ({ children, to, title, active, badge }) => {
  return (
    <Link href={to}>
      <div
        className={`${active ? "bg-primary text-text-light" : "text-gray-normal"} sm:flex md:inline-block lg:flex flex relative  items-center p-4  rounded-xl cursor-pointer hover:opacity-90 `}>
        {children}
        <span className="sm:block md:hidden lg:block  ml-6 font-bold">{title}</span>
        {
          badge > 0 &&
          <div className="sm:static md:absolute lg:static top-4 right-4  flex  justify-end flex-grow text-xs font-bold text-gray-normal ">
            <div className={`sm:flex md:hidden lg:flex flex items-center justify-center w-4 h-4 rounded-full bg-light`}>
              {badge}
            </div>
            <div className={`${active ? "bg-secondary" : "bg-primary"}  w-2 h-2 sm:hidden md:inline-block lg:hidden hidden rounded-full relative`}>
              <span className={`${active ? "bg-secondary" : "bg-primary"} animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75`}></span>
            </div>
          </div>
        }
      </div>
    </Link>
  )
}

export default SideBarMenuItem
