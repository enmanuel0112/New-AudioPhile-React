import './scss/App.scss';
// import React, { useContext } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Earphones from './components/earphones';
import Headphones from './components/headphones';
import Speakers from './components/speakers';
import cart from './assets/shared/desktop/icon-cart.svg';
import menuIcon from './assets/shared/tablet/icon-hamburger.svg'
import Home from './components/home';

import StateComponents from './context/StateComponents';



function App() {

  return (
    <StateComponents>
      <>
        <div className='nav'>
          <div className='nav-container'>
            <div className='menu-icon'>
              <img src={menuIcon} alt="Menu Icon" />
              <h1>audiophile</h1>
            </div>

            <div className='btn-nav'>

            </div>
            <div className='cart'>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='earphones' >Earphones</Link>
          <Link to='headphones' >Headphones</Link>
          <Link to='speakers' >Speakers</Link>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/earphones'
              element={<Earphones />} />
            <Route path='/headphones'
              element={<Headphones />} />
            <Route path='/speakers'
              element={<Speakers />} />
          </Routes>
        </Router>
      </>
    </StateComponents>
  );
}

export default App;
