import React, { useContext, useEffect, useState } from 'react';
import { Cart } from '../cart/Cart';
import { CiUser } from "react-icons/ci";
// import { FaUserPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { contextComponents } from '../../context/contextComponents';
import { Loader } from "../loading/Loader";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
// Menu
export function Menu() {
  return (
    <>
      <div>
        <div className="menu-cointainer">
          <div className="menu-contain">
            <div className="menu-content">
              <div className="image-content">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-headphones.png`}
                  alt="Headphone"
                />
                <h3> headphones</h3>
                <div className="btn-content">
                  <Link to="/headphones" className="btn-default-3">
                    shop
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-contain">
            <div className="menu-content">
              <div className="image-content">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`}
                  alt="Headphone"
                />
                <h3> spearkers</h3>
                <div className="btn-content">
                  <Link to="/speakers" className="btn-default-3">
                    shop
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-contain">
            <div className="menu-content">
              <div className="image-content">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`}
                  alt="Headphone"
                />
                <h3> earphones</h3>
                <div className="btn-content">
                  <Link to="/earphones" className="btn-default-3">
                    shop
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
  );
}
//NavLinks
export const NavLinks = () => {
    return (
        <>
            <div className='btn-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/earphones' >Earphones</NavLink>
                <NavLink to='/headphones' >Headphones</NavLink>
                <NavLink to='/speakers' >Speakers</NavLink>
            </div>
        </>
    )
}

//Profile
export const Profile = () => {
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
    return <Loader />;
  }
  return (
    <>
      <div className="profile-options">
        <div className="profile-icon">
          {user ? (
            <FaSignOutAlt className="user-icon" />
          ) : (
            <FaUser className="user-icon" />
          )}
        </div>

        {user ? (
          <button onClick={() => signOutFromLogin()}>sing out</button>
        ) : (
          <Link to="/login">sign in</Link>
        )}
      </div>
    </>
  );
};

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const closeOtherComponents = () => {
    setToggleProfile(false);
    setToggleMenu(false);
    setToggleCart(false);
  };

  const handlerToggle = () => {
    closeOtherComponents();
    setToggleMenu(!toggleMenu);
  };

  const handlerCart = () => {
    closeOtherComponents();
    setToggleCart(!toggleCart);
  };

  const handlerProfile = () => {
    closeOtherComponents();
    setToggleProfile(!toggleProfile);
  };

  useEffect(() => {
    const links = document.querySelectorAll("a[href]");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }, []);

  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="menu-icon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/tablet/icon-hamburger.svg`}
              alt="Menu Icon"
              className="menu-hamburger"
              onClick={handlerToggle}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`}
              alt=""
              className="logo"
            />
          </div>
          <NavLinks />
          <div className="cart-icon">
            <div>
              <CiUser className="user-icon" onClick={handlerProfile} />
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-cart.svg`}
              alt=""
              onClick={handlerCart}
            />
          </div>
        </div>
      </div>

      <div className={toggleMenu ? "background-navbar" : ""}></div>
      <div className={toggleMenu ? "navbar" : "navbar-hidden"}>
        <div className="navbar-container">
          <Menu />
        </div>
      </div>

      <div
        className={toggleCart ? "background-cart" : "background-cart-hidden"}
      ></div>
      <div className={toggleCart ? "cart-active" : "cart-hidden"}>
        <div className="cart">
          <div className="cart-container">
            <Cart toggleCart={toggleCart} />
          </div>
        </div>
      </div>
      <div
        className={toggleProfile ? "background-cart" : "background-cart-hidden"}
      ></div>
      <div className={toggleProfile ? "profile-active" : "profile-hidden"}>
        <div className="profile">
          <div className="profile-container">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
