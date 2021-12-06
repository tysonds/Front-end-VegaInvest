import react, { useState,useEffect } from 'react'
import EditMC from '../EditMC/EditMC.js';
import './edituserqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

const Edituserqone = () => {
const email=  useLocation().state.email;
const [pvalues, setpValues] = useState(
    {
    amount_invest: "",
    goal: "",
    horizon: "",   
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

return (
  <form>
 <div className="mccontainer"> 
 <div className="question"> 
 1. What is your risk tolerance for this portfolio?
 </div> 
   <EditMC />

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