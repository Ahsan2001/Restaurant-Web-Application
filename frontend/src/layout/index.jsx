import React from 'react'
import { Footer, Header } from '../components'

const Layout = (props) => {
    const {children} = props;
    return (
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout;