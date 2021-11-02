import React from 'react'
import CloseModal from '../util/CloseModal'
import ClockIcon from '../icons/ClockIcon'
import MapIcon from '../icons/MapIcon'
import CheckIcon from '../icons/CheckIcon'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import MessageIcon from '../icons/MessageIcon'
import CloseIcon from '../icons/CloseIcon'
const OderTracker = () => {
    return (
        <div className="relative flex flex-col  bg-light h-full w-full overflow-y-auto max-w-sm rounded-l-3xl">
            <CloseModal className=" z-50 absolute top-8 right-8 ">
                <div className="bg-white p-2 rounded-lg">
                    <CloseIcon className="fill-current text-dark w-6 h-6" />
                </div>

            </CloseModal>
            <img className="w-full h-1/2" src="/img/Map.png" alt="" />
            <div className="flex-grow flex flex-col justify-between p-4">
                <div className="flex flex-col">
                    <div className="flex items-center justify-center space-x-6">
                        {/**Component */}
                        <div className="flex items-center space-x-4 text-gray">
                            <ClockIcon className="w-8 h-8 text-secondary" />
                            <div className="flex flex-col">
                                <span className=" text-sm">Estimated arrival</span>
                                <h1 className="text-dark text-2xl font-bold">60 min</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-gray">
                            <MapIcon className="w-8 h-8 text-tertiary" />
                            <div className="flex flex-col">
                                <span className=" text-sm">Distance</span>
                                <h1 className="text-dark text-2xl font-bold">3.6 km</h1>
                            </div>
                        </div>
                    </div>
                    {/**component */}
                    <div className="mt-6 flex items-center bg-gray-32 rounded-sm">
                        <div className="flex  w-2/12 pr-1" >
                            <span className="w-full bg-secondary rounded-sm" style={{ height: '6px' }}></span>
                        </div>
                        <div className="flex w-3/12 pr-1" >
                            <span className="w-full bg-secondary rounded-sm" style={{ height: '6px' }}></span>
                        </div>
                        <div className="flex w-7/12 " >
                            <span className="w-1/2 bg-secondary rounded-sm" style={{ height: '6px' }}></span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col space-y-6  text-xs px-2">
                    <div className="flex items-center space-x-4 ">
                        <span className="text-gray p-1"><ClockIcon className="w-5 h-5 text-gray" /></span>
                        <span className="text-dark ">Delivered</span>
                    </div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray bg-tr-secondary p-1"> <CheckIcon className="w-5 h-5 text-secondary" /> </span>
                            <span className="text-dark font-bold">On the way</span>
                        </div>
                        <span className="text-gray"> 12:48 am</span>
                    </div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray bg-tr-secondary p-1"> <CheckIcon className="w-5 h-5 text-secondary" /> </span>
                            <span className="text-dark font-bold">Food is ready</span>
                        </div>
                        <span className="text-gray"> 12:42 am</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-primary font-semibold mt-3">
                        <span>See more</span>
                        <ArrowDownIcon className="w-4 h-4 " />
                    </div>
                    <div className="flex  space-x-4 mt-6 text-sm ">
                        <button className="px-8 py-4 bg-tr-primary text-primary rounded-lg ">
                            <MessageIcon className="w-6 h-6" />
                        </button>
                        <button className="px-8 py-4 bg-primary text-light rounded-lg flex-grow">
                            <span className="font-bold">Call to </span> (Edward)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OderTracker
