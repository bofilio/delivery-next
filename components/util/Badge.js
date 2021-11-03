import React from 'react'

const Badge = ({ children, text, variant, color, className }) => {
            return (
                <span className={className + " bg-tr-" + color + " text-" + color}>
                    {text}{children}
                </span>
            );
        

}

export default Badge
