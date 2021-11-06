import React from 'react'
import LoadingIcon from '../icons/LoadingIcon'

const LoadingScreen = () => {
    return (
        <div className="fixed w-full h-full flex items-center bg-dark opacity-50 justify-center z-50">
            <LoadingIcon className=" relative animate-spin w-12 h-12 text-light z-50"/>
    
        </div>
    )
}

export default LoadingScreen
