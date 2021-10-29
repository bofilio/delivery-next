import React from 'react'
import PageHead from '../../components/settings/Head'
import SideBar from '../../components/layout/SideBar'
import Main from '../../components/layout/Main'
import TopBar from '../../components/layout/TopBar'
import FoodSection from '../../components/content/FoodSection'
import FoodOffer from '../../components/content/FoodOffer'
import SectionHead from '../../components/content/SectionHead'
import Restaurant from '../../components/content/Restaurant'
import Tab from '../../components/menu/Tab'
const dishes = () => {
    return (
        <div>
            <PageHead />
            <SideBar active_id={3}/>
            <Main>
                <TopBar />

                <div className="flex items-center  text-xs space-x-4 mt-12 mb-8">
                    <Tab to="/favourite/restaurants" title="Restaurants (8)"  active="active">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.888889 1H15.1111V2.75H0.888889V1ZM16 9.75V8L15.1111 3.625H0.888889L0 8V9.75H0.888889V15H9.77778V9.75H13.3333V15H15.1111V9.75H16ZM8 13.25H2.66667V9.75H8V13.25Z" fill="currentColor" />
                        </svg>
                    </Tab>
                    <Tab to="/favourite" title=" Dishes (23)" active="no">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 5.6H7.66667V0H9.33333V5.6C9.33333 7.296 7.95 8.672 6.20833 8.776V16H4.125V8.776C2.38333 8.672 1 7.296 1 5.6V0H2.66667V5.6H4.33333V0H6V5.6ZM11.8333 9.6V3.2C11.8333 1.792 13.7 0 16 0V16H13.9167V9.6H11.8333Z" fill="currentColor" />
                        </svg>
                    </Tab>
                   
                </div>

                <section className="flex  lg:flex-row flex-col flex-wrap">
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                    <Restaurant/>
                </section>
            </Main>
        </div>
    )
}

export default dishes
