import React from 'react'
import PageHead from '../settings/Head'
import Main from './Main'
import SideBar from './SideBar'
import TopBar from './TopBar'

const Layout = ({children}) => {
    return (
        <>
            <PageHead />
            <SideBar className="md:flex hidden lg:w-80 w-28 rounded-r-3xl"/>
            <Main>
                <TopBar />
                {children}
            </Main>
        </>
    )
}

export default Layout
