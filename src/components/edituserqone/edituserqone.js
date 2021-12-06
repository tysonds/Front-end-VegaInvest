import react, { useState,useEffect } from 'react'
import './edituserqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

const Edituserqone = () => {
const email=  useLocation().state.email;
const [pvalues, setpValues] = useState(
    {
    amount_invest: "10,000",
    goal: "15,000",
    horizon: "5", 
    risk_appetite: "low",  
    }
);

const handleGoalChange = (event) => {
    setpValues({...pvalues, goal: event.target.value})
}
const handleHorizonChange = (event) => {
    setpValues({...pvalues, horizon: event.target.value})
}
const handleAmountInvestChange = (event) => {
    setpValues({...pvalues, name: event.target.value})
}

const onChangeMC = (event) => {
  setpValues({...pvalues, risk_appetite: event.target.value});

}

return (
  <form>
 <div className="mccontainer"> 
 <div className="question"> 
 1. What is your risk tolerance for this portfolio?
 </div> 
   <div className="rad" onChange={onChangeMC}>
        <input type="radio" value="high" name="risk" /> High, bring it on!
        <br />
        <input type="radio" value="medium" name="risk" /> Moderate, some risk for some reward.
        <br />
        <input type="radio" value="low" name="risk" checked="checked" /> Low, losing money makes me squirm.
        <br /> 
      </div>
<div className="question">
   2. How much do you have to invest? 
    </div>
  <input
            onChange={handleAmountInvestChange}
            value={pvalues.amount_invest}
            className="formfield"
            placeholder={pvalues.amount_invest}
            name="amount_invest"
  />
   <div className="question">
  3. What is your investment goal?
  </div>
 <input
            onChange={handleGoalChange}
            value={pvalues.goal}
            className="formfield"
            placeholder={pvalues.goal}
            name="goal"
  />
  <div className="question">
    4. What is your investment horizon?
    </div>
    <input
            onChange={handleHorizonChange}
            value={pvalues.horizon}
            className="formfield"
            placeholder={pvalues.horizon}
            name="horizon"
  />
  <Link to="/dashboard" style={{ textDecoration: 'none' }}> 
<Button variant="secondary" className="pBtn"> Update Portfolio </Button>
</Link>
</div>
 </form>
  );

}
export default Edituserqone