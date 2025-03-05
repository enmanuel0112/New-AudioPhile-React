import React from 'react';
import '../scss/StylesComponents/home.scss'
import { Menu } from './staticsComponents';
import { Link } from 'react-router-dom';
import Layout from './layout';





export default function Home() {
    return (
        <Layout>
            <div className="hero">
                <img className='image-desktop' src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg`} alt="" />
                <img className='image-tablet' src={`${process.env.PUBLIC_URL}` / assets / home / tablet / image - header.jpg} alt="" />
                <img className='image-mobile' src={`${process.env.PUBLIC_URL}/assets/home/mobile/image-header.jpg`} alt="" />
                <div className="hero-container">
                    <div className="hero-content">
                        <div className='heading'>
                            <h3>new product</h3>
                            <h1>xx99 mark ii<br /> headphones</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <Link className='btn-default-1' to='/headphones'>see product</Link>
                        </div>

                    </div>
                </div>
            </div>
            <Menu />

            <div className='zx9-section'>
                <div className='zx9-container'>
                    <div className='zx9-content'>
                        <img src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx9.png `} alt="" />
                        <div className='zx9-desciption'>
                            <h3>zx9 <br />speaker</h3>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link className='btn-default-2' to='/speakers'> see product</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zx7-section">
                <div className="zx7-container">
                    <img className='img-desktop' src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx7.jpg`} alt="" />
                    <img className='img-tablet' src={`${process.env.PUBLIC_URL}/assets/home/tablet/image-speaker-zx7.jpg`} alt="" />
                    <img className='img-mobile' src={`${process.env.PUBLIC_URL}/assets/home/mobile/image-speaker-zx7.jpg `} alt="" />
                    <div className="zx7-content">
                        <h3>zx7 speaker</h3>
                        <Link className='btn-default-3' to='/speakers'> see product</Link>
                    </div>

                </div>
            </div>

            <div className="yx1-section">
                <div className="yx1-earphone-container">
                    <div className="yx1-earphone-img">

                        <img className='img-desktop' src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-earphones-yx1.jpg`} alt="" />
                        <img className='img-tablet' src={`${process.env.PUBLIC_URL}/assets/home/tablet/image-earphones-yx1.jpg`} alt="" />
                        <img className='img-mobile' src={`${process.env.PUBLIC_URL}/assets/home/mobile/image-earphones-yx1.jpg`} alt="" />

                    </div>

                    <div className="yx1-earphone-contain">
                        <div className="yx1-earphone-content">
                            <h3>yx1 earphones</h3>
                            <Link className='btn-default-3' to='/earphones'>see product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
