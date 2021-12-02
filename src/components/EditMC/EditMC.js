import React, { Component } from "react";
import './EditMC.css';
class EditMC extends Component {
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
        <input type="radio" value="High" name="risk" /> High, bring it on!
        <br />
        <input type="radio" value="Moderate" name="risk" /> Moderate, some risk for some reward.
        <br />
        <input type="radio" value="Low" name="risk" /> Low, losing money makes me squirm.
        <br /> 
      </div>
    );
  }
}

export default EditMC;