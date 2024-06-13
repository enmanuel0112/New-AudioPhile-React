import React from 'react'
// import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Earphones from './earphones';
// import Home from './home';
// import Headphones from './headphones';
// import Speakers from './speakers';
// import cart from '../assets/shared/desktop/icon-cart.svg';
// import menuIcon from '../assets/shared/tablet/icon-hamburger.svg'
import bestAudioImage from '../assets/shared/desktop/image-best-gear.jpg'
import '../scss/staticsComponents/staticsComponents.scss';
import headphoneImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphoneImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakerImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { MdArrowForwardIos } from "react-icons/md";


// export function NavBar() {
//     return (
//         <div className='nav'>
//             <div className='nav-container'>
//                 <div className='menu-icon'>
//                     <img src={menuIcon} alt="Menu Icon" />
//                     <h1>audiophile</h1>
//                 </div>

//                 <div className='btn-nav'>
//                     <Router>
//                         <Link to='/'>Home</Link>
//                         <Link to='earphones' >Earphones</Link>
//                         <Link to='headphones' >Headphones</Link>
//                         <Link to='speakers' >Speakers</Link>

//                         <Routes>
//                             <Route path='/' element={<Home />} />
//                             <Route path='/earphones'
//                                 element={<Earphones />} />
//                             <Route path='/headphones'
//                                 element={<Headphones />} />
//                             <Route path='/speakers'
//                                 element={<Speakers />} />
//                         </Routes>
//                     </Router>
//                 </div>
//                 <div className='cart'>
//                     <img src={cart} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Menu() {
    return (
        <>
            <div>
                <div className='menu-cointainer'>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src={headphoneImage} alt="Headphone" />
                                <h3>  headphones</h3>
                                <button className='btn-default-3'>shop
                                    <span>
                                        {MdArrowForwardIos}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src={speakerImage} alt="Headphone" />
                                <h3>  spearkers</h3>
                                <button className='btn-default-3'>shop
                                    <span>
                                        {MdArrowForwardIos}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src={earphoneImage} alt="Headphone" />
                                <h3>  earphones</h3>
                                <button className='btn-default-3'>shop
                                    <span>
                                        {MdArrowForwardIos}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SectionBestAudio() {

    return (
        <>

            <div className="best-audio-container">
                <div className="best-audio-content">
                    <h2>bringing you the <span>best</span>  audio gear</h2>

                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="best-audio-image-content">
                    <img src={bestAudioImage} alt="" />
                </div>

            </div>
        </>
    )
}



export function Footer() {
    return (
        <div>
            <h2>Footer</h2>
        </div>

    )
}
