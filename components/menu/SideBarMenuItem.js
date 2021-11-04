import React from 'react'
import Link from 'next/link'
import CloseModal from '../modals/CloseModal'
const SideBarMenuItem = ({ children, to, title, active, onClick, index, badge }) => {
  return (
    <Link href={to}>
      <div i={index} onClick={onClick} className={" sm:flex md:inline-block lg:flex flex relative  items-center p-4  rounded-xl cursor-pointer hover:opacity-90 " + (active ? "bg-primary text-light" : "text-gray")}>
        {children}
        <span className="sm:block md:hidden lg:block block   ml-6 font-bold">{title}</span>
        {
          badge >0 &&
          <div className="sm:static md:absolute lg:static static top-4 right-4  flex  justify-end flex-grow text-xs font-bold text-gray ">
            <div className={(active ? "sm:flex md:hidden lg:flex flex  items-center justify-center bg-light w-4 h-4 rounded-full  " : "sm:flex md:hidden lg:flex flex")}>
              {badge}
            </div>
            <div className={(active?"bg-secondary":"bg-primary") +" w-2 h-2 sm:hidden md:inline-block lg:hidden hidden rounded-full "}></div>
          </div>
        }
      </div>
    </Link>
  )
}

export default SideBarMenuItem
