import React from 'react'
import { colorType } from '../../@types'

type InputBlockProps={
    icon?:JSX.Element 
    label:string
    color:colorType
    variant:"sm"|"md"
}&React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const InputBlock = (props:InputBlockProps) => {
    const {icon,label,color,variant, ...rest}=props
    switch(variant){
        case "sm":
            return (
                <div className="flex items-center">
                    <div className={`bg-tr-${color} text-${color} w-12 h-12 flex items-center justify-center rounded-2xl`}>
                        {icon}
                    </div>
                    <div className="flex flex-col pl-6 h-16 border-b-2 border-light justify-around flex-grow ">
                        <label className="text-xs text-dark font-bold uppercase" htmlFor={props.name}>{label}</label>
                        <input {...rest} />
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
                        <label className="text-xs text-dark font-bold uppercase" htmlFor={props.name}>{label}</label>
                        <input {...rest} />
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
