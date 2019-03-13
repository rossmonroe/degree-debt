import React, { Component } from "react";

import "../style/css/Global.css";

import "../../node_modules/react-vis/dist/style.css";
import EditAmount from "../components/EditAmount.js";
import EditResults from "../components/EditResults";

import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

import { Link } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";

class Results extends Component {
  loanAmount = "45000";
  potentialSalary = "80000";
  repaymentTime = "10";
  monthlyPayment = "265";

  degreeType = "Masters Degree";
  major = "Computer Science";
  tuitionType = "In State";
  tuitionPaid = "$8,000";

  state = {
    amounts: [
      { id: "Loan Amount", value: this.loanAmount },
      { id: "Potential Salary", value: this.potentialSalary },
      { id: "Repayment Time", value: this.repaymentTime },
      { id: "Monthly Payment", value: this.monthlyPayment }
    ],
    results: [
      { id: "Degree Type", value: this.degreeType },
      { id: "Major", value: this.major },
      { id: "Tuition Type", value: this.tuitionType },
      { id: "TuitionPaid", value: this.tuitionPaid }
    ]
  };

  render() {
    const data1 = [
      { x: 0, y: 0 },
      { x: 1, y: 14 },
      { x: 2, y: 25 },
      { x: 3, y: 42 },
      { x: 4, y: 44 }
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
            <Link to="/#calculator">
              <button class="button">Edit</button>
            </Link>

            <div class="chart">
              <div className="chart-header">
                <h4>Loan Accumulation During School</h4>
                <EditAmount
                  key={this.state.amounts[0].id}
                  value={this.state.amounts[0].value}
                  id={this.state.amounts[0].id}
                />
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
                <EditAmount
                  key={this.state.amounts[1].id}
                  value={this.state.amounts[1].value}
                  id={this.state.amounts[1].id}
                />
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
                  <EditAmount
                    key={this.state.amounts[2].id}
                    value={this.state.amounts[2].value}
                    id={this.state.amounts[2].id}
                  />
                  <EditAmount
                    key={this.state.amounts[3].id}
                    value={this.state.amounts[3].value}
                    id={this.state.amounts[3].id}
                  />
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
