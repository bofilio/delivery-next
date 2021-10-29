import React from 'react'
import PageHead from '../settings/Head'
import Main from './Main'
import SideBar from './SideBar'
import TopBar from './TopBar'

const Layout = ({children}) => {
    return (
        <>
            <PageHead />
            <SideBar />
            <Main>
                <TopBar />
                {children}
            </Main>
        </>
    )
}

export default Layout
