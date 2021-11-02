import React from 'react'

const Badge = ({text, variant,color, className}) => {
    switch(variant)
    {
        case "small":
            return(
                <span className={className+" text-xs rounded-md py-1 px-2"+ " bg-tr-"+color + " text-"+color}>
                    {text}
                </span>
            )         
        default:
            return(
                <span className={className+ " text-xs rounded-md py-1 px-2"+ " bg-tr-"+color + " text-"+color}>
                    {text}
                </span>
            ) 
    }
    
}

export default Badge
