import './scss/App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Earphones from './components/earphones';
import Headphones from './components/headphones';
import Speakers from './components/speakers';
import Home from './components/home';
import { Header } from './components/staticsComponents';
import StateComponents from './context/StateComponents';




function App() {

  return (
    <StateComponents>
      <>
        <Header />
        <Router>
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
