import React, { Component } from "react";
import { CardColumns } from "react-bootstrap";

class EditAmount extends Comment{
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
            <button className="button exit" onClick={this.changeEditMode}>
              X
            </button>
            <button className="button ok" onClick={this.updateComponentValue}>
              OK
            </button>
          </div>
        );
      };
    
      renderDefaultView = amount => {
        return <div className="edit-text">{this.state.value[0]}</div>;
      };
    
      renderChartAmount = amount => {
        this.state.isInEditMode
          ? this.rednerEditView()
          : this.renderDefaultView(this.state.value);
      };
    return (
        {this.state.isInEditMode
            ? this.rednerEditView()
            : this.renderDefaultView(this.state.value)}
      );

}


export default EditAmount;