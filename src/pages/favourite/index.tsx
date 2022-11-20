import React, { useEffect, useLayoutEffect } from 'react'
import FoodSection from '../../components/content/FoodSection'
import FoodOffer from '../../components/content/FoodOffer'
import Tab from '../../components/menu/Tab'
import { TabulationProvider } from '../../contexts/TabulationContext'
import StoreIcon from '../../components/icons/StoreIcon'
import DishesIcon from '../../components/icons/DishesIcon'
import TabContent from '../../components/menu/TabContent'
import Restaurant from '../../components/content/Restaurant'
import { useNibbleStore } from '../../store'
import { useRouter } from 'next/router'
import LoadingScreen from '../../components/util/LoadingScreen'
const Favorite = () => {
    const currrentUser=useNibbleStore(store=>store.currentUser)
    const router=useRouter()

    useLayoutEffect(()=>{
        if(currrentUser===null) router.push("/auth/signin")
    },[])
    if(currrentUser===null)
    return <LoadingScreen/>

    if(currrentUser!==null)
    return (
        <>
            <TabulationProvider>
                <div className="flex items-center  text-xs space-x-4 mt-12 mb-8">
                    <Tab
                        id={1}
                        title="Restaurants (8)"
                        className="p-3 space-x-4 flex-grow lg:flex-grow-0"
                        icon={<StoreIcon className="w-4 h-4" />}
                    />
                    <Tab
                        id={2}
                        title=" Dishes (23)"
                        className="p-3 space-x-4 flex-grow lg:flex-grow-0"
                        icon={<DishesIcon className="w-4 h-4" />}
                    />


                </div>
                <TabContent id={1}>
                    <section className="flex  lg:flex-row flex-col flex-wrap">
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />
                        <Restaurant className="" name="Liverpool" />

                    </section>
                </TabContent>
                <TabContent id={2}>
                    <FoodSection>
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        <FoodOffer foodId={""} name={"Tacous"} />
                        
                    </FoodSection>
                </TabContent>


            </TabulationProvider>


        </>
    )
}

export default Favorite
