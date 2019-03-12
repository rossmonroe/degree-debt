import React, { Component } from 'react';

import '../style/css/Global.css';

import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

class Results extends Component {
  render() {

    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];



    return (
      <div class='page-wrapper' >
        <div className='separator margin-10'></div>
        <div class='page-content'>
          <h3>Your Results!</h3>

          <XYPlot height={300} width={600}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
        </div>
      </div >
    );
  }
}

export default (Results);