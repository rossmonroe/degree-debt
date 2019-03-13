import React, { Component } from "react";

import "../style/css/Global.css";

import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import StudentDebtCalculator from "./StudentDebtCalculator";

import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';



class Results extends Component {
  loanAmount = "45000";
  potentialSalary = "80000";
  repaymentTime = "10";
  monthlyPayment = "265";

  state = {
    value: "",
    isInEditMode: false
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    });
  };

  rednerEditView = () => {
    return (
      <div>
        <input
          type="number"
          defaultValue={this.state.value}
          ref="theTextInput"
        />
        <button class="button exit" onClick={this.changeEditMode}>
          X
        </button>
        <button class="button ok" onClick={this.updateComponentValue}>
          OK
        </button>
      </div>
    );
  };

  renderDefaultView = amount => {
    return <div className="edit-text">{(this.state.value = amount)}</div>;
  };

  render() {
    const data1 = [
      { x: 0, y: 0 },
      { x: 1, y: 12.5 },
      { x: 2, y: 25 },
      { x: 3, y: 37.5 },
      { x: 4, y: 50 }
    ];

    const data2 = [
      { x: 0, y: 70 },
      { x: 1, y: 80 },
      { x: 2, y: 90 },
      { x: 3, y: 100 },
      { x: 4, y: 110 },
      { x: 5, y: 120 },
      { x: 6, y: 130 },
      { x: 7, y: 140 },
      { x: 8, y: 150 },
      { x: 9, y: 160 }
    ];

    const data3 = [
      { x: 0, y: 50 },
      { x: 1, y: 45 },
      { x: 2, y: 40 },
      { x: 3, y: 35 },
      { x: 4, y: 30 },
      { x: 5, y: 25 },
      { x: 6, y: 20 },
      { x: 7, y: 15 },
      { x: 8, y: 10 },
      { x: 9, y: 5 },
      { x: 10, y: 0 }
    ];

    return (
      <div className="page-wrapper">
        <div className="separator margin-10" />
        <div className="page-content">
          <div className="results-content">
            <h2>Your Results!</h2>
            <h4>
              <strong>Degree Type:</strong> Masters Degree
            </h4>
            <h4>
              <strong>Major:</strong> Computer Science
            </h4>
            <h4>
              <strong>Tuition Type:</strong> In State
            </h4>
            <h4>
              <strong>Tuition Already Paid:</strong> $8,000
            </h4>
            <button class="button">Edit</button>

            <div class="chart">
              <div className="chart-header">
                <h4> Loan Accumulation During School</h4>
                <div className="editable-amount">
                  <div className="edit-link" onClick={this.changeEditMode}>
                    Edit
                  </div>
                  <h4>Total Loans: $</h4>
                  {this.state.isInEditMode
                    ? this.rednerEditView()
                    : this.renderDefaultView(this.loanAmount)}
                </div>
              </div>
              <XYPlot height={300} width={800}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Year" />
                <YAxis title="Money(USD)" />
                <LineSeries data={data1} />
              </XYPlot>
            </div>

            <div class="chart">
              <div className="chart-header">
                <h4>Potential Salary Over Time</h4>
                <div className="editable-amount">
                  <div className="edit-link" onClick={this.changeEditMode}>
                    Edit
                  </div>
                  <h4>Starting: $</h4>
                  {this.state.isInEditMode
                    ? this.rednerEditView()
                    : this.renderDefaultView(this.potentialSalary)}
                </div>
              </div>
              <XYPlot height={300} width={800}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Years" />
                <YAxis title="Money (USD) (in thousands)" />
                <LineSeries data={data2} />
              </XYPlot>
            </div>

            <div class="chart">
              <div className="chart-header">
                <h4>Loan Repayment Over Time </h4>
                <div className="editable-amount">
                  <div className="editable-amount">
                    <div className="edit-link" onClick={this.changeEditMode}>
                      Edit
                    </div>
                    <h4>Repayment Time:&nbsp;</h4>
                    {this.state.isInEditMode
                      ? this.rednerEditView()
                      : this.renderDefaultView(this.repaymentTime)}
                    <h4>&nbsp;Years</h4>
                  </div>
                  <br />
                  <div className="edit-link" onClick={this.changeEditMode}>
                    Edit
                  </div>
                  <h4>Monthly Payment: $</h4>
                  {this.state.isInEditMode
                    ? this.rednerEditView()
                    : this.renderDefaultView(this.monthlyPayment)}
                </div>
              </div>
              <XYPlot height={300} width={800}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Year out of School" />
                <YAxis title="Money(USD)" />
                <LineSeries data={data3} />
              </XYPlot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
