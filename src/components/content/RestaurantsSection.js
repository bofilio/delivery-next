import React from 'react'

const RestaurantsSection = ({children}) => {
    return (
        <section className="flex flex-row  flex-nowrap lg:flex-col lg:flex-wrap   lg:max-h-72 overflow-x-auto">
            {children}
        </section>
    )
}

export default RestaurantsSection
