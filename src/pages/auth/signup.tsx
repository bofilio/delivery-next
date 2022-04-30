import React, { useEffect } from 'react'
import Link from 'next/link'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import UserIcon from '../../components/icons/UserIcon'
import MailIcon from '../../components/icons/MailIcon'
import KeyIcon from '../../components/icons/KeyIcon'
import useFireBaseAuth from '../../firebase/hooks/useFireBaseAuth'
import Alert from '../../components/util/Alert'
import LoadingScreen from '../../components/util/LoadingScreen'
import { useRouter } from 'next/router';

const SignUp = () => {
    const { state, performAction } = useFireBaseAuth();
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        await performAction("SIGNUP", { email: e.target.email.value, password: e.target.password.value });
    }
    useEffect(() => {
        state.data ? router.push("/") : "do nothing";
    }, [state])

    if (state.isloading)
        return <LoadingScreen />

    return (
        <div className="flex lg:flex-row flex-col min-h-screen">
            <Branding />
            <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 items-center">
                {
                    state.error &&
                    <Alert color="error">
                        {state.error}
                    </Alert>
                }
                <div className="max-w-xl flex-grow">
                    <div className="mb-12">
                        <h1 className="text-3xl text-dark text-left font-bold mb-3">
                            Create an account
                        </h1>
                    </div>

                    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
                        <div className="space-y-12 mb-12">
                            <InputBlock name="fullname" variant="md" color="primary" label="FULL NAME" type="text" placeholder="Enter yout Name"
                                icon={<UserIcon className="w-6 h-6" />}
                            />
                            <InputBlock name="email" variant="md" color="primary" label="EMAIL ADDRESS" placeholder="Enter your email" type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            <InputBlock name="password" variant="md" color="primary" label="PASSWORD" placeholder="Enter your password" type="password"
                                icon={<KeyIcon className="w-6 h-6" />}
                            />
                        </div>

                        <button disabled={state.isloading} type="submit" className="rounded-xl bg-primary text-gray-normal-50 font-bold py-4 px-8 mb-6">
                            Create an account
                        </button>

                        <div className="text-center text-gray-normal">
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
