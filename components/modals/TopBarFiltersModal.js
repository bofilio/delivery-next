import React from 'react'
import CloseModal from './CloseModal'
import TopFilter from '../menu/TopFilter'
import CloseIcon from '../icons/CloseIcon'
import LocationIcon from '../icons/LocationIcon'
import ShopingBagIcon from '../icons/ShopingBagIcon'
import DiscountIcon from '../icons/DiscountIcon'
const TopBarFiltersModal = () => {
    return (
        <div className="flex relative  flex-col bg-white shadow-lg z-50 p-8 w-full h-full ">
                        {/*<!-- Colose X absolute position-->*/}
                        <CloseModal className=" flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-light p-3">
                          <CloseIcon className="w-5 h-5"/>
                        </CloseModal>
                        <div className="mt-12 space-y-8">
                            <TopFilter variant="lg" title="Location" placeholder="San Francisco, California"
                                icon={<LocationIcon className="w-6 h-6 text-primary"/>}
                            />
                             <TopFilter variant="lg" title="Order Type" placeholder="Pick up"
                                icon={<ShopingBagIcon className="w-6 h-6 text-secondary"/>}
                            />
                            <TopFilter variant="lg" title="Dicount" placeholder="Best deals"
                                icon={<DiscountIcon className="w-6 h-6 text-tertiary"/>}
                            />
                        </div>
                    </div>
    )
}

export default TopBarFiltersModal
