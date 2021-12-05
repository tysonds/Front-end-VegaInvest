import React, { Component, useState, useEffect } from "react";
import './MCrisk.css';
import values from './../UserPWForm/UserPWForm.js'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


class MCrisk extends Component {
  
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
        <input type="radio" value="high" name="risk" /> High, bring it on! {values.email}
        <br />
        <input type="radio" value="medium" name="risk" /> Moderate, some risk for some reward.
        <br />
        <input type="radio" value="low" name="risk" /> Low, losing money makes me squirm.
        <br /> 
      </div>
    );
  }
}

export default MCrisk;