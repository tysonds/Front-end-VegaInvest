import React, { Component, useState, useEffect } from "react";
import './MCrisk.css';
import values from './../UserPWForm/UserPWForm.js'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Updaterisk(input) {
  var risk = {
    'risk_appetite': input
  } 
  const [getPostMessage, setGetPostMessage] = useState({})
  var fullurl='http://127.0.0.1:5000/portfolios/editrisk';
  useEffect(()=>{
  axios.post(fullurl, risk).then(response => {
      setGetPostMessage(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  return(getPostMessage);


}
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
    const blah = Updaterisk(event.target.value)
    console.log(blah)

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