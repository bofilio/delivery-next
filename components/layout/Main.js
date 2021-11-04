import React from 'react'

const Main = ({children}) => {
    return (
        <main className="relative min-h-screen flex flex-col p-8  lg:ml-80 md:ml-28 ml-0">
            {children}
        </main>
    )
}

export default Main
