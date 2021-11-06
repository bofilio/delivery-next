import React,{useRef} from 'react'
import Link from 'next/link'
import Logo from '../util/Logo'
import SideBareMenu from '../menu/SideBareMenu'
import FireIcon from '../icons/FireIcon'
import Badge from '../util/Badge'
import CloseIcon from '../icons/CloseIcon'
import LongArrowRight from '../icons/LongArrowRight'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import ArrowTopIcon from '../icons/ArrowTopIcon'
import Avatar from '../util/Avatar'
import SignoutIcon from '../icons/SignoutIcon'
const SideBar = ({ className }) => {
 
  return (
    <nav className={`${className} fixed bg-light flex-col lg:items-stretch items-center p-4 h-screen max-h-screen overflow-y-auto`}>
      {/*Logo block*/}
      <div className="flex items-center pt-4 pl-4 justify-between">
        <Logo variant="normal" text_color="text-black" />
        <Link href="/auth/signout">
        <div className="cursor-pointer sm:block md:hidden lg:block"><SignoutIcon className=" w-6 h-6 text-gray" /></div>
        </Link>
      </div>
      {/*Logo block End*/}
      {/*Menu block*/}
      <div className="mt-12 w-full">
        <SideBareMenu />
      </div>
      {/*Menu block End*/}
      {/*Adds block*/}
      <div className="lg:flex hidden flex-col items-center mt-24 px-4 relative">
        <div className="flex flex-col items-center bg-white rounded-2xl ads sh p-8 relative z-20">
          <div className="text-gray cursor-pointer z-50 absolute top-4 right-4 ">
            <CloseIcon className="w-4 h-4" />
          </div>
          <Badge color="secondary" className="w-16 h-16  flex items-center justify-center rounded-2xl">
            <FireIcon className="w-8 h-8" />
          </Badge>
          <h1 className="text-center text-dark text-base font-bold mt-6">
            Free delivery on all orders over <span className="text-secondary">$25</span>
          </h1>
          <p className=" text-gray text-center  text-sm mt-2">
            It is a limited time offer that will expire soon.
          </p>
          <button className="bg-primary text-light  flex items-center mt-8 px-8 py-3  rounded-lg hover:opacity-90  font-bold">
            Order Now
            <LongArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="absolute w-9/12 h-full bg-white ads rounded-xl z-10 -bottom-3" ></div>
        <div className="absolute w-7/12 h-full bg-white ads rounded-xl z-0 -bottom-5"></div>
      </div>
      {/*Adds block End*/}
      <div className="flex-grow"></div>
      {/*Profile block*/}
      <Link href="/auth/signout">
        <div className="cursor-pointer sm:hidden md:block lg:hidden"><SignoutIcon className=" w-6 h-6 text-gray" /></div>
        </Link>
        <div className=" mt-12 mb-4 w-full px-4 flex items-center box-border relative cursor-pointer">
          <Avatar img="/img/user.svg" className="bg-tertiary" />
          <div className=" sm:flex md:hidden lg:flex flex flex-col ml-5">
            <h1 className="text-sm text-dark font-bold">{localStorage.getItem("email").split('@')[0]}</h1>
            <p className=" text-gray text-xs">{localStorage.getItem("email")}</p>
          </div>
          <div className="flex-grow"></div>
          <div className="sm:flex md:hidden lg:flex flex flex-col">
            <ArrowTopIcon className="w-4 h-4" />
            <ArrowDownIcon className="w-4 h-4 " />
          </div>
        </div>
      {/*Profile block End*/}
    </nav>
  )
}

export default SideBar
