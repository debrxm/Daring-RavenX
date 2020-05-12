import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './side-nav.scss';
const SideNav = ({ handleToggleSidebar }) => {
  return (
    <div className="side-nav">
      <div className="links">
        <Link to="/" className="option" onClick={handleToggleSidebar}>
          HOME
        </Link>
        <Link to="/blog" className="option" onClick={handleToggleSidebar}>
          BLOG
        </Link>
        <Link to="/book" className="option" onClick={handleToggleSidebar}>
          BOOK
        </Link>
        <Link to="/about" className="option" onClick={handleToggleSidebar}>
          ABOUT
        </Link>
        <Link to="/contact" className="option" onClick={handleToggleSidebar}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};
export default withRouter(SideNav);
