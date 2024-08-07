import React, { useState, useContext, useEffect } from 'react';
import { contextComponents } from '../context/contextComponents';
import { Link } from 'react-router-dom';
import '../scss/staticsComponents/staticsComponents.scss';
import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
// import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";


const Cart = () => {
    const { cartProduct, user } = useContext(contextComponents);
    let total = 0;

    return (<>
        <div className="cart-content">
            <div className="cart-product-details">
                <div className="cart-items-number">
                    <p>Cart (<span>{cartProduct.length}</span>)</p>
                    <button >Remove all</button>
                </div>
                <div className="product-added">
                    {cartProduct.map(items => {

                        let totalPrice = items.price;

                        let totalQuantity = items.quantity;

                        total = total + totalQuantity * totalPrice;

                        return (
                            <>
                                <div className="cart-product">
                                    <div className="cart-product-info">
                                        <img className='img-product' key={items.id} src={items.image} alt="" />

                                        <div className="product-info">
                                            <p className='product-name' key={items.id}>{items.name}</p>
                                            <p className='product-price' key={items.id}>{items.price}</p>
                                        </div>
                                    </div>


                                    <div className="product-amount">
                                        <button>-</button>
                                        <p>{items.quantity}</p>
                                        <button >+</button>

                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>


                <div className="products-total">
                    <p className='total'>total</p>
                    <p className='total-amount-to-pay'>$ {total}</p>
                </div>
            </div>
            <div className="btn-checkout">
                <Link className='btn-default-1' to={user ? '/checkout' : '/login'}>checkout</Link>
            </div>
        </div>
    </>)
}

const Profile = () => {
    const { user, signOutFromLogin } = useContext(contextComponents);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simular una llamada asincrónica, por ejemplo, para verificar la autenticación
        const timer = setTimeout(() => {
            setLoading(false); // Cambia el estado a 'false' después de la carga
        }, 2000); // Ajusta el tiempo de carga según sea necesario

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, []);

    if (loading) {
        return <Loader />
    }
    return (
        <>

            <div className="profile-options">
                <div className="profile-icon">
                    {user ? <FaSignOutAlt className='user-icon' /> : <FaUser className='user-icon' />}
                </div>
                {user ? <button onClick={() =>
                    signOutFromLogin()}>sing out</button>
                    : <Link to='/login'>sign in</Link>
                }
            </div>



        </>
    )
}

export const Loader = () => {
    return <div class="loader">
        <div className="loading"></div>
    </div>
}

const NavLinks = () => {
    return (
        <>
            <div className='btn-nav'>

                <Link to='/'>Home</Link>
                <Link to='/earphones' >Earphones</Link>
                <Link to='/headphones' >Headphones</Link>
                <Link to='/speakers' >Speakers</Link>

            </div>
        </>
    )
}

export function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCart, setToggleCart] = useState(false)
    const [toggleProfile, setToggleProfile] = useState(false);


    const handlerToggle = () => {
        setToggleMenu(!toggleMenu);
    }
    const handlerCart = () => {
        setToggleCart(!toggleCart)

    }
    const handlerProfile = () => {
        setToggleProfile(!toggleProfile);
    }

    return (
        <>
            <div className='nav'>
                <div className='nav-container'>
                    <div className='menu-icon'>
                        <img src='/assets/shared/tablet/icon-hamburger.svg' alt="Menu Icon" className='menu-hamburger'
                            onClick={handlerToggle}
                        />
                        <img src="/assets/shared/desktop/logo.svg" alt="" className='logo' />

                    </div>
                    <NavLinks />
                    <div className='cart-icon'>
                        <div>
                            <CiUser className='user-icon' onClick={handlerProfile} />
                        </div>
                        <img src='/assets/shared/desktop/icon-cart.svg' alt=""
                            onClick={handlerCart} />

                    </div>
                </div>
            </div>

            <div className={toggleMenu ? 'background-navbar' : ''}></div>
            <div className={toggleMenu ? 'navbar' : 'navbar-hidden'}>
                <div className="navbar-container">
                    <Menu />
                </div>
            </div>

            <div className={toggleCart ? 'background-cart' : 'background-cart-hidden'}></div>
            <div className={toggleCart ? 'cart-active' : 'cart-hidden'}>
                <div className="cart" >
                    <div className='cart-container' >
                        <Cart toggleCart={toggleCart} />
                    </div>
                </div>
            </div>
            <div className={toggleProfile ? 'background-cart' : 'background-cart-hidden'}></div>
            <div className={toggleProfile ? 'profile-active' : 'profile-hidden'}>
                <div className='profile'>
                    <div className="profile-container">
                        <Profile />
                    </div>
                </div>
            </div>



        </>
    )
}

export function Menu() {
    return (
        <>
            <div>
                <div className='menu-cointainer'>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src='/assets/shared/desktop/image-category-thumbnail-headphones.png' alt="Headphone" />
                                <h3>  headphones</h3>
                                <div className="btn-content">
                                    <Link to='/headphones'
                                        className='btn-default-3'>shop
                                        <span>
                                            <IoIosArrowForward />
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src='/assets/shared/desktop/image-category-thumbnail-speakers.png' alt="Headphone" />
                                <h3>  spearkers</h3>
                                <div className="btn-content">
                                    <Link to='/speakers'
                                        className='btn-default-3'>shop
                                        <span>
                                            <IoIosArrowForward />
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menu-contain'>
                        <div className='menu-content'>
                            <div className='image-content'>
                                <img src='/assets/shared/desktop/image-category-thumbnail-earphones.png' alt="Headphone" />
                                <h3>  earphones</h3>
                                <div className="btn-content">
                                    <Link to='/earphones'
                                        className='btn-default-3'>shop
                                        <span>
                                            <IoIosArrowForward />
                                        </span>
                                    </Link>

                                </div>

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
                <div className="best-audio-image-content-mobile">
                    <img src='/assets/shared/mobile/image-best-gear.jpg' alt="" />
                </div>
                <div className="best-audio-image-content-tablet">
                    <img src='/assets/shared/tablet/image-best-gear.jpg' alt="" />
                </div>
                <div className="best-audio-content">
                    <h2>bringing you the <span>best</span>  audio gear</h2>

                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="best-audio-image-content">
                    <img src='/assets/shared/desktop/image-best-gear.jpg' alt="" />
                </div>

            </div>
        </>
    )
}


export function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-navar">
                    <h2>audiophile</h2>

                    <div className='footer-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/earphones' >Earphones</Link>
                        <Link to='/headphones' >Headphones</Link>
                        <Link to='/speakers' >Speakers</Link>
                    </div>
                </div>
                <div className='footer-contain'>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className='icons-footer'>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-facebook.svg' alt="" />
                        </div>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-twitter.svg' alt="" />
                        </div>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-instagram.svg' alt="" />
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p>Copyright 2021. All Rights Reserved</p>
                    <div className='icons-footer-responsive'>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-facebook.svg' alt="" />
                        </div>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-twitter.svg' alt="" />
                        </div>
                        <div className="icons">
                            <img src='/assets/shared/desktop/icon-instagram.svg' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

