
import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react'
import Category from '../components/content/Category'
import SectionHead from '../components/util/SectionHead'
import Restaurant from '../components/content/Restaurant'
import FoodOffer from '../components/content/FoodOffer'
import SeeAllLink from '../components/util/SeeAllLink'
import RestaurantsSection from '../components/content/RestaurantsSection'
import FoodSection from '../components/content/FoodSection'

import Link from 'next/link'
import CategoryList from '../components/content/CategoryList'

export default function Home() {

  return (
    < >
      <SectionHead title="Explore categories">
        <SeeAllLink to="#" />
      </SectionHead>

      {/**Categories */}
     <CategoryList/>

      <SectionHead title="Featured restaurants" >
        <SeeAllLink to="#" />
      </SectionHead>

      <RestaurantsSection>
        <Restaurant name="Burger King"/>
        <Restaurant name="Carrows Restaurant"/>
        <Restaurant name="KFC "/>
        <Restaurant name="Domino’s Pizza"/>
        <Restaurant name="McDonald’s"/>
        <Restaurant name="Pizza Hut"/>
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
