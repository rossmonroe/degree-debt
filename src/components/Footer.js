import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/css/Global.css';


class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        
        <div id="footer-content">
          <div className='opacity-50 separator margin-10'></div>
          <div id='footer-logo'></div>
          <div className='footer-navigation'>
              <ul>
                <li><Link className='nav-link' to= '/'>Student Debt Calculator</Link></li>
                <li><Link className='nav-link' to="/compare">Compare Degrees</Link></li>
                <li><Link className='nav-link' to="/learn">Learn</Link></li>
                <li><Link className='nav-link' to="/about">About</Link></li>
              </ul>
          </div>
          <div className='clear'></div>
        </div>
      </footer>
    );
  }
}

export default (Footer);