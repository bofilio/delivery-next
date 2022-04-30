import React, { FC, ReactNode } from 'react'
import { colorType } from '../../@types';

type AlertProps={
    className?:string;
    color:colorType;
    children?:ReactNode
}

const Alert =(props:AlertProps)=>{
    const {className, color, children}=props
    return (
        <div className={`${className ? className : " absolute flex justify-center  top-0 left-0 width w-full "}`}>
           <div className={`w-full flex justify-center items-center bg-${color}  text-${color} p-3 rounded`}>
               {children}
           </div>
        </div>
    )
}

export default Alert