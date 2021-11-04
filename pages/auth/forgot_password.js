import React, { useContext, useState, Fragment } from 'react'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import MailIcon from '../../components/icons/MailIcon'
import ForgotPasswordModal from '../../components/auth/modals/ForgotPasswordModal'
import Modal from '../../components/modals/Modal'
import OpenModal from '../../components/modals/OpenModal.js'
import { ModalProvider } from '../../contexts/ModalContext'

const ForgotPassword = () => {

    return (
        <Fragment>
            <div className="flex lg:flex-row flex-col min-h-screen">
                <Branding />
                <div className="flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                    <div className="max-w-xl flex-grow">
                        <div className="mb-12">
                            <h1 className="text-3xl text-dark text-left font-bold mb-3">Forget password?</h1>
                            <span className="text-xl text-gray">Please enter your email address to continue </span>
                        </div>
                        <div className="flex flex-col space-y-12">
                            {/*<!-- component-->*/}
                            <InputBlock variant="md" color="primary" label="EMAIL ADDRESS" default_value="markclark@gmail.com" type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            {/*modal*/}
                            <ModalProvider>
                                <OpenModal>
                                    <div className="modal-open text-center rounded-xl bg-primary text-light text-base font-bold py-4 px-8" >
                                        Continue
                                    </div>
                                </OpenModal>

                                <ForgotPasswordModal />

                            </ModalProvider>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--Modal-- >*/}


        </Fragment>
    )
}

export default ForgotPassword
