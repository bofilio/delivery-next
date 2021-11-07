import React from 'react'
import Link from "next/link"
const Category = ({ icon, color, title, options_number }) => {
    return (
        <Link href={`/explore/category/${title}`}>
            <div className="flex flex-col items-center w-36 flex-shrink-0 p-6 bg-light rounded-xl mb-8 cursor-pointer">
                <div className={`bg-${color} w-12 h-12 p-3 text-light rounded-xl`}>
                    {icon}
                </div>
                <h1 className="text-base text-dark font-bold mt-4">{title}</h1>
                <h6 className="text-gray text-center">{options_number}+ options</h6>
            </div>
        </Link>
    )
}
export default Category
