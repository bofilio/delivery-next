import React, { useContext, useState, useEffect } from 'react'
import Branding from '../../components/auth/Branding'
import InputBlock from '../../components/auth/InputBlock'
import MailIcon from '../../components/icons/MailIcon'
import ForgotPasswordModal from '../../components/auth/modals/ForgotPasswordModal'
import Modal from '../../components/modals/Modal'
import OpenModal from '../../components/modals/OpenModal.js'
import { ModalProvider } from '../../contexts/ModalContext'
import useFireBaseAuth from '../../data_acess_layer/firebaseHooks'
import LoadingScreen from '../../components/util/LoadingScreen'
import Alert from '../../components/util/Alert'

const ForgotPassword = ({emailadress}) => {
    const { state, performAction } = useFireBaseAuth();
    const [email, setemail] = useState("")
    async function handleSubmit(e) {
        e.preventDefault();
        await performAction("send_reset_password_email", { email: e.target.email.value });
        setemail(e.target.email.value);
    }
    useEffect(() => {
        state.uid ? router.push("/") : "do nothing";
    }, [state])

    return (
        <>
            <div className="flex lg:flex-row flex-col min-h-screen">
                {
                    state.isloading && <LoadingScreen />
                }
                <Branding />
                <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
                    {
                       /* state.errormsg &&
                        <Alert color="error">
                            {state.errormsg}
                        </Alert>*/
                    }
                    <div className="max-w-xl flex-grow">
                        <div className="mb-12">
                            <h1 className="text-3xl text-dark text-left font-bold mb-3">Forget password?</h1>
                            <span className="text-xl text-gray">Please enter your email address to continue </span>
                        </div>
                        <form className="flex flex-col space-y-12" onSubmit={(e) => handleSubmit(e)}>
                            {/*<!-- component-->*/}
                            <InputBlock name='email' variant="md" color="primary" placeholder="Enter your email adress" label="EMAIL ADDRESS" default_value={emailadress} type="email"
                                icon={<MailIcon className="w-6 h-6" />}
                            />
                            {/*modal*/}
                            <ModalProvider>
                                <OpenModal>
                                    <button type="submit" className="w-full text-center rounded-xl bg-primary text-light text-base font-bold py-4 px-8" >
                                        Continue
                                    </button>
                                </OpenModal>

                                <ForgotPasswordModal errormsg={state.errormsg}  email={email} />

                            </ModalProvider>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!--Modal-- >*/}


        </>
    )
}

export default ForgotPassword
