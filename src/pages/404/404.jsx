import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import notF from '../../assets/404.svg';
import './404.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <Helmet>
        <title>Daring RavenX &mdash; 404 Error</title>
        <meta property="og:title" content="Daring RavenX &mdash; 404 Error" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Daring RavenX" />
      </Helmet>
      <div id="notfoundIllustration">
        <img src={notF} alt="404" />
      </div>
      <div className="redirectSection">
        <h2>404 ERROR</h2>
        <p>SORRY THIS PAGE IS NOT FOUND</p>
        <Link className="btn-home" to="/">
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
