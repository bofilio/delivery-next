import React from 'react'
import Avatar from '../../util/Avatar'
import InputBlock from '../../auth/InputBlock'
import ModalTitle from '../../modals/ModalTitle'
import Modal from '../../modals/Modal'
/**Icons */
import PhoneIcon from '../../icons/PhoneIcon'
import MailIcon from '../../icons/MailIcon'
import UserIcon from '../../icons/UserIcon'


const PersonalInfoModal = () => {
    return (
        <Modal className="fixed top-0 left-0 w-full h-full   items-center justify-center z-40">
            <div className=" relative flex flex-col text-dark bg-white w-full max-w-sm shadow-lg z-50 p-8 rounded-2xl overflow-y-auto">
                <ModalTitle title="Personal information" />

                <div className="mt-6 space-y-6">
                    <h6 className="text-gray-normal">Profile image</h6>
                    <div className="flex items-center space-x-6">
                        <Avatar className=" flex-shrink-0 bg-warning" variant="small" img="/img/user.svg" />
                        <div className=" flex-grow flex space-x-4">
                            <button className="flex-grow font-semibold text-text-light text-sm bg-primary py-2 px-4 rounded-lg">Upload</button>
                            <button className="flex-grow font-semibold text-sm  bg-light py-2 px-4 rounded-lg">Delete</button>
                        </div>

                    </div>
                </div>
                <div className="mt-8">
                    <h6 className="text-gray-normal">Profile details</h6>
                    <form className="flex flex-col mt-6 space-y-6">
                        <InputBlock variant="sm" color="primary" label="FULL NAME" type="text" placeholder="Enter yout Name"
                            default_value="Mark Clark"
                            icon={
                                <UserIcon className="w-6 h-6" />
                            }
                        />
                        <InputBlock variant="sm" color="secondary" label="EMAIL ADDRESS" type="email" placeholder="Enter your email Adress"
                            default_value="markclarck@gmail.com"
                            icon={
                                <MailIcon className="w-6 h-6" />
                            }
                        />
                        <InputBlock variant="sm" color="tertiary" label="Phone Number" type="phone" placeholder="Enter A Phone"
                            default_value="+1(234)5678900"
                            icon={
                                <PhoneIcon className=" w-6 h-6" />
                            }
                        />
                        <button className=" mt-6 p-3 text-text-light font-semibold text-lg bg-primary rounded-xl ">Update profile</button>
                    </form>
                </div>


            </div>
        </Modal>
    )
}

export default PersonalInfoModal
