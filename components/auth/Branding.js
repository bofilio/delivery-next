import React from 'react'
import Logo from '../Logo'

const Branding = () => {
   
    return (
        <div className="lg:w-2/5 lg:min-h-screen w-full h-80 lg:rounded-r-3xl lg:rounded-bl-none rounded-b-3xl bg-hero-pattern bg-cover bg-no-repeat flex justify-center items-center">
            <Logo variant="big" text_color="text-gray-100"/>
        </div>
    )
}

export default Branding
