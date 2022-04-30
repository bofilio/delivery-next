import React from 'react'
import { colorType } from '../../@types'

type InputBlockProps={
    name:string 
    icon?:JSX.Element 
    label:string
    default_value?:any
    type:any
    placeholder?:string 
    color:colorType
    variant:"sm"|"md"
}
const InputBlock = (props:InputBlockProps) => {
    const {name,icon,label,default_value,type,placeholder,color, variant}=props
    switch(variant){
        case "sm":
            return (
                <div className="flex items-center">
                    <div className={`bg-tr-${color} text-${color} w-12 h-12 flex items-center justify-center rounded-2xl`}>
                        {icon}
                    </div>
                    <div className="flex flex-col pl-6 h-16 border-b-2 border-light justify-around flex-grow ">
                        <label className="text-xs text-dark font-bold uppercase" htmlFor={name}>{label}</label>
                        <input name={name} className="w-full text-gray-normal focus:outline-none"  type={type}
                            placeholder={placeholder} defaultValue={default_value} onChange={() => { }} />
                    </div>
                </div>
            );break;
            
        case "md":
            return (
                <div className="flex items-center">
                    <div className={`bg-tr-${color} text-${color} w-16 h-16 flex items-center justify-center rounded-2xl`}>
                        {icon}
                    </div>
                    <div className="flex flex-col pl-6 h-16 border-b-2 border-light justify-around flex-grow ">
                        <label className="text-xs text-dark font-bold uppercase" htmlFor={name}>{label}</label>
                        <input name={name} className="w-full text-gray-normal focus:outline-none"  type={type}
                            placeholder={placeholder} defaultValue={default_value} onChange={() => { }} />
                    </div>
                </div>
            );break;

        default:
            return(
                <div>Specify variant[sm, md,..]</div>
            )

    }
   
}

export default InputBlock
