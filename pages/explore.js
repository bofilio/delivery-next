import React from 'react'
import PageHead from '../components/settings/Head'
import SideBar from '../components/layout/SideBar'
import Main from '../components/layout/Main'
import TopBar from '../components/layout/TopBar'
import SectionHead from '../components/content/SectionHead'
import RestaurantsSection from '../components/content/RestaurantsSection'
import Restaurant from '../components/content/Restaurant'
import Filter from '../components/util/Filter'
import FoodSection from '../components/content/FoodSection'
import FoodOffer from '../components/content/FoodOffer'
const explore = () => {
    return (
        <div>
            <PageHead />
            <SideBar active_id={2}/>
            <Main>
                <TopBar />
                <SectionHead title="Restaurants nearby">
                    <Filter value="20km">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </Filter>
                </SectionHead>
            
                <FoodSection>
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                    <FoodOffer />
                </FoodSection>
            </Main>
        </div>
    )
}

export default explore
