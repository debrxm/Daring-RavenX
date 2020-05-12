import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../side-nav/side-nav';
import logo from '../../assets/logo.png';
// import instagram from '../../assets/instagram.svg';
// import facebook from '../../assets/facebook.svg';
// import twitter from '../../assets/twitter.svg';
// import Hero from '../hero/hero';
import './header.scss';
import Navigation from '../navigation/navigation';

const Header = () => {
  const [isShow, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!isShow);
  };
  return (
    <>
      {isShow ? <SideNav handleToggleSidebar={toggleMenu} /> : null}
      <header className="header">
        <nav className="navbar-lg">
          <Link to="/">
            <div className="branding">
              <img src={logo} alt="logo" />
              <h3>Daring RavenX</h3>
            </div>
          </Link>
          <Navigation />
        </nav>
        <nav className={`${isShow ? 'dark' : ''} navbar-sm`}>
          <div className="nav-links container">
            <div className="show">
              <div className="brand">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div
                className={isShow ? 'menu-close' : 'menu-open'}
                onClick={toggleMenu}
              >
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
              </div>
            </div>
          </div>
        </nav>
        {/* <Hero /> */}
      </header>
    </>
  );
};

export default Header;
