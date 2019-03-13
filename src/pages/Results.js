import React, { Component } from 'react';

import '../style/css/Global.css';

import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

class Results extends Component {

  state={
    value: "45000",
    isInEditMode: false
  }

  changeEditMode = () => {
      this.setState({
          isInEditMode: !this.state.isInEditMode
      })
  }

  updateComponentValue = () => {
    this.setState({
        isInEditMode: false,
        value: this.refs.theTextInput.value
    })
  }

  rednerEditView = () => {
    return <div>
    <input 
      type="number" 
      defaultValue={this.state.value}
      ref="theTextInput"
      />
    <button class="button exit" onClick={this.changeEditMode}>X</button>
    <button class="button ok" onClick={this.updateComponentValue}>OK</button>
    </div>
  }

  renderDefaultView = () => {
    return <div className="edit-text" onDoubleClick={this.changeEditMode}>
      {this.state.value}
    </div>
  }

  render() {
    const data1 = [
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


    const data2 = [
      { x: 0, y: 70000 },
      { x: 1, y: 80000 },
      { x: 2, y: 90000 },
      { x: 3, y: 100000 },
      { x: 4, y: 110000 },
      { x: 5, y: 120000 },
      { x: 6, y: 130000 },
      { x: 7, y: 140000 },
      { x: 8, y: 150000 },
      { x: 9, y: 160000 }
    ];

    const data3 = [
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
      <div className='page-wrapper' >
        <div className='separator margin-10'></div>
        <div className='page-content'>
          <h3>Your Results!</h3>
          
          <div className='chart'>
            <div className="char-header">
              <h4>Loan Accumulation During School</h4>
              <div className="editable-amount">
                <div className="edit-link" onClick={this.changeEditMode}>Edit</div>
                {this.state.isInEditMode ?
                this.rednerEditView() :
                this.renderDefaultView()}
              </div>
            </div>
            <XYPlot height={300} width={800}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data1} />
            </XYPlot>
          </div>

          <div className='chart'>
            <h4> Potential Salary Over Time (in thousands)</h4>
            <XYPlot height={300} width={800}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis title="Years" />
              <YAxis title="Money (USD)" />
              <LineSeries data={data2} />
            </XYPlot>

          </div>

          <div className='chart'>
            <h4> Projected Loan Payment Over Time</h4>
            <XYPlot height={300} width={800}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data3} />
            </XYPlot>
          </div>

        </div>
      </div >
    );
  }
}

export default (Results);