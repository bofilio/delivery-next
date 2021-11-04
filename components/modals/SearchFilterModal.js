import React from 'react'
import CloseModal from './CloseModal'
import CloseIcon from '../icons/CloseIcon'
import CreditCardIcon from '../icons/CreditCardIcon'
import HDotes from '../icons/HDotes'
import StartIcon from '../icons/StartIcon'
import AddUserIcon from '../icons/AddUserIcon'
import FireIcon from '../icons/FireIcon'
import Badge from '../util/Badge'
import ClockIcon from '../icons/ClockIcon'
const SearchFilterModal = () => {
    return (
        <div className="relative text-dark flex flex-col  bg-white h-full w-full overflow-y-auto max-w-sm rounded-l-3xl p-8">
            <CloseModal className=" z-50 absolute top-8 right-8 ">
                <div className=" bg-light p-2 rounded-lg ">
                    <CloseIcon className="fill-current w-6 h-6" />
                </div>
            </CloseModal>
            <h1 className="text-2xl font-bold  pt-2">Search filters</h1>

            {/**Sorting */}
            <div className="mt-12">
                <h1 className="text-xl font-semibold">Sort by</h1>
                <div className="mt-8 flex flex-col space-y-6   px-2">
                    <div className="flex items-center space-x-4">
                        <Badge color="secondary" className="flex items-center justify-center rounded-xl p-3 ">
                            <FireIcon className="w-6 h-6" />
                        </Badge>
                        <span className="text-dark font-semibold">Most popular</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Badge color="gray" className="flex items-center justify-center rounded-xl p-3 ">
                            <ClockIcon className="w-6 h-6" />
                        </Badge>
                        <span className="text-dark font-semibold">Delivery time</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Badge color="gray" className="flex items-center justify-center rounded-xl p-3 ">
                            <StartIcon className="w-6 h-6" />
                        </Badge>
                        <span className="text-dark font-semibold">Rating</span>
                    </div>
                </div>
            </div>
            {/**Price Filtering */}
            <div className="mt-12">
                <h1 className="text-xl font-semibold">Price range</h1>
                <div className="mt-8 flex justify-center space-x-6   px-2">

                    <Badge color="secondary" className="flex items-center justify-center rounded-xl p-4 flex-grow ">
                        <span className="text-xl">$</span>
                    </Badge>


                    <Badge color="gray" className="flex items-center justify-center rounded-xl p-4 flex-grow">
                        <span className="text-xl">$$</span>
                    </Badge>


                    <Badge color="gray" className="flex items-center justify-center rounded-xl p-4 flex-grow">
                        <span className="text-xl">$$$</span>
                    </Badge>

                </div>
            </div>

            {/**payment detail Order */}
            <div className="mt-12">
                <h1 className="text-xl font-semibold">Categories</h1>
                <div className="mt-8 flex flex-wrap text-sm ">
                    <Badge color="secondary" className="rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>Burger</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span >Fast food</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>American food</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>Pizza</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>Asian</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>Desert</span>
                    </Badge>
                    <Badge color="gray" className="  rounded-lg px-3 py-2 mr-2 mb-2">
                        <span>Mexican</span>
                    </Badge>
                </div>
            </div>
            {/**Bottom btns */}
            
                <button className=" mt-12 text-lg px-8 py-4 bg-primary text-light rounded-xl flex-grow">
                    Applay filters
                </button>


        </div>
    )
}

export default SearchFilterModal
