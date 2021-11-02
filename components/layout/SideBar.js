import React from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import SideBarMenuItem from '../menu/SideBarMenuItem'
import SideBareMenu from '../menu/SideBareMenu'
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
          <div className=" bg-tr-error  w-16 h-16  flex items-center justify-center rounded-2xl">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.5261 13.2739C24.9323 13.6856 25.3448 14.1036 25.702 14.5778L25.6146 14.5956C26.191 15.2711 26.6627 16 27.012 16.8178L27.2391 17.28C28.8985 21.3333 27.7631 26.0622 24.619 29.0133C21.8068 31.6444 17.8766 32.3378 14.2085 31.8578C10.7674 31.4133 7.57094 29.2089 5.75434 26.1333C5.19539 25.1911 4.74124 24.1244 4.4967 23.0578C4.19976 22.1689 4.09495 21.28 4.02508 20.3911C3.78054 16.5333 5.33513 12.4444 8.19976 10.0267C6.88972 12.9422 7.20413 16.5867 9.12553 19.1289C9.21286 19.2533 9.28273 19.3422 9.38754 19.4311C9.70195 19.7156 10.1212 19.8222 10.5054 19.6444C10.8548 19.5022 11.1168 19.1467 11.1168 18.7556C11.1168 18.5244 11.0469 18.3467 10.9771 18.1689C8.88098 12.5689 10.6277 6.04444 15.0644 2.34667C16.2871 1.33333 17.7544 0.408889 19.3439 0C17.7544 3.28889 18.2784 7.57333 20.8286 10.1689C21.4251 10.776 22.0832 11.2786 22.7417 11.7816C23.2979 12.2064 23.8545 12.6315 24.3744 13.12C24.4248 13.1713 24.4754 13.2225 24.5261 13.2739ZM18.4006 26.8444C19.012 26.6667 19.798 26.2044 20.2871 25.7778H20.2696C21.3177 24.8 21.929 23.2 21.8766 21.7422C21.8766 21.4756 21.8417 21.2267 21.7718 20.9778C21.4877 19.4047 20.5085 18.5239 19.4933 17.6109C18.9482 17.1206 18.3928 16.6211 17.929 16C17.5273 15.4667 17.1779 14.7911 16.881 14.1156C16.3919 15.3422 16.357 16.4622 16.5666 17.7778C16.6317 18.1706 16.7228 18.5474 16.8125 18.9185C17.0354 19.8406 17.2499 20.7282 17.0382 21.7422C16.6889 23.3244 15.4661 24.8889 13.3875 25.3867C14.5578 26.56 16.4792 27.5556 18.4006 26.8444Z" fill="#FB6D3A" />
            </svg>
          </div>
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
