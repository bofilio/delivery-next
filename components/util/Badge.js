import React from 'react'

const Badge = ({ children, color, className }) => {
            return (
                <span className={`${className} bg-tr-${color} text-${color}`}>
                    {children}
                </span>
            );
        

}

export default Badge
