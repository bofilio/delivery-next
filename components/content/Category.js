import React from 'react'

const Category = ({icon,color,title,options_number}) => {
    return (
        <div className="flex flex-col items-center w-36 flex-shrink-0 p-6 bg-gray-200 rounded-xl mb-8">
            <div className="w-12 h-12 p-3 text-gray-100 rounded-xl" style={{backgroundColor:color}}>
                {icon}
            </div>
            <h1 className="text-base text-gray-800 font-bold mt-4">{title}</h1>
            <h6 className="text-gray-500 text-center">{options_number}+ options</h6>
        </div>
    )
}

export default Category
