import React from 'react'

import SectionHead from '../../components/util/SectionHead'
import RestaurantsSection from '../../components/content/RestaurantsSection'
import Restaurant from '../../components/content/Restaurant'
import Filter from '../../components/util/Filter'
import FoodSection from '../../components/content/FoodSection'
import FoodOffer from '../../components/content/FoodOffer'
import MapIcon from '../../components/icons/MapIcon'
import CalandarIcon from '../../components/icons/CalandarIcon'
const explore = () => {
    return (
        <>
            <SectionHead title="Restaurants nearby">
                <Filter value="20km">
                    <MapIcon className="w-4 h-4"/>
                </Filter>
            </SectionHead>

            <RestaurantsSection>
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </RestaurantsSection>
            <SectionHead title="Popular orders">
                <Filter value="Today">
                    <CalandarIcon className=" w-4 h-4"/>
                </Filter>
            </SectionHead>

            <FoodSection>
                <FoodOffer />
                <FoodOffer />
                <FoodOffer />
                <FoodOffer />
            </FoodSection>
        </>
    )
}

export default explore
