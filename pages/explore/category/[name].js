import React from 'react'
import { useRouter } from 'next/router'
import SectionHead from '../../../components/util/SectionHead';
import FoodOffer from '../../../components/content/FoodOffer';
const categoryPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <div>
            <SectionHead className="mt-12 mb-4" title={category} />
            <div className="flex flex-wrap w-full">
                <FoodOffer/>
                <FoodOffer/>
                <FoodOffer/>
                <FoodOffer/>
                <FoodOffer/>
                <FoodOffer/>
            </div>

        </div>
    )
}

export default categoryPage
