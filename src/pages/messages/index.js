import React from 'react'
import SectionHead from '../../components/util/SectionHead'
import FilterIcon from '../../components/icons/FilterIcon'
import Messager from '../../components/messages/Messager'
import Avatar from '../../components/util/Avatar'
import Badge from '../../components/util/Badge'
import Filter from '../../components/util/Filter'
import ArrowRight from '../../components/icons/ArrowRight'
import ArrowLeft from '../../components/icons/ArrowLeft'
import MailIcon from '../../components/icons/MailIcon'
import AttachFileIcon from '../../components/icons/AttachFileIcon'
import Message from '../../components/messages/Message'

const index = () => {
    const [chatOpen, setchatOpen] = React.useState(false)
    const toggleChat = () => {
        setchatOpen(!chatOpen);
    }

    return (
        <div className="flex  flex-grow  items-start w-full space-x-8 mt-12">
            {/**Contacts Component */}
            <div className={(chatOpen ? "lg:flex hidden" : "flex") + " lg:w-1/2 w-full  h-full flex-col lg:pr-6 pr-0 overflow-y-auto "}>
                <SectionHead title="Messages" className="mt-0">
                    <Filter value="Recent">
                        <FilterIcon className="w-4 h-4" />
                    </Filter>
                </SectionHead>
                <div className="mt-8 space-y-6 text-xs text-gray-normal">
                    <Messager onClick={toggleChat} tags={[{ text: "Promotion", color: "primary" }, { text: "Expire soon", color: 'secondary' }]} active />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} tags={[{ text: "Promotion", color: "primary" }]} />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} />
                    <Messager onClick={toggleChat} />
                </div>
            </div>
            {/**Chat Component */}
            <div className={`${(chatOpen ? "" : "lg:block hidden")} lg:sticky absolute  top-0 right-0 lg:w-1/2 w-full lg:h-168 h-full overflow-y-auto lg:bg-light bg-white p-8 text-gray-normal lg:rounded-xl rounded-none`} >
                <button className="lg:hidden inline-block p-4 bg-primary rounded-xl  mb-16" onClick={toggleChat}>
                    <ArrowLeft className=" w-4 h-4 text-text-light" />
                </button>
                <div className="w-full  flex items-center justify-between box-border relative cursor-pointer">
                    <div className="flex items-center space-x-5">
                        <Avatar className=" flex-shrink-0 bg-primary" variant="small" img="/img/user.svg" />
                        <div className="flex flex-col justify-around ">
                            <h1 className=" text-dark font-semibold">John Smith, CEO</h1>
                            <p className=" text-gray-normal text-xs">john@gmail.com</p>
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
                    <Message
                        variant="incoming"
                        message=" Hi, I didn’t get my order on time today. 😤 Could you please refund me for a delivery? Thanks."
                        time="2:07 PM"
                    />

                    <Message
                        variant="outgoing"
                        message=" Hello! The new dishes are available starting from today. 🍔 You can check them out here."
                        time="2:00 PM"
                    />
                    <Message
                        variant="incoming"
                        message=" Hi, thanks! I will check it out as soon as I can. 🔥"
                        time="12:33 AM"
                    />
                    <Message
                        variant="outgoing"
                        message=" Hi, we are running a new promotion in your area. If you want to get a free delivery, then use code ’FREE’ at the checkout. 🤑"
                        time="8:29 AM"
                    />
                </div>

                <div className=" w-full flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <Badge className="cursor-pointer rounded-md" variant="small" text="I didn’t get my order." color="primary" />
                        <Badge className="cursor-pointer rounded-md" variant="small" text="I have received a wrong order." color="primary" />
                    </div>
                    <div className="w-full flex space-x-6">
                        <div className="flex-grow flex items-center bg-white rounded-lg space-x-4 px-4">
                            <AttachFileIcon className="w-5 h-5 cursor-pointer" />
                            <input className="w-full focus:outline-none" placeholder="message" />
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
