import React from 'react'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../util/OpenModal'
import Modal from '../util/Model'
import CloseModal from '../util/CloseModal'
import TopFilter from '../menu/TopFilter'
import TopBarFiltersModal from '../modals/TopBarFiltersModal'
import MenuIcon from '../icons/MenuIcon'
import DiscountIcon from '../icons/DiscountIcon'
import ShopingBagIcon from '../icons/ShopingBagIcon'
import LocationIcon from '../icons/LocationIcon'

const TopBar = () => {
    return (
        <div className="flex items-center">
            <ModalProvider>
                <OpenModal className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-light lg:ml-4 ml-0 p-3">
                    <MenuIcon className="w-5 h-5"/>
                </OpenModal>

                <Modal className="absolute w-full h-full top-0 left-0">
                    <TopBarFiltersModal/>
                </Modal>
            </ModalProvider>

            <div className="p-3 lg:flex hidden space-x-6">
                <TopFilter variant="md" placeholder="San Francisco, California"
                    icon={<LocationIcon className="w-6 h-6 text-primary"/>}
                />
                <TopFilter variant="md" placeholder="Pick up"
                    icon={<ShopingBagIcon className="w-6 h-6 text-secondary"/>}
                />
                <TopFilter variant="md" placeholder="Best deals"
                    icon={<DiscountIcon className="w-6 h-6 text-tertiary"/>}
                />
            </div>
            <div className="flex-grow"></div>
            <div className="flex h-12 ml-12">
                <form className="lg:block hidden w-full max-w-sm relative">
                    <input className="h-full bg-light focus:outline-none rounded-xl w-full pl-12" placeholder="Search for anything…" type="text" />
                    <button>
                        <svg className="w-4 h-4 absolute left-4 top-4 text-dark" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8571 7.42857C14.8571 3.32588 11.5313 0 7.42857 0C3.32588 0 0 3.32588 0 7.42857C0 11.5313 3.32588 14.8571 7.42857 14.8571C9.26857 14.8571 10.96 14.1829 12.2629 13.0743L12.5714 13.3829V14.2857L18.2857 20L20 18.2857L14.2857 12.5714H13.3829L13.0743 12.2629C14.1829 10.96 14.8571 9.26857 14.8571 7.42857ZM2.28571 7.42857C2.28571 4.57143 4.57143 2.28571 7.42857 2.28571C10.2857 2.28571 12.5714 4.57143 12.5714 7.42857C12.5714 10.2857 10.2857 12.5714 7.42857 12.5714C4.57143 12.5714 2.28571 10.2857 2.28571 7.42857Z" fill="CurrentColor" />
                        </svg>
                    </button>

                </form>
                <button className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl ml-4 p-3 bg-light" >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8571 7.42857C14.8571 3.32588 11.5313 0 7.42857 0C3.32588 0 0 3.32588 0 7.42857C0 11.5313 3.32588 14.8571 7.42857 14.8571C9.26857 14.8571 10.96 14.1829 12.2629 13.0743L12.5714 13.3829V14.2857L18.2857 20L20 18.2857L14.2857 12.5714H13.3829L13.0743 12.2629C14.1829 10.96 14.8571 9.26857 14.8571 7.42857ZM2.28571 7.42857C2.28571 4.57143 4.57143 2.28571 7.42857 2.28571C10.2857 2.28571 12.5714 4.57143 12.5714 7.42857C12.5714 10.2857 10.2857 12.5714 7.42857 12.5714C4.57143 12.5714 2.28571 10.2857 2.28571 7.42857Z" fill="CurrentColor" />
                    </svg>
                </button>

                <button className="lg:flex hidden items-center justify-center w-12 h-12 rounded-xl bg-primary ml-4 p-3">
                    <svg className="w-5 h-5 text-light" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 3V5.33333H20V3H0ZM3.33333 11.1667H16.6667V8.83333H3.33333V11.1667ZM12.2222 17H7.77778V14.6667H12.2222V17Z" fill="currentColor" />
                    </svg>
                </button>

                <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary ml-4 p-3">
                    <svg className="h-5 w-5 text-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default TopBar
