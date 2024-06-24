import React from 'react';
import '../scss/StylesComponents/home.scss'
import { SectionBestAudio, Footer } from './staticsComponents';
import { Menu } from './staticsComponents';

const images = require.context('./../assets');

export default function Home() {
    return (
        <>
            <div className="hero">
                <img className='image-desktop' src={images('./home/desktop/image-hero.jpg')} alt="" />
                <img className='image-tablet' src={images('./home/tablet/image-header.jpg')} alt="" />
                <img className='image-mobile' src={images('./home/mobile/image-header.jpg')} alt="" />
                <div className="hero-container">
                    <div className="hero-content">
                        <div className='heading'>
                            <h3>new product</h3>
                            <h1>xx99 mark ii<br /> headphones</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <button className='btn-default-1'>see product</button>
                        </div>

                    </div>
                </div>
            </div>
            <Menu />

            <div className='zx9-section'>
                <div className='zx9-container'>
                    <div className='zx9-content'>
                        <img src={images('./home/desktop/image-speaker-zx9.png')} alt="" />
                        <div className='zx9-desciption'>
                            <h3>zx9 <br />speaker</h3>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <button className='btn-default-2'> see product</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zx7-section">
                <div className="zx7-container">
                    <img src={images('./home/desktop/image-speaker-zx7.jpg')} alt="" />
                    <div className="zx7-content">
                        <h3>zx7 speaker</h3>
                        <button>see product</button>
                    </div>

                </div>
            </div>
            <SectionBestAudio />
            <Footer />

        </>

    )
}
