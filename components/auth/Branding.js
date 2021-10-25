import React from 'react'

const Branding = () => {
    return (
        <div className="lg:w-2/5 lg:min-h-screen w-full h-80 lg:rounded-r-3xl lg:rounded-bl-none rounded-b-3xl bg-hero-pattern bg-cover bg-no-repeat flex justify-center items-center">
            <div className="flex items-center">
                <img className="w-20 h-16 mr-4" src="https://cdn-icons-png.flaticon.com/512/3075/3075929.png" />
                <h1 className="text-gray-200 text-4xl">Nibble</h1>
            </div>
        </div>
    )
}

export default Branding
