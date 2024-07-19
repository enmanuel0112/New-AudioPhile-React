import React from 'react';
import { Footer, Header, SectionBestAudio, } from './staticsComponents';

function Layout({ children }) {
    return (
        <div>

            <Header />
            {children}

            <SectionBestAudio />
            <Footer />
        </div>
    )
}

export default Layout