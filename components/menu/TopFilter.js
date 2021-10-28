import React from 'react'

const TopFilter = ({ variant, icon, title, placeholder }) => {
    switch (variant) {
        case "lg":
            return (
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {icon}
                        <span className="ml-6 text-sm font-bold">{title}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="ml-3 text-sm ">{placeholder}</span>
                        <svg className="w-4 h-4 ml-4 text-gray-700" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.175 10L8 13.7116L11.825 10L13 11.1482L8 16L3 11.1482L4.175 10Z" fill="currentColor" />
                            <path d="M11.825 6L8 2.28841L4.175 6L3 4.85175L8 0L13 4.85175L11.825 6Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            );
        case "md":
            return (
                <div className="flex items-center">
                    {icon}
                    <span className="ml-3 text-sm font-semibold">{placeholder}</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.175 10L8 13.7116L11.825 10L13 11.1482L8 16L3 11.1482L4.175 10Z" fill="black" />
                        <path d="M11.825 6L8 2.28841L4.175 6L3 4.85175L8 0L13 4.85175L11.825 6Z" fill="black" />
                    </svg>
                </div>
            )
    }

}

export default TopFilter
