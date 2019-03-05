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
            <form method="get" action="#" className="form-input clear">
                <p>Degree Type:</p>
                <input name="q" size="40" type="text" list="degree-types" placeholder="Graduate Degree"/>
                <datalist id="degree-types">
                    <option value="Bachelors Degree"/> 
                    <option value="Red"/> 
                    <option value="Blue"/> 
                    <option value="Yellow"/> 
                    <option value="Orange"/> 
                    <option value="Purple"/> 
                    <option value="Black"/> 
                    <option value="White"/> 
                    <option value="Gray"/> 
                    <option value="Plaid"/> 
                </datalist>

                <p>Major:</p>
                <input name="q" size="40" type="text" placeholder="Electrical Engineering"/>
                <p>Tuiton Type:</p>
                <ul className="radio-buttons">
                  <li>
                    <input type="radio" id="I-option" name="selector"/>
                    <label for="I-option">In State</label>
                    <div class="check"><div class="inside"></div></div>
                  </li>
                  <li>
                    <input type="radio" id="O-option" name="selector"/>
                    <label for="O-option">Out of State</label>
                    <div class="check"><div class="inside"></div></div>
                  </li>
                </ul>
                <p className='clear'>Tuition Paid: <sub>(Scholarships, Cash, Grants.. etc.)</sub></p>
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