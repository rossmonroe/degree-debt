import React, { Component } from 'react';

import '../style/css/Global.css';

import LearnInfo from '../components/LearnInfo.js';

class Learn extends Component {
  render() {
    return (
      <div class='page-wrapper'>
        <LearnInfo />
        <div className='separator margin-10'></div>
        <div class='page-content'>
        </div>
      </div>
    );
  }
}

export default (Learn);