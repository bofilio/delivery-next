import React from 'react'
import Badge from './Badge'

const Alert = ({className, color, children}) => {
    return (
        <div className={`${className ? className : " absolute flex justify-center  top-0 left-0 width w-full "}`}>
           <div className={`w-full flex justify-center items-center bg-tr-${color}  text-${color} p-3 rounded`}>
               {children}
           </div>
        </div>
    )
}

export default Alert