import React from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import UserIcon from '../../components/icons/UserIcon'
import MailIcon from '../../components/icons/MailIcon'
import KeyIcon from '../../components/icons/KeyIcon'
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
                        <div className="space-y-12 mb-12">
                            <InputBlock variant="md" color="primary" label="FULL NAME" type="text" placeholder="Enter yout Name"
                                icon={<UserIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="md" color="primary" label="EMAIL ADDRESS" placeholder="Enter your email" type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            <InputBlock variant="md" color="primary" label="PASSWORD" placeholder="Enter your password" type="password"
                                icon={<KeyIcon className="w-6 h-6" />}
                            />
                        </div>

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
