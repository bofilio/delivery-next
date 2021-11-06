import React, { useEffect } from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import KeyIcon from '../../components/icons/KeyIcon'
import MailIcon from '../../components/icons/MailIcon'
import { useRouter } from 'next/router'
import useFireBaseAuth from '../../firebase/hooks/useFireBaseAuth'
import LoadingScreen from '../../components/util/LoadingScreen'
import Alert from '../../components/util/Alert'
const SignIn = () => {

    const { state, performAction } = useFireBaseAuth();
    const router = useRouter();
    
    async function handleSubmit(e) {
        e.preventDefault();
        await performAction("signin", { email: e.target.email.value, password: e.target.password.value });
    }
    useEffect(() => {
        state.uid ? router.push("/") : "do nothing";
    }, [state])

    return (
        <div className="flex lg:flex-row flex-col min-h-screen">
            {
                state.isloading && <LoadingScreen />
            }
            <Branding />
            <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                {
                    state.errormsg &&
                    <Alert color="error">
                        {state.errormsg}
                    </Alert>
                }
                <div className="max-w-xl flex-grow">
                    <div className="mb-12">
                        <h1 className="text-3xl text-dark text-left font-bold mb-3">Welcome!</h1>
                        <span className="text-xl text-gray">Sign in to your account to continue </span>
                    </div>
                    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
                        <div className="space-y-12 mb-12">
                            <InputBlock name="email" variant="md" color="primary" label="EMAIL ADDRESS" placeholder="Enter your email" type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            <InputBlock name="password" variant="md" color="primary" label="PASSWORD" placeholder="Enter your password" type="password"
                                icon={<KeyIcon className="w-6 h-6" />}
                            />
                        </div>
                        <button type="submit" className="rounded-xl bg-tr-primary text-primary text-base font-bold py-4 px-8 mb-6">
                            Signin
                        </button>

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
