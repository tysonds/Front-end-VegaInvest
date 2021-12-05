import react, { useState ,useEffect} from 'react'
import MCrisk from '../MCrisk/MCrisk.js';
import './userqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Navigate, useLocation } from 'react-router-dom'

const Userqone = (values) => {
  const value=  useLocation().state.values.email
  const [pvalues, setpvalues] = useState(
    {
    amount_invest: "",
    goal: "",
    horizon: "",   
    }
);

const handleGoalChange = (event) => {
    setpvalues({...pvalues, goal: event.target.value})
}
const handleHorizonChange = (event) => {
    setpvalues({...pvalues, horizon: event.target.value})
}
const handleAmountInvestChange = (event) => {
    setpvalues({...pvalues, name: event.target.value})
}

const onChangeMC = (event) => {
      console.log(event.target.value);

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
        <input type="radio" value="low" name="risk" /> Low, losing money makes me squirm.
        <br /> 
      </div>


<div className="question">
   2. How much do you have to invest? 
    </div>
  <input
            onChange={handleAmountInvestChange}
            value={pvalues.amount_invest}
            className="formfield"
            placeholder=  "Enter the Amount in $"
            name="amount_invest"
  />
   <div className="question">
  3. What is your investment goal?
  </div>
 <input
            onChange={handleGoalChange}
            value={pvalues.goal}
            className="formfield"
            placeholder="Enter the Goal in $" 
            name="goal"
  />
  <div className="question">
    4. What is your investment horizon?
    </div>
    <input
            onChange={handleHorizonChange}
            value={pvalues.horizon}
            className="formfield"
            placeholder="Enter the horizon in years"
            name="horizon"
  />
  <Link to="/" style={{ textDecoration: 'none' }}> 
<Button variant="secondary" className="pBtn"> Create Portfolio </Button>
</Link>
</div>
 </form>
  );

}
export default Userqone