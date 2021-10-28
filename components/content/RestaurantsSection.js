import React from 'react'

const RestaurantsSection = ({children}) => {
    return (
        <section className="flex flex-row lg:flex-col flex-nowrap lg:flex-wrap   lg:max-h-72 overflow-x-auto">
            {children}
        </section>
    )
}

export default RestaurantsSection
