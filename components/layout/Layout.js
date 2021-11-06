import React from 'react'
import Head from 'next/head'
import Main from './Main'
import SideBar from './SideBar'
import TopBar from './TopBar'
import AuthRequired from '../gardians/AuthRequired'

const Layout = ({ children }) => {
    return (
        <AuthRequired>
            <Head>
                <meta charset="utf-8"/>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <title>Delivery Food</title>
            </Head>

            <SideBar className="md:flex hidden lg:w-80 w-28 rounded-r-3xl" />
            <Main>
                <TopBar />
                {children}
            </Main>
        </AuthRequired>
    )
}

export default Layout
