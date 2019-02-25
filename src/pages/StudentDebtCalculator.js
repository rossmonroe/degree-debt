import React, { Component } from 'react';

import '../style/css/Global.css';

import HeroImage from '../components/HeroImage.js';


class StudentDebtCalculator extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <HeroImage/>
        <div className='separator'></div>
        <div className='page-content'>
          <div id="debt-calculator">
          <h3>Student Debt Calculator:</h3>
          <div className='opacity-50 separator margin-10'></div>
            <form method="get" action="#" className="form-input">
                <p>Degree Type:</p>
                <input name="q" size="40" type="text" placeholder="Graduate Degree"/>
                <p>Major:</p>
                <input name="q" size="40" type="text" placeholder="Electrical Engineering"/>
                <p>Tuition Paid: <sub>(Scholarships, Cash, Grants.. etc.)</sub></p>
                <input name="q" size="40" type="text" placeholder="$8,000"/>
                <input type="submit" className='button' value="Calculate" />
                <div className='clear'></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default (StudentDebtCalculator);