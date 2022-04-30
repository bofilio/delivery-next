import React from 'react'
import Badge from '../util/Badge'
import DeleteIcon from '../icons/DeleteIcon'

type CartItemProps = {
    img: string
    title: string
    price: number
    amount: number
}

const CartItem = (props:CartItemProps) => {
    const { img, title, price, amount }=props
    return (
        <div className="flex  space-x-4">
            <div className="flex items-center space-x-4">
                <img src={img} className="h-16 w-24" alt="imgitem" />
                <span className="text-xs text-gray-normal">{amount}X</span>
            </div>
            <div className="flex flex-col justify-around flex-grow">
                <h5 className="text-dark font-semibold">{title}</h5>
                <p className="text-sm text-gray-normal">{price}</p>
            </div>
            <button>
                <Badge className="p-2 rounded-lg flex items-center" color="error">
                    <DeleteIcon className="w-6 h-6" />
                </Badge>
            </button>
        </div>
    )
}

export default CartItem
