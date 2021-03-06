import React, { useContext, useState, useEffect } from 'react'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import MailIcon from '../../components/icons/MailIcon'
import ForgotPasswordModal from '../../components/auth/modals/ForgotPasswordModal'
import Modal from '../../components/modals/Modal'
import OpenModal from '../../components/modals/OpenModal'
import { ModalProvider } from '../../contexts/ModalContext'
import useFireBaseAuth from '../../firebase/hooks/useFireBaseAuth'
import LoadingScreen from '../../components/util/LoadingScreen'
import Alert from '../../components/util/Alert'
import { useRouter } from 'next/router'

const ForgotPassword = ({ emailadress }) => {
    const { state, performAction } = useFireBaseAuth();
    const [email, setemail] = useState("")
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault();
        await performAction("SEND_RESET_PASSWORD_EMAIL", { email: e.target.email.value });
        setemail(e.target.email.value);
    }
    useEffect(() => {
        state.data ? router.push("/") : "do nothing";
    }, [state])

    return (
        <>
            <div className="flex lg:flex-row flex-col min-h-screen">
                {
                    state.isloading && <LoadingScreen />
                }
                <Branding />
                <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">

                    <div className="max-w-xl flex-grow">
                        <div className="mb-12">
                            <h1 className="text-3xl text-dark text-left font-bold mb-3">Forget password?</h1>
                            <span className="text-xl text-gray-normal">Please enter your email address to continue </span>
                        </div>
                        <form className="flex flex-col space-y-12" onSubmit={(e) => handleSubmit(e)}>
                            {/*<!-- component-->*/}
                            <InputBlock name='email' variant="md" color="primary" placeholder="Enter your email adress" label="EMAIL ADDRESS" default_value={emailadress} type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            {/*modal*/}
                            <ModalProvider>
                                <OpenModal >
                                    <button type="submit" className="w-full text-center rounded-xl bg-primary text-text-light text-base font-bold py-4 px-8" >
                                        Continue
                                    </button>
                                </OpenModal>

                                <ForgotPasswordModal errormsg={state.error} email={email} />

                            </ModalProvider>
                            <button onClick={router.back} className="w-full text-center rounded-xl bg-transparent-primary text-primary text-base font-bold py-4 px-8" >
                                Back
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!--Modal-- >*/}


        </>
    )
}

export default ForgotPassword
