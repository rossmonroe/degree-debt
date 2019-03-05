import React, { Component } from 'react';

import '../style/css/Global.css';

import AboutInfo from '../components/AboutInfo.js';


class About extends Component {
  render() {
    return (
      <div className='page-wrapper'>

        <AboutInfo />
        <div className='separator margin-10'></div>
        <div class='page-content'>
        </div>
      </div>
    );
  }
}

export default (About);