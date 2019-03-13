import React, { Component } from 'react';

import '../style/css/Global.css';

import HeroImage from '../components/HeroImage.js';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'



class StudentDebtCalculator extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <HeroImage />
        <div className='separator'></div>
        <div className='page-content'>
          <div id="debt-calculator">
            <ScrollableAnchor id={'calculator'}>
              <h3>Student Debt Calculator:</h3>
            </ScrollableAnchor>
            <div className='opacity-50 separator margin-10'></div>
            <form method="get" action="#" className="form-input clear" onSubmit={this.submitFormHandler}>
              <label>Degree Type:</label>
              <input name="q" size="40" type="text" autocomplete='off' list="degree-types" placeholder="Graduate Degree" ref='DegreeTypes' />
              <datalist id="degree-types">
                <option value="Bachelors Degree" />
                <option value="Associates Degree" />
                <option value="Masters Degree" />
                <option value="PHD" />
              </datalist>

              <label>Major:</label>
              <input name="q" size="40" type="text" autocomplete='off' list="major" placeholder="Electrical Engineering" ref='Major' />
              <datalist id="major">
                <option value="Human Centered Design and Engineering" />
                <option value="Computer Science" />
                <option value="Informatics" />
                <option value="Interaction Design" />
                <option value="English" />
                <option value="Geography" />
                <option value="Aerospace Engineering" />
              </datalist>
              <label class="margin-10">Tuiton Type:</label>
              <ul className="radio-buttons">
                <li>
                  <input type="radio" id="in-state" name="selector" ref='TutionType' />
                  <label for="in-state">In State</label>
                  <div class="check"><div class="inside"></div></div>
                </li>
                <li>
                  <input type="radio" id="out-of-state" name="selector" />
                  <label for="out-of-state">Out of State</label>
                  <div class="check"><div class="inside"></div></div>
                </li>
              </ul>
              <label className='clear'>Tuition Paid: <sub>(Scholarships, Cash, Grants.. etc.)</sub></label>
              <input name="q" size="40" autocomplete='off' type="text" placeholder="$8,000" ref='TuitionPaid' />
              <Link to="/results#results"><input type="submit" className='button' value="Calculate" /></Link>
              <div className='clear'></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default (StudentDebtCalculator);