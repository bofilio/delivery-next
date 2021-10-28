import React from 'react'

const FoodOffer = () => {
    return (
        <div className="flex flex-col lg:w-80 w-full flex-shrink-0">
            <img className="w-full lg:h-44 h-auto rounded-2xl" src="/media/salade.png" alt="" />
            <div className="mt-4 flex items-center justify-between">
                <h1 className=" text-base text-gray-900 font-bold">Spicy Na Thai Town</h1>
                <span className="text-xs text-purple-900 bg-purple-200 rounded font-semibold py-1 px-2">Free delivery</span>
            </div>
        </div>
    )
}

export default FoodOffer
