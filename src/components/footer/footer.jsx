import React from 'react';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
// import InstagramPosts from '../instagram/instagram';
import twitter from '../../assets/twitter.svg';
import logo from '../../assets/logo.png';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      {/* <InstagramPosts /> */}
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="logo" />
          <br />
          <h4>Daring RavenX</h4>
        </div>
        <br />
        <a href="https://web.facebook.com/profile.php?id=100013327810283">
          <div className="logo-border">
            <img src={facebook} alt="Facebook Logo" />
          </div>
        </a>
        <a href="https://twitter.com/ozzycodes">
          <div className="logo-border">
            <img src={twitter} alt="Twitter Logo" />
          </div>
        </a>
        <a href="https://www.instagram.com/ozzycodes/">
          <div className="logo-border">
            <img src={instagram} alt="Instagram Logo" />
          </div>
        </a>
      </div>
      <br />
      <p className="copyright">
        &copy; {new Date().getFullYear()} Daring RavenX design by{' '}
        <a
          href="https://ozzy-dev.netlify.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          ozzy-dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
