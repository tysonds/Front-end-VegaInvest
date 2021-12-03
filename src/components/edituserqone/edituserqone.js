import react, { useState } from 'react'
import EditMC from '../EditMC/EditMC.js';
import './edituserqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Edituserqone = () => {

  const [values, setValues] = useState(
    {
    amount_invest: "",
    goal: "",
    horizon: "",   
    }
);

const handleGoalChange = (event) => {
    setValues({...values, goal: event.target.value})
}
const handleHorizonChange = (event) => {
    setValues({...values, horizon: event.target.value})
}
const handleAmountInvestChange = (event) => {
    setValues({...values, name: event.target.value})
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
            value={values.amount_invest}
            className="formfield"
            placeholder={values.amount_invest}
            name="amount_invest"
  />
   <div className="question">
  3. What is your investment goal?
  </div>
 <input
            onChange={handleGoalChange}
            value={values.goal}
            className="formfield"
            placeholder={values.goal}
            name="goal"
  />
  <div className="question">
    4. What is your investment horizon?
    </div>
    <input
            onChange={handleHorizonChange}
            value={values.horizon}
            className="formfield"
            placeholder={values.horizon}
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