import React from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import KeyIcon from '../../components/icons/KeyIcon'
import MailIcon from '../../components/icons/MailIcon'
const SignIn = () => {
    return (
        <div className="flex lg:flex-row flex-col min-h-screen">
            <Branding />
            <div className="flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                <div className="max-w-xl flex-grow">
                    <div className="mb-12">
                        <h1 className="text-3xl text-dark text-left font-bold mb-3">Welcome!</h1>
                        <span className="text-xl text-gray">Sign in to your account to continue </span>
                    </div>
                    <form className="flex flex-col">
                        <div className="space-y-12 mb-12">
                            <InputBlock variant="md" color="primary" label="EMAIL ADDRESS" placeholder="Enter your email" type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="md" color="primary" label="PASSWORD" placeholder="Enter your password" type="password"
                                icon={<KeyIcon className="w-6 h-6" />}
                            />
                        </div>
                        
                        <Link href="/">
                            <button className="rounded-xl bg-tr-primary text-primary text-base font-bold py-4 px-8 mb-6">
                                Signin
                            </button>
                        </Link>
                        <div className="text-center mb-6">
                            <Link href="/auth/forgot_password">
                                <a className="text-gray" >forgot password? </a>
                            </Link>
                        </div>
                        <Link href="/auth/signup">
                            <a className=" text-center rounded-xl bg-primary text-light text-base font-bold py-4 px-8">
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
