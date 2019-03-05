import React, { Component } from 'react';

import '../style/css/Global.css';

import AboutInfo from '../components/AboutInfo.js';

class Learn extends Component {
  render() {
    return (
      <div class='page-wrapper'>
        <AboutInfo />
        <div className='separator margin-10'></div>
        <div class='page-content'>
        </div>
      </div>
    );
  }
}

export default (Learn);