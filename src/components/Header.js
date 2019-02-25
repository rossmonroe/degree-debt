import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/css/Global.css';


class Header extends Component {
  render() {
    return (
      <div className='header'>
      <div className="header-content">
        <div id='top-logo'></div>
        <div className='navigation'>
            <ul>
              <li><Link className='nav-link' to= '/'>Student Debt Calculator</Link></li>
              <li><Link className='nav-link' to="/compare">Compare Degrees</Link></li>
              <li><Link className='nav-link' to="/learn">Learn</Link></li>
              <li><Link className='nav-link' to="/about">About</Link></li>
            </ul>
        </div>
      </div>
      <div id="header-title">
        <h1>Learn how your degree choice <br/>affects your financial future.</h1>
        <a href="#"><div className='button'>Get Started!</div></a>
      </div>
      </div>
    );
  }
}

export default (Header);