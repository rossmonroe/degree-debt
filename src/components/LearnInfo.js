
import React, { Component } from 'react';

import '../style/css/Global.css';


class LearnInfo extends Component {
  render() {
    return (
      <div className='banner aboutColor'>
        <div className='separator'></div>
        <div className="banner-content">
          <h2>Let us help you feel better about student loans.</h2>
          <p>Figuring out how to finance college is one of the most daunting tasks of higher education. We want to help aleviate some of that stress by giving you the right resources so you have a better understanding of what your future may look like. With our debt calculator and this learn page, we hope it can give you all of the necessary tools to get the finances of college figured out.</p>
          <p>The resources below are just a snipped of whats out there, but it will give you a good overview of the loan application process, how loans work, and additional resources if you wish to dive deeper.</p>
        </div>
      </div>
    );
  }
}

export default (LearnInfo);