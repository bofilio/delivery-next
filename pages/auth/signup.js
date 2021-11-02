import React from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
const SignUp = () => {
    return (
        <div className="flex lg:flex-row flex-col min-h-screen">
            <Branding />
            <div className="flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 items-center">
                <div className="max-w-xl flex-grow">
                    <div className="mb-12">
                        <h1 className="text-3xl text-dark text-left font-bold mb-3">
                            Create an account
                        </h1>
                        <span className="text-xl text-gray">Plese create an account to
                        </span>
                    </div>

                    <form className="flex flex-col">
                        <InputBlock label="FULL NAME" type="text" placeholder="Enter yout Name"
                            icon={
                                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            }
                        />
                        <InputBlock label="EMAIL ADDRESS" type="email" placeholder="Enter your email Adress"
                            icon={
                                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                        />
                        <InputBlock label="PASSWORD" type="password" placeholder="Enter A password"
                            icon={
                                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            }
                        />
                        <Link href="/">
                            <button className=" rounded-xl bg-primary text-gray-50 font-bold py-4 px-8 mb-6" >
                                Create an account
                            </button>
                        </Link>

                        <div className="text-center text-gray">
                            Already have an account?
                            <Link href="/auth/signin">
                                <a className="text-secondary font-bold"> Sign In</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignUp
