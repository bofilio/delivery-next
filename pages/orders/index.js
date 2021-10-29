import React from 'react'
import OrderCard from '../../components/content/OrderCard'
import SectionHead from '../../components/content/SectionHead'

const index = () => {
    return (
        <>
            <SectionHead title="Upcoming orders" />
            <section className="flex items-center flex-wrap">
               <OrderCard/>
               <OrderCard/>
               <OrderCard/>
            </section>
            <SectionHead title="Previous orders" />
        </>
    )
}

export default index
