import React from 'react'
import Modal from '../../components/util/Model'
import OpenModal from '../../components/util/OpenModal.js'
import { ModalProvider } from '../../contexts/ModalContext'
import OderTracker from './OderTracker'
const OrderCard = () => {
    return (
        <div className="flex flex-col justify-between lg:w-80 w-full p-4 rounded-2xl bg-light lg:mr-8 mr-0 lg:mb-8 mb-6">
            <div className="flex items-center justify-between">
                <h4 className="text-dark font-bold">Burger King</h4>
                <span className="text-gray text-sm">#1DF90E0</span>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4 text-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex flex-col">
                        <span className=" text-sm">Estimated arrival</span>
                        <h1 className="text-dark text-3xl font-bold">60 min</h1>
                    </div>
                </div>
                <ModalProvider>
                    <OpenModal>
                        <button className="px-3 py-2 bg-primary text-light rounded-lg">Track</button>
                    </OpenModal>
                    <Modal className="fixed flex justify-end top-0 left-0 w-full h-full   items-center z-40">
                        <OderTracker/>
                    </Modal>

                </ModalProvider>
            </div>
            {/**component */}
            <div className="mt-6 flex items-center bg-gray-32 rounded-sm">
                <div className="flex  w-2/12 pr-1" >
                    <span className="h-1 w-full bg-secondary rounded-sm"></span>
                </div>
                <div className="flex w-3/12 pr-1" >
                    <span className="h-1 w-full bg-secondary rounded-sm"></span>
                </div>
                <div className="flex w-7/12 " >
                    <span className="h-1 w-1/2 bg-secondary rounded-sm"></span>
                </div>
            </div>
        </div>

    )
}

export default OrderCard
