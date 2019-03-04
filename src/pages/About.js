import React, { Component } from 'react';

import '../style/css/Global.css';


class About extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <div className='separator margin-10'></div>
        <div class='page-content'>
          <h3>About</h3>
          <p> DegreeDebt is a service to help provide you with information on your potential college debt. Our goal is to avoid any surprises and set you up for sucess in college and post-graduation.
            Ideally, we will be able to help you make an informed decision on which college to attend and which degree will help you achieve your financial needs. In order to get the most out of
            DegreeDebt you will need to input the following data to help us:
          </p>
        </div>
      </div>
    );
  }
}

export default (About);