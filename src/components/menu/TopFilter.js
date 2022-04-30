import React from 'react'
import ArrowTopDownIcon from '../icons/ArrowTopDownIcon';

const TopFilter = ({ variant, icon, title, placeholder }) => {
    switch (variant) {
        case "lg":
            return (
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {icon}
                        <span className="ml-6 text-sm text-dark font-bold">{title}</span>
                    </div>
                    <div className="flex items-center text-gray-normal ">
                        <span className="ml-3 text-sm ">{placeholder}</span>
                        <ArrowTopDownIcon className="w-4 h-4 ml-1"/>
                    </div>
                </div>
            );
        case "md":
            return (
                <div className="flex items-center space-x-1">
                    {icon}
                    <span className="ml-3 text-sm font-semibold text-dark">{placeholder}</span>
                    <ArrowTopDownIcon className="w-4 h-4 ml-1"/>
                </div>
            )
    }

}

export default TopFilter
