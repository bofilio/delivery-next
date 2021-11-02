import React from 'react'
import SectionHead from '../../components/util/SectionHead'
import FilterIcon from '../../components/icons/FilterIcon'
import Messager from '../../components/messages/Messager'
import Avatar from '../../components/util/Avatar'
import Badge from '../../components/util/Badge'
import Filter from '../../components/util/Filter'
import ArrowRight from '../../components/icons/ArrowRight'
import MailIcon from '../../components/icons/MailIcon'
import AttachFileIcon from '../../components/icons/AttachFileIcon'

const index = () => {
    return (
        <div className=" relative flex-grow flex items-start w-full space-x-8 mt-12">
            <div className="lg:w-1/2 w-full flex flex-col pr-6 overflow-y-auto" style={{ maxHeight: "40rem" }}>
                <SectionHead title="Messages" className="mt-0">
                    <Filter value="Recent">
                        <FilterIcon className="w-4 h-4" />
                    </Filter>
                </SectionHead>
                <div className="mt-8 space-y-6 text-xs text-gray">
                    <Messager tags={[{ text: "Promotion", color: "primary" }, { text: "Expire soon", color: 'secondary' }]} active />
                    <Messager />
                    <Messager />
                    <Messager tags={[{ text: "Promotion", color: "primary" }]} />
                    <Messager />
                    <Messager />
                    <Messager />
                    <Messager />
                    <Messager />
                </div>
            </div>

            <div className=" sticky top-0 right-0 lg:w-1/2 w-full overflow-y-auto  lg:block hidden bg-light p-8 text-gray rounded-xl" style={{ height: "42rem" }}>
                <div className="w-full  flex items-center justify-between box-border relative cursor-pointer">
                    <div className="flex items-center space-x-5">
                        <Avatar className=" flex-shrink-0 bg-primary" variant="small" img="/img/user.svg" />
                        <div className="flex flex-col justify-around ">
                            <h1 className=" text-dark font-semibold">John Smith, CEO</h1>
                            <p className=" text-gray text-xs">john@gmail.com</p>
                        </div>
                    </div>
                    <ArrowRight className=" w-5 h-5" />
                </div>
                <div className="flex items-center  border-gray-32 space-x-2 mt-6">
                    <div className="flex-grow border-b-2 border-gray-32 "></div>
                    <span className="text-xs text-primary">28 Sep 2012</span>
                    <div className="flex-grow border-b-2 border-gray-32 "></div>
                </div>
                <div className="mt-8 text-xs  flex flex-col space-y-8">
                    <div className="flex flex-col items-start space-y-3 w-3/4">
                        <div className="bg-white rounded-r-lg rounded-tl-lg p-4 text-sm">
                            Hi, I didn’t get my order on time today. 😤 Could you please refund me for a delivery? Thanks.
                        </div>
                        <span className="text-2xs"> 2:07 PM</span>
                    </div>

                    <div className="flex flex-col items-end space-y-3 w-3/4 self-end ">
                        <div className=" bg-primary text-light rounded-l-lg rounded-tr-lg p-4 text-sm">
                            Hello! The new dishes are available starting from today. 🍔 You can check them out here.
                        </div>
                        <span className="text-2xs"> 2:07 PM</span>
                    </div>

                    <div className="flex flex-col items-start space-y-3 w-3/4">
                        <div className="bg-white rounded-r-lg rounded-tl-lg p-4 text-sm">
                            Hi, thanks! I will check it out as soon as I can. 🔥
                        </div>
                        <span className="text-2xs"> 12:33 AM</span>
                    </div>
                    <div className="flex flex-col items-end space-y-3 w-3/4 self-end ">
                        <div className=" bg-primary text-light rounded-l-lg rounded-tr-lg p-4 text-sm">
                            Hi, we are running a new promotion in your area. If you want to get a free delivery, then use code ’FREE’ at the checkout. 🤑
                        </div>
                        <span className="text-2xs"> 8:29 AM</span>
                    </div>
                </div>

                <div className=" w-full flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <Badge className="cursor-pointer" variant="small" text="I didn’t get my order." color="primary" />
                        <Badge className="cursor-pointer" variant="small" text="I have received a wrong order." color="primary" />
                    </div>
                    <div className="w-full flex space-x-6">
                        <div className="flex-grow flex items-center bg-white rounded-lg space-x-4 px-4">                    
                            <AttachFileIcon className="w-5 h-5 cursor-pointer" />
                            <input className="flex-grow focus:outline-none" placeholder="message" />
                        </div>
                        <button className="p-3 bg-primary rounded-lg">
                            <MailIcon className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default index
