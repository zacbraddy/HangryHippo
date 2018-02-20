import React from 'react';
import logo from '../../common/images/hangry-logo.gif';
import '../styles/header.css';

const Header = () => (
  <div className="container-fluid header-container">
    <div className="row">
      <div className="col-md-2">
        <div className="header-logo center-block">
          /* Image goes here */
        </div>
      </div>
      <div className="col-md-4 text-center">
        /* Header and tag line goes here */
      </div>
    </div>
  </div>
);

export default Header;

