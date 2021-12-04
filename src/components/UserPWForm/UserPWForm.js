import react, { useState } from 'react'
import './UserPWForm.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const UserPwForm = () => {

const [values, setValues] = useState(
    {
    email: "",
    password: "",
    confirmpassword: "",
    passwordMatch: false,    
    }
);

const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
}

const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
    
}
const handleConfirmPasswordInputChange = (event) => {
    setValues({...values, confirmpassword: event.target.value})
}
return (

    <div className="UserPWForm-container">
        <div className="UserPWFormHeader">
        Register Email and Password
        </div>
        <div className="form">
        <form className="UserPW-form">
            <input
            onChange={handleEmailChange}
            type="email"
            value={values.email}
            className="form-field"
            placeholder="Enter your Email"
            name="email"
            />
            <br />
            <input
            onChange={handlePasswordInputChange}
            value={values.password}
            className="form-field"
            placeholder="Enter A 7+ character Password"
            name="password"
            type="password"
            />
            <br />
            <input
            onChange={handleConfirmPasswordInputChange}
            value={values.confirmpassword}
            className="form-field"
            placeholder="Confirm Password"
            name="confirmpassword"
            type="password"
            />
            <br />
            <Link to="/question" style={{ textDecoration: 'none'}}> 
            <Button variant="secondary" className="UserPWBtn"> Create New User </Button>
            </Link>
            </form>    
        </div>
    
    </div>
  );

}
export default UserPwForm