import React from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
const SignIn = () => {
    return (
        <div className="flex lg:flex-row flex-col min-h-screen">
            <Branding/>
            <div className="flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                <div className="max-w-xl flex-grow">
                    <div className="mb-12">
                        <h1 className="text-3xl text-gray-900 text-left font-bold mb-3">Welcome!</h1>
                        <span className="text-xl text-gray-500">Sign in to your account to continue </span>
                    </div>
                    <form className="flex flex-col">
                    <InputBlock label="EMAIL ADDRESS" default_value="markclarck@gmail.com"
                            icon={
                                <svg className="h-6 w-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                        />
                        <InputBlock label="PASSWORD" default_value="*******"
                            icon={
                                <svg className="h-6 w-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            }
                        />
                        <button className="rounded-xl bg-purple-100 text-purple-700 text-base font-bold py-4 px-8 mb-6" disabled>Sign
                            in</button>
                        <div className="text-center mb-6">
                            <Link href="/auth/forgot_password">
                                <a className="text-gray-500" >forgot password? </a>
                            </Link>
                        </div>
                        <Link href="/auth/signup">
                            <a className=" text-center rounded-xl bg-purple-700 text-gray-50 text-base font-bold py-4 px-8">
                                Create an account
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
