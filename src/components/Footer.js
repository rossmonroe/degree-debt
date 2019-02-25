import React, { Component } from 'react';

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
                <li><a className='nav-link' href= '/'>Student Debt Calculator</a></li>
                <li><a className='nav-link' href="/compare">Compare Degrees</a></li>
                <li><a className='nav-link' href="/learn">Learn</a></li>
                <li><a className='nav-link' href="/about">About</a></li>
              </ul>
          </div>
          <div className='clear'></div>
        </div>
      </footer>
    );
  }
}

export default (Footer);