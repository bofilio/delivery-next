import React from 'react'

const Category = ({icon,color,title,options_number}) => {
    return (
        <div className="flex flex-col items-center w-40 p-6 bg-gray-200 rounded-xl">
            <div className="w-12 h-12 p-3 text-gray-100 rounded-xl" style={{backgroundColor:color}}>
                {icon}
            </div>
            <h1 className="text-base text-gray-800 font-bold mt-4">{title}</h1>
            <span className="text-gray-500">{options_number}+ options</span>
        </div>
    )
}

export default Category
