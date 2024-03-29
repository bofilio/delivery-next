import React from 'react'
import CloseModal from '../../modals/CloseModal'
import CloseIcon from '../../icons/CloseIcon'
import Modal from '../../modals/Modal'
import Badge from '../../util/Badge'

type ForgotPasswordModalProps={
    errormsg:String
    email:string
}
const ForgotPasswordModal = (props:ForgotPasswordModalProps) => {
    const { errormsg, email }=props
    return (
        <Modal className="fixed top-0 left-0 w-full h-full   items-center justify-center z-40">
            <div className=" relative flex flex-col items-center bg-white  max-w-md shadow-lg z-50 p-8 overflow-y-auto rounded-2xl">

                {/*<!-- Colose X absolute position-->*/}
                <CloseModal className=" z-50 absolute top-8 right-8 ">
                    <CloseIcon className="fill-current text-dark w-4 h-4" />
                </CloseModal>

                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl">
                    <svg className="h-6 w-6 text-text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                <h1 className="text-center text-2xl mt-6">
                    {
                        errormsg ?"Reset email was not sent":"Reset email  sent"
                    }
                </h1>
                <p className="text-center text-gray-normal text-sm mt-3">
                    {
                        errormsg ?
                            <Badge className="p-2 rounded-md" color="error">
                                {errormsg}
                            </Badge> :
                            <span>
                                We have just sent an email with a password reset link to
                                <span className="text-dark font-bold"> {email}</span>
                            </span>
                    }

                </p>
                <div className="flex justify-center w-full mt-12 space-x-4">
                    <CloseModal  className=" p-4 text-center rounded-lg text-text-light bg-primary hover:bg-purple-700 w-40 font-bold">
                        Got it
                    </CloseModal>
                    <button type="submit" disabled={!errormsg} className=" text-center bg-light p-4 rounded-lg text-dark hover:text-purple-700 w-40 font-bold">
                        Send again
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ForgotPasswordModal
