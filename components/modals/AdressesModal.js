import React from 'react'

import Avatar from '../util/Avatar'
import InputBlock from '../auth/InputBlock'
import PhoneIcon from '../icons/PhoneIcon'
import HomeIcon from '../icons/HomeIcon'
import UserIcon from '../icons/UserIcon'
import ModalTitle from './ModalTitle'
import Tab from '../menu/Tab'
import { TabulationProvider } from '../../contexts/TabulationContext'
import TabContent from '../menu/TabContent'

const AdressesModal = () => {
    return (
        <div className=" relative flex flex-col text-dark bg-white w-full max-w-sm shadow-lg z-50 p-8 rounded-2xl overflow-y-auto">
            <ModalTitle title="Saved addresses" />

            <div className="mt-6 flex-grow flex-col">
                <TabulationProvider>
                    <div className="flex space-x-4">
                        <Tab id={1} title="Home (2)" className="flex-grow p-2"/>
                        <Tab id={2} title="Work (3)" className="flex-grow"/>
                    </div>
                    <form className="flex flex-col mt-6  ml-0">
                        <TabContent id={1} className="space-y-6">
                            <InputBlock variant="sm" color="primary" label="address" type="email" placeholder="Enter your Home Adress"
                                default_value="775 Cletus Estates Suite 423"
                                icon={<HomeIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="sm" color="secondary" label="address" type="email" placeholder="Enter your Home Adress"
                                default_value="775 Cletus Estates Suite 423"
                                icon={<HomeIcon className="w-6 h-6" />}
                            />
                        </TabContent>
                        <TabContent id={2} className="space-y-6">
                            <InputBlock variant="sm" color="primary" label="address" type="email" placeholder="Enter your Work Adress"
                                default_value="775 Cletus Estates Suite 423"
                                icon={ <HomeIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="sm" color="secondary" label="address" type="email" placeholder="Enter your Work Adress"
                                default_value="775 Cletus Estates Suite 423"
                                icon={<HomeIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="sm" color="tertiary" label="address" type="email" placeholder="Enter your Work Adress"
                                default_value="775 Cletus Estates Suite 423"
                                icon={<HomeIcon className="w-6 h-6" />}
                            />
                            
                        </TabContent>
                        <button className=" mt-8 p-3 text-light font-semibold text-lg bg-primary rounded-xl ">Save changes</button>
                    </form>
                </TabulationProvider>
            </div>
        </div>
    )
}

export default AdressesModal
