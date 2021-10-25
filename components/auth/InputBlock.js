import React from 'react'

const InputBlock = ({icon,label,default_value}) => {
    return (
        <div className="flex items-center mb-12">
            <div className="  w-16 h-16 bg-purple-100 flex items-center justify-center rounded-2xl">
                {icon}
            </div>
            <div className="flex flex-col pl-6 h-20 border-b-2 border-gray-50 justify-around flex-grow ">
                <label className="text-xs text-gray-900 font-bold" htmlFor="fullname">{label}</label>
                <input className="w-full text-xl text-gray-500 focus:outline-none" name="fullname" type="text"
                    value={default_value} onChange={() => { }} />
            </div>
        </div>
    )
}

export default InputBlock
