import React from 'react'
import FoodSection from '../../components/content/FoodSection'
import FoodOffer from '../../components/content/FoodOffer'
import Tab from '../../components/menu/Tab'
import { TabulationProvider } from '../../contexts/TabulationContext'
import StoreIcon from '../../components/icons/StoreIcon'
import DishesIcon from '../../components/icons/DishesIcon'
import TabContent from '../../components/menu/TabContent'
import Restaurant from '../../components/content/Restaurant'
const searchResults = () => {
    return (
        <>
        <TabulationProvider>
            <div className="flex items-center  text-xs space-x-4 mt-12 mb-8">
                <Tab id={1} title="Restaurants (2)" className="p-3 space-x-4 flex-grow lg:flex-grow-0">
                    <StoreIcon className="w-4 h-4" />
                </Tab>
                <Tab id={2} title=" Dishes (7)" className="p-3 space-x-4 flex-grow lg:flex-grow-0">
                    <DishesIcon className="w-4 h-4" />
                </Tab>
            </div>
            <TabContent id={1}>
                <section className="flex  lg:flex-row flex-col flex-wrap">
                    <Restaurant />
                    <Restaurant />
                
                </section>
            </TabContent>
            <TabContent id={2}>
                <FoodSection>
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                </FoodSection>
            </TabContent>
        </TabulationProvider>


    </>
    )
}

export default searchResults
