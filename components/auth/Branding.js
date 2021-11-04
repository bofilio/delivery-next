import React from 'react'
import Logo from '../util/Logo'

const Branding = () => {
   
    return (
        <div className="flex justify-center items-center lg:w-2/5 w-full lg:min-h-screen h-80 lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none  bg-hero-pattern bg-cover bg-no-repeat ">
            <Logo variant="big" text_color="text-light"/>
        </div>
    )
}

export default Branding
