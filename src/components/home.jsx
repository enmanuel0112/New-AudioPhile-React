import React from 'react';
import '../scss/StylesComponents/home.scss'
import { Menu, SectionBestAudio, Footer } from './staticsComponents';

// import { NavBar } from '';

export default function Home() {
    return (
        <>
            <div className='probando'>
                <h1>Home</h1>
                <Menu />

                <SectionBestAudio />
                <Footer />
            </div>
        </>

    )
}
