import React from 'react'

const Badge = ({ children, color, className }) => {
            return (
                <div className={`${className} inline-block bg-tr-${color} text-${color}`}>
                    {children}
                </div>
            );
        

}

export default Badge
