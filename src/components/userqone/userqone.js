import react, { useState } from 'react'
import MCrisk from '../MCrisk/MCrisk.js';
import './userqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Userqone = () => {

  const [values, setValues] = useState(
    {
    goal: "",
    horizon: "",
    name: "",   
    }
);

const handleGoalChange = (event) => {
    setValues({...values, goal: event.target.value})
}
const handleHorizonChange = (event) => {
    setValues({...values, horizon: event.target.value})
}
const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
}

return (
  <form>
 <div className="mccontainer"> 
 <div className="question"> 
 1. What is your risk tolerance for this portfolio?
 </div> 
   <MCrisk />
   <div className="question">
  2. What is your investment goal?
  </div>
 <input
            onChange={handleGoalChange}
            value={values.goal}
            className="formfield"
            placeholder="Enter the amount in $"
            name="goal"
  />
  <div className="question">
    3. What is your investment horizon?
    </div>
    <input
            onChange={handleHorizonChange}
            value={values.horizon}
            className="formfield"
            placeholder="Enter the horizon in years"
            name="horizon"
  />
  <div className="question">
   4. What would you like to name this portfolio? 
    </div>
  <input
            onChange={handleNameChange}
            value={values.name}
            className="formfield"
            placeholder="Enter a portfolio name"
            name="name"
  />
  <Link to="/" style={{ textDecoration: 'none' }}> 
<Button variant="secondary" className="pBtn"> Create Portfolio </Button>
</Link>
</div>
 </form>
  );

}
export default Userqone