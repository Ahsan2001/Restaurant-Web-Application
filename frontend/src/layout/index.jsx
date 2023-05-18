import React from 'react'
import { Footer, Header } from '../components'


const Layout = (props) => {
    return (
        <>
            <header>
              <Header />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;