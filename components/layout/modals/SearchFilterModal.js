import React from 'react'
import CloseModal from '../../modals/CloseModal'
import CloseIcon from '../../icons/CloseIcon'
import StartIcon from '../../icons/StarIcon'
import FireIcon from '../../icons/FireIcon'
import Badge from '../../util/Badge'
import ClockIcon from '../../icons/ClockIcon'
import ModalTitle from '../../modals/ModalTitle'
import Modal from '../../modals/Modal'
const SearchFilterModal = () => {
    return (
        <Modal className="fixed flex justify-end top-0 left-0 w-full h-full items-center z-40">
            <div className="relative text-dark flex flex-col justify-between bg-white h-full w-full overflow-y-auto max-w-sm rounded-l-3xl md:p-8 p-2">

                <div className="space-y-8">
                    <ModalTitle title="Search filters" />
                    {/**Sorting */}
                    <div className="space-y-8">
                        <h1 className="text-xl font-semibold">Sort by</h1>
                        <div className="flex flex-col space-y-6 px-2">
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
                    <div className="space-y-8">
                        <h1 className="text-xl font-semibold">Price range</h1>
                        <div className=" flex justify-center space-x-6   px-2">
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
                    <div className="space-y-8">
                        <h1 className="text-xl font-semibold">Categories</h1>
                        <div className="flex flex-wrap text-sm ">
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
                </div>
                {/**Bottom btns */}
                <button className="mt-6 text-lg px-8 py-4 bg-primary text-light rounded-xl ">
                    Applay filters
                </button>

            </div>
        </Modal>
        
    )
}

export default SearchFilterModal
