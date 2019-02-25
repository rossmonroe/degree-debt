import React, { Component } from 'react';

import '../style/css/Global.css';


class HeroImage extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='separator'></div>
        <div className='floating-image' id='coffee-cup'></div>
        <div className='floating-image' id='paper-clips'></div>
        <div className="banner-content">
        <h2>What is a student debt calculator?</h2>
        <p>Our student debt calculator gives you estimates on the amount of loans you may need to accept to get through school, what your salary may look like after graduation, and how long you may be paying back your loans.</p>
        <p> We use data from real college graduates who are paying back their student loans. This means our calculator can give you a good picture of what you may encounter after graduation. But please remember this is an estimation tool and your outcome can differ from what we show.</p>
        </div>
      </div>
    );
  }
}

export default (HeroImage);