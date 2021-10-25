import React, { Fragment } from 'react'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
const ForgotPassword = () => {
    return (
        <Fragment>
            <div className="flex lg:flex-row flex-col min-h-screen">
                <Branding />
                <div className="flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                    <div className="max-w-xl flex-grow">
                        <div className="mb-12">
                            <h1 className="text-3xl text-gray-900 text-left font-bold mb-3">Forget password?</h1>
                            <span className="text-xl text-gray-500">Please enter your email address to continue </span>
                        </div>
                        <form className="flex flex-col">
                            {/*<!-- component-->*/}
                            <InputBlock label="EMAIL ADDRESS" default_value="markclark@gmail.com"
                                icon={
                                    <svg className="h-6 w-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }                          
                            />
                            <button className="modal-open text-center rounded-xl bg-purple-700 text-gray-50 text-base font-bold py-4 px-8"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!--Modal-- >*/}
            <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center ">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="flex flex-col items-center modal-container relative bg-white w-11/12 max-w-md mx-auto shadow-lg z-50 p-8 overflow-y-auto rounded-2xl">
                    {/*<!-- Colose X absolute position-->*/}
                    <div className="modal-close cursor-pointer z-50 absolute top-8 right-8">
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path
                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                            </path>
                        </svg>
                    </div>
                    <div className="w-16 h-16 bg-purple-700 flex items-center justify-center rounded-2xl">
                        <svg className="h-6 w-6 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-center text-2xl mt-6">Reset email sent</h1>
                    <p className="text-center text-gray-500 text-sm mt-3">
                        We have just sent an email with a password reset link to
                        <span className="text-gray-900 font-bold">markclarke@gmail.com.</span>
                    </p>
                    <div className="flex justify-center w-full mt-12 ">
                        <button className="modal-close  px-4 bg-purple-700 p-4 rounded-lg text-gray-50 hover:bg-indigo-400 mr-4 w-40 font-bold">
                            Got it
                        </button>
                        <button className="px-4  bg-gray-100 p-4 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-purple-700 w-40 font-bold">
                            Send again
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ForgotPassword
