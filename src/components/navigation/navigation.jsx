import React from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
// import { selectAllBlog } from '../../redux/blog/blog.selector';
// import rightArrow from '../../assets/rightArrow.svg';
import './navigation.scss';

const Navigation = ({ location: { pathname } }) => {
  return (
    <div className="navigation">
      <ul className="nav-links">
        <li className={pathname === '/' ? 'active' : ''}>
          {' '}
          <Link to="/">Home</Link>{' '}
        </li>
        <li className={pathname === '/blog' ? 'active' : ''}>
          {' '}
          <Link to="/blog">Blog</Link>{' '}
        </li>
        <li className={pathname === '/book' ? 'active' : ''}>
          {' '}
          <Link to="/book">Book</Link>{' '}
        </li>
        <li className={pathname === '/about' ? 'active' : ''}>
          {' '}
          <Link to="about">About</Link>{' '}
        </li>
        <li className={pathname === '/contact' ? 'active' : ''}>
          {' '}
          <Link to="contact">Contact</Link>{' '}
        </li>
      </ul>
    </div>
  );
};
export default withRouter(Navigation);
