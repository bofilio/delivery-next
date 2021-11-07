import React from 'react'
import Badge from '../util/Badge'
import DeleteIcon from '../icons/DeleteIcon'
const CartItem = ({img,title,price,amount}) => {
    return (
        <div className="flex  space-x-4">
        <div className="flex items-center space-x-4">
            <img src={img} className="h-16 w-24" alt="imgitem" />
            <span className="text-xs text-gray">{amount}X</span>
        </div>
        <div className="flex flex-col justify-around flex-grow">
            <h5 className="text-dark font-semibold">{title}</h5>
            <p className="text-sm text-gray">{price}</p>
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
