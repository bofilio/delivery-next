import React from 'react'
import CloseModal from './CloseModal'
import CloseIcon from '../icons/CloseIcon'
import CreditCardIcon from '../icons/CreditCardIcon'
import HDotes from '../icons/HDotes'
import StartIcon from '../icons/StartIcon'
import AddUserIcon from '../icons/AddUserIcon'
const OderDetails = () => {
    return (
        <div className="relative text-dark flex flex-col  bg-white h-full w-full overflow-y-auto max-w-sm rounded-l-3xl p-8">
            <CloseModal className=" z-50 absolute top-8 right-8 ">
                <div className=" bg-light p-2 rounded-lg ">
                    <CloseIcon className="fill-current w-6 h-6" />
                </div>
            </CloseModal>
            <h1 className="text-2xl font-bold  pt-2">Order details</h1>
            {/**delivery dist */}
            <div className=" mt-14 flex space-y-1 font-bold flex-col">
                <span className="text-secondary uppercase  text-xs">Delivered to</span>
                <span className=" font-semibold">300 Post Street San Francisco, CA</span>
            </div>

            {/**Ordered items */}
            <div className="mt-12">
                <h1 className="text-xl font-semibold">Pizza Hut</h1>
                <div className="mt-8 flex flex-col space-y-6  text-xs px-2">
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center justify-center text-gray bg-light rounded-md w-8 h-8 font-semibold"> 1 </span>
                            <span className="text-dark font-semibold">Large Pizza</span>
                        </div>
                        <span className="text-gray"> $23</span>
                    </div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center justify-center text-gray bg-light rounded-md w-8 h-8 font-semibold"> 1 </span>
                            <span className="text-dark font-semibold">Medium Fries</span>
                        </div>
                        <span className="text-gray"> $4</span>
                    </div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center justify-center text-gray bg-light rounded-md w-8 h-8 font-semibold"> 1 </span>
                            <span className="text-dark font-semibold">Coca Cola</span>
                        </div>
                        <span className="text-gray"> $3</span>
                    </div>
                </div>
            </div>

            {/**payment detail Order */}
            <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className=" text-xl text-dark font-semibold">Subtotal</h1>
                    <span className="text-gray"> $30</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className=" text-xl text-dark font-semibold">Delivery fee</h1>
                    <span className="text-gray"> $4</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className=" text-xl text-dark font-semibold">Total</h1>
                    <span className="text-secondary font-semibold"> $34</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className=" text-xl text-dark font-semibold">Credit card</h1>
                    <div className="flex items-center text-gray space-x-2">
                        <CreditCardIcon className="w-6 h-6" />
                        <HDotes className="w-6 h-6" />
                        <span>1211</span>
                    </div>
                </div>
            </div>
            {/**Review Order */}
            <div className="mt-12 space-y-8">
                <h1 className="text-xl font-semibold">Review your order</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <StartIcon className="w-8 h-8 text-tertiary" />
                        <StartIcon className="w-8 h-8 text-tertiary" />
                        <StartIcon className="w-8 h-8 text-tertiary" />
                        <StartIcon className="w-8 h-8 text-tertiary" />
                        <StartIcon className="w-8 h-8 text-gray" />
                    </div>
                    <button className="text-light font-semibold bg-primary py-2 px-4 rounded-xl">Submit</button>
                </div>
            </div>
            {/**Bottom btns */}
            <div className="flex space-x-4 mt-24 text-sm ">
                <button className="px-8 py-4 bg-tertiary  rounded-lg ">
                    <AddUserIcon className="w-6 h-6 text-dark" />
                </button>
                <button className="px-8 py-4 bg-primary text-light rounded-lg flex-grow">
                    Place new order
                </button>
            </div>



        </div>
    )
}

export default OderDetails
