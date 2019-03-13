
import React, { Component } from 'react';

import '../style/css/Global.css';


class AboutInfo extends Component {
  render() {
    return (
      <div className='banner  aboutColor'>
        <div className='separator'></div>
        <div className="banner-content">
          <div className="bannerText">
            <h2>About DebreeDebt and How it Came to Be</h2>
            <p>DegreeDebt is a service to provide you with information on your potential college debt. Our aim is to help you avoid any surprises and set you up for sucess in college and post-graduation.
            With DegreeDebt, you will be able to make an informed decision on which college to attend and which degree will help you achieve your financial needs. </p>

            <h3> Research Process </h3>
            <p> To bring you the best possible product, our team conducted extensive user research to devlop a useful and intuitive final product. In our research we conducted multiple user interviews
              collected survey results, and developed personas and user flows. </p>

            <h3> Design and Testing </h3>
            <p> After finalizing what we wanted to incorporate into our design we created wireframes, a wireflow and high fidelity mockups of our design.
              To test our designs along the way we tested our information architecture with card sorting tests and created heat maps through our A/B testing.
            </p>

            <h3> <b>The Result!</b></h3>
            <p> This extensive process was all completed in order to bring you the best possible result. We hope you enjoy our website and would appreciate any feedback.
              Feel free to rech out to us at daianak@uw.edu or ross@uw.edu.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default (AboutInfo);