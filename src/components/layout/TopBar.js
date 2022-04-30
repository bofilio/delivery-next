import React from 'react'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../modals/OpenModal'
import Modal from '../modals/Modal'
import TopFilter from '../menu/TopFilter'
import TopBarFiltersModal from './modals/TopBarFiltersModal'
import MenuIcon from '../icons/MenuIcon'
import DiscountIcon from '../icons/DiscountIcon'
import ShopingBagIcon from '../icons/ShopingBagIcon'
import LocationIcon from '../icons/LocationIcon'
import { useRouter } from "next/router";
import SearchIcon from '../icons/SearchIcon'
import SortingIcon from '../icons/SortingIcon'
import CartIcon from '../icons/CartIcon'
import SearchFilterModal from './modals/SearchFilterModal'
import SideBarAsModal from './SideBar'
import ThreeBarMenuIcon from '../icons/ThreeBarMenuIcon'
import CartModal from './modals/CartModal'

let currentRoute = "/";
const TopBar = () => {
    const router=useRouter();
    const goToSearchPage = (e) => {
        e.preventDefault();
        if (router.asPath.indexOf("search") < 0) {
            currentRoute = router.asPath;
        }
        //go to search page when use search for somthing ,and go back whaen he clears the search input
        e.target.value ? router.push("/search") : router.push(currentRoute)
    }
    return (
        <div className="flex items-center">
            <ModalProvider>
                <OpenModal className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl text-dark lg:ml-4 ml-0 p-3">
                    <ThreeBarMenuIcon className="w-5 h-5" />
                </OpenModal>

                <Modal className="block md:hidden absolute w-full h-full top-0 left-0">
                    <SideBarAsModal className="flex w-3/4 max-w-xs " />
                </Modal>
            </ModalProvider>

            <ModalProvider>
                <OpenModal className=" hidden sm:hidden md:flex lg:hidden items-center justify-center w-12 h-12 rounded-xl bg-primary text-text-light lg:ml-4 ml-0 p-3">
                    <MenuIcon className="w-5 h-5" />
                </OpenModal>

                <Modal className="absolute w-full h-full top-0 left-0">
                    <TopBarFiltersModal />
                </Modal>
            </ModalProvider>

            <div className="p-3 lg:flex hidden space-x-6">
                <TopFilter variant="md" placeholder="San Francisco, California"
                    icon={<LocationIcon className="w-6 h-6 text-primary" />}
                />
                <TopFilter variant="md" placeholder="Pick up"
                    icon={<ShopingBagIcon className="w-6 h-6 text-secondary" />}
                />
                <TopFilter variant="md" placeholder="Best deals"
                    icon={<DiscountIcon className="w-6 h-6 text-warning" />}
                />
            </div>
            <div className="flex-grow"></div>
            <div className="flex h-12 ml-12">
                <form className="flex flex-grow max-w-sm bg-light rounded-xl">
                    <button disabled className=" flex items-center justify-center w-12 h-12 " >
                        <SearchIcon className="w-5 h-5" />
                    </button>
                    <input className=" w-full bg-light focus:outline-none rounded-xl "
                        placeholder="Search for anything…"
                        type="text"
                        onChange={(e) => goToSearchPage(e)} />
                </form>


                <ModalProvider>
                    <OpenModal>
                        <button className="lg:flex hidden items-center text-text-light justify-center w-12 h-12 rounded-xl bg-primary ml-4 p-3">
                            <SortingIcon className="w-5 h-5 " />
                        </button>
                    </OpenModal>
                    <SearchFilterModal />

                </ModalProvider>

                <ModalProvider>
                    <OpenModal>
                        <button className="flex items-center justify-center text-text-light w-12 h-12 rounded-xl bg-secondary ml-4 p-3">
                            <CartIcon className="w-5 h-5" />
                        </button>
                    </OpenModal>
                    <CartModal />

                </ModalProvider>

            </div>

        </div>
    )
}

export default TopBar
