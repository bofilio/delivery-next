import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Alert from '../../components/util/Alert';
import LoadingScreen from '../../components/util/LoadingScreen';
import useFireBaseAuth from '../../firebase/hooks/useFireBaseAuth';
import { getUserfromStorage } from '../../helpers';

const signout = () => {
    const { state, performAction } = useFireBaseAuth();
    const router = useRouter();
    useEffect(() => {
        getUserfromStorage() !== null &&
            performAction("SIGNOUT").then(() => {
                router.push('/auth/signin')
            })
    }, [])
    if (state.isloading)
        return (
            <LoadingScreen />
        )
    if (state.error)
        return (
            <div>
                <Alert color="error">
                    {state.error}
                </Alert>
            </div>
        )
    return (
        <></>
    )
}

export default signout
