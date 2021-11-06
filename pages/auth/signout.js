import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Alert from '../../components/util/Alert';
import LoadingScreen from '../../components/util/LoadingScreen';
import useFireBaseAuth from '../../data_acess_layer/firebaseHooks';

const signout = () => {
    const { state, performAction } = useFireBaseAuth();
    const router = useRouter();
    useEffect(async () => {
        localStorage.getItem("uid") ? await performAction("signout") : "already sign out";
        !state.errormsg && router.push('/auth/signin')
    }, [])
    return (
        <div>
            {
                state.isloading && <LoadingScreen />
            }
            {
                state.errormsg &&
                <Alert color="error">
                    {state.errormsg}
                </Alert>
            }
        </div>
    )
}

export default signout
