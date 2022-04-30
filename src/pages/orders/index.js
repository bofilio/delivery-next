import React from 'react'
import OrderCard from '../../components/orders/OrderCard'
import PreviousOrder from '../../components/orders/PreviousOrder'
import SectionHead from '../../components/util/SectionHead'

const index = () => {
    return (
        <>
            <SectionHead title="Upcoming orders" />
            <section className="flex items-center flex-wrap">
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </section>
            <SectionHead title="Previous orders" />
            <section className="flex items-stretch flex-wrap">
                <PreviousOrder/>
                <PreviousOrder/>
                <PreviousOrder/>
                <PreviousOrder/>
                <PreviousOrder/>
            </section>
        </>
    )
}

export default index
