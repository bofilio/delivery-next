import React from 'react'
import BycicalIcon from '../icons/BycicalIcon'
import DishesIcon from '../icons/DishesIcon'
import StarIcon from '../icons/StarIcon'
import Badge from '../util/Badge'
const FoodOffer = () => {
    return (
        <div className="flex flex-col lg:w-80 w-full flex-shrink-0 lg:p-4 p-0 mb-8 lg:mb-0  ">
            <img className="w-full  h-full rounded-2xl flex-grow" src="/media/salade.png" alt="" />
            <div className="mt-4 flex items-center justify-between">
                <h1 className=" text-base text-dark font-bold">Spicy Na Thai Town</h1>
                <Badge color="primary" className="text-xs rounded font-semibold py-1 px-2">Free delivery</Badge>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2 text-gray text-xs">
                    <StarIcon className="text-tertiary w-4 h4"/>
                    <p> <span>4,8</span>(1,873)</p>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray">
                    <DishesIcon className="w-4 h-4 "/>
                    <span>Burger</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray">
                    <BycicalIcon className="w-4 h-4"/>
                    <span>45 - 55 min</span>
                </div>

            </div>
        </div>
    )
}

export default FoodOffer
