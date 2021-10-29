import React from 'react'
import OrderCard from '../../components/content/OrderCard'
import PreviousOrder from '../../components/content/PreviousOrder'
import SectionHead from '../../components/content/SectionHead'
import ArrowDownIcon from '../../components/icons/ArrowDownIcon'
import CalandarIcon from '../../components/icons/CalandarIcon'
import Calandar from '../../components/icons/CalandarIcon'
import ClockIcon from '../../components/icons/ClockIcon'

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
