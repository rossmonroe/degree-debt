import React, { Component } from "react";
import axios from "axios";
import Debtcalculator from "../pages/StudentDebtCalculator";

import "../style/css/Global.css";

const APIkey = "IMaTKL2rIXRPIfFx1Mdww30Io7uG8KsYb5JF3aEm";
const API =
  "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" +
  APIkey +
  "&";

class Autofill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchSchoolNames: {
        schoolname: []
      }
    };
    this.fetchUser = this.fetchUser.bind(this);
  }

  fetchUser() {
    axios
      .get(API + "_fields=school.name&_sort=school.name")
      .then(response => {
        console.log("response", response);
        this.setState({
          fetchSchoolNames: response.data
        });
        console.log("fetchUser", this.state.fetchSchoolNames);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <input placeholder="Enter in a School Name" />
        <button onClick={this.fetchUser}>Search</button>
        <Debtcalculator schoolName={this.state.fetchSchoolNames.schoolname} />
      </div>
    );
  }
}

export default Autofill;
