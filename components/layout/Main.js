import React from 'react'

const Main = ({children}) => {
    return (
        <main className="relative min-h-screen flex flex-col p-8 ml-0 md:ml-28 lg:ml-80">
            {children}
        </main>
    )
}

export default Main
