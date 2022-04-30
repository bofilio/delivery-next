import React from 'react'
import LoadingIcon from '../icons/LoadingIcon'
import Logo from './Logo'
const LoadingScreen = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-primary flex  items-center   justify-center z-50">
            <Logo text_color='text-dark' variant="notext" className=" relative animate-bounce text-text-light z-50"/>
        </div>
    )
}

export default LoadingScreen
