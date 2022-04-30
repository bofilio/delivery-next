import React from 'react'
import CloseModal from '../../modals/CloseModal'
import CloseIcon from '../../icons/CloseIcon'
import StartIcon from '../../icons/StarIcon'
import FireIcon from '../../icons/FireIcon'
import Badge from '../../util/Badge'
import ClockIcon from '../../icons/ClockIcon'
import ModalTitle from '../../modals/ModalTitle'
import ArrowRight from '../../icons/ArrowRight'
import DeleteIcon from '../../icons/DeleteIcon'
import CartItem from '../../cart/CartItem'
import PlusIcon from '../../icons/PlusIcon'
import DiscountIcon from '../../icons/DiscountIcon'
import BycicalIcon from '../../icons/BycicalIcon'
import Modal from '../../modals/Modal'
import AddUserIcon from '../../icons/AddUserIcon'
const CartModal = () => {
    return (
        <Modal className="fixed flex justify-end top-0 left-0 w-full h-full items-center z-40">
            <div className="relative text-dark flex flex-col justify-between bg-white h-full w-full overflow-y-auto max-w-sm rounded-l-3xl md:p-8 p-2">
                <div className="space-y-8">
                    <ModalTitle title={`My cart`} />
                    <div className="flex items-center justify-between">
                        <div>
                            <h6 className="uppercase font-semibold text-secondary text-xs"> Deliver to </h6>
                            <h5 className="text-dark font-semibold">300 post street San Frncisco , CA</h5>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-normal" />
                    </div>
                    {/**itmes */}
                    <div className="space-y-8">
                        <h1 className="text-xl font-semibold">Pizza Hut</h1>
                        <div className="flex flex-col space-y-6 md:px-2 px-0">
                            <CartItem title="Pepironi Pie" img="/media/cart1.png" price="23$" amount="1" />
                            <CartItem title="Cheese Pie" img="/media/cart2.png" price="15$" amount="2" />
                            <div className="flex items-center text-primary font-bold">
                                <PlusIcon className="w-4 h-4" />
                                <span>Add more itmes</span>
                            </div>
                        </div>
                    </div>
                    {/**Options */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Badge color="tertiary" className="flex items-center justify-center rounded-xl py-2 px-6 ">
                                <BycicalIcon className="w-10 h-10" />
                            </Badge>
                            <div className="flex flex-col justify-around">
                                <h5 className="text-dark font-semibold">Delivery</h5>
                                <span>0$</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge color="gray" className="flex items-center justify-center rounded-xl py-2 px-6 ">
                                <DiscountIcon className="w-10 h-10" />
                            </Badge>
                            <div className="flex-grow flex flex-col justify-around">
                                <h5 className="text-dark font-semibold">Promo code</h5>
                                <span className="text-sm text-gray-normal">HXFWO</span>
                            </div>
                            <button className="p-3 bg-primary rounded-lg">
                                <PlusIcon className="w-5 h-5 text-text-light" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mt-6 flex space-x-4 text-sm ">
                    <button className="px-8 py-4 bg-warning  rounded-lg ">
                        <AddUserIcon className="w-6 h-6 text-dark" />
                    </button>
                    <button className=" px-8 py-4 bg-primary font-semibold text-lg text-text-light rounded-lg flex-grow">
                        Checkout <span className="ml-1 text-xs font-normal"> ($53.00)</span>
                    </button>
                </div>
            </div>
        </Modal>

    )
}

export default CartModal
