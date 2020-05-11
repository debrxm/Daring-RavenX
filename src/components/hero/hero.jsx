import React from 'react';
import { withRouter } from 'react-router-dom';
import './hero.scss';
const Hero = ({ history }) => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h2>
          {history.location.pathname === '/'
            ? 'DARING RAVENX'
            : history.location.pathname.slice(1).toUpperCase()}
        </h2>
      </div>
    </div>
  );
};
export default withRouter(Hero);
