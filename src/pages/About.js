import React, { Component } from 'react';

import '../style/css/Global.css';

import AboutInfo from '../components/AboutInfo.js';
import ScrollableAnchor from 'react-scrollable-anchor';


class About extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <ScrollableAnchor id={'about'}>
        <AboutInfo/>
        </ScrollableAnchor>
        <div className='separator margin-10'></div>
        <div class='page-content'>
        </div>
      </div>
    );
  }
}

export default (About);