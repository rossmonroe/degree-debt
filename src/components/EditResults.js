import React, { Component } from "react";

class EditResults extends Component {
  loanAmount = "45000";
  potentialSalary = "80000";
  repaymentTime = "10";
  monthlyPayment = "265";

  state = {
    value: this.props.value,
    id: this.props.key,
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
        <input type="text" defaultValue={this.state.value} ref="theTextInput" />
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
    return <div className="edit-text">{this.state.value}</div>;
  };

  render() {
    return (
      <div className="editable-amount">
        <h4>
          <strong>{this.props.id}: </strong>
        </h4>
        {this.state.isInEditMode
          ? this.rednerEditView()
          : this.renderDefaultView()}
        <span className="results-edit-link" onClick={this.changeEditMode}>
          Edit
        </span>
      </div>
    );
  }
}

export default EditResults;
