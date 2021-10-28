import React from 'react'

const Main = ({children}) => {
    return (
        <main className=" relative flex flex-col p-8  lg:ml-80 ml-28 ">
            {children}
        </main>
    )
}

export default Main
