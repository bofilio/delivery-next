import React from 'react'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../util/OpenModal'
import Modal from '../util/Model'
import CloseModal from '../util/CloseModal'
import TopFilter from '../menu/TopFilter'

const TopBar = () => {
    return (
        <div className="flex items-center">
            <ModalProvider>
                <OpenModal className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-purple-900 lg:ml-4 ml-0 p-3">
                    <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                </OpenModal>

                <Modal className="absolute w-full h-full top-0 left-0">
                    <div className=" relative flex flex-col bg-white shadow-lg z-50 p-8 w-full h-full ">
                        {/*<!-- Colose X absolute position-->*/}
                        <CloseModal className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-purple-900  p-3">
                            <svg className="h-4 w-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </CloseModal>
                        <div className="mt-12 space-y-8">
                            <TopFilter variant="lg" title="Location" placeholder="San Francisco, California"
                                icon={
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8 1.26591C5.79406 1.81929 1.81929 5.79406 1.26591 10.8H0V13.2H1.26591C1.81929 18.2059 5.79406 22.1807 10.8 22.7341V24H13.2V22.7341C18.2059 22.1807 22.1807 18.2059 22.7341 13.2H24V10.8H22.7341C22.1807 5.79406 18.2059 1.81929 13.2 1.26591V0H10.8V1.26591ZM4.8 10.8H3.68507C4.21128 7.12117 7.12117 4.21128 10.8 3.68507V4.8H13.2V3.68507C16.8788 4.21128 19.7887 7.12117 20.3149 10.8H19.2V13.2H20.3149C19.7887 16.8788 16.8788 19.7887 13.2 20.3149V19.2H10.8V20.3149C7.12117 19.7887 4.21128 16.8788 3.68507 13.2H4.8V10.8ZM12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6C10.6745 9.6 9.6 10.6745 9.6 12C9.6 13.3255 10.6745 14.4 12 14.4ZM7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2C9.34903 7.2 7.2 9.34903 7.2 12Z" fill="#503E9D" />
                                    </svg>
                                }
                            />
                             <TopFilter variant="lg" title="Order Type" placeholder="Pick up"
                                icon={
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5556 5.71429H19.7778C21 5.71429 22 6.73143 22 8V21.7143C22 22.9767 21.0051 24 19.7778 24H4.22222C2.99492 24 2 22.9767 2 21.7143V8C2 6.73143 2.98889 5.71429 4.22222 5.71429H6.44444C6.44444 2.55837 8.93175 0 12 0C13.4734 0 14.8865 0.602039 15.9284 1.67368C16.9702 2.74531 17.5556 4.19876 17.5556 5.71429ZM12 2.28571C13.8409 2.28571 15.3333 3.82074 15.3333 5.71429H8.66667C8.66667 3.82074 10.1591 2.28571 12 2.28571ZM12 13.7143C8.93175 13.7143 6.44444 11.1559 6.44444 8H8.66667C8.66667 9.89355 10.1591 11.4286 12 11.4286C13.8409 11.4286 15.3333 9.89355 15.3333 8H17.5556C17.5556 11.1559 15.0682 13.7143 12 13.7143Z" fill="#FB6D3A" />
                                    </svg>
                                }
                            />
                            <TopFilter variant="lg" title="Dicount" placeholder="Best deals"
                                icon={
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 5.375C0 4.06332 1.07452 3 2.4 3H21.6C22.92 3 24 4.05687 24 5.375V10.125C22.68 10.125 21.6 11.1819 21.6 12.5C21.6 13.8117 22.6745 14.875 24 14.875V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.07452 22 0 20.9367 0 19.625V14.875C1.32548 14.875 2.4 13.8117 2.4 12.5C2.4 11.1938 1.332 10.125 0 10.125V5.375ZM18 8.34375L16.2 6.5625L6 16.6562L7.8 18.4375L18 8.34375ZM8.172 6.61C9.348 6.61 10.296 7.54812 10.296 8.71187C10.296 9.87271 9.34505 10.8138 8.172 10.8138C6.996 10.8137 6.048 9.87563 6.048 8.71187C6.048 7.55104 6.99895 6.61 8.172 6.61ZM17.952 16.2881C17.952 15.1244 17.004 14.1862 15.828 14.1862C14.6549 14.1862 13.704 15.1273 13.704 16.2881C13.704 17.4519 14.652 18.39 15.828 18.39C17.0011 18.39 17.952 17.449 17.952 16.2881Z" fill="#FACD5D" />
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </Modal>
            </ModalProvider>

            <div className="p-3 lg:flex hidden space-x-6">
                <TopFilter variant="md" placeholder="San Francisco, California"
                    icon={
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8 1.26591C5.79406 1.81929 1.81929 5.79406 1.26591 10.8H0V13.2H1.26591C1.81929 18.2059 5.79406 22.1807 10.8 22.7341V24H13.2V22.7341C18.2059 22.1807 22.1807 18.2059 22.7341 13.2H24V10.8H22.7341C22.1807 5.79406 18.2059 1.81929 13.2 1.26591V0H10.8V1.26591ZM4.8 10.8H3.68507C4.21128 7.12117 7.12117 4.21128 10.8 3.68507V4.8H13.2V3.68507C16.8788 4.21128 19.7887 7.12117 20.3149 10.8H19.2V13.2H20.3149C19.7887 16.8788 16.8788 19.7887 13.2 20.3149V19.2H10.8V20.3149C7.12117 19.7887 4.21128 16.8788 3.68507 13.2H4.8V10.8ZM12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6C10.6745 9.6 9.6 10.6745 9.6 12C9.6 13.3255 10.6745 14.4 12 14.4ZM7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2C9.34903 7.2 7.2 9.34903 7.2 12Z" fill="#503E9D" />
                        </svg>
                    }
                />
                <TopFilter variant="md" placeholder="Pick up"
                    icon={
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.5556 5.71429H19.7778C21 5.71429 22 6.73143 22 8V21.7143C22 22.9767 21.0051 24 19.7778 24H4.22222C2.99492 24 2 22.9767 2 21.7143V8C2 6.73143 2.98889 5.71429 4.22222 5.71429H6.44444C6.44444 2.55837 8.93175 0 12 0C13.4734 0 14.8865 0.602039 15.9284 1.67368C16.9702 2.74531 17.5556 4.19876 17.5556 5.71429ZM12 2.28571C13.8409 2.28571 15.3333 3.82074 15.3333 5.71429H8.66667C8.66667 3.82074 10.1591 2.28571 12 2.28571ZM12 13.7143C8.93175 13.7143 6.44444 11.1559 6.44444 8H8.66667C8.66667 9.89355 10.1591 11.4286 12 11.4286C13.8409 11.4286 15.3333 9.89355 15.3333 8H17.5556C17.5556 11.1559 15.0682 13.7143 12 13.7143Z" fill="#FB6D3A" />
                        </svg>
                    }
                />
                <TopFilter variant="md" placeholder="Best deals"
                    icon={
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 5.375C0 4.06332 1.07452 3 2.4 3H21.6C22.92 3 24 4.05687 24 5.375V10.125C22.68 10.125 21.6 11.1819 21.6 12.5C21.6 13.8117 22.6745 14.875 24 14.875V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.07452 22 0 20.9367 0 19.625V14.875C1.32548 14.875 2.4 13.8117 2.4 12.5C2.4 11.1938 1.332 10.125 0 10.125V5.375ZM18 8.34375L16.2 6.5625L6 16.6562L7.8 18.4375L18 8.34375ZM8.172 6.61C9.348 6.61 10.296 7.54812 10.296 8.71187C10.296 9.87271 9.34505 10.8138 8.172 10.8138C6.996 10.8137 6.048 9.87563 6.048 8.71187C6.048 7.55104 6.99895 6.61 8.172 6.61ZM17.952 16.2881C17.952 15.1244 17.004 14.1862 15.828 14.1862C14.6549 14.1862 13.704 15.1273 13.704 16.2881C13.704 17.4519 14.652 18.39 15.828 18.39C17.0011 18.39 17.952 17.449 17.952 16.2881Z" fill="#FACD5D" />
                        </svg>
                    }
                />
            </div>
            <div className="flex-grow"></div>
            <div className="flex h-12 ml-12">
                <form className="lg:block hidden w-full max-w-sm relative">
                    <input className="h-full bg-gray-200 focus:outline-none rounded-xl w-full pl-12" placeholder="Search for anything…" type="text" />
                    <button>
                        <svg className="w-4 h-4 absolute left-4 top-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8571 7.42857C14.8571 3.32588 11.5313 0 7.42857 0C3.32588 0 0 3.32588 0 7.42857C0 11.5313 3.32588 14.8571 7.42857 14.8571C9.26857 14.8571 10.96 14.1829 12.2629 13.0743L12.5714 13.3829V14.2857L18.2857 20L20 18.2857L14.2857 12.5714H13.3829L13.0743 12.2629C14.1829 10.96 14.8571 9.26857 14.8571 7.42857ZM2.28571 7.42857C2.28571 4.57143 4.57143 2.28571 7.42857 2.28571C10.2857 2.28571 12.5714 4.57143 12.5714 7.42857C12.5714 10.2857 10.2857 12.5714 7.42857 12.5714C4.57143 12.5714 2.28571 10.2857 2.28571 7.42857Z" fill="black" />
                        </svg>
                    </button>

                </form>
                <button className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl ml-4 p-3 bg-gray-200" >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8571 7.42857C14.8571 3.32588 11.5313 0 7.42857 0C3.32588 0 0 3.32588 0 7.42857C0 11.5313 3.32588 14.8571 7.42857 14.8571C9.26857 14.8571 10.96 14.1829 12.2629 13.0743L12.5714 13.3829V14.2857L18.2857 20L20 18.2857L14.2857 12.5714H13.3829L13.0743 12.2629C14.1829 10.96 14.8571 9.26857 14.8571 7.42857ZM2.28571 7.42857C2.28571 4.57143 4.57143 2.28571 7.42857 2.28571C10.2857 2.28571 12.5714 4.57143 12.5714 7.42857C12.5714 10.2857 10.2857 12.5714 7.42857 12.5714C4.57143 12.5714 2.28571 10.2857 2.28571 7.42857Z" fill="black" />
                    </svg>
                </button>

                <button className="lg:flex hidden items-center justify-center w-12 h-12 rounded-xl bg-purple-900 ml-4 p-3">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 3V5.33333H20V3H0ZM3.33333 11.1667H16.6667V8.83333H3.33333V11.1667ZM12.2222 17H7.77778V14.6667H12.2222V17Z" fill="white" />
                    </svg>
                </button>

                <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500 ml-4 p-3">
                    <svg className="h-5 w-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default TopBar
