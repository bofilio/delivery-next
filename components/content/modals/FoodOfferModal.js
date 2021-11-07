import React from 'react'
import CloseIcon from '../../icons/CloseIcon'
import LoveIcon from '../../icons/loveIcon'
import MinusIcon from '../../icons/MinusIcon'
import PlusIcon from '../../icons/PlusIcon'
import CloseModal from '../../modals/CloseModal'
import Modal from '../../modals/Modal'
import Badge from '../../util/Badge'

const FoodOfferModal = ({ name }) => {
    return (
        <Modal className="fixed top-0 left-0 w-full h-full   items-center justify-center z-40">
            <div className="  flex flex-col text-dark bg-white h-full w-full max-w-sm shadow-lg z-50  rounded-2xl overflow-y-auto">
                <div className="relative h-52 flex-shrink-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(/media/food.png)` }}>
                    <CloseModal className=" z-50 absolute top-8 right-8 ">
                        <div className="bg-white p-2 rounded-lg">
                            <CloseIcon className="fill-current text-dark w-6 h-6" />
                        </div>
                    </CloseModal>
                    <button className=" z-50 absolute bg-white p-2 bg-primary rounded-lg top-8 left-8 ">
                        <LoveIcon className="fill-current text-light w-6 h-6" />
                    </button>
                </div>
                <div className="p-8 space-y-7">
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold">Char-Broiled Chicken Shish</h1>
                        <p className="text-gray text-sm">
                            Served with basmati rice, brown rice or bulgur pilaf,
                            skewered with grilled vegetables
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-secondary font-semibold">Rice choice</span>
                        <button className="bg-primary text-light text-sm py-1 px-2 rounded-md">Required</button>
                    </div>

                    <form className="flex flex-col mt-6  ">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 ">
                                <input className="w-6 h-6 text-primary" checked type="checkbox" onChange={() => { }} />
                                <label>Basmati rice</label>
                            </div>
                            <div className="flex items-center space-x-4 text-dark font-semibold">
                                <input className="w-6 h-6" type="checkbox" onChange={() => { }} />
                                <label>Brown rice</label>
                            </div>
                            <div className="flex items-center space-x-4 ">
                                <input className="w-6 h-6" type="checkbox" onChange={() => { }} />
                                <label>Bulgur Pilaf</label>
                            </div>
                        </div>
                    </form>

                    <div className="flex items-center space-x-6">
                        <Badge color="primary" className="p-3 rounded-lg">
                            <PlusIcon className="w-5 h-5" />
                        </Badge>
                        <h5 className='text-primary font-bold'>Add special instructions</h5>
                    </div>

                    <div className="flex  space-x-4 mt-6 text-sm ">
                        <div className=" flex items-center space-x-3 px-3 py-4 bg-light  text-dark rounded-lg ">
                            <button>
                                 <MinusIcon className="w-5 h-5" />
                            </button>
                            <span className="text-lg font-semibold">
                               {1} 
                            </span>
                            <button>
                                <PlusIcon className="w-5 h-5" />
                            </button>
                            
                        </div>
                        <button className="px-8 py-4 bg-primary text-light font-bold rounded-lg flex-grow">
                            Add  <span className="font-normal text-xs">(15,00$)</span>
                        </button>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default FoodOfferModal
