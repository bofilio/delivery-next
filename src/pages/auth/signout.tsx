import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Alert from '../../components/util/Alert';
import LoadingScreen from '../../components/util/LoadingScreen';
import useFireBaseAuth from '../../firebase/hooks/useFireBaseAuth';
import { getUserfromStorage } from '../../helpers';
import { logout } from '../../services';

const Signout = () => {
    const router = useRouter();
    useEffect(() => {
       if(getUserfromStorage() !== null ) {
        logout();
        router.back();
       }
    }, [])

    return (
        <></>
    )
}

export default Signout
