import React from 'react'

const FoodSection = ( {children}) => {
    return (
        <section className="flex flex-wrap items-center bg-white">
            {children}    
        </section>
    )
}

export default FoodSection
