import React from 'react'

const InputBlock = ({icon,label,default_value,type,placeholder}) => {
    return (
        <div className="flex items-center mb-12">
            <div className="  w-16 h-16 bg-tr-primary flex items-center justify-center rounded-2xl">
                {icon}
            </div>
            <div className="flex flex-col pl-6 h-20 border-b-2 border-light justify-around flex-grow ">
                <label className="text-xs text-dark font-bold" htmlFor="fullname">{label}</label>
                <input className="w-full text-xl text-gray focus:outline-none" name="fullname" type={type}
                    placeholder={placeholder} defaultValue={default_value} onChange={() => { }} />
            </div>
        </div>
    )
}

export default InputBlock
