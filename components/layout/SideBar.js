import React from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import SideBarMenuItem from '../menu/SideBarMenuItem'
import SideBareMenu from '../menu/SideBareMenu'
import FireIcon from '../icons/FireIcon'
import Badge from '../util/Badge'
const SideBar = ({ className }) => {
  return (
    <nav className={className + " bg-light flex flex-col lg:items-stretch items-center  p-4 lg:w-80 w-28  h-screen max-h-screen overflow-y-auto  rounded-r-3xl fixed "}>
      {/*Logo block*/}
      <div className="flex items-center pt-4 pl-4">
        <Logo variant="normal" text_color="text-black" />
      </div>
      {/*Logo block End*/}
      {/*Menu block*/}
      <div className="mt-12 ">
        <SideBareMenu/>
      </div>
      {/*Menu block End*/}
      {/*Adds block*/}
      <div className="lg:flex hidden flex-col items-center mt-24 px-4 relative">
        <div className="flex flex-col items-center bg-white rounded-2xl ads sh p-8 relative z-20">
          <div className="text-gray cursor-pointer z-50 absolute top-4 right-4 ">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
          <Badge color="secondary" className=" bg-tr-error  w-16 h-16  flex items-center justify-center rounded-2xl">
            <FireIcon className="w-8 h-8"/>
          </Badge>
          <h1 className="text-center text-dark text-base font-bold mt-6">
            Free delivery on all orders over <span className="text-red-500">$25</span>
          </h1>
          <p className=" text-gray text-center  text-sm mt-2">
            It is a limited time offer that will expire soon.
          </p>
          <button className="bg-primary text-light  flex items-center mt-8 px-8 py-3  rounded-lg hover:opacity-90  font-bold">
            Order Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="absolute w-9/12 h-full bg-white ads rounded-xl z-10" style={{ bottom: '-0.6rem' }}></div>
        <div className="absolute w-7/12 h-full bg-white ads rounded-xl z-0" style={{ bottom: '-1.2rem' }}></div>
      </div>
      {/*Adds block End*/}
      <div className="flex-grow"></div>
      {/*Profile block*/}
      <Link href="/auth/signin">
      <div className=" mt-12 mb-4 w-full px-4 flex items-center box-border relative cursor-pointer">
        <div className="bg-tertiary flex items-end justify-center w-12 h-12 rounded-full ">
          <img className=" w-10 h-10" src="/img/user.svg"></img>
        </div>
        <div className="lg:flex hidden flex-col ml-5">
          <h1 className="text-sm text-dark font-bold">Mark Clarke</h1>
          <p className=" text-gray text-xs">markclarke@gmail.com</p>
        </div>
        <div className="flex-grow"></div>
        <div className="lg:flex hidden flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      </Link>
      {/*Profile block End*/}
    </nav>
  )
}

export default SideBar
