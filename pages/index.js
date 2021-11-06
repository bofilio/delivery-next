
import { useRouter } from 'next/router'
import React,{ useEffect,useContext } from 'react'
import Category from '../components/content/Category'
import SectionHead from '../components/util/SectionHead'
import Restaurant from '../components/content/Restaurant'
import FoodOffer from '../components/content/FoodOffer'
import SeeAllLink from '../components/util/SeeAllLink'
import RestaurantsSection from '../components/content/RestaurantsSection'
import FoodSection from '../components/content/FoodSection'
import FireIcon from '../components/icons/FireIcon'
export default function Home() {
  
  return (
    < >     
        <SectionHead title="Explore categories">
          <SeeAllLink to="#" />
        </SectionHead>

         {/**Categories */}
        <section className="flex space-x-8 overflow-x-auto">
          <Category color="secondary" title="Popular" options_number={286}
            icon={<FireIcon className="w-6 h-6"/>}
          />
          <Category color="primary" title="Fast delivery" options_number={1, 843}
             icon={<FireIcon className="w-6 h-6"/>}
          />
          <Category color="tertiary" title="High class" options_number={25}
            icon={<FireIcon className="w-6 h-6"/>}
          />
          <Category color="secondary" title="Dine in" options_number={182}
           icon={<FireIcon className="w-6 h-6"/>}
          />
          <Category color="primary" title="Pick up" options_number="3,548"
           icon={<FireIcon className="w-6 h-6"/>}
          />
          <Category color="tertiary" title="Nearest" options_number="44"
            icon={<FireIcon className="w-6 h-6"/>}
          />
        </section>

        <SectionHead title="Featured restaurants" >
          <SeeAllLink to="#" />
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

        <SectionHead title="Acian Food" >
          <SeeAllLink to="#" />
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
