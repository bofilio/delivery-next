import React from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import CalandarIcon from '../icons/CalandarIcon'
import ClockIcon from '../icons/ClockIcon'
import Modal from '../../components/modals/Modal'
import OpenModal from '../../components/modals/OpenModal'
import { ModalProvider } from '../../contexts/ModalContext'
import OrderDetailsModal from './modals/OrderDetailsModal'
const PreviousOrder = () => {
    return (
        <div className="p-4 flex flex-col justify-between lg:w-80 w-full text-text-light lg:mr-8 mr-0 lg:mb-8 mb-6 rounded-2xl">
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <h4 className=" text-dark font-bold"> Pizza Hut</h4>
                    <span className="px-2 py-1 bg-transparent-success text-xs text-success rounded-md font-semibold"> Completed</span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-normal mt-3">
                    <div className="flex items-center space-x-2">
                        <CalandarIcon className="w-4 h-4" />
                        <span>September 16, 2020</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>11:54 PM</span>
                    </div>
                </div>
                <div className="mt-6 flex flex-col space-y-3 font-bold text-xs px-2">
                    <div className="flex items-center space-x-4 ">
                        <span className="text-gray-normal">1</span>
                        <span className="text-dark ">Delicious Cheese Pie</span>
                    </div>
                    <div className="flex items-center space-x-4 ">
                        <span className="text-gray-normal">1</span>
                        <span className="text-dark ">Peperoni Pie</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-xs text-primary font-semibold mt-3">
                    <span>2 More items</span>
                    <ArrowDownIcon className="w-4 h-4 " />
                </div>

            </div>
            <ModalProvider>
                <div className="flex items-center justify-center space-x-4 mt-6 text-sm ">
                    <OpenModal className="flex-grow px-4 text-center py-2 bg-secondary text-text-light rounded-lg  font-bold">
                        Details
                    </OpenModal>

                    <OrderDetailsModal />
                    <button className="px-4 py-2 bg-transparent-secondary text-secondary rounded-lg flex-grow font-bold"> Get help</button>
                </div>
            </ModalProvider>
        </div>
    )
}

export default PreviousOrder
