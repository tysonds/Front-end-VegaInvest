import React, { Component } from "react";
import './MCempl.css';
class MCempl extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="rad" onChange={this.onChangeValue}>
        <input type="radio" value="Employed" name="employed" /> Employed
        <br />
        <input type="radio" value="Self-employed" name="employed" /> Self-employed
        <br />
        <input type="radio" value="Unemployed" name="employed" /> Unemployed
        <br />
        <input type="radio" value="Retired" name="employed" /> Retired
        <br />
        <input type="radio" value="Student" name="employed" /> Student 
        <br />
      </div>
    );
  }
}

export default MCempl;