import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../side-nav/side-nav';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
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
        <nav>
          <Link to="/">
            <div className="branding">
              <img src={logo} alt="logo" />
              <h3>Daring RavenX</h3>
            </div>
          </Link>
          <Navigation />
        </nav>
        {/* <nav className={`${isShow ? 'dark' : ''} navbar`}>
          <div className="nav-links container">
            <div className="show">
              <div className="brand">
                <Link to="/">
                  <h3>Daring RavenX</h3>
                </Link>
              </div>

              <img
                src={isShow ? close : menu}
                className="menu-button"
                alt="MenuIcon"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </nav> */}
        {/* <Hero /> */}
      </header>
    </>
  );
};

export default Header;
