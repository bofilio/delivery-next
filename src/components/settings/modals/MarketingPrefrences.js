import React from 'react'
import ModalTitle from '../../modals/ModalTitle'
import Modal from '../../modals/Modal'
const MarketingPrefrences = () => {
    return (
        <Modal className="fixed top-0 left-0 w-full h-full   items-center justify-center z-40">
            <div className=" relative flex flex-col text-dark bg-white w-full max-w-sm shadow-lg z-50 p-8 rounded-2xl overflow-y-auto">
                <ModalTitle title="Saved addresses" />
                <div className="mt-6 flex-grow flex-col">
                    <form className="flex flex-col mt-6 text-gray-normal ">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 ">
                                <input className="w-6 h-6" type="checkbox" onChange={() => { }} />
                                <label>Promotional emails</label>
                            </div>
                            <div className="flex items-center space-x-4 text-dark font-semibold">
                                <input className="w-6 h-6" type="checkbox" checked checked onChange={() => { }} />
                                <label>Monthely newsletter</label>
                            </div>
                            <div className="flex items-center space-x-4 ">
                                <input className="w-6 h-6" type="checkbox" onChange={() => { }} />
                                <label>FeedBack collection</label>
                            </div>
                            <div className="flex items-center space-x-4 text-dark font-semibold">
                                <input className="w-6 h-6" type="checkbox" checked onChange={() => { }} />
                                <label>Discount & Offers</label>
                            </div>

                        </div>
                        <button className="mt-12  p-3 text-text-light font-semibold text-lg bg-primary rounded-xl ">Update prefrences</button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default MarketingPrefrences
