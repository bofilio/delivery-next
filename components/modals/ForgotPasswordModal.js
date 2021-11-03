import React from 'react'
import CloseModal from '../util/CloseModal'
import CloseIcon from '../icons/CloseIcon'
const ForgotPasswordModal = () => {
    return (
        <div className=" relative flex flex-col items-center bg-white  max-w-md shadow-lg z-50 p-8 overflow-y-auto rounded-2xl">
            {/*<!-- Colose X absolute position-->*/}
            <CloseModal className=" z-50 absolute top-8 right-8 ">
                <CloseIcon className="fill-current text-dark w-4 h-4" />
            </CloseModal>

            <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl">
                <svg className="h-6 w-6 text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <h1 className="text-center text-2xl mt-6">Reset email sent</h1>
            <p className="text-center text-gray text-sm mt-3">
                We have just sent an email with a password reset link to
                <span className="text-dark font-bold"> markclarke@gmail.com.</span>
            </p>
            <div className="flex justify-center w-full mt-12 ">
                <CloseModal className="px-4 text-center bg-primary p-4 rounded-lg text-light hover:bg-purple-700 mr-4 w-40 font-bold">
                    Got it
                </CloseModal>
                <button className="px-4 text-center bg-light p-4 rounded-lg text-dark hover:text-purple-700 w-40 font-bold">
                    Send again
                </button>
            </div>
        </div>
    )
}

export default ForgotPasswordModal
